'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ChevronRight, Menu, X, UserCheck, Sparkles } from 'lucide-react';
import QuotaBookingModal from './QuotaBookingModal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Головна', href: '/' },
    { name: 'Країни-донори', href: '/countries' },
    { name: 'Калькулятор ROI', href: '/calculator' },
    { name: 'Виставки & Команда', href: '/about' },
    { name: 'Trade Tests (Відео)', href: '/trade-tests' },
    { name: 'База знань', href: '/blog' },
  ];

  return (
    <>
      {/* Top Patriotic Telemetry Ribbon */}
      <div className="bg-slate-950/90 border-b border-white/[0.06] text-[11px] text-slate-400 py-1.5 px-4 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Офіційний партнер підприємств України
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-300">
              🇺🇦 Ліцензія Мінсоцполітики · ISO 9001
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-slate-400">
              Транзитний коридор: <span className="text-slate-200 font-mono">Кишинів (MD) ➔ Одеса / Київ</span>
            </span>
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

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#070a12]/85 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Ukrainian Trident */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-[1px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
                <div className="w-full h-full rounded-[11px] bg-slate-950 flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L13.5 7V17H10.5V7L12 2Z" />
                    <path d="M7 6C7 9.5 8 13 9 15V17H6C5 15 4 11 4 7L7 6Z" />
                    <path d="M17 6C17 9.5 16 13 15 15V17H18C19 15 20 11 20 7L17 6Z" />
                    <path d="M9 19H15V22H9V19Z" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    Recruiter I Club
                  </span>
                  <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    2026
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                  Recruiter I Club · Україна
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">
                  Від $500 / робітник
                </span>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all active:scale-95 flex items-center gap-2"
              >
                <span>Бронювати квоту (€50)</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
              >
                Бронь €50
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-[#070a12]/95 border-b border-white/[0.1] px-4 pt-2 pb-6 space-y-2 backdrop-blur-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-200 hover:bg-white/[0.06] hover:text-amber-400"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
              <Link
                href="/portal"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 text-slate-200 font-semibold text-sm"
              >
                <UserCheck className="w-4 h-4 text-amber-400" />
                Особистий кабінет (CRM)
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
              >
                Забронювати квоту (всього €50)
              </button>
            </div>
          </div>
        )}
      </header>

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
