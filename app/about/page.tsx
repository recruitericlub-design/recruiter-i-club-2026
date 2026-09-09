import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Video, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  FileCheck2,
  Phone
} from 'lucide-react';

export const metadata = {
  title: 'Про Recruiter I Club — Засновники Роман Яновський та Станіслав Лухменко',
  description: 'Дізнайтеся більше про засновників Recruiter I Club: Роман Яновський (CEO) та Станіслав Лухменко (Керуючий партнер). Публічна репутація, ліцензії та прямий найм іноземців в Україну.',
};

export default function AboutPage() {
  const leaders = [
    {
      name: 'Роман Яновський',
      role: 'Засновник & Керуючий партнер Recruiter I Club',
      photo: '/team/roman_portrait_close.jpg',
      exp: '14 років у міжнародному бізнесі та B2B контрактуванні',
      bio: 'Особисто курує стратегічні контракти з українськими промисловими холдингами, заводами та агропідприємствами. Забезпечує пряму юридичну та фінансову відповідальність за виконання зобов’язань за кожним договором.',
      quote: '«Українське виробництво сьогодні не має часу на експерименти чи порожні обіцянки. Ми надаємо перевірених фахівців і фіксуємо 30 днів безкоштовної заміни у договорі, тому що особисто відповідаємо за кожну людину».'
    },
    {
      name: 'Станіслав Лухменко',
      role: 'Співзасновник & Директор з логістики',
      photo: '/team/stanislav_lukhmenko.jpg',
      exp: '10 років в оперативній транскордонній логістиці та координації міграційних процесів',
      bio: 'Керує роботою закордонних відбіркових полігонів в Азії (Ташкент, Делі, Катманду), формуванням пакетів на візи D-03 та безпечним логістичним коридором трансферу через аеропорт Кишинів безпосередньо до гуртожитку замовника.',
      quote: '«Ми особисто контролюємо кожен рейс та перетин державного кордону. Замовник отримує повний відеозвіт і бачить робітників ще до того, як вони сіли в літак».'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-blue-600" />
          Публічність та Персональна Відповідальність
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Засновники Recruiter I Club: <br />
          <span className="text-blue-700">Роман Яновський &amp; Станіслав Лухменко</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          На відміну від анонімних агенцій-посередників, за кожним договором <strong className="text-slate-900 font-bold">Recruiter I Club</strong> стоять реальні засновники, відкриті до особистої зустрічі в офісі у Києві, аудиту та прямого зв’язку у месенджерах.
        </p>
      </div>

      {/* Two Main Founders Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {leaders.map((leader, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between hover:border-slate-400 transition-all group"
          >
            <div>
              {/* Photo */}
              <div className="relative h-96 sm:h-[420px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold uppercase tracking-wider inline-block mb-1 shadow">
                    {leader.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{leader.name}</h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic leading-relaxed">
                  {leader.quote}
                </div>

                <div className="pt-2 text-[11px] text-slate-500 font-mono">
                  Досвід: <span className="text-slate-900 font-semibold">{leader.exp}</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-2 flex flex-wrap gap-3">
              <a
                href={idx === 0 ? "https://t.me" : "https://wa.me"}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Зв’язатися напряму з {leader.name.split(' ')[0]}</span>
              </a>
              <a
                href="tel:+380678004040"
                className="py-2.5 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>+38 (067) 800-40-40</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Exhibitions & Real International Presence */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Особиста присутність на міжнародних самітах
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Прямі домовленості з міністерствами праці та акредитованими тестовими центрами в Азії.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-56 w-full bg-slate-100">
              <Image src="/images/booth_signing.jpg" alt="Підписання партнерства" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Підписання міжурядових квот</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Офіційні протоколи відбору кандидатів з урахуванням специфіки українського промислового сектора.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-56 w-full bg-slate-100">
              <Image src="/images/recruiter_club_summit.jpg" alt="Саміт з рекрутингу" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Інспекція центрів підготовки</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Перевірка зварювальних полігонів, токарних верстатів та інструментів вимірювання до вильоту фахівців.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-56 w-full bg-slate-100">
              <Image src="/images/exhibitions_team.jpg" alt="Команда на виставці" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-sm text-slate-900 mb-1">B2B нетворкінг з роботодавцями</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Регулярні презентації для директорів заводів, агрохолдингів та логістичних операторів України.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
