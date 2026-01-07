import Link from 'next/link';
import { getPaginatedPosts } from '@/lib/posts';
import Header from '@/components/Header';

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const { posts, totalPages } = getPaginatedPosts(currentPage, 6);

  return (
    <main>
      <Header />

      <div className="container">
        <section style={{ marginBottom: '3rem' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '700',
              marginBottom: '0.5rem',
              color: 'var(--text)',
            }}
          >
            Latest Articles
          </h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
            Discover insights and strategies for effective coaching
          </p>
        </section>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
          }}
        >
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                background: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{ display: 'block', textDecoration: 'none' }}
              >
                {post.coverImage && (
                  <div
                    style={{
                      height: '180px',
                      background: `url(${post.coverImage}) center/cover`,
                      backgroundColor: 'var(--background-alt)',
                    }}
                  />
                )}
                <div style={{ padding: '1.5rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      marginBottom: '0.75rem',
                      fontSize: '0.875rem',
                      color: 'var(--text-light)',
                    }}
                  >
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>|</span>
                    <span>{post.author}</span>
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--text)',
                      marginBottom: '0.75rem',
                      lineHeight: '1.4',
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-light)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--background-alt)',
              borderRadius: '0.75rem',
            }}
          >
            <p style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
              No posts found. Check back soon for new content!
            </p>
          </div>
        )}

        {totalPages > 1 && (
          <nav
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              padding: '2rem 0',
              borderTop: '1px solid var(--border)',
            }}
          >
            {currentPage > 1 ? (
              <Link
                href={`/blog?page=${currentPage - 1}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1.25rem',
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  color: 'var(--text)',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              >
                &larr; Previous
              </Link>
            ) : (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1.25rem',
                  background: 'var(--background-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  color: 'var(--text-light)',
                  fontWeight: '500',
                  cursor: 'not-allowed',
                }}
              >
                &larr; Previous
              </span>
            )}

            <span
              style={{
                padding: '0.625rem 1rem',
                color: 'var(--text)',
                fontWeight: '500',
              }}
            >
              Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
              <Link
                href={`/blog?page=${currentPage + 1}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1.25rem',
                  background: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  color: 'var(--text)',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              >
                Next &rarr;
              </Link>
            ) : (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.625rem 1.25rem',
                  background: 'var(--background-alt)',
                  border: '1px solid var(--border)',
                  borderRadius: '0.5rem',
                  color: 'var(--text-light)',
                  fontWeight: '500',
                  cursor: 'not-allowed',
                }}
              >
                Next &rarr;
              </span>
            )}
          </nav>
        )}
      </div>
    </main>
  );
}
