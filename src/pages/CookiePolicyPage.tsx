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

export function CookiePolicyPage() {
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
                Cookie <span className="gradient-text">Policy</span>
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
              <Section title="What Are Cookies?">
                <p>
                  Cookies are small text files that are placed on your device (computer, smartphone, or
                  tablet) when you visit a website. They are widely used to make websites work more
                  efficiently and provide information to website owners.
                </p>
                <p>
                  Cookies help us understand how you use our website, remember your preferences, and
                  improve your overall experience. They can also be used to show you relevant advertising
                  and analyze website traffic.
                </p>
              </Section>

              <Section title="Types of Cookies We Use">
                <div className="space-y-6">
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      1. Essential Cookies (Always Active)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      These cookies are necessary for the website to function properly. They enable core
                      functionality such as security, network management, and accessibility. You cannot opt
                      out of these cookies as they are essential for the website to work.
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Examples:</p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Authentication cookies to remember your login status</li>
                        <li>Security cookies to protect against fraudulent activity</li>
                        <li>Session cookies to maintain your preferences during a visit</li>
                        <li>Cookie consent preferences</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      2. Analytics Cookies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      These cookies help us understand how visitors interact with our website by collecting
                      and reporting information anonymously. This helps us improve our website and provide a
                      better user experience.
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Examples:</p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Google Analytics cookies to track page views and user behavior</li>
                        <li>Heatmap tools to understand how users navigate our site</li>
                        <li>Performance monitoring cookies to identify technical issues</li>
                        <li>A/B testing cookies to improve website features</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      3. Marketing Cookies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      These cookies track your online activity to help advertisers deliver more relevant
                      advertising or to limit how many times you see an ad. They may be set by us or by
                      third-party advertising networks.
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Examples:</p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Facebook Pixel to show relevant ads on social media</li>
                        <li>Google Ads cookies for retargeting campaigns</li>
                        <li>LinkedIn Insight Tag for professional advertising</li>
                        <li>Third-party advertising network cookies</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      4. Preference Cookies
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      These cookies remember your preferences and settings to provide you with a more
                      personalized experience. They remember choices you make such as language, region, or
                      display preferences.
                    </p>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">Examples:</p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-400">
                        <li>Language preference cookies</li>
                        <li>Dark mode / light mode theme preferences</li>
                        <li>Font size and accessibility settings</li>
                        <li>Regional or location-based preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Section>

              <Section title="How Long Do Cookies Last?">
                <p>Cookies can be either session cookies or persistent cookies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Session Cookies:</strong> These are temporary cookies that expire when you
                    close your browser. They are used to maintain your session while navigating our
                    website.
                  </li>
                  <li>
                    <strong>Persistent Cookies:</strong> These remain on your device for a set period or
                    until you delete them. They are used to remember your preferences and settings for
                    future visits. Most of our persistent cookies expire within 1-2 years.
                  </li>
                </ul>
              </Section>

              <Section title="Third-Party Cookies">
                <p>
                  In addition to our own cookies, we may use third-party cookies from trusted partners to
                  provide analytics, advertising, and other services. These third parties may collect
                  information about your online activities over time and across different websites.
                </p>
                <p>Common third-party services we use include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Google Ads for advertising</li>
                  <li>Facebook Pixel for social media marketing</li>
                  <li>LinkedIn Insight Tag for professional networking</li>
                </ul>
              </Section>

              <Section title="Managing Your Cookie Preferences">
                <p>
                  You have several options to manage and control cookies on our website:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      1. Cookie Consent Banner
                    </h4>
                    <p>
                      When you first visit our website, you'll see a cookie consent banner where you can
                      choose to accept all cookies, accept only essential cookies, or customize your
                      preferences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      2. Browser Settings
                    </h4>
                    <p>
                      Most web browsers allow you to control cookies through their settings. You can set
                      your browser to refuse cookies or delete certain cookies. Please note that if you
                      disable cookies, some features of our website may not function properly.
                    </p>
                    <p className="mt-2">To manage cookies in popular browsers:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Google Chrome: Settings → Privacy and security → Cookies and other site data</li>
                      <li>Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data</li>
                      <li>Safari: Preferences → Privacy → Cookies and website data</li>
                      <li>Microsoft Edge: Settings → Cookies and site permissions → Cookies and site data</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      3. Opt-Out Links
                    </h4>
                    <p>You can opt out of specific third-party cookies:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Google Analytics: Use the Google Analytics Opt-out Browser Add-on</li>
                      <li>Facebook: Manage ad preferences in your Facebook account settings</li>
                      <li>Network Advertising Initiative: Visit www.networkadvertising.org/choices</li>
                    </ul>
                  </div>
                </div>
              </Section>

              <Section title="Do Not Track Signals">
                <p>
                  Some browsers have a "Do Not Track" (DNT) feature that signals to websites that you do
                  not want to have your online activity tracked. Currently, there is no universal standard
                  for how DNT signals should be interpreted. We do not currently respond to DNT signals.
                </p>
              </Section>

              <Section title="Updates to This Cookie Policy">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or
                  for legal, operational, or regulatory reasons. We encourage you to review this page
                  periodically to stay informed about our use of cookies.
                </p>
                <p>
                  The "Last updated" date at the top of this page indicates when this policy was last
                  revised. Your continued use of our website after any changes constitutes your acceptance
                  of the updated Cookie Policy.
                </p>
              </Section>

              <Section title="Contact Us">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact
                  us:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-4">
                  <p className="mb-2">
                    <strong>Email:</strong> privacy@yourcompany.com
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
