import Image from "next/image";

import { GithubIcon, LinkedinIcon } from "lucide-react";

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
    color: "bg-neutral-800",
    url: "https://github.com/alexandros-lekkas",
  },
];

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

export function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-3">
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
        </div>

        <div className="flex flex-col gap-3">
          <Image
            src="/images/me.jpg"
            alt="me"
            width={175}
            height={175}
            className="flex flex-1 rounded-full size-48 md:size-64 lg:size-96 aspect-square ring-4 ring-neutral-100 dark:ring-neutral-800"
          />

          <h3 className="text-xl font-bold">Contact 📧</h3>
          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                href={link.url}
                key={link.name}
                className={`sm:cursor-none ${link.color} text-white rounded-lg flex flex-row gap-2 px-3 py-2 text-lg font-semibold`}
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
