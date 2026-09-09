'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, User, ShieldCheck, Search, Building2, Globe2, Sparkles, Filter } from 'lucide-react';
import type { Article } from '@/lib/articlesData';

interface Props {
  articles: Article[];
}

export default function BlogCatalogClient({ articles }: Props) {
  const [activeTab, setActiveTab] = useState<'ALL' | 'B2B' | 'B2C'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [articles]);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      // Tab filter
      if (activeTab === 'B2B' && a.audience === 'B2C') return false;
      if (activeTab === 'B2C' && a.audience === 'B2B') return false;

      // Category filter
      if (selectedCategory !== 'ALL' && a.category !== selectedCategory) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = a.title.toLowerCase().includes(q);
        const inSummary = a.summary.toLowerCase().includes(q);
        const inCat = a.category.toLowerCase().includes(q);
        const inKeywords = (a.targetKeywordsUa || '').toLowerCase().includes(q) || (a.targetKeywordsRu || '').toLowerCase().includes(q);
        return inTitle || inSummary || inCat || inKeywords;
      }

      return true;
    });
  }, [articles, activeTab, selectedCategory, searchQuery]);

  const b2bCount = useMemo(() => articles.filter((a) => a.audience !== 'B2C').length, [articles]);
  const b2cCount = useMemo(() => articles.filter((a) => a.audience === 'B2C').length, [articles]);

  return (
    <div className="space-y-10">
      {/* Controls Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Main Segment Tabs */}
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold">
            <button
              onClick={() => { setActiveTab('ALL'); setSelectedCategory('ALL'); }}
              className={`px-4 py-2.5 rounded-xl transition-all ${
                activeTab === 'ALL'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80 font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Всі статті ({articles.length})
            </button>
            <button
              onClick={() => { setActiveTab('B2B'); setSelectedCategory('ALL'); }}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'B2B'
                  ? 'bg-blue-600 text-white shadow-sm font-black'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Для підприємств B2B ({b2bCount})
            </button>
            <button
              onClick={() => { setActiveTab('B2C'); setSelectedCategory('ALL'); }}
              className={`px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 ${
                activeTab === 'B2C'
                  ? 'bg-emerald-600 text-white shadow-sm font-black'
                  : 'text-slate-600 hover:text-emerald-600'
              }`}
            >
              <Globe2 className="w-4 h-4" />
              Для кандидатів B2C ({b2cCount})
            </button>
          </div>

          {/* Live Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Пошук за темою, статтею або ключовим словом..."
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[10px] uppercase font-bold text-slate-400 hover:text-slate-600 absolute right-3 top-1/2 -translate-y-1/2"
              >
                Очистити
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 text-xs">
          <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" /> Фільтр:
          </span>
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1.5 rounded-full whitespace-nowrap text-xs transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-slate-900 text-white font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Всі категорії
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap text-xs transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
        <span>Знайдено матеріалів: <strong className="text-slate-900">{filteredArticles.length}</strong></span>
        {searchQuery && <span>Запитом: &ldquo;{searchQuery}&rdquo;</span>}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
          <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
          <p className="text-sm font-bold text-slate-700">За вашим запитом нічого не знайдено</p>
          <p className="text-xs text-slate-500">Спробуйте змінити фільтри або пошуковий запит.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); setActiveTab('ALL'); }}
            className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-xs font-bold hover:bg-blue-100 transition-colors"
          >
            Скинути фільтри
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((a) => {
            const isB2B = a.audience !== 'B2C';
            return (
              <article
                key={a.slug}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    isB2B ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                  }`}
                />

                <div className="space-y-4 pt-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span
                      className={`px-2.5 py-1 rounded-md font-bold font-sans border ${
                        isB2B
                          ? 'bg-blue-50 text-blue-800 border-blue-100'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-100'
                      }`}
                    >
                      {a.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {a.readTime}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    <Link href={`/blog/${a.slug}`}>
                      {a.title}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {a.summary}
                  </p>

                  {/* Author & Target Info */}
                  <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500 border-t border-slate-100">
                    <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">{a.author.name}</span>
                    <span className="text-slate-400 shrink-0">· {a.date}</span>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      isB2B ? 'bg-slate-100 text-slate-600' : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {isB2B ? 'B2B Роботодавцям' : 'B2C Кандидатам'}
                  </span>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <span>Читати</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
