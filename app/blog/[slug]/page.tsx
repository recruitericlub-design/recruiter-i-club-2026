import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, ShieldCheck, Zap, User, ArrowRight } from 'lucide-react';
import { articlesData } from '@/lib/articlesData';

export function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = articlesData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Schema.org FAQPage if present */}
      {article.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": article.faq.map((item) => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a,
                },
              })),
            }),
          }}
        />
      )}

      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Назад до бази знань</span>
      </Link>

      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
          <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-800 font-bold font-sans border border-blue-100">
            {article.category}
          </span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} читання</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {article.summary}
        </p>

        {/* Author Details */}
        <div className="flex items-center gap-3 pt-2 text-xs text-slate-600">
          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
            {article.author.name[0]}
          </div>
          <div>
            <span className="font-bold text-slate-900 block">{article.author.name}</span>
            <span className="text-[11px] text-slate-500">{article.author.role}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
        <div className="whitespace-pre-line">
          {article.content}
        </div>
      </div>

      {/* FAQ Section */}
      {article.faq && article.faq.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 mt-12">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Часті запитання керівників підприємств
          </h3>
          <div className="space-y-4">
            {article.faq.map((f, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-sm">
                <strong className="text-sm font-bold text-slate-900 block">
                  {f.q}
                </strong>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-700 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1">
          <h4 className="text-base font-bold text-white">
            Потрібна індивідуальна юридична консультація?
          </h4>
          <p className="text-xs text-blue-100">
            Отримайте безкоштовний аудит вашої кадрової потреби та забронюйте квоту від €50 за працівника.
          </p>
        </div>
        <Link
          href="/#calculator"
          className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs shrink-0 transition-all shadow-lg active:scale-95 flex items-center gap-2"
        >
          <span>Зафіксувати квоту (€50)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
