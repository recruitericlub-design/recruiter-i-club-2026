import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Clock, CheckCircle2, Shield, DollarSign } from 'lucide-react';

export const metadata = {
  title: 'Країни-донори іноземного персоналу | Recruiter I Club 2026',
  description: 'Повний каталог країн для залучення робочої сили в Україну: Індія, Узбекистан, Казахстан, Бангладеш, Непал, В\'єтнам, Філіппіни. Терміни, зарплати, специфіка.',
};

export default function CountriesCatalogPage() {
  const hubs = [
    {
      slug: 'india',
      country: 'Індія',
      flag: '🇮🇳',
      timing: '45–60 днів',
      badge: 'Технічна еліта',
      salary: '–900',
      description: 'Світовий центр підготовки технічних робітників. Відмінні зварювальники 6G, оператори ЧПК, фахівці монтажу металоконструкцій з обов\'язковим проходженням Trade Test.',
      strengths: ['Сертифікований Trade Test', 'Англомовні бригадири', 'Висока технічна дисципліна']
    },
    {
      slug: 'uzbekistan',
      country: 'Узбекистан',
      flag: '🇺🇿',
      timing: '20–30 днів',
      badge: 'Найшвидший старт',
      salary: '–850',
      description: 'Найпростіший та найшвидший коридор для України. Безвізовий в\'їзд, повна відсутність мовного бар\'єру, готовність до важкої фізичної праці на агропідприємствах та складах.',
      strengths: ['Безвізовий швидкий в\'їзд', 'Немає мовного бар\'єру', 'Витривалість до фізичних навантажень']
    },
    {
      slug: 'kazakhstan',
      country: 'Казахстан',
      flag: '🇰🇿',
      timing: '25–35 днів',
      badge: 'Важка індустрія',
      salary: '–950',
      description: 'Промислові кадри з досвідом у гірничій справі, металургії та машинобудуванні. Вільне володіння мовою, звичка до індустріальних стандартів безпеки.',
      strengths: ['Досвід у важкому машинобудуванні', 'Звичка до змінних графіків', 'Висока відповідальність']
    },
    {
      slug: 'bangladesh',
      country: 'Бангладеш',
      flag: '🇧🇩',
      timing: '40–55 днів',
      badge: 'Конвеєр та текстиль',
      salary: '–750',
      description: 'Провідні фахівці швейної промисловості, розкрою та фасування продукції. Бездоганна усидливість і скрупульозність при монотонній конвеєрній роботі.',
      strengths: ['Ідеальні для текстилю та харчопрому', 'Скромність та відсутність конфліктів', 'Вигідна ставка']
    },
    {
      slug: 'nepal',
      country: 'Непал',
      flag: '🇳🇵',
      timing: '45–60 днів',
      badge: 'Дисципліна та витривалість',
      salary: '–750',
      description: 'Надзвичайно спокійні, лояльні та працьовиті кандидати. Ідеально підходять для великих складських комплексів, тепличних господарств та лісопереробки.',
      strengths: ['Сувора субординація та порядок', 'Відсутність шкідливих звичок', 'Висока фізична витривалість']
    },
    {
      slug: 'philippines',
      country: 'Філіппіни',
      flag: '🇵🇭',
      timing: '50–70 днів',
      badge: 'Преміум сервіс та англійська',
      salary: '–1100',
      description: 'Висококультурний персонал з вільною англійською мовою. Обслуговування роботизованих ліній, контроль якості (QA), високоточна збірка електроніки.',
      strengths: ['Вільна ділова англійська', 'Висока культура праці', 'Акуратність з високими технологіями']
    },
    {
      slug: 'vietnam',
      country: 'В\'єтнам',
      flag: '🇻🇳',
      timing: '45–65 днів',
      badge: 'Висока швидкість рук',
      salary: '–850',
      description: 'Майстри швидкої моторики, збірки деталей, харчового виробництва та кондитерських ліній. Згуртовані у робочі бригади з високою внутрішньою самоорганізацією.',
      strengths: ['Неймовірна швидкість конвеєра', 'Командна взаємодопомога', 'Старанність']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Globe className="w-4 h-4" />
          Географія залучення 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Країни-донори та міжнародні хаби Recruiter I Club
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Оберіть країну, щоб переглянути специфіку менталітету, терміни доставки через транзитний коридор Молдови та вартість окладу.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hubs.map((h) => (
          <div
            key={h.slug}
            className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{h.flag}</span>
                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                      {h.country}
                    </h3>
                    <span className="text-[11px] text-amber-400/90 font-mono font-bold">
                      {h.badge}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {h.description}
              </p>

              <div className="space-y-2 pt-2">
                {h.strengths.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Цикл прибуття</span>
                  <span className="text-white font-bold">{h.timing}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Зарплатний рівень</span>
                  <span className="text-amber-400 font-extrabold font-mono text-sm">{h.salary}/міс</span>
                </div>
              </div>

              <Link
                href={`/countries/${h.slug}`}
                className="w-full py-3 rounded-xl bg-white/[0.06] hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Детальний огляд хабу {h.country}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
