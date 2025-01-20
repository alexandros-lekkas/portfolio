import { Icons } from "@/components/layout/navbar/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alexandros Lekkas",
  initials: "AL",
  url: "https://alexandroslekkas.com",
  location: "Chicago IL / Athens, Greece",
  description:
    "Computer Science Student & UChicago - Aspiring Software Engineer & Entrepreneur",
  summary:
    "As someone passionate about technology, I am always looking for ways to learn and grow. I am a Computer Science student at the University of Chicago, and I am always looking for ways to apply my knowledge in the real world. I am passionate about software engineering, entrepreneurship, and technology in general. I am always looking for ways to learn and grow, and I am always looking for ways to apply my knowledge in the real world.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Deno",
    "Python",
    "Java",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "SQLite",
    "SQL",
    "Supabase",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "alexandros.lekkas@outlook.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/alexandros-lekkas",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexandros-lekkas/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:alexandros.lekkas@outlook.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Plum",
      href: "https://withplum.com",
      badges: [],
      location: "On-site",
      title: "Software Development Intern Trainee",
      logoUrl: "/orgs/plum.jpeg",
      start: "Sep 2024",
      end: "Sep 2024",
      description:
        "Enhanced AI assistant performance by experimenting with embedding-based matching and LLM integrations (Langchain, OpenAI), identifying LLMs as optimal for rapid categorization.",
    },
    {
      company: "HagoBuy",
      href: "https://hagobuy.com",
      badges: [],
      location: "Remote",
      title: "Affiliate Marketer (Level 5/5)",
      logoUrl: "",
      start: "Nov 2023",
      end: "Jan 2024",
      description:
        " Generated over $150,000 in revenue for an ecommerce website in just 3 months, significantly expanding the platform’s presence in Greece as a top-performing affiliate.",
    },
    {
      company: "efood",
      href: "https://e-food.gr",
      badges: [],
      location: "On-site",
      title: "Software Development Intern Trainee",
      logoUrl: "/orgs/efood.jpeg",
      start: "Jul 2023",
      end: "Jul 2023",
      description:
        "Developed an AI recipe generator using Next.js and OpenAI's API, collaborating closely with the Frontend Team lead to refine web development skills and integrate project features effectively.",
    },
  ],

  education: [
    {
      school: "University of Chicago",
      href: "https://uchicago.edu",
      degree: "Bachelor of Science - BS, Computer Science",
      logoUrl: "/orgs/uchicago.jpeg",
      start: "2024",
      end: "2028",
    },
    {
      school: "St. Catherine's British School, Athens, Greece",
      href: "https://stcatherines.gr",
      degree: "International Baccalaureate (IB)",
      logoUrl: "/orgs/stcats.jpeg",
      start: "2022",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "HaulBuy (WIP)",
      href: "https://www.haulbuy.com",
      dates: "Jan 2024 - Feb 2024",
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
      video:
        "",
    },
    {
      title: "IntelPol",
      href: "https://www.haulbuy.com",
      dates: "Jan 2024 - Feb 2024",
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
      video:
        "",
    },
  ],
} as const;
