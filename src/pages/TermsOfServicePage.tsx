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
                Terms &amp; <span className="gradient-text">Conditions</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">

              <Section title="1. Introduction">
                <p>
                  These Terms and Conditions outline the rules governing your use of the services
                  offered by BeeTech Solutions. By accessing or engaging with our services, you
                  confirm your acceptance of these terms. If you disagree with any part of these
                  conditions, you are not permitted to use our services.
                </p>
              </Section>

              <Section title="2. Services">
                <p>BeeTech Solutions offers the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Custom website development and design</li>
                  <li>E-commerce website development</li>
                  <li>WordPress development and customization</li>
                  <li>UI/UX design services</li>
                  <li>Website maintenance and support</li>
                  <li>Web hosting and domain services</li>
                </ul>
              </Section>

              <Section title="3. Payment Terms">
                <p>
                  <strong>Payment Schedule:</strong> A 50% deposit is required at the start of
                  each project, with the outstanding balance payable upon completion and prior
                  to the website going live.
                </p>
                <p>
                  <strong>Payment Methods:</strong> We accept bank transfers, PayPal, and all
                  major credit cards. Payments must be made in USD or LKR as mutually agreed.
                </p>
                <p>
                  <strong>Late Payments:</strong> Delays in payment may result in project
                  postponements or suspension of services. A 5% late fee will be charged on
                  any overdue amounts.
                </p>
              </Section>

              <Section title="4. Project Timeline">
                <p>
                  <strong>Project Duration:</strong> Timelines differ based on the complexity
                  and scope of each project. A detailed schedule will be provided during the
                  initial consultation.
                </p>
                <p>
                  <strong>Delays:</strong> While we aim to meet all agreed deadlines, delays
                  may occasionally arise due to client feedback cycles, scope changes, or
                  technical issues. We will communicate any such delays promptly.
                </p>
                <p>
                  <strong>Extensions:</strong> Requests for project extensions are subject to
                  approval and may attract additional costs.
                </p>
              </Section>

              <Section title="5. Intellectual Property">
                <p>
                  <strong>Client Ownership:</strong> Upon receipt of full payment, clients hold
                  ownership of the final website design and content. We reserve the right to
                  display completed work in our portfolio.
                </p>
                <p>
                  <strong>Third-Party Assets:</strong> Clients are responsible for ensuring
                  they have the necessary rights to any third-party content, images, or assets
                  incorporated into their website.
                </p>
                <p>
                  <strong>Our Rights:</strong> Ownership of our proprietary code, frameworks,
                  and development tools used throughout the project remains with BeeTech
                  Solutions.
                </p>
              </Section>

              <Section title="6. Revisions and Changes">
                <p>
                  <strong>Included Revisions:</strong> Every project includes up to three
                  rounds of revisions within the agreed scope. Additional revision requests
                  beyond this may incur extra charges.
                </p>
                <p>
                  <strong>Scope Changes:</strong> Substantial changes to the original project
                  scope may require more time and budget. A revised quotation will be submitted
                  for your approval before proceeding.
                </p>
                <p>
                  <strong>Client Feedback:</strong> Timely feedback from clients is essential
                  to keeping the project on schedule. Delays in providing feedback may impact
                  the overall timeline.
                </p>
              </Section>

              <Section title="7. Warranty and Support">
                <p>
                  <strong>Warranty Period:</strong> We offer a 30-day warranty following
                  project completion, covering bug fixes and minor adjustments.
                </p>
                <p>
                  <strong>Ongoing Support:</strong> Continued maintenance and support packages
                  are available at an additional cost.
                </p>
                <p>
                  <strong>Limitations:</strong> Our warranty does not cover issues stemming
                  from third-party services, hosting complications, or modifications made by
                  the client.
                </p>
              </Section>

              <Section title="8. Limitation of Liability">
                <p>
                  BeeTech Solutions' liability is strictly limited to the amount paid for the
                  specific service rendered. We accept no liability for any indirect,
                  incidental, or consequential damages.
                </p>
                <p>
                  We do not make guarantees regarding specific business results, search engine
                  rankings, or increases in website traffic arising from our services.
                </p>
              </Section>

              <Section title="9. Termination">
                <p>
                  <strong>Client Termination:</strong> Clients may end a project at any time
                  by providing written notice. Payment will be due for all work completed up
                  to the date of termination.
                </p>
                <p>
                  <strong>Our Termination:</strong> We reserve the right to discontinue
                  services in cases of non-payment, unreasonable demands, or breach of these
                  terms.
                </p>
              </Section>

              <Section title="10. Governing Law">
                <p>
                  These Terms and Conditions are governed by and interpreted in accordance with
                  the laws of Sri Lanka. Any disputes arising from these terms will be resolved
                  through mediation or through the courts of Sri Lanka.
                </p>
              </Section>

              <Section title="11. Contact Information">
                <p>
                  If you have any questions about these Terms and Conditions, please reach out
                  to us:
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
