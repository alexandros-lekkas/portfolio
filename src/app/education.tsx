import { ResumeCard } from "@/components/data/resume-card";

const data = {
  education: [
    {
      school: "University of Chicago",
      href: "https://uchicago.edu",
      degree: "Bachelor of Science - BS, Computer Science",
      logoUrl: "/orgs/uchicago.jpeg",
      start: "2024",
      end: "2028",
    },
    {
      school: "St. Catherine's British School, Athens, Greece",
      href: "https://stcatherines.gr",
      degree: "International Baccalaureate (IB)",
      logoUrl: "/orgs/stcats.jpeg",
      start: "2022",
      end: "2024",
    },
  ],
};

export function Education() {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Education</h2>
        {data.education.map((education, id) => (
          <ResumeCard
            key={education.school}
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree}
            period={`${education.start} - ${education.end}`}
          />
        ))}
      </div>
    </section>
  );
}
