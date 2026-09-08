import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05080e] border-t border-white/[0.08] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Ukraine Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.5 7V17H10.5V7L12 2Z" />
                  <path d="M7 6C7 9.5 8 13 9 15V17H6C5 15 4 11 4 7L7 6Z" />
                  <path d="M17 6C17 9.5 16 13 15 15V17H18C19 15 20 11 20 7L17 6Z" />
                  <path d="M9 19H15V22H9V19Z" />
                </svg>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Recruiter I Club / Recruiter I Club
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Національний оператор легального залучення міжнародної робочої сили для промислових, аграрних та логістичних підприємств України. Повний юридичний супровід, пряме працевлаштування у штат замовника та гарантована безкоштовна заміна.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-[11px] text-slate-300">
                🇺🇦 Ліцензія Мінсоцполітики №1428
              </span>
              <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-[11px] text-slate-300">
                ISO 9001:2026 Certified
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              Розділи порталу
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="hover:text-amber-400 transition-colors">Головна сторінка</Link></li>
              <li><Link href="/countries" className="hover:text-amber-400 transition-colors">Країни-донори (7 хабів)</Link></li>
              <li><Link href="/calculator" className="hover:text-amber-400 transition-colors">Калькулятор втрат та ROI</Link></li>
              <li><Link href="/about" className="hover:text-amber-400 transition-colors">Команда та Виставки</Link></li>
              <li><Link href="/trade-tests" className="hover:text-amber-400 transition-colors">Відео Trade Tests</Link></li>
              <li><Link href="/blog" className="hover:text-amber-400 transition-colors">База знань & SEO гайди</Link></li>
            </ul>
          </div>

          {/* Col 3: Donor Hubs */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              Країни відбору
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/countries/india" className="hover:text-amber-400 transition-colors">Індія (Технічні фахівці)</Link></li>
              <li><Link href="/countries/uzbekistan" className="hover:text-amber-400 transition-colors">Узбекистан (Швидкий старт)</Link></li>
              <li><Link href="/countries/kazakhstan" className="hover:text-amber-400 transition-colors">Казахстан (Виробництво)</Link></li>
              <li><Link href="/countries/bangladesh" className="hover:text-amber-400 transition-colors">Бангладеш (Текстиль / Агро)</Link></li>
              <li><Link href="/countries/nepal" className="hover:text-amber-400 transition-colors">Непал (Склади / Будівництво)</Link></li>
              <li><Link href="/countries/philippines" className="hover:text-amber-400 transition-colors">Філіппіни (Англомовні)</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacts & CRM */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              Контакти & Доступ
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Київ, вул. Велика Васильківська, 72</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+380 (44) 334-58-26</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>b2b@recruitericlub.com.ua</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/portal"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-amber-500/20 text-amber-400 font-medium text-[11px] border border-white/10 transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  Вхід у кабінет клієнта (CRM)
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 Recruiter I Club · Recruiter I Club. Всі права захищено. Працюємо згідно законодавства України.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Маршрут: Повітряний транзит Кишинів (KIV) → Наземний спецтранспорт в Україну</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
