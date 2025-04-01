import Image from "next/image";

import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
  MessageSquare,
  LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const data: {
  name: string;
  url: string;
  icon: LucideIcon & { className?: string };
  color: string;
}[] = [
  {
    name: "GitHub",
    url: "https://github.com/alexandros-lekkas",
    icon: Github,
    color: "hover:bg-gray-800 dark:hover:bg-gray-700",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/alexandros-lekkas",
    icon: Linkedin,
    color: "hover:bg-blue-600",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@AlexandrosLekkasCoding?Sub_confirmation=1",
    icon: Youtube,
    color: "hover:bg-red-600",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/aflekkas",
    icon: Instagram,
    color: "hover:bg-pink-600",
  },
  {
    name: "Discord",
    url: "https://discord.gg/ERZbqzSs2A",
    icon: MessageSquare,
    color: "hover:bg-blue-600",
  },
];

export default function LinksPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24 overflow-hidden rounded-full border-2 border-border">
          <Image
            src="/images/me.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Hi! 👋 I'm Alexandros</h1>
          <p className="text-muted-foreground">
            Find me on various social media platforms and professional networks.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {data.map((social) => (
          <Tooltip key={social.name}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                className={`w-full h-16 text-lg rounded-full ${social.color} transition-colors duration-200`}
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <social.icon className="w-6 h-6" />
                  <span>{social.name}</span>
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Visit my {social.name} profile</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
