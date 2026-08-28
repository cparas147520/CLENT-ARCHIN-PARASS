export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Mobile' | 'Full-Stack' | 'Open Source' | 'Enterprise';
  featured: boolean;
  coverImage: string;
  mockupScreens: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  architectureHighlights: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  expoSnackUrl?: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    highlight?: boolean;
    iconName?: string;
    description: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  type: 'Full-time' | 'Contract' | 'Freelance' | 'Academic';
  description: string[];
  techStack: string[];
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  highlights: string[];
  gpaOrHonors?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  relation: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  message: string;
}
