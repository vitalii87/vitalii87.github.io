import type { Metadata } from 'next';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import './globals.css';

const siteUrl = process.env.SITE_URL ?? 'https://zhyliaiev.eu';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'V/01 — Projects, theories and visions',
  description:
    'Vitalii Zhyliaiev’s projects, research hypotheses and perspectives on intelligence, technology and future systems.',
  openGraph: {
    title: 'V/01 — Projects, theories and visions',
    description: 'I build systems. I formulate hypotheses.',
    type: 'website',
    images: [{ url: '/og.png', width: 1792, height: 940, alt: 'V/01 — Projects, theories and visions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V/01 — Projects, theories and visions',
    description: 'I build systems. I formulate hypotheses.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
