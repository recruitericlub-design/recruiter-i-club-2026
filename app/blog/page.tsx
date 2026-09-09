import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Calendar, Clock, Tag, User, ShieldCheck } from 'lucide-react';
import { articlesData } from '@/lib/articlesData';

export const metadata = {
  title: 'База знань та юридичні гайди найму іноземців | Recruiter I Club 2026',
  description: 'Експертні аналітичні статті, розрахунки окупності, міграційне законодавство України, податки, стаття 23 ЗУ та логістичні регламенти.',
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-blue-600" />
          Експертиза &amp; Аналітика 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          База знань: Легальний найм, податки та захист від мобілізації
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Практичні інструкції від юристів та інженерів Recruiter I Club для директорів заводів, агрохолдингів та HRD щодо залучення міжнародних фахівців у штат підприємства.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articlesData.map((a) => (
          <article
            key={a.slug}
            className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 font-bold font-sans border border-blue-100">
                  {a.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {a.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                <Link href={`/blog/${a.slug}`}>
                  {a.title}
                </Link>
              </h2>

              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {a.summary}
              </p>

              {/* Author badge */}
              <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
                <User className="w-3.5 h-3.5 text-blue-600" />
                <span className="font-semibold text-slate-800">{a.author.name}</span>
                <span className="text-slate-400">· {a.date}</span>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Верифіковано юристом
              </span>
              <Link
                href={`/blog/${a.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Читати статтю</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
