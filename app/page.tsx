'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Clock, 
  Users, 
  Building2, 
  Lock, 
  FileCheck, 
  Award,
  Sparkles,
  HelpCircle,
  Calculator,
  Play,
  Phone,
  MessageSquare,
  Check,
  X as CloseIcon,
  ChevronRight,
  TrendingUp,
  Briefcase,
  AlertTriangle
} from 'lucide-react';
import WorkerCatalogSection from '@/components/WorkerCatalogSection';
import QuotaBookingModal from '@/components/QuotaBookingModal';
import AiWorkforceAuditModal from '@/components/AiWorkforceAuditModal';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // ROI Calculator state
  const [workersCount, setWorkersCount] = useState(15);
  const [industry, setIndustry] = useState<'welding' | 'cnc' | 'logistics' | 'agro'>('welding');

  const industryParams = {
    welding: { name: 'Зварювання & Металообробка', avgLocalPay: 38000, foreignPay: 31000, downtimeCost: 120000 },
    cnc: { name: 'Верстати ЧПК & Машинобудування', avgLocalPay: 42000, foreignPay: 33000, downtimeCost: 150000 },
    logistics: { name: 'Склади & Комплектація (WMS)', avgLocalPay: 30000, foreignPay: 25000, downtimeCost: 90000 },
    agro: { name: 'Агросектор & Трактористи', avgLocalPay: 34000, foreignPay: 27000, downtimeCost: 110000 },
  };

  const selectedParam = industryParams[industry];
  const monthlySalarySavings = (selectedParam.avgLocalPay - selectedParam.foreignPay) * workersCount;
  const turnoverAndDowntimeSavings = Math.round(selectedParam.downtimeCost * (workersCount / 10));
  const totalAnnualSavings = (monthlySalarySavings + turnoverAndDowntimeSavings) * 12;

  const guarantees = [
    {
      num: '01',
      title: 'Кандидат не доїхав — 100% заміна або повернення',
      desc: 'Якщо кандидат захворів, отримав відмову або передумав — миттєво надаємо рівноцінного спеціаліста або повертаємо передоплату без зволікань.'
    },
    {
      num: '02',
      title: 'Випробувальний термін 30 днів під захистом',
      desc: 'Якщо працівник не підійшов вашому технологу або бригадиру — здійснюємо безкоштовну заміну працівника за договором протягом 48 годин.'
    },
    {
      num: '03',
      title: 'Оплата за результат: від $500 за працівника',
      desc: 'Передплата всього €50 за бронь квоти. Фінальний розрахунок здійснюється лише після того, як робітник прибув і приступив до роботи на вашому об’єкті.'
    },
    {
      num: '04',
      title: 'Пряме оформлення в штат ТОВ (без посередників)',
      desc: 'Офіційний дозвіл Держпраці оформлюється безпосередньо на ваше підприємство. Повний захист від штрафів та перевірок контролюючих органів.'
    }
  ];

  const caseStudies = [
    {
      company: 'ТОВ «УкрСтальКонструкція»',
      location: 'Київська область',
      industry: 'Важке машинобудування & Металоконструкції',
      challenge: 'Втрата 14 дипломованих зварювальників через мобілізацію та загроза зриву держзамовлення на будівництво мостових прогонів.',
      solution: 'Підбір 16 зварювальників 6G MIG/TIG з Індії та Узбекистану з відеофіксацією Trade Test.',
      results: [
        '0 днів простою з моменту виходу першої зміни',
        'Економія фонду оплати праці: 340 000 грн/місяць',
        '100% захист лінії від повісток (ст. 23 ЗУ)'
      ],
      quota: '16 працівників',
      timing: '28 днів'
    },
    {
      company: 'Логістичний комплекс «Вест-Логістик»',
      location: 'Львівська область',
      industry: 'Розподільчий центр 3PL & Склади',
      challenge: 'Плинність місцевих пакувальників понад 50% на рік, зриви нічних змін та затримки відвантажень продукції.',
      solution: 'Залучення бригади з 30 комплектувальників та операторів річтраків з Непалу та Бангладеш.',
      results: [
        'Плинність кадрів впала до 2% за рік контракту',
        'Швидкість збирання замовлень зросла на 24%',
        'Нуль прогулів та відмов від понаднормових змін'
      ],
      quota: '30 працівників',
      timing: '35 днів'
    },
    {
      company: 'Агрохолдинг «Поділля-Агро»',
      location: 'Вінницька область',
      industry: 'Агропромисловий комплекс',
      challenge: 'Критичний дефіцит трактористів та комбайнерів на весняну посівну кампанію через мобілізаційні заходи в регіоні.',
      solution: '18 досвідчених механізаторів з Узбекистану з правами категорій A, B, C, D на техніку John Deere.',
      results: [
        'Посівна проведена точно в агротехнічні терміни',
        'Цілодобова робота техніки у дві зміни без затримок',
        'Подовження контрактів ще на 2 сезони'
      ],
      quota: '18 працівників',
      timing: '22 дні'
    }
  ];

  const steps = [
    { step: '01', title: 'Технічне завдання', desc: 'Узгоджуємо кваліфікацію, умови праці, графік та очікувану ставку працівника.' },
    { step: '02', title: 'Відбір та Trade Test', desc: 'Кандидати складають практичний іспит на камеру з лабораторною перевіркою швів і деталей.' },
    { step: '03', title: 'Дозвіл Держпраці', desc: 'Готуємо офіційний юридичний пакет та отримуємо дозвіл на працевлаштування за 7–10 днів.' },
    { step: '04', title: 'Віза D-03', desc: 'Супроводжуємо оформлення робочої візи в консульстві України без міграційних відмов.' },
    { step: '05', title: 'Авіарейс у Кишинів', desc: 'Організовуємо безпечний переліт міжнародної групи в найближчий авіахаб Кишинів (Молдова).' },
    { step: '06', title: 'Трансфер в Україну', desc: 'Зустрічаємо спецтранспортом та доставляємо робітників безпосередньо до гуртожитку вашого підприємства.' },
    { step: '07', title: 'Вихід на зміну', desc: 'Медичний огляд, інструктаж з техніки безпеки, супровід куратора та початок 30-денного випробувального терміну.' }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">

      {/* 1. HERO SECTION — CLEAN EXECUTIVE CORPORATE */}
      <section className="relative pt-10 sm:pt-16 pb-16 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Trust Ribbon */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              🇺🇦 Ліцензія Мінсоцполітики №1428
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% захист від мобілізації (ст. 23 ЗУ)
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
              Передплата всього €50 за бронь квоти
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & High-converting CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Підбір іноземного персоналу для підприємств України: <span className="text-blue-700">від $500</span> за працівника
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Даємо перевірених робітників на зміну за <span className="font-bold text-slate-900">20–45 днів</span>. 
                Не підійшов технологу — замінюємо безкоштовно за договором. 
                Пряме офіційне працевлаштування в штат вашого ТОВ без ризиків зупинки виробництва.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-3 active:scale-95"
                >
                  <span>Отримати анкети кандидатів</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('calculator');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5 text-blue-600" />
                  <span>Розрахувати економію</span>
                </button>
              </div>

              {/* Key Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Без мобілізації</span>
                    <span className="text-[11px] text-slate-500 leading-tight block">Іноземці захищені ст. 23 ЗУ</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Trade Test на відео</span>
                    <span className="text-[11px] text-slate-500 leading-tight block">Підтверджені навички до вильоту</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Заміна за 48 годин</span>
                    <span className="text-[11px] text-slate-500 leading-tight block">Гарантія в офіційному договорі</span>
                  </div>
                </div>
              </div>

              {/* Live Telemetry Counter Ribbon */}
              <div className="p-3.5 rounded-xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-slate-300">Вже працюють в Україні: <strong className="text-white font-mono text-sm">384</strong> робітники</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-slate-300">Мобілізація іноземців: <strong className="text-emerald-400 font-mono text-sm">0%</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">Бронь вересня:</span>
                  <span className="bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded text-[11px]">залишилось 27 місць</span>
                </div>
              </div>

            </div>

            {/* Right Column: Real Founders & Trust Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0"></div>

                <div className="relative z-10 flex items-center gap-4 pb-4 border-b border-slate-100">
                  <div className="flex -space-x-3">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image src="/team/roman_portrait_close.jpg" alt="Роман Яновський" fill className="object-cover" />
                    </div>
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image src="/team/stanislav_lukhmenko.jpg" alt="Станіслав Лухменко" fill className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Роман Яновський &amp; Станіслав Лухменко</h3>
                    <p className="text-xs text-slate-500">Засновники клубу Recruiter I Club</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Особистий контроль кожного контракту
                    </span>
                  </div>
                </div>

                {/* Direct Quote */}
                <div className="relative z-10 bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs text-slate-700 italic leading-relaxed">
                  «Ми не продаємо повітря. Ми даємо підприємствам реальних людей, які вміють працювати, не зривають зміни та не потрапляють під призов. Передплата за бронь — всього €50. Якщо спеціаліст не підійшов — заміна безкоштовна.»
                </div>

                {/* Quick Interactive Selector */}
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Швидкий підбір за сферою:</span>
                    <span className="text-[11px] text-blue-600 font-bold">120+ кандидатів у базі</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button 
                      onClick={() => {
                        const el = document.getElementById('catalog');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-left transition-colors font-medium text-slate-800 flex items-center justify-between"
                    >
                      <span>Зварювання & ЧПК</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('catalog');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-left transition-colors font-medium text-slate-800 flex items-center justify-between"
                    >
                      <span>Склади & Логістика</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('catalog');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-left transition-colors font-medium text-slate-800 flex items-center justify-between"
                    >
                      <span>Агрокомплекси</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('catalog');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="p-2.5 rounded-lg border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 text-left transition-colors font-medium text-slate-800 flex items-center justify-between"
                    >
                      <span>Будівництво & Монтаж</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>

                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow transition-all flex items-center justify-center gap-2"
                  >
                    <span>Отримати добірку резюме під ваші вимоги</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WORKER CATALOG SECTION ("ЛЮДИ — ЦЕ ТОВАР") */}
      <WorkerCatalogSection />

      {/* 3. INTERACTIVE ROI & SAVINGS CALCULATOR */}
      <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Calculator className="w-4 h-4 text-blue-600" />
              Калькулятор окупності та захисту виробництва
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Скільки ваше підприємство заощадить на наймі іноземців?
            </h2>
            <p className="mt-2 text-slate-600 text-base">
              Порівняйте реальні витрати на місцевий персонал (з урахуванням плинності та простоїв від мобілізації) проти стабільної команди за контрактом.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Industry Selector */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
                  1. Оберіть галузь вашого підприємства:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(Object.keys(industryParams) as Array<keyof typeof industryParams>).map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setIndustry(ind)}
                      className={`p-3 rounded-xl text-xs font-bold text-left border transition-all ${
                        industry === ind
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {industryParams[ind].name.split(' & ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Workers Count Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase text-slate-500">
                    2. Потрібна кількість робітників:
                  </label>
                  <span className="text-2xl font-black text-slate-900 font-mono">
                    {workersCount} <span className="text-sm font-normal text-slate-500">осіб</span>
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={workersCount}
                  onChange={(e) => setWorkersCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>5 осіб (бригада)</span>
                  <span>40 осіб (цех)</span>
                  <span>80 осіб (завод)</span>
                </div>
              </div>

              {/* Breakdown metrics */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] text-slate-500 block">Середня ставка в Україні:</span>
                  <span className="text-lg font-bold text-slate-900">{selectedParam.avgLocalPay.toLocaleString()} грн/міс</span>
                  <span className="text-[10px] text-red-500 block mt-1">+ постійний ризик мобілізації</span>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[11px] text-emerald-800 block">Ставка іноземного фахівця:</span>
                  <span className="text-lg font-bold text-emerald-900">{selectedParam.foreignPay.toLocaleString()} грн/міс</span>
                  <span className="text-[10px] text-emerald-700 font-medium block mt-1">100% захист ст. 23 ЗУ</span>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-2xl">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Розрахунок річної вигоди:
                </span>

                <div>
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono block">
                    {totalAnnualSavings.toLocaleString()} <span className="text-xl font-normal text-slate-300">грн/рік</span>
                  </span>
                  <span className="text-xs text-slate-300 mt-1 block">
                    Сукупна економія на зарплатному фонді та ліквідації простоїв зміни.
                  </span>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Економія на ФОП щомісяця:</span>
                    <strong className="text-white font-mono">{monthlySalarySavings.toLocaleString()} грн</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Збережені втрати від простою:</span>
                    <strong className="text-emerald-400 font-mono">+{turnoverAndDowntimeSavings.toLocaleString()} грн/міс</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Бронювання квоти на {workersCount} осіб:</span>
                    <strong className="text-amber-400 font-mono">{workersCount * 50} €</strong>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Зафіксувати квоту та отримати розрахунок</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. REAL UKRAINIAN ENTERPRISE CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-4 h-4 text-blue-600" />
            Досвід українських підприємств
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Реальні кейси: як наші клієнти вирішили проблему браку кадрів
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Виробництва, склади та агрохолдинги, які зберегли безперебійність під час воєнного стану.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((c, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">{c.location}</span>
                    <h3 className="text-lg font-black text-slate-900">{c.company}</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold font-mono">
                    {c.quota}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <span className="font-bold text-slate-500 block mb-1">Проблема:</span>
                  <p className="text-slate-700 leading-relaxed">{c.challenge}</p>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 text-xs">
                  <span className="font-bold text-blue-800 block mb-1">Рішення Recruiter I Club:</span>
                  <p className="text-slate-700 leading-relaxed">{c.solution}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-900 block">Результати:</span>
                  {c.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Термін запуску: <strong className="text-slate-900">{c.timing}</strong></span>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="font-bold text-blue-600 hover:text-blue-700"
                >
                  Хочу такий результат →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 4 B2B GUARANTEES (ASIA WORK STYLE) */}
      <section id="guarantees" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Фінансова та юридична безпека замовника
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            4 залізні гарантії у нашому B2B договорі
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Ми беремо на себе всі ризики підбору, візового процесу, логістики та адаптації працівника.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item) => (
            <div 
              key={item.num}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-black text-slate-200 font-mono block mb-3">
                  {item.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Зафіксовано в договорі</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. DEFENSE & MOBILIZATION SHIELD SECTION (СТАТТЯ 23 ЗУ) */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Юридичний висновок та аналіз законодавства
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Чому іноземний персонал — це 100% гарантія стабільної роботи без мобілізації
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Під час дії воєнного стану головний ризик українського бізнесу — втрата критичних фахівців через мобілізаційні заходи та неможливість отримання 100% броні.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-white block">Стаття 23 Закону України «Про мобілізаційну підготовку та мобілізацію»</span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Іноземні громадяни не перебувають на військовому обліку, не мають військово-облікових документів і не можуть бути призвані до лав ЗСУ.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-white block">Контракт на 1–3 роки без плинності кадрів</span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Робітник приїжджає за цільовою робочою візою D-03 та зацікавлений працювати повні зміни без зривів, простоїв та самовільних звільнень.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-sm text-white block">Пряме оформлення в штат вашого підприємства</span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Ми забезпечуємо офіційний дозвіл Держпраці України на 1 або 2 роки з можливістю безперешкодного подовження.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Box */}
            <div className="lg:col-span-5 bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-2xl space-y-5">
              <h3 className="font-bold text-lg text-white border-b border-slate-700 pb-3">
                Порівняння ризиків для виробництва
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-bold mb-1">
                    <span className="text-red-400">Працівник-громадянин України:</span>
                    <span className="text-red-400">Високий ризик</span>
                  </div>
                  <ul className="text-slate-400 space-y-1 pl-3 border-l-2 border-red-500/50">
                    <li>• Ризик повістки та мобілізації в будь-який день</li>
                    <li>• Складна та не гарантована процедура бронювання</li>
                    <li>• Плинність кадрів понад 45% на рік</li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-700">
                  <div className="flex justify-between font-bold mb-1">
                    <span className="text-emerald-400">Іноземний працівник Recruiter I Club:</span>
                    <span className="text-emerald-400">0% ризику</span>
                  </div>
                  <ul className="text-slate-300 space-y-1 pl-3 border-l-2 border-emerald-500">
                    <li>• Повний імунітет від призову за ст. 23 ЗУ</li>
                    <li>• Працює повні зміни 6 днів на тиждень</li>
                    <li>• Безкоштовна заміна за 48 годин за контрактом</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setIsAuditOpen(true)}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-colors"
              >
                Отримати безкоштовну юридичну консультацію
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 7. 7 STEPS WORKFLOW (МАРШРУТ КАНДИДАТА) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            Прозорий регламент
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Як ми працюємо: 7 кроків від заявки до виходу на зміну
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Всі бюрократичні, консульські та транспортні процеси ми беремо повністю на себе.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div 
              key={s.step}
              className={`bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-r from-emerald-50 to-blue-50 border-emerald-300' : ''
              }`}
            >
              <div>
                <span className="text-2xl font-black text-blue-600 font-mono block mb-2">
                  Крок {s.step}
                </span>
                <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                Контроль менеджера Recruiter I Club
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. REAL PROOF & FOUNDERS SECTION */}
      <section className="bg-slate-100 py-16 sm:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              Реальні обличчя та відповідальність
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Засновники клубу гарантують результат власним ім’ям
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Ми регулярно відвідуємо міжнародні рекрутингові саміти та особисто інспектуємо навчальні центри в країнах-донорах.
            </p>
          </div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            
            {/* Roman Yanovskyi */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row gap-5 items-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 shadow">
                <Image 
                  src="/team/roman_portrait_close.jpg" 
                  alt="Роман Яновський" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-block px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">
                  Засновник &amp; Керуючий партнер
                </div>
                <h3 className="text-xl font-bold text-slate-900">Роман Яновський</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Експерт з міжнародного рекрутингу та B2B контрактування. Особисто курує акредитацію тестових полігонів та юридичну чистоту віз D-03.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://t.me" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Зв’язатися в Telegram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Stanislav Lukhmenko */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row gap-5 items-center">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 shadow">
                <Image 
                  src="/team/stanislav_lukhmenko.jpg" 
                  alt="Станіслав Лухменко" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  Співзасновник &amp; Директор з логістики
                </div>
                <h3 className="text-xl font-bold text-slate-900">Станіслав Лухменко</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Відповідає за трансферний коридор «Кишинів ➔ Україна», безпечний супровід груп кандидатів, розселення та адаптацію на виробництві.
                </p>
                <div className="pt-2">
                  <a 
                    href="https://wa.me" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Зв’язатися у WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Real Media & Documents Proof Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="relative h-48 w-full bg-slate-100">
                <Image 
                  src="/images/booth_signing.jpg" 
                  alt="Стенд Recruiter I Club на виставці" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-xs text-slate-900 mb-1">
                  Міжнародні виставки &amp; Саміти
                </h4>
                <p className="text-[11px] text-slate-500">
                  Підписання прямих угод з міністерствами праці та сертифікованими агенціями Азії.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="relative h-48 w-full bg-slate-100">
                <Image 
                  src="/visas/photo_2026-09-07_15-22-38.jpg" 
                  alt="Реальні візи D-03" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-xs text-slate-900 mb-1">
                  Офіційні робочі візи D-03
                </h4>
                <p className="text-[11px] text-slate-500">
                  100% легальний пакет документів, відсутність міграційних порушень та штрафів.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="relative h-48 w-full bg-slate-100 relative group">
                <Image 
                  src="/images/exhibitions_team.jpg" 
                  alt="Команда на трансфері" 
                  fill 
                  className="object-cover" 
                />
                <button
                  onClick={() => setSelectedVideo('/videos/arrival_in_ukraine.mp4')}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 fill-blue-600 ml-0.5" />
                  </div>
                </button>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-xs text-slate-900 mb-1">
                  Відео прибуття в Україну
                </h4>
                <p className="text-[11px] text-slate-500">
                  Трансфер груп працівників з аеропорту Кишинів прямо до воріт вашого підприємства.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FINAL LEAD GENERATION & AUDIT SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-700 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider inline-block">
              Спеціальна пропозиція
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Замовте безкоштовний аудит кадрових потреб вашого підприємства
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Наші фахівці розрахують точний кошторис оформлення, підберуть оптимальну країну-донора та нададуть перші 5 резюме з відео Trade Test протягом 24 годин.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl transition-all active:scale-95"
              >
                Отримати безкоштовний аудит та анкети
              </button>
              <a
                href="tel:+380678004040"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+38 (067) 800-40-40</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Preview */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-xs font-bold">
              <span>Відеозвіт трансферу працівників</span>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="text-slate-400 hover:text-white text-base font-bold px-2"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video 
                src={selectedVideo} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Booking & Audit Modals */}
      <QuotaBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <AiWorkforceAuditModal isOpen={isAuditOpen} onClose={() => setIsAuditOpen(false)} />

    </div>
  );
}
