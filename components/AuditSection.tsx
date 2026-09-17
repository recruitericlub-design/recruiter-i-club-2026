'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';

export default function AuditSection({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const isRu = locale === 'ru';

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
          source: isRu ? 'homepage_audit_section_ru' : 'homepage_audit_section_uk',
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
              {isRu ? 'БЕСПЛАТНЫЙ АУДИТ И СМЕТА' : 'БЕЗКОШТОВНИЙ АУДИТ ТА КОШТОРИС'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              {isRu 
                ? 'Готовы закрыть кадровый дефицит без рисков?'
                : 'Готові закрити кадровий дефіцит без ризиків?'
              }
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isRu
                ? 'Получите бесплатный аудит вашего запроса: проверим наличие свободных людей в центрах отбора и подготовим индивидуальную смету доставки на ваше предприятие.'
                : 'Отримайте безкоштовний аудит вашого запиту: перевіримо наявність вільних людей у тестових центрах та підготуємо індивідуальний кошторис доставки на ваше підприємство.'
              }
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-xl font-black text-emerald-950">
                {isRu ? 'Заявка успешно принята!' : 'Заявку успішно прийнято!'}
              </h3>
              <p className="text-sm text-emerald-800 max-w-md mx-auto">
                {isRu
                  ? 'Ведущий координатор свяжется с вами в течение 30 минут с подробным расчетом сметы и досье кандидатов.'
                  : 'Провідний координатор зв’яжеться з вами протягом 30 хвилин з детальним розрахунком кошторису та досьє кандидатів.'
                }
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isRu ? 'Компания / ООО' : 'Компанія / ТОВ'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={isRu ? 'Название предприятия' : 'Назва підприємства'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isRu ? 'Ваше имя' : 'Ваше ім’я'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isRu ? 'Имя директора или HRD' : 'Ім’я директора або HRD'}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isRu ? 'Телефон (WhatsApp / Telegram)' : 'Телефон (WhatsApp / Telegram)'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+380 ..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isRu ? 'Количество рабочих' : 'Кількість робітників'}
                  </label>
                  <select
                    value={formData.headcount}
                    onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
                  >
                    <option value="">{isRu ? 'Выберите количество' : 'Оберіть кількість'}</option>
                    <option value="3-5">{isRu ? '3 – 5 человек' : '3 – 5 працівників'}</option>
                    <option value="5-10">{isRu ? '5 – 10 человек' : '5 – 10 працівників'}</option>
                    <option value="10-25">{isRu ? '10 – 25 человек' : '10 – 25 працівників'}</option>
                    <option value="25-50">{isRu ? '25 – 50 человек' : '25 – 50 працівників'}</option>
                    <option value="50+">{isRu ? '50+ человек (бригада)' : '50+ працівників (бригада)'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isRu ? 'Специальность / Сфера' : 'Спеціальність / Сфера'}
                </label>
                <input
                  type="text"
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  placeholder={isRu ? 'Например: Сварщики MIG, арматурщики, комплектовщики' : 'Наприклад: Зварювальники MIG, арматурники, комплектувальники'}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? (isRu ? 'Отправка...' : 'Відправка...') : (isRu ? 'Получить расчет сметы и досье' : 'Отримати розрахунок кошторису та досьє')}</span>
              </button>

              <p className="text-[11px] text-slate-400 text-center mt-2">
                🔒 {isRu ? 'Конфиденциально. Мы не передаем данные третьим лицам.' : 'Конфіденційно. Ми не передаємо ваші дані третім особам.'}
              </p>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
