'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Video, ArrowRight, UserCheck, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
import QuotaBookingModal from './QuotaBookingModal';
import CandidateAccessModal from './CandidateAccessModal';

export default function PortalPreviewSection({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const isRu = locale === 'ru';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<string>('');

  const candidates = isRu
    ? [
        {
          id: 'UZB-9102',
          flag: '🇺🇿',
          code: 'UZB-9102',
          score: 'Trade-Test 9.8/10',
          name: 'Ильхом Бабаев',
          role: 'Бригадир арматурщиков (34 г.)',
          statusText: 'Приказ Гоструда утвержден',
          statusColor: 'text-emerald-400',
        },
        {
          id: 'IND-8492',
          flag: '🇮🇳',
          code: 'IND-8492',
          score: 'Trade-Test 9.9/10',
          name: 'Раджеш Кумар',
          role: 'Сварщик MIG/MAG (29 л.)',
          statusText: 'Виза D-04 получена (Транзит)',
          statusColor: 'text-sky-400',
        },
        {
          id: 'UZB-6104',
          flag: '🇺🇿',
          code: 'UZB-6104',
          score: 'Trade-Test 9.6/10',
          name: 'Хасан Махмудов',
          role: 'Оператор станков ЧПУ (31 г.)',
          statusText: 'Видео trade-теста верифицировано',
          statusColor: 'text-amber-400',
        },
        {
          id: 'IND-4421',
          flag: '🇮🇳',
          code: 'IND-4421',
          score: 'Trade-Test 9.9/10',
          name: 'Сунил Шарма',
          role: 'Водитель погрузчика / WMS (28 л.)',
          statusText: 'Прибытие на предприятие через 4 дня',
          statusColor: 'text-purple-400',
        }
      ]
    : [
        {
          id: 'UZB-9102',
          flag: '🇺🇿',
          code: 'UZB-9102',
          score: 'Trade-Test 9.8/10',
          name: 'Ільхом Бабаєв',
          role: 'Бригадир арматурників (34 р.)',
          statusText: 'Наказ Держпраці затверджено',
          statusColor: 'text-emerald-400',
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
        },
        {
          id: 'UZB-6104',
          flag: '🇺🇿',
          code: 'UZB-6104',
          score: 'Trade-Test 9.6/10',
          name: 'Хасан Махмудов',
          role: 'Оператор верстатів ЧПК (31 р.)',
          statusText: 'Відео trade-тесту верифіковано',
          statusColor: 'text-amber-400',
        },
        {
          id: 'IND-4421',
          flag: '🇮🇳',
          code: 'IND-4421',
          score: 'Trade-Test 9.9/10',
          name: 'Суніл Шарма',
          role: 'Водій навантажувача / WMS (28 р.)',
          statusText: 'Прибуття на підприємство через 4 дні',
          statusColor: 'text-purple-400',
        }
      ];

  const handleOpenDossier = (candName: string, role: string) => {
    setSelectedCandidate(`${candName} (${role})`);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="portal" className="scroll-mt-24 py-16 bg-[#090e18] border-b border-slate-800 text-white relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 filter blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-amber-500/10 filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Top Section Pill */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-4 py-1.5 mb-3 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{isRu ? 'B2B-СИСТЕМА ОНЛАЙН-КОНТРОЛЯ НАЙМА' : 'B2B-СИСТЕМА ОНЛАЙН-КОНТРОЛЮ НАЙМУ'}</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
              {isRu ? 'Личный кабинет работодателя: полный контроль 24/7' : 'Особистий кабінет роботодавця: повний контроль 24/7'}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {isRu
                ? 'Единое цифровое окно для собственника и HRD: согласование видео trade-тестов, отслеживание приказов Гоструда и координация логистики прибытия рабочих на ваше предприятие в реальном времени.'
                : 'Єдине цифрове вікно для власника та HRD: погодження відео trade-тестів, відстеження наказів Держпраці та координація логістики прибуття робітників на ваше підприємство в реальному часі.'
              }
            </p>
          </div>

          {/* CRM Showcase Dashboard */}
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900/90 backdrop-blur-xl">
            <div className="px-5 py-3.5 bg-slate-950/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                  <span className="text-xs font-mono font-bold text-slate-300">
                    {isRu ? 'СИСТЕМА УПРАВЛЕНИЯ ПЕРСОНАЛОМ · RECRUITER I CLUB' : 'СИСТЕМА КЕРУВАННЯ ПЕРСОНАЛОМ · RECRUITER I CLUB'}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {isRu ? 'ОНЛАЙН СИНХРОНИЗАЦИЯ' : 'ОНЛАЙН СИНХРОНІЗАЦІЯ'}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                <span>{isRu ? 'В БАЗЕ:' : 'В БАЗІ:'} <strong className="text-sky-400">120+ кандидатов</strong></span>
                <span>|</span>
                <span>{isRu ? 'ПРИКАЗЫ ГОСТРУДА:' : 'НАКАЗИ ДЕРЖПРАЦІ:'} <strong className="text-emerald-400">100% согласование</strong></span>
                <span>|</span>
                <span className="hidden sm:inline">{isRu ? 'ДЕЖУРНЫЙ КУРАТОР:' : 'ЧЕРГОВИЙ КУРАТОР:'} <strong className="text-amber-400">Оксана Ковальчук</strong></span>
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {candidates.map((cand) => (
                  <div key={cand.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center justify-between text-[11px] mb-2">
                        <span className="font-bold flex items-center gap-1.5 text-slate-200">
                          <span className="text-base">{cand.flag}</span>
                          <span className="font-mono text-xs">{cand.code}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px]">
                          {cand.score}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-white text-sm mb-0.5 group-hover:text-emerald-300 transition-colors">{cand.name}</h4>
                      <p className="text-xs text-slate-400 mb-3">{cand.role}</p>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <div className={`text-[11px] font-bold ${cand.statusColor} mb-2.5 flex items-center gap-1.5`}>
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{cand.statusText}</span>
                      </div>
                      <button
                        onClick={() => handleOpenDossier(cand.name, cand.role)}
                        className="w-full py-2 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Video className="w-3.5 h-3.5 text-amber-400" />
                        <span>{isRu ? 'Запросить видео-досье' : 'Запросити відео-досьє'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions Ribbon */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-white/10 text-xs">
                <div className="flex items-center gap-2.5 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-ping"></span>
                  <span className="text-xs sm:text-sm">
                    {isRu 
                      ? 'В кабинете доступно скачивание официальных приказов Гоструда, страховок и подтвержденных видео trade-тестов.'
                      : 'В кабінеті доступне завантаження офіційних наказів Держпраці, страховок та підтверджених відео trade-тестів.'
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isRu ? 'Запросить демо-доступ' : 'Запросити демо-доступ'}</span>
                  </button>
                  <Link
                    href="/portal"
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-bold text-xs transition flex items-center justify-center gap-1.5 border border-white/15"
                  >
                    <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isRu ? 'Вход в CRM' : 'Вхід до CRM'}</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <CandidateAccessModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCandidate('');
        }}
        candidateName={selectedCandidate.split(' (')[0] || undefined}
        profession={selectedCandidate.split(' (')[1]?.replace(')', '') || undefined}
      />
    </>
  );
}
