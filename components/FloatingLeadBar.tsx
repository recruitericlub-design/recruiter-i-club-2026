'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, MessageSquare, Send, X, PhoneCall } from 'lucide-react';
import AiWorkforceAuditModal from './AiWorkforceAuditModal';

export default function FloatingLeadBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <aside aria-label="Консультація та аудит засновників" className="fixed bottom-5 right-5 z-40 max-w-sm sm:max-w-md w-[calc(100%-2.5rem)] animate-fadeIn">
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
              {/* Real Founders Double Avatar Badge */}
              <div className="relative flex -space-x-3 shrink-0 pt-0.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100 z-10">
                  <Image
                    src="/team/roman_portrait_close.jpg"
                    alt="Роман Яновський"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-100 z-0">
                  <Image
                    src="/team/stanislav_lukhmenko.jpg"
                    alt="Станіслав Лухменко"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="space-y-0.5 pr-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] uppercase tracking-wider text-blue-700 font-bold">
                    Роман Яновський &amp; Станіслав Лухменко
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">
                  Безкоштовний аудит кадрів підприємства
                </h4>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Отримайте розрахунок економії та перші 5 резюме за 24 години.
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setIsModalOpen(true)}
                className="py-2 px-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-sm transition-all"
              >
                <Sparkles className="w-3 h-3" />
                <span>Аудит</span>
              </button>

              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] flex items-center justify-center gap-1 transition-all"
              >
                <Send className="w-3 h-3 text-[#229ED9]" />
                <span>Telegram</span>
              </a>

              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[11px] flex items-center justify-center gap-1 transition-all"
              >
                <MessageSquare className="w-3 h-3 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        ) : (
          <button
            onClick={() => setIsCollapsed(false)}
            className="flex items-center gap-3 p-2.5 pr-4 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-900 shadow-xl font-bold text-xs ml-auto transition-all group"
          >
            <div className="relative flex -space-x-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white">
                <Image src="/team/roman_portrait_close.jpg" alt="Роман" fill className="object-cover" />
              </div>
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white">
                <Image src="/team/stanislav_lukhmenko.jpg" alt="Станіслав" fill className="object-cover" />
              </div>
            </div>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Консультація засновників
            </span>
          </button>
        )}
      </aside>

      <AiWorkforceAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
