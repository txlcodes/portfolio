import { ExperienceItem, ProjectItem, SocialLink } from './types';

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/txlcodes', username: '@txlcodes' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', username: 'Talha Nawaz' }, // Placeholder URL
  { platform: 'Email', url: 'mailto:talha@example.com', username: 'talha@example.com' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Atlassian",
    role: "Full Stack Developer",
    location: "Bangalore (Hybrid)",
    period: "Jul 2023 – Nov 2025",
    description: "Developed and optimized microservices for Jira Software, building scalable backend systems that power issue management, search, notifications, and insights for 100K+ monthly active users.",
    achievements: [
      "Developed and optimized TypeScript + Node.js microservices for Jira Software",
      "Designed REST & GraphQL APIs powering issue creation, search, notifications & insights",
      "Implemented RBAC, OAuth2, and JWT authentication",
      "Reduced API latency by 40% and lowered server load by 25%",
      "Built real-time features using WebSockets & Redis Pub/Sub",
      "Deployed scalable infrastructure using Docker, Kubernetes & AWS ECS",
      "Improved CI/CD reliability, reducing deployment incidents by 30%",
      "Contributed to features impacting 100K+ monthly users"
    ],
    techStack: [
      "TypeScript", "Node.js", "GraphQL", "REST API", "Docker", "Kubernetes", "AWS ECS", "Redis", "WebSockets"
    ],
    stats: [
      { label: "Duration", value: "2.5 Years" },
      { label: "Location", value: "Bangalore" },
      { label: "Impact", value: "100K+ Users" },
      { label: "Performance", value: "40% Latency ↓" }
    ]
  },
  {
    company: "PeakAI",
    role: "Full Stack Developer Intern",
    location: "Bangalore",
    period: "Feb 2023 – Jun 2023",
    description: "Played a key role in automating internal workflows and enhancing data acquisition capabilities. Built custom tools and extensions to boost team productivity and operational efficiency.",
    achievements: [
      "Automated Outlook workflows using n8n + Node.js, reducing manual workload by 80%",
      "Built Puppeteer scrapers to extract government portal data reliably",
      "Developed and shipped the PeakAI Chrome Extension (2x productivity)",
      "Built REST APIs powering internal automation pipelines",
      "Worked with MongoDB + Express for dynamic data operations"
    ],
    techStack: [
      "Node.js", "n8n", "Puppeteer", "Chrome Ext", "MongoDB", "Express"
    ],
    stats: [
      { label: "Workload", value: "80% Reduced" },
      { label: "Productivity", value: "2x Boost" }
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    name: "CSMR",
    description: "An academic publishing platform that publishes cutting-edge research in sustainability, innovation, and responsible management practices. It provides peer-reviewed journals, certification programs, and resources for scholars across India.",
    status: "Live",
    link: "https://cfsamr.com/?cache=100000",
    githubLink: "https://github.com/txlcodes",
    techStack: ["Node.js", "Express", "SQLite3", "JWT", "Tailwind"],
    meta: {
      deployment: "Render / Hostinger VPS",
      year: "2025",
      role: "Full Stack Developer"
    }
  }
];

export const TECH_STACK = {
  frontend: ["HTML5", "Tailwind CSS", "JavaScript", "React"],
  backend: ["Node.js", "Express.js", "SQLite3", "PostgreSQL"],
  tools: ["Git", "Render", "VPS", "Docker"]
};