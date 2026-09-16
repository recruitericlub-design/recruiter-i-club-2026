'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, ShieldCheck, Clock, Users, ArrowRight, 
  Play, AlertCircle, Phone, FileCheck, Send, Sparkles, 
  Building2, ChevronRight, Award, ChevronDown 
} from 'lucide-react';
import QuotaBookingModal from '@/components/QuotaBookingModal';

export default function RussianLandingContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProf, setSelectedProf] = useState('Сварщики MIG / MAG');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form State
  const [auditForm, setAuditForm] = useState({
    company: '',
    name: '',
    phone: '',
    industry: 'Производство / Завод',
    workersCount: '10-25'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: auditForm.company,
          name: auditForm.name,
          phone: auditForm.phone,
          industry: auditForm.industry,
          workersNeeded: auditForm.workersCount,
          source: 'landing_ru_audit'
        })
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const professions = [
    {
      title: 'Сварщики MIG / MAG / TIG',
      countries: 'Узбекистан, Индия',
      salary: '$750 – $1,100',
      timing: '21–30 дней',
      icon: '🥽',
      spec: 'Аттестация по ISO 9606, провар толстостенной стали, контроль шва ультразвуком и рентгеном.',
      video: '/work-samples/welder_trade_test_1.mp4'
    },
    {
      title: 'Арматурщики и монолитчики',
      countries: 'Узбекистан',
      salary: '$700 – $950',
      timing: '21–28 дней',
      icon: '🏗️',
      spec: 'Готовые бригады на монолитное строительство. Скорость вязки арматуры от 180 кг/час.',
      video: '/videos/arrival_in_ukraine.mp4'
    },
    {
      title: 'Водители погрузчиков (WMS)',
      countries: 'Индия, Узбекистан',
      salary: '$650 – $900',
      timing: '25–35 дней',
      icon: '🚜',
      spec: 'Работа на электро- и автопогрузчиках, ричтраках в узких проходах логистических комплексов А-класса.',
      video: null
    },
    {
      title: 'Операторы станков с ЧПУ',
      countries: 'Индия, Узбекистан',
      salary: '$800 – $1,200',
      timing: '25–35 дней',
      icon: '⚙️',
      spec: 'Опыт от 5 лет на стойках Fanuc, Siemens Sinumerik, Haas. Чтение чертежей, наладка инструмента.',
      video: null
    },
    {
      title: 'Комплектовщики и упаковщики',
      countries: 'Бангладеш, Непал, Узбекистан',
      salary: '$500 – $750',
      timing: '21–30 дней',
      icon: '📦',
      spec: 'Работа с ТСД сканерами, стикеровка, фасовка, монолитная дисциплина без перекуров и прогулов.',
      video: '/work-samples/assembly_line_test.mp4'
    },
    {
      title: 'Работники тепличных комбинатов',
      countries: 'Непал, Бангладеш',
      salary: '$500 – $700',
      timing: '25–35 дней',
      icon: '🌱',
      spec: 'Выносливость к температурным режимам закрытого грунта, уход за растениями, аккуратный сбор урожая.',
      video: null
    }
  ];

  const faqs = [
    {
      q: 'Подлежат ли иностранные рабочие мобилизации в Украине?',
      a: 'Категорически нет. Согласно статье 23 Закона Украины «О мобилизационной подготовке и мобилизации», иностранные граждане не являются военнообязанными и не подлежат призыву. Предприятие получает 100% стабильность смен.'
    },
    {
      q: 'Как происходит официальное оформление разрешения на работу?',
      a: 'Мы берем на себя весь цикл «под ключ»: получаем официальное разрешение Государственного центра занятости (ДЦЗ), оформляем рабочую визу D-03, организуем спецтрансфер и регистрируем вид на жительство (ВНЖ).'
    },
    {
      q: 'Когда выплачивается комиссия агентства?',
      a: 'Комиссия выплачивается СТРОГО ПОСЛЕ ТОГО, как рабочие приехали на ваше предприятие, прошли инструктаж и вышли на свою первую оплачиваемую рабочую смену.'
    },
    {
      q: 'Что если рабочий не справился с квалификацией?',
      a: 'В договоре зафиксирована гарантия бесплатной замены в течение 48 часов за счет агентства.'
    },
    {
      q: 'Как решается вопрос языкового барьера?',
      a: 'Граждане Узбекистана свободно владеют русским языком. Специалисты из Индии и Непала направляются с русскоговорящими бригадирами, которые координируют производственные задачи.'
    }
  ];

  return (
    <>
      <QuotaBookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        preselectedCategory={selectedProf} 
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-warm-paper border-b border-slate-200/80">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 filter blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-amber-400/10 filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Col */}
            <div className="w-full lg:w-[54%] flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-50 text-emerald-800 border border-emerald-300/80 text-xs font-bold px-3.5 py-1.5 mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Узбекистан, Индия, Бангладеш, Непал ➔ Украина «под ключ»</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
                Официальное трудоустройство иностранцев в Украине: <span className="text-emerald-700 bg-emerald-100/70 border border-emerald-300/70 px-2.5 py-0.5 rounded-xl whitespace-nowrap">подбор персонала и разрешение на работу</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium mb-8">
                Рекрутинговое агентство и аутсорсинговая компания <strong>Recruiter I Club</strong>. Закрываем нехватку рабочих рук на заводах, стройках, складах и агрокомплексах Украины за 21–30 дней.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-emerald-600 font-black text-xl mb-1">100%</div>
                  <div className="text-xs font-bold text-slate-900">Защита от мобилизации</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Ст. 23 ЗУ: иностранцы не подлежат призыву</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-amber-500 font-black text-xl mb-1">21–30 дней</div>
                  <div className="text-xs font-bold text-slate-900">Срок прибытия</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">От первой заявки до выхода на смену</div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs">
                  <div className="text-blue-600 font-black text-xl mb-1">По факту</div>
                  <div className="text-xs font-bold text-slate-900">Оплата комиссии</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Только после реального выхода людей на смену</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedProf('Все специальности');
                    setIsModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/25 transition active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Забронировать квоту персонала</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="#audit"
                  className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 transition flex items-center justify-center"
                >
                  Заказать расчет сметы
                </a>
              </div>
            </div>

            {/* Right Col: Video & Quick Card */}
            <div className="w-full lg:w-[42%]">
              <div className="tactile-card rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 shadow-xl space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Спецтрансфер: Кишинев ➔ Украина
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                    Живое видео
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-inner aspect-video">
                  <video 
                    controls 
                    preload="metadata" 
                    poster="/work-samples/photo_2026-08-24_15-37-22.jpg"
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/transfer_moldova_ukraine.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                  <div className="font-bold text-slate-900">Персональное кураторство группы:</div>
                  <div>• Встреча в аэропорту Кишинева куратором Recruiter I Club</div>
                  <div>• Проверка пакета рабочих виз D-03 и страховок</div>
                  <div>• Прямой автобусный спецрейс до завода замовника</div>
                </div>

                <Link
                  href="/trade-tests"
                  className="block text-center text-xs font-bold text-emerald-700 hover:text-emerald-800 underline"
                >
                  Смотреть все 6 видео Trade-Tests и трансферов →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Professions Bento Showcase */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200">
              Каталог специальностей
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mt-3 mb-4">
              Квалифицированный персонал из стран Азии под ваш запрос
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Каждый кандидат проходит обязательный практический Trade-Test на испытательных полигонах перед отправкой.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {professions.map((p, idx) => (
              <div 
                key={idx}
                className="tactile-card rounded-3xl p-6 bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{p.icon}</span>
                    <span className="text-xs font-bold font-mono px-2.5 py-1 bg-slate-100 rounded-lg text-slate-800">
                      {p.timing}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {p.title}
                  </h3>
                  <div className="text-xs text-slate-500 mb-3">
                    Страны: <strong className="text-slate-800">{p.countries}</strong>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed mb-4">
                    {p.spec}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] text-slate-400 uppercase font-bold">Оклад:</span>
                    <span className="text-sm font-black text-emerald-700">{p.salary} / мес</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProf(p.title);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs transition flex items-center justify-center gap-1.5"
                  >
                    <span>Запросить анкеты</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Guarantees */}
      <section className="py-20 bg-warm-paper border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">
              Железобетонные гарантии для работодателя
            </h2>
            <p className="text-slate-600 text-sm">
              Все риски зафиксированы в официальном договоре. Мы защищаем ваш бизнес.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="tactile-card rounded-3xl p-8 bg-white border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xl mb-6">
                1
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Комиссия только по факту
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Вы не оплачиваете услуги подбора до того момента, пока рабочие физически не прибыли на ваше предприятие и не вышли на первую смену.
              </p>
            </div>

            <div className="tactile-card rounded-3xl p-8 bg-white border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-xl mb-6">
                2
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Бесплатная замена за 48 часов
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Если специалист не соответствует заявленной квалификации или нарушает регламент, мы бесплатно заменяем его на другого из резервного пула.
              </p>
            </div>

            <div className="tactile-card rounded-3xl p-8 bg-white border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-black text-xl mb-6">
                3
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                100% юридическая чистота
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Официальные разрешения Государственного центра занятости (ДЦЗ), рабочие визы D-03, ВНЖ, белая зарплата на банковские карты украинских банков.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-200/70 px-3 py-1 rounded-full">
              Частые вопросы
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
              Ответы на ключевые вопросы собственников и HRD
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-700 transition"
                  >
                    <span>{f.q}</span>
                    <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-600' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audit / Lead Form */}
      <section id="audit" className="py-20 bg-warm-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tactile-card rounded-3xl p-8 sm:p-12 bg-white border border-slate-200 shadow-xl">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                Экспресс-расчет сметы
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3 mb-3">
                Получите расчет затрат на подбор персонала под ваше ТЗ
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Заполните форму — наш ведущий эксперт проверит наличие кандидатов и предоставит официальный расчет в течение 30 минут.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <div className="text-lg font-black text-emerald-900">Заявка успешно принята!</div>
                <div className="text-xs text-emerald-700 max-w-md mx-auto">
                  Куратор свяжется с вами в течение 30 минут с подробным расчетом и образцами резюме.
                </div>
              </div>
            ) : (
              <form onSubmit={handleAuditSubmit} className="space-y-4 max-w-xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Компания / ТОВ</label>
                    <input
                      type="text"
                      required
                      value={auditForm.company}
                      onChange={(e) => setAuditForm({ ...auditForm, company: e.target.value })}
                      placeholder="Название предприятия"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Ваше имя</label>
                    <input
                      type="text"
                      required
                      value={auditForm.name}
                      onChange={(e) => setAuditForm({ ...auditForm, name: e.target.value })}
                      placeholder="Имя директора или HRD"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Телефон (WhatsApp / Telegram)</label>
                    <input
                      type="tel"
                      required
                      value={auditForm.phone}
                      onChange={(e) => setAuditForm({ ...auditForm, phone: e.target.value })}
                      placeholder="+380 ..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Количество рабочих</label>
                    <select
                      value={auditForm.workersCount}
                      onChange={(e) => setAuditForm({ ...auditForm, workersCount: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                    >
                      <option value="3-5">3 – 5 человек</option>
                      <option value="5-10">5 – 10 человек</option>
                      <option value="10-25">10 – 25 человек</option>
                      <option value="25-50">25 – 50 человек</option>
                      <option value="50+">50+ человек (бригада)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Сфера деятельности</label>
                  <input
                    type="text"
                    value={auditForm.industry}
                    onChange={(e) => setAuditForm({ ...auditForm, industry: e.target.value })}
                    placeholder="Например: Завод металлоконструкций, логистический склад, монолит"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Отправка...' : 'Получить смету и резюме кандидатов'}</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center mt-2">
                  🔒 Конфиденциально. Мы не передаем данные третьим лицам.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
