import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Factory, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Settings, 
  Wrench, 
  TrendingUp, 
  Zap, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  Users 
} from 'lucide-react';
import AuditSection from '@/components/AuditSection';

export const metadata: Metadata = {
  title: 'Іноземний персонал з Азії для заводів та виробничих підприємств України | Recruiter I Club',
  description: 'Підбір кваліфікованих робітників для виробництва: оператори верстатів з ЧПК, токарі, зварювальники, слюсарі, робітники ліній. Безперебійна робота цехів у 2–3 зміни, ліквідація простоїв, захист від мобілізації (ст. 23 ЗУ).',
  keywords: [
    'робітники на завод з азії',
    'іноземний персонал для виробництва україна',
    'оператори чпк з індії найм',
    'зварювальники на виробництво з азії',
    'дефіцит кадрів промисловість україна',
    'аутстафінг робітників на завод',
    'підбір виробничого персоналу під ключ'
  ],
  alternates: {
    canonical: 'https://www.recruiter-i.club/industries/vyrobnytstvo',
  },
  openGraph: {
    title: 'Іноземний персонал для заводів та виробництв 2026 | Recruiter I Club',
    description: 'Комплектування виробничих змін фахівцями з Азії: зварювальники, верстатники, слюсарі. Запуск зміни від 21 дня з гарантією кваліфікації Trade Test.',
    url: 'https://www.recruiter-i.club/industries/vyrobnytstvo',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'article',
  }
};

export default function ManufacturingIndustryPage() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Підбір іноземного персоналу для промислових виробництв',
        'provider': {
          '@type': 'EmploymentAgency',
          'name': 'Recruiter I Club',
          'url': 'https://www.recruiter-i.club/'
        },
        'description': 'Масовий та кваліфікований рекрутинг іноземних робітників з Азії для заводів, фабрик та металообробних підприємств України.',
        'areaServed': 'Ukraine',
        'offers': {
          '@type': 'Offer',
          'price': '500',
          'priceCurrency': 'USD',
          'description': 'Рекрутинг під ключ з гарантією заміни'
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
            'name': 'Галузі',
            'item': 'https://www.recruiter-i.club/industries/vyrobnytstvo'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Виробництво та заводи',
            'item': 'https://www.recruiter-i.club/industries/vyrobnytstvo'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Як підтверджується кваліфікація робітників до їхнього вильоту в Україну?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Кожен технічний спеціаліст проходить індивідуальний Trade Test на базі наших закордонних центрів: виконує зварювальний шов під контролем ультразвуку, точить деталь за наданим вами кресленням або складає вузол. Ви отримуєте відеозвіт з високою роздільною здатністю та акт технічної перевірки до підписання контракту.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Як вирішується питання мовного бар’єру на виробничій лінії?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'На кожну групу від 10 робітників призначається англомовний або україномовний бригадир. Крім того, перед виходом на лінію персонал проходить вивчення базових виробничих термінів, знаків безпеки праці та стандартів вашого підприємства.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Який графік роботи можуть виконувати працівники з Азії?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Працівники налаштовані на максимальне напрацювання годин: вони охоче працюють змінами по 10–12 годин, у нічні зміни та 6-денний робочий тиждень відповідно до умов вашого трудового контракту.'
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
          <span className="text-slate-400">Галузі</span>
          <span className="text-slate-600">/</span>
          <span className="text-emerald-400 font-medium">Виробництво та заводи</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.09),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Factory className="w-3.5 h-3.5" />
            Промисловий сектор України 2026
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl">
            Іноземний персонал з Азії для заводів: <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">стабільна робота цехів у 2–3 зміни</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Ліквідуйте кадровий дефіцит на металообробних, харчових, меблевих та машинобудівних підприємствах. Кваліфіковані верстатники, оператори ЧПК, зварювальники та монтажники з підтвердженим Trade Test. 100% захист від вилучення персоналу за ст. 23 ЗУ.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">24/7</div>
              <div className="text-xs text-slate-400">Безперебійна робота у 2 або 3 зміни</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">0%</div>
              <div className="text-xs text-slate-400">Ризик мобілізації (ст. 23 ЗУ)</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">&lt; 3%</div>
              <div className="text-xs text-slate-400">Плинність кадрів за рік контракту</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">21 день</div>
              <div className="text-xs text-slate-400">Рекордна швидкість виходу на зміну</div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles & Skillsets */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Виробничі спеціальності, які ми закриваємо
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Усі фахівці проходять попередній відбір за кваліфікаційними стандартами українських заводів:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Оператори верстатів з ЧПК / CNC</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Налагодження, завантаження заготовок, контроль розмірів штангенциркулем/мікрометром, робота зі стійками Fanuc, Siemens Sinumerik, Haas.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Індія, Філіппіни</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Зварювальники MIG / MAG / TIG</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Напівавтоматичне зварювання металоконструкцій, трубних вузлів, нержавіючої сталі та алюмінію. Сертифікація 3G, 4G, 6G.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Індія, В'єтнам</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Токарі та фрезерувальники</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Робота на універсальних верстатах 16К20, ДІП-300, 6Р12. Виточування валів, фланців, нарізання різьби за кресленнями замовника.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Узбекистан, Індія</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Оператори виробничих ліній</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Обслуговування конвеєрів харчової, деревообробної, пластикової та картонної промисловості. Висока концентрація та монотонна витривалість.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Бангладеш, Непал</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Слюсарі механоскладальних робіт (МСР)</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Збирання промислових вузлів, підгонка деталей, слюсарна обробка, робота з пневмо- та електроінструментом.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Узбекистан, Непал</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Робітники цехів та фасувальники</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Пакування готової продукції, подача сировини, прибирання робочих зон цеху, внутрішньозаводська логістика.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Бангладеш, Узбекистан</div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Economics & Downtime Loss */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                Економіка виробництва: Розрахунок прибутку
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                Скільки коштує простій виробничої лінії без персоналу
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Коли через дефіцит операторів зупиняється одна технологічна лінія, підприємство втрачає від <strong className="text-red-400">15 000 до 80 000 грн за кожну добу простою</strong> у вигляді постійних витрат (оренда, амортизація обладнання, енергопотужності) та неотриманого маржинального прибутку.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Запуск другої та третьої зміни:</strong> обладнання окупається в 2,5 раза швидше завдяки роботі в режимі 24/7.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Ніяких зривів експортних контрактів:</strong> чіткий графік відвантажень продукції замовникам без штрафних санкцій.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Дисципліна та нульовий алкоголізм:</strong> строгий контроль з боку бригадира, 100% вихід на робочі зміни.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-emerald-500/30 shadow-2xl shadow-emerald-950/20">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Trade Test Гарантія</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Відеозвіт кваліфікації до підписання договору
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Ви не купуєте «кота в мішку». Наші екзаменатори записують повноцінне відео виконання виробничого завдання конкретним кандидатом на верстаті. Ви особисто погоджуєте кожного фахівця перед випуском візи.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Гарантія безкоштовної заміни:</span>
                <span className="text-sm font-bold text-emerald-400">14–30 днів</span>
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
              Часті запитання виробників
            </h2>
            <p className="text-slate-400 text-sm">
              Організація роботи іноземних працівників на підприємствах України
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Де розміщувати робітників заводу?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Роботодавець забезпечує проживання у заводському гуртожитку або орендованому модульному містечку чи квартирах (по 2–4 особи в кімнаті з базовими санітарними умовами та кухнею). Наш клуб допомагає підібрати перевірені локації поруч із підприємством.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Яка мінімальна партія робітників для замовлення?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Ми формуємо групи від 5 до 100+ осіб для одного підприємства. Для партій від 10 осіб надається постійний координатор-перекладач для первинного онбордингу та інструктажу з охорони праці.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Чи можуть робітники працювати у шкідливих або гарячих цехах?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Так, усі кандидати проходять обов’язковий поглиблений медичний огляд (флюорографія, кардіограма, аналізи) на відсутність протипоказань до важкої фізичної праці та підвищених температурних режимів.
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
