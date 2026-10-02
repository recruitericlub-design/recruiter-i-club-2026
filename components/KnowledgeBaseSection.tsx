import React from 'react';
import Link from 'next/link';

export default function KnowledgeBaseSection({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const isRu = locale === 'ru';

  const articles = isRu
    ? [
        {
          category: 'АЛГОРИТМ И СМЕТА',
          year: '2026 ГОД',
          title: 'Завоз иностранцев и трудовые мигранты в Украину 2026: пошаговый алгоритм для работодателей',
          desc: 'Официальный подбор, разрешения ГЦЗ, визы D-04, 100% защита от мобилизации по ст. 23 ЗУ. Финансовая модель от $500.',
          href: '/blog/zaviz-inozemtsiv-trudovi-mihranty-v-ukrainu-2026',
          time: '8 мин чтения'
        },
        {
          category: 'ОНЛАЙН КАЛЬКУЛЯТОР',
          year: 'СМЕТА ОНЛАЙН',
          title: 'Калькулятор стоимости завоза персонала: госпошлины, визы, трансфер и окупаемость',
          desc: 'Интерактивный расчет расходов на 1, 5, 20 или 50 сотрудников под ключ с учетом всех госпошлин и сроков заезда.',
          href: '/calculator',
          time: '2 мин расчет'
        },
        {
          category: 'МОДЕЛЬ 360 & АДАПТАЦИЯ',
          year: 'ПРАКТИКА ЦЕХА',
          title: 'Как преодолеть языковой барьер с рабочими из Азии: модель «Управление 360»',
          desc: 'Руководство для мастеров цеха: двуязычные бригадиры, визуальный менеджмент 5S, аудио-переводчики и отсутствие брака.',
          href: '/blog/adaptation-overcoming-language-barrier-on-production',
          time: '6 мин чтения'
        }
      ]
    : [
        {
          category: 'АЛГОРИТМ ТА КОШТОРИС',
          year: '2026 РІК',
          title: 'Завіз іноземців та підбір трудових мігрантів в Україну 2026: покроковий алгоритм для роботодавців',
          desc: 'Офіційний підбір, дозволи ДЦЗ, візи D-04, 100% захист від мобілізації за ст. 23 ЗУ. Фінансова модель від $500.',
          href: '/blog/zaviz-inozemtsiv-trudovi-mihranty-v-ukrainu-2026',
          time: '8 хв читання'
        },
        {
          category: 'ОНЛАЙН КАЛЬКУЛЯТОР',
          year: 'КОШТОРИС ОНЛАЙН',
          title: 'Калькулятор вартості завозу персоналу: держмито, візи, трансфер та окупність інвестицій',
          desc: 'Інтерактивний розрахунок витрат на 1, 5, 20 або 50 співробітників під ключ з урахуванням держмит та строків заїзду.',
          href: '/calculator',
          time: '2 хв розрахунок'
        },
        {
          category: 'МОДЕЛЬ 360 & АДАПТАЦІЯ',
          year: 'ПРАКТИКА ЦЕХУ',
          title: 'Як подолати мовний бар\'єр із робітниками з Азії: модель «Управління 360»',
          desc: 'Посібник для майстрів цеху: двомовні бригадири, візуальний менеджмент 5S, голосові AI-перекладачі та відсутність браку.',
          href: '/blog/adaptation-overcoming-language-barrier-on-production',
          time: '6 хв читання'
        }
      ];

  return (
    <section id="knowledge-base-hub" className="py-20 bg-warm-paper border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              {isRu ? 'Официальная аналитика и юридический комплаенс' : 'Офіційна аналітика та юридичний комплаєнс'}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              {isRu ? (
                <>База знаний: <span className="text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-3 py-0.5 rounded-xl">Все о найме в Украине</span></>
              ) : (
                <>База знань: <span className="text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-3 py-0.5 rounded-xl">Усе про найм в Україні</span></>
              )}
            </h2>
          </div>
          <div>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs sm:text-sm transition shadow-md group"
            >
              <span>{isRu ? 'Все 17 аналитических статей' : 'Всі 17 аналітичних статей'}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((art, idx) => (
            <a 
              key={idx}
              href={art.href}
              className="tactile-card rounded-3xl p-7 bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold mb-4">
                  <span className="text-emerald-800 uppercase tracking-wider">{art.category}</span>
                  <span className="text-slate-400 font-mono">{art.year}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-emerald-700 transition-colors leading-snug mb-3">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-emerald-700 transition-colors">
                <span>{art.time}</span>
                <span>{isRu ? 'Читать статью ➔' : 'Читати статтю ➔'}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Fast-Track SEO Internal Linking Strip */}
        <div className="rounded-2xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-emerald-700 font-bold text-[11px] uppercase tracking-wider block">
                {isRu ? 'Официальные регламенты и отрасли найма' : 'Офіційні регламенти та галузі найму'}
              </span>
              <p className="text-slate-900 font-extrabold text-sm sm:text-base">
                {isRu ? 'Нормативная документация и специализация предприятий' : 'Нормативна документація та спеціалізація підприємств'}
              </p>
            </div>
            <Link
              href="/calculator"
              className="text-xs font-bold px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors self-start sm:self-auto shrink-0 shadow-sm"
            >
              {isRu ? 'Онлайн-калькулятор сметы ➔' : 'Онлайн-калькулятор кошторису ➔'}
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
            <Link 
              href="/documents/work-permit" 
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/60 transition-colors flex flex-col font-medium"
            >
              <span className="text-[10px] text-slate-400 font-mono">ДЕРЖПРАЦІ</span>
              <span className="font-bold text-slate-900 mt-1">{isRu ? 'Разрешение ГЦЗ' : 'Дозвіл ДЦЗ'}</span>
            </Link>

            <Link 
              href="/documents/visa-d" 
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/60 transition-colors flex flex-col font-medium"
            >
              <span className="text-[10px] text-slate-400 font-mono">МЗС УКРАЇНИ</span>
              <span className="font-bold text-slate-900 mt-1">{isRu ? 'Рабочая виза D-04' : 'Робоча віза D-04'}</span>
            </Link>

            <Link 
              href="/documents/vnzh" 
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/60 transition-colors flex flex-col font-medium"
            >
              <span className="text-[10px] text-slate-400 font-mono">ДМС УКРАЇНИ</span>
              <span className="font-bold text-slate-900 mt-1">{isRu ? 'Посвідка ВНЖ' : 'Посвідка ВНЖ'}</span>
            </Link>

            <Link 
              href="/industries/vyrobnytstvo" 
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/60 transition-colors flex flex-col font-medium"
            >
              <span className="text-[10px] text-slate-400 font-mono">ГАЛУЗЬ №1</span>
              <span className="font-bold text-slate-900 mt-1">{isRu ? 'Производство' : 'Виробництво'}</span>
            </Link>

            <Link 
              href="/industries/lohistyka" 
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/60 transition-colors flex flex-col font-medium"
            >
              <span className="text-[10px] text-slate-400 font-mono">ГАЛУЗЬ №2</span>
              <span className="font-bold text-slate-900 mt-1">{isRu ? 'Склады / Логистика' : 'Склади / Логістика'}</span>
            </Link>

            <Link 
              href="/industries/budivnytstvo" 
              className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200/60 transition-colors flex flex-col font-medium"
            >
              <span className="text-[10px] text-slate-400 font-mono">ГАЛУЗЬ №3</span>
              <span className="font-bold text-slate-900 mt-1">{isRu ? 'Строительство' : 'Будівництво'}</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
