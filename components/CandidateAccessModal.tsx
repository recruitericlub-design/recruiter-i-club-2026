'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { X, Lock, ShieldCheck, CheckCircle2, Send, PhoneCall, Sparkles } from 'lucide-react';

interface CandidateAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName?: string;
  profession?: string;
}

export default function CandidateAccessModal({
  isOpen,
  onClose,
  candidateName,
  profession
}: CandidateAccessModalProps) {
  const pathname = usePathname();
  const isRu = pathname?.startsWith('/ru');

  const [company, setCompany] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !phone.trim()) return;

    setLoading(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || 'Керівник',
          phone: phone.trim(),
          company: company.trim(),
          workersNeeded: 'Доступ до бази / відео Trade-Test',
          industry: profession ? `Запит відео: ${profession} (${candidateName || 'Загальна база'})` : 'Запит доступу до відео Trade-Test',
          source: isRu ? 'trade_test_access_modal_ru' : 'trade_test_access_modal_ua'
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Lead error', err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setCompany('');
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          title={isRu ? 'Закрыть' : 'Закрити'}
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>{isRu ? 'ЗАКРЫТЫЙ B2B ДОСТУП · РЕЖИМ NDA' : 'ЗАКРИТИЙ B2B ДОСТУП · РЕЖИМ NDA'}</span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {isRu 
                  ? 'Доступ к видео-досье и анкетам кандидатов' 
                  : 'Доступ до відео-досьє та анкет кандидатів'}
              </h3>
              {candidateName && (
                <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-amber-300 font-semibold">
                  <span>Кандидат:</span>
                  <strong className="text-white">{candidateName}</strong>
                  {profession && <span className="text-slate-400">({profession})</span>}
                </div>
              )}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {isRu
                ? 'Согласно протоколу безопасности и регламенту защиты персональных данных, полные видеозаписи практических Trade-Tests и паспорта предоставляются исключительно верифицированным работодателям. Оставьте контакты вашего предприятия — куратор вышлет персональный доступ к видео в течение 15 минут.'
                : 'Згідно з протоколом безпеки та регламентом захисту персональних даних, повні відеозаписи практичних Trade-Tests та паспорти надаються виключно верифікованим роботодавцям. Залиште контакти вашого підприємства — куратор надішле персональний доступ до відео протягом 15 хвилин.'
              }
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div>
                <label className="block text-xs font-bold text-slate-200 mb-1.5">
                  {isRu ? 'Название компании / ООО *' : 'Назва компанії / ТОВ *'}
                </label>
                <input
                  required
                  type="text"
                  placeholder={isRu ? 'ООО «Агро-Пром Сервис»' : 'ТОВ «Агро-Пром Сервіс»'}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    {isRu ? 'Ваше имя и должность' : 'Ваше ім’я та посада'}
                  </label>
                  <input
                    type="text"
                    placeholder={isRu ? 'Александр, HRD' : 'Олександр, HRD'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-200 mb-1.5">
                    {isRu ? 'Телефон для связи (Telegram/звонок) *' : 'Телефон для зв’язку (Telegram/дзвінок) *'}
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+380 67 000 00 00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500 font-mono"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[11px] text-slate-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  {isRu 
                    ? '100% конфиденциальность. Данные защищены согласно ст. 23 ЗУ и NDA.' 
                    : '100% конфіденційність. Дані захищені згідно ст. 23 ЗУ та угоди NDA.'}
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span>{isRu ? 'Отправка...' : 'Відправка...'}</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-slate-950" />
                    <span>{isRu ? 'Получить доступ к видео и базе кандидатов' : 'Отримати доступ до відео та бази кандидатів'}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-black text-white">
              {isRu ? 'Заявка на доступ принята!' : 'Заявку на доступ прийнято!'}
            </h3>

            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              {isRu
                ? `Дежурный куратор свяжется с вами по номеру ${phone} в течение 15 минут для подтверждения статуса работодателя и откроет доступ к полным видео-тестам и анкетам.`
                : `Черговий куратор зв’яжеться з вами за номером ${phone} протягом 15 хвилин для підтвердження статусу роботодавця та відкриє доступ до повних відео-тестів і анкет.`
              }
            </p>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all"
              >
                {isRu ? 'Понятно' : 'Зрозуміло'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}