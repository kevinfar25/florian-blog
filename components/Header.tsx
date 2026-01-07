import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text)' }}>
              Live Coaching
            </span>
          </Link>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link
              href="/"
              style={{
                color: 'var(--text)',
                fontWeight: '500',
              }}
            >
              Home
            </Link>
            <Link
              href="/blog"
              style={{
                color: 'var(--text)',
                fontWeight: '500',
              }}
            >
              Blog
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
