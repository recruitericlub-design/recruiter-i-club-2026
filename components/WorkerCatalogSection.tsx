'use client';

import React, { useState, useMemo } from 'react';
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
  ExternalLink,
  Search,
  X as CloseIcon,
  Download,
  Clock,
  UserCheck
} from 'lucide-react';
import QuotaBookingModal from './QuotaBookingModal';

export interface WorkerCandidate {
  id: string;
  name: string;
  age: number;
  country: string;
  countryCode: 'uz' | 'in' | 'np' | 'bd';
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
  passportVerified: boolean;
  medicalClearance: boolean;
  securityCheck: boolean;
  bio: string;
}

const CANDIDATES: WorkerCandidate[] = [
  {
    id: 'w-01',
    name: 'Раджеш Кумар (Rajesh Kumar)',
    age: 32,
    country: 'Індія',
    countryCode: 'in',
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
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Досвідчений майстер дугового та напівавтоматичного зварювання. Працював на промислових об’єктах L&T Heavy Engineering. Пройшов атестацію лабораторією неруйнівного контролю.'
  },
  {
    id: 'w-02',
    name: 'Хасан Алімов (Hasan Alimov)',
    age: 35,
    country: 'Узбекистан',
    countryCode: 'uz',
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
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Спеціаліст з серійного точіння деталей складної геометрії. Вільне володіння вимірювальним інструментом Mitutoyo, читання складних креслень.'
  },
  {
    id: 'w-03',
    name: 'Суніл Шрестха (Sunil Shrestha)',
    age: 28,
    country: 'Непал',
    countryCode: 'np',
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
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Швидка та безпомилкова комплектація інтернет-замовлень і палетного вантажу. Відмінна витривалість під час 12-годинних змін.'
  },
  {
    id: 'w-04',
    name: 'Ділшод Ташбаєв (Dilshod Tashbaev)',
    age: 39,
    country: 'Узбекистан',
    countryCode: 'uz',
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
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Бригадир зварювальної ділянки. Досконале знання технології зварювання мостових та ангарних балок під постійним рентгенівським контролем.'
  },
  {
    id: 'w-05',
    name: 'Гурпріт Сінгх (Gurpreet Singh)',
    age: 30,
    country: 'Індія',
    countryCode: 'in',
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
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Працював на автоскладальному заводі Maruti Suzuki. Швидкий монтаж редукторів, приводних механізмів та електрогідравлічних вузлів.'
  },
  {
    id: 'w-06',
    name: 'Фаррух Мірзаєв (Farrukh Mirzayev)',
    age: 36,
    country: 'Узбекистан',
    countryCode: 'uz',
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
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Досвід польових та посівних робіт на імпортній широкозахватній техніці. Самостійний ремонт гідравлічних систем та заміна вузлів.'
  },
  {
    id: 'w-07',
    name: 'Бікаш Тхапа (Bikash Thapa)',
    age: 31,
    country: 'Непал',
    countryCode: 'np',
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
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Участь у зведенні промислових цехів і логістичних терміналів. Читання арматурних карт, дотримання захисного шару бетону.'
  },
  {
    id: 'w-08',
    name: 'Мохаммад Хоссейн (Mohammad Hossain)',
    age: 29,
    country: 'Бангладеш',
    countryCode: 'bd',
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
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Акуратне переміщення крихких та великогабаритних вантажів на стелажі до 8.5 метрів. Сертифікат міжнародного водія навантажувача.'
  },
  {
    id: 'w-09',
    name: 'Бахтійор Назаров (Bakhtiyor Nazarov)',
    age: 34,
    country: 'Узбекистан',
    countryCode: 'uz',
    flag: '🇺🇿',
    category: 'logistics',
    specialty: 'Оператор автоматизованої конвеєрної лінії',
    experience: '6 років на харчовому та фасувальному виробництві',
    photoUrl: '/workers/conveyor_operator.jpg',
    tradeTestScore: '9.5 / 10 (Безперервний цикл)',
    testVideoUrl: '/work-samples/assembly_line_test.mp4',
    salaryExpectation: '$580 – $720 / міс',
    arrivalDays: '20–25 днів',
    skills: ['Фасування та маркування', 'Контроль браку', 'Санітарні норми НАССР', 'Розмовна мова'],
    status: 'available',
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Досвід обслуговування фасувально-пакувальних автоматів. Суворе дотримання санітарних регламентів харчового виробництва.'
  },
  {
    id: 'w-10',
    name: 'Аніл Шарма (Anil Sharma)',
    age: 33,
    country: 'Індія',
    countryCode: 'in',
    flag: '🇮🇳',
    category: 'cnc',
    specialty: 'Електромонтажник промислового обладнання',
    experience: '7 років (шафи автоматики, ПЛК, кабельні траси)',
    photoUrl: '/workers/electrician_technician.jpg',
    tradeTestScore: '9.7 / 10 (Монтаж шафи керування)',
    testVideoUrl: '/work-samples/welder_trade_test_1.mp4',
    salaryExpectation: '$700 – $850 / міс',
    arrivalDays: '35–45 днів',
    skills: ['Збирання шаф керування', 'Читання принципових схем', 'Група електробезпеки IV', 'Англійська мова'],
    status: 'available',
    passportVerified: true,
    medicalClearance: true,
    securityCheck: true,
    bio: 'Монтаж розподільчих щитів, датчиків автоматизації та кабельних ліній на металургійних комбінатах. Висока акуратність маркування.'
  },
];

export default function WorkerCatalogSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'welding' | 'cnc' | 'logistics' | 'agro_construction'>('all');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dossierWorker, setDossierWorker] = useState<WorkerCandidate | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null);

  // Filter candidates dynamically
  const filteredCandidates = useMemo(() => {
    return CANDIDATES.filter((c) => {
      const matchCategory = activeCategory === 'all' || c.category === activeCategory;
      const matchCountry = selectedCountry === 'all' || c.countryCode === selectedCountry;
      const matchSearch = searchQuery.trim() === '' || 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchCountry && matchSearch;
    });
  }, [activeCategory, selectedCountry, searchQuery]);

  const handleBook = (worker: WorkerCandidate) => {
    setDossierWorker(null);
    setIsBookingOpen(true);
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
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
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>Замовити підбір під ТЗ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 mb-8 space-y-4">
          
          {/* Search Input & Country Select */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-8 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Пошук за спеціальністю, ім'ям або навичкою (напр. зварювальник, ЧПК, пакувальник)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="sm:col-span-4 flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-300">
              <span className="text-[11px] font-bold text-slate-500 pl-2">Країна:</span>
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="flex-1 bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer py-1.5 pr-2"
              >
                <option value="all">Всі країни ({CANDIDATES.length})</option>
                <option value="uz">🇺🇿 Узбекистан</option>
                <option value="in">🇮🇳 Індія</option>
                <option value="np">🇳🇵 Непал</option>
                <option value="bd">🇧🇩 Бангладеш</option>
              </select>
            </div>
          </div>

          {/* Specialty Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Всі спеціальності ({CANDIDATES.length})
            </button>
            <button
              onClick={() => setActiveCategory('welding')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'welding'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Зварювальники MIG/TIG (2)
            </button>
            <button
              onClick={() => setActiveCategory('cnc')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'cnc'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Оператори ЧПК & Електрики (3)
            </button>
            <button
              onClick={() => setActiveCategory('logistics')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'logistics'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Склад & Конвеєр (3)
            </button>
            <button
              onClick={() => setActiveCategory('agro_construction')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeCategory === 'agro_construction'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              Агро & Будівництво (2)
            </button>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6">
          <span>Знайдено анкет: <strong className="text-slate-900">{filteredCandidates.length}</strong></span>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Квота вересня відкрита (бронь €50)
          </span>
        </div>

        {/* Product Cards Grid ("Люди — це товар") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCandidates.map((worker) => (
            <div 
              key={worker.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setDossierWorker(worker)}
            >
              {/* Card Photo Banner */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={worker.photoUrl}
                  alt={worker.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

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
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-slate-500 font-medium">Trade Test:</span>
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      {worker.tradeTestScore}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Досвід:</span>
                    <span className="font-semibold text-slate-800">{worker.experience}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Очікуваний оклад:</span>
                    <span className="font-bold text-slate-900 bg-amber-50 text-amber-900 px-2 py-0.5 rounded">
                      {worker.salaryExpectation}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Термін виходу:</span>
                    <span className="font-medium text-slate-700 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {worker.arrivalDays}
                    </span>
                  </div>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {worker.skills.slice(0, 3).map((skill, i) => (
                    <span 
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Card CTA Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDossierWorker(worker);
                    }}
                    className="w-full py-2 px-2.5 rounded-xl border border-slate-200 hover:border-slate-400 text-slate-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Досьє</span>
                    <FileText className="w-3 h-3 text-slate-500" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBook(worker);
                    }}
                    className="w-full py-2 px-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs shadow transition-all duration-200 flex items-center justify-center gap-1 group-hover:bg-emerald-600"
                  >
                    <span>Бронь €50</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Mass Quota Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black">
              Потрібна партія від 10 до 100 робітників під ключ?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
              Організовуємо виїзний або відео-відбір на акредитованих полігонах в Ташкенті, Делі та Катманду. 
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

      {/* FULL CANDIDATE DOSSIER MODAL */}
      {dossierWorker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md">
                  <Image src={dossierWorker.photoUrl} alt={dossierWorker.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl leading-none">{dossierWorker.flag}</span>
                    <h3 className="text-lg font-black text-white">{dossierWorker.name}</h3>
                  </div>
                  <p className="text-xs text-amber-400 font-medium mt-0.5">{dossierWorker.specialty}</p>
                  <span className="text-[11px] text-slate-400 font-mono">ID: {dossierWorker.id.toUpperCase()} · Вік: {dossierWorker.age} роки</span>
                </div>
              </div>

              <button 
                onClick={() => setDossierWorker(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-xs">
              
              {/* Verification Badges */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">Закордонний паспорт</span>
                    <span className="text-[10px] text-slate-500">Верифіковано консульством</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">Медогляд (0 обмежень)</span>
                    <span className="text-[10px] text-slate-500">Флюорографія, аналізи</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block text-[11px]">Безпекова перевірка</span>
                    <span className="text-[10px] text-slate-500">Довідка про несудимість</span>
                  </div>
                </div>
              </div>

              {/* Bio & Experience */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                  Професійне резюме
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs">
                  {dossierWorker.bio}
                </p>
              </div>

              {/* Trade Test Details */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-emerald-600" />
                    Результати Trade Test: <span className="text-emerald-700">{dossierWorker.tradeTestScore}</span>
                  </h4>
                  {dossierWorker.testVideoUrl && (
                    <button
                      onClick={() => setVideoModalUrl(dossierWorker.testVideoUrl!)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-700"
                    >
                      <Play className="w-3 h-3 fill-blue-600" />
                      <span>Дивитися відео тесту</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-200">
                  <div className="p-2 rounded bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Точність операцій</span>
                    <span className="font-bold text-slate-900">9.8 / 10</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Швидкість роботи</span>
                    <span className="font-bold text-slate-900">9.6 / 10</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Техніка безпеки</span>
                    <span className="font-bold text-slate-900">10 / 10</span>
                  </div>
                  <div className="p-2 rounded bg-white border border-slate-100">
                    <span className="text-[10px] text-slate-400 block">Контроль геометрії</span>
                    <span className="font-bold text-slate-900">9.7 / 10</span>
                  </div>
                </div>
              </div>

              {/* Conditions */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <span className="text-slate-500 block mb-1">Очікуваний оклад:</span>
                  <span className="text-base font-black text-slate-900">{dossierWorker.salaryExpectation}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Виплачується роботодавцем помісячно</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                  <span className="text-slate-500 block mb-1">Термін прибуття на зміну:</span>
                  <span className="text-base font-black text-blue-700">{dossierWorker.arrivalDays}</span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Включаючи дозвіл Держпраці та візу</span>
                </div>
              </div>

            </div>

            {/* Footer CTAs */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  alert(`Запит на завантаження повного PDF-резюме кандидата ${dossierWorker.name} передано менеджеру.`);
                }}
                className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-white text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Завантажити резюме (PDF)</span>
              </button>

              <button
                onClick={() => handleBook(dossierWorker)}
                className="py-2.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md flex items-center gap-2 transition-all active:scale-95"
              >
                <span>Забронювати працівника (€50)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Video Modal Preview */}
      {videoModalUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
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
        }} 
      />
    </section>
  );
}
