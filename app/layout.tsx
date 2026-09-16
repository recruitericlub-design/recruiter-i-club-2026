import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingLeadBar from '@/components/FloatingLeadBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.recruiter-i.club'),
  title: 'Recruiter I Club — Підбір іноземного персоналу для бізнесу в Україні',
  description: 'Офіційний підбір та легалізація робітників з Узбекистану, Індії, Бангладеш, Непалу для виробничих та аграрних підприємств України. Вартість від $500 за працівника. 100% захист від мобілізації згідно ст. 23 ЗУ.',
  keywords: 'підбір іноземного персоналу, працівники з азії, зварювальники з індії, узбекистан рекрутинг україна, дозвіл на роботу держпраці, віза d-03, recruiter i club, роман яновський, станіслав лухменко',
  openGraph: {
    title: 'Recruiter I Club — Легальні іноземні робітники для бізнесу України',
    description: 'Офіційне працевлаштування в штат вашого ТОВ. Вартість від $500 за працівника. Заміна за 48 годин.',
    locale: 'uk_UA',
    type: 'website',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-recruiter-i-club',
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
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-slate-950" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingLeadBar />
      </body>
    </html>
  );
}
