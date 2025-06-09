import { siteConfig } from './metadata';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
} 