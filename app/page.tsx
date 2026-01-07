import Link from 'next/link';

export default function Home() {
  return (
    <main className="container" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Live Coaching Blog</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
        Insights, strategies, and best practices for effective live coaching
      </p>
      <Link
        href="/blog"
        style={{
          display: 'inline-block',
          background: 'var(--primary)',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          fontWeight: '600',
        }}
      >
        Read the Blog
      </Link>
    </main>
  );
}
