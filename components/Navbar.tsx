'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ChevronRight, Menu, X, UserCheck, Phone, CheckCircle2 } from 'lucide-react';
import QuotaBookingModal from './QuotaBookingModal';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Головна', href: '/' },
    { name: 'Каталог персоналу', href: '/#catalog' },
    { name: 'Гарантії', href: '/#guarantees' },
    { name: 'Країни-донори', href: '/countries' },
    { name: 'Калькулятор ROI', href: '/calculator' },
    { name: 'Команда & Виставки', href: '/about' },
    { name: 'Trade Tests (Відео)', href: '/trade-tests' },
  ];

  return (
    <>
      {/* Top Telemetry & National Standards Ribbon */}
      <div className="bg-slate-900 border-b border-slate-800 text-[11px] text-slate-300 py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Офіційний партнер роботодавців України
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-200">
              <span className="inline-block w-4 h-2.5 rounded-sm overflow-hidden bg-blue-600 relative border border-white/20">
                <span className="absolute bottom-0 left-0 right-0 h-1/2 bg-yellow-400"></span>
              </span>
              Ліцензія Мінсоцполітики №1428 · 100% захист від мобілізації (ст. 23 ЗУ)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+380678004040" 
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+38 (067) 800-40-40</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <Link 
              href="/portal"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5" />
              Кабінет замовника (CRM)
            </Link>
          </div>
        </div>
      </div>

      {/* Main Corporate Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Bespoke Logo with Ukrainian Trident */}
            <BrandLogo variant="dark" />

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-tight transition-all ${
                      isActive
                        ? 'text-blue-700 bg-blue-50 font-bold'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="flex flex-col text-right pr-2">
                <span className="text-[11px] text-slate-500 font-medium">Вартість найму</span>
                <span className="text-xs font-bold text-slate-900">від $500 / працівник</span>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Отримати анкети</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3.5 py-2 rounded-lg bg-emerald-600 text-white font-bold text-xs"
              >
                Анкети
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-50 rounded-lg text-xs">
                <span className="text-slate-500">Пряма консультація:</span>
                <a href="tel:+380678004040" className="font-bold text-slate-900">+38 (067) 800-40-40</a>
              </div>
              <Link
                href="/portal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50"
              >
                <UserCheck className="w-4 h-4 text-blue-600" />
                Особистий кабінет (CRM)
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md"
              >
                Отримати анкети кандидатів (бронь €50)
              </button>
            </div>
          </div>
        )}
      </header>

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
