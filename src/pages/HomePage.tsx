import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Star, Zap } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Button, Card, LoadingSpinner } from '../components/ui';
import { mockApi } from '../api/mockApi';
import type { Project, Testimonial, Service } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Build the Future with{' '}
            <span className="gradient-text">Innovative Software</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We transform ideas into powerful digital solutions. Expert software development,
            cutting-edge technology, and results that exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services }: { services: Service[] }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Comprehensive software solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <Card
              key={service.id}
              className={`group ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-xl">
                  {service.title.charAt(0)}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm">
                      <Check className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Showcasing our best projects and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden p-0 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  const plans = [
    {
      name: 'Basic',
      price: '80,000',
      features: ['Up to 5 pages', 'Basic SEO', 'Mobile responsive', 'Contact form', '1 round of revisions'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '130,000',
      features: ['Custom design', 'Advanced SEO', '3 rounds of revisions', 'Free monthly maintenance', 'Google My Business'],
      popular: true,
    },
    {
      name: 'Premium',
      price: '150,000',
      features: ['Up to 30 pages', 'Advanced SEO (60 changes/mo)', 'Priority support', 'Bi-weekly optimization', 'Dedicated account manager'],
      popular: false,
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4">
            <Zap className="h-4 w-4" />
            Transparent Pricing
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Affordable Web Development <span className="gradient-text">Packages</span></h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Professional web development with modern technologies and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 ${plan.popular ? 'border-primary-500 shadow-2xl shadow-primary-500/20 scale-105' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-gray-900 p-8 flex flex-col ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-semibold rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-bold">LKR {plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="h-4 w-4 text-primary-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/pricing">
                <Button className="w-full" variant={plan.popular ? 'primary' : 'outline'}>
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/pricing">
            <Button variant="outline">View All Packages &amp; Pricing</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hear what our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              variant="glass"
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-accent-500 fill-accent-500'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, testimonialsData, servicesData] = await Promise.all([
          mockApi.getFeaturedProjects(),
          mockApi.getTestimonials(),
          mockApi.getServices(),
        ]);
        setFeaturedProjects(projectsData);
        setTestimonials(testimonialsData);
        setServices(servicesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Hero />
      <ServicesSection services={services} />
      <FeaturedProjects projects={featuredProjects} />
      <PricingSection />
      <TestimonialsSection testimonials={testimonials} />
    </PageTransition>
  );
}
