import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card, Button, Toast, ToastProvider, ToastContainer } from '../components/ui';
import { mockApi } from '../api/mockApi';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; description: string; variant: 'default' | 'success' | 'error' }>({ title: '', description: '', variant: 'default' });

  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await mockApi.submitContactForm({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      });

      if (response.success) {
        setToastMessage({
          title: 'Success!',
          description: response.message,
          variant: 'success',
        });
        setToastOpen(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
        });
        setErrors({});
      }
    } catch (error) {
      setToastMessage({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'error',
      });
      setToastOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <ToastProvider>
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
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Have a project in mind? Let's discuss how we can help bring your ideas to life
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={ref} className="section-padding bg-white dark:bg-gray-950">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reach out to us through any of the following channels. We're here to help!
                  </p>
                </div>

                <div className="space-y-6">
                  <Card variant="glass" className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:hello@techflow.com"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        hello@techflow.com
                      </a>
                    </div>
                  </Card>

                  <Card variant="glass" className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </Card>

                  <Card variant="glass" className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Tech Street<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Map Placeholder */}
                <Card className="overflow-hidden p-0 h-64">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 dark:from-primary-950 dark:via-secondary-950 dark:to-accent-950 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary-500 opacity-50" />
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <div className={`${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
                <Card variant="glass">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                        placeholder="Your company (optional)"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.message
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-none`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                    </div>

                    <Button type="submit" className="w-full" isLoading={isSubmitting}>
                      {!isSubmitting && <Send className="mr-2 h-5 w-5" />}
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>

      <Toast
        title={toastMessage.title}
        description={toastMessage.description}
        variant={toastMessage.variant}
        open={toastOpen}
        onOpenChange={setToastOpen}
      />
      <ToastContainer />
    </ToastProvider>
  );
}
