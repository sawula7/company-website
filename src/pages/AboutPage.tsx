import { useEffect, useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card, LoadingSpinner } from '../components/ui';
import { mockApi } from '../api/mockApi';
import type { TeamMember } from '../types';
import { companyTimeline } from '../constants/timeline';
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

function TeamSection({ team }: { team: TeamMember[] }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Talented individuals passionate about building exceptional software
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={member.id}
              className={`group text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary-500/20 group-hover:border-primary-500/50 transition-colors"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
                <div className="flex items-center justify-center space-x-3 pt-2">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <section ref={ref} className="section-padding bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Key milestones in our company's evolution
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500"></div>

            {companyTimeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 md:px-8">
                    <Card variant="glass" className="space-y-3">
                      <div className="text-3xl font-bold gradient-text">{item.year}</div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </Card>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary-500 border-4 border-white dark:border-gray-950 shadow-lg"></div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await mockApi.getTeamMembers();
        setTeam(data);
      } catch (error) {
        console.error('Error fetching team:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
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
              About <span className="gradient-text">TechFlow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Building the future of software, one project at a time
            </p>
          </div>
        </div>
      </section>

      <MissionSection />
      <TeamSection team={team} />
      <TimelineSection />
    </PageTransition>
  );
}
