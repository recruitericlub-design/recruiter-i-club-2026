import React from 'react';

export default function GuaranteesSection({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const isRu = locale === 'ru';

  return (
    <section id="guarantees" className="scroll-mt-28 bg-corporate-navy py-24 text-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold px-4 py-1.5 mb-5">
            {isRu ? '🛡️ ГАРАНТИИ БЕЗОПАСНОСТИ И СПОКОЙСТВИЯ' : '🛡️ ГАРАНТІЇ БЕЗПЕКИ ТА СПОКОЮ'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-5">
            {isRu ? 'Риск приезда мы берем на себя' : 'Ризик приїзду ми беремо на себе'}
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            {isRu 
              ? 'Наше вознаграждение привязано строго к результату — выходу рабочих на ваше производство, а не к факту подачи документов или обещаниям.'
              : 'Наша винагорода прив\'язана строго до результату — виходу робітників на ваше виробництво, а не до факту подання документів чи обіцянок.'
            }
          </p>
        </div>

        {/* 4 High-Craft Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          
          <div className="glass-navy-card rounded-2xl p-8 lg:p-10">
            <div className="text-3xl lg:text-4xl font-black font-bold text-emerald-400 mb-3">01</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              {isRu ? 'Кандидат не доехал — замена бесплатная' : 'Кандидат не доїхав — заміна безкоштовна'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isRu
                ? 'Отказался, не получил визу или задержался. Мы покрываем весь период оформления: от первой подачи в ДЦЗ до официального пересечения границы Украины.'
                : 'Відмовився, не отримав візу або затримався. Ми покриваємо весь період оформлення: від першого подання в ДЦЗ до офіційного перетину державного кордону України.'
              }
            </p>
          </div>

          <div className="glass-navy-card rounded-2xl p-8 lg:p-10 border-emerald-500/40">
            <div className="text-3xl lg:text-4xl font-black font-bold text-amber-400 mb-3">02</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              {isRu ? 'Комиссию берем только в конце' : 'Комісію беремо тільки в кінці'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isRu
                ? 'Вознаграждение агентства вы оплачиваете только тогда, когда рабочие прибыли на ваше предприятие и приступили к работе. Никаких скрытых предоплат за подбор.'
                : 'Винагороду агенції ви сплачуєте лише тоді, коли робітники прибули на ваше підприємство та стали до роботи. Жодних прихованих передоплат за підбір.'
              }
            </p>
          </div>

          <div className="glass-navy-card rounded-2xl p-8 lg:p-10">
            <div className="text-3xl lg:text-4xl font-black font-bold text-sky-400 mb-3">03</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              {isRu ? '100% защита от мобилизации (Статья 23 ЗУ)' : '100% захист від мобілізації (Стаття 23 ЗУ)'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isRu
                ? 'Иностранные граждане не подлежат воинскому учету в ТЦК и мобилизации. Ваше производство застраховано от внезапных срывов смен и простоя оборудования.'
                : 'Іноземні громадяни не підлягають військовому обліку в ТЦК та мобілізації. Ваше виробництво застраховане від раптових зривів змін і простою обладнання.'
              }
            </p>
          </div>

          <div className="glass-navy-card rounded-2xl p-8 lg:p-10">
            <div className="text-3xl lg:text-4xl font-black font-bold text-emerald-400 mb-3">04</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              {isRu ? 'Собственные центры отбора в Азии' : 'Власні центри відбору в Азії'}
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {isRu
                ? 'В Ташкенте, Нью-Дели и Дакке работают наши постоянные партнеры. Мы не ищем замену с нуля — в резерве всегда готов пул протестированных людей.'
                : 'У Ташкенті, Нью-Делі та Дацці працюють наші постійні партнери. Ми не шукаємо заміну з нуля — у резерві завжди готовий пул протестованих людей.'
              }
            </p>
          </div>

        </div>

        {/* Legal Immunity Banner */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg">⚖</span>
            <div className="text-xs sm:text-sm">
              <strong className="text-white">
                {isRu ? 'Официальный договор с ООО «Рекрутер Ай Клаб»:' : 'Офіційний договір з ТОВ «Рекрутер Ай Клаб»:'}
              </strong>{' '}
              <span className="text-slate-300">
                {isRu 
                  ? 'Работаем по лицензии Минсоцполитики Украины №1428. Полная финансовая ответственность за сроки доставки.'
                  : 'Працюємо за ліцензією Мінсоцполітики України №1428. Повна фінансова відповідальність за терміни доставки.'
                }
              </span>
            </div>
          </div>
          <a
            href="#audit"
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
          >
            {isRu ? 'Запросить проект договора' : 'Запросити проєкт договору'}
          </a>
        </div>

      </div>
    </section>
  );
}
