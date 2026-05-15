import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  git,
  docker,
  python,
  bash,
  cloudflare,
  kubernetes,
  jenkins,
  nginx,
  ansible,
  mysql,
  gitlabci,
  githubactions,
  linux,
  intern,
  homeCloudServer,
  gamingSystemMonitor,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Cloud & DevOps Engineer",
    icon: backend,
  },
  {
    title: "Linux Systems Builder",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
  {
    title: "Infrastructure Automator",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "Cloudflare",
    icon: cloudflare,
  },
  {
    name: "Ansible",
    icon: ansible,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub Actions",
    icon: githubactions,
  },
  {
    name: "GitLab CI",
    icon: gitlabci,
  },
];

const experiences: TExperience[] = [
  {
    title: "Co-Founder",
    companyName: "NESTFIX (Home Services Platform)",
    icon: web,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Co-founded NESTFIX, a platform designed to connect users with trusted professionals for daily home services such as cleaning, maintenance, and basic household tasks",
      "Developed the web application using HTML, CSS, JavaScript, and Node.js, focusing on performance and usability",
      "Built core features including user interface, service listings, and request handling system",
      "Designed backend logic for managing user requests and service workflows",
      "Worked on structuring the platform for scalability and real-world usage",
      "Faced challenges in user acquisition, execution, and scaling operations, leading to project discontinuation",
      "Gained practical experience in full-stack development, product building, and startup execution",
    ],
  },
  {
    title: "Intern — AutoCAD & JavaScript",
    companyName: "Compactology Innovations LLP",
    icon: intern,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Designed mechanical components using AutoCAD, converting concepts into accurate technical drawings for real-world use",
      "Developed and contributed to JavaScript-based tools used in internal workflows",
      "Identified and helped resolve a long-standing technical issue, improving workflow efficiency",
      "Collaborated with team members to debug problems and deliver solutions in a production environment",
    ],
  },
];

const testimonials: TTestimonial[] = [

  {
    testimonial:
      "OM worked with us during his internship at Compactology, and one thing that stood out was his problem-solving approach. He helped us resolve an issue that we had been facing for quite some time, and he handled it with patience and logical thinking. He learns quickly and is not afraid to take ownership when something needs to be fixed.",
    name: "Anjali",
    designation: "CEO",
    company: "Compactology Innovations LLP",
  },
];

const projects: TProject[] = [
  {
    name: "Home Cloud Server",
    description:
      "Built a personal self-hosted cloud system from scratch on an old PC. Enabled remote access, file management, and configured Linux server, networking, and storage with a focus on security.",
    tags: [
      {
        name: "linux",
        color: "blue-text-gradient",
      },
      {
        name: "self-hosted",
        color: "green-text-gradient",
      },
      {
        name: "networking",
        color: "pink-text-gradient",
      },
    ],
    image: homeCloudServer,
    sourceCodeLink: "https://github.com/OM0126",
  },
  {
    name: "Gaming System Monitor",
    description:
      "A lightweight CLI tool built with Python & Bash that monitors CPU, RAM, and system performance in real time. Optimized for Linux with minimal resource overhead.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "bash",
        color: "green-text-gradient",
      },
      {
        name: "linux",
        color: "pink-text-gradient",
      },
    ],
    image: gamingSystemMonitor,
    sourceCodeLink: "https://github.com/OM0126",
  },
];

export { services, technologies, experiences, testimonials, projects };
