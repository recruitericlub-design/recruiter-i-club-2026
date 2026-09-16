import { MetadataRoute } from 'next';
import { PROFESSIONS_DATA } from '@/lib/professionsData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.recruiter-i.club';
  const now = new Date();

  const staticPages = [
    { url: baseUrl + '/', lastModified: now, changeFrequency: 'daily' as const, priority: 1.0 },
    { url: baseUrl + '/ru', lastModified: now, changeFrequency: 'daily' as const, priority: 0.95 },
    { url: baseUrl + '/professions', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/countries', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: baseUrl + '/blog', lastModified: now, changeFrequency: 'daily' as const, priority: 0.9 },
    { url: baseUrl + '/trade-tests', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.85 },
    { url: baseUrl + '/about', lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: baseUrl + '/portal', lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
  ];

  const countries = ['india', 'uzbekistan', 'kazakhstan', 'nepal', 'bangladesh', 'vietnam', 'philippines'];
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

  const blogArticles = [
    'legal-guide-foreign-worker-hiring-ukraine-2026',
    'article-23-law-ukraine-mobilization-exemption',
    'economic-efficiency-import-workers-roi-2026',
    'pricing-cost-of-importing-workers-2026',
    'taxes-foreign-employee-taxation-ukraine-2026',
    'adaptation-overcoming-language-barrier-on-production',
    'industries-construction-and-agriculture-workers',
    'industries-manufacturing-and-textile-workers',
    'legal-extending-work-permit-ukraine-lifehack',
    'legal-work-permit-and-trc-guide',
    'logistics-import-timeline-asia-to-ukraine',
    'logistics-transit-corridor-chisinau-odesa',
    'work-in-ukraine-extending-work-contract-second-year',
    'work-in-ukraine-legal-guide-for-foreigners',
    'work-in-ukraine-salary-accommodation-and-worker-rights',
    'work-in-ukraine-trc-temporary-residence-card',
    'work-in-ukraine-visa-d04-and-medical-requirements',
  ];

  const articlePages = blogArticles.map((slug) => ({
    url: baseUrl + '/blog/' + slug,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticPages, ...countryPages, ...professionPages, ...articlePages];
}
