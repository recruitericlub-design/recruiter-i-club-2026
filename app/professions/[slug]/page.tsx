import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Clock, Award, Users, AlertCircle } from 'lucide-react';
import { PROFESSIONS_DATA } from '@/lib/professionsData';
import AuditSection from '@/components/AuditSection';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(PROFESSIONS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = PROFESSIONS_DATA[params.slug];
  if (!item) return {};

  return {
    title: item.seoTitle,
    description: item.seoDescription,
    keywords: item.keywords,
    alternates: {
      canonical: `https://www.recruiter-i.club/professions/${params.slug}`,
    },
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      url: `https://www.recruiter-i.club/professions/${params.slug}`,
      siteName: 'Recruiter I Club',
      locale: 'uk_UA',
      type: 'website',
    },
  };
}

export default function ProfessionDetailPage({ params }: Props) {
  const item = PROFESSIONS_DATA[params.slug];
  if (!item) notFound();

  const schemas: any[] = [
    {
      '@type': 'Service',
      'name': item.title,
      'provider': {
        '@type': 'EmploymentAgency',
        'name': 'Recruiter I Club',
        'url': 'https://www.recruiter-i.club/',
      },
      'description': item.seoDescription,
      'areaServed': 'Ukraine',
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': item.title,
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': `Офіційний підбір: ${item.title}`,
              'description': item.tradeTestSpec,
            },
          },
        ],
      },
    },
  ];

  if (item.videoSample) {
    schemas.push({
      '@type': 'VideoObject',
      'name': item.videoSample.title,
      'description': item.videoSample.description,
      'thumbnailUrl': [item.videoSample.thumbnailUrl],
      'uploadDate': item.videoSample.uploadDate,
      'duration': item.videoSample.duration,
      'contentUrl': `https://www.recruiter-i.club${item.videoSample.videoUrl}`,
      'embedUrl': `https://www.recruiter-i.club${item.videoSample.videoUrl}`,
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-warm-paper min-h-screen pt-10 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <Link 
            href="/professions" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-700 transition mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Назад до каталогу професій</span>
          </Link>

          {/* Hero Banner */}
          <div className="tactile-card rounded-3xl p-8 sm:p-12 mb-10 bg-white border border-slate-200 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-100 text-emerald-900 border border-emerald-200">
                    {item.categoryLabel}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
                  {item.title}
                </h1>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl font-bold text-slate-800">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Термін: {item.timelineDays}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-xl font-bold text-emerald-800 border border-emerald-200">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% захист від мобілізації (ст. 23 ЗУ)</span>
                  </span>
                </div>
              </div>

              {/* Fast Card */}
              <div className="w-full lg:w-72 bg-slate-900 text-white rounded-2xl p-6 shrink-0 shadow-lg">
                <div className="text-xs text-slate-400 mb-1 font-mono uppercase">Орієнтовний оклад</div>
                <div className="text-2xl font-black text-amber-400 mb-4">{item.salaryRange}</div>
                
                <div className="text-xs text-slate-300 space-y-2 mb-6 border-t border-slate-800 pt-3">
                  <div>Країни: <strong className="text-white">{item.countries.join(', ')}</strong></div>
                  <div>Комісія: <strong className="text-emerald-400">Строго після виходу</strong></div>
                  <div>Заміна: <strong className="text-white">Безкоштовно (договір)</strong></div>
                </div>

                <a 
                  href="#audit" 
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center transition"
                >
                  Замовити підбір бригади
                </a>
              </div>
            </div>
          </div>

          {/* Trade Test Spec */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="tactile-card rounded-3xl p-8 bg-white">
              <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <span>Практичний Trade-Test перед відправкою</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {item.tradeTestSpec}
              </p>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Підтверджені навички:</h3>
              <ul className="space-y-2">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              {item.videoSample && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Відеозапис випробування
                    </span>
                    <Link 
                      href="/trade-tests"
                      className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 underline"
                    >
                      Всі відео Trade-Tests →
                    </Link>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-inner">
                    <video 
                      controls 
                      preload="metadata" 
                      poster={item.videoSample.thumbnailUrl} 
                      className="w-full h-auto aspect-video max-h-56 object-cover"
                    >
                      <source src={item.videoSample.videoUrl} type="video/mp4" />
                      Ваш браузер не підтримує відтворення відео.
                    </video>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 italic">
                    {item.videoSample.description}
                  </p>
                </div>
              )}
            </div>

            <div className="tactile-card rounded-3xl p-8 bg-white">
              <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Гарантії для роботодавця</span>
              </h2>
              <ul className="space-y-3 mb-6">
                {item.advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span>Жодних оплат за підбір до приїзду людей на ваше підприємство. Ви сплачуєте лише після виходу на зміну.</span>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="tactile-card rounded-3xl p-8 bg-white mb-12">
            <h2 className="text-xl font-black text-slate-900 mb-6">
              Часті запитання щодо спеціальності
            </h2>
            <div className="space-y-4">
              {item.faq.map((f, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1.5">{f.q}</div>
                  <div className="text-xs text-slate-600 leading-relaxed">{f.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Audit CTA */}
          <div id="audit">
            <AuditSection />
          </div>

        </div>
      </div>
    </>
  );
}
