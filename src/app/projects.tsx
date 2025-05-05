import Image from "next/image";
import Link from "next/link";

import { SquareArrowOutUpRightIcon } from "lucide-react";

const projects = [
  {
    coverImage: "/images/projects/1.gif",
    name: "Brain Builder 🧠",
    description:
      "A visual no-code editor for building AI agents brains. Created in collaboration with SimcareAI, a YC backed startup.",
    link: "https://github.com/alexandros-lekkas/brain-builder",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "OpenAI",
      "LangChain",
    ],
  },
];

export function Projects() {
  return (
    <>
      <h2 className="text-3xl font-bold">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link
            key={project.name}
            href={project.link}
            target="_blank"
            className="sm:cursor-none"
          >
            <div className="relative flex flex-col gap-2 bg-muted transition-all duration-300 hover:ring-4 ring-neutral-200 dark:ring-neutral-700 rounded-xl p-3">
              <Image
                src={project.coverImage}
                alt={project.name}
                width={1280}
                height={720}
                className="aspect-video rounded-lg"
              />

              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <h3 className="text-lg font-semibold">{project.name}</h3>

                  <SquareArrowOutUpRightIcon className="size-4" />
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground bg-background rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
