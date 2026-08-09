import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { ScrollAnimator } from '@/components/layout/scroll-animator';
import './globals.css';
import { profile } from '@/data/profile';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteUrl = 'https://hasibullah361.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI & Data Science Developer`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} is a Computer Science graduate specializing in Artificial Intelligence, Machine Learning, Computer Vision, and Data Science. Explore projects, skills, and research.`,
  keywords: [
    'Hasib Ullah',
    'AI Developer',
    'Machine Learning',
    'Computer Vision',
    'Data Science',
    'Python Developer',
    'Portfolio',
    'Next.js',
    'Software Developer',
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    title: `${profile.name} — AI & Data Science Developer`,
    description: `Computer Science graduate building practical intelligent systems with AI, Machine Learning, Computer Vision, and Data Science.`,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: `${profile.name} — AI & Data Science Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — AI & Data Science Developer`,
    description: `Computer Science graduate building practical intelligent systems with AI, Machine Learning, Computer Vision, and Data Science.`,
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/images/favicon.png', sizes: '180x180' }],
    shortcut: '/images/favicon.png',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      email: profile.email,
      jobTitle: profile.headline,
      description: profile.shortBio,
      image: `${siteUrl}/images/profile/profile.png`,
      sameAs: [profile.github, profile.linkedin],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Hazara University, Mansehra',
      },
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Computer Vision',
        'Data Science',
        'Python',
        'Software Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: `${profile.name} Portfolio`,
      description: profile.shortBio,
      author: { '@id': `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={inter.variable}
    >
      <head>
        {/* Prevent theme flash: reads localStorage before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:light)').matches){document.documentElement.setAttribute('data-theme','light')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollAnimator />
        </ThemeProvider>
      </body>
    </html>
  );
}
