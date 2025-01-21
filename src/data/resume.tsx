import { Icons } from "@/components/layout/navbar/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Alexandros Lekkas",
  initials: "AL",
  url: "https://alexandroslekkas.com",
  location: "Chicago IL / Athens, Greece",
  description:
    "CS Student @ UChicago - Aspiring Software Engineer & Entrepreneur",
  summary:
    "I'm a Computer Science student at the University of Chicago, passionate about combining software development with entrepreneurship.",
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
} as const;
