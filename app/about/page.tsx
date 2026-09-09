import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Building2, 
  Award, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  Video, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  FileCheck2,
  Phone,
  Briefcase,
  Users,
  GraduationCap
} from 'lucide-react';

export const metadata = {
  title: 'Керівництво та Команда | Recruiter I Club 2026',
  description: 'Керівництво клубу: Роман Яновський, Станіслав Лухменко та експертна команда юристів, інженерів і координаторів логістики міжнародного найму в Україну.',
};

export default function AboutPage() {
  const founders = [
    {
      name: 'Роман Яновський',
      role: 'Засновник & Керуючий партнер',
      photo: '/team/roman_yanovskyi_studio.jpg',
      exp: '14 років у міжнародному бізнесі та управлінні транскордонними проєктами',
      bio: 'Особисто курує стратегічні контракти з українськими промисловими холдингами, заводами та агропідприємствами. Несе персональну фінансову та юридичну відповідальність за виконання зобов’язань за кожним договором.',
      quote: '«Українське виробництво сьогодні не має часу на експерименти. Ми надаємо перевірених фахівців і фіксуємо 30 днів безкоштовної заміни у договорі, тому що особисто відповідаємо за кожну людину».'
    },
    {
      name: 'Станіслав Лухменко',
      role: 'Співзасновник & Директор з логістики',
      photo: '/team/stanislav_lukhmenko_studio.jpg',
      exp: '10 років в оперативній транскордонній логістиці та координації міграційних процесів',
      bio: 'Керує роботою закордонних відбіркових хабів в Азії (Ташкент, Делі, Катманду), формуванням пакетів на візи D-03 та безпечним логістичним коридором трансферу через аеропорт Кишинів безпосередньо до гуртожитку замовника.',
      quote: '«Ми особисто контролюємо кожен рейс та перетин державного кордону. Замовник отримує повний відеозвіт і бачить робітників ще до того, як вони сіли в літак».'
    }
  ];

  const teamMembers = [
    {
      name: 'Олена Кравченко',
      role: 'Керівник юридичного департаменту',
      photo: '/team/olena_kravchenko_legal.jpg',
      exp: '12 років практики у сфері міграційного та господарського права',
      desc: 'Особисто супроводжує отримання дозволів Держпраці, акредитацію іноземців у Державній міграційній службі України та забезпечує 100% захист підприємства від штрафів і претензій перевіряючих органів.'
    },
    {
      name: 'Алішер Карімов',
      role: 'Директор з відбору в країнах Азії',
      photo: '/team/alisher_karimov_recruitment.jpg',
      exp: '11 років координації екзаменаційних хабів в Узбекистані, Індії та Непалі',
      desc: 'Відповідає за первинну фільтрацію кандидатів, перевірку біографічних даних, довідок про несудимість, медичний скринінг та організацію практичних іспитів на акредитованих полігонах.'
    },
    {
      name: 'Олександр Мельник',
      role: 'Головний інженер-технолог, Голова Trade Test',
      photo: '/team/oleksandr_melnyk_engineer.jpg',
      exp: '20 років виробничого досвіду в машинобудуванні та зварювальному виробництві',
      desc: 'Розробляє тестові нормативи для зварювальників 6G, операторів ЧПК та слюсарів відповідно до стандартів замовника. Здійснює інструментальний контроль мікроструктури швів та допусків.'
    },
    {
      name: 'Тетяна Бондаренко',
      role: 'Керівник відділу адаптації та комплаєнсу',
      photo: '/team/tetyana_bondarenko_adaptation.jpg',
      exp: '10 років у сфері крос-культурного онбордингу та виробничого HR',
      desc: 'Курує комфортне розселення в гуртожитках, дотримання внутрішнього трудового розпорядку, мовний супровід та швидку інтеграцію іноземних фахівців у виробничі зміни.'
    },
    {
      name: 'Дмитро Ковальчук',
      role: 'Операційний директор моніторингу змін',
      photo: '/team/dmytro_kovalchuk_operations.jpg',
      exp: '14 років в операційному менеджменті важкого машинобудування',
      desc: 'Контролює щоденні показники виходу персоналу на зміну (коефіцієнт 99.4%), виробничу продуктивність, табелювання та забезпечує миттєву ротацію або підсилення змін за запитом клієнта.'
    },
    {
      name: 'Сергій Мельник',
      role: 'Керівник відділу логістики та транзиту',
      photo: '/team/sergiy_melnyk.jpg',
      exp: '8 років у міжнародних трансферах та логістиці персоналу',
      desc: 'Організовує безпечний коридор «Кишинів ➔ Україна», супровід груп кураторами, поселення у гуртожитки підприємств та первинний інструктаж перед виходом на першу зміну.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-blue-600" />
          Публічність та Персональна Відповідальність
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Керівництво та Експертна Команда <br />
          <span className="text-blue-700">Recruiter I Club</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          За кожним договором стоять реальні засновники та професійна команда юристів, інженерів і логістів. Ми відкриті до офіційної зустрічі в Києві, аудиту виробничих потреб та довгострокового B2B-партнерства.
        </p>
      </div>

      {/* Two Main Founders Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {founders.map((founder, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all group"
          >
            <div>
              {/* Photo */}
              <div className="relative h-96 sm:h-[420px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={founder.photo}
                  alt={founder.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 rounded-md bg-blue-600 text-white text-xs font-bold uppercase tracking-wider inline-block mb-1 shadow">
                    {founder.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">{founder.name}</h3>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic leading-relaxed">
                  {founder.quote}
                </div>

                <div className="pt-2 text-[11px] text-slate-500 font-mono">
                  Досвід: <span className="text-slate-900 font-semibold">{founder.exp}</span>
                </div>
              </div>
            </div>

            {/* Corporate Responsibility Badge */}
            <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Персональний нагляд за виконанням договору</span>
              <span className="px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-bold text-[11px]">Керівництво клубу</span>
            </div>
          </div>
        ))}
      </div>

      {/* Extended Department Team Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            Професійний апарат клубу
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ключові експерти напрямів
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Фахівці, які щоденно забезпечують юридичну чистоту, практичний контроль кваліфікації та безпечну доставку персоналу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full bg-slate-100">
                  <Image src={member.photo} alt={member.name} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-bold text-base text-white">{member.name}</h3>
                    <span className="text-[11px] text-amber-300 font-medium block">{member.role}</span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-slate-400 font-mono block">{member.exp}</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 border-t border-slate-100 text-[11px] text-slate-500 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Офіційний фахівець клубу</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exhibitions & Real International Presence */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Особиста присутність на міжнародних самітах
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Прямі домовленості з міністерствами праці та акредитованими тестовими центрами в Азії.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-56 w-full bg-slate-100">
              <Image src="/images/booth_signing.jpg" alt="Підписання партнерства" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Підписання міжурядових квот</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Офіційні протоколи відбору кандидатів з урахуванням специфіки українського промислового сектора.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-56 w-full bg-slate-100">
              <Image src="/images/recruiter_club_summit.jpg" alt="Саміт з рекрутингу" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Інспекція центрів підготовки</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Перевірка зварювальних полігонів, токарних верстатів та інструментів вимірювання до вильоту фахівців.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="relative h-56 w-full bg-slate-100">
              <Image src="/images/exhibitions_team.jpg" alt="Команда на виставці" fill className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-sm text-slate-900 mb-1">B2B нетворкінг з роботодавцями</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Регулярні презентації для директорів заводів, агрохолдингів та логістичних операторів України.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Official Corporate Inquiries Callout */}
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center md:text-left">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block">Офіційний зв&apos;язок з керівництвом</span>
          <h3 className="text-xl sm:text-2xl font-black">Бажаєте провести B2B переговори у нашому офісі в Києві?</h3>
          <p className="text-xs sm:text-sm text-slate-300">Приймальня керівництва: вул. Велика Васильківська, 72, Київ.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="tel:+380678004040"
            className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs shadow-lg transition-transform active:scale-95 whitespace-nowrap"
          >
            Записатися на зустріч
          </a>
        </div>
      </div>

    </div>
  );
}
