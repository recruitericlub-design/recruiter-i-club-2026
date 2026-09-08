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
  FileCheck2
} from 'lucide-react';

export const metadata = {
  title: 'Про Recruiter I Club — Засновники Роман Яновський та Станіслав Лухменко',
  description: 'Дізнайтеся більше про засновників Recruiter I Club: Роман Яновський (CEO) та Станіслав Лухменко (Керуючий партнер). Реальна B2B довіра, ліцензії та прямий найм іноземців в Україну.',
};

export default function AboutPage() {
  const leaders = [
    {
      name: 'Роман Яновський',
      role: 'Засновник & CEO Recruiter I Club',
      photo: '/team/roman_portrait_full.jpg',
      exp: '14 років у міжнародному бізнесі та управлінні транскордонними проєктами',
      bio: 'Особисто курує стратегічні контракти з українськими промисловими холдингами, агрохолдингами та заводами. Несе пряму фінансову та юридичну відповідальність за виконання зобов\'язань за кожним договором.',
      quote: '«Українське виробництво сьогодні не має часу на експерименти. Ми надаємо перевірених фахівців і даємо 30 днів безкоштовної заміни, тому що впевнені в людях, яких привозимо».'
    },
    {
      name: 'Станіслав Лухменко',
      role: 'Співзасновник & Керуючий партнер',
      photo: '/team/stanislav_lukhmenko.jpg',
      exp: '10 років в оперативній транскордонній логістиці та координації міграційних процесів',
      bio: 'Керує роботою закордонних відбіркових хабів в Азії (Ташкент, Делі, Дакка), формуванням списків на візи D-03 та логістичним коридором прибуття через Кишинів безпосередньо до підприємств замовників.',
      quote: '«Ми особисто контролюємо кожен рейс та перетин кордону. Замовник отримує повний відеозвіт і бачить робітників ще до того, як вони сіли в літак».'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4" />
          Публічність та Персональна Відповідальність
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          Засновники Recruiter I Club: <br />
          <span className="gradient-text">Роман Яновський &amp; Станіслав Лухменко</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          На відміну від анонімних сайтів-посередників, за кожним договором <strong className="text-white font-bold">Recruiter I Club</strong> стоять реальні засновники, відкриті до особистої зустрічі у Києві, аудиту та прямого зв&apos;язку у месенджерах.
        </p>
      </div>

      {/* Two Main Founders Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {leaders.map((leader, idx) => (
          <div 
            key={idx}
            className="glass-card rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-amber-500/40 transition-all group"
          >
            <div>
              {/* Photo */}
              <div className="relative h-96 sm:h-[440px] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={leader.photo}
                  alt={leader.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080d19] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded bg-amber-500 text-slate-950 text-xs font-black uppercase font-mono inline-block mb-1">
                    {leader.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{leader.name}</h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {leader.bio}
                </p>

                <div className="p-4 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 text-xs text-amber-200 italic leading-relaxed">
                  {leader.quote}
                </div>

                <div className="pt-2 text-[11px] text-slate-500 font-mono">
                  Досвід: <span className="text-white font-semibold">{leader.exp}</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="p-6 sm:p-8 pt-0 flex flex-wrap gap-3">
              <a
                href="https://t.me/RecruiterIClub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#229ED9]/15 hover:bg-[#229ED9] text-[#229ED9] hover:text-white border border-[#229ED9]/30 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Написати у Telegram</span>
              </a>

              <a
                href="https://wa.me/380670000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Написати у WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Real Fresh Visas Showcase */}
      <div className="space-y-6">
        <div className="space-y-1 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Офіційна візова статистика</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Реальні візи D-03, видані консульствами України
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Зразки офіційних робочих віз категорії D-03 наших робітників (серпень–вересень 2026 року) для легального в&apos;їзду та працевлаштування в штат українських ТОВ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: '/visas/photo_2026-09-07_15-22-38.jpg', title: 'Робоча віза D-03 (Держпраці)', date: 'Вересень 2026' },
            { src: '/visas/photo_2026-09-07_15-23-05.jpg', title: 'Консульська легалізація групи', date: 'Вересень 2026' },
            { src: '/visas/photo_2026-09-07_15-23-09.jpg', title: 'Перетин кордону за наказом', date: 'Вересень 2026' },
          ].map((visa, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/10 group">
              <div className="relative h-64 w-full bg-slate-950">
                <Image
                  src={visa.src}
                  alt={visa.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="font-bold text-white">{visa.title}</span>
                <span className="text-amber-400 font-mono text-[11px]">{visa.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Guarantee Box */}
      <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 border border-amber-500/30 space-y-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-amber-400" />
          <h3 className="text-xl sm:text-2xl font-black text-white">
            100% Юридична безпека роботодавця в Україні
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
          <div className="p-5 rounded-2xl bg-slate-900 border border-white/5 space-y-2">
            <strong className="text-white font-bold block text-sm">🇺🇦 Пряме оформлення в штат ТОВ</strong>
            <p className="text-slate-400 leading-relaxed">Працівник оформлюється офіційно на ваше підприємство. Жодних сірих аутстафінгових прокладок чи ризиків штрафів Держпраці (до 160 000 грн за нелегала).</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-white/5 space-y-2">
            <strong className="text-white font-bold block text-sm">🛡 30-денний гарантійний період</strong>
            <p className="text-slate-400 leading-relaxed">Якщо робітник не влаштував технолога або не пройшов випробувальний термін — Роман Яновський гарантує безкоштовну заміну кандидата за договором.</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-white/5 space-y-2">
            <strong className="text-white font-bold block text-sm">💼 Фіксація оплати за результат</strong>
            <p className="text-slate-400 leading-relaxed">Базова вартість від $500 за працівника, бронь квоти всього €50. Фінальна комісія сплачується лише після реальної роботи на вашому об&apos;єкті.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
