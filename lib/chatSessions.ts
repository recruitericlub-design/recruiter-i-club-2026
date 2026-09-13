import fs from 'fs';
import path from 'path';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ClientProfile {
  name?: string;
  headcount?: string;
  trade?: string;
  location?: string;
  phone?: string;
  messenger?: string;
}

export interface ChatSession {
  sessionId: string;
  createdAt: number;
  lastActive: number;
  profile: ClientProfile;
  messages: ChatMessage[];
}

// 30 minutes in milliseconds
const SESSION_TTL_MS = 30 * 60 * 1000;

// Storage path (works both locally and in Vercel serverless /tmp)
const STORAGE_FILE = process.env.VERCEL
  ? path.join('/tmp', 'riclub_chat_sessions.json')
  : path.join(process.cwd(), '.next', 'cache', 'riclub_chat_sessions.json');

// In-memory cache for fast access
const memoryStore = new Map<string, ChatSession>();

// Helper to ensure storage directory exists
function ensureStorageDir() {
  try {
    const dir = path.dirname(STORAGE_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch (e) {
    // Ignore in read-only environments
  }
}

// Load sessions from disk on cold start
function loadFromDisk() {
  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const raw = fs.readFileSync(STORAGE_FILE, 'utf-8');
      const data: Record<string, ChatSession> = JSON.parse(raw);
      const now = Date.now();
      for (const [id, sess] of Object.entries(data)) {
        if (now - sess.lastActive < SESSION_TTL_MS) {
          memoryStore.set(id, sess);
        }
      }
    }
  } catch (e) {
    // Ignore disk read error, rely on memoryStore
  }
}

// Save sessions to disk
function saveToDisk() {
  try {
    ensureStorageDir();
    const obj: Record<string, ChatSession> = {};
    memoryStore.forEach((sess, id) => {
      obj[id] = sess;
    });
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(obj, null, 2), 'utf-8');
  } catch (e) {
    // Ignore disk write errors in restricted environments
  }
}

// Initialize on module load
loadFromDisk();

export class ChatSessionService {
  /**
   * Cleans up sessions older than 30 minutes
   */
  public static pruneExpired(): void {
    const now = Date.now();
    let hasChanges = false;
    const toDelete: string[] = [];
    memoryStore.forEach((sess, id) => {
      if (now - sess.lastActive > SESSION_TTL_MS) {
        toDelete.push(id);
      }
    });
    if (toDelete.length > 0) {
      toDelete.forEach(id => memoryStore.delete(id));
      saveToDisk();
    }
  }

  /**
   * Retrieves or initializes a chat session
   */
  public static getOrCreate(sessionId: string): ChatSession {
    this.pruneExpired();

    let session = memoryStore.get(sessionId);
    const now = Date.now();

    if (!session) {
      session = {
        sessionId,
        createdAt: now,
        lastActive: now,
        profile: {},
        messages: []
      };
      memoryStore.set(sessionId, session);
      saveToDisk();
    } else {
      session.lastActive = now;
    }

    return session;
  }

  /**
   * Appends user message and parses any newly revealed client profile information
   */
  public static addUserMessage(sessionId: string, content: string): ChatSession {
    const session = this.getOrCreate(sessionId);
    session.messages.push({
      role: 'user',
      content,
      timestamp: Date.now()
    });
    session.lastActive = Date.now();

    // Heuristically extract profile attributes
    this.extractProfileHints(session, content);
    saveToDisk();

    return session;
  }

  /**
   * Appends assistant message to session
   */
  public static addAssistantMessage(sessionId: string, content: string): void {
    const session = this.getOrCreate(sessionId);
    session.messages.push({
      role: 'assistant',
      content,
      timestamp: Date.now()
    });
    session.lastActive = Date.now();
    saveToDisk();
  }

  /**
   * Heuristic extractor for Name, Headcount, Trade, Location, Phone
   */
  private static extractProfileHints(session: ChatSession, text: string): void {
    const p = session.profile;

    // 1. Name detection ("Мене звати Петро", "Я Олександр", "Звати Роман", "Ім'я: Сергій")
    const nameMatch = text.match(/(?:мене звати|я\s+|звати|ім['’]я|зовут|меня зовут)\s+([А-ЯA-ZІЇЄ][а-яa-zіїє]+)/i);
    if (nameMatch && nameMatch[1] && !['добрий', 'доброго', 'привіт', 'здравствуйте'].includes(nameMatch[1].toLowerCase())) {
      p.name = nameMatch[1];
    }

    // 2. Headcount detection ("10 людей", "15 робітників", "3-5 осіб", "5 человек")
    const countMatch = text.match(/(\d{1,3}(?:[–-]\d{1,3})?)\s*(?:чол|люд|осіб|робітн|працівн|человек|рабоч|спеціаліст)/i);
    if (countMatch && countMatch[1]) {
      p.headcount = countMatch[1];
    } else if (/^\d{1,3}$/.test(text.trim())) {
      p.headcount = text.trim();
    }

    // 3. Trade detection
    const lower = text.toLowerCase();
    if (lower.includes('зварювал') || lower.includes('сварщик') || lower.includes('аргон')) {
      p.trade = 'Зварювальники';
    } else if (lower.includes('пакувал') || lower.includes('упаков')) {
      p.trade = 'Пакувальники';
    } else if (lower.includes('токар') || lower.includes('чпу') || lower.includes('чпк')) {
      p.trade = 'Оператори ЧПУ / Токарі';
    } else if (lower.includes('моноліт') || lower.includes('арматур') || lower.includes('будівниц') || lower.includes('стройк')) {
      p.trade = 'Будівельники / Монолітники';
    } else if (lower.includes('склад') || lower.includes('навантажувач') || lower.includes('кар')) {
      p.trade = 'Складський персонал / Водії навантажувачів';
    } else if (lower.includes('агро') || lower.includes('ферм') || lower.includes('трактор')) {
      p.trade = 'Агросектор / Теплиці / Трактористи';
    } else if (lower.includes('швач') || lower.includes('шве')) {
      p.trade = 'Швачки / Текстиль';
    }

    // 4. Location / City detection
    const cityMatch = text.match(/(?:у|в|місто|г\.|м\.)\s+([А-ЯA-ZІЇЄ][а-яa-zіїє]+)/i);
    if (cityMatch && cityMatch[1]) {
      const possibleCity = cityMatch[1];
      if (!['мене', 'нас', 'україні', 'це', 'нашому'].includes(possibleCity.toLowerCase())) {
        p.location = possibleCity;
      }
    }

    // 5. Phone detection (flexible regex for Ukrainian and international numbers)
    const phoneMatch = text.match(/(?:\+?38)?\s*(?:\(?0\d{2}\)?|\b0\d{2}\b)\s*\d{3}[-\s]?\d{2}[-\s]?\d{2}|\b0\d{9}\b|\+?\d{10,13}\b/);
    if (phoneMatch) {
      p.phone = phoneMatch[0].replace(/[\s\(\)-]/g, '');
    }
  }

  /**
   * Formats the dialogue history into prompt context
   */
  public static getPromptContext(
    sessionId: string,
    clientHistory?: Array<{ role: 'user' | 'assistant'; content: string }>
  ): { formattedHistory: string; profile: ClientProfile } {
    const session = this.getOrCreate(sessionId);

    // Merge in client-provided history if session has fewer messages (e.g. serverless cold start)
    if (clientHistory && clientHistory.length > session.messages.length) {
      session.messages = clientHistory.map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
        timestamp: Date.now()
      }));
      // Re-scan profile from all user messages
      for (const m of session.messages) {
        if (m.role === 'user') {
          this.extractProfileHints(session, m.content);
        }
      }
      saveToDisk();
    }

    // Keep last 10 turns
    const recent = session.messages.slice(-10);

    const formattedHistory = recent.length > 0
      ? recent.map(m => `${m.role === 'user' ? 'Клієнт' : 'Оксана'}: ${m.content}`).join('\n')
      : 'Діалог тільки починається.';

    return {
      formattedHistory,
      profile: session.profile
    };
  }
}
