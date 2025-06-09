import { siteConfig } from './metadata';

export default function sitemap() {
  const routes = ['', '/features', '/how-it-works', '/benefits'].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 