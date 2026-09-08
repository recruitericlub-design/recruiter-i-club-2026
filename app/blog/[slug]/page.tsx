import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Share2, ShieldCheck, Zap } from 'lucide-react';
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
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Назад до бази знань</span>
      </Link>

      {/* Header */}
      <div className="space-y-4 border-b border-white/[0.08] pb-8">
        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="px-3 py-1 rounded bg-amber-500/10 text-amber-400 font-bold font-sans">
            {article.category}
          </span>
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.readTime} читання</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {article.summary}
        </p>
      </div>

      {/* Main Content */}
      <div className="prose prose-invert prose-amber max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-6">
        <div className="whitespace-pre-line">
          {article.content}
        </div>
      </div>

      {/* FAQ Section */}
      {article.faq && article.faq.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-white/10 space-y-6 mt-12">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Часті запитання керівників підприємств
          </h3>
          <div className="space-y-4">
            {article.faq.map((f, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-white/5 space-y-2">
                <strong className="text-sm font-semibold text-white block">
                  {f.q}
                </strong>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h4 className="text-base font-bold text-white">
            Потрібна індивідуальна юридична консультація?
          </h4>
          <p className="text-xs text-slate-400">
            Отримайте повний аудит вашої потреби та зафіксуйте квоту від  за працівника.
          </p>
        </div>
        <Link
          href="/calculator"
          className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 transition-all shadow-md shadow-amber-500/20"
        >
          Зафіксувати квоту (€50)
        </Link>
      </div>
    </article>
  );
}
