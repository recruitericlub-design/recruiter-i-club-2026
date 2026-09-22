import React from 'react';
import { BookOpen, ShieldCheck, Sparkles, Building2, Globe2 } from 'lucide-react';
import { articlesData } from '@/lib/articlesData';
import BlogCatalogClient from './BlogCatalogClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'База знань та експертні керівництва найму іноземців 2026 | Recruiter I Club',
  description: 'Повний каталог B2B та B2C статей: юридичний комплаєнс, дозвіл ДЦЗ, оподаткування ФОТ, візи D-04, захист від мобілізації та адаптація іноземного персоналу.',
  keywords: [
    'підбір іноземців на роботу в україну',
    'завіз іноземців',
    'завоз иностранцев',
    'завоз трудовых мигрантов',
    'завезення трудових мігрантів',
    'подбор иностранцев на работу в украину',
    'імпорт робочої сили в україну',
    'база знань рекрутинг україна',
    'дозвіл на роботу іноземця закон',
    'стаття 23 мобілізація іноземці',
    'податки на іноземних працівників',
    'recruiter i club блог'
  ],
  alternates: {
    canonical: 'https://www.recruiter-i.club/blog',
  },
  openGraph: {
    title: 'База знань та аналітика з найму іноземців 2026 | Recruiter I Club',
    description: 'Юридичний комплаєнс, податки ФОТ, візи D-04 та захист від мобілізації (ст. 23 ЗУ) для роботодавців України.',
    url: 'https://www.recruiter-i.club/blog',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://www.recruiter-i.club/images/logo/og_share_preview.png',
        width: 1200,
        height: 630,
        alt: 'База знань Recruiter I Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'База знань з найму іноземного персоналу | Recruiter I Club',
    description: 'Експертні керівництва щодо легального працевлаштування робітників з Азії в Україні.',
    images: ['https://www.recruiter-i.club/images/logo/og_share_preview.png'],
  },
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-blue-600" />
          База знань &amp; Юридична аналітика 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Експертні керівництва: Легальний імпорт персоналу та комплаєнс
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Практичні інструкції, розрахунки окупності, міграційне законодавство України, податки ФОТ та захист виробничих процесів для українських роботодавців та іноземних фахівців.
        </p>
      </div>

      {/* Interactive Catalog */}
      <BlogCatalogClient articles={articlesData} />

    </div>
  );
}
