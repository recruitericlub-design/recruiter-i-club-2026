import React from 'react';

export default function TeamSection() {
  const uaTeam = [
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

  const asiaHubs = [
    {
      name: 'Фарход Карімов',
      flag: '🇺🇿',
      city: 'ТАШКЕНТ · УЗБЕКИСТАН',
      role: 'Керівник центру тестування професій',
      desc: 'Керує сертифікованим полігоном перевірки кваліфікації в Ташкенті. Організовує реальні практичні випробування: зварювання труб під тиском, монолітну опалубку, роботу на токарних верстатах. Знімає відеозвіт виконання робіт.',
      img: '/team/farkhod_karimov.jpg',
      badge: '● 450+ кандидатів щомісяця',
      hub: 'Trade-Test Lab',
      border: 'border-indigo-500'
    },
    {
      name: 'Раджеш Кумар',
      flag: '🇮🇳',
      city: 'НЬЮ-ДЕЛІ · ІНДІЯ',
      role: 'Координатор відбору та медконтролю',
      desc: 'Відповідає за проходження міжнародного медичного чекапу (флюорографія, гепатити, ВІЛ, токсикологія) у клініках, акредитованих МОЗ, перевірку біометричних паспортів та довідок про несудимість перед подачею до Посольства.',
      img: '/team/rajesh_kumar.jpg',
      badge: '● 100% медична верифікація',
      hub: 'Screening Hub',
      border: 'border-emerald-600'
    },
    {
      name: 'Кабір Ахмед',
      flag: '🇧🇩',
      city: 'ДАККА · БАНГЛАДЕШ',
      role: 'Керівник складської логістики та агро',
      desc: 'Спеціалізується на підборі фізично витривалого персоналу для автоматизованих складів класу «А», сортувальних ліній, конвеєрів та тепличних комбінатів. Жорсткий психологічний скоринг на дисциплінованість.',
      img: '/team/kabir_ahmed.jpg',
      badge: '● Контракти на 1–2 роки',
      hub: 'Logistics Hub',
      border: 'border-amber-600'
    }
  ];

  return (
    <section id="team" className="scroll-mt-28 py-20 bg-warm-paper border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 rounded-full uppercase tracking-wide bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold px-3.5 py-1 mb-3">
            <span>👥</span> КОМАНДА ТА ОСОБИСТИЙ КОНТРОЛЬ · 8 КЛЮЧОВИХ СПЕЦІАЛІСТІВ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Хто особисто відповідає за кожен етап результату
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ми не віртуальні посередники і не безіменні агрегатори. Керівники та профільні фахівці супроводжують увесь ланцюг: від практичного іспиту на полігонах в Азії до поселення та першої зміни в Україні.
          </p>
        </div>

        {/* Ukrainian HQ */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-base">🇺🇦</span>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Оперативний штаб супроводу в Україні (Київ)</h3>
              <p className="text-xs text-slate-500 font-medium">БЦ «Олімпійський», 14 поверх · Юридичний, логістичний та клієнтський супровід 24/7</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uaTeam.map((member, idx) => (
              <div key={idx} className="card-3d rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 ${member.border} shrink-0 shadow-md`}>
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs"></span>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wide bg-slate-100 text-slate-800 border border-slate-200 mb-1">
                        {member.role}
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-lg leading-tight">{member.name}</h4>
                      <div className="text-[11px] text-slate-600 font-semibold mt-0.5">{member.sub}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {member.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold tracking-wide">
                  <span className="text-emerald-700 font-bold">{member.badge}</span>
                  <span className="text-slate-400">{member.hub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Asian Hubs */}
        <div>
          <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-200">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-100 text-amber-700 font-bold text-base">🌏</span>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Міжнародні центри практичного скорингу в країнах Азії</h3>
              <p className="text-xs text-slate-500 font-medium">Ташкент · Нью-Делі · Дакка · Власні технічні полігони тестування кваліфікації</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {asiaHubs.map((member, idx) => (
              <div key={idx} className="card-3d rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 ${member.border} shrink-0 shadow-md`}>
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs"></span>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold tracking-wide bg-amber-50 text-amber-900 border border-amber-200 mb-1">
                        {member.flag} {member.city}
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-lg leading-tight">{member.name}</h4>
                      <div className="text-[11px] text-slate-600 font-semibold mt-0.5">{member.role}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {member.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold tracking-wide">
                  <span className="text-emerald-700 font-bold">{member.badge}</span>
                  <span className="text-slate-400">{member.hub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
