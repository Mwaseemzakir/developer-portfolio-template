import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import portfolioConfig from '@/config/portfolio.config';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.title}`,
  description: portfolioConfig.summary,
  keywords: [
    portfolioConfig.personal.name,
    portfolioConfig.personal.title,
    ...portfolioConfig.skills.flatMap((c) => c.skills).slice(0, 10),
  ],
  openGraph: {
    title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.title}`,
    description: portfolioConfig.summary,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
