'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Lock, 
  CheckCircle2, 
  FileText, 
  Eye, 
  Download,
  Users,
  Briefcase,
  ShieldCheck,
  Video,
  ExternalLink
} from 'lucide-react';
import QuotaBookingModal from '@/components/QuotaBookingModal';

export default function ClientPortalDemoPage() {
  const [activeTab, setActiveTab] = useState<'tracking' | 'candidates' | 'docs'>('tracking');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const realCandidates = [
    {
      id: 'CAN-UZ-887',
      name: 'Насрулла Сайдуллаєв',
      latinName: 'Saydullayev Nasrulla',
      country: 'Узбекистан 🇺🇿',
      role: 'Оператор механічних виробничих ліній',
      experience: '2017–2023 (6+ років)',
      passportExp: '2029 р.',
      skills: ['Обслуговування промислового обладнання', 'Механічна збірка', 'Дотримання регламентів ТО'],
      status: 'Trade Test складено · Готовий до виїзду',
      tradeTestScore: '98/100',
      availability: '14–20 днів (Безвізовий в\'їзд)'
    },
    {
      id: 'CAN-UZ-689',
      name: 'Акмал Мерганов',
      latinName: 'Merganov Akmal',
      country: 'Узбекистан / Таджикистан 🇺🇿',
      role: 'Слюсар-механік & Оператор конвеєра',
      experience: '2016–2023 (7+ років)',
      passportExp: '2026 р.',
      skills: ['Налагодження конвеєрних ліній', 'Слюсарні операції', 'Контроль браку'],
      status: 'Документи верифіковано · Пакет готовий',
      tradeTestScore: '95/100',
      availability: '15–20 днів'
    },
    {
      id: 'CAN-UZ-412',
      name: 'Умід Аллаєв',
      latinName: 'Allayev Umid',
      country: 'Узбекистан 🇺🇿',
      role: 'Монтажник металоконструкцій & Будівельник',
      experience: '2001–2023 (20+ років)',
      passportExp: '2028 р.',
      skills: ['Монтаж каркасів', 'Бетонні роботи', 'Арматурні сітки', 'Читання креслень'],
      status: 'Досвідчений бригадир · Пул відібрано',
      tradeTestScore: '99/100',
      availability: '20–25 днів'
    },
    {
      id: 'CAN-IN-904',
      name: 'Раджеш Шарма',
      latinName: 'Rajesh Sharma',
      country: 'Індія (Ченнаї) 🇮🇳',
      role: 'Зварювальник 6G (MIG / MAG / TIG)',
      experience: '2015–2025 (10 років)',
      passportExp: '2031 р.',
      skills: ['Труби високого тиску', 'Рентген-контроль шва', 'ISO 9606 атестат'],
      status: 'Відео Trade Test доступне · Віза D-03',
      tradeTestScore: '99/100',
      availability: '40–50 днів'
    },
    {
      id: 'CAN-TJ-552',
      name: 'Кадріддін Баходуров',
      latinName: 'Bahodurov Kadriddin',
      country: 'Таджикистан 🇹🇯',
      role: 'Машиніст виробничого устаткування',
      experience: '2018–2024 (6 років)',
      passportExp: '2029 р.',
      skills: ['Диплом технічного коледжу', 'Фасування', 'Вантажні операції'],
      status: 'Диплом підтверджено нотаріально',
      tradeTestScore: '94/100',
      availability: '20–25 днів'
    },
    {
      id: 'CAN-UZ-308',
      name: 'С. Курбанов',
      latinName: 'Kurbanov S.',
      country: 'Узбекистан 🇺🇿',
      role: 'Комірник-пакувальник (Europass CV)',
      experience: '2019–2024 (5 років)',
      passportExp: '2028 р.',
      skills: ['Складський облік WMS', 'Штрих-кодування', 'Робота з роклою та карою'],
      status: 'Europass верифіковано · Англійська basic',
      tradeTestScore: '97/100',
      availability: '15–20 днів'
    }
  ];

  const orders = [
    {
      id: 'ORD-2026-842',
      company: 'ТОВ «Укр-Агро-Пром»',
      role: 'Пакувальники / Складські комірники',
      country: 'Узбекистан 🇺🇿',
      count: 15,
      status: 'Транзит Кишинів ➔ Україна',
      step: 4,
      eta: '12 вересня 2026'
    },
    {
      id: 'ORD-2026-791',
      company: 'ТОВ «Дніпро Метал Воркс»',
      role: 'Зварювальники MIG/MAG 6G',
      country: 'Індія 🇮🇳',
      count: 10,
      status: 'Консульство: вклейка візи D-03',
      step: 3,
      eta: '25 вересня 2026'
    },
    {
      id: 'ORD-2026-650',
      company: 'ПрАТ «Київська Фабрика»',
      role: 'Швачки конвеєрних ліній',
      country: 'Бангладеш 🇧🇩',
      count: 20,
      status: 'Успішно працевлаштовані (Зміна на роботі)',
      step: 5,
      eta: 'На об\'єкті'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Top Banner */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold font-mono">
            <Lock className="w-3.5 h-3.5" />
            B2B Client Portal &amp; CRM Integration · Recruiter I Club
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white">
            Кабінет замовника: Онлайн-трекінг та Пул кандидатів 2026
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
            Кожне підприємство-замовник отримує прямий доступ до бази перевірених резюме, дипломованих фахівців та етапів виконання контрактів.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
          <div className="px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-300 font-mono">
            База CRM: <span className="text-emerald-400 font-bold">2,250+ верифікованих досьє ✓</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
          >
            Бронювати квоту (€50)
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-3 border-b border-white/[0.08] pb-4">
        <button
          onClick={() => setActiveTab('tracking')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'tracking'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-white/[0.04] text-slate-300 hover:text-white'
          }`}
        >
          Активні рейси та етапи договорів ({orders.length})
        </button>
        <button
          onClick={() => setActiveTab('candidates')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
            activeTab === 'candidates'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-white/[0.04] text-slate-300 hover:text-white'
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Пул кандидатів з резюме ({realCandidates.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('docs')}
          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'docs'
              ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
              : 'bg-white/[0.04] text-slate-300 hover:text-white'
          }`}
        >
          Електронний архів документів &amp; Договори
        </button>
      </div>

      {/* Candidates Tab Content */}
      {activeTab === 'candidates' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span>Відображено активні анкети робітників, що пройшли первинний відбір та Trade Test:</span>
            <span className="font-mono text-amber-400">Базова ставка найму: від $500 / працівник</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realCandidates.map((c) => (
              <div
                key={c.id}
                className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4 border border-white/10 hover:border-amber-500/40 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-amber-400 font-bold">{c.id}</span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[10px] text-slate-300 font-mono">
                      {c.country}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {c.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono block">{c.latinName}</span>
                    <span className="text-xs text-amber-400 font-medium block mt-1">{c.role}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-slate-400">
                      <span>Досвід:</span>
                      <strong className="text-white">{c.experience}</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Закордонний паспорт:</span>
                      <strong className="text-emerald-400">Дійсний до {c.passportExp}</strong>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Атестація:</span>
                      <strong className="text-amber-400 font-mono">{c.tradeTestScore}</strong>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-500 uppercase font-mono block">Ключові навички:</span>
                    <div className="flex flex-wrap gap-1">
                      {c.skills.map((s, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] space-y-2">
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{c.availability}</span>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-slate-950 text-amber-400 font-bold text-xs border border-amber-500/30 transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Забронювати фахівця (€50)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tracking Tab Content */}
      {activeTab === 'tracking' && (
        <div className="space-y-6">
          {orders.map((ord) => (
            <div
              key={ord.id}
              className="glass-card p-6 sm:p-8 rounded-3xl space-y-6 border border-white/10 hover:border-amber-500/30 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-amber-400">{ord.id}</span>
                    <span className="text-white font-bold text-base">{ord.company}</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5 block">
                    Позиція: <strong className="text-slate-200">{ord.role}</strong> ({ord.count} робітників) · {ord.country}
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-500 font-mono uppercase block">Орієнтовне прибуття</span>
                  <span className="text-xs font-bold font-mono text-emerald-400">{ord.eta}</span>
                </div>
              </div>

              {/* Progress Steps (1 to 5) */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs">
                <div className={`p-3 rounded-xl border ${ord.step >= 1 ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' : 'bg-slate-950 border-white/5 text-slate-600'}`}>
                  <span className="text-[10px] font-mono block mb-1">Крок 1</span>
                  <span className="font-semibold text-[11px]">Trade Test відбір</span>
                </div>
                <div className={`p-3 rounded-xl border ${ord.step >= 2 ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' : 'bg-slate-950 border-white/5 text-slate-600'}`}>
                  <span className="text-[10px] font-mono block mb-1">Крок 2</span>
                  <span className="font-semibold text-[11px]">Дозвіл Держпраці</span>
                </div>
                <div className={`p-3 rounded-xl border ${ord.step >= 3 ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' : 'bg-slate-950 border-white/5 text-slate-600'}`}>
                  <span className="text-[10px] font-mono block mb-1">Крок 3</span>
                  <span className="font-semibold text-[11px]">Віза D-03</span>
                </div>
                <div className={`p-3 rounded-xl border ${ord.step >= 4 ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' : 'bg-slate-950 border-white/5 text-slate-600'}`}>
                  <span className="text-[10px] font-mono block mb-1">Крок 4</span>
                  <span className="font-semibold text-[11px]">Транзит Кишинів</span>
                </div>
                <div className={`p-3 rounded-xl border ${ord.step >= 5 ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' : 'bg-slate-950 border-white/5 text-slate-600'}`}>
                  <span className="text-[10px] font-mono block mb-1">Крок 5</span>
                  <span className="font-semibold text-[11px]">Зміна на заводі</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Поточний статус: <strong className="text-white">{ord.status}</strong>
                </span>

                <Link
                  href="/trade-tests"
                  className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Переглянути відеозвіти</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Docs Tab Content */}
      {activeTab === 'docs' && (
        <div className="glass-panel p-8 rounded-3xl space-y-4">
          <h3 className="text-lg font-bold text-white mb-4">
            Юридичні типові документи та договори Recruiter I Club 2026
          </h3>
          <div className="divide-y divide-white/[0.06]">
            <div className="py-4 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-white font-semibold">Типовий договір про надання послуг рекрутингу (Recruiter I Club)</div>
                  <span className="text-slate-400 text-[11px]">Формат 4х25%, фіксація гарантії заміни на 30 днів</span>
                </div>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/10 text-white font-mono text-xs flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" />
                <span>PDF (340 КБ)</span>
              </button>
            </div>

            <div className="py-4 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-white font-semibold">Зразок трудового контракту для іноземця за законами України</div>
                  <span className="text-slate-400 text-[11px]">Двомовний (українська / англійська), перевірений Держпраці</span>
                </div>
              </div>
              <button className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/10 text-white font-mono text-xs flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" />
                <span>DOCX (180 КБ)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
