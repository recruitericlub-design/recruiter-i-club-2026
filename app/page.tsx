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
  Compass,
  Video,
  Play,
  Send,
  MessageSquare
} from 'lucide-react';
import AiConsultantWidget from '@/components/AiConsultantWidget';
import QuotaBookingModal from '@/components/QuotaBookingModal';
import AiWorkforceAuditModal from '@/components/AiWorkforceAuditModal';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAuditOpen, setIsAuditOpen] = useState(false);

  const hubs = [
    {
      country: 'Узбекистан',
      flag: '🇺🇿',
      slug: 'uzbekistan',
      timing: '20–30 днів',
      badge: 'Найшвидший старт',
      desc: 'Безвізовий в\'їзд, немає мовного бар\'єру, досвід на виробництвах.',
      salary: '$600–$850'
    },
    {
      country: 'Індія',
      flag: '🇮🇳',
      slug: 'india',
      timing: '45–60 днів',
      badge: 'Технічна еліта',
      desc: 'Зварювальники 6G, оператори ЧПК, фахівці монтажу з Trade Test.',
      salary: '$650–$900'
    },
    {
      country: 'Казахстан',
      flag: '🇰🇿',
      slug: 'kazakhstan',
      timing: '25–35 днів',
      badge: 'Промисловий сектор',
      desc: 'Гірнича справа, важке машинобудування, відмінне розуміння мови.',
      salary: '$700–$950'
    },
    {
      country: 'Бангладеш',
      flag: '🇧🇩',
      slug: 'bangladesh',
      timing: '40–55 днів',
      badge: 'Висока витривалість',
      desc: 'Текстильна індустрія, конвеєрне фасування, склади та логістика.',
      salary: '$500–$750'
    },
    {
      country: 'Непал',
      flag: '🇳🇵',
      slug: 'nepal',
      timing: '45–60 днів',
      badge: 'Дисципліна 100%',
      desc: 'Сільське господарство, харчова промисловість, сувора субординація.',
      salary: '$500–$750'
    },
    {
      country: 'Філіппіни',
      flag: '🇵🇭',
      slug: 'philippines',
      timing: '50–70 днів',
      badge: 'Англомовні фахівці',
      desc: 'Високоточна електроніка, обслуговування автоматизованих ліній.',
      salary: '$800–$1,100'
    }
  ];

  const guarantees = [
    {
      num: '01',
      title: 'Кандидат не доїхав — заміна безкоштовна',
      desc: 'Якщо кандидат захворів, відмовився або не пройшов консульську перевірку — миттєво надаємо рівноцінну заміну без додаткових оплат.'
    },
    {
      num: '02',
      title: 'Випробувальний термін 30 днів під захистом',
      desc: 'Якщо працівник не підійшов технологу вашого підприємства — Роман Яновський гарантує безкоштовну заміну кандидата за договором.'
    },
    {
      num: '03',
      title: 'Оплата за результат: старт від $500',
      desc: 'Базова вартість від $500 за працівника, бронь квоти всього €50. Фінальна комісія сплачується лише після 30 днів реальної роботи на об\'єкті.'
    },
    {
      num: '04',
      title: 'Пряме оформлення в штат ТОВ (без аутстафінгу)',
      desc: 'Дозвіл Держпраці видається безпосередньо на ваше підприємство. Це на 100% законно та захищає від штрафів до 160 000 грн.'
    }
  ];

  return (
    <div className="space-y-24 pb-20">

      {/* 1. HERO SECTION WITH EMBEDDED AI WORKFORCE CONSULTANT */}
      <section className="relative pt-8 sm:pt-14 pb-12 overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#0a0f1d] via-[#070a12] to-[#070a12]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-amber-500/[0.06] blur-[120px] pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Live Founders & Telemetry Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900 border border-amber-500/30 text-xs">
              <div className="relative flex -space-x-3">
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-amber-400">
                  <Image src="/team/roman_portrait_close.jpg" alt="Роман Яновський" fill className="object-cover" />
                </div>
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-slate-600">
                  <Image src="/team/stanislav_lukhmenko.jpg" alt="Станіслав Лухменко" fill className="object-cover" />
                </div>
              </div>
              <span className="text-slate-300 font-medium">Роман Яновський &amp; Станіслав Лухменко:</span>
              <span className="text-amber-400 font-bold">Особиста B2B гарантія</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono">
              <span className="text-emerald-400 font-bold">Акція:</span> Бронювання квоти від €50 · Старт від $500/працівник
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Hero Side: High-converting Copy */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6">
              
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08]">
                Легальні працівники з Азії для українських заводів: <br />
                <span className="gradient-text font-black">від $500 за фахівця.</span>
              </h1>

              <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Закриваємо дефіцит кадрів у промисловості, агросекторі, будівництві та логістиці. Пряме офіційне працевлаштування у ваш штат ТОВ з дозволом Держпраці, візою D-03 та фінансовою гарантією заміни.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => setIsAuditOpen(true)}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-amber-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Безкоштовний ШІ-аудит кадрів</span>
                </button>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Бронювати квоту (€50)</span>
                </button>

                <Link
                  href="/trade-tests"
                  className="px-5 py-4 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-300 font-semibold text-sm border border-white/10 transition-all flex items-center justify-center gap-2"
                >
                  <Video className="w-4 h-4 text-emerald-400" />
                  <span>Відео рейсів</span>
                </Link>
              </div>

              {/* Key Trust Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] text-xs text-slate-400">
                <div>
                  <div className="text-white font-bold text-base sm:text-lg">100%</div>
                  <div>Легально на ваше ТОВ</div>
                </div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg">30 днів</div>
                  <div>Гарантійний тест-період</div>
                </div>
                <div>
                  <div className="text-white font-bold text-base sm:text-lg">0 грн</div>
                  <div>Доплат при заміні</div>
                </div>
              </div>

            </div>

            {/* Right Hero Side: AI Workforce Consultant */}
            <div className="lg:col-span-6 xl:col-span-5">
              <AiConsultantWidget />
            </div>

          </div>
        </div>
      </section>

      {/* 2. REAL FOUNDERS RESPONSIBILITY & AUTHENTIC PROOF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-amber-500/30 relative overflow-hidden bg-gradient-to-r from-[#090e1b] via-[#070b14] to-[#0a101e]">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
              Прямий діалог без посередників
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Персональна відповідальність засновників Recruiter I Club
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Ми особисто відповідаємо своїм ім&apos;ям та репутацією за кожну групу працівників, яких доставляємо в Україну.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Roman Yanovskyi */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-6 group hover:border-amber-500/40 transition-colors">
              <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-500/40 shrink-0 bg-slate-900 shadow-xl">
                <Image
                  src="/team/roman_portrait_close.jpg"
                  alt="Роман Яновський — Засновник Recruiter I Club"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">CEO &amp; Співзасновник</span>
                  <h3 className="text-xl font-black text-white">Роман Яновський</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  «Українське виробництво не може простоювати через кадровий голод. Ми забезпечуємо прямий контракт у штат ТОВ і даємо 30 днів безкоштовної заміни кандидата».
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                  <a
                    href="https://t.me/RecruiterIClub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#229ED9]/15 hover:bg-[#229ED9] text-[#229ED9] hover:text-white border border-[#229ED9]/30 font-bold text-[11px] flex items-center gap-1.5 transition-all"
                  >
                    <Send className="w-3 h-3" />
                    <span>Telegram Романа</span>
                  </a>
                  <a
                    href="https://wa.me/380670000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 font-bold text-[11px] flex items-center gap-1.5 transition-all"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Stanislav Lukhmenko */}
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center gap-6 group hover:border-amber-500/40 transition-colors">
              <div className="relative w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-500/40 shrink-0 bg-slate-900 shadow-xl">
                <Image
                  src="/team/stanislav_lukhmenko.jpg"
                  alt="Станіслав Лухменко — Керуючий партнер Recruiter I Club"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3 text-center sm:text-left">
                <div>
                  <span className="text-[10px] uppercase font-mono text-amber-400 font-bold block">Співзасновник &amp; Керуючий партнер</span>
                  <h3 className="text-xl font-black text-white">Станіслав Лухменко</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  «Трансферний коридор Кишинів ➔ Україна, дозвіл Держпраці та поселення на заводі ми координуємо особисто. Ви бачите людей ще до їхнього вильоту».
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                  <a
                    href="https://t.me/RecruiterIClub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-[#229ED9]/15 hover:bg-[#229ED9] text-[#229ED9] hover:text-white border border-[#229ED9]/30 font-bold text-[11px] flex items-center gap-1.5 transition-all"
                  >
                    <Send className="w-3 h-3" />
                    <span>Telegram Станіслава</span>
                  </a>
                  <button
                    onClick={() => setIsAuditOpen(true)}
                    className="py-2 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>ШІ-Аудит</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <span className="text-xs text-slate-300">
              Бажаєте індивідуальний розрахунок економії та кошторис на працівників?
            </span>
            <button
              onClick={() => setIsAuditOpen(true)}
              className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Отримати персональний аудит у WhatsApp / Telegram</span>
            </button>
          </div>

        </div>
      </section>

      {/* 3. REAL CLIENT VIDEOS: TRANSFERS & ARRIVAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Відеодокази 2026</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Відеозаписи рейсів та трансферу в Україну
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Подивіться, як наші групи фахівців прибувають в аеропорт Кишинева, проходять кордон та прибувають на виробничі бази замовників.
            </p>
          </div>
          <Link
            href="/trade-tests"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Всі відеозаписи та Trade Test ({'>'})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video 1: Transfer */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col">
            <div className="relative aspect-video bg-slate-950">
              <video
                src="/videos/transfer_moldova_ukraine.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] text-white border border-white/15 flex items-center gap-1.5 font-medium pointer-events-none">
                📍 Аеропорт Кишинів ➔ Кордон Могилів-Подільський
              </span>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-amber-400 font-bold">Офіційний трансферний коридор</span>
                <span className="text-slate-500 font-mono text-[11px]">Серпень 2026</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Супровід та спецтрансфер групи робітників в Україну
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Повний супровід куратором Recruiter I Club від трапу літака до безпечного перетину державного кордону України.
              </p>
            </div>
          </div>

          {/* Video 2: Arrival in Ukraine */}
          <div className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col">
            <div className="relative aspect-video bg-slate-950">
              <video
                src="/videos/arrival_in_ukraine.mp4"
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] text-white border border-white/15 flex items-center gap-1.5 font-medium pointer-events-none">
                📍 Виробничий комплекс замовника, Україна
              </span>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-bold">Вже на території України</span>
                <span className="text-slate-500 font-mono text-[11px]">Серпень 2026</span>
              </div>
              <h3 className="text-base font-bold text-white">
                Прибуття та розселення персоналу на заводі
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Група робітників прибула на підприємство, поселена в підготовлене житло та проходить інструктаж з охорони праці.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUR CORE GUARANTEES (BEATING COMPETITORS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Тверда безпека для роботодавця
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ризик приїзду та адаптації ми беремо на себе
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            На відміну від агенцій-посередників, наша комісія прив&apos;язана до результату. Ви платите за людей на зміні, а не за паперові обіцянки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guarantees.map((g) => (
            <div
              key={g.num}
              className="glass-card glass-card-hover p-7 sm:p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="text-4xl font-black text-amber-500/20 group-hover:text-amber-500/40 font-mono transition-colors mb-3">
                {g.num}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                {g.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-white/10 shadow-2xl space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Економічна розвідка</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Чому прямий найм Recruiter I Club вигідніший за аутстафінг
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-slate-400">
                  <th className="py-4 px-4 font-semibold">Критерій</th>
                  <th className="py-4 px-4 font-bold text-amber-400 bg-amber-500/10 rounded-t-xl">
                    Recruiter I Club (Прямий найм)
                  </th>
                  <th className="py-4 px-4 font-semibold">Сірий аутстафінг</th>
                  <th className="py-4 px-4 font-semibold">Класичні візові агенції</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-slate-300">
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Юридичний статус</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-amber-500/5">Працівник у вашому штаті ТОВ</td>
                  <td className="py-4 px-4 text-rose-400">Сумнівні фірми-прокладки</td>
                  <td className="py-4 px-4">Лише візовий консалтинг</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Ціна послуги</td>
                  <td className="py-4 px-4 font-bold text-amber-400 bg-amber-500/5">Від $500 + бронь €50</td>
                  <td className="py-4 px-4 text-slate-400">×2 від ставки робітника щомісяця</td>
                  <td className="py-4 px-4">$1,200–$1,800 наперед</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Гарантія заміни</td>
                  <td className="py-4 px-4 font-bold text-emerald-400 bg-amber-500/5">100% безкоштовно протягом 30 днів</td>
                  <td className="py-4 px-4 text-slate-400">Часто за додаткову плату</td>
                  <td className="py-4 px-4 text-rose-400">Відсутня (робота виконана з візою)</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white">Транзитний коридор</td>
                  <td className="py-4 px-4 font-semibold text-white bg-amber-500/5">Кишинів ➔ Спецтранспорт на завод</td>
                  <td className="py-4 px-4 text-slate-400">Сам добирається</td>
                  <td className="py-4 px-4 text-slate-400">До кордону України</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. DONOR COUNTRIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Географія партнерів</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Країни-донори та спеціалізації фахівців
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Відбираємо перевірених кандидатів через власні закордонні центри та проводимо обов&apos;язковий Trade Test відеозапис навичок.
            </p>
          </div>
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Переглянути всі 7 країн детально</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((h) => (
            <Link
              key={h.slug}
              href={`/countries/${h.slug}`}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-3xl">{h.flag}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {h.country}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 text-[10px] font-bold">
                    {h.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {h.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Строк прибуття</span>
                  <span className="text-white font-semibold">{h.timing}</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block text-[10px] uppercase font-mono">Зарплата</span>
                  <span className="text-amber-400 font-bold font-mono">{h.salary}/міс</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. REAL VISAS & LICENSES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">Фактична легалізація</span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Свіжі робочі візи D-03 та накази Держпраці (2026)
              </h3>
            </div>
            <Link
              href="/about"
              className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5"
            >
              <span>Всі ліцензії та договори ({'>'})</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-56 w-full bg-slate-950">
                <Image src="/visas/photo_2026-09-07_15-22-38.jpg" alt="Віза D-03" fill className="object-contain p-2" />
              </div>
              <div className="p-3 text-center text-xs font-medium text-slate-300">
                Офіційна віза D-03 (Вересень 2026)
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-56 w-full bg-slate-950">
                <Image src="/visas/photo_2026-09-07_15-23-05.jpg" alt="Легалізація" fill className="object-contain p-2" />
              </div>
              <div className="p-3 text-center text-xs font-medium text-slate-300">
                Консульська візова наклейка
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-white/10">
              <div className="relative h-56 w-full bg-slate-950">
                <Image src="/visas/photo_2026-09-07_15-23-09.jpg" alt="Перетин кордону" fill className="object-contain p-2" />
              </div>
              <div className="p-3 text-center text-xs font-medium text-slate-300">
                Перетин кордону Могилів-Подільський
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-16 rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#080d18] border border-amber-500/30 shadow-2xl space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Готові закрити дефіцит кадрів на вашому підприємстві?
          </h2>
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Забронюйте квоту сьогодні всього за <strong className="text-amber-300 font-bold">€50</strong>. Ми закріпимо за вами спеціальну ціну від $500 за працівника та підберемо перші анкети за 3–5 днів.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsAuditOpen(true)}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>ШІ-Аудит економії (Безкоштовно)</span>
            </button>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white font-semibold text-base border border-white/15 transition-colors flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Зафіксувати квоту (€50)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuotaBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <AiWorkforceAuditModal isOpen={isAuditOpen} onClose={() => setIsAuditOpen(false)} defaultSource="home_page_cta" />
    </div>
  );
}
