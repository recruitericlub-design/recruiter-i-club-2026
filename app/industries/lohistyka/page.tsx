import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Truck, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Package, 
  Layers, 
  Boxes, 
  TrendingUp, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  Users 
} from 'lucide-react';
import AuditSection from '@/components/AuditSection';

export const metadata: Metadata = {
  title: 'Персонал з Азії для складських комплексів, РЦ та логістики України | Recruiter I Club',
  description: 'Комплектування складів та логістичних терміналів іноземними працівниками: комплектувальники WMS, водії навантажувачів та річтраків, пакувальники, вантажники. Зниження плинності кадрів до < 5%, робота в режимі 24/7.',
  keywords: [
    'персонал на склад з азії',
    'комплектувальники на склад з узбекистану',
    'водії навантажувача іноземці найм',
    'робітники для логістичного центру україна',
    'аутсорсинг складського персоналу',
    'дефіцит комірників та пакувальників',
    'пікові навантаження склад персонал'
  ],
  alternates: {
    canonical: 'https://www.recruiter-i.club/industries/lohistyka',
  },
  openGraph: {
    title: 'Персонал для логістики та розподільчих центрів 2026 | Recruiter I Club',
    description: 'Масовий підбір робітників для складів та РЦ: швидке навчання WMS, робота зі сканерами ТСД, відсутність зривів змін на рампах.',
    url: 'https://www.recruiter-i.club/industries/lohistyka',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'article',
  }
};

export default function LogisticsIndustryPage() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Підбір іноземного персоналу для складів та логістики',
        'provider': {
          '@type': 'EmploymentAgency',
          'name': 'Recruiter I Club',
          'url': 'https://www.recruiter-i.club/'
        },
        'description': 'Комплексне забезпечення логістичних центрів, складів класу А/B та e-commerce хабів персоналом з країн Азії.',
        'areaServed': 'Ukraine',
        'offers': {
          '@type': 'Offer',
          'price': '500',
          'priceCurrency': 'USD',
          'description': 'Підбір та адаптація складських бригад під ключ'
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
            'item': 'https://www.recruiter-i.club/industries/lohistyka'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Склади та логістика',
            'item': 'https://www.recruiter-i.club/industries/lohistyka'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Чи вміють іноземні комплектувальники працювати з терміналами збору даних (ТСД)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Так, працівники швидко адаптуються до графічних інтерфейсів сучасних складських WMS (1C/BAS Склад, Manhattan, SAP, Odoo). Цифровий інтерфейс з підказками штрихкодів та комірок не потребує глибокого знання української мови — навчання базовим операціям займає 2–3 дні.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Чи мають водії навантажувачів посвідчення на право керування спецтехнікою?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Усі кандидати на позиції водіїв навантажувача та річтрака мають міжнародні або національні посвідчення тракториста-машиніста / оператора навантажувача та підтверджений бекграунд безаварійного водіння на стелажних висотних складах.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Як вирішується питання матеріальної відповідальності на складі?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'З кожним працівником укладається індивідуальний договір про повну індивідуальну або колективну (бригадну) матеріальну відповідальність відповідно до трудового законодавства України. Крім того, на об’єкті ведеться строгий контроль дисципліни бригадиром.'
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
          <span className="text-emerald-400 font-medium">Склади та логістика</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(16,185,129,0.09),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Truck className="w-3.5 h-3.5" />
            Логістичні комплекси та РЦ України 2026
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl">
            Персонал з Азії для складів та РЦ: <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">стабільні рампи без простоїв фур</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Швидке закриття змін на складах класу А, В та розподільчих центрах ритейлу. Комплектувальники WMS, водії висотних річтраків, пакувальники та вантажники. Зниження плинності кадрів з типових 40% до менше ніж 5% завдяки довгостроковим річним контрактам.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">&lt; 5%</div>
              <div className="text-xs text-slate-400">Плинність складського штату</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">100%</div>
              <div className="text-xs text-slate-400">Вихід на зміну в сезонні піки</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">2–3 дні</div>
              <div className="text-xs text-slate-400">Термін адаптації до складського ТСД</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">12 годин</div>
              <div className="text-xs text-slate-400">Готовність до інтенсивних змін</div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Roles */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Складські професії, які ми комплектуємо
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Швидке масштабування персоналу під високий сезон (від 10 до 150 осіб на один об'єкт):
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Комплектувальники (Order Pickers)</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Збір замовлень за маршрутними листами або за допомогою ТСД. Висока швидкість крокування по рядах, уважність до артикулів та штрихкодів.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Узбекистан, Непал</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Водії річтраків та навантажувачів</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Робота у вузьких міжстелажних проходах на висоті підйому до 12 метрів. Безпечне зняття та розміщення палет без пошкодження вантажу.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Індія, Узбекистан</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Стикеровщики та фасувальники</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Маркування товарів українськими етикетками, копакінг, формування промо-наборів, пакування у термозбіжну плівку та коробки.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Бангладеш, Непал</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Вантажники рампи (Loaders)</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Розвантаження та завантаження 20-тонних автофургонів і морських контейнерів. Робота з гідравлічними роклами та електровізками.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Узбекистан, Непал</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Контролери якості палетування</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Стрейчування піддонів, контроль цілісності заводської упаковки, звірка вагових параметрів перед виїздом на маршрут доставки.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Індія, Бангладеш</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Оператори складського клінінгу</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Підтримання чистоти стелажних зон, робота на підлогомиючих машинах, утилізація пакувального картону та плівки за стандартами ISO.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Непал, Бангладеш</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Peak Management */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                Управління високим сезоном
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                Як захистити логістику від зриву відвантажень
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Місцевий персонал часто залишає склад у найбільш критичні моменти — перед святами або в розпал акцій через перевантаження. Робітники з Азії, навпаки, зацікавлені в максимальній кількості оплачуваних годин:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>100% заповнення нічних змін:</strong> безперервна комплектація нічних рейсів для ранкової доставки в ритейл.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Фіксована ставка контракту:</strong> жодних непередбачуваних спекуляцій з підвищенням погодинної оплати під час піків.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Бригадир-координатор на об'єкті:</strong> швидкий розподіл задач, контроль виробітку норм на годину.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-emerald-500/30 shadow-2xl shadow-emerald-950/20">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Стабільність бізнесу</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Захист від неявки та дисциплінарних порушень
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Іноземні фахівці приїжджають з єдиною метою — заробити кошти для своєї родини. Вони цінують робоче місце, не зловживають алкоголем і не мають спокуси самовільно покинути об'єкт посеред робочого тижня.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Гарантія повної заміни у разі форс-мажору:</span>
                <span className="text-sm font-bold text-emerald-400">Безкоштовно</span>
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
              Часті запитання логістичних операторів
            </h2>
            <p className="text-slate-400 text-sm">
              Нюанси інтеграції іноземних працівників у складські процеси
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Чи потрібна спеціальна форма чи спецвзуття?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Роботодавець забезпечує персонал фірмовим захисним одягом зі світловідбивними елементами та спецвзуттям з металевим підноском згідно зі стандартами охорони праці вашого логістичного комплексу.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Чи можуть робітники працювати у температурних складах (холодильниках)?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Так, для роботи у низькотемпературних зонах (від +4°C до -20°C) ми відбираємо кандидатів із гарним фізичним здоров’ям, адаптованих до роботи в термокостюмах із дотриманням регламентованих перерв на обігрів.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Скільки часу займає доставка складської бригади на об'єкт?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                При виборі кандидатів з Узбекистану перший вихід на зміну можливий уже через 20–25 днів від моменту погодження заявки. Кандидати з Індії та Непалу прибувають за 40–50 днів.
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
