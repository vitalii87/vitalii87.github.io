import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const routes = [
  '',
  '/projects/',
  '/projects/jobcompass/',
  '/projects/thought-traces/',
  '/projects/qa-automation/',
  '/visions/',
  '/visions/intelligence-attractor/',
  '/visions/salt-sensitivity/',
  '/visions/relational-narrowing/',
  '/about/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://vitalii87.github.io${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }));
}
