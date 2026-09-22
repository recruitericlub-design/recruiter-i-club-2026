import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  FileCheck, 
  ShieldCheck, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  Scale, 
  HelpCircle, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  AlertTriangle 
} from 'lucide-react';
import AuditSection from '@/components/AuditSection';

export const metadata: Metadata = {
  title: 'Оформлення дозволу на застосування праці іноземців в Україні (ДЦЗ) 2026: держмито, терміни під ключ | Recruiter I Club',
  description: 'Офіційне отримання дозволу на роботу іноземця в Державному центрі зайнятості (ДЦЗ). Держмито 2026 року, строки 7 робочих днів, 100% гарантія відсутності відмов. Захист роботодавця від штрафів Держпраці.',
  keywords: [
    'дозвіл на роботу іноземця україна',
    'дозвіл на застосування праці іноземців дцз',
    'оформлення іноземця на роботу 2026',
    'держмито дозвіл на роботу іноземця',
    'працевлаштування іноземних громадян україна',
    'дозвіл центр зайнятості іноземець',
    'штрафи за нелегальних іноземців держпраці'
  ],
  alternates: {
    canonical: 'https://www.recruiter-i.club/documents/work-permit',
  },
  openGraph: {
    title: 'Оформлення дозволу на застосування праці іноземців (ДЦЗ) 2026 | Recruiter I Club',
    description: 'Отримання дозволу на роботу для іноземних фахівців за 7 робочих днів. Повний супровід від Recruiter I Club: захист від відмов та штрафів Держпраці.',
    url: 'https://www.recruiter-i.club/documents/work-permit',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'article',
  }
};

export default function WorkPermitPage() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Оформлення дозволу на застосування праці іноземців в Україні (ДЦЗ)',
        'provider': {
          '@type': 'EmploymentAgency',
          'name': 'Recruiter I Club',
          'url': 'https://www.recruiter-i.club/'
        },
        'description': 'Офіційний юридичний супровід оформлення дозволу на роботу іноземців через регіональні центри зайнятості України без ризику відмов.',
        'areaServed': 'Ukraine',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
          'description': 'Супровід включений у пакет рекрутингу під ключ'
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
            'name': 'Дозвіл на роботу ДЦЗ',
            'item': 'https://www.recruiter-i.club/documents/work-permit'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Який термін розгляду заяви на дозвіл у центрі зайнятості?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Згідно із Законом України «Про зайнятість населення», термін розгляду заяви про видачу дозволу становить до 7 робочих днів. Для продовження дії діючого дозволу строк складає до 3 робочих днів.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Який розмір офіційного держмита за видачу дозволу у 2026 році?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Розмір державного збору прив’язаний до прожиткового мінімуму для працездатних осіб на 1 січня календарного року: на строк до 6 місяців — 3 прожиткові мінімуми; від 6 місяців до 1 року — 5 прожиткових мінімумів; від 1 до 2 років — 8 прожиткових мінімумів; до 3 років — 10 прожиткових мінімумів.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Які штрафи загрожують за допуск іноземця без дозволу?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Згідно зі статтею 53 ЗУ «Про зайнятість населення», за кожного працівника, допущеного до роботи без дозволу, накладається штраф у двадцятикратному розмірі мінімальної заробітної плати (понад 160 000 – 320 000 грн за особу).'
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
          <span className="text-emerald-400 font-medium">Дозвіл ДЦЗ</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Scale className="w-3.5 h-3.5" />
            Юридичний супровід 2026: ЗУ «Про зайнятість населення»
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl">
            Оформлення дозволу на застосування праці іноземців в Україні: <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">терміни, держмито та супровід під ключ</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Отримайте офіційний дозвіл регіонального центру зайнятості (ДЦЗ) за <strong className="text-white font-semibold">7 робочих днів</strong>. Гарантуємо 100% юридичну чистоту договору, відсутність повернень на доопрацювання та повний захист вашого бізнесу від штрафів Держпраці.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">7 днів</div>
              <div className="text-xs text-slate-400">Регламентний строк розгляду в ДЦЗ</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">1–3 роки</div>
              <div className="text-xs text-slate-400">Термін дії дозволу (з правом пролонгації)</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">0 грн</div>
              <div className="text-xs text-slate-400">Вартість супроводу для клієнтів клубу</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">100%</div>
              <div className="text-xs text-slate-400">Гарантія погодження без штрафів</div>
            </div>
          </div>
        </div>
      </section>

      {/* Official State Fees Breakdown */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Розмір офіційного державного збору у 2026 році
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Держмито сплачується роботодавцем безпосередньо на казначейський рахунок регіонального ДЦЗ після прийняття позитивного рішення про видачу дозволу (протягом 10 робочих днів).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                  До 6 місяців
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Сезонний контракт</h3>
                <p className="text-slate-400 text-xs mb-6">
                  Оптимально для сезонних агропідприємств, збору врожаю або короткострокових монтажних робіт.
                </p>
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">
                  3 прожиткові мінімуми
                </div>
                <div className="text-xs text-slate-500 mb-6">Офіційна ставка до спецфонду Держбюджету</div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Можливість разового продовження
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Швидка реєстрація в податковій
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border-2 border-emerald-500/50 p-6 flex flex-col justify-between relative shadow-xl shadow-emerald-950/20">
              <div className="absolute -top-3 right-6 bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                Найпопулярніший вибір
              </div>
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4">
                  Від 6 міс. до 1 року
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Річний стандартний контракт</h3>
                <p className="text-slate-400 text-xs mb-6">
                  Базовий вибір для виробничих цехів, заводів, логістичних комплексів та будівельних генпідрядників.
                </p>
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">
                  5 прожиткових мінімумів
                </div>
                <div className="text-xs text-slate-500 mb-6">Фіксація квоти та безперервний стаж</div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Отримання ВНЖ (посвідки) на повний рік
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  100% захист від зміни персоналу
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Пролонгація без виїзду за межі України
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                  Від 1 до 2–3 років
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Довгостроковий контракт</h3>
                <p className="text-slate-400 text-xs mb-6">
                  Для ключових інженерів, висококваліфікованих операторів верстатів ЧПК та керівників бригад.
                </p>
                <div className="text-3xl font-extrabold text-emerald-400 mb-1">
                  8–10 прожиткових мінімумів
                </div>
                <div className="text-xs text-slate-500 mb-6">Максимальна стабільність бізнес-процесів</div>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300 pt-4 border-t border-slate-800">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Економія часу на щорічні переподання
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ВНЖ на 2–3 роки для спеціаліста
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Documents & Procedure Workflow */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                Пакет документів для роботодавця
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                Що потрібно для подачі заяви в Центр зайнятості
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Юристи <strong className="text-emerald-400 font-semibold">Recruiter I Club</strong> беруть 90% паперової рутини на себе. Від роботодавця вимагається мінімальний пакет установчих даних:
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Заява встановленого зразка</strong>
                    <span className="text-xs text-slate-400">Формується нашими юристами відповідно до останніх вимог Мінекономіки 2026 року.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Копія закордонного паспорта з нотаріальним перекладом</strong>
                    <span className="text-xs text-slate-400">Організовуємо офіційний переклад та апостилювання в акредитованих бюро.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Проект трудового договору (контракту)</strong>
                    <span className="text-xs text-slate-400">Складаємо договір з урахуванням специфіки виробництва та обов'язкових умов оплати праці.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-sm block">Кольорове фото кандидата 3,5 х 4,5 см</strong>
                    <span className="text-xs text-slate-400">Цифрова підготовка за біометричними стандартами ДМС.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step by step timeline */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                Хронологія отримання дозволу
              </h3>

              <div className="relative border-l-2 border-emerald-500/30 ml-3 space-y-6">
                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">День 1</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Формування кейсу та підписання заяви</div>
                  <div className="text-xs text-slate-400 mt-1">Звірка даних підприємства, вибір посади за Класифікатором професій ДК 003:2010.</div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">День 2</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Подача документів до регіонального ДЦЗ</div>
                  <div className="text-xs text-slate-400 mt-1">Особиста подача або через електронний кабінет роботодавця з ЕЦП/КЕП.</div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">День 3–7</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Розгляд комісією та прийняття наказу</div>
                  <div className="text-xs text-slate-400 mt-1">Моніторинг реєстру рішень. Отримання копії наказу про видачу дозволу.</div>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900" />
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">День 8</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Сплата державного збору</div>
                  <div className="text-xs text-slate-400 mt-1">Роботодавець сплачує квитанцію. ДЦЗ видає офіційний пластиковий/паперовий бланк дозволу.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal risks & compliance */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-red-500/5 border border-red-500/20 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ризики роботи без дозволу: Штрафи Держпраці до 320 000 грн
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Згідно зі ст. 53 Закону України «Про зайнятість населення», фактичний допуск іноземця до роботи без оформленого дозволу тягне за собою штраф у розмірі <strong className="text-red-400 font-semibold">20 мінімальних заробітних плат за кожного працівника</strong>. Крім того, нелегальне працевлаштування є підставою для негайної депортації працівника із забороною в'їзду в Україну на строк до 5 років.
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" /> Юристи клубу гарантують 100% комплаєнс
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" /> Прямий трудовий договір або аутстафінг
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-slate-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              Часті запитання щодо дозволів на роботу
            </h2>
            <p className="text-slate-400 text-sm">
              Відповіді на головні юридичні питання від керівників підприємств
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Чи може іноземець працювати на кількох посадах в одній компанії?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Так, робота за сумісництвом на тому ж підприємстві дозволена, проте на кожну посаду отримується окремий дозвіл або вноситься відповідна кваліфікаційна зміна згідно з чинним порядком ДЦЗ.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Що відбувається, якщо центр зайнятості повертає документи?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                При співпраці з Recruiter I Club ризик повернення зведений до 0. Ми проводимо подвійний пре-аудит кожного контракту в нашому юридичному департаменті до офіційної подачі в ДЦЗ.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Чи потрібен дозвіл для громадян з посвідкою на постійне проживання (ПМЖ)?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ні, іноземці, які постійно проживають в Україні та мають безстрокову посвідку (ПМЖ), працевлаштовуються у загальному порядку без оформлення дозволу ДЦЗ. Дозвіл потрібен виключно для трудових мігрантів з тимчасовим статусом перебування.
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
