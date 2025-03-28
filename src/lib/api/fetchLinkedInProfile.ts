import fs from "fs";
import path from "path";

import { LinkedInProfile } from "@/types/proxycurl";

const cacheDir = path.join(process.cwd(), "cache");
const cacheFilePath = path.join(cacheDir, "linkedinProfileCache.json");
const CACHE_LIFETIME = 14 * 24 * 60 * 60 * 1000;

if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
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

    return (await response.json()) as LinkedInProfile;
  } catch (error) {
    console.error(error);
    return null;
  }
}
