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
    recaptchaToken?: string;
  }): Promise<{ success: boolean; message: string }> {
    await delay(1500);

    // Log reCAPTCHA token status
    if (data.recaptchaToken) {
      console.log('Contact form submitted with reCAPTCHA token:', {
        ...data,
        recaptchaToken: data.recaptchaToken.substring(0, 20) + '...',
      });
    } else {
      console.log('Contact form submitted without reCAPTCHA token:', data);
    }

    // In a real application, you would:
    // 1. Send the recaptchaToken to your backend
    // 2. Verify the token with Google's reCAPTCHA API using your secret key
    // 3. Check the score (v3 returns a score from 0.0 to 1.0)
    // 4. Proceed with form submission if verification passes
    //
    // Example backend verification (Node.js/Express):
    // const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    // });
    // const result = await response.json();
    // if (result.success && result.score >= 0.5) {
    //   // Process the form
    // }

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
