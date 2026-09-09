'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Video, 
  Play, 
  FileText, 
  Calendar, 
  DollarSign, 
  MapPin, 
  Award,
  Filter,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import QuotaBookingModal from './QuotaBookingModal';

export interface WorkerCandidate {
  id: string;
  name: string;
  age: number;
  country: string;
  flag: string;
  category: 'welding' | 'cnc' | 'logistics' | 'agro_construction';
  specialty: string;
  experience: string;
  photoUrl: string;
  tradeTestScore: string;
  testVideoUrl?: string;
  salaryExpectation: string;
  arrivalDays: string;
  skills: string[];
  status: 'available' | 'reserved' | 'in_transit';
}

const CANDIDATES: WorkerCandidate[] = [
  {
    id: 'w-01',
    name: 'Раджеш Кумар (Rajesh Kumar)',
    age: 32,
    country: 'Індія',
    flag: '🇮🇳',
    category: 'welding',
    specialty: 'Зварювальник MIG / MAG / 6G TIG',
    experience: '7 років на металоконструкціях',
    photoUrl: '/workers/welder_rajesh.jpg',
    tradeTestScore: '9.8 / 10 (Схвалено лабораторією)',
    testVideoUrl: '/work-samples/welder_trade_test_1.mp4',
    salaryExpectation: '$750 – $900 / міс',
    arrivalDays: '35–45 днів',
    skills: ['Труби високого тиску', 'MIG/MAG напівавтомат', 'Читання креслень', 'Без шкідливих звичок'],
    status: 'available',
  },
  {
    id: 'w-02',
    name: 'Хасан Алімов (Hasan Alimov)',
    age: 35,
    country: 'Узбекистан',
    flag: '🇺🇿',
    category: 'cnc',
    specialty: 'Оператор-налагоджувальник токарних ЧПК',
    experience: '8 років (стійки HAAS, Siemens Sinumerik)',
    photoUrl: '/workers/cnc_hasan.jpg',
    tradeTestScore: '9.6 / 10 (Допуск за мікрометром)',
    testVideoUrl: '/work-samples/assembly_line_test.mp4',
    salaryExpectation: '$700 – $850 / міс',
    arrivalDays: '20–25 днів',
    skills: ['HAAS SL/ST', 'Корекція коду G/M', 'Контроль допусків 0.01 мм', 'Вільна розмовна мова'],
    status: 'available',
  },
  {
    id: 'w-03',
    name: 'Суніл Шрестха (Sunil Shrestha)',
    age: 28,
    country: 'Непал',
    flag: '🇳🇵',
    category: 'logistics',
    specialty: 'Комплектувальник / Складський оператор WMS',
    experience: '4 роки (розподільчий логістичний центр)',
    photoUrl: '/workers/logistics_packer.jpg',
    tradeTestScore: '9.5 / 10 (Термінал Zebra/WMS)',
    testVideoUrl: '/videos/arrival_in_ukraine.mp4',
    salaryExpectation: '$550 – $700 / міс',
    arrivalDays: '40–50 днів',
    skills: ['Сканування штрих-кодів', 'Сортування 120 од/год', 'Дисципліна 100%', 'Фізична витривалість'],
    status: 'available',
  },
  {
    id: 'w-04',
    name: 'Ділшод Ташбаєв (Dilshod Tashbaev)',
    age: 39,
    country: 'Узбекистан',
    flag: '🇺🇿',
    category: 'welding',
    specialty: 'Майстер зварювання промислових балок',
    experience: '11 років на виробництві важких металоконструкцій',
    photoUrl: '/workers/welder_master_certified.jpg',
    tradeTestScore: '9.9 / 10 (УЗД контроль шва)',
    testVideoUrl: '/work-samples/welder_trade_test_2.mp4',
    salaryExpectation: '$800 – $950 / міс',
    arrivalDays: '20–25 днів',
    skills: ['Атестація 6G', 'Товстостінний прокат', 'Бригадирський досвід', 'Вільне спілкування'],
    status: 'available',
  },
  {
    id: 'w-05',
    name: 'Гурпріт Сінгх (Gurpreet Singh)',
    age: 30,
    country: 'Індія',
    flag: '🇮🇳',
    category: 'cnc',
    specialty: 'Слюсар-складальник конвеєрних ліній',
    experience: '5 років у збиранні механічних вузлів',
    photoUrl: '/workers/mechanic_assembler.jpg',
    tradeTestScore: '9.4 / 10 (Складальний норматив)',
    testVideoUrl: '/work-samples/assembly_line_test.mp4',
    salaryExpectation: '$650 – $800 / міс',
    arrivalDays: '35–45 днів',
    skills: ['Пневматичний інструмент', 'Електросхеми', 'Слюсарна підгонка', 'Висока продуктивність'],
    status: 'available',
  },
  {
    id: 'w-06',
    name: 'Фаррух Мірзаєв (Farrukh Mirzayev)',
    age: 36,
    country: 'Узбекистан',
    flag: '🇺🇿',
    category: 'agro_construction',
    specialty: 'Механізатор / Тракторист агрокомплексу',
    experience: '9 років (трактори John Deere, МТЗ)',
    photoUrl: '/workers/agricultural_tractorist.jpg',
    tradeTestScore: '9.7 / 10 (Польовий регламент)',
    testVideoUrl: '/videos/transfer_logistics_group.mp4',
    salaryExpectation: '$650 – $800 / міс',
    arrivalDays: '20–25 днів',
    skills: ['Права категорії A, B, C, D', 'Технічне обслуговування', 'Польові роботи в дві зміни', 'Без зауважень'],
    status: 'available',
  },
  {
    id: 'w-07',
    name: 'Бікаш Тхапа (Bikash Thapa)',
    age: 31,
    country: 'Непал',
    flag: '🇳🇵',
    category: 'agro_construction',
    specialty: 'Будівельник-арматурник / Монолітник',
    experience: '6 років на висотному та промисловому будівництві',
    photoUrl: '/workers/construction_master.jpg',
    tradeTestScore: '9.5 / 10 (В\'язка арматури за часом)',
    testVideoUrl: '/videos/arrival_in_ukraine.mp4',
    salaryExpectation: '$600 – $750 / міс',
    arrivalDays: '40–50 днів',
    skills: ['В\'язка гачком та пістолетом', 'Монтаж опалубки', 'Бетонування', 'Сувора субординація'],
    status: 'available',
  },
  {
    id: 'w-08',
    name: 'Мохаммад Хоссейн (Mohammad Hossain)',
    age: 29,
    country: 'Бангладеш',
    flag: '🇧🇩',
    category: 'logistics',
    specialty: 'Оператор вилочного навантажувача / Річтрака',
    experience: '5 років у логістичних терміналах',
    photoUrl: '/workers/forklift_driver.jpg',
    tradeTestScore: '9.6 / 10 (Висотний ярус 8 метрів)',
    testVideoUrl: '/videos/transfer_moldova_ukraine.mp4',
    salaryExpectation: '$600 – $750 / міс',
    arrivalDays: '35–45 днів',
    skills: ['Електро- та дизельні навантажувачі', 'Робота у вузьких проходах', 'Безпека праці', 'Досвід 3PL'],
    status: 'available',
  },
];

export default function WorkerCatalogSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'welding' | 'cnc' | 'logistics' | 'agro_construction'>('all');
  const [selectedWorker, setSelectedWorker] = useState<WorkerCandidate | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null);

  const filteredCandidates = activeTab === 'all' 
    ? CANDIDATES 
    : CANDIDATES.filter(c => c.category === activeTab);

  const handleBook = (worker: WorkerCandidate) => {
    setSelectedWorker(worker);
    setIsBookingOpen(true);
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Каталог перевірених працівників (Trade Test Verified)
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Готові кандидати з підтвердженою кваліфікацією
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Кожен працівник пройшов практичний іспит (Trade Test) на камеру, медичну комісію та перевірку безпеки. 
              <span className="font-semibold text-slate-900"> Бронь квоти — всього €50</span>, повний супровід та безкоштовна заміна за 48 годин за договором.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Замовити підбір за ТЗ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Всі спеціальності ({CANDIDATES.length})
          </button>
          <button
            onClick={() => setActiveTab('welding')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'welding'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Зварювальники MIG/TIG (2)
          </button>
          <button
            onClick={() => setActiveTab('cnc')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'cnc'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Оператори ЧПК & Механіки (2)
          </button>
          <button
            onClick={() => setActiveTab('logistics')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'logistics'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Склад & Навантажувачі (2)
          </button>
          <button
            onClick={() => setActiveTab('agro_construction')}
            className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'agro_construction'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Агро & Будівництво (2)
          </button>
        </div>

        {/* Product Cards Grid ("Люди — це товар") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCandidates.map((worker) => (
            <div 
              key={worker.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Photo Banner */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={worker.photoUrl}
                  alt={worker.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Country Flag & Availability Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-bold shadow-sm backdrop-blur-sm">
                  <span className="text-base leading-none">{worker.flag}</span>
                  <span>{worker.country}</span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  Вільний до броні
                </div>

                {/* Name & Specialty Over Photo */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-bold text-base text-white drop-shadow-sm leading-snug">
                    {worker.name}
                  </h3>
                  <p className="text-xs text-amber-300 font-medium line-clamp-1">
                    {worker.specialty}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Trade Test & Experience */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 font-medium">Trade Test:</span>
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      {worker.tradeTestScore}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Досвід роботи:</span>
                    <span className="font-semibold text-slate-800">{worker.experience}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Очікувана ставка:</span>
                    <span className="font-bold text-slate-900 bg-amber-50 text-amber-900 px-2 py-0.5 rounded">
                      {worker.salaryExpectation}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Термін виходу:</span>
                    <span className="font-medium text-slate-700">{worker.arrivalDays}</span>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {worker.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Video Test Link if Available */}
                {worker.testVideoUrl && (
                  <button
                    onClick={() => setVideoModalUrl(worker.testVideoUrl!)}
                    className="w-full py-1.5 px-3 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Play className="w-3 h-3 text-blue-600 fill-blue-600" />
                    <span>Відеозапис Trade Test</span>
                  </button>
                )}

                {/* Action CTA Button */}
                <button
                  onClick={() => handleBook(worker)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs shadow transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-emerald-600"
                >
                  <span>Забронювати (€50)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Catalog Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black">
              Потрібна бригада від 10 до 100 працівників під ключ?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              Ми організуємо масовий відбір на акредитованих тестових полігонах в Ташкенті, Делі та Катманду. 
              Ви отримуєте індивідуальні відеозвіти та договори на пряме працевлаштування в штат вашого підприємства.
            </p>
          </div>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm whitespace-nowrap shadow-lg transition-transform active:scale-95"
          >
            Замовити масовий підбір
          </button>
        </div>

      </div>

      {/* Video Modal Preview */}
      {videoModalUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-slate-950 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white text-xs font-bold">
              <span>Відеозапис практичного тесту (Trade Test)</span>
              <button 
                onClick={() => setVideoModalUrl(null)}
                className="text-slate-400 hover:text-white text-base font-bold px-2"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video 
                src={videoModalUrl} 
                controls 
                autoPlay 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <QuotaBookingModal 
        isOpen={isBookingOpen} 
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedWorker(null);
        }} 
      />
    </section>
  );
}
