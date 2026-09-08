'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, Lock, CreditCard } from 'lucide-react';

interface QuotaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotaBookingModal({ isOpen, onClose }: QuotaBookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    workersCount: '15',
    category: 'Пакувальники / Склад',
    urgency: '1 місяць (експрес)',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0b1120] border border-amber-500/30 p-6 sm:p-8 shadow-2xl shadow-amber-500/10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              Спеціальна маркетингова квота 2026
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Фіксація ціни <span className="text-amber-400">від </span> / працівник
            </h3>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Внесіть символічну передплату <span className="text-amber-300 font-bold">€50</span> для закріплення юридичного слоту, бронювання пулу кандидатів та підготовки пакету для Держпраці.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Назва вашого підприємства / ТОВ *
                </label>
                <input
                  required
                  type="text"
                  placeholder="ТОВ «Агро-Пром Сервіс»"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Контактна особа *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Олександр Васильович"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Телефон / Telegram *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+380 (97) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Спеціалізація
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-slate-200 focus:border-amber-400 focus:outline-none"
                  >
                    <option>Пакувальники / Склад</option>
                    <option>Зварювальники (MIG/MAG/TIG)</option>
                    <option>Оператори верстатів (ЧПК/CNC)</option>
                    <option>Сільськогосподарські робітники</option>
                    <option>Робітники будівельних спеціальностей</option>
                    <option>Швачки / Текстильне виробництво</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Кількість працівників
                  </label>
                  <select
                    value={formData.workersCount}
                    onChange={(e) => setFormData({ ...formData, workersCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-slate-200 focus:border-amber-400 focus:outline-none"
                  >
                    <option value="5">5 осіб (Пілотна партія)</option>
                    <option value="15">15 осіб (Повна зміна)</option>
                    <option value="30">30 осіб (Цех / Лінія)</option>
                    <option value="50">50+ осіб (Масштабний проект)</option>
                  </select>
                </div>
              </div>

              {/* Legal Note */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] text-[11px] text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Передплата €50 зараховується у фінальний рахунок. Повертається в повному обсязі, якщо вакансію не погоджено службою безпеки.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                Зафіксувати квоту (€50) та отримати договір
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Квоту успішно заброньовано!
            </h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Дякуємо, <span className="text-amber-400 font-semibold">{formData.name}</span>! Заявку на {formData.workersCount} фахівців ({formData.category}) для {formData.company} зареєстровано в CRM.
            </p>
            <div className="p-3 rounded-xl bg-slate-900 border border-white/10 text-xs text-slate-400 max-w-sm mx-auto">
              Рахунок на бронювання (€50) та проект офіційного договору надіслано вам у Telegram/телефон.
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors"
            >
              Закрити вікно
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
