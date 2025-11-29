export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  outcome: string;
  link?: string;
  featured: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorImage: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export interface CompanyTimeline {
  year: string;
  title: string;
  description: string;
}

export type Theme = 'light' | 'dark';
