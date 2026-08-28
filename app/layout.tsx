import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
