export type PageRoute = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Automation' | 'Marketing' | 'Video & Motion Graphics' | 'Web Design';
  typeLabel: 'Concept Project' | 'Demo Project';
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tools: string[];
  image: string;
}

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  companyName: string;
  service: string;
  budget: string;
  message: string;
}

export interface FormErrors {
  fullName?: string;
  workEmail?: string;
  message?: string;
}
