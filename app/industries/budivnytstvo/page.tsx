import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  HardHat, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Building2, 
  Hammer, 
  DraftingCompass, 
  TrendingUp, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  Users 
} from 'lucide-react';
import AuditSection from '@/components/AuditSection';

export const metadata: Metadata = {
  title: 'Будівельники та монолітники з Азії для девелоперів та генпідрядників України | Recruiter I Club',
  description: 'Комплектування будівельних майданчиків іноземними робітниками: арматурники, монолітники, муляри, монтажники, зварювальники металоконструкцій. Здача об’єктів у строк без зриву графіків, 100% захист від мобілізації (ст. 23 ЗУ).',
  keywords: [
    'будівельники з азії україна',
    'монолітники з індії найм',
    'арматурники на будівництво іноземці',
    'муляри для девелоперів україна',
    'дефіцит будівельників 2026',
    'бригада монолітників під ключ',
    'іноземний персонал на будівництво'
  ],
  alternates: {
    canonical: 'https://www.recruiter-i.club/industries/budivnytstvo',
  },
  openGraph: {
    title: 'Будівельні бригади з Азії для девелоперів 2026 | Recruiter I Club',
    description: 'Масовий підбір монолітників, арматурників та мулярів. Збереження графіків здачі об’єктів без кадрового дефіциту.',
    url: 'https://www.recruiter-i.club/industries/budivnytstvo',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'article',
  }
};

export default function ConstructionIndustryPage() {
  const schemaJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        'name': 'Підбір іноземних будівельних бригад та монолітників',
        'provider': {
          '@type': 'EmploymentAgency',
          'name': 'Recruiter I Club',
          'url': 'https://www.recruiter-i.club/'
        },
        'description': 'Комплексний підбір готових будівельних бригад з Азії для генеральних підрядників та будівельних холдингів України.',
        'areaServed': 'Ukraine',
        'offers': {
          '@type': 'Offer',
          'price': '500',
          'priceCurrency': 'USD',
          'description': 'Підбір будівельних бригад з гарантією кваліфікації'
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
            'item': 'https://www.recruiter-i.club/industries/budivnytstvo'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Будівництво та девелопмент',
            'item': 'https://www.recruiter-i.club/industries/budivnytstvo'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Чи вміють будівельники з Азії читати українські архітектурні креслення?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Арматурники та бригадири проходять обов’язковий Trade Test на читання конструктивних креслень розділів КЖ (конструкції залізобетонні) та КМ (конструкції металеві). Міжнародні позначення армування та марок бетону є стандартизованими, тому адаптація проходить без труднощів.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Чи працюють бригади із сучасними опалубними системами (Doka, Peri)?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Так, ми підбираємо монолітників із досвідом роботи на великих інфраструктурних та висотних об’єктах у країнах Перської затоки (ОАЕ, Катар, Саудівська Аравія), де використовуються системи Doka, Peri, Ulma та Hunnebeck.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Як будівельний майданчик захищений від несподіваних перевірок?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Усі працівники оформлені офіційно через Держпраці та ДЦЗ, мають при собі копію дозволу на роботу та посвідку ВНЖ. Вони не є військовозобов’язаними громадянами України (ст. 23 ЗУ), що гарантує відсутність ризику зупинки будівництва.'
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
          <span className="text-emerald-400 font-medium">Будівництво</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.09),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <HardHat className="w-3.5 h-3.5" />
            Девелопмент та генпідряд України 2026
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl">
            Будівельники та монолітники з Азії: <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">здача об'єктів у строк без зриву графіків</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            Готові будівельні ланки та бригади від 15 до 100+ осіб під ключ. Кваліфіковані в’язальники арматури, монолітники, монтажники опалубки (Doka / Peri), муляри та зварювальники. 100% захист вашого будівельного майданчика від зупинки робіт.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-4 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">15–100+</div>
              <div className="text-xs text-slate-400">Розмір готової ланки з бригадиром</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">Doka / Peri</div>
              <div className="text-xs text-slate-400">Досвід роботи із сучасними системами</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">0 днів</div>
              <div className="text-xs text-slate-400">Простоїв через раптові перевірки</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">Trade Test</div>
              <div className="text-xs text-slate-400">Відеозвіт в’язки арматури перед вильотом</div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Specializations */}
      <section className="py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              Ключові будівельні спеціальності для генпідрядників
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Формуємо повні виробничі ланки від монолітних робіт до чистового оздоблення:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <DraftingCompass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Арматурники-монолітники</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Швидкісна в’язка арматурних каркасів гачком та пістолетом, гнуття арматури на верстатах, бетонування плит перекриття та колон із вібруванням.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Індія, В’єтнам</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Монтажники опалубки</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Збирання та демонтаж щитової опалубки стін і перекриттів (Doka, Peri, Варіант). Дотримання геометричних допусків та товщини захисного шару.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Індія, Узбекистан</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Муляри (Bricklayers)</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Кладка зовнішніх стін та міжквартирних перегородок з газобетону, керамоблоку та силікатної цегли. Висока швидкість та рівність швів.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Узбекистан, Непал</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Зварювальники металоконструкцій</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Монтажне зварювання колон, ферм, балок перекриття, закладних деталей фундаментів. Робота ручним дуговим та напівавтоматичним методом.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Індія, В’єтнам</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Штукатури та маляри-фасадники</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Машинне та ручне нанесення штукатурки, монтаж фасадного утеплення (мінвата/пінополістирол), армувальна сітка, декоративне покриття.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Непал, Узбекистан</div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Будівельні різноробочі</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Приймання та переміщення будівельних матеріалів, прибирання будівельного сміття з поверхів, допомога майстрам, підсобні роботи.
              </p>
              <div className="text-[11px] font-semibold text-emerald-400">Країни: Бангладеш, Узбекистан</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Project Timeline Protection */}
      <section className="py-16 sm:py-20 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold mb-4">
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                Гарантія для девелопера
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6">
                Чому іноземні будівельні бригади рятують графіки будівництва
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Сьогодні головний біль генпідрядника — не постачання бетону чи кранів, а постійна невідомість: скільки робітників вийде на об'єкт завтра вранці. Співпраця з іноземними бригадами дає залізобетонну передбачуваність:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Жодної затримки монолітних циклів:</strong> плита перекриття заливається строго за графіком проєктування.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Висока працездатність у світловий день:</strong> готовність працювати повні світлові зміни по 10–12 годин без простоїв.
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">
                    <strong>Дотримання охорони праці:</strong> обов'язкове носіння касок, страховочних поясів, спецвзуття та жилетів.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/90 border border-emerald-500/30 shadow-2xl shadow-emerald-950/20">
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Управління на об'єкті</div>
              <h3 className="text-xl font-bold text-white mb-4">
                Бригадир зв'язує виконроба та робітників
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Вам не потрібно вивчати мови країн Азії. Разом із бригадою на будівельний майданчик прибуває старший бригадир, який вільно комунікує з вашим виконробом та начальником дільниці, транслюючи виробничі завдання всій ланці.
              </p>
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Юридична відповідальність:</span>
                <span className="text-sm font-bold text-emerald-400">100% комплаєнс</span>
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
              Часті запитання забудовників
            </h2>
            <p className="text-slate-400 text-sm">
              Організація роботи та проживання будівельних бригад
            </p>
          </div>

          <div className="space-y-4">
            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Де зазвичай проживають будівельні бригади?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Забудовники зазвичай розміщують працівників у спеціалізованих модульних побутових містечках безпосередньо на будівельному майданчику (з душовими, опаленням та кухнею) або в найближчих гуртожитках для економії часу на логістику.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Як здійснюється оплата праці — ставка чи виробіток (куби/метри)?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Можливі обидва формати: або фіксований щомісячний оклад із нарахуванням податків, або відрядна оплата праці за прийнятий обсяг (за куб залитого моноліту чи квадратний метр кладки) з фіксацією мінімальної гарантованої ставки.
              </p>
            </details>

            <details className="group rounded-xl bg-slate-900/80 border border-slate-800 p-5 open:border-slate-700 transition-all">
              <summary className="font-semibold text-white text-sm sm:text-base cursor-pointer list-none flex justify-between items-center">
                Чи забезпечуються будівельники інструментом?
                <span className="text-emerald-400 transition group-open:rotate-180">▾</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Генпідрядник надає великогабаритне обладнання (крани, бетононасоси, вібратори, верстати для гнуття арматури) та витратні матеріали, а робітники прибувають зі своїм базовим ручним інструментом або отримують його за відомістю на об'єкті.
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
