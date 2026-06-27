export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  website: string;
  linkedin: string;
  github: string;
  twitter: string;
}

export interface Personal {
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  profileImage: string;
  resumeFile: string;
  resumeFileName: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceEntry {
  company: string;
  companyUrl: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
  jobType: 'Remote' | 'On-site';
  location: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  startDate: string;
  endDate: string;
  grade: string;
  courses: string[];
}

export interface ProjectEntry {
  name: string;
  company: string;
  year: string;
  description: string;
  skills: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  date: string;
  description: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface ContentPlatform {
  name: string;
  icon: 'blog' | 'medium' | 'youtube' | 'custom';
  url: string;
  description: string;
  gradient: string;
}

export interface ContentCreation {
  description: string;
  platforms: ContentPlatform[];
  topics: string[];
}

export interface PortfolioConfig {
  personal: Personal;
  contact: ContactInfo;
  summary: string;
  skills: SkillCategory[];
  experience: {
    jobs: ExperienceEntry[];
    training: ExperienceEntry[];
  };
  education: EducationEntry[];
  projects: ProjectEntry[];
  certifications: CertificationEntry[];
  contentCreation: ContentCreation;
}
