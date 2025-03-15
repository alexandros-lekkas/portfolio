import { ProjectCard } from "@/components/data/project-card";
import { Icons } from "@/components/layout/navbar/icons";
import { BlurFade } from "@/components/magicui/blur-fade";

const data = {
  projects: [
    {
      title: "HaulBuy (WIP)",
      href: "https://www.haulbuy.com",
      dates: "Jan 2024 - Present",
      active: true,
      description:
        "Currently developing a new ecommerce sourcing platform, allowing users to source products from China they otherwise couldn't. Currently building the client side with WeWeb and the administation panel with Next.js.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Supabase",
        "WeWeb",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.haulbuy.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.gyazo.com/e90d05154e6502af22d53d708e9d7d83.gif",
      video: "",
    },
    {
      title: "IB Internal Assessment - Valuator",
      href: "https://github.com/alexandros-lekkas/ib-ia-valuator",
      dates: "2023",
      active: true,
      description:
        "A program to calculate company values and simulate mergers, an IB Internal Assessment project.",
      technologies: [
        "Java",
        "Java Swing",
        "Waterfall Development",
        "Stakeholder Management",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/alexandros-lekkas/ib-ia-valuator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://i.gyazo.com/04fbe60b5092b18fa76373c8a867c472.gif",
      video: "",
    },
    {
      title: "IB EE - OpenCV Facial Recognition",
      href: "https://github.com/alexandros-lekkas/ibee-opencv-facial-recognition",
      dates: "2023",
      active: true,
      description:
        "Legacy facial recognition using the OpenCV library. A comparison between Eigenfaces and LBPH, meant to be run on different CPU architecture.",
      technologies: ["Python", "OpenCV", "Machine Learning"],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/alexandros-lekkas/ibee-opencv-facial-recognition",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
};

export function Projects() {
  return (
    <section id="projects">
      <BlurFade>
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                My Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {data.projects.map((project, id) => (
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
