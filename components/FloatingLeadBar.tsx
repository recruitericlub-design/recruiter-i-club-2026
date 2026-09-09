'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, MessageSquare, Send, X, PhoneCall, Phone, ShieldCheck } from 'lucide-react';
import AiWorkforceAuditModal from './AiWorkforceAuditModal';

export default function FloatingLeadBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <aside aria-label="Консультація відділу B2B рекрутингу" className="fixed bottom-5 right-5 z-40 max-w-sm sm:max-w-md w-[calc(100%-2.5rem)] animate-fadeIn">
        {!isCollapsed ? (
          <div className="bg-white/95 p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xl shadow-slate-900/15 backdrop-blur-md relative">
            
            {/* Close / Minimize Button */}
            <button
              onClick={() => setIsCollapsed(true)}
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-700 p-1 transition-colors"
              title="Згорнути"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-3.5">
              {/* Corporate Badge Icon */}
              <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                <PhoneCall className="w-5 h-5" />
              </div>

              {/* Text */}
              <div className="space-y-0.5 pr-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] uppercase tracking-wider text-blue-700 font-bold">
                    Відділ B2B рекрутингу в Україні
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Гаряча лінія підбору персоналу
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Черговий координатор розрахує кошторис та надасть перші 5 резюме.
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setIsModalOpen(true)}
                className="py-2 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <Sparkles className="w-3 h-3" />
                <span>Аудит</span>
              </button>

              <a
                href="tel:+380678004040"
                className="py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center justify-center gap-1 transition-all"
              >
                <Phone className="w-3 h-3 text-blue-600" />
                <span>Дзвінок</span>
              </a>

              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] flex items-center justify-center gap-1 transition-all"
              >
                <Send className="w-3 h-3 text-[#229ED9]" />
                <span>Telegram</span>
              </a>
            </div>

          </div>
        ) : (
          <button
            onClick={() => setIsCollapsed(false)}
            className="flex items-center gap-3 p-3 pr-4 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-900 shadow-xl font-bold text-xs ml-auto transition-all group"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <Phone className="w-3 h-3" />
            </div>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Відділ B2B найму
            </span>
          </button>
        )}
      </aside>

      <AiWorkforceAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
