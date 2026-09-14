'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

export default function AuditSection() {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    headcount: '',
    phone: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseInfo, setResponseInfo] = useState<{ leadId?: string; telegramLink?: string; whatsappLink?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'homepage_audit_section',
          workersNeeded: formData.headcount,
          industry: formData.specialization
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setResponseInfo(data);
      }
    } catch (err) {
      console.error('Audit lead submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="audit" className="scroll-mt-28 py-20 bg-warm-paper">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="max-w-4xl mx-auto tactile-card rounded-3xl p-8 sm:p-12 border-2 border-slate-300 shadow-2xl bg-white">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block rounded-full uppercase tracking-wide bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-4 py-1.5 mb-3">
              БЕЗКОШТОВНИЙ АУДИТ ТА КОШТОРИС
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Готові закрити кадровий дефіцит без ризиків?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Отримайте безкоштовний аудит вашого запиту: перевіримо наявність вільних людей у тестових центрах та підготуємо індивідуальний кошторис доставки на ваше підприємство.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 bg-emerald-50 rounded-2xl border border-emerald-200 p-8">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Дякуємо! Заявку успішно прийнято</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-4">
                Номер заявки: <strong className="text-emerald-700 font-mono">{responseInfo?.leadId || 'LEAD-OK'}</strong>. Куратор зв'яжеться з вами протягом 15 хвилин для узгодження параметрів.
              </p>
              {responseInfo?.telegramLink && (
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a 
                    href={responseInfo.telegramLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold text-sm shadow-md transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Відкрити діалог у Telegram</span>
                  </a>
                </div>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              
              <div>
                <label className="block text-xs font-extrabold tracking-wide text-slate-700 uppercase mb-1">
                  Ваше ім'я та посада
                </label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Олександр, директор з виробництва" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold tracking-wide text-slate-700 uppercase mb-1">
                    Спеціалізація працівників
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={formData.specialization}
                    onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                    placeholder="Зварювальники, арматурники, різноробочі" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold tracking-wide text-slate-700 uppercase mb-1">
                    Необхідна кількість людей
                  </label>
                  <input 
                    type="text" 
                    required 
                    value={formData.headcount}
                    onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                    placeholder="Напр: 10 або 25 людей" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold tracking-wide text-slate-700 uppercase mb-1">
                    Контактний номер телефону (для дзвінка / месенджера)
                  </label>
                  <input 
                    type="tel" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+380" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-mono focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-extrabold tracking-wide text-slate-700 uppercase mb-1">
                    Підприємство або Email (опціонально)
                  </label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="ТОВ / Завод / email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 bg-slate-50/50"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base shadow-lg shadow-emerald-950/20 transition-all hover:scale-[1.01] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Надсилаємо запит...' : 'Замовити безкоштовний аудит запиту (0 грн)'}</span>
              </button>

              <p className="text-[11px] text-slate-500 text-center mt-3">
                🔒 Жодного спаму. Консультація профільного спеціаліста без фінансових зобов'язань. Комісію сплачуєте лише після виходу робітників на зміну.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
