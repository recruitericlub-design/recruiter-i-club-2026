'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import QuotaBookingModal from './QuotaBookingModal';

export default function HeroSection({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const isRu = locale === 'ru';

  return (
    <>
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-warm-paper border-b border-slate-200/70">
        {/* Ambient 3D Glowing Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/10 filter blur-[100px] pointer-events-none ambient-orb-1"></div>
        <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-amber-400/10 filter blur-[120px] pointer-events-none ambient-orb-2"></div>
        <div className="absolute -bottom-24 left-1/4 w-[520px] h-[350px] rounded-full bg-sky-400/10 filter blur-[110px] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left: Pitch & Strategy */}
            <div className="w-full lg:w-[50%] flex flex-col items-start text-left z-10">
              
              {/* Green Pill Badge */}
              <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-50 text-emerald-800 border border-emerald-300/80 text-xs font-bold px-3.5 py-1.5 mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{isRu ? 'Официальный завоз иностранцев и трудовых мигрантов в Украину' : 'Офіційний завіз іноземців та трудових мігрантів в Україну'}</span>
              </span>

              {/* Exact Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-5">
                {isRu ? (
                  <>
                    Подбор и завоз иностранцев на работу в Украину: трудовые мигранты из Азии <span className="inline-block text-emerald-800 bg-emerald-100/80 border border-emerald-300/80 px-3 py-0.5 rounded-xl whitespace-nowrap align-baseline shadow-xs">«под ключ»</span>
                  </>
                ) : (
                  <>
                    Підбір та завіз іноземців на роботу в Україну: трудові мігранти з Азії <span className="inline-block text-emerald-800 bg-emerald-100/80 border border-emerald-300/80 px-3 py-0.5 rounded-xl whitespace-nowrap align-baseline shadow-xs">«під ключ»</span>
                  </>
                )}
              </h1>

              {/* Exact Subtitle */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium mb-6">
                {isRu 
                  ? 'Легальный завоз рабочих и трудоустройство иностранцев в штат вашего предприятия. Закрываем дефицит от 3 до 50+ специалистов (сварщики, ЧПУ, склады, агро) со 100% защитой от мобилизации по ст. 23 ЗУ.'
                  : 'Легальне завезення робітників та працевлаштування іноземців у штат вашого підприємства. Закриваємо дефіцит від 3 до 50+ фахівців (зварювальники, ЧПК, склади, агро) зі 100% захистом від мобілізації за ст. 23 ЗУ.'
                }
              </p>

              {/* 3 Bullets of Trust */}
              <div className="space-y-3 mb-8 w-full">
                <div className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="text-lg mt-0.5">🔍</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold">
                      {isRu ? 'Бесплатный аудит вашего запроса:' : 'Безкоштовний аудит вашого запиту:'}
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5 leading-normal">
                      {isRu 
                        ? 'Сначала тщательно оцениваем вакансию и проверяем наличие людей в наших тестовых центрах. Если не сможем — честно говорим сразу до подписания договора.'
                        : 'Спочатку ретельно оцінюємо вакансію та перевіряємо наявність людей у наших тестових центрах. Якщо не зможемо — чесно кажемо одразу до підписання договору.'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="text-lg mt-0.5">🛡️</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold">
                      {isRu ? 'Наперед — только прямые расходы на документы и логистику:' : 'Наперед — лише прямі витрати на документи та логістику:'}
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5 leading-normal">
                      {isRu
                        ? 'Вы покрываете только фактические расходы на официальное оформление. Комиссию агентства вы оплачиваете только тогда, когда работник уже прибыл на ваше производство.'
                        : 'Ви покриваєте лише фактичні витрати на офіційне оформлення. Комісію агенції ви сплачуєте лише тоді, коли працівник вже прибув на ваше виробництво.'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/80 p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                  <span className="text-lg mt-0.5">🔄</span>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 font-bold">
                      {isRu ? 'Гарантия бесплатной замены по договору:' : 'Гарантія безкоштовної заміни за договором:'}
                    </strong>
                    <p className="text-xs text-slate-600 mt-0.5 leading-normal">
                      {isRu
                        ? 'Если работник не подошел мастеру или заболел — оперативно предоставляем бесплатную замену без повторных комиссий агентства.'
                        : 'Якщо працівник не підійшов майстру або захворів — оперативно надаємо безкоштовну заміну без повторних комісій агенції.'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <a 
                  href="#audit" 
                  className="inline-flex items-center justify-center rounded-full font-bold text-sm px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/15 transition-all hover:-translate-y-0.5 text-center cursor-pointer"
                >
                  {isRu ? 'Заказать бесплатный аудит запроса' : 'Замовити безкоштовний аудит запиту'}
                </a>
                <a 
                  href="#chronicle" 
                  className="inline-flex items-center justify-center rounded-full font-bold text-sm px-6 py-3.5 bg-white text-slate-900 border border-slate-300 hover:bg-slate-50 transition-all shadow-xs gap-2 text-center"
                >
                  <span>{isRu ? 'Как устроен процесс' : 'Як влаштований процес'}</span>
                  <span>➔</span>
                </a>
              </div>

            </div>

            {/* Right: 4-Profession Mosaic Cluster */}
            <div className="w-full lg:w-[50%]">
              <div className="relative bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-xl">
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  
                  {/* Profession 1: Welder */}
                  <div className="relative rounded-2xl overflow-hidden h-48 sm:h-60 group border border-slate-200 shadow-xs">
                    <Image 
                      src="/workers/welder_jasur_29.jpg" 
                      alt={isRu ? 'Сварщики из Азии' : 'Зварювальники з Азії'} 
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-700">
                        {isRu ? '🥽 Сварщики' : '🥽 Зварювальники'}
                      </span>
                      <span className="text-amber-400 font-sans text-[10px] font-bold tracking-wide">ISO 9606-1</span>
                    </div>
                  </div>

                  {/* Profession 2: Construction */}
                  <div className="relative rounded-2xl overflow-hidden h-48 sm:h-60 group border border-slate-200 shadow-xs">
                    <Image 
                      src="/workers/builder_ilkhom_34.jpg" 
                      alt={isRu ? 'Строители и арматурщики' : 'Будівельники та арматурники'} 
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-700">
                        {isRu ? '🏗️ Строительство' : '🏗️ Будівництво'}
                      </span>
                      <span className="text-emerald-400 font-sans text-[10px] font-bold tracking-wide">
                        {isRu ? '180 кг/час' : '180 кг/год'}
                      </span>
                    </div>
                  </div>

                  {/* Profession 3: Warehouse */}
                  <div className="relative rounded-2xl overflow-hidden h-48 sm:h-60 group border border-slate-200 shadow-xs">
                    <Image 
                      src="/workers/forklift_driver.jpg" 
                      alt={isRu ? 'Складские рабочие и карщики' : 'Складські робітники та карщики'} 
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-700">
                        {isRu ? '🚜 Склад / WMS' : '🚜 Склад / WMS'}
                      </span>
                      <span className="text-sky-400 font-sans text-[10px] font-bold tracking-wide">
                        {isRu ? 'Штабелеры' : 'Штабелери'}
                      </span>
                    </div>
                  </div>

                  {/* Profession 4: CNC Operator */}
                  <div className="relative rounded-2xl overflow-hidden h-48 sm:h-60 group border border-slate-200 shadow-xs">
                    <Image 
                      src="/workers/cnc_hasan.jpg" 
                      alt={isRu ? 'Операторы ЧПУ' : 'Оператори ЧПК'} 
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-slate-700">
                        {isRu ? '⚙️ Производство' : '⚙️ Виробництво'}
                      </span>
                      <span className="text-amber-400 font-sans text-[10px] font-bold tracking-wide">
                        {isRu ? 'ЧПУ станки' : 'ЧПК верстати'}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Bottom Live Telemetry Pill */}
                <div className="mt-3.5 p-3 bg-slate-900 rounded-xl flex items-center justify-between text-white font-bold text-xs tracking-wide">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>
                      {isRu ? (
                        <>Пул отбора в Азии: <strong className="text-amber-400">120+ кандидатов</strong></>
                      ) : (
                        <>Пул відбору в Азії: <strong className="text-amber-400">120+ кандидатів</strong></>
                      )}
                    </span>
                  </div>
                  <span className="text-slate-400 text-[11px]">
                    {isRu ? 'Обновлено сегодня' : 'Оновлено сьогодні'}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <QuotaBookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </>
  );
}
