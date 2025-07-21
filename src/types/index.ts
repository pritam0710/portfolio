// Personal Information Types
export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
}

// Social Links
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

// Skills
export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

// Experience
export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  type: 'full-time' | 'internship' | 'contract';
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
}

// Education
export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade?: string;
  details?: string[];
}

// Contact Form
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Animation Types
export interface AnimationVariant {
  initial: object;
  animate: object;
  transition?: object;
}

// Navigation
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
}

// CTA Buttons
export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  download?: boolean;
}

// Portfolio Data Structure
export interface PortfolioData {
  personalInfo: PersonalInfo;
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
} 