import React from 'react';

export default function GuaranteesSection() {
  return (
    <section id="guarantees" className="scroll-mt-28 bg-corporate-navy py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-4 py-1.5 mb-5">
            🛡️ ГАРАНТІЇ БЕЗПЕКИ ТА СПОКОЮ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5">
            Ризик приїзду ми беремо на себе
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Наша винагорода прив'язана строго до результату — виходу робітників на ваше виробництво, а не до факту подання документів чи обіцянок.
          </p>
        </div>

        {/* 4 High-Craft Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          <div className="glass-navy-card rounded-2xl p-8 lg:p-10">
            <div className="text-3xl lg:text-4xl font-black font-bold text-emerald-400 mb-3">01</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Кандидат не доїхав — заміна безкоштовна</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Відмовився, не отримав візу або затримався. Ми покриваємо весь період оформлення: від першого подання в ДЦЗ до офіційного перетину державного кордону України.
            </p>
          </div>

          <div className="glass-navy-card rounded-2xl p-8 lg:p-10 border-emerald-500/40">
            <div className="text-3xl lg:text-4xl font-black font-bold text-amber-400 mb-3">02</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Комісію беремо тільки в кінці</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Винагороду агенції ви сплачуєте лише тоді, коли робітники прибули на ваше підприємство та стали до роботи. Жодних прихованих передоплат за підбір.
            </p>
          </div>

          <div className="glass-navy-card rounded-2xl p-8 lg:p-10">
            <div className="text-3xl lg:text-4xl font-black font-bold text-sky-400 mb-3">03</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">100% захист від мобілізації (Стаття 23 ЗУ)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Іноземні громадяни не підлягають військовому обліку в ТЦК та мобілізації. Ваше виробництво застраховане від раптових зривів змін і простою обладнання.
            </p>
          </div>

          <div className="glass-navy-card rounded-2xl p-8 lg:p-10">
            <div className="text-3xl lg:text-4xl font-black font-bold text-emerald-400 mb-3">04</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">Власні центри відбору в Азії</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              У Ташкенті, Нью-Делі та Дацці працюють наші постійні партнери. Ми не шукаємо заміну з нуля — у резерві завжди готовий пул протестованих людей.
            </p>
          </div>

        </div>

        {/* Legal Immunity Banner */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">⚖</span>
            <div>
              <div className="text-sm font-bold text-white">Повний юридичний супровід від штатного юриста</div>
              <div className="text-xs text-slate-400">Владлен Пономаренко особисто консультує вашу бухгалтерію щодо легального оформлення ТОВ/ПП.</div>
            </div>
          </div>
          <div className="text-xs font-bold text-amber-400">
            Ліцензія Мінсоцполітики №1428 (Безстрокова)
          </div>
        </div>

      </div>
    </section>
  );
}
