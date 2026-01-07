import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Live Coaching Blog',
  description: 'Insights and strategies for effective live coaching',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
