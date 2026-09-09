import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Clock, ShieldCheck, User, ArrowRight, BookOpen, ChevronRight, Share2 } from 'lucide-react';
import { articlesData } from '@/lib/articlesData';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) {
    return {
      title: 'Статтю не знайдено | Recruiter I Club',
    };
  }

  const keywords = [
    article.targetKeywordsUa,
    article.targetKeywordsRu,
    article.category,
    'Recruiter I Club',
    'імпорт персоналу 2026',
    'робітники з азії'
  ].filter(Boolean).join(', ');

  return {
    title: `${article.title} | Recruiter I Club`,
    description: article.summary,
    keywords: keywords,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: '2026-09-08T08:00:00.000Z',
      authors: [article.author.name],
      locale: 'uk_UA',
      siteName: 'Recruiter I Club — Платформа імпорту персоналу',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
    },
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = articlesData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Related articles from same audience or category
  const relatedArticles = articlesData
    .filter((a) => a.slug !== article.slug && (a.audience === article.audience || a.category === article.category))
    .slice(0, 3);

  const isB2B = article.audience !== 'B2C';

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Schema.org Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": article.title,
            "description": article.summary,
            "datePublished": "2026-09-08T08:00:00+02:00",
            "dateModified": "2026-09-09T10:00:00+02:00",
            "author": {
              "@type": "Person",
              "name": article.author.name,
              "jobTitle": article.author.role,
            },
            "publisher": {
              "@type": "Organization",
              "name": "Recruiter I Club",
              "url": "https://recruiter-i-club-2026.vercel.app"
            },
            "inLanguage": "uk-UA"
          }),
        }}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-mono overflow-x-auto">
        <Link href="/" className="hover:text-blue-600 transition-colors">Головна</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <Link href="/blog" className="hover:text-blue-600 transition-colors">База знань</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-sans font-semibold shrink-0">
          {article.category}
        </span>
      </nav>

      {/* Header */}
      <div className="space-y-6 border-b border-slate-200 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500">
          <span
            className={`px-3 py-1 rounded-md font-bold font-sans border ${
              isB2B
                ? 'bg-blue-50 text-blue-800 border-blue-100'
                : 'bg-emerald-50 text-emerald-800 border-emerald-100'
            }`}
          >
            {article.category}
          </span>
          <span className="text-slate-400">·</span>
          <span>{article.date}</span>
          <span className="text-slate-400">·</span>
          <span className="flex items-center gap-1 text-slate-600">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="text-slate-400">·</span>
          <span className="text-emerald-700 font-bold flex items-center gap-1 font-sans">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Перевірено експертом
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal bg-slate-50 p-4 rounded-2xl border border-slate-200">
          {article.summary}
        </p>

        {/* Author Details */}
        <div className="flex items-center gap-3 pt-2 text-xs text-slate-600">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex items-center justify-center font-bold text-sm shadow-sm">
            {article.author.name[0]}
          </div>
          <div>
            <span className="font-bold text-slate-900 block text-sm">{article.author.name}</span>
            <span className="text-[11px] text-slate-500">{article.author.role}</span>
          </div>
        </div>
      </div>

      {/* Main Content with Markdown */}
      <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => <h1 className="text-2xl font-black text-slate-900 mt-8 mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-10 mb-4 pb-2 border-b border-slate-200" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-6 mb-3" {...props} />,
            h4: ({ node, ...props }) => <h4 className="text-base font-bold text-slate-900 mt-4 mb-2" {...props} />,
            p: ({ node, ...props }) => <p className="text-sm sm:text-base text-slate-700 leading-relaxed my-3" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-disc pl-6 space-y-2 my-4 text-sm sm:text-base text-slate-700" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal pl-6 space-y-2 my-4 text-sm sm:text-base text-slate-700" {...props} />,
            li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote className="border-l-4 border-blue-600 bg-blue-50/50 p-4 rounded-r-2xl my-4 text-slate-700 italic text-sm" {...props} />
            ),
            table: ({ node, ...props }) => (
              <div className="overflow-x-auto my-6 rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-xs sm:text-sm text-left border-collapse" {...props} />
              </div>
            ),
            thead: ({ node, ...props }) => <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200" {...props} />,
            th: ({ node, ...props }) => <th className="px-4 py-3 font-bold uppercase tracking-wider text-[11px] text-slate-700" {...props} />,
            td: ({ node, ...props }) => <td className="px-4 py-3 border-b border-slate-100 text-slate-700" {...props} />,
            pre: ({ node, ...props }) => (
              <pre className="bg-slate-900 text-emerald-400 p-4 sm:p-5 rounded-2xl text-xs font-mono overflow-x-auto my-6 border border-slate-800 shadow-inner" {...props} />
            ),
            code: ({ node, className, children, ...props }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="bg-slate-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono font-bold border border-slate-200" {...props}>
                    {children}
                  </code>
                );
              }
              return <code className={className} {...props}>{children}</code>;
            },
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>

      {/* Target SEO Keywords Footer Card */}
      {(article.targetKeywordsUa || article.targetKeywordsRu) && (
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-xs space-y-2">
          <span className="font-mono font-bold text-slate-500 uppercase text-[10px] tracking-wider block">
            Семантичне ядро статті (SEO Clusters):
          </span>
          {article.targetKeywordsUa && (
            <p className="text-slate-600">
              <strong className="text-slate-800">Пошукові запити UA:</strong> {article.targetKeywordsUa}
            </p>
          )}
          {article.targetKeywordsRu && (
            <p className="text-slate-600">
              <strong className="text-slate-800">Пошукові запити RU:</strong> {article.targetKeywordsRu}
            </p>
          )}
        </div>
      )}

      {/* FAQ Section */}
      {article.faq && article.faq.length > 0 && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 mt-10">
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

      {/* Bottom Conversion CTA Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-700 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base sm:text-lg font-bold text-white">
            Потрібна індивідуальна юридична або фінансова консультація?
          </h4>
          <p className="text-xs sm:text-sm text-blue-100">
            Отримайте безкоштовний аудит вашої виробничої потреби від керуючих партнерів Recruiter I Club.
          </p>
        </div>
        <Link
          href="/calculator"
          className="px-6 py-3 rounded-2xl bg-white text-blue-900 text-xs sm:text-sm font-bold shadow-md hover:bg-blue-50 transition-all shrink-0"
        >
          Розрахувати кошторис
        </Link>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="pt-10 border-t border-slate-200 space-y-6">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-blue-600" />
            Рекомендовані матеріали по темі
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-blue-700 px-2 py-0.5 rounded bg-blue-50 inline-block">
                    {rel.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-3 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{rel.readTime}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-600" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
