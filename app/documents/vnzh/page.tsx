import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Building, 
  MapPin, 
  BadgePercent, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight 
} from 'lucide-react';
import AuditSection from '@/components/AuditSection';

export const metadata: Metadata = {
  title: 'Посвідка на тимчасове проживання (ВНЖ) для іноземних працівників 2026: ДМС, прописка, ІПН під ключ | Recruiter I Club',
  description: 'Офіційне отримання біометричної посвідки на тимчасове проживання (ВНЖ) в Україні на підставі дозволу ДЦЗ. Супровід у ДМС, реєстрація місця проживання, отримання ІПН та зарплатний проект.',
  keywords: [
    'посвідка на тимчасове проживання внж україна',
    'внж для іноземних працівників 2026',
    'оформлення посвідки дмс іноземець',
    'прописка іноземця україна реєстрація',
    'отримання іпн для іноземця',
    'зарплатний проект іноземні працівники',
    'легалізація іноземного персоналу під ключ'
  ],
  alternates: {
    canonical: 'https://www.recruiter-i.club/documents/vnzh',
  },
  openGraph: {
    title: 'Посвідка на проживання (ВНЖ) для іноземних працівників 2026 | Recruiter I Club',
    description: 'Оформлення ID-картки ВНЖ у Державній міграційній службі (ДМС) на 1–3 роки. Повний супровід роботодавця та реєстрація адреси.',
    url: 'https://www.recruiter-i.club/documents/vnzh',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'article',
  }
};

export default function VnzhPage() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Оформлення посвідки на тимчасове проживання (ВНЖ) для іноземних працівників',
        'provider': {
          '@type': 'EmploymentAgency',
          'name': 'Recruiter I Club',
          'url': 'https://www.recruiter-i.club/'
        },
        'description': 'Комплексний юридичний супровід отримання біометричної посвідки на тимчасове проживання в органах ДМС України та реєстрації місця проживання.',
        'areaServed': 'Ukraine',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
          'description': 'Супровід входить у повний пакет рекрутингу під ключ'
        }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Головна',
            'item': 'https://www.recruiter-i.club/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Документи',
            'item': 'https://www.recruiter-i.club/documents/work-permit'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Посвідка на проживання ВНЖ',
            'item': 'https://www.recruiter-i.club/documents/vnzh'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'На який термін видається посвідка на тимчасове проживання для працівника?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Посвідка на тимчасове проживання (ВНЖ) видається на строк дії дозволу на застосування праці, виданого Державним центром зайнятості України — зазвичай на 1 рік, з можливістю подальшого продовження на 2 або 3 роки без виїзду з України.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Скільки часу є у роботодавця для реєстрації місця проживання («прописки»)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Згідно із законодавством України, іноземець зобов’язаний зареєструвати своє місце проживання в органах місцевого самоврядування (ЦНАП) протягом 30 календарних днів з дня отримання готової біометричної посвідки на проживання.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Як виплачується заробітна плата іноземному працівнику?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Після оформлення ВНЖ та податкового номера (РНОКПП) для працівника відкривається банківський рахунок в українському банку. Заробітна плата нараховується офіційно у гривні в безготівковій формі з повною сплатою всіх податків (ПДФО 18%, ЄСВ 22%, Військовий збір).'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
      />

      {/* Breadcrumbs Navigation */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs sm:text-sm text-slate-400">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Головна</Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">Документи</span>
          <span className="text-slate-600">/</span>
          <span className="text-emerald-400 font-medium">Посвідка ВНЖ</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <CreditCard className="w-3.5 h-3.5" />
            Легалізація в ДМС України: Біометрична ID-картка 2026
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl">
            Посвідка на тимчасове проживання (ВНЖ): <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">повна легалізація персоналу в ДМС</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Отримання біометричної ID-картки в Державній міграційній службі (ДМС) на 1–3 роки. Супровід подачі, біометрії, офіційна реєстрація місця проживання (прописка) та відкриття банківських рахунків для виплати білої заробітної плати.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">15 днів</div>
              <div className="text-xs text-slate-400">Строк виготовлення біометричної карти в ДМС</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">1–3 роки</div>
              <div className="text-xs text-slate-400">Термін дії статусу легального проживання</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">30 днів</div>
              <div className="text-xs text-slate-400">Регламент на реєстрацію адреси у ЦНАП</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">100%</div>
              <div className="text-xs text-slate-400">Юридичний комплаєнс перед ДМС та ДПС</div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Arrival Workflow */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Покроковий процес легалізації після прибуття в Україну
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Наші міграційні юристи координують кожен крок працівника з першого дня перетину кордону:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-2">Подача до ДМС</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Подача оригіналу дозволу ДЦЗ, візи D та паспорта не пізніше ніж за 15 робочих днів до завершення дозволеного строку перебування.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-2">Біометрія та ID-картка</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Сканування відбитків пальців, біометричне цифрове фото та видача безконтактної електронної пластикової ID-картки ВНЖ.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-2">Прописка у ЦНАП</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Офіційне внесення відомостей про зареєстроване місце проживання до електронного реєстру територіальної громади протягом 30 днів.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-white mb-2">ІПН та Банківські картки</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Отримання картки платника податків у ДПС та випуск банківських карток для законного нарахування білої зарплати.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax & Payroll Compliance */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                <BadgePercent className="w-3.5 h-3.5 text-emerald-400" />
                Оподаткування та біла бухгалтерія
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                Податковий статус іноземного працівника в Україні
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Офіційно працевлаштований іноземець сплачує податки в бюджет України за тими ж ставками, що й громадяни України. Роботодавець отримує абсолютно прозору бухгалтерську звітність:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <div>
                    <strong className="text-white text-sm block">Єдиний соціальний внесок (ЄСВ)</strong>
                    <span className="text-xs text-slate-400">Нараховується роботодавцем на фонд оплати праці</span>
                  </div>
                  <div className="text-xl font-black text-emerald-400">22%</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <div>
                    <strong className="text-white text-sm block">Податок на доходи фізичних осіб (ПДФО)</strong>
                    <span className="text-xs text-slate-400">Утримується із заробітної плати працівника</span>
                  </div>
                  <div className="text-xl font-black text-white">18%</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
                  <div>
                    <strong className="text-white text-sm block">Військовий збір</strong>
                    <span className="text-xs text-slate-400">Утримується згідно з чинними ставками Податкового кодексу</span>
                  </div>
                  <div className="text-xl font-black text-white">За законом</div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Звільнення від військового обліку
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Відповідно до <strong className="text-emerald-400">ст. 23 Закону України «Про мобілізаційну підготовку та мобілізацію»</strong>, особи з іноземним громадянством не підлягають військовому призову, не стають на облік у ТЦК та СП і не мають мобілізаційних ризиків.
              </p>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 leading-relaxed">
                ✓ 100% збереження робочої сили протягом усього періоду дії трудового договору без несподіваного вилучення персоналу з виробничої зміни.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              Часті запитання щодо посвідки ВНЖ
            </h2>
            <p className="text-slate-400 text-sm">
              Роз’яснення міграційних норм для кадрових служб
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Де реєструється адреса проживання працівників?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Реєстрація проводиться у житловому приміщенні: гуртожитку підприємства, орендованій квартирі або приватному будинку на підставі письмової згоди власника житла. Юристи клубу допомагають укласти правильний договір оренди для ЦНАП.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Як продовжити дію посвідки ВНЖ на наступний рік?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Продовження відбувається за 20 робочих днів до закінчення терміну дії поточної посвідки: спочатку роботодавець продовжує дозвіл у центрі зайнятості (ДЦЗ), після чого документи подаються до ДМС для перевипуску ID-картки без необхідності виїзду працівника з території України.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Що відбувається у разі дострокового розірвання контракту?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                У разі звільнення працівника роботодавець повідомляє ДЦЗ та ДМС. Посвідка на тимчасове проживання скасовується, а працівник зобов’язаний покинути територію України протягом 7 днів або бути переоформлений на інше підприємство згідно з гарантійними зобов'язаннями нашого клубу.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AuditSection />
    </div>
  );
}
