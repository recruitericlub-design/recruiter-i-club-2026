import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { PROFESSIONS_DATA } from '@/lib/professionsData';

export default function ProfessionsShowcaseSection({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const isRu = locale === 'ru';
  const featuredProfessions = Object.values(PROFESSIONS_DATA);

  const ruTranslations: Record<string, { title: string; desc: string; cat: string; req: string }> = {
    'zvaryuvalnyky-mig-mag': {
      title: 'Сварщики MIG / MAG / 6G TIG из Азии',
      desc: 'Закрываем дефицит аттестованных сварщиков для машиностроения, заводов металлоконструкций и энергосектора Украины.',
      cat: 'Сварка и металлообработка',
      req: 'Требования и Trade-Test'
    },
    'armaturnyky-monolitnyky': {
      title: 'Арматурщики и монолитчики на стройку',
      desc: 'Готовые бригады арматурщиков и бетонщиков-монолитчиков из Узбекистана под ключ. Скорость вязки от 180 кг/час.',
      cat: 'Строительство и монолит',
      req: 'Требования и Trade-Test'
    },
    'vodiiv-navantazhuvacha': {
      title: 'Водители погрузчиков и штабелеров (WMS)',
      desc: 'Сертифицированные операторы авто- и электропогрузчиков, ричтраков для логистических комплексов класса «А».',
      cat: 'Складская логистика',
      req: 'Требования и Trade-Test'
    },
    'operator-chpu': {
      title: 'Операторы и наладчики станков с ЧПУ',
      desc: 'Квалифицированные станочники для машиностроительных и приборостроительных производств с высокими допусками.',
      cat: 'ЧПУ металлообработка',
      req: 'Требования и Trade-Test'
    },
    'skladski-robitnyky-fasuvalnyky': {
      title: 'Складские рабочие, упаковщики и фасовщики',
      desc: 'Скоростной подбор линейного персонала для складов, распределительных хабов и производств. Дисциплина без простоев.',
      cat: 'Складская логистика',
      req: 'Требования и Trade-Test'
    },
    'robitnyky-v-teplytsi-ahro': {
      title: 'Рабочие в тепличные комплексы и агросектор',
      desc: 'Выносливый персонал для промышленных теплиц, садов, элеваторов и овощехранилищ. Уход, сбор, фасовка урожая.',
      cat: 'Агропромышленность',
      req: 'Требования и Trade-Test'
    }
  };

  return (
    <section id="professions" className="scroll-mt-28 py-20 bg-warm-paper border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-3.5 py-1 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              {isRu ? 'Квалифицированный линейный персонал' : 'Кваліфікований лінійний персонал'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              {isRu ? (
                <>Ключевые рабочие направления <span className="text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-3 py-0.5 rounded-xl">«под ключ»</span></>
              ) : (
                <>Ключові робітничі напрямки <span className="text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-3 py-0.5 rounded-xl">«під ключ»</span></>
              )}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {isRu 
                ? 'Аттестованные сварщики, арматурщики, водители складской техники и операторы ЧПУ из Узбекистана и Индии. Практический Trade-Test на полигонах и 100% защита от мобилизации (ст. 23 ЗУ).'
                : 'Атестовані зварювальники, арматурники, водії складської техніки та оператори ЧПК з Узбекистану та Індії. Практичний Trade-Test на закордонних полігонах та 100% захист від мобілізації (ст. 23 ЗУ).'
              }
            </p>
          </div>

          <div>
            <Link 
              href="/professions" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs sm:text-sm transition shadow-md group whitespace-nowrap"
            >
              <span>{isRu ? 'Все специальности' : 'Всі спеціальності'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 6 Professions Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProfessions.map((prof) => {
            const tr = isRu && ruTranslations[prof.slug] ? ruTranslations[prof.slug] : null;
            const title = tr ? tr.title : prof.title;
            const desc = tr ? tr.desc : prof.description;
            const cat = tr ? tr.cat : prof.categoryLabel;

            return (
              <div 
                key={prof.slug} 
                className="tactile-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500 transition-all group bg-white shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{prof.icon}</span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                      {cat}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                    {desc}
                  </p>

                  {/* Specs Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs mb-5">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{isRu ? 'Страны отбора:' : 'Країни відбору:'}</span>
                      <strong className="text-slate-900">{prof.countries.join(', ')}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{isRu ? 'Ориентир. оклад:' : 'Орієнтовний оклад:'}</span>
                      <strong className="text-emerald-700 font-bold">{prof.salaryRange}</strong>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">{isRu ? 'Срок доставки:' : 'Термін доставки:'}</span>
                      <strong className="text-slate-900">{prof.timelineDays}</strong>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {prof.skills.slice(0, 3).map((sk, idx) => (
                      <span key={idx} className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-2 py-0.5 rounded-md">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/professions/${prof.slug}`}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>{isRu ? 'Требования и Trade-Test' : 'Вимоги та Trade-Test'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Assurance Bar */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <div className="text-xs text-slate-700">
              {isRu ? (
                <>
                  <strong className="text-slate-900">100% защита от срыва рабочих смен:</strong> Работники не подлежат учету в ТЦК и мобилизации (ст. 23 ЗУ). Комиссия агентства оплачивается только после реального выхода рабочих на смену.
                </>
              ) : (
                <>
                  <strong className="text-slate-900">100% захист від раптового зриву змін:</strong> Працівники не підлягають обліку в ТЦК та мобілізації (ст. 23 ЗУ). Комісія агентства сплачується лише після виходу робітників на зміну.
                </>
              )}
            </div>
          </div>
          <Link 
            href="/professions" 
            className="shrink-0 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1"
          >
            <span>{isRu ? 'Перейти в полный каталог' : 'Перейти до повного каталогу'}</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
