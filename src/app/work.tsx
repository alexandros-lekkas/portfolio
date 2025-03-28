import { ResumeCard } from "@/components/data/resume-card";
import { BlurFade } from "@/components/magicui/blur-fade";

import { FormatDate } from "@/lib/utils/common";

import { LinkedInProfile } from "@/types/proxycurl";

export function Work({
  linkedInProfile,
}: {
  linkedInProfile: LinkedInProfile;
}) {
  return (
    <section id="work">
      <BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {linkedInProfile.experiences.map((work, id) => (
            <ResumeCard
              key={`${id}-${work.company}`}
              logoUrl={work.logo_url}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.company_linkedin_profile_url}
              period={`${FormatDate(work.starts_at!)} - ${
                work.ends_at ? `${FormatDate(work.ends_at)}` : "Present"
              }`}
              description={work.description}
            />
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
