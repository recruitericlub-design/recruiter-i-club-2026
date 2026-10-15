import { MetadataRoute } from 'next';
import { PROFESSIONS_DATA } from '@/lib/professionsData';

import { articlesData } from '@/lib/articlesData';
import { parseUkDate } from '@/lib/ukDate';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.recruiter-i.club';
  // Honest lastmod: static pages use the last known content refresh
  // (matches the newest article date), articles use their own dates.
  // The old `new Date()` made every page look "updated today", which
  // crawlers learn to ignore.
  const siteUpdated = new Date('2026-09-21T00:00:00+03:00');
  const now = siteUpdated;

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
    lastModified: parseUkDate(article.date, siteUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const documentPages = [
    { url: baseUrl + '/documents/work-permit', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/documents/visa-d', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/documents/vnzh', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  const industryPages = [
    { url: baseUrl + '/industries/vyrobnytstvo', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/industries/lohistyka', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/industries/budivnytstvo', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
  ];

  return [...staticPages, ...documentPages, ...industryPages, ...countryPages, ...professionPages, ...articlePages];
}
