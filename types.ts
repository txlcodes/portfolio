export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  techStack: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface ProjectItem {
  name: string;
  description: string;
  status: 'Live' | 'Development' | 'Archived';
  link: string;
  githubLink?: string;
  techStack: string[];
  meta: {
    deployment: string;
    year: string;
    role: string;
  };
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}