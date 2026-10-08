import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Etalmic Scholars',
  description: 'A STEM scholarship discovery platform that monitors opportunities, ministries, and social feeds.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
