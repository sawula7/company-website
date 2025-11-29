import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card, LoadingSpinner } from '../components/ui';
import { mockApi } from '../api/mockApi';
import type { Service } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <Card
      ref={ref}
      className={`overflow-hidden p-0 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-8 space-y-6">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
          {service.title.charAt(0)}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Key Features:</h4>
          <ul className="space-y-3">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

export function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await mockApi.getServices();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Comprehensive software solutions designed to transform your business and drive digital success
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500">
        <div className="container-custom">
          <div className="text-center text-white space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Let's discuss how we can help transform your business with our expert software development services
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="/contact"
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
