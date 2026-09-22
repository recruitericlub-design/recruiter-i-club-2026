import { MetadataRoute } from 'next';
import { PROFESSIONS_DATA } from '@/lib/professionsData';

import { articlesData } from '@/lib/articlesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.recruiter-i.club';
  const now = new Date();

  const staticPages = [
    { url: baseUrl + '/', lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: baseUrl + '/ru', lastModified: now, changeFrequency: 'daily' as const, priority: 0.95 },
    { url: baseUrl + '/professions', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/countries', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/calculator', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: baseUrl + '/trade-tests', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: baseUrl + '/blog', lastModified: now, changeFrequency: 'daily' as const, priority: 0.85 },
    { url: baseUrl + '/about', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const countries = ['india', 'uzbekistan', 'nepal', 'bangladesh', 'philippines'];
  const countryPages = countries.map((c) => ({
    url: baseUrl + '/countries/' + c,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const professionPages = Object.keys(PROFESSIONS_DATA).map((slug) => ({
    url: baseUrl + '/professions/' + slug,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const articlePages = articlesData.map((article) => ({
    url: baseUrl + '/blog/' + article.slug,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...countryPages, ...professionPages, ...articlePages];
}
