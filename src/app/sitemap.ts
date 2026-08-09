import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const siteUrl = 'https://hasibullah.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/projects',
    '/experience',
    '/education',
    '/research',
    '/certifications',
    '/skills',
    '/contact',
    '/resume',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
