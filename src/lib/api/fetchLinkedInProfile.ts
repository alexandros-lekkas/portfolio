import fs from "fs";
import path from "path";

import { LinkedInProfile } from "@/types/proxycurl";

const cacheDir = path.join(process.cwd(), "cache");
const imagesDir = path.join(cacheDir, "images");
const cacheFilePath = path.join(cacheDir, "linkedinProfileCache.json");
const CACHE_LIFETIME = 14 * 24 * 60 * 60 * 1000;

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

async function downloadImage(url: string, filename: string): Promise<string> {
  const filepath = path.join(imagesDir, filename);

  if (fs.existsSync(filepath)) {
    return `/cache/images/${filename}`;
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Referer: "https://www.linkedin.com/",
      },
    });

    if (!response.ok) {
      console.error(
        `Failed to download image from ${url}: ${response.status} ${response.statusText}`
      );
      return url;
    }

    const buffer = await response.arrayBuffer();
    fs.writeFileSync(filepath, Buffer.from(buffer));
    return `/cache/images/${filename}`;
  } catch (error) {
    console.error(`Error downloading image from ${url}:`, error);
    return url;
  }
}

async function processProfileImages(
  profile: LinkedInProfile
): Promise<LinkedInProfile> {
  const processedProfile = { ...profile };

  if (profile.profile_pic_url) {
    const filename = `profile-${Date.now()}.jpg`;
    processedProfile.profile_pic_url = await downloadImage(
      profile.profile_pic_url,
      filename
    );
  }

  if (profile.background_cover_image_url) {
    const filename = `background-${Date.now()}.jpg`;
    processedProfile.background_cover_image_url = await downloadImage(
      profile.background_cover_image_url,
      filename
    );
  }

  if (profile.education) {
    processedProfile.education = await Promise.all(
      profile.education.map(async (edu) => {
        if (edu.logo_url) {
          const filename = `edu-${edu.school
            .toLowerCase()
            .replace(/\s+/g, "-")}-${Date.now()}.jpg`;
          edu.logo_url = await downloadImage(edu.logo_url, filename);
        }
        return edu;
      })
    );
  }

  if (profile.experiences) {
    processedProfile.experiences = await Promise.all(
      profile.experiences.map(async (exp) => {
        if (exp.logo_url) {
          const filename = `exp-${exp.company
            .toLowerCase()
            .replace(/\s+/g, "-")}-${Date.now()}.jpg`;
          exp.logo_url = await downloadImage(exp.logo_url, filename);
        }
        return exp;
      })
    );
  }

  return processedProfile;
}

async function getCachedProfile(): Promise<LinkedInProfile | null> {
  try {
    if (fs.existsSync(cacheFilePath)) {
      const cachedData = JSON.parse(fs.readFileSync(cacheFilePath, "utf8"));
      if (Date.now() - cachedData.timestamp < CACHE_LIFETIME) {
        return cachedData.profile;
      }
    }
  } catch (error) {
    console.error("Error reading cache:", error);
  }
  return null;
}

async function setCachedProfile(profile: LinkedInProfile) {
  try {
    const cacheData = {
      timestamp: Date.now(),
      profile,
    };
    fs.writeFileSync(cacheFilePath, JSON.stringify(cacheData), "utf8");
  } catch (error) {
    console.error("Error writing cache:", error);
  }
}

export async function fetchLinkedInProfile(): Promise<LinkedInProfile | null> {
  const cachedProfile = await getCachedProfile();
  if (cachedProfile) return cachedProfile;

  const PROXYCURL_API_KEY = process.env.PROXYCURL_API_KEY;
  try {
    const response = await fetch(
      "https://nubela.co/proxycurl/api/v2/linkedin?linkedin_profile_url=https://linkedin.com/in/alexandros-lekkas&use_cache=if-present",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${PROXYCURL_API_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch LinkedIn profile: ${response.statusText}`
      );
    }

    const data = (await response.json()) as LinkedInProfile;
    const processedData = await processProfileImages(data);
    await setCachedProfile(processedData);
    return processedData;
  } catch (error) {
    console.error(error);
    return null;
  }
}
