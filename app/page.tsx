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
  title: 'Працевлаштування іноземців в Україні — Підбір персоналу та дозвіл на роботу | Recruiter I Club',
  description: 'Рекрутингова агенція та аутсорсингова компанія Recruiter I Club. Офіційний підбір персоналу та дозвіл на працевлаштування іноземців з Узбекистану та Азії під ключ. 100% захист від мобілізації (ст. 23 ЗУ). Комісія тільки після виходу людей на зміну.',
  keywords: 'дозвіл на працевлаштування іноземців, працевлаштування іноземців в україні, підбір персоналу, рекрутингова агенція, аутсорсингова компанія, аутстафінг персоналу, дозвіл на роботу іноземця, робітники з азії, працівники з індії, персонал з узбекистану, оренда персоналу, стаття 23 зу мобілізація, recruiter i club',
  alternates: {
    canonical: 'https://www.recruiter-i.club/',
    languages: {
      'uk-UA': 'https://www.recruiter-i.club/',
      'ru-UA': 'https://www.recruiter-i.club/ru',
      'x-default': 'https://www.recruiter-i.club/',
    },
  },
  openGraph: {
    title: 'Працевлаштування іноземців в Україні | Рекрутингова агенція Recruiter I Club',
    description: 'Офіційний дозвіл на працевлаштування іноземців та підбір персоналу з Азії для виробництв, складів та будівництва України. Ліцензія Мінсоцполітики №1428.',
    url: 'https://www.recruiter-i.club/',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://www.recruiter-i.club/images/logo/og_share_preview.png',
        width: 1200,
        height: 630,
        alt: 'Recruiter I Club — Підбір та легалізація іноземного персоналу в Україні',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Працевлаштування іноземців в Україні — Recruiter I Club',
    description: 'Офіційний дозвіл на працевлаштування іноземців під ключ. 100% захист від мобілізації (ст. 23 ЗУ). Оплата комісії тільки після виходу на зміну.',
    images: ['https://www.recruiter-i.club/images/logo/og_share_preview.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EmploymentAgency',
      '@id': 'https://www.recruiter-i.club/#agency',
      'name': 'Recruiter I Club',
      'alternateName': ['Рекрутер Ай Клаб', 'HireX Portal Ukraine', 'I Club Recruiter'],
      'url': 'https://www.recruiter-i.club/',
      'logo': 'https://www.recruiter-i.club/images/logo/riclub_gold_seal_3d.png',
      'image': 'https://www.recruiter-i.club/images/logo/og_share_preview.png',
      'description': 'Офіційний B2B-оператор в Україні з підбору, візового супроводу та легалізації робітничого персоналу з Узбекистану та країн Азії під ключ. Ліцензія Мінсоцполітики №1428.',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'вул. Велика Васильківська, 72, БЦ «Олімпійський», 14 поверх',
        'addressLocality': 'Київ',
        'postalCode': '03150',
        'addressCountry': 'UA',
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 50.4326,
        'longitude': 30.5164,
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '09:00',
          'closes': '19:00',
        },
      ],
      'areaServed': {
        '@type': 'Country',
        'name': 'Ukraine',
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Послуги міжнародного рекрутингу',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Підбір робітничого персоналу з Узбекистану та Азії',
              'description': 'Повний цикл рекрутингу: тестування професійних навичок у Ташкенті та Делі, верифікація кандидатів, укладання контрактів.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Оформлення дозволу на застосування праці іноземців у ДЦЗ',
              'description': 'Юридичний супровід подачі документів до Державної служби зайнятості та гарантоване отримання наказу про дозвіл.',
            },
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Консульська віза D-04 та логістика під ключ',
              'description': 'Відкриття робочих віз, переліт до Кишинева та організований наземний трансфер зеленим коридором до підприємства замовника.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.recruiter-i.club/#website',
      'url': 'https://www.recruiter-i.club/',
      'name': 'Recruiter I Club — Платформа підбору робітничої сили з Азії',
      'inLanguage': 'uk-UA',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.recruiter-i.club/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'Коли сплачується комісія агенції за підбір персоналу?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Залізне правило Recruiter I Club: комісію агенції роботодавець сплачує виключно в кінці — після того, як працівник фактично прибув на підприємство та вийшов на свою робочу зміну. Жодних передоплат за послуги рекрутингу до прибуття людей ми не беремо.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Хто оплачує авіаквитки працівникам (туди і назад)?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Працівник купує авіаквитки виключно за власні кошти. Це його персональна фінансова відповідальність і найкраща мотивація сумлінно відпрацювати весь термін контракту. Роботодавець не витрачає бюджет на перельоти.',
          },
        },
        {
          '@type': 'Question',
          'name': 'Чи підлягають іноземні працівники з Узбекистану та Азії мобілізації в Україні?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Ні, не підлягають. Відповідно до статті 23 Закону України «Про мобілізаційну підготовку та мобілізацію», іноземні громадяни не є суб’єктами військового обов’язку в Україні та не можуть бути мобілізовані до ЗСУ.',
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Schema.org Structured Data specifically on Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col w-full">
        {/* 1. Hero Pitch & Profession Cluster */}
        <HeroSection />

        {/* 2. Candidate Catalog & Live Trade Tests */}
        <div id="catalog">
          <WorkerCatalogSection />
        </div>

        {/* 2.5. Professions & Specializations Programmatic Showcase */}
        <ProfessionsShowcaseSection />

        {/* 3. CRM Employer Portal Simulator */}
        <PortalPreviewSection />

        {/* 4. Guarantees & Article 23 Legal Immunity */}
        <GuaranteesSection />

        {/* 5. 21-Day Turnkey Chronicle & Process */}
        <ChronicleSection />

        {/* 6. Executive Founders & International Testing Hubs */}
        <TeamSection />

        {/* 7. Comprehensive B2B FAQ */}
        <FaqSection />

        {/* 8. Free Audit & Calculation Form */}
        <AuditSection />

        {/* 9. Knowledge Base & Indexed Analytics Hub */}
        <KnowledgeBaseSection />
      </div>
    </>
  );
}
