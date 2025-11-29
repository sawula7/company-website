import { blogPosts } from '../constants/blog';
import { projects } from '../constants/projects';
import { team } from '../constants/team';
import { testimonials } from '../constants/testimonials';
import { services } from '../constants/services';
import type { BlogPost, Project, TeamMember, Testimonial, Service } from '../types';

// Simulated network delay
const delay = (ms: number = 800) => new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  // Blog API
  async getBlogPosts(): Promise<BlogPost[]> {
    await delay();
    return blogPosts;
  },

  async getFeaturedBlogPosts(): Promise<BlogPost[]> {
    await delay();
    return blogPosts.filter((post) => post.featured);
  },

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    await delay();
    return blogPosts.find((post) => post.id === id);
  },

  async getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
    await delay();
    if (category === 'All') return blogPosts;
    return blogPosts.filter((post) => post.category === category);
  },

  async searchBlogPosts(query: string): Promise<BlogPost[]> {
    await delay();
    const lowerQuery = query.toLowerCase();
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  },

  // Projects API
  async getProjects(): Promise<Project[]> {
    await delay();
    return projects;
  },

  async getFeaturedProjects(): Promise<Project[]> {
    await delay();
    return projects.filter((project) => project.featured);
  },

  async getProject(id: string): Promise<Project | undefined> {
    await delay();
    return projects.find((project) => project.id === id);
  },

  async getProjectsByCategory(category: string): Promise<Project[]> {
    await delay();
    if (category === 'All') return projects;
    return projects.filter((project) => project.category === category);
  },

  // Team API
  async getTeamMembers(): Promise<TeamMember[]> {
    await delay();
    return team;
  },

  async getTeamMember(id: string): Promise<TeamMember | undefined> {
    await delay();
    return team.find((member) => member.id === id);
  },

  // Testimonials API
  async getTestimonials(): Promise<Testimonial[]> {
    await delay();
    return testimonials;
  },

  // Services API
  async getServices(): Promise<Service[]> {
    await delay();
    return services;
  },

  async getService(id: string): Promise<Service | undefined> {
    await delay();
    return services.find((service) => service.id === id);
  },

  // Contact Form API
  async submitContactForm(data: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> {
    await delay(1500);

    // Simulate success (in real app, this would send to backend)
    console.log('Contact form submitted:', data);

    return {
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
    };
  },

  // Newsletter subscription
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    await delay(1000);

    console.log('Newsletter subscription:', email);

    return {
      success: true,
      message: 'Successfully subscribed to our newsletter!',
    };
  },
};
