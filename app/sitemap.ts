import type { MetadataRoute } from 'next';
import { dualRisingPath, dualRisingPublished, dualRisingUpdated } from './content/dualRising';
import { essayLocales, essayPath, essaySlugs } from './content/philosophicalEssays';

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
  dualRisingPath,
  '/about/',
];

const essayRoutes = essayLocales.flatMap((lang) => essaySlugs.map((slug) => essayPath(lang, slug)));

const routes = [
  ...contentPaths,
  ...contentPaths.filter((path) => path !== '/visions/intelligence-attractor/paper/').map((path) => `/de${path}`),
  ...contentPaths.filter((path) => path !== '/visions/intelligence-attractor/paper/').map((path) => `/ua${path}`),
  '/ua/projects/qa-automation/',
  '/ua/projects/thought-traces/',
  ...essayRoutes,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => {
    const isPaper = route === '/visions/intelligence-attractor/paper/';
    const isVision = route.includes('/visions/') || route.endsWith('/visions/');
    const isDualRising = route.endsWith(dualRisingPath);
    const isVisionsIndex = route.endsWith('/visions/');
    return {
      url: `https://zhyliaiev.eu${route}`,
      lastModified: essayRoutes.includes(route) || isVisionsIndex ? new Date('2026-11-19') : isDualRising ? new Date(dualRisingUpdated) : isVision ? new Date('2026-09-08') : undefined,
      changeFrequency: route === '' || isVision ? 'monthly' : 'yearly',
      priority: route === '' ? 1 : isPaper ? 0.9 : 0.7,
    };
  });
}
