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

export function PrivacyPolicyPage() {
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
                Privacy <span className="gradient-text">Policy</span>
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
              <Section title="Introduction">
                <p>
                  This Privacy Policy describes how we collect, use, and protect your personal information
                  when you visit our website or use our services. We are committed to ensuring that your
                  privacy is protected and that any data we collect is handled responsibly and in
                  accordance with applicable data protection laws.
                </p>
              </Section>

              <Section title="Information We Collect">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Personal Information:</strong> Name, email address, phone number, and other
                    contact details you provide when filling out forms or contacting us.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you interact with our website,
                    including IP address, browser type, pages visited, and time spent on pages.
                  </li>
                  <li>
                    <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to
                    enhance your browsing experience and analyze site traffic. See our Cookie Policy for
                    more details.
                  </li>
                  <li>
                    <strong>Communication Data:</strong> Records of correspondence if you contact us
                    through email, contact forms, or other communication channels.
                  </li>
                </ul>
              </Section>

              <Section title="How We Use Your Information">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To respond to your inquiries and support requests</li>
                  <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>To improve our website and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To detect, prevent, and address technical issues or security threats</li>
                  <li>To comply with legal obligations and enforce our terms of service</li>
                </ul>
              </Section>

              <Section title="Data Sharing and Disclosure">
                <p>We do not sell your personal information. We may share your data with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Service Providers:</strong> Third-party companies that help us operate our
                    website and provide services (e.g., hosting, analytics, email delivery).
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law, court order, or legal
                    process, or to protect our rights and safety.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale
                    of assets, your information may be transferred to the new owner.
                  </li>
                </ul>
              </Section>

              <Section title="Data Security">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However,
                  no method of transmission over the Internet or electronic storage is 100% secure, and we
                  cannot guarantee absolute security.
                </p>
              </Section>

              <Section title="Your Rights">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal data we hold about you.
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of inaccurate or incomplete data.
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal data (subject to legal
                    requirements).
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your data for certain purposes.
                  </li>
                  <li>
                    <strong>Data Portability:</strong> Request transfer of your data to another service.
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent for processing where we rely on
                    consent as the legal basis.
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </Section>

              <Section title="Cookies and Tracking Technologies">
                <p>
                  We use cookies and similar tracking technologies to collect and track information about
                  your activity on our website. You can control cookie settings through your browser or
                  through our cookie consent banner. For more information, please see our Cookie Policy.
                </p>
              </Section>

              <Section title="Third-Party Links">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the
                  privacy practices of these external sites. We encourage you to review their privacy
                  policies before providing any personal information.
                </p>
              </Section>

              <Section title="Children's Privacy">
                <p>
                  Our services are not directed to individuals under the age of 16. We do not knowingly
                  collect personal information from children. If you believe we have collected information
                  from a child, please contact us immediately.
                </p>
              </Section>

              <Section title="International Data Transfers">
                <p>
                  Your information may be transferred to and processed in countries other than your country
                  of residence. We ensure appropriate safeguards are in place to protect your data in
                  accordance with this Privacy Policy and applicable laws.
                </p>
              </Section>

              <Section title="Changes to This Privacy Policy">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by
                  posting the new policy on this page and updating the "Last updated" date. You are advised
                  to review this Privacy Policy periodically for any changes.
                </p>
              </Section>

              <Section title="Contact Us">
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your rights,
                  please contact us:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-4">
                  <p className="mb-2">
                    <strong>Email:</strong> info@beetech.lk
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +94 777 924 732
                  </p>
                  <p>
                    <strong>Address:</strong> 281/D/5, St Marys Road, Welivita, Kaduwela
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
