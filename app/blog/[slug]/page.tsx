import Link from 'next/link';
import { getPostWithHtml, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  try {
    const post = await getPostWithHtml(slug);

    return (
      <main>
        <Header />

        <div className="container">
          <nav style={{ marginBottom: '2rem' }}>
            <Link
              href="/blog"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--primary)',
                fontWeight: '500',
                textDecoration: 'none',
              }}
            >
              &larr; Back to Blog
            </Link>
          </nav>

          <article
            style={{
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <header style={{ marginBottom: '2.5rem' }}>
              <h1
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  color: 'var(--text)',
                  marginBottom: '1rem',
                }}
              >
                {post.title}
              </h1>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'var(--text-light)',
                  fontSize: '1rem',
                }}
              >
                <span
                  style={{
                    fontWeight: '500',
                    color: 'var(--text)',
                  }}
                >
                  {post.author}
                </span>
                <span style={{ color: 'var(--border)' }}>|</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </header>

            {post.coverImage && (
              <div
                style={{
                  marginBottom: '2.5rem',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={post.coverImage}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </div>
            )}

            <div
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'var(--text)',
              }}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <footer
              style={{
                marginTop: '4rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              <Link
                href="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--primary)',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                }}
              >
                &larr; Back to Blog
              </Link>
            </footer>
          </article>
        </div>

        <style>{`
          article h2 {
            font-size: 1.75rem;
            font-weight: 600;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            color: var(--text);
          }
          article h3 {
            font-size: 1.375rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            color: var(--text);
          }
          article p {
            margin-bottom: 1.5rem;
          }
          article ul, article ol {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
          }
          article li {
            margin-bottom: 0.5rem;
          }
          article blockquote {
            margin: 2rem 0;
            padding: 1rem 1.5rem;
            border-left: 4px solid var(--primary);
            background: var(--background-alt);
            font-style: italic;
            color: var(--text-light);
          }
          article pre {
            margin: 1.5rem 0;
            padding: 1rem 1.25rem;
            background: var(--background-alt);
            border-radius: 0.5rem;
            overflow-x: auto;
            font-size: 0.9rem;
          }
          article code {
            background: var(--background-alt);
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-size: 0.9em;
          }
          article pre code {
            background: none;
            padding: 0;
          }
          article img {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            margin: 1.5rem 0;
          }
          article a {
            color: var(--primary);
            text-decoration: underline;
          }
          article a:hover {
            color: var(--primary-dark);
          }
          article hr {
            margin: 2.5rem 0;
            border: none;
            border-top: 1px solid var(--border);
          }
        `}</style>
      </main>
    );
  } catch {
    notFound();
  }
}
