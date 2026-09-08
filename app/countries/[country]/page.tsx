import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Plane, 
  FileText, 
  AlertCircle, 
  DollarSign,
  Zap
} from 'lucide-react';

const hubsData: Record<string, any> = {
  india: {
    country: 'Індія',
    flag: '🇮🇳',
    badge: 'Технічна еліта',
    timing: '45–60 днів',
    salary: '–',
    description: 'Головне джерело кваліфікованих технічних спеціалістів у світі. Працівники проходять суворий Trade Test на закордонній базі (зварювання, робота на токарних та фрезерних верстатах, монтаж арматури).',
    roles: [
      'Зварювальники TIG / MIG / MAG (сертифікація 6G)',
      'Оператори верстатів з ЧПК / CNC',
      'Електромонтажники та наладчики ліній',
      'Будівельні арматурники та бетонярі',
      'Складські пакувальники та комірники'
    ],
    transit: 'Авіарейс Делі (DEL) ➔ Кишинів (KIV) ➔ Організований наземний трансфер під ключ до виробництва замовника в Україні.',
    documents: [
      'Оригінал Trade Test відео та сертифікат кваліфікації',
      'Медична довідка міжнародного зразка (відсутність інфекцій)',
      'Довідка про несудимість з апостилем',
      'Дозвіл на застосування праці Держпраці України',
      'Робоча віза D-03, видана консульством України'
    ]
  },
  uzbekistan: {
    country: 'Узбекистан',
    flag: '🇺🇿',
    badge: 'Найшвидший старт',
    timing: '20–30 днів',
    salary: '–',
    description: 'Ідеальний коридор для підприємств, яким потрібно запустити зміну в найкоротший термін. Безвізовий або спрощений порядок в\'їзду, відсутність мовного бар\'єру, адаптованість до клімату України.',
    roles: [
      'Вантажники та комплектувальники складів',
      'Робітники агрокомплексів та теплиць',
      'Слюсарі та ремонтники обладнання',
      'Будівельні різноробочі',
      'Водії спецтехніки та навантажувачів'
    ],
    transit: 'Авіарейс Ташкент (TAS) ➔ Кишинів (KIV) ➔ Прямий комфортний автобусний трансфер до вашого підприємства.',
    documents: [
      'Нотаріальний переклад паспорта',
      'Довідка про стан здоров\'я та флюорографія',
      'Дозвіл на роботу в Україні від регіонального центру зайнятості',
      'Трудовий договір (контракт) з вашим ТОВ'
    ]
  },
  kazakhstan: {
    country: 'Казахстан',
    flag: '🇰🇿',
    badge: 'Важка індустрія',
    timing: '25–35 днів',
    salary: '–',
    description: 'Кадри з потужним індустріальним бекграундом. Мають досвід роботи на великих заводах, у гірничій промисловості та металообробці. Звичні до суворих правил охорони праці.',
    roles: [
      'Оператори металообробних ліній',
      'Механіки промислового обладнання',
      'Газорізальники та зварювальники',
      'Стропальники та кранівники',
      'Машиністи екскаваторів та кар\'єрної техніки'
    ],
    transit: 'Авіарейс Алмати / Астана ➔ Кишинів ➔ Трансфер на завод замовника.',
    documents: [
      'Трудова книжка та підтвердження стажу',
      'Довідка про несудимість',
      'Офіційний дозвіл Держпраці на працевлаштування іноземця'
    ]
  },
  bangladesh: {
    country: 'Бангладеш',
    flag: '🇧🇩',
    badge: 'Конвеєр та текстиль',
    timing: '40–55 днів',
    salary: '–',
    description: 'Висока старанність, відсутність схильності до порушень дисципліни, неймовірна усидливість при багатогодинній конвеєрній роботі. Провідні кадри для швейних фабрик та ліній фасування.',
    roles: [
      'Швачки промислових швейних машин',
      'Оператори пакувальних автоматів',
      'Сортувальники та фасувальники харчової продукції',
      'Працівники птахофабрик та ферм'
    ],
    transit: 'Авіарейс Дакка (DAC) ➔ Кишинів (KIV) ➔ Наземний трансфер на об\'єкт.',
    documents: [
      'Міжнародний медичний сертифікат',
      'Консульська віза D-03',
      'Дозвіл на роботу на термін 1–2 роки'
    ]
  },
  nepal: {
    country: 'Непал',
    flag: '🇳🇵',
    badge: 'Дисципліна 100%',
    timing: '45–60 днів',
    salary: '–',
    description: 'Надзвичайно доброзичливі, неконфліктні та стресостійкі працівники. Традиційно шанують працедавця, ретельно дотримуються графіку змін та гігієнічних вимог.',
    roles: [
      'Робітники складських терміналів класу A',
      'Працівники тепличних комбінатів',
      'Допоміжні робітники лісопильних заводів',
      'Помічники операторів виробничих ліній'
    ],
    transit: 'Авіарейс Катманду (KTM) ➔ Кишинів ➔ Супровід в Україну.',
    documents: [
      'Біометричний паспорт та апостильована довідка',
      'Дозвіл на працевлаштування від центру зайнятості України',
      'Віза D-03'
    ]
  },
  philippines: {
    country: 'Філіппіни',
    flag: '🇵🇭',
    badge: 'Англомовні фахівці',
    timing: '50–70 днів',
    salary: '–',
    description: 'Високоякісний персонал європейського стандарту. Досконале володіння англійською мовою, висока особиста культура та ретельність у роботі з дорогою технікою та автоматикою.',
    roles: [
      'Оператори автоматизованих ліній контролю якості',
      'Техніки сервісного обслуговування',
      'Фахівці фармацевтичного та хімічного фасування',
      'Менеджери складського обліку'
    ],
    transit: 'Авіарейс Маніла (MNL) ➔ Кишинів ➔ Спеціальний трансфер на підприємство.',
    documents: [
      'POEA державний дозвіл Філіппін на роботу за кордоном',
      'Дозвіл на роботу Держпраці України',
      'Трудовий договір за міжнародним стандартом'
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(hubsData).map((country) => ({
    country,
  }));
}

export default function CountryDetailPage({ params }: { params: { country: string } }) {
  const hub = hubsData[params.country];

  if (!hub) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back Link */}
      <Link
        href="/countries"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Повернутися до каталогу країн</span>
      </Link>

      {/* Header Banner */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-white/10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-6xl">{hub.flag}</span>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-3xl sm:text-4xl font-black text-white">
                  {hub.country}
                </h1>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25 text-xs font-bold">
                  {hub.badge}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Офіційний відбір Recruiter I Club · Пряме працевлаштування на ваше ТОВ
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs bg-slate-950/70 p-4 rounded-2xl border border-white/10">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-mono">Орієнтовний строк</span>
              <span className="text-white font-bold text-sm">{hub.timing}</span>
            </div>
            <div className="border-l border-white/10 pl-6">
              <span className="text-slate-500 block text-[10px] uppercase font-mono">Ставка працівника</span>
              <span className="text-amber-400 font-extrabold text-sm font-mono">{hub.salary}/міс</span>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {hub.description}
        </p>

        {/* Special Offer Ribbon */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Вартість рекрутингу під ключ: від  / особа · Бронь квоти всього €50</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Roles & Transit (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Roles */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-400" />
              Затребувані спеціальності з цієї країни
            </h3>
            <div className="divide-y divide-white/[0.06]">
              {hub.roles.map((role: string, idx: number) => (
                <div key={idx} className="py-3 flex items-center justify-between text-xs sm:text-sm text-slate-300">
                  <span>{role}</span>
                  <span className="text-emerald-400 font-mono text-xs font-semibold">Trade Test ✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transit Logistics */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plane className="w-5 h-5 text-amber-400" />
              Маршрут доставки та супроводу
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {hub.transit}
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>Наш представник зустрічає кандидатів в аеропорту Кишинева, супроводжує проходження митного контролю та доставляє безпосередньо до гуртожитку вашого підприємства.</span>
            </div>
          </div>

        </div>

        {/* Right Col: Documents & CTA (5 Cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Document list */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-400" />
              Пакет документів для найму
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              {hub.documents.map((doc: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5"></div>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to action card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 space-y-4">
            <h4 className="text-base font-bold text-white">
              Замовити кандидатів з {hub.country}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Отримайте перші резюме та відеозвіти Trade Test протягом 3–5 робочих днів.
            </p>
            <Link
              href="/calculator"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Розрахувати квоту та забронювати (€50)</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
