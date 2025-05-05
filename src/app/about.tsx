import Image from "next/image";

import { GithubIcon, LinkedinIcon } from "lucide-react";

const links = [
  {
    name: "LinkedIn",
    icon: <LinkedinIcon />,
    url: "https://www.linkedin.com/in/alexandros-lekkas/",
  },
  {
    name: "GitHub",
    icon: <GithubIcon />,
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
      <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-4">
          <h2 className="text-3xl font-bold">Hi, I'm Alexandros 👋</h2>

          <div className="flex flex-wrap gap-2">
            {links.map((link) => (
              <a
                href={link.url}
                key={link.name}
                className="sm:cursor-none bg-foreground dark:bg-neutral-800 p-2 text-background dark:text-neutral-300 rounded-lg"
              >
                {link.icon}
              </a>
            ))}
          </div>
          </div>

          <p className="text-lg font-semibold">
            Computer Science @ University of Chicago | Aspiring Entrepreneur &
            Software Engineer
          </p>

          <div className="flex flex-wrap gap-1 mb-2">
            {skills.map((skill) => (
              <span key={skill} className="text-xs lg:text-sm text-slate-100 bg-slate-800 dark:bg-foreground dark:text-background rounded-full font-semibold px-3 py-1">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <Image
          src="/images/me.jpg"
          alt="me"
          width={175}
          height={175}
          className="rounded-full size-48 md:size-56 lg:size-64 aspect-square ring-4 ring-neutral-100 dark:ring-neutral-800"
        />
      </div>
    </>
  );
}
