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
  '/visions/salt-sensitivity/',
  '/visions/relational-narrowing/',
  '/about/',
];

const routes = [
  ...contentPaths,
  ...contentPaths.map((path) => `/de${path}`),
  ...contentPaths.map((path) => `/ua${path}`),
  '/ua/projects/qa-automation/',
  '/ua/projects/thought-traces/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://zhyliaiev.eu${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }));
}
