import Image from "next/image";

// Expected image size: 1280x720 (ratio: 16:9)
const projects = [
  {
    coverImage: "/images/projects/1.gif",
    name: "Brain Builder 🧠",
    description:
      "A web app that helps you build AI agents brains. Built in collaboration with SimcareAI, a YC backed startup.",
    link: "https://github.com/username/project1",
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

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col gap-2 bg-muted transition-all duration-300 hover:ring-4 ring-neutral-200 dark:ring-neutral-700 rounded-xl p-3"
          >
            <Image
              src={project.coverImage}
              alt={project.name}
              width={1280}
              height={720}
              className="aspect-video rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
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
        ))}
      </div>
    </>
  );
}
