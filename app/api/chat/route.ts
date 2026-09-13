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

    // If client just provided a phone number, forward lead to CRM
    if (profile.phone) {
      try {
        const crmPayload = {
          name: profile.name || 'Клієнт з онлайн-чату',
          phone: profile.phone,
          company: profile.location ? `ТОВ (${profile.location})` : 'ТОВ (з чату)',
          headcount: parseInt(String(profile.headcount || '').replace(/\D/g, '')) || 5,
          message: `[AI-Чат] Спеціальність: ${profile.trade || 'Не вказано'}. Кількість: ${profile.headcount || 'Не вказано'}. Місто: ${profile.location || 'Не вказано'}. Месенджер: WhatsApp/Telegram. Діалог: ${formattedHistory.slice(-300)}`,
          utm_source: 'ai_chat_coordinator',
          utm_campaign: 'leadgen_text_chat',
          utm_medium: 'whatsapp_telegram_request'
        };
        fetch('https://online-crm.onrender.com/api/webhooks/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(crmPayload)
        }).catch(() => {});
      } catch (crmErr) {
        console.warn('CRM dispatch error:', crmErr);
      }
    }

    const clientNameStr = profile.name ? `Ім'я клієнта: ${profile.name}` : "Ім'я клієнта: ще не названо (запитай як звертатися, коли це доречно)";
    const tradeStr = profile.trade ? `Потрібна спеціальність: ${profile.trade} (ВЖЕ ВІДОМО, НЕ ПИТАЙ ЗНОВУ!)` : "Спеціальність: ще не уточнено";
    const countStr = profile.headcount ? `Кількість робітників: ${profile.headcount} (ВЖЕ ВІДОМО, НЕ ПИТАЙ ЗНОВУ!)` : "Кількість: ще не уточнено";
    const locStr = profile.location ? `Місто/регіон: ${profile.location}` : "Місто: невідомо";
    const phoneStr = profile.phone ? `Телефон клієнта: ${profile.phone} (ОТРИМАНО! Більше не проси телефон, просто підтверди і подякуй!)` : "Телефон: ще не залишено";

    const systemPrompt = `Ти — Оксана Ковальчук, провідний B2B-координатор міжнародного холдингу Recruiter I Club (Україна, 2026 рік).
Твоя мета — консультувати клієнта (директора заводу, забудовника, агрохолдинг, HRD) у живому природному діалозі текстом, як у WhatsApp або Telegram, і кваліфікувати його на отримання детального кошторису менеджера.

# СУВОРІ ЗАЛІЗНІ ПРАВИЛА:
1. КАТЕГОРИЧНО ЖОДНИХ КНОПОК! Не пропонуй жодних кнопок вибору, посилань чи меню. Спілкування тільки живим людським текстом у чаті.
2. ЗАПИТ ТЕЛЕФОНУ (ГОЛОВНИЙ КРОК ВОРОНКИ):
   Коли з'ясовано базову потребу (або коли клієнт запитує про ціну, кошторис, строки, анкети чи гарантії):
   ТИ САМА прямо у тексті просиш надати номер телефону і ОБОВ'ЯЗКОВО кажеш, що на ньому має бути WhatsApp або Telegram:
   «Вкажіть, будь ласка, ваш контактний номер телефону — обов'язково щоб на ньому був WhatsApp або Telegram. Я сформую попередній кошторис та передам куратору для зв'язку!»
   Завжди наголошуй фразу: «обов'язково щоб на ньому був WhatsApp або Telegram».
3. КОЛИ КЛІЄНТ НАПИСАВ НОМЕР ТЕЛЕФОНУ:
   Дякуєш по імені (якщо відомо):
   «Дякую${profile.name ? ', ' + profile.name : ''}! Номер отримано. Я вже формую розрахунок та передала параметри черговому інженеру з підбору. Ми зв'яжемося з вами у WhatsApp/Telegram протягом 10–15 хвилин!»
   Більше питань не задаєш!
4. БАЗА ЗНАНЬ ТА ДОЗВОЛЕНІ КРАЇНИ (ТІЛЬКИ ЦІ 5 КРАЇН):
   - Узбекистан: 21–30 днів під ключ (безвіз, російськомовні, будівництво, заводи, склади, агро).
   - Індія: 60–75 днів (віза D-04, висококласні зварювальники TIG/MIG 6G, оператори ЧПУ, швачки).
   - Непал: 60–75 днів (віза D-04, висока дисципліна, склади, харчові фабрики).
   - Бангладеш: легка промисловість, текстиль, пакування.
   - Азербайджан: водії навантажувачів, логістика, агро.
5. КАТЕГОРИЧНА ЗАБОРОНА КИТАЮ:
   - З Китаю персонал НЕ возимо через міграційні бар'єри!
   - Якщо питають про Китай: чітко скажи «Ні, з Китаю ми робітників не залучаємо через візові обмеження. Натомість закриваємо ці вакансії перевіреними майстрами з Узбекистану (21–30 днів) та Індії з аналогічною або вищою кваліфікацією».
6. ZERO PRICING (ЖОДНИХ ЦІН У ЧАТІ):
   - Жодних цін чи цифр прайсів у чаті. Кошторис індивідуальний, комісія сплачується ВИКЛЮЧНО В КІНЦІ — після виходу людей на зміну.
7. СТАТТЯ 23 ЗУ:
   - 100% захист від мобілізації. Іноземці не підлягають військовому обліку в ТЦК.
8. СТИСЛІСТЬ:
   - Максимум 2-3 коротких речення (до 25-35 слів).
9. ПАМ'ЯТЬ КОНТЕКСТУ:
   - Якщо клієнт вже назвав кількість або спеціальність — НІКОЛИ не перепитуй знову!
   - Якщо відоме ім'я клієнта — звертайся по імені!

# ВІДОМО ПРО КЛІЄНТА:
- ${clientNameStr}
- ${tradeStr}
- ${countStr}
- ${locStr}
- ${phoneStr}

# ІСТОРІЯ ПЕРЕПИСКИ В ЦЬОМУ ЧАТІ:
${formattedHistory}

# НОВЕ ПОВІДОМЛЕННЯ КЛІЄНТА:
"${message}"

Сформулюй лаконічну відповідь координатора Оксани (2-3 речення, без кнопок, жива мова, сама проси номер телефону з обов'язковим WhatsApp/Telegram):`;

    // Розумний детермінований fallback
    const fallbackFn = () => {
      const lower = message.toLowerCase();

      // Клієнт назвав телефон
      if (profile.phone || /\b0\d{9}\b|\+?\d{10,13}\b/.test(lower)) {
        const namePart = profile.name ? `, ${profile.name}` : '';
        return `Дякую${namePart}! Номер отримала. Передала параметри черговому координатору проєкту — ми зв'яжемося з вами у WhatsApp/Telegram протягом 10–15 хвилин з детальним розрахунком.`;
      }

      // Перевірка на Китай
      if (lower.includes('кита') || lower.includes('китай') || lower.includes('china')) {
        return `Ні, з Китаю ми робітників не залучаємо через візові обмеження. Натомість ми закриваємо ці вакансії майстрами з Узбекистану (21–30 днів) та Індії. Вкажіть ваш номер телефону (обов'язково щоб на ньому був WhatsApp або Telegram) — надішлю умови та анкети!`;
      }

      // Запит про ціну / кошторис
      if (lower.includes('цін') || lower.includes('вартіст') || lower.includes('скільки') || lower.includes('цена') || lower.includes('стоимость') || lower.includes('кошторис') || lower.includes('прайс')) {
        const howMany = profile.headcount ? `на ${profile.headcount}` : '';
        const namePart = profile.name ? `${profile.name}, ` : '';
        return `${namePart}кошторис ${howMany} розраховується індивідуально, а комісію ви сплачуєте **виключно в кінці** — після виходу людей на зміну.\n\nВкажіть ваш номер телефону (обов'язково з WhatsApp або Telegram) — я розрахую кошторис і передам координатору!`;
      }

      // Захист від мобілізації
      if (lower.includes('мобіліз') || lower.includes('призов') || lower.includes('тцк') || lower.includes('ст 23') || lower.includes('стаття 23')) {
        return `Іноземні працівники мають 100% захист від мобілізації за ст. 23 ЗУ (ТЦК не ставить їх на облік). Ваші зміни захищені 24/7. Вкажіть ваш номер телефону з WhatsApp або Telegram — надішлю юридичне роз'яснення та кошторис.`;
      }

      // Строки прибуття
      if (lower.includes('строк') || lower.includes('термін') || lower.includes('время') || lower.includes('коли') || lower.includes('когда') || lower.includes('21')) {
        return `З Узбекистану перша група виходить на зміну за **21–30 днів** під ключ (безвіз). З Індії з візою D-04 — 60–75 днів. Залиште ваш номер телефону (обов'язково з WhatsApp або Telegram) — надішлю графік заїзду!`;
      }

      // Якщо відома спеціальність або кількість
      if (profile.trade || profile.headcount) {
        const nameGreeting = profile.name ? `${profile.name}, прийнято` : 'Прийнято';
        return `${nameGreeting}! Підберемо персонал з відеозвітами практичних іспитів. Вкажіть, будь ласка, ваш номер телефону (обов'язково щоб на ньому був WhatsApp або Telegram) — надішлю добірку кандидатів!`;
      }

      return `Вітаю! Я Оксана, координатор проєктів Recruiter I Club. Підкажу наявність робітників з Азії зі 100% захистом від призову (ст. 23 ЗУ). Яка спеціальність потрібна і скільки людей?`;
    };

    const { text, modelUsed } = await ModelRouterService.generateContentWithFailover(
      systemPrompt,
      fallbackFn,
      customApiKey
    );

    // Record assistant reply into session
    ChatSessionService.addAssistantMessage(currentSessionId, text);

    return NextResponse.json({
      reply: text,
      quickReplies: [],
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
