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
      timing: '35–45 днів',
      badge: 'Технічна еліта',
      salary: '$650–$900',
      description: 'Світовий центр підготовки технічних фахівців. Неперевершені зварювальники 6G, оператори ЧПК, слюсарі монтажу металоконструкцій з обов\'язковим практичним Trade Test.',
      strengths: ['Сертифікований Trade Test', 'Англомовні бригадири', 'Висока технічна дисципліна']
    },
    {
      slug: 'uzbekistan',
      country: 'Узбекистан',
      flag: '🇺🇿',
      timing: '20–25 днів',
      badge: 'Найшвидший старт',
      salary: '$600–$850',
      description: 'Найпростіший та найшвидший коридор для України. Безвізовий в\'їзд, повна відсутність мовного бар\'єру, відмінна витривалість на промислових підприємствах, складах та агрокомплексах.',
      strengths: ['Безвізовий швидкий в\'їзд', 'Вільне володіння мовою', 'Витривалість до фізичних навантажень']
    },
    {
      slug: 'kazakhstan',
      country: 'Казахстан',
      flag: '🇰🇿',
      timing: '25–35 днів',
      badge: 'Важка індустрія',
      salary: '$700–$950',
      description: 'Промислові кадри з досвідом у гірничій справі, металургії та машинобудуванні. Вільне володіння мовою, звичка до індустріальних регламентів охорони праці.',
      strengths: ['Досвід у важкому машинобудуванні', 'Звичка до позмінної роботи', 'Висока відповідальність']
    },
    {
      slug: 'nepal',
      country: 'Непал',
      flag: '🇳🇵',
      timing: '40–50 днів',
      badge: 'Дисципліна та порядок',
      salary: '$550–$750',
      description: 'Надзвичайно спокійні, чесні та працьовиті кандидати. Ідеально підходять для логістичних терміналів WMS, тепличних комплексів, птахофабрик та будівництва.',
      strengths: ['Сувора субординація та порядок', 'Повна відсутність шкідливих звичок', 'Висока фізична витривалість']
    },
    {
      slug: 'bangladesh',
      country: 'Бангладеш',
      flag: '🇧🇩',
      timing: '35–45 днів',
      badge: 'Конвеєр та фасування',
      salary: '$500–$700',
      description: 'Провідні фахівці швейної промисловості, розкрою та складського фасування. Бездоганна посидючість і скрупульозність при безперервній конвеєрній роботі.',
      strengths: ['Ідеальні для конвеєра та харчопрому', 'Скромність та нуль конфліктів', 'Вигідна ставка оплати']
    },
    {
      slug: 'philippines',
      country: 'Філіппіни',
      flag: '🇵🇭',
      timing: '50–70 днів',
      badge: 'Преміум сервіс & англійська',
      salary: '$800–$1,100',
      description: 'Висококваліфікований персонал з вільною англійською мовою. Обслуговування автоматизованих ліній, контроль якості (QA), високоточна збірка електроніки.',
      strengths: ['Вільна ділова англійська', 'Висока виробнича культура', 'Акуратність з високими технологіями']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Globe className="w-4 h-4 text-blue-600" />
          Географія залучення 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Країни-донори та міжнародні хаби Recruiter I Club
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Оберіть країну, щоб переглянути специфіку спеціалізацій, терміни доставки через транзитний коридор Кишинева та очікуваний розмір заробітної плати.
        </p>
      </div>

      {/* Grid of Donor Countries */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hubs.map((hub) => (
          <div
            key={hub.slug}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl leading-none">{hub.flag}</span>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {hub.country}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">Хаб відбору</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold">
                  {hub.badge}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {hub.description}
              </p>

              {/* Strengths */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                {hub.strengths.map((str, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{str}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Термін прибуття</span>
                  <span className="text-sm font-bold text-slate-900">{hub.timing}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-[10px] text-slate-400 block font-medium">Очікуваний оклад</span>
                  <span className="text-sm font-bold text-emerald-700">{hub.salary}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-100">
              <Link
                href="/#catalog"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <span>Дивитися анкету кандидатів з {hub.country}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
