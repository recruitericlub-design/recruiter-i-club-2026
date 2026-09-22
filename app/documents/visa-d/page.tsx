import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Plane, 
  ShieldCheck, 
  Clock, 
  FileText, 
  CheckCircle2, 
  MapPin, 
  Compass, 
  Globe2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight 
} from 'lucide-react';
import AuditSection from '@/components/AuditSection';

export const metadata: Metadata = {
  title: 'Робоча віза типу D-04 в Україну для іноземців 2026: терміни, консульства, e-Consul під ключ | Recruiter I Club',
  description: 'Повний юридичний супровід отримання довгострокової робочої візи D-04 для робітників з Індії, Бангладеш, Непалу. Запис в електронну чергу e-Consul, гарантійні листи, проходження консульства та логістика під ключ.',
  keywords: [
    'робоча віза d-04 україна',
    'віза d для іноземних працівників',
    'отримання робочої візи в україну 2026',
    'віза в україну для громадян індії',
    'посольство україни в делі робоча віза',
    'e-consul електронна черга віза d',
    'логістика іноземних робітників в україну'
  ],
  alternates: {
    canonical: 'https://www.recruiter-i.club/documents/visa-d',
  },
  openGraph: {
    title: 'Робоча віза D-04 в Україну: супровід під ключ 2026 | Recruiter I Club',
    description: 'Оформлення візи типу D-04 для іноземних фахівців. Супровід у консульствах, логістика до цеху замовника через Кишинів та Варшаву.',
    url: 'https://www.recruiter-i.club/documents/visa-d',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'article',
  }
};

export default function VisaDPage() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Оформлення робочої візи D-04 для в’їзду в Україну',
        'provider': {
          '@type': 'EmploymentAgency',
          'name': 'Recruiter I Club',
          'url': 'https://www.recruiter-i.club/'
        },
        'description': 'Супровід процесу отримання довгострокових робочих віз категорії D для трудових мігрантів у дипломатичних установах України за кордоном.',
        'areaServed': 'Ukraine',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
          'description': 'Включено в комплексний пакет рекрутингу під ключ'
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
            'name': 'Робоча віза D-04',
            'item': 'https://www.recruiter-i.club/documents/visa-d'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Що таке віза D-04 і хто має право її отримати?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Віза D-04 — це довгострокова національна в’їзна віза в Україну, яка видається іноземцям на підставі офіційного дозволу на застосування праці, виданого Державним центром зайнятості України. Вона дає право на законний в’їзд та подальше оформлення посвідки на тимчасове проживання (ВНЖ).'
            }
          },
          {
            '@type': 'Question',
            'name': 'Скільки часу займає відкриття візи D в консульстві України?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Стандартний регламентний термін розгляду візової анкети в консульствах України становить від 10 до 15 робочих днів. У терміновому порядку (зі сплатою подвійного консульського збору) термін розгляду може бути скорочений до 5 робочих днів.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Як організований в’їзд кандидатів в Україну при закритому авіапросторі?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Recruiter I Club забезпечує повністю організований безпечний коридор: прямий переліт кандидата до міжнародних аеропортів Кишинева (Молдова) або Варшави/Кракова (Польща), зустріч нашим представником та наземний трансфер комфортабельним автобусом через державний кордон безпосередньо до місця проживання поруч із вашим виробництвом.'
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
          <span className="text-emerald-400 font-medium">Робоча віза D-04</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.08),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Plane className="w-3.5 h-3.5" />
            Міжнародний візовий коридор: Консульства України 2026
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl">
            Робоча віза типу D-04 в Україну: <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">гарантований в’їзд і логістика під ключ</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Отримання довгострокової робочої візи в дипломатичних установах України в країнах Азії. Повний супровід кандидата: електронна черга в посольстві, проходження консульської співбесіди, медичні страховки та безпечний наземний трансфер до вашого підприємства.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">10–15 днів</div>
              <div className="text-xs text-slate-400">Розгляд у консульстві України</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">90 днів</div>
              <div className="text-xs text-slate-400">Коридор для законного в'їзду в Україну</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">e-Consul</div>
              <div className="text-xs text-slate-400">Пряме бронювання слотів без посередників</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">100%</div>
              <div className="text-xs text-slate-400">Супровід перетину кордону з ДПСУ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Visa Package */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Обов'язковий візовий пакет документів для візи D-04
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Консульські установи України пред’являють суворі вимоги до легальності пакету документів. Наші локальні хаби в країнах вильоту готують досьє за стандартами МЗС України:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Оригінал дозволу ДЦЗ</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Дозвіл на застосування праці від Державного центру зайнятості України, підтверджений у загальнодержавному реєстрі.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Гарантійний лист роботодавця</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Офіційний лист за підписом директора підприємства із зобов’язанням забезпечити працівника житлом, офіційною зарплатою та зворотнім квитком.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Міжнародний поліс страхування</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Медичний страховий поліс із мінімальним покриттям 30 000 євро, визнаний консульськими установами України.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Біометричний закордонний паспорт</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Паспорт з терміном дії не менше ніж 3 місяці після планованої дати виїзду з України та мінімум двома чистими сторінками.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                5
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Довідка про несудимість з апостилем</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Офіційне підтвердження кримінальної чистоти кандидата в країні громадянства, легалізоване або апостильоване за регламентом.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold mb-4">
                6
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Консульський збір</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Квитанція про сплату офіційного консульського збору (базовий тариф $65 або терміновий тариф $130).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Logistics Route */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              Логістика при закритому авіапросторі України
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Безпечний транзитний коридор «Азія — Європа — Ваше підприємство»
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Recruiter I Club створив надійний наземний хаб прибуття. Ми не залишаємо працівника сам на сам з дорогою — кожна група супроводжується координатором від посадки в літак до першої зміни на виробництві:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Етап 1: Виліт з Азії</div>
              <h3 className="text-lg font-bold text-white mb-2">Аеропорти Делі / Дакка / Ташкент</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Груповий виліт регулярними рейсами міжнародних авіаліній (FlyDubai, Air Arabia, Turkish Airlines). Передпосадковий інструктаж координатора.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">Тривалість: 6–9 годин</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Етап 2: Транзитний хаб</div>
              <h3 className="text-lg font-bold text-white mb-2">Кишинів (KIV) або Варшава (WAW)</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Прибуття в європейський аеропорт. Зустріч представником Recruiter I Club, гаряче харчування, перевірка документів перед посадкою в автобус.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">Тривалість: 2–4 години</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Етап 3: Доставка до цеху</div>
              <h3 className="text-lg font-bold text-white mb-2">Організований наземний трансфер</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Прямий комфортний автобус до вашого виробництва в Києві, Львові, Дніпрі, Одесі або Черкасах. Юридичний супровід на КПП Держприкордонслужби.
              </p>
              <div className="text-[11px] text-slate-500 font-mono">Тривалість: 4–8 годин</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              Часті запитання щодо робочих віз D-04
            </h2>
            <p className="text-slate-400 text-sm">
              Юридичні деталі та практика отримання віз для іноземців
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Чи потрібна віза громадянам Узбекистану?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Між Україною та Республікою Узбекистан діє безвізовий режим в’їзду на строк до 90 днів. Проте для легального працевлаштування обов'язково оформлюється дозвіл ДЦЗ, на підставі якого після прибуття в Україну працівник отримує посвідку на тимчасове проживання (ВНЖ) без відкриття візи D.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Чи може працівник виїжджати з України під час дії візи D?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Віза D дає право на в'їзд, після чого іноземець отримує посвідку на тимчасове проживання (ID-картку). Вже на підставі діючої посвідки та закордонного паспорта працівник може багаторазово перетинати державний кордон України (наприклад, для відпустки чи сімейних поїздок) протягом усього строку дії контракту.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Що робить Recruiter I Club у разі відмови у візі?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Усі кандидати проходять перевірку надійності до початку оформлення. Якщо виникає форс-мажор із боку консульства, ми безкоштовно замінюємо кандидата та покриваємо витрати на повторне подання. Роботодавець застрахований від будь-яких фінансових втрат.
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
