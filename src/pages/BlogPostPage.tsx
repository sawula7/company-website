import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { PageTransition } from '../components/layout/PageTransition';
import { Card, LoadingSpinner, Button } from '../components/ui';
import { mockApi } from '../api/mockApi';
import type { BlogPost } from '../types';
import ReactMarkdown from 'react-markdown';

export function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const postData = await mockApi.getBlogPost(id);
        if (postData) {
          setPost(postData);
          // Get related posts from the same category
          const allPosts = await mockApi.getBlogPostsByCategory(postData.category);
          const related = allPosts.filter((p) => p.id !== id).slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner />
        </div>
      </PageTransition>
    );
  }

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Post Not Found</h1>
            <Link to="/blog">
              <Button variant="outline">Back to Blog</Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Header */}
      <section className="relative py-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container-custom max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </Link>

          <div className="space-y-6 animate-slide-up">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-primary-500 text-white">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-600 dark:text-gray-400">{post.excerpt}</p>

            <div className="flex items-center gap-4 pt-4">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary-500/20"
              />
              <div>
                <div className="font-semibold text-lg">{post.author}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Author</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container-custom max-w-5xl -mt-8 mb-12 animate-slide-up animation-delay-200">
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="container-custom max-w-4xl section-padding">
        <Card variant="glass" className="prose prose-lg dark:prose-invert max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
              h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-3">{children}</h4>,
              p: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
              li: ({ children }) => <li className="text-gray-700 dark:text-gray-300">{children}</li>,
              code: ({ children }) => (
                <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </Card>

        {/* Tags */}
        <div className="flex items-start gap-3 mt-8 flex-wrap">
          <Tag className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-1" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50 dark:bg-gray-900">
          <div className="container-custom max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                  <Card className="group overflow-hidden p-0 h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold group-hover:text-primary-500 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageTransition>
  );
}
