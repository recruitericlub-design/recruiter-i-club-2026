import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, PhoneCall, Users } from 'lucide-react';

export const metadata = {
  title: 'Сторінку не знайдено (404)',
  description: 'Запитана сторінка не знайдена. Перейдіть до каталогу кандидатів або зв’яжіться з координатором.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-xl w-full text-center bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 font-mono font-black text-3xl mb-6">
          404
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          Сторінку не знайдено
        </h1>
        
        <p className="text-sm sm:text-base text-slate-600 mb-8 leading-relaxed">
          Можливо, матеріал було переміщено або посилання застаріло. Виберіть потрібний напрямок або зв'яжіться з нашими координаторами:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left">
          <Link
            href="/#catalog"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-amber-500/50 hover:bg-amber-50/30 transition-all text-slate-800 group"
          >
            <Users className="w-5 h-5 text-amber-600 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-xs font-bold text-slate-900">Каталог робітників</div>
              <div className="text-[11px] text-slate-500">Понад 100 верифікованих анкет</div>
            </div>
          </Link>

          <Link
            href="/blog"
            className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200 hover:border-amber-500/50 hover:bg-amber-50/30 transition-all text-slate-800 group"
          >
            <Search className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-xs font-bold text-slate-900">База знань & Блог</div>
              <div className="text-[11px] text-slate-500">Юридичні гайди та закони</div>
            </div>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            На головну
          </Link>
          
          <a
            href="tel:+380739475324"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors shadow-sm min-h-[44px]"
          >
            <PhoneCall className="w-4 h-4" />
            <span>(073) 947-53-24</span>
          </a>
        </div>
      </div>
    </div>
  );
}
