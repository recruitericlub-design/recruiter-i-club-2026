import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingLeadBar from '@/components/FloatingLeadBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://recruitericlub.com.ua'),
  title: 'Recruiter I Club — Національний B2B Оператор Легального Найму Персоналу в Україну',
  description: 'Прямий офіційний підбір та легалізація робітників з Узбекистану, Індії, Бангладеш, Непалу для промислових та аграрних підприємств України. Ціна від $500 за працівника, бронь квоти €50.',
  keywords: 'найм іноземців україна, працівники з індії, узбекистан рекрутинг, дозвіл на роботу держпраці, віза d-03, персонал для виробництва, аутстафінг альтернатива, recruiter i club, роман яновський, станіслав лухменко',
  openGraph: {
    title: 'Recruiter I Club — Легальні робітники для виробництва та агросектору',
    description: 'Гарантований добір кадрів з Азії від $500 за працівника. Офіційне працевлаштування в штат вашого ТОВ.',
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
    <html lang="uk" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#070a12] text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingLeadBar />
      </body>
    </html>
  );
}
