'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import QuotaBookingModal from './QuotaBookingModal';

export default function PortalPreviewSection() {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);

  const candidates = [
    {
      id: 'UZB-9102',
      flag: '🇺🇿',
      code: 'UZB-9102',
      score: 'Trade-Test 9.8/10',
      name: 'Ільхом Бабаєв',
      role: 'Бригадир арматурників (34 р.)',
      statusText: 'Документи в ДЦЗ погоджено',
      statusColor: 'text-emerald-400',
      tagColor: 'bg-amber-400/20 text-amber-300'
    },
    {
      id: 'IND-8492',
      flag: '🇮🇳',
      code: 'IND-8492',
      score: 'Trade-Test 9.9/10',
      name: 'Раджеш Кумар',
      role: 'Зварювальник MIG/MAG (29 р.)',
      statusText: 'Віза D-04 отримана (Транзит)',
      statusColor: 'text-sky-400',
      tagColor: 'bg-sky-400/20 text-sky-300'
    },
    {
      id: 'UZB-6104',
      flag: '🇺🇿',
      code: 'UZB-6104',
      score: 'Trade-Test 9.6/10',
      name: 'Хасан Махмудов',
      role: 'Оператор верстатів ЧПК (31 р.)',
      statusText: 'Відеофіксація випробувань',
      statusColor: 'text-amber-400',
      tagColor: 'bg-amber-400/20 text-amber-300'
    },
    {
      id: 'IND-4421',
      flag: '🇮🇳',
      code: 'IND-4421',
      score: 'Trade-Test 9.9/10',
      name: 'Суніл Шарма',
      role: 'Водій навантажувача / WMS (28 р.)',
      statusText: 'Прибуття на завод через 4 дні',
      statusColor: 'text-purple-400',
      tagColor: 'bg-purple-400/20 text-purple-300'
    }
  ];

  return (
    <>
      <section id="portal" className="scroll-mt-24 py-16 bg-corporate-navy border-b border-slate-800 text-white relative overflow-hidden">
        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 filter blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-500/10 filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Top Section Pill */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-4 py-1.5 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot-pulse"></span>
              <span>ОСОБИСТИЙ КАБІНЕТ РОБОТОДАВЦЯ · RECRUITER I CLUB</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              Інтерактивна демо-версія кабінету роботодавця
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Працюючий інтерактивний пульт керування підбором та легалізацією персоналу. Переглядайте реальні відео Trade-тестів, погоджуйте кандидатів в 1 клік та контролюйте всі етапи легалізації наживо 24/7.
            </p>
          </div>

          {/* CRM Simulator Dashboard */}
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900/90 backdrop-blur-xl">
            {/* Header Bar */}
            <div className="px-4 py-3 bg-slate-950/80 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <span className="text-xs font-mono font-bold text-slate-300">ТОВ «УКРБУДІНВЕСТ-МОНОЛІТ»</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wide bg-amber-400/20 text-amber-300 border border-amber-400/30">ДЕМО-ДОСТУП</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <span>В БАЗІ: <strong className="text-sky-400">124</strong></span>
                <span>|</span>
                <span>НАКАЗ ДЦЗ: <strong className="text-emerald-400">18</strong></span>
                <span>|</span>
                <span className="hidden sm:inline">КУРАТОР 24/7: <strong className="text-amber-400">Оксана Ковальчук</strong></span>
              </div>
            </div>

            {/* Candidate Cards Grid */}
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {candidates.map((cand) => (
                  <div key={cand.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="font-bold flex items-center gap-1 text-slate-200">
                          <span>{cand.flag}</span>
                          <span>{cand.code}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px]">
                          {cand.score}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-white text-sm mb-0.5">{cand.name}</h4>
                      <p className="text-xs text-slate-400 mb-3">{cand.role}</p>
                      <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] text-slate-300 mb-3">
                        <span className={`${cand.statusColor} font-bold`}>● Статус:</span> {cand.statusText}
                      </div>
                    </div>
                    <button 
                      onClick={() => setSelectedCandidate(cand.name)}
                      className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition cursor-pointer"
                    >
                      Переглянути досьє
                    </button>
                  </div>
                ))}
              </div>

              {/* Action Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 border-t border-white/10">
                <a 
                  href="/smartphone_demo.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50"
                >
                  <span>📱 Запустити повноекранний симулятор смартфона</span>
                  <span>➔</span>
                </a>
                <Link 
                  href="/portal" 
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 border border-white/10"
                >
                  <span>📊 Вхід у кабінет роботодавця (PIN-код)</span>
                  <span>➔</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Assurance Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs backdrop-blur-md">
            <div className="flex items-center gap-2.5 text-slate-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 live-dot-pulse"></span>
              <span><strong>ЗАЛІЗНЕ ПРАВИЛО:</strong> Комісію беремо тільки в кінці — коли робітники вже у вас на підприємстві. 100% захист від мобілізації (Ст. 23 ЗУ).</span>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a 
                href="/smartphone_demo.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 hover:text-white font-bold transition flex items-center gap-1.5 border border-white/10"
              >
                <span>⛶ На весь екран</span>
              </a>
              <Link 
                href="/portal" 
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-1.5 shadow-md"
              >
                <span>Вхід у кабінет ➔</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {selectedCandidate && (
        <QuotaBookingModal 
          isOpen={true} 
          onClose={() => setSelectedCandidate(null)} 
          preselectedCategory={selectedCandidate}
        />
      )}
    </>
  );
}
