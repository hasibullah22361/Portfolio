import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import './globals.css';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.headline}`,
  description: profile.shortBio,
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
