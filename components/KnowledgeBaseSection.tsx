import React from 'react';
import Link from 'next/link';

export default function KnowledgeBaseSection() {
  const articles = [
    {
      category: 'ФІНАНСИ & КОШТОРИС',
      year: '2026 РІК',
      title: 'Скільки коштує найняти робітника з Азії: Розрахунок кошторису від €850 та ROI за 14 днів',
      desc: 'Детальний розбір витрат для фінансових директорів: сорсинг, держмито ДЦЗ, логістика Кишинів-Одеса та окупність без простою обладнання.',
      href: '/articles/pricing-cost-of-importing-workers-2026.html',
      time: '4 хв читання'
    },
    {
      category: 'ПОДАТКИ & ФОТ 2026',
      year: 'ЗАКОН №4695-IX',
      title: 'Оподаткування зарплати іноземця: ПДФО 18%, Військовий збір 5%, ЄСВ 22% та лайфхак «0 грн»',
      desc: 'Повні формули нарахування на мінімальний оклад 8 647 грн та 20 000 грн. Як легально не платити податки перші 60 днів під час оформлення.',
      href: '/articles/taxes-foreign-employee-taxation-ukraine-2026.html',
      time: '4 хв читання'
    },
    {
      category: 'ЮРИДИЧНИЙ ЗАХИСТ',
      year: 'СТАТТЯ 23 ЗУ',
      title: 'Захист від мобілізації (Стаття 23 ЗУ): Чому іноземні робітники не підлягають обліку в ТЦК',
      desc: 'Юридичний коментар адвоката Владлена Пономаренка: норми законодавства, захист підприємства від раптових вилучень кадрів та правовий статус нерезидентів.',
      href: '/articles/article-23-law-ukraine-mobilization-exemption.html',
      time: '5 хв читання'
    }
  ];

  return (
    <section id="knowledge-base-hub" className="py-20 bg-warm-paper border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Офіційна аналітика та юридичний комплаєнс
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              База знань: <span className="text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-3 py-0.5 rounded-xl">Усе про найм в Україні</span>
            </h2>
          </div>
          <div>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs sm:text-sm transition shadow-md group"
            >
              <span>Всі 17 аналітичних статей</span>
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
              className="tactile-card rounded-3xl p-7 flex flex-col justify-between hover:border-emerald-500 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-200">
                    {art.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{art.year}</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 group-hover:text-emerald-700 transition-colors mb-2.5 leading-snug">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {art.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Читати статтю →
                </span>
                <span className="text-[11px] text-slate-400">{art.time}</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
