import { fetchLinkedInProfile } from "@/lib/api/fetchLinkedInProfile";

import { Hero } from "./hero";
import { Work } from "./work";
import { Education } from "./education";
import { Skills } from "./skills";
import { Projects } from "./projects";

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
