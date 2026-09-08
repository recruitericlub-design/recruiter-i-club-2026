'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, Key, RefreshCw, Zap } from 'lucide-react';
import QuotaBookingModal from './QuotaBookingModal';

interface Message {
  role: 'assistant' | 'user';
  content: string;
  modelUsed?: string;
}

export default function AiConsultantWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Вітаю! Я інтелектуальний AI-радник Recruiter I Club. Підкажу точну смету відбору (від $500/людина), терміни прибуття з 7 країн-донорів або деталі транзиту через Молдову.\n\nЗадайте питання або оберіть швидку тему нижче:',
      modelUsed: 'Smart Core Engine (Gemini Ready)'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState('Gemini 2.5 Flash');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedKey = localStorage.getItem('recruiter_gemini_api_key');
    if (savedKey) setApiKey(savedKey);
  }, []);

  const handleSaveKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('recruiter_gemini_api_key', key);
    setShowKeyInput(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          customApiKey: apiKey.trim() || undefined
        })
      });

      const data = await res.json();
      if (data.reply) {
        setMessages([
          ...newMessages,
          { role: 'assistant', content: data.reply, modelUsed: data.modelUsed }
        ]);
        if (data.modelUsed) setCurrentModel(data.modelUsed);
      } else {
        setMessages([
          ...newMessages,
          { role: 'assistant', content: 'Вибачте, виникла помилка під час обробки. Спробуйте ще раз.', modelUsed: 'Failover Engine' }
        ]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Мережева помилка зв\'язку з AI-сервером. Зверніться до чергового консультанта телефоном.', modelUsed: 'Offline Engine' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    '📊 Розрахувати вартість 15 пакувальників',
    '⏱ Які строки доставки з Індії та Узбекистану?',
    '🛡 Які гарантії заміни, якщо робітник не підійде?',
    '✈️ Як влаштований транзитний коридор через Молдову?'
  ];

  return (
    <div className="w-full rounded-2xl bg-[#090e18] border border-amber-500/25 shadow-2xl shadow-black/60 overflow-hidden flex flex-col h-[580px]">
      {/* Top Header of AI Terminal */}
      <div className="px-5 py-3.5 bg-slate-950/80 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-wide">
                Recruiter I Club AI Workforce Consultant
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-slate-400">
              <span>Каскад Google Studio:</span>
              <span className="font-mono text-amber-400/90 font-medium">
                {currentModel}
              </span>
            </div>
          </div>
        </div>

        {/* API Key configuration toggle & Quota Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowKeyInput(!showKeyInput)}
            title="Налаштувати Google Studio API Key"
            className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-amber-400 transition-colors border border-white/[0.06]"
          >
            <Key className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
          >
            <Zap className="w-3 h-3" />
            <span>Бронь €50</span>
          </button>
        </div>
      </div>

      {/* Optional Google AI Studio Key Drawer */}
      {showKeyInput && (
        <div className="px-5 py-3 bg-slate-900 border-b border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-slate-300 w-full sm:w-auto">
            <span className="font-semibold text-amber-400">Google AI Studio Key:</span>
            <span className="text-[11px] text-slate-400 block sm:inline sm:ml-2">
              (опціонально, система має вбудований роутер)
            </span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <input
              type="password"
              placeholder="AIzaSy..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400 w-full sm:w-56"
            />
            <button
              onClick={() => handleSaveKey(apiKey)}
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shrink-0"
            >
              Зберегти
            </button>
          </div>
        </div>
      )}

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex items-start gap-3 ${
              m.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {m.role === 'assistant' && (
              <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                m.role === 'user'
                  ? 'bg-amber-500 text-slate-950 font-medium ml-auto'
                  : 'bg-slate-900/90 border border-white/[0.08] text-slate-200 shadow-sm'
              }`}
            >
              {m.content}
              {m.modelUsed && m.role === 'assistant' && (
                <div className="mt-2.5 pt-2 border-t border-white/[0.06] text-[10px] text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-amber-400/80">
                    <Sparkles className="w-3 h-3" />
                    Маршрут: {m.modelUsed}
                  </span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="underline hover:text-amber-300 font-semibold"
                  >
                    Зафіксувати квоту €50 ➔
                  </button>
                </div>
              )}
            </div>
            {m.role === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-slate-200 shrink-0 mt-1">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-slate-900 border border-white/10 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce [animation-delay:0.4s]"></span>
              <span className="ml-1">Розумний роутинг аналізує запит...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="px-4 py-2 bg-slate-950/40 border-t border-white/[0.05] flex items-center gap-2 overflow-x-auto no-scrollbar">
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-amber-500/15 text-slate-300 hover:text-amber-300 border border-white/[0.06] text-[11px] font-medium transition-colors"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Field */}
      <div className="p-3 bg-slate-950 border-t border-white/[0.08]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Задайте питання про персонал, ціни, дозвіл чи строки..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold disabled:opacity-40 transition-colors shadow-md shadow-amber-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
