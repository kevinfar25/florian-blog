import Link from 'next/link';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
            color: 'white',
            padding: '5rem 1.5rem',
            textAlign: 'center',
          }}
        >
          <div className="container">
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              Transform Your Potential with Live Coaching
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                opacity: 0.9,
                maxWidth: '700px',
                margin: '0 auto 2rem',
              }}
            >
              Real-time guidance, personalized strategies, and breakthrough results.
              Experience coaching that meets you exactly where you are.
            </p>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                background: 'white',
                color: 'var(--primary)',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                fontSize: '1.1rem',
              }}
            >
              Explore Our Insights
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: '5rem 1.5rem' }}>
          <div className="container">
            <h2
              style={{
                fontSize: '2.25rem',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '1rem',
              }}
            >
              Our Coaching Services
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: 'var(--text-light)',
                maxWidth: '600px',
                margin: '0 auto 3rem',
              }}
            >
              We offer personalized coaching programs designed to help you achieve your goals
              through real-time interaction and expert guidance.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
              }}
            >
              {/* Service 1 */}
              <div
                style={{
                  padding: '2rem',
                  background: 'var(--background-alt)',
                  borderRadius: '1rem',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--primary)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.5rem',
                  }}
                >
                  <span style={{ color: 'white' }}>1:1</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                  One-on-One Coaching
                </h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Personalized sessions tailored to your specific goals, challenges, and learning style.
                  Get undivided attention and customized strategies for maximum impact.
                </p>
              </div>

              {/* Service 2 */}
              <div
                style={{
                  padding: '2rem',
                  background: 'var(--background-alt)',
                  borderRadius: '1rem',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--primary)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.25rem',
                  }}
                >
                  <span style={{ color: 'white' }}>G</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                  Group Sessions
                </h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Learn alongside peers in interactive group coaching sessions. Benefit from diverse
                  perspectives while building a supportive community.
                </p>
              </div>

              {/* Service 3 */}
              <div
                style={{
                  padding: '2rem',
                  background: 'var(--background-alt)',
                  borderRadius: '1rem',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'var(--primary)',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    fontSize: '1.25rem',
                  }}
                >
                  <span style={{ color: 'white' }}>W</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                  Workshops & Training
                </h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Intensive workshops focused on specific skills and techniques. Deep-dive into
                  topics that matter most to your development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section style={{ padding: '5rem 1.5rem', background: 'var(--background-alt)' }}>
          <div className="container">
            <h2
              style={{
                fontSize: '2.25rem',
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: '3rem',
              }}
            >
              Why Live Coaching?
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Real-Time
                </div>
                <p style={{ color: 'var(--text-light)' }}>
                  Immediate feedback when it matters most
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Personal
                </div>
                <p style={{ color: 'var(--text-light)' }}>
                  Customized approach for your unique journey
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--primary)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Results
                </div>
                <p style={{ color: 'var(--text-light)' }}>
                  Accelerated growth through expert guidance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
              Ready to Start Your Journey?
            </h2>
            <p
              style={{
                color: 'var(--text-light)',
                maxWidth: '500px',
                margin: '0 auto 2rem',
              }}
            >
              Explore our blog for coaching insights and strategies, or get in touch to begin
              your transformation today.
            </p>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                background: 'var(--primary)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
              }}
            >
              Read Our Blog
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
