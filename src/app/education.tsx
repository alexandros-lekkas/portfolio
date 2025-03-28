import { ResumeCard } from "@/components/data/resume-card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { FormatDate } from "@/lib/utils/common";
import { LinkedInProfile } from "@/types/proxycurl";

export function Education({
  linkedInProfile,
}: {
  linkedInProfile: LinkedInProfile;
}) {
  return (
    <section id="education">
      <BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          {linkedInProfile.education.map((education, id) => (
            <ResumeCard
              key={education.school}
              href={education.school_linkedin_profile_url}
              logoUrl={education.logo_url}
              altText={education.school}
              title={education.school}
              subtitle={education.degree_name ? education.degree_name : ""}
              period={`${FormatDate(education.starts_at!)} - ${
                education.ends_at
                  ? `${FormatDate(education.ends_at)}`
                  : "Present"
              }`}
            />
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
