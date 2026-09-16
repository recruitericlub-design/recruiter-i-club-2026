import type { Metadata } from 'next';
import RussianLandingContent from '@/components/ru/RussianLandingContent';

export const metadata: Metadata = {
  title: 'Трудоустройство иностранцев в Украине — Подбор персонала и разрешение на работу | Recruiter I Club',
  description: 'Рекрутинговое агентство и аутсорсинговая компания Recruiter I Club. Официальный подбор персонала и разрешение на работу для рабочих из Узбекистана, Индии, Бангладеш под ключ. 100% защита от мобилизации (ст. 23 ЗУ). Оплата комиссии только после выхода людей на смену.',
  keywords: 'разрешение на работу для иностранцев украина, трудоустройство иностранцев в украине, подбор персонала, рекрутинговое агентство, аутсорсинговая компания, рабочие из узбекистана, аренда строителей, сварщики mig mag из индии, персонал из азии украина, recruiter i club',
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
    description: 'Официальный подбор персонала из Узбекистана и стран Азии для производств, строек и складов Украины. 100% защита от мобилизации (ст. 23 ЗУ).',
    url: 'https://www.recruiter-i.club/ru',
    siteName: 'Recruiter I Club',
    locale: 'ru_UA',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EmploymentAgency',
      '@id': 'https://www.recruiter-i.club/ru#agency',
      'name': 'Recruiter I Club',
      'alternateName': ['Рекрутер Ай Клаб', 'HireX Portal Ukraine'],
      'url': 'https://www.recruiter-i.club/ru',
      'description': 'Официальный B2B-оператор в Украине по подбору, визовому сопровождению и легализации рабочих из Узбекистана и стран Азии под ключ.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'ул. Большая Васильковская, 72, БЦ «Олимпийский»',
        'addressLocality': 'Киев',
        'postalCode': '03150',
        'addressCountry': 'UA',
      },
      'areaServed': 'Ukraine',
      'priceRange': '$$',
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
      <RussianLandingContent />
    </>
  );
}
