import React from 'react';
import Image from 'next/image';

export default function TeamSection({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const isRu = locale === 'ru';

  const uaTeam = isRu
    ? [
        {
          name: 'Роман Яновский',
          role: 'СЕО & УПРАВЛЯЮЩИЙ ПАРТНЕР',
          sub: '3 года проживал в Узбекистане',
          desc: 'Лично выстроил прямую инфраструктуру сотрудничества с государственными органами миграции и центрами отбора в Азии. Курирует B2B-контракты и несет персональную ответственность за результат.',
          img: '/team/roman_yanovskyi_sq.jpg',
          badge: '● Персональная гарантия руководителя',
          hub: 'Kyiv HQ',
          border: 'border-emerald-500'
        },
        {
          name: 'Станислав Лухменко',
          role: 'ДИРЕКТОР ПО ЛОГИСТИКЕ',
          sub: 'Транзитный хаб Кишинев–Киев',
          desc: 'Лично координирует авиарейсы из Азии в Кишинев, встречает каждую группу рабочих в зоне прилета и сопровождает организованный чартерный трансфер через границу прямо на заводы.',
          img: '/team/stanislav_lukhmenko.jpg',
          badge: '● Зеленый коридор транзита',
          hub: 'Chisinau Hub',
          border: 'border-sky-500'
        },
        {
          name: 'Владлен Пономаренко',
          role: 'ГЛАВНЫЙ МИГРАЦИОННЫЙ ЮРИСТ',
          sub: '12+ лет миграционной практики',
          desc: 'Адвокат по трудовому праву. Отвечает исключительно за приказы ДЦЗ на выдачу разрешений на работу, вклейку виз D-04, регистрацию в штат и соблюдение Ст. 23 ЗУ (освобождение от воинского учета).',
          img: '/team/vladlen_ponomarenko.jpg',
          badge: '● 100% защита от штрафов',
          hub: 'Legal Dept',
          border: 'border-amber-500'
        },
        {
          name: 'Оксана Ковальчук',
          role: 'HEAD OF CLIENT SUCCESS & CRM',
          sub: 'Персональное сопровождение заказчика',
          desc: 'Личный куратор руководства вашего предприятия. Загружает досье, видео trade-тестов и сканы разрешений в Личный кабинет, ведет ежедневный трекинг готовности документов.',
          img: '/team/oksana_kovalchuk.jpg',
          badge: '● Личный кабинет 24/7',
          hub: 'CRM Hub',
          border: 'border-rose-400'
        },
        {
          name: 'Денис Кравченко',
          role: 'КООРДИНАТОР ТРАНСФЕРА & АДАПТАЦИИ',
          sub: 'Расселение и запуск на смену',
          desc: 'Встречает автобус с бригадой у ворот предприятия, инспектирует условия проживания в общежитии, координирует медкомиссию и лично выводит людей на смену в 08:00 под расписку начальника цеха.',
          img: '/team/denis_kravchenko.jpg',
          badge: '● Сопровождение первых 30 дней',
          hub: 'On-site Hub',
          border: 'border-teal-500'
        }
      ]
    : [
        {
          name: 'Роман Яновський',
          role: 'СЕО & КЕРУЮЧИЙ ПАРТНЕР',
          sub: '3 роки проживав в Узбекистані',
          desc: 'Особисто вибудував пряму інфраструктуру співпраці з державними органами міграції та акредитованими технічними центрами відбору в Азії. Курує B2B-контракти та несе персональну фінансову відповідальність за результат.',
          img: '/team/roman_yanovskyi_sq.jpg',
          badge: '● Персональна гарантія керівника',
          hub: 'Kyiv HQ',
          border: 'border-emerald-500'
        },
        {
          name: 'Станіслав Лухменко',
          role: 'ДИРЕКТОР ЛОГІСТИКИ',
          sub: 'Транзитний хаб Кишинів–Київ',
          desc: 'Особисто координує авіарейси з Азії до Кишинева, зустрічає кожну групу робітників у зоні прильоту та супроводжує організований чартерний трансфер через кордон прямо на виробничі локації замовника.',
          img: '/team/stanislav_lukhmenko.jpg',
          badge: '● Зелений коридор транзиту',
          hub: 'Chisinau Hub',
          border: 'border-sky-500'
        },
        {
          name: 'Владлен Пономаренко',
          role: 'ГОЛОВНИЙ МІГРАЦІЙНИЙ ЮРИСТ',
          sub: '12+ років міграційної практики',
          desc: 'Адвокат з трудового права. Відповідає виключно за накази ДЦЗ на видачу дозволів на працю, вклейку віз D-04 у Консульстві, реєстрацію в штат ТОВ/ПП та дотримання Ст. 23 ЗУ (звільнення від військового обліку).',
          img: '/team/vladlen_ponomarenko.jpg',
          badge: '● 100% захист від штрафів',
          hub: 'Legal Dept',
          border: 'border-amber-500'
        },
        {
          name: 'Оксана Ковальчук',
          role: 'HEAD OF CLIENT SUCCESS & CRM',
          sub: 'Персональний супровід замовника',
          desc: 'Особистий куратор керівництва вашого підприємства. Завантажує досьє, відео trade-тестів та скани дозволів в Особистий кабінет, веде щоденний трекінг готовності документів та оперативно розв’язує будь-які робочі питання.',
          img: '/team/oksana_kovalchuk.jpg',
          badge: '● Особистий кабінет 24/7',
          hub: 'CRM Hub',
          border: 'border-rose-400'
        },
        {
          name: 'Денис Кравченко',
          role: 'КООРДИНАТОР ТРАНСФЕРУ & АДАПТАЦІЇ',
          sub: 'Поселення та запуск на зміну',
          desc: 'Зустрічає автобус з бригадою біля воріт вашого підприємства, інспектує побутові умови проживання в гуртожитку, координує медичну комісію та особисто виводить людей на зміну о 08:00 під розписку начальника цеху.',
          img: '/team/denis_kravchenko.jpg',
          badge: '● Супровід перших 30 днів',
          hub: 'On-site Hub',
          border: 'border-teal-500'
        }
      ];

  const asiaHubs = isRu
    ? [
        {
          name: 'Фарход Каримов',
          flag: '🇺🇿',
          country: 'Узбекистан (Ташкент)',
          role: 'Руководитель центра аттестации',
          stat: '3 200+ сварщиков и строителей аттестовано'
        },
        {
          name: 'Раджеш Шарма',
          flag: '🇮🇳',
          country: 'Индия (Нью-Дели / Мумбаи)',
          role: 'Координатор технических хабов',
          stat: 'Партнерские полигоны ISO 9606'
        },
        {
          name: 'Бикаш Тхапа',
          flag: '🇳🇵',
          country: 'Непал (Катманду)',
          role: 'Координатор агро- и складских групп',
          stat: 'Строгий медицинский и дисциплинарный отбор'
        }
      ]
    : [
        {
          name: 'Фарход Карімов',
          flag: '🇺🇿',
          country: 'Узбекистан (Ташкент)',
          role: 'Керівник центру атестації',
          stat: '3 200+ зварювальників та будівельників атестовано'
        },
        {
          name: 'Раджеш Шарма',
          flag: '🇮🇳',
          country: 'Індія (Нью-Делі / Мумбаї)',
          role: 'Координатор технічних хабів',
          stat: 'Партнерські полігони ISO 9606'
        },
        {
          name: 'Бікаш Тхапа',
          flag: '🇳🇵',
          country: 'Непал (Катманду)',
          role: 'Координатор агро- та складських груп',
          stat: 'Суворий медичний та дисциплінарний відбір'
        }
      ];

  return (
    <section id="team" className="scroll-mt-28 py-20 bg-warm-paper border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mb-14">
          <span className="inline-block rounded-full uppercase tracking-wide bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold px-3.5 py-1 mb-3">
            {isRu ? 'ПЕРСОНАЛЬНАЯ ОТВЕТСТВЕННОСТЬ КОМАНДЫ' : 'ПЕРСОНАЛЬНА ВІДПОВІДАЛЬНІСТЬ КОМАНДИ'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {isRu ? 'Лица компании: кто отвечает за результат' : 'Обличчя компанії: хто відповідає за результат'}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isRu
              ? 'Никаких анонимных менеджеров или ботов. За каждым направлением закреплен персональный эксперт с многолетним опытом.'
              : 'Жодних анонімних менеджерів чи ботів. За кожним напрямком закріплений персональний експерт з багаторічним досвідом.'
            }
          </p>
        </div>

        {/* 5 Core Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {uaTeam.map((lead, idx) => (
            <div key={idx} className="tactile-card rounded-3xl p-6 bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`relative w-16 h-16 rounded-2xl overflow-hidden border-2 ${lead.border} shrink-0 shadow-md`}>
                    <Image src={lead.img} alt={lead.name} width={64} height={64} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-base">{lead.name}</h3>
                    <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">{lead.role}</div>
                    <div className="text-[11px] text-slate-500 font-medium">{lead.sub}</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{lead.desc}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                <span className="text-emerald-700">{lead.badge}</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[10px]">{lead.hub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Asian Hubs Network */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-3 font-bold">
            {isRu ? 'СОБСТВЕННАЯ СЕТЬ ТЕХНИЧЕСКИХ ХАБОВ В АЗИИ' : 'ВЛАСНА МЕРЕЖА ТЕХНІЧНИХ ХАБІВ В АЗІЇ'}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {asiaHubs.map((hub, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{hub.flag}</span>
                  <span className="font-extrabold text-white text-sm">{hub.name}</span>
                </div>
                <div className="text-xs text-slate-300 font-medium">{hub.country}</div>
                <div className="text-[11px] text-slate-400">{hub.role}</div>
                <div className="text-[11px] text-emerald-400 font-bold pt-1">{hub.stat}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
