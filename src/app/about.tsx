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
                className="cursor-none bg-foreground p-2 text-background rounded-lg"
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
          className="rounded-full size-86 aspect-square"
        />
      </div>
    </>
  );
}
