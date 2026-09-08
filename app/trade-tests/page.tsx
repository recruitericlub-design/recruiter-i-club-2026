'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, CheckCircle2, ShieldCheck, Video, Bus, Wrench, FileCheck, Sparkles } from 'lucide-react';
import QuotaBookingModal from '@/components/QuotaBookingModal';

export default function TradeTestsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'transfer' | 'trade_test'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoItems = [
    {
      id: 'transfer-moldova',
      type: 'transfer',
      title: 'Супровід та спецтрансфер групи робітників: Кишинів ➔ Україна',
      badge: 'Офіційний рейс',
      location: 'Аеропорт Кишинів ➔ Кордон України',
      src: '/videos/transfer_moldova_ukraine.mp4',
      duration: '00:25 хв',
      desc: 'Зустріч закордонних фахівців куратором Recruiter I Club, перевірка пакетів D-03 віз та безпечний автобусний трансфер через кордон.'
    },
    {
      id: 'arrival-ukraine',
      type: 'transfer',
      title: 'Прибуття робітників на виробничий об\'єкт замовника в Україні',
      badge: 'Вже в Україні',
      location: 'Виробничий комплекс, Україна',
      src: '/videos/arrival_in_ukraine.mp4',
      duration: '00:34 хв',
      desc: 'Група прибула безпосередньо на територію підприємства: поселення, первинний медичний огляд та підготовка до виходу на тестову зміну.'
    },
    {
      id: 'transfer-logistics',
      type: 'transfer',
      title: 'Логістичний контроль маршруту та координація поселення',
      badge: 'Супровід 24/7',
      location: 'Транзитний хаб ➔ Завод',
      src: '/videos/transfer_logistics_group.mp4',
      duration: '00:19 хв',
      desc: 'Кожен етап пересування супроводжується персональним менеджером Recruiter I Club з фото- та відеозвітом замовнику.'
    },
    {
      id: 'welder-test-1',
      type: 'trade_test',
      title: 'Trade Test: Атестація напівавтоматичного зварювання (MIG / MAG)',
      badge: 'Відеоіспит',
      location: 'Акредитований хаб (Південна Азія)',
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
      desc: 'Макрозйомка чистоти зварювального шва, відсутність пір та шлакових дефектів за міжнародним стандартом ISO 9606.'
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
      title: 'Атестований майстер-зварювальник після здачі нормативу',
      date: 'Серпень 2026'
    },
    {
      src: '/work-samples/photo_2026-08-24_15-37-31.jpg',
      title: 'Контрольний зразок провару стику під ультразвуковий тест',
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Video className="w-4 h-4" />
          Реальний відеоархів рейсів та атестацій
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Відеодокази Recruiter I Club: Рейси в Україну та Trade Test
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Ми не показуємо рекламні муляжі. Тут зібрані реальні відеозаписи трансферів через Молдову, прибуття робітників на об&apos;єкти замовників в Україні та кваліфікаційні випробування у закордонних хабах.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'all'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-white/20'
          }`}
        >
          Всі відеоматеріали ({videoItems.length})
        </button>
        <button
          onClick={() => setActiveTab('transfer')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'transfer'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-white/20'
          }`}
        >
          <Bus className="w-3.5 h-3.5" />
          <span>Трансфери &amp; Прибуття в Україну</span>
        </button>
        <button
          onClick={() => setActiveTab('trade_test')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'trade_test'
              ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
              : 'bg-slate-900 border border-white/10 text-slate-300 hover:border-white/20'
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
            className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
          >
            <div>
              {/* HTML5 Video Player Container */}
              <div className="relative aspect-video bg-slate-950 border-b border-white/10 flex items-center justify-center overflow-hidden">
                <video
                  src={item.src}
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                
                {/* Location Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] text-white border border-white/15 flex items-center gap-1.5 font-medium pointer-events-none">
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
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {item.badge}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">
                    Верифіковано 2026
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-amber-500 hover:text-slate-950 text-white font-bold text-xs border border-white/10 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Замовити таких фахівців (€50 бронь)</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Real Photos from Technical Inspections */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Фотозвіти з екзаменаційних хабів</span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white">
            Контроль якості швів та практичних зразків
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photoSamples.map((photo, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/10 group">
              <div className="relative h-60 w-full bg-slate-900">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-xs font-bold text-white leading-snug">{photo.title}</h4>
                <span className="text-[10px] text-slate-500 font-mono block">{photo.date} · Лабораторія Recruiter I Club</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Verification Guarantee Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-amber-500/25 space-y-4">
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
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-500/20"
          >
            Замовити індивідуальний Trade Test
          </button>
          <Link
            href="/about"
            className="px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white font-semibold text-xs border border-white/10 transition-colors flex items-center gap-1.5"
          >
            <span>Дізнатися більше про Recruiter I Club</span>
          </Link>
        </div>
      </div>

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
