import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import WorkerCatalogSection from '@/components/WorkerCatalogSection';
import PortalPreviewSection from '@/components/PortalPreviewSection';
import GuaranteesSection from '@/components/GuaranteesSection';
import ChronicleSection from '@/components/ChronicleSection';
import TeamSection from '@/components/TeamSection';
import FaqSection from '@/components/FaqSection';
import AuditSection from '@/components/AuditSection';
import KnowledgeBaseSection from '@/components/KnowledgeBaseSection';
import ProfessionsShowcaseSection from '@/components/ProfessionsShowcaseSection';

export const metadata: Metadata = {
  title: 'Подбор и завоз иностранцев на работу в Украину — Трудовые мигранты под ключ | Recruiter I Club',
  description: 'Официальный подбор и завоз иностранцев на работу в Украину. Трудовые мигранты из Узбекистана, Индии, Бангладеш для производств, строек и складов. 100% защита от мобилизации (ст. 23 ЗУ). Старт от 20 дней.',
  keywords: 'подбор иностранцев на работу в украину, завоз иностранцев, завоз трудовых мигрантов, трудоустройство иностранцев в украине, импорт рабочей силы в украину, рабочие из узбекистана, сварщики mig mag из индии, разрешение на работу для иностранцев украина, статья 23 зу мобилизация, recruiter i club',
  alternates: {
    canonical: 'https://www.recruiter-i.club/ru',
    languages: {
      'uk-UA': 'https://www.recruiter-i.club/',
      'ru-UA': 'https://www.recruiter-i.club/ru',
      'x-default': 'https://www.recruiter-i.club/',
    },
  },
  openGraph: {
    title: 'Трудоустройство иностранцев в Украине | Рекрутинговое агентство Recruiter I Club',
    description: 'Официальный подбор персонала из Узбекистана и стран Азии для производств, строек и складов Украины. 100% защита от мобилизации (ст. 23 ЗУ). Лицензия Минсоцполитики №1428.',
    url: 'https://www.recruiter-i.club/ru',
    siteName: 'Recruiter I Club',
    locale: 'ru_UA',
    type: 'website',
    images: [
      {
        url: 'https://www.recruiter-i.club/images/logo/og_share_preview.png',
        width: 1200,
        height: 630,
        alt: 'Recruiter I Club — Подбор и легализация иностранного персонала в Украине',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Трудоустройство иностранцев в Украине — Recruiter I Club',
    description: 'Официальное разрешение на работу и подбор рабочих из Азии под ключ. 100% защита от мобилизации (ст. 23 ЗУ). Оплата комиссии только после выхода на смену.',
    images: ['https://www.recruiter-i.club/images/logo/og_share_preview.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EmploymentAgency',
      '@id': 'https://www.recruiter-i.club/ru#agency',
      'name': 'Recruiter I Club',
      'alternateName': ['Рекрутер Ай Клаб', 'HireX Portal Ukraine', 'I Club Recruiter'],
      'url': 'https://www.recruiter-i.club/ru',
      'logo': 'https://www.recruiter-i.club/images/logo/riclub_gold_seal_3d.png',
      'image': 'https://www.recruiter-i.club/images/logo/og_share_preview.png',
      'description': 'Официальный B2B-оператор в Украине по подбору, визовому сопровождению и легализации рабочих из Узбекистана и стран Азии под ключ. Лицензия Минсоцполитики №1428.',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'ул. Большая Васильковская, 72, БЦ «Олимпийский», 14 этаж',
        'addressLocality': 'Киев',
        'postalCode': '03150',
        'addressCountry': 'UA',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 50.4326,
        'longitude': 30.5164,
      },
      'areaServed': 'Ukraine',
    },
  ],
};

export default function RussianHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col w-full">
        {/* 1. Hero Pitch & Profession Cluster */}
        <HeroSection locale="ru" />

        {/* 2. Candidate Catalog & Live Trade Tests */}
        <div id="catalog">
          <WorkerCatalogSection locale="ru" />
        </div>

        {/* 2.5. Professions & Specializations Programmatic Showcase */}
        <ProfessionsShowcaseSection locale="ru" />

        {/* 3. CRM Employer Portal Simulator */}
        <PortalPreviewSection locale="ru" />

        {/* 4. Guarantees & Article 23 Legal Immunity */}
        <GuaranteesSection locale="ru" />

        {/* 5. 21-Day Turnkey Chronicle & Process */}
        <ChronicleSection locale="ru" />

        {/* 6. Executive Founders & International Testing Hubs */}
        <TeamSection locale="ru" />

        {/* 7. Comprehensive B2B FAQ */}
        <FaqSection locale="ru" />

        {/* 8. Free Audit & Calculation Form */}
        <AuditSection locale="ru" />

        {/* 9. Knowledge Base & Indexed Analytics Hub */}
        <KnowledgeBaseSection locale="ru" />
      </div>
    </>
  );
}
