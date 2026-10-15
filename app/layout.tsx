import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingLeadBar from '@/components/FloatingLeadBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.recruiter-i.club'),
  title: {
    default: 'Підбір та завіз іноземців на роботу в Україну | Трудові мігранти під ключ — Recruiter I Club',
    template: '%s | Recruiter I Club',
  },
  description: 'Офіційний підбір і завіз трудових мігрантів з Азії для підприємств України. Вартість від $500/люд. 100% захист від мобілізації, гарантія заміни.',
  keywords: [
    'підбір іноземців на роботу в україну',
    'завіз іноземців',
    'завезення іноземців в україну',
    'завоз иностранцев',
    'завоз трудовых мигрантов',
    'завезення трудових мігрантів',
    'подбор иностранцев на работу в украину',
    'підбір іноземного персоналу',
    'імпорт робочої сили в україну',
    'трудоустройство иностранцев в украине',
    'робітники з азії',
    'працівники з узбекистану',
    'зварювальники з індії',
    'дозвіл на роботу держпраці',
    'стаття 23 мобілізація іноземці',
    'recruiter i club'
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
    title: 'Підбір та завіз персоналу з Азії в Україну | Recruiter I Club',
    description: 'Офіційний підбір робітників з Узбекистану, Індії та Бангладеш для виробництв, складів і будівництва. 100% захист від мобілізації (ст. 23 ЗУ). Оплата комісії ТІЛЬКИ після виходу на зміну.',
    url: 'https://www.recruiter-i.club/',
    siteName: 'Recruiter I Club',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: 'https://www.recruiter-i.club/images/logo/og_share_preview.png?v=20261012',
        width: 1200,
        height: 630,
        alt: 'Recruiter I Club — Підбір та завіз персоналу з Азії під ключ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Підбір та завіз персоналу з Азії в Україну — Recruiter I Club',
    description: 'Офіційний підбір робітників з Узбекистану, Індії та Бангладеш для виробництв, складів і будівництва. 100% захист від мобілізації (ст. 23 ЗУ). Оплата комісії ТІЛЬКИ після виходу на зміну.',
    images: ['https://www.recruiter-i.club/images/logo/og_share_preview.png?v=20261012'],
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
        {(() => {
          const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XJFLR5TL22';
          return (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              />
              <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaId}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          );
        })()}
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
