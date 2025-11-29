import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card, LoadingSpinner } from '../components/ui';
import { mockApi } from '../api/mockApi';
import type { BlogPost } from '../types';
import { blogCategories } from '../constants/blog';
import { useStore } from '../store/useStore';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { cn } from '../utils/cn';

function FeaturedPost({ post }: { post: BlogPost }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <Link to={`/blog/${post.id}`}>
      <Card
        ref={ref}
        className={`group overflow-hidden p-0 lg:flex lg:items-center gap-8 ${
          isVisible ? 'animate-slide-up' : 'opacity-0'
        }`}
      >
        <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-8 lg:w-1/2 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
              Featured
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
              {post.category}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold group-hover:text-primary-500 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex items-center text-primary-500 font-semibold group-hover:gap-3 transition-all">
            Read More <ArrowRight className="h-5 w-5 ml-2" />
          </div>
        </div>
      </Card>
    </Link>
  );
}

function BlogPostCard({ post, index }: { post: BlogPost; index: number }) {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <Link to={`/blog/${post.id}`}>
      <Card
        ref={ref}
        className={`group overflow-hidden p-0 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="aspect-video overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
              {post.category}
            </span>
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full" />
              <div>
                <div className="text-sm font-semibold">{post.author}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { selectedBlogCategory, setSelectedBlogCategory } = useStore();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const [allPosts, featured] = await Promise.all([
          mockApi.getBlogPosts(),
          mockApi.getFeaturedBlogPosts(),
        ]);
        setPosts(allPosts);
        setFeaturedPosts(featured);
        setFilteredPosts(allPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    if (selectedBlogCategory === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter((p) => p.category === selectedBlogCategory));
    }
  }, [selectedBlogCategory, posts]);

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
              Tech <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              Explore our latest articles on web development, AI, design, and technology trends
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPosts.length > 0 && (
        <section className="section-padding bg-white dark:bg-gray-950">
          <div className="container-custom">
            <FeaturedPost post={featuredPosts[0]} />
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedBlogCategory(category)}
                className={cn(
                  'px-6 py-2 rounded-full font-medium transition-all duration-300',
                  selectedBlogCategory === category
                    ? 'bg-primary-500 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
