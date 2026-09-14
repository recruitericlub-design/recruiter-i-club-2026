import React from 'react';

export default function ChronicleSection() {
  const steps = [
    {
      day: 'ДЕНЬ 1 · КИЇВ',
      title: 'ТЗ та Аудит',
      desc: 'Роман Яновський приймає специфікацію на арматуру, погоджує критерії та запускає відбір у Ташкенті.',
      img: '/images/chronicle/step1_audit.jpg'
    },
    {
      day: 'ДЕНЬ 4 · ТАШКЕНТ',
      title: 'Trade-Test на полігоні',
      desc: 'Фарход Карімов тестує швидкість в’язки арматури (180 кг/год). Відеовізитки завантажено в Особистий кабінет.',
      img: '/images/chronicle/step2_tashkent.jpg'
    },
    {
      day: 'ДЕНЬ 9 · КИЇВ',
      title: '100% біле оформлення',
      desc: 'Владлен Пономаренко отримує наказ ДЦЗ на дозвіл праці та організовує вклейку віз D-04 у Консульстві.',
      img: '/images/chronicle/step3_lawyer.jpg'
    },
    {
      day: 'ДЕНЬ 17 · КИШИНІВ',
      title: 'Зелений коридор',
      desc: 'Бригада прилітає за власний кошт. Станіслав Лухменко особисто зустрічає групу та веде спецрейс до Києва.',
      img: '/images/chronicle/step4_transit.jpg'
    },
    {
      day: 'ДЕНЬ 21 · ОБ’ЄКТ',
      title: 'Вихід на зміну',
      desc: 'Денис Кравченко поселяє людей. О 08:00 бригада стає до роботи. Оплата комісії агенції — строго за фактом виходу.',
      img: '/workers/builder_ilkhom_34.jpg',
      highlight: true
    }
  ];

  return (
    <section id="chronicle" className="scroll-mt-28 py-20 bg-white border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mb-14">
          <span className="inline-block rounded-full uppercase tracking-wide bg-amber-100 text-amber-900 border border-amber-300 text-xs font-extrabold tracking-wide px-3.5 py-1 mb-3">
            РЕАЛЬНИЙ БІЗНЕС-КЕЙС
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Фотохроніка рекорду: 21 день від заявки до першої зміни
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Кейс екстреного порятунку виробничого графіка будівельного генпідрядника в Києві. За 21 календарний день доставлено та легалізовано групу з 12 арматурників та 6 зварювальників.
          </p>
        </div>

        {/* 5 Photographic Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`tactile-card rounded-2xl p-4 flex flex-col justify-between ${step.highlight ? 'border-emerald-400 bg-emerald-50/40' : ''}`}
            >
              <div>
                <div className={`h-36 rounded-xl overflow-hidden mb-3 border ${step.highlight ? 'border-emerald-200' : 'border-slate-200'}`}>
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className={`text-[10px] font-extrabold tracking-wide mb-1 ${step.highlight ? 'text-emerald-800' : 'text-emerald-700'}`}>
                  {step.day}
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
