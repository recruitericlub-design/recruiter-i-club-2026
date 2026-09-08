// Recruiter I Club B2B Media & Video Archive Registry
// Real proof: border transfer, arrival on manufacturing sites in Ukraine, welder & specialist trade tests

export interface ClientVideoAsset {
  id: string;
  title: string;
  category: 'transfer' | 'trade_test' | 'arrival' | 'manufacturing';
  duration: string;
  date: string;
  description: string;
  localSrc: string;
  cloudinarySrc?: string;
  poster?: string;
  badge: string;
  location: string;
}

export const CLIENT_VIDEOS: ClientVideoAsset[] = [
  {
    id: 'transfer-moldova',
    title: 'Супровід та трансфер групи робітників: Кишинів ➔ Україна',
    category: 'transfer',
    duration: '00:25 хв',
    date: 'Серпень 2026',
    description: 'Організована зустріч групи фахівців в аеропорту Кишинева, супровід куратором Recruiter I Club та комфортний спецтрансфер через кордон.',
    localSrc: '/videos/transfer_moldova_ukraine.mp4',
    badge: 'Офіційний трансфер',
    location: 'Аеропорт Кишинів ➔ Кордон Могилів-Подільський'
  },
  {
    id: 'arrival-ukraine',
    title: 'Прибуття робітників на виробничий об\’єкт в Україні',
    category: 'arrival',
    duration: '00:34 хв',
    date: 'Серпень 2026',
    description: 'Група закордонних фахівців прибула на виробничу базу замовника в Україні: поселення в гуртожиток, інструктаж та вихід на тестову зміну.',
    localSrc: '/videos/arrival_in_ukraine.mp4',
    badge: 'Вже в Україні',
    location: 'Виробничий комплекс, Україна'
  },
  {
    id: 'transfer-logistics',
    title: 'Логістичний супровід та поселення персоналу',
    category: 'transfer',
    duration: '00:19 хв',
    date: 'Серпень 2026',
    description: 'Повний контроль маршруту: від перетину кордону до реєстрації в міграційній службі та підписання трудових договорів.',
    localSrc: '/videos/transfer_logistics_group.mp4',
    badge: 'Логістика 24/7',
    location: 'Україна'
  },
  {
    id: 'welder-test-1',
    title: 'Trade Test: Атестація напівавтоматичного зварювання (MIG/MAG)',
    category: 'trade_test',
    duration: '00:28 хв',
    date: 'Серпень 2026',
    description: 'Практична перевірка формування шва під наглядом технічного експерта перед формуванням виїзної групи.',
    localSrc: '/work-samples/welder_trade_test_1.mp4',
    badge: 'Відео Trade Test',
    location: 'Екзаменаційний цех (Азійський хаб)'
  },
  {
    id: 'welder-test-2',
    title: 'Trade Test: Контроль якості та міцності зварного з\’єднання',
    category: 'trade_test',
    duration: '00:38 хв',
    date: 'Серпень 2026',
    description: 'Детальний макрозапис катета шва та результату механічного випробування зразка за європейським стандартом.',
    localSrc: '/work-samples/welder_trade_test_2.mp4',
    badge: 'Контроль ВТК',
    location: 'Атестаційна лабораторія'
  },
  {
    id: 'assembly-line-test',
    title: 'Trade Test: Слюсарно-складальні роботи та швидкість операцій',
    category: 'trade_test',
    duration: '00:44 хв',
    date: 'Серпень 2026',
    description: 'Тестування моторики, дотримання техніки безпеки та нормативу часу на механоскладальній ділянці.',
    localSrc: '/work-samples/assembly_line_test.mp4',
    badge: 'Атестація лінії',
    location: 'Виробнича ділянка хабу'
  }
];

export const WORK_SAMPLE_PHOTOS = [
  {
    src: '/work-samples/photo_2026-08-24_15-37-22.jpg',
    title: 'Атестований майстер-зварювальник після успішного іспиту',
    date: 'Серпень 2026'
  },
  {
    src: '/work-samples/photo_2026-08-24_15-37-31.jpg',
    title: 'Зразок виконання стикового шва за стандартом ISO 9606',
    date: 'Серпень 2026'
  },
  {
    src: '/work-samples/photo_2026-08-24_15-37-39.jpg',
    title: 'Контроль геометрії зразка за допомогою цифрового інструменту',
    date: 'Серпень 2026'
  }
];
