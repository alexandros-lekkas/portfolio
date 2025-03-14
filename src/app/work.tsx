import { ResumeCard } from "@/components/data/resume-card";
import { BlurFade } from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0;

const data = {
  work: [
    {
      company: "Plum",
      href: "https://withplum.com",
      badges: [],
      location: "On-site",
      title: "Software Development Intern Trainee",
      logoUrl: "/orgs/plum.jpeg",
      start: "Sep 2024",
      end: "Sep 2024",
      description:
        "Enhanced AI assistant performance by experimenting with embedding-based matching and LLM integrations (Langchain, OpenAI), identifying LLMs as optimal for rapid categorization.",
    },
    {
      company: "HagoBuy",
      href: "https://hagobuy.com",
      badges: [],
      location: "Remote",
      title: "Affiliate Marketer (Level 5/5)",
      logoUrl: "",
      start: "Nov 2023",
      end: "Jan 2024",
      description:
        " Generated over $150,000 in revenue for an ecommerce website in just 3 months, significantly expanding the platform’s presence in Greece as a top-performing affiliate.",
    },
    {
      company: "efood",
      href: "https://e-food.gr",
      badges: [],
      location: "On-site",
      title: "Software Development Intern Trainee",
      logoUrl: "/orgs/efood.jpeg",
      start: "Jul 2023",
      end: "Jul 2023",
      description:
        "Developed an AI recipe generator using Next.js and OpenAI's API, collaborating closely with the Frontend Team lead to refine web development skills and integrate project features effectively.",
    },
  ],
};

export function Work() {
  return (
    <section id="work">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {data.work.map((work, id) => (
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
