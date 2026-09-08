import { GoogleGenerativeAI } from '@google/generative-ai';

export interface ModelConfig {
  id: string;
  name: string;
  rpmLimit: number;
  rpdLimit: number;
  currentRpd: number;
  rpmWindow: number[];
  isExhausted: boolean;
}

export class ModelRouterService {
  private static apiKey = process.env.GEMINI_API_KEY || '';
  private static genAI = new GoogleGenerativeAI(ModelRouterService.apiKey);
  private static lastResetDate: string = new Date().toISOString().slice(0, 10);

  // Каскад моделей за пріоритетом (підтримка як 2026 серій, так і чинних моделей Google AI Studio)
  private static models: ModelConfig[] = [
    { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', rpmLimit: 15, rpdLimit: 1500, currentRpd: 0, rpmWindow: [], isExhausted: false },
    { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', rpmLimit: 15, rpdLimit: 1500, currentRpd: 0, rpmWindow: [], isExhausted: false },
    { id: 'gemini-1.5-flash', name: 'Gemini 1.5 Flash', rpmLimit: 15, rpdLimit: 1500, currentRpd: 0, rpmWindow: [], isExhausted: false },
    { id: 'gemini-3.5-flash', name: 'Gemini 3.5 Flash', rpmLimit: 15, rpdLimit: 1500, currentRpd: 0, rpmWindow: [], isExhausted: false },
    { id: 'gemini-2.5-flash-lite', name: 'Gemini 2.5 Flash Lite', rpmLimit: 15, rpdLimit: 1500, currentRpd: 0, rpmWindow: [], isExhausted: false },
    { id: 'gemini-1.5-pro', name: 'Gemini 1.5 Pro', rpmLimit: 10, rpdLimit: 1000, currentRpd: 0, rpmWindow: [], isExhausted: false },
    { id: 'gemini-3.5-flash-lite', name: 'Gemini 3.5 Flash Lite', rpmLimit: 15, rpdLimit: 1500, currentRpd: 0, rpmWindow: [], isExhausted: false },
    { id: 'gemini-3.1-flash-lite', name: 'Gemini 3.1 Flash Lite', rpmLimit: 15, rpdLimit: 1500, currentRpd: 0, rpmWindow: [], isExhausted: false }
  ];

  /**
   * Оновлення ключа, якщо він переданий динамічно
   */
  public static setApiKey(key: string) {
    if (key && key !== ModelRouterService.apiKey) {
      ModelRouterService.apiKey = key;
      ModelRouterService.genAI = new GoogleGenerativeAI(key);
    }
  }

  /**
   * Отримання поточної телеметрії каскаду
   */
  public static getTelemetry(): { models: { name: string; currentRpd: number; rpdLimit: number; isExhausted: boolean }[] } {
    return {
      models: ModelRouterService.models.map(m => ({
        name: m.name,
        currentRpd: m.currentRpd,
        rpdLimit: m.rpdLimit,
        isExhausted: m.isExhausted
      }))
    };
  }

  /**
   * Розумне виконання генерації з автоматичним каскадом
   */
  public static async generateContentWithFailover(
    prompt: string,
    fallbackFn: () => string,
    customApiKey?: string
  ): Promise<{ text: string; modelUsed: string }> {
    ModelRouterService.checkMidnightReset();

    if (customApiKey) {
      ModelRouterService.setApiKey(customApiKey);
    } else if (process.env.GEMINI_API_KEY) {
      ModelRouterService.setApiKey(process.env.GEMINI_API_KEY);
    }

    if (!ModelRouterService.apiKey) {
      return { text: fallbackFn(), modelUsed: 'Smart Core Engine (Deterministic Fallback)' };
    }

    const now = Date.now();

    for (const m of ModelRouterService.models) {
      // 1. Очищення вікна RPM (старше 60 секунд)
      m.rpmWindow = m.rpmWindow.filter(t => now - t < 60 * 1000);

      // 2. Перевірка вичерпання денного ліміту
      if (m.isExhausted || m.currentRpd >= m.rpdLimit) continue;

      // 3. Проактивне запобігання 429 по RPM
      if (m.rpmWindow.length >= m.rpmLimit) continue;

      try {
        const modelInstance = ModelRouterService.genAI.getGenerativeModel({ model: m.id });
        const result = await modelInstance.generateContent(prompt);
        const text = result.response.text();

        // Фіксація успішного запиту
        m.currentRpd += 1;
        m.rpmWindow.push(now);

        return { text, modelUsed: m.name };
      } catch (err: any) {
        const errMsg = err?.message || String(err);
        
        // Блокування моделі на сьогодні при 429
        if (errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED')) {
          m.isExhausted = true;
        }
        // Перехід до наступної моделі в циклі
      }
    }

    // Якщо всі моделі вичерпані або недоступні — повертаємо якісний оффлайн-движок
    return {
      text: fallbackFn(),
      modelUsed: 'Smart Core Engine (Deterministic Fallback)'
    };
  }

  private static checkMidnightReset() {
    const today = new Date().toISOString().slice(0, 10);
    if (today !== ModelRouterService.lastResetDate) {
      ModelRouterService.lastResetDate = today;
      for (const m of ModelRouterService.models) {
        m.currentRpd = 0;
        m.isExhausted = false;
        m.rpmWindow = [];
      }
    }
  }
}
