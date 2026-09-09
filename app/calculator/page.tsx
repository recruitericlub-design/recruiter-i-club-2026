'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Zap, TrendingDown, DollarSign, ShieldCheck, CheckCircle2 } from 'lucide-react';
import QuotaBookingModal from '@/components/QuotaBookingModal';

export default function CalculatorPage() {
  const [workersCount, setWorkersCount] = useState(15);
  const [role, setRole] = useState('packers');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rolesData: Record<string, { name: string; localSalaryUah: number; foreignSalaryUsd: number; trainingDays: number }> = {
    packers: { name: 'Пакувальники / Склад (WMS)', localSalaryUah: 28000, foreignSalaryUsd: 650, trainingDays: 3 },
    welders: { name: 'Зварювальники (MIG/MAG 6G)', localSalaryUah: 45000, foreignSalaryUsd: 850, trainingDays: 5 },
    cnc: { name: 'Оператори ЧПК / CNC токарні', localSalaryUah: 50000, foreignSalaryUsd: 900, trainingDays: 7 },
    agro: { name: 'Механізатори / Трактористи', localSalaryUah: 35000, foreignSalaryUsd: 700, trainingDays: 3 }
  };

  const currentRole = rolesData[role] || rolesData.packers;
  const usdRate = 41.5;

  const downtimeLossMonthlyUah = workersCount * 35000;
  const recruitmentCostUsd = workersCount * 500;
  const monthlySalaryDifference = Math.max(0, (currentRole.localSalaryUah - currentRole.foreignSalaryUsd * usdRate) * workersCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Calculator className="w-3.5 h-3.5 text-blue-600" />
          Фінансовий аудит 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Калькулятор вартості та збитків простою
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Порахуйте реальну економіку заміни дефіцитних локальних кадрів на дисциплінований іноземний персонал та дізнайтеся, скільки ваше підприємство зберігає щомісяця.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-8">
          
          {/* Slider: Workers count */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-900">
                Потрібна кількість працівників:
              </label>
              <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-black text-base font-mono">
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
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>5 (пілотна бригада)</span>
              <span>15 (зміна)</span>
              <span>30 (цех)</span>
              <span>50 (завод)</span>
            </div>
          </div>

          {/* Role selection buttons */}
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-900 block">
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
                        ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-bold text-sm text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-500 mt-1">
                      Очікувана ставка: <span className="text-emerald-700 font-mono font-bold">${r.foreignSalaryUsd}/міс</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Legal Defense Callout */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900 block">
                100% захист від простоїв та викликів до ТЦК:
              </span>
              <p>
                Згідно зі ст. 23 ЗУ «Про мобілізаційну підготовку та мобілізацію», іноземні громадяни не підлягають призову та мають річний трудовий договір.
              </p>
            </div>
          </div>

        </div>

        {/* Right Output Card (5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
              Економічний ефект для ТОВ:
            </span>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15">
              <span className="text-xs text-slate-300 block mb-1">Запобігання прямим втратам від простою:</span>
              <div className="text-3xl font-black text-emerald-400 font-mono">
                {downtimeLossMonthlyUah.toLocaleString()} грн<span className="text-sm font-normal text-slate-300">/міс</span>
              </div>
              <span className="text-[11px] text-slate-300 mt-1 block">
                Розраховано на основі середньої вартості 1 зміни та штрафів за затримку постачань.
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-4">
              <div className="flex justify-between">
                <span>Базова вартість найму:</span>
                <strong className="text-white font-mono">від $500 / робітник</strong>
              </div>
              <div className="flex justify-between">
                <span>Передплата за бронь квоти:</span>
                <strong className="text-amber-400 font-mono">€50 ({workersCount * 50} € разом)</strong>
              </div>
              <div className="flex justify-between">
                <span>Термін виходу на об’єкт:</span>
                <strong className="text-emerald-400 font-mono">20–45 днів</strong>
              </div>
              <div className="flex justify-between">
                <span>Гарантійна безкоштовна заміна:</span>
                <strong className="text-white">48 годин</strong>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Забронювати квоту (€50 за особу)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
