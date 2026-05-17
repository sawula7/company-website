import { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card, LoadingSpinner } from '../components/ui';
import { mockApi } from '../api/mockApi';
import type { Project } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <Card
      ref={ref}
      className={`group overflow-hidden p-0 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="aspect-video overflow-hidden relative">
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
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </a>
          )}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Technologies:
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-300">Outcome: </span>
            <span className="text-gray-600 dark:text-gray-400">{project.outcome}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function PortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await mockApi.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Explore our projects and the impact we've made for our clients
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
