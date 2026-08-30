import type { Metadata } from 'next';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import './globals.css';

const siteUrl = process.env.SITE_URL ?? 'https://vitalii87.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'V/01 — Проєкти, теорії та бачення',
  description:
    'Персональний простір про технології, продукти та ідеї, які варто перевірити на практиці.',
  openGraph: {
    title: 'V/01 — Проєкти, теорії та бачення',
    description: 'Створюю речі. Осмислюю системи.',
    type: 'website',
    images: [{ url: '/og.png', width: 1792, height: 940, alt: 'V/01 — Проєкти, теорії та бачення' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V/01 — Проєкти, теорії та бачення',
    description: 'Створюю речі. Осмислюю системи.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
