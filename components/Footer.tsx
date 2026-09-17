'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Phone, Mail, MapPin, ExternalLink, Lock, CheckCircle2 } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const pathname = usePathname();
  const isRu = pathname?.startsWith('/ru');

  if (pathname?.startsWith('/portal')) {
    return null;
  }
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Ukraine Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" />

            <p className="text-slate-400 leading-relaxed max-w-sm">
              {isRu
                ? 'Национальный оператор легального подбора иностранного персонала для промышленных, строительных, аграрных и логистических предприятий Украины. Прямое официальное трудоустройство в штат заказчика и 100% защита от мобилизации (ст. 23 ЗУ).'
                : 'Національний оператор легального підбору іноземного персоналу для промислових, будівельних, аграрних та логістичних підприємств України. Пряме офіційне працевлаштування в штат замовника та 100% захист від мобілізації (ст. 23 ЗУ).'
              }
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[11px] text-slate-200">
                {isRu ? '🇺🇦 Лицензия Минсоцполитики №1428' : '🇺🇦 Ліцензія Мінсоцполітики №1428'}
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[11px] text-emerald-400 font-medium">
                ISO 9001:2026 Certified
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              {isRu ? 'Разделы' : 'Розділи'}
            </h4>
            <ul className="space-y-2.5">
              <li><Link href={isRu ? '/ru' : '/'} className="hover:text-white transition-colors">{isRu ? 'Главная' : 'Головна'}</Link></li>
              <li><Link href={isRu ? '/ru#catalog' : '/#catalog'} className="hover:text-white transition-colors">{isRu ? 'Каталог работников' : 'Каталог працівників'}</Link></li>
              <li><Link href="/professions" className="hover:text-white transition-colors">{isRu ? 'Профессии' : 'Професії'}</Link></li>
              <li><Link href="/countries" className="hover:text-white transition-colors">{isRu ? 'Страны-доноры' : 'Країни-донори'}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{isRu ? 'Команда и Основатели' : 'Команда та Засновники'}</Link></li>
              <li><Link href="/trade-tests" className="hover:text-white transition-colors">Trade Tests ({isRu ? 'Видео' : 'Відео'})</Link></li>
            </ul>
          </div>

          {/* Col 3: Donor Hubs */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              {isRu ? 'Страны отбора' : 'Країни відбору'}
            </h4>
            <ul className="space-y-2.5">
              <li><Link href="/countries/uzbekistan" className="hover:text-white transition-colors">{isRu ? 'Узбекистан (Старт за 20 дней)' : 'Узбекистан (Старт за 20 днів)'}</Link></li>
              <li><Link href="/countries/india" className="hover:text-white transition-colors">{isRu ? 'Индия (Сварщики 6G, ЧПУ)' : 'Індія (Зварювальники 6G, ЧПК)'}</Link></li>
              <li><Link href="/countries/nepal" className="hover:text-white transition-colors">{isRu ? 'Непал (Склады & Логистика)' : 'Непал (Склади & Логістика)'}</Link></li>
              <li><Link href="/countries/bangladesh" className="hover:text-white transition-colors">{isRu ? 'Бангладеш (Производство)' : 'Бангладеш (Виробництво)'}</Link></li>
              <li><Link href="/countries/philippines" className="hover:text-white transition-colors">{isRu ? 'Филиппины (Англоязычные операторы)' : 'Філіппіни (Англомовні оператори)'}</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacts & CRM */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              {isRu ? 'Контакты' : 'Контакти'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{isRu ? 'Киев, ул. Большая Васильковская, 72' : 'Київ, вул. Велика Васильківська, 72'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{isRu ? 'Прием заявок: онлайн 24/7' : 'Прийом заявок: онлайн 24/7'}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>b2b@recruiter-i.club</span>
              </div>
            </div>
          </div>

          {/* Col 5: Security / PIN Access */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-4 uppercase tracking-wider text-[11px]">
              {isRu ? 'Личный кабинет' : 'Особистий кабінет'}
            </h4>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-[11px]">
                <Lock className="w-3.5 h-3.5" />
                <span>{isRu ? 'Доступ работодателя' : 'Доступ роботодавця'}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                {isRu ? 'Вход по индивидуальному PIN-коду заказчика.' : 'Вхід за індивідуальним PIN-кодом замовника.'}
              </p>
              <Link 
                href="/portal" 
                className="block w-full text-center py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] transition-colors"
              >
                {isRu ? 'Войти в CRM' : 'Увійти в CRM'}
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2026 Recruiter I Club (ТОВ «Рекрутер Ай Клаб»). {isRu ? 'Все права защищены. Официальное трудоустройство иностранцев в Украине.' : 'Всі права захищені. Офіційне працевлаштування іноземців в Україні.'}</p>
          <div className="flex gap-6">
            <span>{isRu ? 'Защита от мобилизации (ст. 23 ЗУ)' : 'Захист від мобілізації (ст. 23 ЗУ)'}</span>
            <span>{isRu ? 'Договорная гарантия замены' : 'Договірна гарантія заміни'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
