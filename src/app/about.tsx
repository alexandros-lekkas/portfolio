import Image from "next/image";

import { GithubIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";

const skills = [
  "Java",
  "Python",
  "C",
  "JavaScript",
  "TypeScript",
  "FastAPI",
  "Flask",
  "Django",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Bun",
  "Deno",
  "SQL",
  "Postgres",
  "Supabase",
  "Git",
];

const experiences = [
  {
    logo: "/images/orgs/plum.png",
    name: "Software Development Intern",
    company: "Plum",
    description: [
      "Enhanced AI performance by experimenting with embedding-based matching and LLM integrations.",
      "Collaborated on the development of an AI assistant for shipping calculation and risk analysis using Python, FastAPI, and Langchain, under the mentorship of a senior Backend Engineer.",
      "Streamlined team workflow by developing internal software in Budibase, transitioning the team from manual spreadsheet management to a more efficient system.",
    ],
    startDate: "Sep 2024",
    endDate: "Sep 2024",
  },
  {
    logo: "/images/orgs/hagobuy.webp",
    name: "Affiliate Marketer (L5/5)",
    company: "HagoBuy",
    description: [
      "Generated over $150,000 in just 3 months, significantly expanding the platform’s presence in Greece.",
      "Acquired over 5,500 users through data-driven marketing and content creation strategies, leveraging insights to drive successful campaigns.",
    ],
    startDate: "Nov 2023",
    endDate: "Jan 2024",
  },
  {
    logo: "/images/orgs/efood.jpeg",
    name: "Software Development Intern",
    company: "efood",
    description: [
      "Developed an AI recipe generator using Next.js and OpenAI's API, collaborating closely with the Frontend Team lead to refine web development skills and integrate project features effectively.",
      "Awarded the internship after winning the 2022 StCatsHacks Hackathon, where I built the original AI recipe generator that utilized users’ leftovers.",
    ],
    startDate: "Jul 2024",
    endDate: "Aug 2024",
  },
];

const links = [
  {
    name: "LinkedIn",
    icon: <LinkedinIcon />,
    color: "bg-blue-500",
    url: "https://www.linkedin.com/in/alexandros-lekkas/",
  },
  {
    name: "GitHub",
    icon: <GithubIcon />,
    color: "bg-neutral-800 dark:bg-neutral-700",
    url: "https://github.com/alexandros-lekkas",
  },
  {
    name: "YouTube",
    icon: <YoutubeIcon />,
    color: "bg-red-500",
    url: "https://www.youtube.com/channel/UCybWOyimQ1IH4fA3w_2NbAQ/",
  }
];

export function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Hi, I'm Alexandros 👋</h2>

          <p className="text-lg font-semibold">
            Computer Science @ University of Chicago | Aspiring Entrepreneur &
            Software Engineer
          </p>

          <h3 className="text-xl font-bold">Skills 💻</h3>
          <div className="flex flex-wrap gap-1 mb-2">
            {skills.map((skill) => (
              <span key={skill} className="text-xs lg:text-sm text-slate-100 bg-slate-800 dark:bg-foreground dark:text-background rounded-full font-semibold px-3 py-1">
                {skill}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold">Experience 💼</h3>
          <div className="flex flex-col gap-3">
            {experiences.map((experience) => (
              <div key={experience.company} className="flex flex-row gap-2 justify-between max-w-2xl p-3 rounded-xl bg-muted transition-all duration-300 hover:ring-4 hover:ring-neutral-200 dark:hover:ring-neutral-700">
                <div className="flex flex-row flex-1 gap-2">
                  <Image src={experience.logo} alt={experience.company} width={256} height={256} className="size-12 sm:size-14 rounded-full flex" />
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold">{experience.name}</p>
                      <p className="text-sm text-muted-foreground">{experience.startDate} to {experience.endDate}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{experience.company}</p>
                    <p className="text-sm mt-2">{experience.description.map((desc, index) => (
                      <p key={index} className="mb-2">• {desc}</p>
                    ))}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row sm:flex-col gap-8 sm:gap-5 items-center">
          <div className="flex justify-center items-center flex-shrink-0">
            <div className="rounded-full ring-4 ring-neutral-200 dark:ring-neutral-800 overflow-hidden size-48 md:size-48 lg:size-56">
              <Image
                src="/images/me.jpg"
                alt="me"
                width={512}
                height={512}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:bg-muted sm:p-3 rounded-xl w-full max-w-48">
            {links.map((link) => (
              <a
                href={link.url}
                key={link.name}
                className={`sm:cursor-none ${link.color} text-white rounded-lg flex flex-row gap-2 px-3 py-2 text-lg font-semibold items-center`}
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
