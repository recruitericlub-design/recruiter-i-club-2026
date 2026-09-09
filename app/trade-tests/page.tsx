'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, CheckCircle2, ShieldCheck, Video, Bus, Wrench, FileCheck, Sparkles, ArrowRight } from 'lucide-react';
import QuotaBookingModal from '@/components/QuotaBookingModal';

export default function TradeTestsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'transfer' | 'trade_test'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoItems = [
    {
      id: 'transfer-moldova',
      type: 'transfer',
      title: 'Супровід та спецтрансфер групи робітників: Кишинів ➔ Україна',
      badge: 'Офіційний рейс',
      location: 'Аеропорт Кишинів ➔ Кордон України',
      src: '/videos/transfer_moldova_ukraine.mp4',
      duration: '00:25 хв',
      desc: 'Зустріч закордонних фахівців куратором Recruiter I Club, перевірка пакетів D-03 віз та безпечний автобусний трансфер через державний кордон.'
    },
    {
      id: 'arrival-ukraine',
      type: 'transfer',
      title: 'Прибуття робітників на виробничий об\'єкт замовника в Україні',
      badge: 'Вже в Україні',
      location: 'Виробничий комплекс, Україна',
      src: '/videos/arrival_in_ukraine.mp4',
      duration: '00:34 хв',
      desc: 'Група прибула безпосередньо на територію підприємства: поселення у гуртожиток, первинний медичний огляд та підготовка до виходу на тестову зміну.'
    },
    {
      id: 'transfer-logistics',
      type: 'transfer',
      title: 'Логістичний контроль маршруту та координація поселення',
      badge: 'Супровід 24/7',
      location: 'Транзитний хаб ➔ Завод',
      src: '/videos/transfer_logistics_group.mp4',
      duration: '00:19 хв',
      desc: 'Кожен етап пересування супроводжується персональним менеджером Recruiter I Club з постійним відеозвітом керівництву замовника.'
    },
    {
      id: 'welder-test-1',
      type: 'trade_test',
      title: 'Trade Test: Атестація напівавтоматичного зварювання (MIG / MAG)',
      badge: 'Відеоіспит',
      location: 'Акредитований хаб (Делі / Ташкент)',
      src: '/work-samples/welder_trade_test_1.mp4',
      duration: '00:28 хв',
      desc: 'Практичне виконання таврового та стикового з\'єднання товстостінної сталі під кутом перед комісією технічного контролю.'
    },
    {
      id: 'welder-test-2',
      type: 'trade_test',
      title: 'Trade Test: Контроль геометрії шва та механічні випробування',
      badge: 'Лабораторія ВТК',
      location: 'Екзаменаційний центр',
      src: '/work-samples/welder_trade_test_2.mp4',
      duration: '00:38 хв',
      desc: 'Макрозйомка чистоти зварювального шва, відсутність пір та шлакових дефектів за міжнародним регламентом ISO 9606.'
    },
    {
      id: 'assembly-line-test',
      type: 'trade_test',
      title: 'Trade Test: Слюсарно-складальні операції та темп роботи',
      badge: 'Норматив швидкості',
      location: 'Складальний цех хабу',
      src: '/work-samples/assembly_line_test.mp4',
      duration: '00:44 хв',
      desc: 'Перевірка точності збирання вузлів за кресленням та дотримання виробничого такту для конвеєрного виробництва.'
    }
  ];

  const photoSamples = [
    {
      src: '/work-samples/photo_2026-08-24_15-37-22.jpg',
      title: 'Атестований майстер-зварювальник після складання нормативу',
      date: 'Серпень 2026'
    },
    {
      src: '/work-samples/photo_2026-08-24_15-37-31.jpg',
      title: 'Контрольний зразок провару стику під ультразвуковий контроль',
      date: 'Серпень 2026'
    },
    {
      src: '/work-samples/photo_2026-08-24_15-37-39.jpg',
      title: 'Перевірка калібром та штангелем геометричних розмірів деталі',
      date: 'Серпень 2026'
    }
  ];

  const filteredVideos = activeTab === 'all' 
    ? videoItems 
    : videoItems.filter(v => v.type === activeTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Video className="w-4 h-4 text-blue-600" />
          Реальний відеоархів рейсів та атестацій
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Відеодокази Recruiter I Club: Рейси в Україну та Trade Test
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Ми не показуємо рекламні муляжі. Тут зібрані реальні відеозаписи трансферів через Молдову, прибуття робітників на об’єкти замовників в Україні та кваліфікаційні випробування у закордонних хабах.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'all'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          Всі відеоматеріали ({videoItems.length})
        </button>
        <button
          onClick={() => setActiveTab('transfer')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'transfer'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Bus className="w-3.5 h-3.5" />
          <span>Трансфери &amp; Прибуття в Україну</span>
        </button>
        <button
          onClick={() => setActiveTab('trade_test')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'trade_test'
              ? 'bg-slate-900 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>Trade Test атестації спеціалістів</span>
        </button>
      </div>

      {/* Video Grid with Real HTML5 Players */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* HTML5 Video Player Container */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                
                {/* Location Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] text-white border border-white/15 flex items-center gap-1.5 font-medium pointer-events-none">
                  <span>📍</span>
                  <span>{item.location}</span>
                </span>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-white border border-white/10 pointer-events-none">
                  {item.duration}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    {item.badge}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">
                    Верифіковано 2026
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Замовити таких фахівців (€50 бронь)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Real Photos from Technical Inspections */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Фотозвіти з екзаменаційних хабів</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Контроль якості швів та практичних зразків
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photoSamples.map((photo, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
              <div className="relative h-60 w-full bg-slate-100">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-xs font-bold text-slate-900 leading-snug">{photo.title}</h4>
                <span className="text-[10px] text-slate-500 font-mono block">{photo.date} · Лабораторія Recruiter I Club</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Verification Guarantee Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-amber-400" />
          <h3 className="text-xl font-bold text-white">
            Індивідуальний Trade Test під креслення вашого підприємства
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
          Маєте специфічні вимоги до креслень або зварювальних технологій? Надішліть нам ваше тестове завдання або зразок вузла — наш екзаменатор у закордонному хабі проведе атестацію конкретного кандидата під відеозапис з мікрометром та ультразвуковим контролем до підписання договору.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-all shadow-md active:scale-95"
          >
            Замовити індивідуальний Trade Test
          </button>
        </div>
      </div>

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
