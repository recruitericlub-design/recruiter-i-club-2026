import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingLeadBar from '@/components/FloatingLeadBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.recruiter-i.club'),
  title: {
    default: 'Recruiter I Club — Підбір іноземного персоналу для бізнесу в Україні',
    template: '%s | Recruiter I Club',
  },
  description: 'Офіційний підбір та легалізація робітників з Узбекистану, Індії, Бангладеш, Непалу для виробничих та аграрних підприємств України. Вартість від $500 за працівника. 100% захист від мобілізації згідно ст. 23 ЗУ.',
  keywords: [
    'підбір іноземного персоналу',
    'працівники з азії',
    'зварювальники з індії',
    'узбекистан рекрутинг україна',
    'дозвіл на роботу держпраці',
    'віза d-03',
    'recruiter i club',
    'роман яновський',
    'станіслав лухменко'
  ],
  authors: [{ name: 'Recruiter I Club' }],
  creator: 'Recruiter I Club',
  publisher: 'Recruiter I Club',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.recruiter-i.club/',
    languages: {
      'uk-UA': 'https://www.recruiter-i.club/',
      'ru-UA': 'https://www.recruiter-i.club/ru',
      'x-default': 'https://www.recruiter-i.club/',
    },
  },
  openGraph: {
    title: 'Recruiter I Club — Легальні іноземні робітники для бізнесу України',
    description: 'Офіційне працевлаштування в штат вашого ТОВ. Вартість від $500 за працівника. Заміна за 48 годин.',
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
    title: 'Recruiter I Club — Підбір іноземного персоналу в Україні',
    description: 'Легальний імпорт персоналу з Азії. Ліцензія Мінсоцполітики №1428. 100% захист від мобілізації (ст. 23 ЗУ).',
    images: ['https://www.recruiter-i.club/images/logo/og_share_preview.png'],
  },
  verification: {
    google: 'googledf1a957fbdbc5b1c',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-slate-950 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingLeadBar />
      </body>
    </html>
  );
}
