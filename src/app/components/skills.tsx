import { BlurFade } from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { LinkedInProfile } from "@/types/proxycurl";

const BLUR_FADE_DELAY = 0;

const data = {
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Deno",
    "Python",
    "Java",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "SQLite",
    "SQL",
    "Supabase",
  ],
};

export function Skills({ linkedInProfile }: { linkedInProfile: LinkedInProfile }) {
  return (
    linkedInProfile.
    <section id="skills">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill, id) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
