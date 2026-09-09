'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Zap, Lock, CreditCard, Send, MessageSquare } from 'lucide-react';

interface QuotaBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotaBookingModal({ isOpen, onClose }: QuotaBookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    workersCount: '15',
    category: 'Пакувальники / Склад (WMS)',
    urgency: '1 місяць (експрес)',
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          company: formData.company,
          workersNeeded: formData.workersCount,
          industry: formData.category,
          source: 'quota_booking_modal_50eur'
        })
      });
    } catch (err) {
      console.error('Lead submission error', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Бронювання квоти на 2026 рік
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              Фіксація ціни <span className="text-blue-700">від $500</span> / працівник
            </h3>
            <p className="text-xs text-slate-600 mb-6 leading-relaxed">
              Передплата всього <span className="text-emerald-700 font-bold">€50</span> за фіксацію слоту в квоті, бронювання кандидатів та формування пакету документів для Держпраці.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Назва підприємства / ТОВ *
                </label>
                <input
                  required
                  type="text"
                  placeholder="ТОВ «Агро-Пром Сервіс»"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Контактна особа *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Олександр Васильович"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Телефон / Telegram *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+380 (67) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Спеціалізація
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:bg-white focus:border-blue-600 focus:outline-none"
                  >
                    <option>Пакувальники / Склад (WMS)</option>
                    <option>Зварювальники (MIG/MAG 6G)</option>
                    <option>Оператори верстатів ЧПК</option>
                    <option>Сільськогосподарські робітники / Трактористи</option>
                    <option>Будівельні фахівці / Арматурники</option>
                    <option>Слюсарі-складальники</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Кількість працівників
                  </label>
                  <select
                    value={formData.workersCount}
                    onChange={(e) => setFormData({ ...formData, workersCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:bg-white focus:border-blue-600 focus:outline-none"
                  >
                    <option value="5">5 осіб (Пілотна партія)</option>
                    <option value="15">15 осіб (Повна зміна)</option>
                    <option value="30">30 осіб (Цех / Лінія)</option>
                    <option value="50">50+ осіб (Масштабний проект)</option>
                  </select>
                </div>
              </div>

              {/* Legal Note */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Передплата €50 зараховується у фінальний розрахунок. 100% повернення у разі непогодження кандидатур.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <CreditCard className="w-4 h-4" />
                <span>{isSubmitting ? 'Реєстрація квоти...' : 'Зафіксувати квоту (€50) та отримати договір'}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              Квоту успішно заброньовано!
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Дякуємо, <strong className="text-slate-900">{formData.name}</strong>! Заявку на {formData.workersCount} фахівців ({formData.category}) для {formData.company} зареєстровано в CRM.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto space-y-2">
              <p>Менеджер клубу зв&apos;яжеться з вами протягом 15 хвилин для узгодження договору.</p>
              <div className="flex justify-center gap-3 pt-1">
                <a 
                  href="https://t.me" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
                <span>·</span>
                <a 
                  href="https://wa.me" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
            >
              Закрити вікно
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
