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
          <div className="glass-card p-4 sm:p-5 rounded-3xl border border-amber-500/30 shadow-2xl shadow-black/80 bg-[#080d19]/95 backdrop-blur-xl relative">
            
            {/* Close / Minimize Button */}
            <button
              onClick={() => setIsCollapsed(true)}
              className="absolute top-3 right-3 text-slate-400 hover:text-white p-1"
              title="Згорнути"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-3.5">
              {/* Real Founders Double Avatar Badge */}
              <div className="relative flex -space-x-4 shrink-0 pt-1">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-amber-500 shadow-md bg-slate-900 z-10">
                  <Image
                    src="/team/roman_yanovskyi.jpg"
                    alt="Роман Яновський"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-slate-700 shadow-md bg-slate-900 z-0">
                  <Image
                    src="/team/stanislav_lukhmenko.jpg"
                    alt="Станіслав Лухменко"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="space-y-1 pr-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                    Роман Яновський &amp; Станіслав Лухменко
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white leading-snug">
                  Безкоштовний аудит дефіциту кадрів та економії до 54%
                </h4>
                <p className="text-[10px] text-slate-400 leading-tight">
                  Отримайте персональний кошторис та пряму консультацію засновників.
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white/[0.08]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="py-2 px-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20 transition-all"
              >
                <Sparkles className="w-3 h-3" />
                <span>ШІ-Аудит</span>
              </button>

              <a
                href="https://t.me/RecruiterIClub"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-xl bg-[#229ED9]/20 hover:bg-[#229ED9] text-[#229ED9] hover:text-white border border-[#229ED9]/40 font-bold text-[11px] flex items-center justify-center gap-1 transition-all"
              >
                <Send className="w-3 h-3" />
                <span>Telegram</span>
              </a>

              <a
                href="https://wa.me/380670000000"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/40 font-bold text-[11px] flex items-center justify-center gap-1 transition-all"
              >
                <MessageSquare className="w-3 h-3" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>
        ) : (
          <button
            onClick={() => setIsCollapsed(false)}
            className="flex items-center gap-3 p-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-2xl font-bold text-xs ml-auto transition-all"
          >
            <div className="relative flex -space-x-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-950">
                <Image src="/team/roman_yanovskyi.jpg" alt="Роман" fill className="object-cover" />
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-950">
                <Image src="/team/stanislav_lukhmenko.jpg" alt="Станіслав" fill className="object-cover" />
              </div>
            </div>
            <span>Безкоштовний аудит (ШІ)</span>
          </button>
        )}
      </aside>

      <AiWorkforceAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultSource="floating_bar" />
    </>
  );
}
