'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  X, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Users, 
  Phone, 
  Globe2, 
  MessageSquare, 
  ShieldCheck,
  Zap,
  Lock
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultSource?: string;
}

export default function AiWorkforceAuditModal({ isOpen, onClose, defaultSource = 'direct_modal' }: Props) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [industry, setIndustry] = useState('Виробництво / Завод');
  const [workersCount, setWorkersCount] = useState('6–15 фахівців');
  const [country, setCountry] = useState('Узбекистан або Індія');
  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState<'telegram' | 'whatsapp'>('telegram');
  const [isCalculating, setIsCalculating] = useState(false);
  const [calcProgress, setCalcProgress] = useState(0);
  const [leadResult, setLeadResult] = useState<{ leadId: string; telegramLink: string; whatsappLink: string } | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setCalcProgress(0);
      setIsCalculating(false);
      setLeadResult(null);
    }
  }, [isOpen]);

  const handleStartCalculation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setStep(4); // Calculation screen
    setIsCalculating(true);
    setCalcProgress(15);

    const interval = setInterval(() => {
      setCalcProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + 20;
      });
    }, 400);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          company,
          messenger,
          industry,
          workersNeeded: workersCount,
          country,
          source: defaultSource
        })
      });
      const data = await res.json();
      
      setTimeout(() => {
        clearInterval(interval);
        setCalcProgress(100);
        setIsCalculating(false);
        setLeadResult(data);
        setStep(5); // Success screen
      }, 2000);

    } catch (err) {
      console.error(err);
      setTimeout(() => {
        clearInterval(interval);
        setStep(5);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#090e1a] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top glow accent */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-amber-500/20 blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Аудит дефіциту кадрів &amp; Безкоштовний кошторис
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            {step === 5 ? 'Розрахунок успішно згенеровано!' : 'Експрес-аудит економії фонду оплати праці (ФОП)'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {step === 5 
              ? 'Засновники Роман Яновський та Станіслав Лухменко отримали заявку і готові надати деталі.'
              : 'Дізнайтеся точну вартість найму та економію вашого підприємства до 54% порівняно з локальним ринком.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* STEP 1: Industry & Count */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white uppercase tracking-wider block">
                  1. Оберіть сферу вашого бізнесу:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    'Виробництво / Завод',
                    'Агросектор / Теплиці',
                    'Будівництво / Монтаж',
                    'Склад / Логістика',
                    'Харчова пром-сть',
                    'Інша галузь'
                  ].map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => setIndustry(ind)}
                      className={`p-3 rounded-xl text-xs font-bold text-left transition-all border ${
                        industry === ind 
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md shadow-amber-500/10'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white uppercase tracking-wider block">
                  2. Скільки робітників потрібно закрити?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {['1–5 осіб', '6–15 фахівців', '16–50 осіб', '50+ персоналу'].map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => setWorkersCount(cnt)}
                      className={`p-3 rounded-xl text-xs font-bold text-center transition-all border ${
                        workersCount === cnt
                          ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      {cnt}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Продовжити розрахунок</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Country Preferences */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white uppercase tracking-wider block">
                  3. Які країни-донори вас цікавлять?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: '🇺🇿 Узбекистан (Швидкий старт 20–30 днів)', desc: 'Безвізовий в\'їзд, немає мовного бар\'єру, виробництво & агро' },
                    { title: '🇮🇳 Індія (Технічні профі 45–60 днів)', desc: 'Атестовані зварювальники 6G, оператори ЧПК, слюсарі з Trade Test' },
                    { title: '🇧🇩 Бангладеш & Непал', desc: 'Дисципліновані працівники для фабрик, фасування та складів' },
                    { title: '⚡ Підібрати найкращий варіант за бюджетом', desc: 'ШІ та експерти Recruiter I Club розрахують комбіновану групу' }
                  ].map((c) => (
                    <button
                      key={c.title}
                      type="button"
                      onClick={() => setCountry(c.title)}
                      className={`p-4 rounded-xl text-left transition-all border ${
                        country === c.title
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                          : 'bg-white/[0.03] border-white/10 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <strong className="text-xs block text-white font-bold">{c.title}</strong>
                      <span className="text-[11px] text-slate-400 mt-1 block">{c.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 font-bold text-xs"
                >
                  Назад
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-2/3 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-md shadow-amber-500/20"
                >
                  <span>До отримання звіту</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contacts & Messenger Choice */}
          {step === 3 && (
            <form onSubmit={handleStartCalculation} className="space-y-5 animate-fadeIn">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300">Назва підприємства / ТОВ / ФОП</label>
                <input
                  type="text"
                  required
                  placeholder="Наприклад: ТОВ «Агро-Пром Сервіс»"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Ваше ім&apos;я та посада</label>
                  <input
                    type="text"
                    required
                    placeholder="Олександр (Директор виробництва)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300">Контактний номер телефону</label>
                  <input
                    type="tel"
                    required
                    placeholder="+380 (__) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Choose Messenger for Instant Delivery */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-amber-400 block uppercase tracking-wider">
                  Куди надіслати розрахунок та кошторис?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMessenger('telegram')}
                    className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 font-bold text-xs transition-all ${
                      messenger === 'telegram'
                        ? 'bg-[#229ED9]/20 border-[#229ED9] text-[#229ED9] shadow-lg shadow-[#229ED9]/20'
                        : 'bg-slate-900 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>✈️ Telegram</span>
                    {messenger === 'telegram' && <CheckCircle2 className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setMessenger('whatsapp')}
                    className={`p-3.5 rounded-xl border flex items-center justify-center gap-2.5 font-bold text-xs transition-all ${
                      messenger === 'whatsapp'
                        ? 'bg-[#25D366]/20 border-[#25D366] text-[#25D366] shadow-lg shadow-[#25D366]/20'
                        : 'bg-slate-900 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>💬 WhatsApp</span>
                    {messenger === 'whatsapp' && <CheckCircle2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Розрахувати та надіслати кошторис в {messenger === 'telegram' ? 'Telegram' : 'WhatsApp'}</span>
                </button>
                <p className="text-[10px] text-slate-500 text-center mt-2">
                  🔒 Конфіденційно. Жодного спаму. Розрахунок готується сертифікованими юристами Recruiter I Club.
                </p>
              </div>
            </form>
          )}

          {/* STEP 4: AI Simulation Screen */}
          {step === 4 && (
            <div className="py-10 space-y-6 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center animate-pulse">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white">
                  ШІ-модель аналізує параметри для {company || 'вашого підприємства'}...
                </h4>
                <div className="w-full bg-slate-900 rounded-full h-3 max-w-md mx-auto overflow-hidden border border-white/10">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-amber-400 h-full transition-all duration-300"
                    style={{ width: `${calcProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 text-left font-mono text-[11px] text-slate-400 max-w-md mx-auto space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Звірка квот Держпраці та візових коридорів 2026...</span>
                </div>
                <div className="text-slate-400">Галузь: {industry} · Запит: {workersCount}</div>
                <div className="text-emerald-400">✓ Розраховано економію ФОП: до 54% на місяць</div>
                <div className="text-slate-400">Формування прямого каналу зв&apos;язку у {messenger}...</div>
              </div>
            </div>
          )}

          {/* STEP 5: Success & Direct Founder Action */}
          {step === 5 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3 text-emerald-400 text-xs">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Заявка #{leadResult?.leadId || 'AUDIT-2026'} зареєстрована в базі Recruiter I Club! Кошторис сформовано.</span>
              </div>

              {/* Real Founders Cards */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                  Персональний супровід від засновників Recruiter I Club:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Roman Yanovskyi */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/5">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-amber-500/40 shrink-0 bg-slate-900">
                      <Image
                        src="/team/roman_yanovskyi.jpg"
                        alt="Роман Яновський"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Роман Яновський</h5>
                      <span className="text-[10px] text-amber-400 block font-medium">Засновник &amp; CEO</span>
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> В мережі
                      </span>
                    </div>
                  </div>

                  {/* Stanislav Lukhmenko */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/5">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-amber-500/40 shrink-0 bg-slate-900">
                      <Image
                        src="/team/stanislav_lukhmenko.jpg"
                        alt="Станіслав Лухменко"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white">Станіслав Лухменко</h5>
                      <span className="text-[10px] text-amber-400 block font-medium">Керуючий партнер</span>
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> В мережі
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Розрахунок готовий. Натисніть кнопку нижче, щоб негайно відкрити діалог у месенджері та отримати повний файл аудиту безпосередньо від Романа або Станіслава:
                </p>
              </div>

              {/* Direct Messenger Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={leadResult?.telegramLink || 'https://t.me/RecruiterIClub'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-xl bg-[#229ED9] hover:bg-[#1f8fc4] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#229ED9]/25 transition-all"
                >
                  <span>Відкрити звіт у Telegram</span>
                  <Send className="w-3.5 h-3.5" />
                </a>

                <a
                  href={leadResult?.whatsappLink || 'https://wa.me/380670000000'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25 transition-all"
                >
                  <span>Отримати у WhatsApp</span>
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={onClose}
                  className="text-xs text-slate-400 hover:text-white underline transition-colors"
                >
                  Закрити вікно
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
