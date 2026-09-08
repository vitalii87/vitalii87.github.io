import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const contentPaths = [
  '',
  '/projects/',
  '/projects/swagri/',
  '/projects/creonix/',
  '/projects/goalcompass/',
  '/projects/jobcompass/',
  '/visions/',
  '/visions/intelligence-attractor/',
  '/visions/intelligence-attractor/paper/',
  '/visions/origin-attenuation/',
  '/visions/relational-narrowing/',
  '/about/',
];

const routes = [
  ...contentPaths,
  ...contentPaths.filter((path) => path !== '/visions/intelligence-attractor/paper/').map((path) => `/de${path}`),
  ...contentPaths.filter((path) => path !== '/visions/intelligence-attractor/paper/').map((path) => `/ua${path}`),
  '/ua/projects/qa-automation/',
  '/ua/projects/thought-traces/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const isPaper = route === '/visions/intelligence-attractor/paper/';
    const isVision = route.includes('/visions/') || route.endsWith('/visions/');
    return {
      url: `https://zhyliaiev.eu${route}`,
      lastModified: isVision ? new Date('2026-09-08') : undefined,
      changeFrequency: route === '' || isVision ? 'monthly' : 'yearly',
      priority: route === '' ? 1 : isPaper ? 0.9 : 0.7,
    };
  });
}
