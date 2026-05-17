import { PageTransition } from '../components/layout/PageTransition';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function MissionSection() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              We're on a mission to empower businesses through innovative software solutions that drive
              growth, efficiency, and digital transformation.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Since our founding, we've been committed to delivering excellence in every project. Our
              team of passionate developers, designers, and consultants work collaboratively to turn
              complex challenges into elegant solutions.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              {[
                { label: 'Innovation', desc: 'Cutting-edge solutions' },
                { label: 'Quality', desc: 'Excellence in every detail' },
                { label: 'Partnership', desc: 'Long-term client relationships' },
                { label: 'Growth', desc: 'Continuous improvement' },
              ].map((value, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl font-bold gradient-text">{value.label}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{value.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={`${isVisible ? 'animate-slide-up animation-delay-200' : 'opacity-0'}`}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
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
              About <span className="gradient-text">BeeTech</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Building the future of software, one project at a time
            </p>
          </div>
        </div>
      </section>

      <MissionSection />
    </PageTransition>
  );
}
