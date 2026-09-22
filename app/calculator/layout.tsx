import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Калькулятор вартості найму та окупності (ROI) персоналу з Азії',
  description: 'Розрахуйте бюджет на залучення іноземних фахівців: зарплатний фонд, економія від простою цехів, терміни окупності та фіксація квоти.',
  keywords: [
    'калькулятор найму робітників',
    'вартість робітників з азії',
    'розрахунок рекрутингу україна',
    'зарплата зварювальника з узбекистану',
    'roi імпорту персоналу'
  ],
  alternates: {
    canonical: 'https://www.recruiter-i.club/calculator',
  },
  openGraph: {
    title: 'Калькулятор вартості та ROI іноземних працівників | Recruiter I Club',
    description: 'Миттєвий розрахунок витрат та економічної ефективності залучення іноземних робітників на виробництво.',
    url: 'https://www.recruiter-i.club/calculator',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://www.recruiter-i.club/images/logo/og_share_preview.png',
        width: 1200,
        height: 630,
        alt: 'Калькулятор рекрутингу іноземних спеціалістів',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Калькулятор вартості найму іноземного персоналу — Recruiter I Club',
    description: 'Розрахуйте витрати на персонал та терміни прибуття бригади за 1 хвилину.',
    images: ['https://www.recruiter-i.club/images/logo/og_share_preview.png'],
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Головна",
                "item": "https://www.recruiter-i.club/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Калькулятор окупності",
                "item": "https://www.recruiter-i.club/calculator"
              }
            ]
          }),
        }}
      />
      {children}
    </>
  );
}
