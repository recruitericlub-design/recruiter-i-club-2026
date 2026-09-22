import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award } from 'lucide-react';
import { PROFESSIONS_DATA } from '@/lib/professionsData';

export const metadata: Metadata = {
  title: 'Каталог робітничих професій з Азії для бізнесу України',
  description: 'Повний каталог кваліфікованого іноземного персоналу: зварювальники, арматурники, водії навантажувача, оператори ЧПК, фасувальники, робітники теплиць. Офіційний підбір під ключ.',
  keywords: 'підбір персоналу, робітничі спеціальності, зварювальники з узбекистану, будівельники з азії, складські працівники аутсорсинг, лінійний персонал україна',
  alternates: {
    canonical: 'https://www.recruiter-i.club/professions',
  },
  openGraph: {
    title: 'Каталог робітничих професій з Азії | Recruiter I Club',
    description: 'Зварювальники 6G/MIG-MAG, арматурники, водії кари, оператори ЧПК. Професійні Trade Tests та гарантія заміни.',
    url: 'https://www.recruiter-i.club/professions',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://www.recruiter-i.club/images/logo/og_share_preview.png',
        width: 1200,
        height: 630,
        alt: 'Каталог робітничих спеціальностей Recruiter I Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Каталог робітничих професій з Азії | Recruiter I Club',
    description: 'Офіційний підбір лінійного персоналу для підприємств України під ключ.',
    images: ['https://www.recruiter-i.club/images/logo/og_share_preview.png'],
  },
};

export default function ProfessionsCatalogPage() {
  const professions = Object.values(PROFESSIONS_DATA);

  return (
    <div className="bg-warm-paper min-h-screen py-16">
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Головна",
                "item": "https://www.recruiter-i.club/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Каталог професій",
                "item": "https://www.recruiter-i.club/professions"
              }
            ]
          }),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-3.5 py-1 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            Кваліфікований лінійний персонал «під ключ»
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Каталог робітничих спеціальностей
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Оберіть необхідну професію для вашого виробництва, будівництва чи складу. Усі кандидати проходять практичний Trade-Test на наших закордонних полігонах та мають 100% імунітет від мобілізації (ст. 23 ЗУ).
          </p>
        </div>

        {/* Grid of Professions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professions.map((prof) => (
            <div 
              key={prof.slug}
              className="tactile-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{prof.icon}</span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                    {prof.categoryLabel}
                  </span>
                </div>

                <h2 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {prof.title}
                </h2>
                
                <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                  {prof.description}
                </p>

                <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Країни відбору:</span>
                    <strong className="text-slate-800">{prof.countries.join(', ')}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Орієнтир зарплати:</span>
                    <strong className="text-emerald-700 font-bold">{prof.salaryRange}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Термін виходу:</span>
                    <strong className="text-slate-800">{prof.timelineDays}</strong>
                  </div>
                </div>
              </div>

              <Link
                href={`/professions/${prof.slug}`}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 group-hover:shadow-md"
              >
                <span>Переглянути досьє та Trade-Test</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
