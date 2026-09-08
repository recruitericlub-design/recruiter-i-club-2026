'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Zap, TrendingDown, DollarSign } from 'lucide-react';
import QuotaBookingModal from '@/components/QuotaBookingModal';

export default function CalculatorPage() {
  const [workersCount, setWorkersCount] = useState(15);
  const [role, setRole] = useState('packers');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rolesData: Record<string, { name: string; localSalaryUah: number; foreignSalaryUsd: number; trainingDays: number }> = {
    packers: { name: 'Пакувальники / Склад', localSalaryUah: 28000, foreignSalaryUsd: 650, trainingDays: 3 },
    welders: { name: 'Зварювальники (MIG/MAG)', localSalaryUah: 45000, foreignSalaryUsd: 850, trainingDays: 5 },
    cnc: { name: 'Оператори ЧПК / CNC', localSalaryUah: 50000, foreignSalaryUsd: 950, trainingDays: 7 },
    agro: { name: 'Агроробітники / Теплиці', localSalaryUah: 25000, foreignSalaryUsd: 600, trainingDays: 2 }
  };

  const currentRole = rolesData[role] || rolesData.packers;
  const usdRate = 41.5;

  const downtimeLossMonthlyUah = workersCount * 35000;
  const recruitmentCostUsd = workersCount * 500;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5" />
          Фінансовий аудит 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Калькулятор вартості та збитків простою
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Порахуйте реальну економіку заміни дефіцитних локальних кадрів на дисциплінований іноземний персонал та дізнайтеся, скільки ваше підприємство втрачає щомісяця.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl space-y-8">
          
          {/* Slider: Workers count */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-white">
                Потрібна кількість працівників:
              </label>
              <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-base font-mono">
                {workersCount} осіб
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="1"
              value={workersCount}
              onChange={(e) => setWorkersCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono">
              <span>5 (пілот)</span>
              <span>15 (зміна)</span>
              <span>30 (цех)</span>
              <span>50 (масштаб)</span>
            </div>
          </div>

          {/* Role selection buttons */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-white block">
              Спеціалізація виробництва:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.keys(rolesData).map((key) => {
                const r = rolesData[key];
                const isSelected = role === key;
                return (
                  <button
                    key={key}
                    onClick={() => setRole(key)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-500 text-amber-400 shadow-md shadow-amber-500/10'
                        : 'bg-slate-900/60 border-white/[0.08] text-slate-300 hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{r.name}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      Зарплата: <span className="text-amber-300 font-mono font-semibold">${r.foreignSalaryUsd}/міс</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Special Marketing Hook Notice */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3">
            <Zap className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-300 leading-relaxed">
              <strong className="text-amber-300 font-bold block mb-0.5">
                Акційна вартість рекрутингу Recruiter I Club: від $500 за фахівця
              </strong>
              Включає відбір через Trade Test, тестування навичок, подання у Держпраці та оформлення прямо у ваш штат. Зафіксуйте ціну передплатою всього <span className="text-amber-400 font-bold font-mono">€50</span>.
            </div>
          </div>

        </div>

        {/* Right Output Dashboard (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 p-8 rounded-3xl space-y-6 shadow-2xl">
          
          <div className="border-b border-white/[0.08] pb-4">
            <span className="text-xs font-mono text-slate-400 uppercase">Результат розрахунку</span>
            <h3 className="text-xl font-black text-white mt-1">
              Економічний ефект для ТОВ
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/70 border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Збитки від простою зміни (міс):</span>
                <span className="text-rose-400 font-extrabold text-lg sm:text-xl font-mono">
                  -{downtimeLossMonthlyUah.toLocaleString('uk-UA')} грн
                </span>
              </div>
              <TrendingDown className="w-6 h-6 text-rose-500/70" />
            </div>

            <div className="p-4 rounded-xl bg-slate-950/70 border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Вартість рекрутингу Recruiter I Club ($500/люд):</span>
                <span className="text-amber-400 font-extrabold text-lg sm:text-xl font-mono">
                  ${recruitmentCostUsd.toLocaleString()}
                </span>
              </div>
              <DollarSign className="w-6 h-6 text-amber-500/70" />
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider block">Окупність інвестиції:</span>
              <div className="text-2xl font-black text-emerald-400 font-mono">
                {'<'} 14 днів роботи зміни
              </div>
              <p className="text-[11px] text-emerald-300/80 leading-relaxed">
                Залучені робітники компенсують вартість оформлення вже у перші два тижні за рахунок ліквідації простою виробничої лінії.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Зафіксувати квоту на {workersCount} осіб (€50)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
