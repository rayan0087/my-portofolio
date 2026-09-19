import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Jquery } from "@/components/ui/svgs/jquery";
import { Html } from "@/components/ui/svgs/html";
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
    { name: "HTML", icon: Html },
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
      title: "Al Ishaqy Hospital Information Management System",
      href: "#",
      dates: "Apr 2024 - Dec 2024",
      active: true,
      description:
        "The Al Ishaqy Hospital Information Management System is an integrated application designed to support hospital operational processes efficiently and accurately, covering patient registration, medical records, and pharmacy services.",
      technologies: [
        "Odoo",
        "Python",
        "PostgreSQL",
        "XML",
        "CSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/logo_grafika.png",
      // video:"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Muji Rahayu Hospital Information Management System",
      href: "#",
      dates: "Dec 2024 - Now",
      active: true,
      description:
        "The Muji Rahayu Hospital Management System is an integrated application specifically designed to support hospital operational processes efficiently, quickly, and accurately. With this system, all service workflows—ranging from patient registration, medical records, and pharmacy services to management reporting—can be managed within a single platform.",
      technologies: [
        "Odoo",
        "Python",
        "PostgreSQL",
        "XML",
        "CSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/logo_grafika.png",
      // video:"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Integration of Bank BSI and IBS Alhamrah",
      href: "#",
      dates: "Dec 2024 - Dec 2025",
      active: true,
      description:
        "Integration of allowance and tuition fee payments directly via BSI Mobile/ATM to facilitate online payment.",
      technologies: [
        "Odoo",
        "Python",
        "PostgreSQL",
        "XML",
        "CSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/logo_grafika.png",
      // video:"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Unisma Islamic Hospital E-Pharmacy",
      href: "#",
      dates: "Aug 2025 - Dec 2025",
      active: true,
      description:
        "Unisma Islamic Hospital E-Pharmacy is a digital pharmacy management system designed to support hospital pharmacy operations, making them faster, more secure, and integrated. The system assists pharmacy staff in managing prescriptions, medication distribution, and warehouse inventory in real-time.",
      technologies: [
        "Odoo",
        "Python",
        "PostgreSQL",
        "XML",
        "CSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chatcollect.com",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "/logo_grafika.png",
      // video:"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ISHK Tolaram Eye Care Hospital Information Management System",
      href: "#",
      dates: "Dec 2025 - Now",
      active: true,
      description:
        "The ISHK Tolaram Eye Care Hospital Management System is an integrated application specifically designed to support hospital operational processes efficiently, quickly, and accurately. With this system, all service workflows—ranging from patient registration, medical records, and pharmacy services to management reporting—can be managed within a single platform.",
      technologies: [
        "Odoo",
        "Python",
        "PostgreSQL",
        "XML",
        "CSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/logo_grafika.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "ERP System PT. Aneka Jasa Grahdika",
      href: "#",
      dates: "Feb 2026 - Now",
      active: true,
      description:
        "The implementation of the Odoo ERP system supports PT Aneka Jasa Grahdika’s business processes, encompassing accounting, inventory, sales, and operational management modules within a single integrated platform. This solution enables the company to manage data in real-time, streamline inter-departmental workflows, and enhance efficiency and accuracy in business decision-making.",
      technologies: [
        "Odoo",
        "Python",
        "PostgreSQL",
        "XML",
        "CSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/logo_grafika.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Sistem ERP PT. Graha Cipta Sejahtera",
      href: "#",
      dates: "June 2026 - Now",
      active: true,
      description:
        "PT Graha Cipta Sejahtera also implemented Odoo ERP to optimize its business processes, integrating modules for accounting, inventory, sales, and operational management into a single system. This implementation enables real-time data management, streamlines inter-departmental coordination, and enhances efficiency and accuracy in business decision-making.",
      technologies: [
        "Odoo",
        "Python",
        "PostgreSQL",
        "XML",
        "CSS",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://llm.report",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/logo_grafika.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    
  ],
  hackathons: [
    {
      title: "BPJS Healthkathon 2025",
      dates: "23 - 25 December, 2025",
      location: "Malang, Indonesia",
      description:
        "Developing a JKN mobile simulation application accessible via a website to facilitate the development of application integrations with JKN Mobile.",
      image: "/logo_bpjs.png",
      // mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
