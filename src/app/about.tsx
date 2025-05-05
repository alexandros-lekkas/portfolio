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

export function About() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-3">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Hi, I'm Alexandros 👋</h2>

          <p className="text-lg font-semibold">
            Computer Science @ University of Chicago | Aspiring Entrepreneur &
            Software Engineer
          </p>

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
