import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Ukraine Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-amber-400">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L13.5 7V17H10.5V7L12 2Z" />
                  <path d="M7 6C7 9.5 8 13 9 15V17H6C5 15 4 11 4 7L7 6Z" />
                  <path d="M17 6C17 9.5 16 13 15 15V17H18C19 15 20 11 20 7L17 6Z" />
                  <path d="M9 19H15V22H9V19Z" />
                </svg>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Recruiter I Club
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Національний оператор легального підбору іноземного персоналу для промислових, будівельних, аграрних та логістичних підприємств України. Пряме офіційне працевлаштування в штат замовника та 100% захист від мобілізації (ст. 23 ЗУ).
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[11px] text-slate-200">
                🇺🇦 Ліцензія Мінсоцполітики №1428
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[11px] text-emerald-400 font-medium">
                ISO 9001:2026 Certified
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              Розділи
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="hover:text-white transition-colors">Головна</Link></li>
              <li><Link href="/#catalog" className="hover:text-white transition-colors">Каталог працівників</Link></li>
              <li><Link href="/countries" className="hover:text-white transition-colors">Країни-донори</Link></li>
              <li><Link href="/calculator" className="hover:text-white transition-colors">Калькулятор ROI</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Команда та Засновники</Link></li>
              <li><Link href="/trade-tests" className="hover:text-white transition-colors">Trade Tests (Відео)</Link></li>
            </ul>
          </div>

          {/* Col 3: Donor Hubs */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              Країни відбору
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/countries/uzbekistan" className="hover:text-white transition-colors">Узбекистан (Старт за 20 днів)</Link></li>
              <li><Link href="/countries/india" className="hover:text-white transition-colors">Індія (Зварювальники 6G, ЧПК)</Link></li>
              <li><Link href="/countries/nepal" className="hover:text-white transition-colors">Непал (Склади & Логістика)</Link></li>
              <li><Link href="/countries/bangladesh" className="hover:text-white transition-colors">Бангладеш (Виробництво)</Link></li>
              <li><Link href="/countries/kazakhstan" className="hover:text-white transition-colors">Казахстан (Машинобудування)</Link></li>
              <li><Link href="/countries/philippines" className="hover:text-white transition-colors">Філіппіни (Англомовні оператори)</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacts & CRM */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              Контакти
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Київ, вул. Велика Васильківська, 72</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+380678004040" className="hover:text-white transition-colors">+38 (067) 800-40-40</a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>b2b@recruitericlub.com.ua</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/portal"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 font-medium text-[11px] border border-slate-700 transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  Вхід у кабінет замовника (CRM)
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 Recruiter I Club. Всі права захищено. Діяльність здійснюється згідно ст. 23 ЗУ та Ліцензії Мінсоцполітики.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Логістичний коридор: Аеропорт Кишинів (MD) ➔ Трансфер в Україну</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
