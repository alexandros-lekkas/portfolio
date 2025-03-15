import { cache } from "react";

import { LinkedInProfile } from "@/types/proxycurl";

import { Hero } from "./hero";
import { Work } from "./work";
import { Education } from "./education";
import { Projects } from "./projects";
import { Skills } from "./skills";

const PROXYCURL_API_KEY = process.env.PROXYCURL_API_KEY;

const fetchLinkedInProfile = cache(
  async (): Promise<LinkedInProfile | null> => {
    try {
      const response = await fetch(
        "https://nubela.co/proxycurl/api/v2/linkedin?linkedin_profile_url=https://linkedin.com/in/alexandros-lekkas&use_cache=if-present",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${PROXYCURL_API_KEY}`,
          },
          next: { revalidate: 1209600 },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch LinkedIn profile: ${response.statusText}`);
      }

      const data = await response.json();

      return data as LinkedInProfile;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
);

export async function Portfolio() {
  const linkedInProfile = await fetchLinkedInProfile();

  return (
    linkedInProfile && (
      <>
        <Hero linkedInProfile={linkedInProfile} />
        <Work linkedInProfile={linkedInProfile} />
        <Education linkedInProfile={linkedInProfile} />
        <Skills />
        <Projects />
      </>
    )
  );
}
