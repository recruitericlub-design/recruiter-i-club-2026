'use client';

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { 
  Send, Bot, User, Sparkles, X, MessageSquare, Phone, 
  CheckCircle2, ArrowRight, Minimize2, ExternalLink
} from 'lucide-react';
import QuotaBookingModal from './QuotaBookingModal';

interface ChatMessage {
  role: 'assistant' | 'user';
  content: string;
  time?: string;
  quickReplies?: string[];
}

export default function FloatingLeadBar() {
  const pathname = usePathname();
  const isRu = pathname?.startsWith('/ru');

  // Start with 'teaser' mode so Oksana is visible to the visitor
  const [widgetState, setWidgetState] = useState<'teaser' | 'open' | 'collapsed'>('teaser');
  const [isTypingInitial, setIsTypingInitial] = useState(true);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialGreeting = isRu
    ? '👋 Здравствуйте! Я Оксана, ведущий координатор Recruiter I Club.\n\nНа какой участок и сколько рабочих требуется предприятию? Сориентирую по срокам прибытия и наличию людей (ст. 23 ЗУ — 100% защита от мобилизации).'
    : '👋 Вітаю! Я Оксана, провідний координатор Recruiter I Club.\n\nНа яку ділянку та скільки робітників потрібно підприємству? Зорієнтую по строках прибуття та наявності людей (ст. 23 ЗУ — 100% захист від мобілізації).';

  const defaultQuickReplies = isRu
    ? ['🏭 Завод / Производство', '🏗 Строительство', '🌾 Склад / Агро', '💬 Задать вопрос']
    : ['🏭 Завод / Виробництво', '🏗 Будівництво', '🌾 Склад / Агро', '💬 Задати питання'];

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: initialGreeting,
      time: 'щойно',
      quickReplies: defaultQuickReplies
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const playWhatsAppSound = () => {
    try {
      const audio = new Audio('/audio/whatsapp_notification.mp3');
      audio.volume = 0.85;
      const promise = audio.play();
      if (promise !== undefined) {
        promise
          .then(() => setHasPlayedSound(true))
          .catch(() => {
            // Audio autoplay blocked by browser policy, will play on next click
          });
      }
    } catch (e) {}
  };

  // Entrance sequence: typing for 1.2s, then reveal message & try audio
  useEffect(() => {
    if (pathname?.startsWith('/portal')) return;

    // Show typing simulation for 1.2s then reveal
    const timer = setTimeout(() => {
      setIsTypingInitial(false);
      playWhatsAppSound();
    }, 1200);

    // Also attach a one-time interaction listener to play sound on first user touch/click
    const handleFirstInteraction = () => {
      if (!hasPlayedSound) {
        playWhatsAppSound();
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [pathname, hasPlayedSound]);

  // Auto-scroll inside chat
  useEffect(() => {
    if (widgetState === 'open') {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading, widgetState]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = (queryText || input).trim();
    if (!textToSend || loading) return;

    // Ensure audio plays and window is open
    playWhatsAppSound();
    setWidgetState('open');

    const newMsgs: ChatMessage[] = [
      ...messages,
      { 
        role: 'user', 
        content: textToSend, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
      }
    ];
    setMessages(newMsgs);
    if (!queryText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          sessionId: typeof window !== 'undefined' ? (sessionStorage.getItem('riclub_portal_session_id') || 'portal_' + Date.now()) : undefined,
          history: newMsgs.slice(-8)
        })
      });

      const data = await res.json();
      if (data.reply) {
        playWhatsAppSound();
        setMessages([
          ...newMsgs,
          {
            role: 'assistant',
            content: data.reply,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            quickReplies: data.quickReplies && data.quickReplies.length > 0 ? data.quickReplies : undefined
          }
        ]);
      } else {
        setMessages([
          ...newMsgs,
          {
            role: 'assistant',
            content: isRu 
              ? 'Спасибо! Передала ваш запрос старшему менеджеру. Оставьте ваш телефон с WhatsApp/Telegram для оперативной связи.' 
              : 'Дякую! Передала ваш запит старшому менеджеру. Залиште ваш телефон з WhatsApp/Telegram для оперативного зв\'язку.',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      }
    } catch (err) {
      setMessages([
        ...newMsgs,
        {
          role: 'assistant',
          content: isRu 
            ? 'Для быстрого расчета стоимости и получения резюме звоните на нашу горячую линию: +380 (44) 299-48-20 или пишите в Telegram.' 
            : 'Для швидкого розрахунку вартості та отримання резюме телефонуйте на нашу гарячу лінію: +380 (44) 299-48-20 або пишіть у Telegram.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = () => {
    setWidgetState('collapsed');
  };

  if (pathname?.startsWith('/portal')) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 max-w-[390px] w-[calc(100%-2rem)] select-none">
        
        {/* State 1: Proactive Teaser Speech Bubble (Visible on site entry) */}
        {widgetState === 'teaser' && (
          <div className="bg-[#0b1324]/95 border-2 border-amber-500/40 rounded-3xl p-5 shadow-2xl shadow-black/80 backdrop-blur-xl text-white relative animate-fadeIn transition-all">
            
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div 
                onClick={() => { setWidgetState('open'); playWhatsAppSound(); }} 
                className="flex items-center gap-3 cursor-pointer group"
              >
                <div className="relative">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 shadow-md">
                    <img
                      src="/team/oksana_kovalchuk.jpg"
                      alt="Оксана Ковальчук"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/logo/riclub_gold_seal_3d.png';
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0b1324] animate-pulse"></span>
                </div>
                <div>
                  <div className="font-black text-xs text-white flex items-center gap-1.5">
                    <span>Оксана Ковальчук</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-amber-400/20 text-amber-300 rounded font-bold">B2B AI</span>
                  </div>
                  <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>{isRu ? 'В сети · отвечает за 30 сек' : 'В мережі · відповідає за 30 сек'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDismiss}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition cursor-pointer"
                title={isRu ? 'Свернуть' : 'Згорнути'}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content: Typing vs Speech Bubble */}
            {isTypingInitial ? (
              <div className="py-3 px-4 bg-white/5 rounded-2xl flex items-center gap-2.5 text-xs text-emerald-300">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </span>
                <span className="font-medium text-[11px] text-slate-300">
                  {isRu ? 'Оксана печатает сообщение...' : 'Оксана друкує повідомлення...'}
                </span>
              </div>
            ) : (
              <div className="space-y-3">
                <div 
                  onClick={() => { setWidgetState('open'); playWhatsAppSound(); }} 
                  className="cursor-pointer"
                >
                  <p className="text-xs text-slate-100 leading-relaxed font-normal whitespace-pre-line hover:text-white transition-colors">
                    {initialGreeting}
                  </p>
                </div>

                {/* Quick 1-click Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {defaultQuickReplies.map((pill, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(pill)}
                      className="px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/30 text-[11px] font-bold transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      {pill}
                    </button>
                  ))}
                </div>

                {/* Quick Inline Input */}
                <div className="flex gap-1.5 pt-1">
                  <input
                    type="text"
                    placeholder={isRu ? 'Специальность или количество...' : 'Спеціальність або кількість...'}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendMessage();
                    }}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-amber-400"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition shadow-md flex items-center justify-center cursor-pointer active:scale-95"
                  >
                    ➔
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* State 2: Full Interactive Chat Dialog */}
        {widgetState === 'open' && (
          <div className="bg-[#0b1324] border-2 border-amber-500/40 rounded-3xl shadow-2xl shadow-black/90 backdrop-blur-2xl text-white overflow-hidden flex flex-col h-[530px] animate-fadeIn">
            
            {/* Header */}
            <div className="px-4 py-3.5 bg-slate-950/95 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-amber-400 shrink-0">
                    <img
                      src="/team/oksana_kovalchuk.jpg"
                      alt="Оксана Ковальчук"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/logo/riclub_gold_seal_3d.png';
                      }}
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0b1324]"></span>
                </div>
                <div>
                  <div className="font-black text-xs text-white">Оксана Ковальчук</div>
                  <div className="text-[10px] text-emerald-400 font-mono">
                    ● {isRu ? 'Онлайн · B2B Координатор' : 'Онлайн · B2B Координатор'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] transition shadow-sm cursor-pointer mr-1"
                >
                  {isRu ? 'Заявка' : 'Заявка'}
                </button>
                <button
                  onClick={() => setWidgetState('collapsed')}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  title={isRu ? 'Свернуть' : 'Згорнути'}
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={handleDismiss}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                  title={isRu ? 'Закрыть' : 'Закрити'}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#080d1a]/95">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 text-xs leading-relaxed whitespace-pre-line shadow-md ${
                      m.role === 'user'
                        ? 'bg-amber-500 text-slate-950 font-semibold rounded-tr-xs'
                        : 'bg-slate-900 border border-white/10 text-slate-100 rounded-tl-xs'
                    }`}
                  >
                    {m.content}

                    {/* Quick options if provided */}
                    {m.quickReplies && m.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2.5 mt-2.5 border-t border-white/10">
                        {m.quickReplies.map((qr, qIdx) => (
                          <button
                            key={qIdx}
                            onClick={() => handleSendMessage(qr)}
                            className="px-2.5 py-1 rounded-lg bg-amber-500/15 hover:bg-amber-500 text-amber-300 hover:text-slate-950 border border-amber-500/30 text-[10px] font-bold transition cursor-pointer active:scale-95"
                          >
                            {qr}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  {m.time && (
                    <span className="text-[9px] text-slate-500 px-1 mt-0.5">
                      {m.time}
                    </span>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-900/80 border border-white/10 text-xs text-slate-400 max-w-[75%]">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  <span className="text-[11px] ml-1">{isRu ? 'Оксана формирует ответ...' : 'Оксана формує відповідь...'}</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-slate-950 border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder={isRu ? 'Напишите вопрос или ваш телефон...' : 'Напишіть запитання або ваш телефон...'}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition shadow-md disabled:opacity-40 cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Bottom Quick Links */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 px-1">
                <a 
                  href="tel:+380442994820" 
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  <Phone className="w-3 h-3 text-amber-400" />
                  <span>+380 (44) 299-48-20</span>
                </a>
                <a 
                  href="https://t.me/recruiter_i_club" 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#229ED9] hover:underline"
                >
                  <Send className="w-3 h-3" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>

          </div>
        )}

        {/* State 3: Collapsed Floating Trigger */}
        {widgetState === 'collapsed' && (
          <button
            onClick={() => {
              setWidgetState('open');
              playWhatsAppSound();
            }}
            className="relative flex items-center gap-3 p-2.5 pr-4 rounded-full bg-[#0b1324] text-white border-2 border-amber-500/50 shadow-2xl hover:border-amber-400 hover:scale-105 transition-all group cursor-pointer ml-auto"
          >
            {/* Red Unread Notification Badge */}
            <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-600 text-white text-[10px] font-black items-center justify-center border-2 border-[#0b1324] shadow-md">
                1
              </span>
            </span>

            {/* Avatar with pulsing beacon */}
            <div className="relative">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-amber-400 shrink-0">
                <img
                  src="/team/oksana_kovalchuk.jpg"
                  alt="Оксана"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/logo/riclub_gold_seal_3d.png';
                  }}
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0b1324] animate-pulse"></span>
            </div>

            {/* Label */}
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-xs text-white leading-tight">
                {isRu ? 'ИИ-Консультант 24/7' : 'ІІ-Консультант 24/7'}
              </span>
              <span className="text-[10px] text-amber-300 font-medium leading-none mt-0.5">
                {isRu ? 'Оксана онлайн' : 'Оксана онлайн'}
              </span>
            </div>
          </button>
        )}

      </div>

      <QuotaBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
