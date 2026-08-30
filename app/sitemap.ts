import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const routes = [
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
  '/en/',
  '/en/projects/',
  '/en/projects/swagri/',
  '/en/projects/creonix/',
  '/en/projects/goalcompass/',
  '/en/projects/jobcompass/',
  '/en/visions/',
  '/en/visions/intelligence-attractor/',
  '/en/visions/salt-sensitivity/',
  '/en/visions/relational-narrowing/',
  '/en/about/',
  '/de/',
  '/de/projects/',
  '/de/projects/swagri/',
  '/de/projects/creonix/',
  '/de/projects/goalcompass/',
  '/de/projects/jobcompass/',
  '/de/visions/',
  '/de/visions/intelligence-attractor/',
  '/de/visions/salt-sensitivity/',
  '/de/visions/relational-narrowing/',
  '/de/about/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://vitalii87.github.io${route}`,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.7,
  }));
}
