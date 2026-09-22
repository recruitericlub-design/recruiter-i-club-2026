import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Відеозвіти Trade-Tests та Спецтрансферу робітників',
  description: 'Відеодокази практичної кваліфікації зварювальників, будівельників, операторів та відеофіксація безпечного трансферу Кишинів — Україна.',
  keywords: 'trade test відео, відео зварювальників міг маг, трансфер робітників україна, випробування персоналу з азії, recruiter i club відео',
  alternates: {
    canonical: 'https://www.recruiter-i.club/trade-tests',
  },
  openGraph: {
    title: 'Відеозвіти Trade-Tests та Трансферу | Recruiter I Club',
    description: 'Реальні відеоіспити кандидатів та супроводу груп працівників на підприємства України.',
    url: 'https://www.recruiter-i.club/trade-tests',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://www.recruiter-i.club/images/logo/og_share_preview.png',
        width: 1200,
        height: 630,
        alt: 'Відеозвіти практичних Trade-Tests робітників',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Відеозвіти Trade-Tests та Трансферу — Recruiter I Club',
    description: 'Відеофіксація практичних іспитів зварювальників та організованого прибуття на заводи України.',
    images: ['https://www.recruiter-i.club/images/logo/og_share_preview.png'],
  },
};

const videosSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  'name': 'Відеозвіти практичних Trade-Tests та трансферу Recruiter I Club',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'item': {
        '@type': 'VideoObject',
        'name': 'Супровід та спецтрансфер групи робітників: Кишинів ➔ Україна',
        'description': 'Зустріч закордонних фахівців куратором Recruiter I Club, перевірка пакетів D-03 віз та безпечний автобусний трансфер через державний кордон.',
        'thumbnailUrl': ['https://www.recruiter-i.club/work-samples/photo_2026-08-24_15-37-22.jpg'],
        'uploadDate': '2026-08-25T09:00:00+02:00',
        'duration': 'PT25S',
        'contentUrl': 'https://www.recruiter-i.club/videos/transfer_moldova_ukraine.mp4',
        'embedUrl': 'https://www.recruiter-i.club/videos/transfer_moldova_ukraine.mp4',
      },
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'item': {
        '@type': 'VideoObject',
        'name': "Прибуття робітників на виробничий об\'єкт замовника в Україні",
        'description': 'Група прибула безпосередньо на територію підприємства: поселення у гуртожиток, первинний медичний огляд та підготовка до виходу на зміну.',
        'thumbnailUrl': ['https://www.recruiter-i.club/workers/builder_ilkhom_34.jpg'],
        'uploadDate': '2026-08-20T10:00:00+02:00',
        'duration': 'PT34S',
        'contentUrl': 'https://www.recruiter-i.club/videos/arrival_in_ukraine.mp4',
        'embedUrl': 'https://www.recruiter-i.club/videos/arrival_in_ukraine.mp4',
      },
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'item': {
        '@type': 'VideoObject',
        'name': 'Логістичний контроль маршруту та координація поселення',
        'description': 'Кожен етап пересування супроводжується персональним менеджером Recruiter I Club з постійним відеозвітом керівництву замовника.',
        'thumbnailUrl': ['https://www.recruiter-i.club/work-samples/photo_2026-08-24_15-37-31.jpg'],
        'uploadDate': '2026-08-21T11:00:00+02:00',
        'duration': 'PT19S',
        'contentUrl': 'https://www.recruiter-i.club/videos/transfer_logistics_group.mp4',
        'embedUrl': 'https://www.recruiter-i.club/videos/transfer_logistics_group.mp4',
      },
    },
    {
      '@type': 'ListItem',
      'position': 4,
      'item': {
        '@type': 'VideoObject',
        'name': 'Trade Test: Атестація напівавтоматичного зварювання (MIG / MAG)',
        'description': "Практичне виконання таврового та стикового з\'єднання товстостінної сталі під кутом перед комісією технічного контролю.",
        'thumbnailUrl': ['https://www.recruiter-i.club/work-samples/photo_2026-08-24_15-37-22.jpg'],
        'uploadDate': '2026-08-24T12:00:00+02:00',
        'duration': 'PT28S',
        'contentUrl': 'https://www.recruiter-i.club/work-samples/welder_trade_test_1.mp4',
        'embedUrl': 'https://www.recruiter-i.club/work-samples/welder_trade_test_1.mp4',
      },
    },
    {
      '@type': 'ListItem',
      'position': 5,
      'item': {
        '@type': 'VideoObject',
        'name': 'Trade Test: Контроль геометрії шва та механічні випробування',
        'description': 'Макрозйомка чистоти зварювального шва, відсутність пір та шлакових дефектів за міжнародним регламентом ISO 9606.',
        'thumbnailUrl': ['https://www.recruiter-i.club/work-samples/photo_2026-08-24_15-37-31.jpg'],
        'uploadDate': '2026-08-24T14:00:00+02:00',
        'duration': 'PT38S',
        'contentUrl': 'https://www.recruiter-i.club/work-samples/welder_trade_test_2.mp4',
        'embedUrl': 'https://www.recruiter-i.club/work-samples/welder_trade_test_2.mp4',
      },
    },
    {
      '@type': 'ListItem',
      'position': 6,
      'item': {
        '@type': 'VideoObject',
        'name': 'Trade Test: Слюсарно-складальні операції та темп роботи',
        'description': 'Перевірка точності збирання вузлів за кресленням та дотримання виробничого такту для конвеєрного виробництва.',
        'thumbnailUrl': ['https://www.recruiter-i.club/work-samples/photo_2026-08-24_15-37-39.jpg'],
        'uploadDate': '2026-08-18T14:30:00+02:00',
        'duration': 'PT44S',
        'contentUrl': 'https://www.recruiter-i.club/work-samples/assembly_line_test.mp4',
        'embedUrl': 'https://www.recruiter-i.club/work-samples/assembly_line_test.mp4',
      },
    },
  ],
};

export default function TradeTestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videosSchema) }}
      />
      {children}
    </>
  );
}
