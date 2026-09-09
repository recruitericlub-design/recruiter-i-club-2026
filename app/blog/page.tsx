import React from 'react';
import { BookOpen, ShieldCheck, Sparkles, Building2, Globe2 } from 'lucide-react';
import { articlesData } from '@/lib/articlesData';
import BlogCatalogClient from './BlogCatalogClient';

export const metadata = {
  title: 'База знань та експертні керівництва найму іноземців 2026 | Recruiter I Club',
  description: 'Повний каталог B2B та B2C статей: юридичний комплаєнс, дозвіл ДЦЗ, оподаткування ФОТ, візи D-04, захист від мобілізації та адаптація іноземного персоналу.',
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
