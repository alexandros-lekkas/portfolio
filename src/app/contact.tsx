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

export function Contact() {
  return (
    <>
      <h2 className="text-3xl font-bold">Contact Me ✉️</h2>

      <p className="text-lg font-semibold">
        Get in touch with me via one of my social media platforms!
      </p>

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
    </>
  );
}
