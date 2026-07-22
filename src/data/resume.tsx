import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Jquery } from "@/components/ui/svgs/jquery";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Odoo } from "@/components/ui/svgs/odoo";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Css } from "@/components/ui/svgs/css";
import { Java } from "@/components/ui/svgs/java";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Php } from "@/components/ui/svgs/php";

export const DATA = {
  name: "Rahadyan Ghiffari Jatmiko",
  initials: "Ian",
  url: "https://dillion.io",
  location: "Malang, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "An Odoo programmer who enjoys building systems and helping solve business problems. Always eager to learn and grow.",
  summary:
    "I am an Odoo Programmer experienced in the development, customization, and implementation of Odoo-based ERP systems. I am proficient in working with Python and the Odoo framework to build new modules, integrate systems, and enhance application performance and efficiency to meet business needs.",
    // "I am an Odoo Programmer with experience in developing, customizing, and implementing Odoo-based ERP systems. I am proficient in using Python and the Odoo framework to build custom modules, integrate systems, and enhance application performance and efficiency based on business requirements.",
  avatarUrl: "/me2.png",
  skills: [
    { name: "Odoo", icon: Odoo },
    { name: "Python", icon: Python },
    { name: "HTML", icon: Typescript },
    { name: "CSS", icon: Css },
    { name: "PHP", icon: Php },
    { name: "Java", icon: Java },
    { name: "Jquery", icon: Jquery },
    { name: "Docker", icon: Docker },
    { name: "Postgres", icon: Postgresql },
    { name: "Mysql", icon: Mysql },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rayanjatmiko@gmail.com",
    tel: "+6281351069969",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rayan0087",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahadyan-ghiffari-jatmiko-a524912a",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT. Cendana Teknika Utama",
      href: "https://www.cendana2000.co.id",
      badges: [],
      location: "WFO - Malang, Indonesia",
      title: "Odoo Programmer",
      logoUrl: "/logo_ctu.jpeg",
      start: "April 2024",
      end: "Now",
      description:
        "Developing and implementing Odoo-based front-office and back-office ERP systems, including creating new modules, integrating with third-party applications (BPJS, JKN, SatuSehat, Bank BSI, etc.), conducting client presentations, and performing application maintenance.",
    },
    {
      company: "Freelancer",
      badges: [],
      href: "",
      location: "Dimana Saja",
      title: "Freelance Programmer",
      logoUrl: "/logo_freelancer.jpeg",
      start: "December 2022",
      end: "April 2024",
      description:
        "Working on various full-stack projects using PHP Laravel, including the development of government systems, project troubleshooting, and web application maintenance support.",
    },
    {
      company: "Full Stack Developer",
      href: "",
      badges: [],
      location: "Kantor - Malang, Indonesia",
      title: "Admin Website, Web Programmer",
      logoUrl: "/logo_igra.jpeg",
      start: "August 2020",
      end: "December 2023",
      description:
        "Developed a full-stack web-based e-commerce application using PHP Laravel and JavaScript (jQuery), including MySQL database design, programming workflow development based on requirements, and system migration from CodeIgniter to Laravel.",
    },
  ],
  education: [
    {
      school: "Universitas Terbuka",
      href: "https://www.ut.ac.id",
      degree: "Bachelor's Degree (S1) - Information Systems",
      logoUrl: "/logo_ut.jpeg",
      start: "2020",
      end: "Sekarang",
    },
    {
      school: "SMK Negeri 4 Malang (Grafika)",
      href: "https://smkn4malang.sch.id",
      degree: "Software Engineering (SE)",
      logoUrl: "/logo_grafika.png",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "BPJS Healthkathon 2025",
      dates: "23 - 25 December, 2025",
      location: "Malang, Indoensia",
      description:
        "Developing a JKN mobile simulation application accessible via a website to facilitate the development of application integrations with JKN Mobile.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
