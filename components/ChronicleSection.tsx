import React from 'react';
import Image from 'next/image';

export default function ChronicleSection({ locale = 'uk' }: { locale?: 'uk' | 'ru' }) {
  const isRu = locale === 'ru';

  const steps = isRu
    ? [
        {
          day: 'ДЕНЬ 1 · КИЕВ',
          title: 'ТЗ и Аудит',
          desc: 'Роман Яновский принимает спецификацию на арматуру, согласовывает критерии и запускает отбор в Ташкенте.',
          img: '/images/chronicle/step1_audit.jpg'
        },
        {
          day: 'ДЕНЬ 4 · ТАШКЕНТ',
          title: 'Trade-Test на полигоне',
          desc: 'Фарход Каримов тестирует скорость вязки арматуры (180 кг/час). Видеовизитки загружены в Личный кабинет.',
          img: '/images/chronicle/step2_tashkent.jpg'
        },
        {
          day: 'ДЕНЬ 9 · КИЕВ',
          title: '100% белое оформление',
          desc: 'Владлен Пономаренко получает приказ ДЦЗ на разрешение на труд и организует вклейку виз D-04 в Консульстве.',
          img: '/images/chronicle/step3_lawyer.jpg'
        },
        {
          day: 'ДЕНЬ 17 · КИШИНЕВ',
          title: 'Зеленый коридор',
          desc: 'Бригада прилетает за свой счет. Станислав Лухменко лично встречает группу и сопровождает спецрейс в Киев.',
          img: '/images/chronicle/step4_transit.jpg'
        },
        {
          day: 'ДЕНЬ 21 · ОБЪЕКТ',
          title: 'Выход на смену',
          desc: 'Денис Кравченко расселяет людей. В 08:00 бригада приступает к работе. Оплата комиссии — строго по факту выхода.',
          img: '/workers/builder_ilkhom_34.jpg',
          highlight: true
        }
      ]
    : [
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
            {isRu ? 'РЕАЛЬНЫЙ БИЗНЕС-КЕЙС' : 'РЕАЛЬНИЙ БІЗНЕС-КЕЙС'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {isRu 
              ? 'Фотохроника рекорда: 21 день от заявки до первой смены'
              : 'Фотохроніка рекорду: 21 день від заявки до першої зміни'
            }
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {isRu
              ? 'Кейс экстренного спасения производственного графика строительного генподрядчика в Киеве. За 21 календарный день доставлена и легализована группа из 12 арматурщиков и 6 сварщиков.'
              : 'Кейс екстреного порятунку виробничого графіка будівельного генпідрядника в Києві. За 21 календарний день доставлено та легалізовано групу з 12 арматурників та 6 зварювальників.'
            }
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
                <div className="relative rounded-xl overflow-hidden h-36 mb-3 border border-slate-200">
                  <Image 
                    src={step.img} 
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/90 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                    {step.day}
                  </div>
                </div>

                <h3 className="font-extrabold text-slate-900 text-base mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>

              {step.highlight && (
                <div className="mt-3 pt-2 border-t border-emerald-300 text-[11px] font-bold text-emerald-800 flex items-center gap-1">
                  <span>✓</span>
                  <span>{isRu ? 'Оплата комиссии по факту' : 'Оплата комісії за фактом'}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
