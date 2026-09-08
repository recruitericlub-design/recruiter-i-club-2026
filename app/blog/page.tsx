import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { articlesData } from '@/lib/articlesData';

export const metadata = {
  title: 'База знань та юридичні гайди найму іноземців | Recruiter I Club 2026',
  description: 'Експертні аналітичні статті, розрахунки окупності, міграційне законодавство України, податки та логістичні регламенти.',
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          Експертиза & Аналітика 2026
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          База знань: Легальний найм, податки та логістика
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Практичні інструкції для керівників заводів, агрохолдингів та HRD щодо залучення міжнародних фахівців у штат підприємства.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articlesData.map((a) => (
          <article
            key={a.slug}
            className="glass-card glass-card-hover rounded-3xl p-7 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 font-bold font-sans">
                  {a.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {a.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                {a.title}
              </h2>

              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                {a.summary}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">
                {a.date}
              </span>
              <Link
                href={`/blog/${a.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Читати гайд</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
