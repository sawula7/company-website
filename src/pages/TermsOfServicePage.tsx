import { PageTransition } from '../components/layout/PageTransition';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section
      ref={ref}
      className={`mb-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
      <div className="text-gray-600 dark:text-gray-400 space-y-4">{children}</div>
    </section>
  );
}

export function TermsOfServicePage() {
  const [headerRef, headerVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 md:pt-32">
          <div className="container-custom">
            <div
              ref={headerRef}
              className={`max-w-4xl mx-auto text-center ${
                headerVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of <span className="gradient-text">Service</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <Section title="Agreement to Terms">
                <p>
                  By accessing and using this website and our services, you accept and agree to be bound by
                  the terms and conditions of this agreement. If you do not agree to these Terms of
                  Service, please do not use our website or services.
                </p>
              </Section>

              <Section title="Use of Services">
                <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use our services in any way that violates applicable local, national, or international law</li>
                  <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services</li>
                  <li>Attempt to gain unauthorized access to any portion of our services or systems</li>
                  <li>Upload or transmit viruses, malware, or any other malicious code</li>
                  <li>Use automated systems or software to extract data from our website (scraping)</li>
                  <li>Impersonate or attempt to impersonate our company, employees, or other users</li>
                  <li>Interfere with or disrupt the integrity or performance of our services</li>
                </ul>
              </Section>

              <Section title="Intellectual Property Rights">
                <p>
                  All content on this website, including but not limited to text, graphics, logos, images,
                  software, and code, is the property of our company or our licensors and is protected by
                  copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works, publicly display, or
                  exploit any content from our website without our prior written permission, except as
                  allowed by fair use or as explicitly permitted by these Terms.
                </p>
              </Section>

              <Section title="User Accounts">
                <p>
                  If you create an account on our website, you are responsible for maintaining the
                  confidentiality of your account credentials and for all activities that occur under your
                  account. You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Immediately notify us of any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
                <p className="mt-4">
                  We reserve the right to suspend or terminate your account if any information provided
                  proves to be inaccurate, false, or misleading.
                </p>
              </Section>

              <Section title="Services and Deliverables">
                <p>
                  We provide software development and related services as described on our website. Service
                  details, timelines, and deliverables will be outlined in separate project agreements or
                  statements of work.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any
                  time. We will make reasonable efforts to notify you of significant changes to services
                  you are actively using.
                </p>
              </Section>

              <Section title="Payment Terms">
                <p>
                  If you purchase services from us, you agree to pay all fees and charges according to the
                  pricing, payment terms, and billing policies in effect at the time. All fees are
                  non-refundable unless otherwise stated in a separate agreement.
                </p>
                <p>
                  We reserve the right to change our pricing and payment terms at any time. Price changes
                  will not affect services already purchased but will apply to future purchases.
                </p>
              </Section>

              <Section title="Limitation of Liability">
                <p>
                  To the maximum extent permitted by law, our company shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits or
                  revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or
                  other intangible losses resulting from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to or use of (or inability to access or use) our services</li>
                  <li>Any conduct or content of any third party on the services</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  <li>Any other matter relating to our services</li>
                </ul>
              </Section>

              <Section title="Disclaimer of Warranties">
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind,
                  either express or implied, including but not limited to implied warranties of
                  merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p>
                  We do not warrant that our services will be uninterrupted, secure, or error-free, or that
                  any defects will be corrected. You use our services at your own risk.
                </p>
              </Section>

              <Section title="Indemnification">
                <p>
                  You agree to indemnify, defend, and hold harmless our company, its officers, directors,
                  employees, and agents from and against any claims, liabilities, damages, losses, and
                  expenses arising out of or in any way connected with your access to or use of our
                  services, your violation of these Terms, or your violation of any rights of another
                  person or entity.
                </p>
              </Section>

              <Section title="Third-Party Links and Services">
                <p>
                  Our website may contain links to third-party websites or services that are not owned or
                  controlled by us. We have no control over and assume no responsibility for the content,
                  privacy policies, or practices of any third-party websites or services.
                </p>
                <p>
                  You acknowledge and agree that we shall not be responsible or liable for any damage or
                  loss caused by your use of any third-party websites or services.
                </p>
              </Section>

              <Section title="Termination">
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice
                  or liability, for any reason, including without limitation if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the services will immediately cease. All provisions
                  of these Terms which by their nature should survive termination shall survive, including
                  ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </Section>

              <Section title="Governing Law">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the
                  jurisdiction in which our company operates, without regard to its conflict of law
                  provisions.
                </p>
                <p>
                  Any disputes arising from these Terms or your use of our services shall be resolved in
                  the courts of the applicable jurisdiction.
                </p>
              </Section>

              <Section title="Changes to Terms">
                <p>
                  We reserve the right to modify or replace these Terms at any time at our sole discretion.
                  We will provide notice of any material changes by posting the new Terms on this page and
                  updating the "Last updated" date.
                </p>
                <p>
                  Your continued use of our services after any changes constitutes acceptance of the new
                  Terms. If you do not agree to the new Terms, you must stop using our services.
                </p>
              </Section>

              <Section title="Contact Information">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-4">
                  <p className="mb-2">
                    <strong>Email:</strong> legal@yourcompany.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Business Street, Suite 100, City, State 12345
                  </p>
                </div>
              </Section>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
