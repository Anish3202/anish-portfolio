export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  architecture?: string[];
  highlights?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface HackathonAchievement {
  badge: string;
  award: string;
  projectName: string;
  description: string;
  impact: string;
  technologies: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration?: string;
  type: string;
  location?: string;
  technologies: string[];
  responsibilities: string[];
  hackathon?: HackathonAchievement;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export interface PhilosophyItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  positioning: string;
  location: string;
  education: {
    degree: string;
    institution: string;
    cgpa: string;
    graduationYear: string;
  };
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}
