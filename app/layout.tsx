import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingLeadBar from '@/components/FloatingLeadBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://recruitericlub.com.ua'),
  title: 'Recruiter I Club — Підбір іноземного персоналу для бізнесу в Україні',
  description: 'Офіційний підбір та легалізація робітників з Узбекистану, Індії, Бангладеш, Непалу для виробничих та аграрних підприємств України. Вартість від $500 за працівника, бронь квоти €50. 100% захист від мобілізації згідно ст. 23 ЗУ.',
  keywords: 'підбір іноземного персоналу, працівники з азії, зварювальники з індії, узбекистан рекрутинг україна, дозвіл на роботу держпраці, віза d-03, recruiter i club, роман яновський, станіслав лухменко',
  openGraph: {
    title: 'Recruiter I Club — Легальні іноземні робітники для бізнесу України',
    description: 'Офіційне працевлаштування в штат вашого ТОВ. Вартість від $500 за працівника, бронь квоти €50. Заміна за 48 годин.',
    locale: 'uk_UA',
    type: 'website',
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
