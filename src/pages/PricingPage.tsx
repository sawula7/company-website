import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card, Button } from '../components/ui';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const packages = [
  {
    name: 'Basic Business Website',
    price: '80,000',
    description: 'Perfect for small businesses getting started online.',
    features: [
      'Up to 5 page website',
      'Basic SEO optimization',
      'Mobile responsive design',
      'Contact form integration',
      'Basic social media integration',
      '1 round of revisions',
      'Standard loading speed optimization',
      'Transfer of hosting & domain assistance',
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Professional Business Website',
    price: '130,000',
    description: 'Our most popular package for growing businesses.',
    features: [
      'Everything in Basic +',
      'Custom design & templates',
      'Advanced SEO optimization',
      '3 rounds of revisions',
      'Support & design consultation',
      'Free monthly maintenance',
      'Custom profile themes',
      'Google My Business optimization',
      'Performance monitoring',
    ],
    popular: true,
    color: 'from-primary-500 to-secondary-500',
  },
  {
    name: 'Premium Business Website',
    price: '150,000',
    description: 'Full-scale solution for established businesses.',
    features: [
      'Everything in Professional +',
      'Comprehensive website (10–30 pages)',
      'Advanced SEO (60 changes/month)',
      'Full SEO standard compliance',
      'Bi-weekly optimization',
      'Priority technical support',
      'Performance monitoring',
      'Dedicated account manager',
    ],
    popular: false,
    color: 'from-accent-500 to-accent-600',
  },
];

const additionalServices = [
  {
    name: 'Website SEO',
    price: '45,000',
    period: '/month',
    features: [
      'Keyword research & strategy',
      'On-page SEO optimization',
      'Technical SEO audit & fix',
      'Monthly performance reports',
      'Content optimization',
      'Local SEO optimization',
    ],
  },
  {
    name: 'Website Maintenance',
    price: '20,000',
    period: '/month',
    features: [
      'Regular content updates',
      'Security monitoring',
      'Backup of website files',
      'Performance checks',
      'Bug fixes & testing',
      'Google My Business management',
    ],
  },
  {
    name: 'Social Media Posting',
    price: '20,000',
    period: '/month',
    features: [
      'Content creation',
      'Post scheduling',
      'Engagement monitoring',
      'Monthly performance reports',
      'Platform management (Facebook & Instagram)',
      'Monthly strategy consultation',
    ],
  },
];

const faqs = [
  {
    question: 'How much does a website cost in Sri Lanka?',
    answer:
      'Website costs in Sri Lanka vary based on complexity and requirements. Our Basic Business Website starts at LKR 80,000, Professional Business Website at LKR 130,000, and Premium Business Website at LKR 150,000. All packages include mobile responsiveness, SEO, and ongoing support.',
  },
  {
    question: "What's included in the hosting package?",
    answer:
      'Our hosting packages include SSL certificates, daily backups, uptime monitoring, and customer support. We provide guidance on domain registration and can manage your hosting setup on your behalf.',
  },
  {
    question: 'Do you offer payment plans for large projects?',
    answer:
      'Yes, we offer flexible payment options. For larger projects, we accept a 50% deposit upfront with the remaining balance due upon completion. For ongoing monthly services, payments are billed at the start of each month.',
  },
  {
    question: 'Are there any hidden costs in your pricing?',
    answer:
      'No hidden costs. We provide a detailed quote before starting any project. Any additional work outside the agreed scope will be discussed and quoted separately before proceeding.',
  },
  {
    question: 'Can I upgrade my package later?',
    answer:
      'Absolutely. You can upgrade to a higher package at any time. We will only charge you the difference in price. Upgrades are handled smoothly to minimise any disruption to your existing website.',
  },
];

function PricingCard({
  pkg,
  index,
  isVisible,
}: {
  pkg: (typeof packages)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 ${
        pkg.popular
          ? 'border-primary-500 shadow-2xl shadow-primary-500/20 scale-105'
          : 'border-gray-200 dark:border-gray-700'
      } bg-white dark:bg-gray-900 overflow-hidden ${
        isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {pkg.popular && (
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center text-sm font-semibold py-2">
          Most Popular
        </div>
      )}
      <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{pkg.description}</p>
        <div className="mb-8">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            LKR {pkg.price}
          </span>
        </div>
        <ul className="space-y-3 mb-8 flex-1">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm">
              <Check className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-400">{feature}</span>
            </li>
          ))}
        </ul>
        <Link to="/contact">
          <Button
            className="w-full"
            variant={pkg.popular ? 'primary' : 'outline'}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

function FaqItem({ faq }: { faq: (typeof faqs)[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span>{faq.question}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 text-primary-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

export function PricingPage() {
  const [heroRef, heroVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const [packagesRef, packagesVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const [addonsRef, addonsVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const [faqRef, faqVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        </div>
        <div
          ref={heroRef}
          className={`container-custom relative z-10 text-center max-w-3xl mx-auto space-y-6 ${
            heroVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <p className="text-sm font-semibold text-primary-500 uppercase tracking-widest">
            Transparent Pricing
          </p>
          <h1 className="text-4xl md:text-6xl font-bold">
            Affordable Web Development <span className="gradient-text">Packages</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Choose the perfect package for your business needs. All packages include professional
            web development with modern technologies and ongoing support.
          </p>
        </div>
      </section>

      {/* Main Packages */}
      <section ref={packagesRef} className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, index) => (
              <PricingCard
                key={pkg.name}
                pkg={pkg}
                index={index}
                isVisible={packagesVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section ref={addonsRef} className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div
            className={`text-center max-w-3xl mx-auto mb-16 ${
              addonsVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Enhance your website with our professional maintenance and SEO services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={service.name}
                className={`flex flex-col ${addonsVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-primary-500">
                    LKR {service.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {service.period}
                  </span>
                </div>
                <ul className="space-y-3 flex-1 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section ref={faqRef} className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom max-w-3xl">
          <div
            className={`text-center mb-12 ${faqVisible ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Pricing Questions Answered</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our pricing packages.
            </p>
          </div>
          <div
            className={`space-y-4 ${faqVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '150ms' }}
          >
            {faqs.map((faq) => (
              <FaqItem key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600"
      >
        <div
          className={`container-custom text-center max-w-2xl mx-auto space-y-6 ${
            ctaVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to Get Started?</h2>
          <p className="text-primary-100 text-lg">
            Choose your package or get a custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                Get Started Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Get a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
