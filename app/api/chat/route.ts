import { NextRequest, NextResponse } from 'next/server';
import { ModelRouterService } from '@/lib/modelRouter';
import { ChatSessionService } from '@/lib/chatSessions';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, sessionId, history, customApiKey } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const currentSessionId = (typeof sessionId === 'string' && sessionId.trim())
      ? sessionId.trim()
      : 'sess_' + Date.now().toString(36);

    // Record user message into session store
    ChatSessionService.addUserMessage(currentSessionId, message);

    // Retrieve full context & profile for this user
    const { formattedHistory, profile } = ChatSessionService.getPromptContext(currentSessionId, history);

    const clientNameStr = profile.name ? `Ім'я клієнта: ${profile.name}` : "Ім'я клієнта: ще не названо (запитай як звертатися, коли це буде доречно)";
    const tradeStr = profile.trade ? `Потрібна спеціальність: ${profile.trade} (ВЖЕ ВІДОМО, НЕ ПИТАЙ ЗНОВУ!)` : "Спеціальність: ще не уточнено";
    const countStr = profile.headcount ? `Кількість робітників: ${profile.headcount} (ВЖЕ ВІДОМО, НЕ ПИТАЙ ЗНОВУ!)` : "Кількість: ще не уточнено";
    const locStr = profile.location ? `Місто/регіон: ${profile.location}` : "Місто: невідомо";

    const systemPrompt = `Ти — Оксана Ковальчук, провідний B2B-координатор міжнародного холдингу Recruiter I Club (Україна, 2026 рік).
Твоя мета — кваліфікувати B2B-клієнта (директора заводу, забудовника, агрохолдинг, HRD) у живому, дружньому та лаконічному діалозі, підводячи його до отримання детального кошторису та анкет у WhatsApp чи Telegram.

# БАЗА ЗНАНЬ ТА КРАЇНИ-ДОНОРИ (ЗАЛІЗНІ ПРАВИЛА):
1. ДОЗВОЛЕНІ КРАЇНИ (МИ ВОЗИМО ПЕРСОНАЛ ТІЛЬКИ З ЦИХ 5 КРАЇН):
   - Узбекистан: 21–30 днів під ключ (безвіз, російськомовні, будівництво, заводи, склади, агро).
   - Індія: 60–75 днів (віза D-04, висококласні зварювальники TIG/MIG 6G, оператори ЧПУ, швачки).
   - Непал: 60–75 днів (віза D-04, висока дисципліна, склади, харчові фабрики).
   - Бангладеш: легка промисловість, текстиль, пакування.
   - Азербайджан: водії навантажувачів, логістика, агро.
2. КИТАЙ ТА ІНШІ КРАЇНИ — КАТЕГОРИЧНО НІ!
   - З КИТАЮ МИ ЛЮДЕЙ НЕ ВОЗИМО через жорсткі візові обмеження.
   - Якщо клієнт питає про Китай: чітко скажи «Ні, з Китаю ми робітників не залучаємо через візові бар'єри. Натомість закриваємо потреби перевіреними майстрами з Узбекистану та Індії з такою ж чи вищою кваліфікацією».
   - З Пакистану, Африки тощо — теж НЕ возимо. Тільки 5 акредитованих країн!
3. ZERO PRICING (ЖОДНИХ ЦІН У ЧАТІ):
   - Не називай жодних цін чи тарифів.
   - Пояснюй: «Кошторис індивідуальний, а головне — нашу комісію ви сплачуєте ВИКЛЮЧНО В КІНЦІ, після прибуття людей та виходу на першу зміну».
4. СТАТТЯ 23 ЗУ:
   - 100% захист від мобілізації. Іноземці не підлягають військовому обліку в ТЦК.
5. СУВОРІСТЬ ДОВЖИНИ:
   - ВІДПОВІДЬ МАКСИМУМ 2–3 КОРОТКИХ РЕЧЕННЯ (до 25–35 слів!).
   - Ніяких довгих списків та простирадел!
6. ПАМ'ЯТЬ КОНТЕКСТУ:
   - Якщо клієнт вже назвав кількість робітників (${profile.headcount || 'не вказано'}) — НІКОЛИ не перепитуй «скільки людей»!
   - Якщо клієнт вже назвав спеціальність (${profile.trade || 'не вказано'}) — НІКОЛИ не перепитуй «яка спеціальність»!
   - Якщо відоме ім'я клієнта (${profile.name || 'не вказано'}) — звертайся до нього по імені!
7. ЗАВЖДИ ЗАКІНЧУЙ ОДНИМ ВЛУЧНИМ ЗАПИТАННЯМ:
   - Рухай діалог: дізнайся місто -> запропонуй надіслати кошторис і спитай номер для WhatsApp або Telegram.

# ВІДОМО ПРО ЦЬОГО КЛІЄНТА:
- ${clientNameStr}
- ${tradeStr}
- ${countStr}
- ${locStr}

# ІСТОРІЯ ПОПЕРЕДНЬОГО ЛИСТУВАННЯ В ЦЬОМУ ЧАТІ:
${formattedHistory}

# НОВЕ ПОВІДОМЛЕННЯ КЛІЄНТА:
"${message}"

Сформулюй лаконічну відповідь координатора Оксани (2-3 речення, жива мова, враховуючи все що відомо про клієнта):`;

    // Розумний детермінований fallback з урахуванням контексту пам'яті
    const fallbackFn = () => {
      const lower = message.toLowerCase();

      // Перевірка на Китай
      if (lower.includes('кита') || lower.includes('китай') || lower.includes('china')) {
        return `З Китаю ми робітників не залучаємо через складні візові обмеження. Проте ми швидко закриваємо ці вакансії кваліфікованими майстрами з Узбекистану (21–30 днів) та Індії. Яка саме спеціальність потрібна вашому виробництву?`;
      }

      // Перевірка на знайомство / ім'я
      if (profile.name && (lower.includes('привіт') || lower.includes('добрий') || lower.includes('здрав'))) {
        return `Вітаю вас, ${profile.name}! Рада продовжити діалог. Чим можу допомогти щодо підбору робітників сьогодні?`;
      }

      // Запит про ціну
      if (lower.includes('цін') || lower.includes('вартіст') || lower.includes('скільки') || lower.includes('цена') || lower.includes('стоимость') || lower.includes('кошторис') || lower.includes('прайс')) {
        const who = profile.trade ? profile.trade.toLowerCase() : 'робітників';
        const howMany = profile.headcount ? `на ${profile.headcount}` : '';
        const namePart = profile.name ? `${profile.name}, ` : '';
        if (profile.location) {
          return `${namePart}кошторис ${howMany} для підприємства у ${profile.location} розраховується індивідуально. Залізне правило безпеки: комісію агенції ви сплачуєте **виключно в кінці** — після виходу людей на зміну.\n\nНа який номер у WhatsApp чи Telegram надіслати файл з розрахунком?`;
        }
        return `${namePart}кошторис ${howMany} розраховується індивідуально. Залізне правило безпеки: комісію агенції ви сплачуєте **виключно в кінці** — після прибуття людей на першу зміну.\n\nВ якому місті розташоване ваше підприємство?`;
      }

      // Захист від мобілізації
      if (lower.includes('мобіліз') || lower.includes('призов') || lower.includes('тцк') || lower.includes('ст 23') || lower.includes('стаття 23')) {
        return `Іноземні громадяни мають 100% захист від мобілізації за ст. 23 ЗУ — ТЦК не ставить їх на військовий облік. Ваші зміни застраховані 24/7. На яку саме ділянку шукаєте людей?`;
      }

      // Строки прибуття
      if (lower.includes('строк') || lower.includes('термін') || lower.includes('время') || lower.includes('коли') || lower.includes('когда') || lower.includes('21')) {
        return `З Узбекистану перша група виходить на зміну за **21–30 днів** під ключ (безвіз). З Індії з візою D-04 — 60–75 днів. Наскільки терміново вам потрібні працівники?`;
      }

      // Клієнт назвав місто
      if (profile.location && !profile.phone) {
        const greeting = profile.name ? `${profile.name}, чудово!` : 'Чудово!';
        return `${greeting} Ми маємо досвід доставки робітників у ${profile.location}. Ми підготуємо детальний графік та кошторис. На який номер у WhatsApp чи Telegram надіслати розрахунок?`;
      }

      // Клієнт назвав телефон
      if (profile.phone || /\d{8,}/.test(lower)) {
        const namePart = profile.name ? `, ${profile.name}` : '';
        return `Дякую${namePart}! Номер передано черговому координатору. Ми сформуємо точний офіційний розрахунок і зв'яжемося з вами протягом 15 хвилин.`;
      }

      // Якщо відома кількість та спеціальність, ведемо на контакти
      if (profile.headcount && profile.trade) {
        const nameGreeting = profile.name ? `${profile.name}, прийнято` : 'Прийнято';
        return `${nameGreeting}! ${profile.headcount} (${profile.trade.toLowerCase()}) ми зможемо відібрати з відеозвітами trade-тестів. Напишіть ваш телефон — куди зручніше надіслати розрахунок, у WhatsApp чи Telegram?`;
      }

      return `Вітаю! Я Оксана, провідний координатор проєктів Recruiter I Club. Підкажу наявність робітників з Азії зі 100% захистом від мобілізації (ст. 23 ЗУ). На яку ділянку потрібні люди і скільки саме?`;
    };

    const { text, modelUsed } = await ModelRouterService.generateContentWithFailover(
      systemPrompt,
      fallbackFn,
      customApiKey
    );

    // Record assistant reply into session
    ChatSessionService.addAssistantMessage(currentSessionId, text);

    // Dynamic Quick Replies based on context & profile state
    let quickReplies: string[] = [];
    const lowerReply = text.toLowerCase();
    
    if (lowerReply.includes('кита')) {
      quickReplies = ["З Узбекистану (21 день)", "З Індії (зварювальники)", "Які ще країни?"];
    } else if (lowerReply.includes('whatsapp') || lowerReply.includes('telegram') || lowerReply.includes('номер') || lowerReply.includes('телефон')) {
      quickReplies = ["🟢 У WhatsApp", "🔵 У Telegram", "📞 Дзвінок координатора"];
    } else if (!profile.headcount && (lowerReply.includes('скільки робітників') || lowerReply.includes('скільки людей') || lowerReply.includes('розмір бригади'))) {
      quickReplies = ["3–5 осіб", "6–10 осіб", "15+ робітників"];
    } else if (!profile.trade && (lowerReply.includes('ділянку') || lowerReply.includes('спеціальність') || lowerReply.includes('яких саме'))) {
      quickReplies = ["🏭 Завод / Виробництво", "🏗 Будівництво", "🌾 Склад / Агро"];
    } else if (lowerReply.includes('терміново')) {
      quickReplies = ["Терміново (до 25 днів)", "Планово (1–2 місяці)"];
    }

    return NextResponse.json({
      reply: text,
      quickReplies,
      sessionId: currentSessionId,
      profile,
      modelUsed
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json({
      error: error?.message || 'Internal AI Server Error'
    }, { status: 500 });
  }
}
