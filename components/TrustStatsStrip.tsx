'use client';

import React from 'react';

// Compact trust strip placed directly under the hero: key B2B proof points
// visible without scrolling. Figures come from the company's own materials
// (donor countries, delivery terms, Art. 23 protection, replacement warranty).
const STATS_UK = [
  { value: '5', label: 'країн-донорів: Узбекистан, Індія, Непал, Бангладеш, Філіппіни' },
  { value: '20–45', label: 'днів від заявки до виходу працівника на зміну' },
  { value: '100%', label: 'захист від мобілізації — ст. 23 ЗУ «Про мобілізацію»' },
  { value: '1:1', label: 'гарантія заміни працівника, якщо не підійшов' },
];

const STATS_RU = [
  { value: '5', label: 'стран-доноров: Узбекистан, Индия, Непал, Бангладеш, Филиппины' },
  { value: '20–45', label: 'дней от заявки до выхода работника на смену' },
  { value: '100%', label: 'защита от мобилизации — ст. 23 ЗУ «О мобилизации»' },
  { value: '1:1', label: 'гарантия замены работника, если не подошёл' },
];

export default function TrustStatsStrip({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const stats = locale === 'ru' ? STATS_RU : STATS_UK;
  return (
    <div className="relative z-10 bg-white/90 backdrop-blur border-b border-slate-200/70">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-emerald-700 font-mono whitespace-nowrap">
              {s.value}
            </span>
            <span className="text-xs sm:text-sm text-slate-600 leading-snug">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
