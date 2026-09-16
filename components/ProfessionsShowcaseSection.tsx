import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { PROFESSIONS_DATA } from '@/lib/professionsData';

export default function ProfessionsShowcaseSection() {
  const featuredProfessions = Object.values(PROFESSIONS_DATA);

  return (
    <section id="professions" className="scroll-mt-28 py-20 bg-warm-paper border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-3.5 py-1 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              Кваліфікований лінійний персонал
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Ключові робітничі напрямки <span className="text-emerald-800 bg-emerald-100/80 border border-emerald-300 px-3 py-0.5 rounded-xl">«під ключ»</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Атестовані зварювальники, арматурники, водії складської техніки та оператори ЧПК з Узбекистану та Індії. Практичний Trade-Test на закордонних полігонах та 100% захист від мобілізації (ст. 23 ЗУ).
            </p>
          </div>

          <div>
            <Link 
              href="/professions" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs sm:text-sm transition shadow-md group whitespace-nowrap"
            >
              <span>Всі спеціальності</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 6 Professions Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProfessions.map((prof) => (
            <div 
              key={prof.slug} 
              className="tactile-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500 transition-all group bg-white shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{prof.icon}</span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-slate-100 text-slate-700 border border-slate-200">
                    {prof.categoryLabel}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {prof.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                  {prof.description}
                </p>

                {/* Specs Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs mb-5">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Країни відбору:</span>
                    <strong className="text-slate-900">{prof.countries.join(', ')}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Орієнтовний оклад:</span>
                    <strong className="text-emerald-700 font-bold">{prof.salaryRange}</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Термін доставки:</span>
                    <strong className="text-slate-900">{prof.timelineDays}</strong>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {prof.skills.slice(0, 3).map((sk, idx) => (
                    <span key={idx} className="text-[10px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-2 py-0.5 rounded-md">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <Link 
                href={`/professions/${prof.slug}`}
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 group-hover:shadow-md"
              >
                <span>Вимоги та Trade-Test</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Assurance Bar */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900">100% захист від раптового зриву змін:</strong> Працівники не підлягають обліку в ТЦК та мобілізації (ст. 23 ЗУ). Комісія агентства сплачується лише після виходу робітників на зміну.
            </div>
          </div>
          <Link 
            href="/professions" 
            className="shrink-0 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1"
          >
            <span>Перейти до повного каталогу</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
