'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Lock, 
  CheckCircle2, 
  FileText, 
  Eye, 
  Download,
  Users,
  Briefcase,
  ShieldCheck,
  Video,
  ExternalLink,
  Search,
  Filter,
  Check,
  X,
  PlusCircle,
  Building2,
  Phone,
  ArrowRight,
  LogOut,
  Sparkles,
  Clock,
  UserCheck,
  Plane,
  Factory,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  country: string;
  profession: string;
  status: string;
  companyId?: string | null;
  phone?: string | null;
  skills?: string | null;
  videoUrl?: string | null;
  resumeUrl?: string | null;
  documents?: string | null;
  experienceYears?: number | null;
  salaryExpectation?: string | null;
  languages?: string | null;
  bio?: string | null;
  driverLicense?: string | null;
}

interface UserSession {
  contactId: string;
  contactName: string;
  phone: string;
  email?: string;
  companyId: string;
  companyName: string;
  role: string;
  isDemo?: boolean;
}

export default function EmployerPortalPage() {
  // Session & Auth state
  const [user, setUser] = useState<UserSession | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [loginPhone, setLoginPhone] = useState('');
  const [regCompany, setRegCompany] = useState('');
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [authError, setAuthError] = useState('');

  // Portal Data state
  const [activeTab, setActiveTab] = useState<'my' | 'all' | 'docs' | 'request'>('my');
  const [loading, setLoading] = useState(false);
  const [myCandidates, setMyCandidates] = useState<Candidate[]>([]);
  const [allCandidates, setAllCandidates] = useState<Candidate[]>([]);
  const [metrics, setMetrics] = useState({
    myTotal: 0,
    allTotal: 0,
    myActiveOnShift: 0,
    myInTransit: 0,
    myUnderReview: 0
  });

  // Filter & Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Candidate Details Modal
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [actionSuccessMsg, setActionSuccessMsg] = useState('');

  // Requisition Form state
  const [reqProfession, setReqProfession] = useState('');
  const [reqHeadcount, setReqHeadcount] = useState('10');
  const [reqCity, setReqCity] = useState('');
  const [reqSalary, setReqSalary] = useState('');
  const [reqComment, setReqComment] = useState('');
  const [reqSubmitting, setReqSubmitting] = useState(false);

  // Initialize session from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('riclub_employer_session');
      if (saved) {
        const parsed = JSON.parse(saved);
        setUser(parsed);
      }
    } catch (e) {}
  }, []);

  // Fetch candidates whenever user/company changes
  useEffect(() => {
    if (user?.companyId) {
      fetchCandidates(user.companyId);
    }
  }, [user]);

  const fetchCandidates = async (companyId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/portal/candidates?companyId=${encodeURIComponent(companyId)}`);
      const data = await res.json();
      if (data.success) {
        setMyCandidates(data.myCandidates || []);
        setAllCandidates(data.allCandidates || []);
        if (data.metrics) setMetrics(data.metrics);
      }
    } catch (err) {
      console.error('Failed to load candidates:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/portal/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'demo' })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem('riclub_employer_session', JSON.stringify(data.user));
      } else {
        setAuthError(data.error || 'Помилка демо-входу');
      }
    } catch (e: any) {
      setAuthError('Мережева помилка підключення');
    } finally {
      setAuthLoading(false);
    }
  };

  const handlePhoneLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginPhone.trim()) return;
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/portal/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', phone: loginPhone.trim() })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem('riclub_employer_session', JSON.stringify(data.user));
      } else {
        setAuthError(data.error || 'Підприємство з таким номером не знайдено');
      }
    } catch (e) {
      setAuthError('Мережева помилка підключення');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regCompany.trim() || !regPhone.trim()) return;
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/portal/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'register',
          companyName: regCompany.trim(),
          contactName: regName.trim() || 'Керівник',
          phone: regPhone.trim()
        })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem('riclub_employer_session', JSON.stringify(data.user));
      } else {
        setAuthError(data.error || 'Помилка реєстрації');
      }
    } catch (e) {
      setAuthError('Мережева помилка реєстрації');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('riclub_employer_session');
  };

  const handleApproveCandidate = async (candidate: Candidate) => {
    if (!user) return;
    try {
      const res = await fetch('/api/portal/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'approve',
          candidateId: candidate.id,
          companyId: user.companyId,
          companyName: user.companyName
        })
      });
      const data = await res.json();
      if (data.success) {
        setActionSuccessMsg(`✅ Фахівця ${candidate.name} успішно затверджено!`);
        setTimeout(() => setActionSuccessMsg(''), 4000);
        fetchCandidates(user.companyId);
        if (selectedCandidate?.id === candidate.id) {
          setSelectedCandidate(prev => prev ? { ...prev, status: 'Затверджено замовником' } : null);
        }
      }
    } catch (e) {
      alert('Помилка оновлення статусу');
    }
  };

  const handleRejectCandidate = async (candidate: Candidate) => {
    if (!user) return;
    const reason = prompt(`Вкажіть причину запиту заміни для ${candidate.name}:`, 'Невідповідність розряду / зміна графіка');
    if (reason === null) return;

    try {
      const res = await fetch('/api/portal/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'reject',
          candidateId: candidate.id,
          companyId: user.companyId,
          companyName: user.companyName,
          reason
        })
      });
      const data = await res.json();
      if (data.success) {
        setActionSuccessMsg(`❌ Запит на заміну ${candidate.name} передано куратору.`);
        setTimeout(() => setActionSuccessMsg(''), 4000);
        fetchCandidates(user.companyId);
        if (selectedCandidate?.id === candidate.id) {
          setSelectedCandidate(prev => prev ? { ...prev, status: 'Потрібна заміна / Відхилено' } : null);
        }
      }
    } catch (e) {
      alert('Помилка надсилання запиту');
    }
  };

  const handleAssignCandidate = async (candidate: Candidate) => {
    if (!user) return;
    try {
      const res = await fetch('/api/portal/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'assign',
          candidateId: candidate.id,
          companyId: user.companyId,
          companyName: user.companyName
        })
      });
      const data = await res.json();
      if (data.success) {
        setActionSuccessMsg(`🎯 Фахівця ${candidate.name} прикріплено до вашого підприємства!`);
        setTimeout(() => setActionSuccessMsg(''), 4000);
        fetchCandidates(user.companyId);
        setActiveTab('my');
      }
    } catch (e) {
      alert('Помилка прикріплення кандидата');
    }
  };

  const handleRequisitionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setReqSubmitting(true);
    try {
      const res = await fetch('/api/portal/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'request_workers',
          companyId: user.companyId,
          companyName: user.companyName,
          requisition: {
            profession: reqProfession,
            headcount: reqHeadcount,
            city: reqCity,
            salary: reqSalary,
            comment: reqComment
          }
        })
      });
      const data = await res.json();
      if (data.success) {
        alert(data.message || 'Заявку передано в CRM!');
        setReqProfession('');
        setReqCity('');
        setReqSalary('');
        setReqComment('');
        setActiveTab('my');
      }
    } catch (e) {
      alert('Помилка передачі заявки');
    } finally {
      setReqSubmitting(false);
    }
  };

  // Filter candidates
  const currentPool = activeTab === 'my' ? myCandidates : allCandidates;
  const filteredCandidates = currentPool.filter(c => {
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      c.name.toLowerCase().includes(q) || 
      c.profession.toLowerCase().includes(q) || 
      c.country.toLowerCase().includes(q) ||
      (c.skills && c.skills.toLowerCase().includes(q));

    const matchesCountry = selectedCountry === 'all' || c.country.toLowerCase().includes(selectedCountry.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || (c.status && c.status.toLowerCase().includes(selectedStatus.toLowerCase()));

    return matchesSearch && matchesCountry && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    const s = (status || '').toLowerCase();
    if (s.includes('працевлаш') || s.includes('змін')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    if (s.includes('затвердж') || s.includes('готов')) return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    if (s.includes('віз') || s.includes('дороз') || s.includes('транзит')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
    if (s.includes('відхил') || s.includes('замін')) return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
    return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
  };

  const getCountryFlag = (country: string) => {
    const c = (country || '').toLowerCase();
    if (c.includes('узбек')) return '🇺🇿';
    if (c.includes('інд') || c.includes('ind')) return '🇮🇳';
    if (c.includes('бангл')) return '🇧🇩';
    if (c.includes('непал')) return '🇳🇵';
    if (c.includes('азерб')) return '🇦🇿';
    if (c.includes('тур')) return '🇹🇷';
    if (c.includes('тадж')) return '🇹🇯';
    if (c.includes('укр')) return '🇺🇦';
    return '🌐';
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 pb-20 selection:bg-emerald-500 selection:text-slate-950 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#090e1a]/90 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <img src="/images/logo/riclub_gold_seal_3d.png" alt="Recruiter I Club" className="w-8 h-8 rounded-full border border-amber-400/40 shadow-sm" />
              <div>
                <span className="font-extrabold text-xs tracking-wider text-white uppercase block leading-tight">Recruiter I Club</span>
                <span className="text-[10px] text-amber-400 font-mono block">B2B Portal · Neon CRM Realtime</span>
              </div>
            </Link>
          </div>

          {/* User Session Info or Login button */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1.5 justify-end">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[130px] sm:max-w-[240px]">{user.companyName}</span>
                    {user.isDemo && (
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1 py-0.5 rounded font-mono font-extrabold shrink-0">DEMO</span>
                    )}
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-slate-400 font-mono truncate max-w-[140px] sm:max-w-none">{user.contactName} · {user.phone}</div>
                </div>
                <button
                  onClick={handleLogout}
                  title="Вийти з кабінету"
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-white/[0.08] transition"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleDemoLogin}
                disabled={authLoading}
                className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold transition flex items-center gap-1.5 shadow-md shadow-emerald-500/20"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Вхід роботодавця</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-5 sm:py-8 space-y-6">
        
        {/* ACTION SUCCESS BANNER */}
        {actionSuccessMsg && (
          <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs font-semibold flex items-center justify-between gap-3 animate-fadeIn">
            <span>{actionSuccessMsg}</span>
            <button onClick={() => setActionSuccessMsg('')} className="text-emerald-300 hover:text-white font-bold">✕</button>
          </div>
        )}

        {/* NOT LOGGED IN HERO & LOGIN DRAWER */}
        {!user ? (
          <div className="max-w-xl mx-auto my-6 sm:my-12 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/20 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold">
                <Lock className="w-3 h-3" />
                <span>Авторизація B2B Клієнта 2026</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white">
                Особистий кабінет роботодавця
              </h1>
              <p className="text-xs text-slate-400">
                Прямий доступ до закріплених кандидатів з Узбекистану та Азії (ст. 23 ЗУ — 100% захист від призову), відео Trade-тестів та статусів віз у реальному часі.
              </p>
            </div>

            {/* Instant Demo Button */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Швидка оцінка для керівників:
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">17 закріплених працівників</span>
              </div>
              <button
                onClick={handleDemoLogin}
                disabled={authLoading}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-[0.99]"
              >
                {authLoading ? 'Підключення до CRM...' : '⚡ Демо-вхід в 1 клік (ТОВ «Агро-Переробка»)'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Auth Tabs */}
            <div className="border-t border-white/10 pt-5 space-y-4">
              <div className="flex rounded-xl bg-slate-950 p-1 border border-white/[0.08]">
                <button
                  onClick={() => setAuthTab('login')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    authTab === 'login' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Вхід за номером телефону
                </button>
                <button
                  onClick={() => setAuthTab('register')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    authTab === 'register' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Швидка реєстрація підприємства
                </button>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              {authTab === 'login' ? (
                <form onSubmit={handlePhoneLogin} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">НОМЕР ТЕЛЕФОНУ (WhatsApp / Telegram)</label>
                    <input
                      type="tel"
                      required
                      placeholder="+380..."
                      value={loginPhone}
                      onChange={(e) => setLoginPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white font-bold text-xs transition border border-white/10 flex items-center justify-center gap-2"
                  >
                    <span>Увійти в кабінет</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">НАЗВА ПІДПРИЄМСТВА (ТОВ / ПП)</label>
                    <input
                      type="text"
                      required
                      placeholder="ТОВ «Буд-Інвест» або Фабрика..."
                      value={regCompany}
                      onChange={(e) => setRegCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">ВАШЕ ІМ'Я</label>
                      <input
                        type="text"
                        placeholder="Олександр, директор"
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 mb-1">ТЕЛЕФОН (WhatsApp)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+380..."
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-md shadow-amber-500/20"
                  >
                    Зареєструвати підприємство та відкрити кабінет ➔
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          /* LOGGED IN WORKSPACE */
          <div className="space-y-6">

            {/* BENTO STATS METRICS (Responsive 2x2 or 4x1) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Закріплено за вами</div>
                  <div className="text-lg sm:text-2xl font-black text-white font-mono">{metrics.myTotal} <span className="text-xs font-normal text-slate-400">осіб</span></div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Працюють на зміні</div>
                  <div className="text-lg sm:text-2xl font-black text-emerald-400 font-mono">{metrics.myActiveOnShift} <span className="text-xs font-normal text-slate-400">людей</span></div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">В дорозі / Віза D</div>
                  <div className="text-lg sm:text-2xl font-black text-amber-400 font-mono">{metrics.myInTransit} <span className="text-xs font-normal text-slate-400">осіб</span></div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Загальна база CRM</div>
                  <div className="text-lg sm:text-2xl font-black text-purple-300 font-mono">{metrics.allTotal} <span className="text-xs font-normal text-slate-400">анкет</span></div>
                </div>
              </div>
            </div>

            {/* STICKY SEGMENT TABS (Mobile-friendly thumb taps) */}
            <div className="sticky top-[61px] z-30 bg-[#070b14]/95 backdrop-blur-sm py-2">
              <div className="flex gap-1.5 overflow-x-auto no-scrollbar p-1 rounded-2xl bg-slate-950 border border-white/[0.08]">
                <button
                  onClick={() => setActiveTab('my')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
                    activeTab === 'my' 
                      ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Мої кандидати</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${activeTab === 'my' ? 'bg-slate-950 text-emerald-400 font-extrabold' : 'bg-white/10 text-slate-300'}`}>
                    {myCandidates.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('all')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
                    activeTab === 'all' 
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Загальна база перевірених фахівців</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${activeTab === 'all' ? 'bg-slate-950 text-amber-400 font-extrabold' : 'bg-white/10 text-slate-300'}`}>
                    {allCandidates.length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('docs')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ${
                    activeTab === 'docs' 
                      ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20' 
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Договори та рахунки</span>
                </button>

                <button
                  onClick={() => setActiveTab('request')}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shrink-0 ml-auto ${
                    activeTab === 'request' 
                      ? 'bg-white text-slate-950' 
                      : 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
                  }`}
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Подати нову заявку</span>
                  <span className="sm:hidden">Заявка</span>
                </button>
              </div>
            </div>

            {/* TAB 1 & 2: CANDIDATE LISTINGS */}
            {(activeTab === 'my' || activeTab === 'all') && (
              <div className="space-y-4">
                
                {/* SEARCH & FILTER STRIP */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-3 rounded-2xl bg-slate-900/60 border border-white/[0.06]">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder={activeTab === 'my' ? "Пошук серед закріплених фахівців (ім'я, фах)..." : "Пошук по всій базі кандидатів CRM..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Country pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
                    {['all', 'Узбекистан', 'Індія', 'Бангладеш', 'Туреччина', 'Україна'].map(c => (
                      <button
                        key={c}
                        onClick={() => setSelectedCountry(c)}
                        className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold shrink-0 transition ${
                          selectedCountry === c 
                            ? 'bg-white/20 text-white border border-white/30' 
                            : 'bg-slate-950/80 text-slate-400 hover:text-white border border-white/[0.06]'
                        }`}
                      >
                        {c === 'all' ? 'Всі країни' : `${getCountryFlag(c)} ${c}`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CANDIDATES GRID */}
                {loading ? (
                  <div className="py-16 text-center text-slate-400 text-xs animate-pulse">
                    Оновлення кандидатів з Neon CRM...
                  </div>
                ) : filteredCandidates.length === 0 ? (
                  <div className="py-16 text-center space-y-3 rounded-3xl bg-slate-900/40 border border-white/[0.06]">
                    <div className="text-3xl">🔍</div>
                    <div className="text-sm font-bold text-white">Кандидатів за цим фільтром не знайдено</div>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto">
                      {activeTab === 'my' 
                        ? 'У вашому підприємстві поки немає фахівців з такими критеріями. Перейдіть у "Загальну базу", щоб обрати працівників.' 
                        : 'Спробуйте змінити пошуковий запит або країну.'}
                    </p>
                    {activeTab === 'my' && (
                      <button 
                        onClick={() => setActiveTab('all')}
                        className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs"
                      >
                        Перейти до загальної бази ➔
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                    {filteredCandidates.map(cand => {
                      const flag = getCountryFlag(cand.country);
                      const statusBadge = getStatusColor(cand.status);
                      const isAssignedToMe = cand.companyId === user.companyId;

                      return (
                        <div 
                          key={cand.id}
                          className="rounded-2xl bg-slate-900/85 border border-white/[0.08] hover:border-amber-400/40 transition-all duration-200 p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-md group"
                        >
                          {/* Card Top */}
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2.5">
                                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-white/15 flex items-center justify-center text-xl shrink-0 shadow-xs">
                                  {flag}
                                </div>
                                <div>
                                  <h3 className="font-extrabold text-sm text-white group-hover:text-amber-300 transition-colors leading-tight">
                                    {cand.name}
                                  </h3>
                                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5 mt-0.5">
                                    <span>{cand.country}</span>
                                    {cand.experienceYears && (
                                      <span>· {cand.experienceYears} р. досвіду</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Profession banner */}
                            <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/[0.06]">
                              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-extrabold">Спеціальність</div>
                              <div className="font-bold text-xs sm:text-[13px] text-slate-200 mt-0.5 leading-snug">
                                {cand.profession}
                              </div>
                            </div>

                            {/* Status badge */}
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${statusBadge}`}>
                                ● {cand.status || 'Скринінг'}
                              </span>
                              <span className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded font-mono font-medium flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                                <span>ст. 23 ЗУ</span>
                              </span>
                            </div>

                            {/* Skills tags */}
                            {cand.skills && (
                              <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                                <span className="font-semibold text-slate-300">Навички: </span>
                                {cand.skills}
                              </div>
                            )}
                          </div>

                          {/* Card Bottom Actions */}
                          <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
                            {activeTab === 'my' ? (
                              <>
                                <button
                                  onClick={() => handleApproveCandidate(cand)}
                                  className="flex-1 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Затвердити</span>
                                </button>
                                <button
                                  onClick={() => handleRejectCandidate(cand)}
                                  className="py-2 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 text-xs font-bold transition"
                                  title="Запросити заміну"
                                >
                                  Заміна
                                </button>
                              </>
                            ) : (
                              <>
                                {isAssignedToMe ? (
                                  <span className="flex-1 py-2 text-center text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                    ✓ Вже закріплений за вами
                                  </span>
                                ) : (
                                  <button
                                    onClick={() => handleAssignCandidate(cand)}
                                    className="flex-1 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                                  >
                                    <UserCheck className="w-3.5 h-3.5" />
                                    <span>Закріпити за мною</span>
                                  </button>
                                )}
                              </>
                            )}

                            <button
                              onClick={() => setSelectedCandidate(cand)}
                              className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/[0.08] transition"
                              title="Деталі анкети та Trade Test"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: CONTRACTS & DOCUMENTS */}
            {activeTab === 'docs' && (
              <div className="max-w-3xl mx-auto space-y-4">
                <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/[0.08] space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] text-amber-400 font-mono font-bold uppercase">Юридична чистота</div>
                      <h2 className="text-base sm:text-lg font-black text-white">Офіційний договір та акти виконання</h2>
                      <p className="text-xs text-slate-400 mt-1">
                        Договір укладено згідно з Ліцензією Мінсоцполітики №1428. Оплата послуг агенції — виключно після фактичного виходу працівника на зміну.
                      </p>
                    </div>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-full font-extrabold">
                      ● Чинний договір
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Договір_поставки_персоналу_2026.pdf</div>
                          <div className="text-[10px] text-slate-400">Підписано ЕЦП · 380 КБ</div>
                        </div>
                      </div>
                      <a
                        href="/articles/legal-guide-foreign-worker-hiring-ukraine-2026.html"
                        className="px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-xs font-bold text-white transition flex items-center gap-1.5"
                      >
                        <Download className="w-3 h-3" />
                        <span className="hidden sm:inline">Завантажити</span>
                      </a>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Витяг_ст23_Звільнення_від_мобілізації.pdf</div>
                          <div className="text-[10px] text-slate-400">Офіційне юридичне роз'яснення для ТЦК та СП · 240 КБ</div>
                        </div>
                      </div>
                      <a
                        href="/articles/article-23-law-ukraine-mobilization-exemption.html"
                        className="px-3 py-1.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-xs font-bold text-white transition flex items-center gap-1.5"
                      >
                        <Download className="w-3 h-3" />
                        <span className="hidden sm:inline">Завантажити</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: SUBMIT NEW REQUISITION */}
            {activeTab === 'request' && (
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleRequisitionSubmit} className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-amber-500/20 shadow-2xl space-y-4">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono text-emerald-400 font-extrabold uppercase">Пул кандидатів за 21–30 днів</div>
                    <h2 className="text-lg sm:text-xl font-black text-white">Подати нову заявку на підбір робітників</h2>
                    <p className="text-xs text-slate-400">
                      Заявка миттєво з'явиться в Канбан-воронці чергового рекрутера CRM.
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">НЕОБХІДНА СПЕЦІАЛЬНІСТЬ</label>
                      <input
                        type="text"
                        required
                        placeholder="Напр: Зварювальники 135/136, Муляри, Пакувальники, Токарі..."
                        value={reqProfession}
                        onChange={(e) => setReqProfession(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">КІЛЬКІСТЬ (ОСІБ)</label>
                        <input
                          type="number"
                          min="1"
                          required
                          value={reqHeadcount}
                          onChange={(e) => setReqHeadcount(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">МІСТО / ОБ'ЄКТ</label>
                        <input
                          type="text"
                          placeholder="Київ, Львів, Дніпро..."
                          value={reqCity}
                          onChange={(e) => setReqCity(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">ПРОПОНОВАНА ЗАРПЛАТА (ГРН/МІС АБО СТАВКА/ГОД)</label>
                      <input
                        type="text"
                        placeholder="25 000 – 35 000 грн або 180 грн/год"
                        value={reqSalary}
                        onChange={(e) => setReqSalary(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">ОСОБЛИВІ ВИМОГИ / ПРОЖИВАННЯ</label>
                      <textarea
                        rows={3}
                        placeholder="Наявність гуртожитку, графік роботи 6/1, специфічні навички..."
                        value={reqComment}
                        onChange={(e) => setReqComment(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={reqSubmitting}
                      className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider transition shadow-lg shadow-emerald-500/20"
                    >
                      {reqSubmitting ? 'Передача в CRM...' : 'Надіслати заявку куратору (0 грн передоплати) ➔'}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        )}

      </main>

      {/* CANDIDATE DETAILS MODAL / DRAWER */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="w-full max-w-xl max-h-[90vh] bg-slate-900 border border-white/15 rounded-t-3xl sm:rounded-3xl p-5 sm:p-6 overflow-y-auto space-y-4 shadow-2xl animate-fadeIn">
            
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/20 flex items-center justify-center text-2xl shrink-0">
                  {getCountryFlag(selectedCandidate.country)}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">{selectedCandidate.name}</h3>
                  <div className="text-xs text-slate-400">{selectedCandidate.country} · {selectedCandidate.experienceYears || '5+'} р. досвіду</div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCandidate(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white text-lg font-bold"
              >
                ✕
              </button>
            </div>

            {/* Profession & status */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wide">Кваліфікація</div>
              <div className="p-3 rounded-xl bg-slate-950 border border-white/10 font-bold text-xs text-white">
                {selectedCandidate.profession}
              </div>
            </div>

            {/* Legal Status Guarantee */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs text-emerald-200">
                <span className="font-bold">100% Захист від мобілізації:</span> Кандидат є іноземним громадянином і не підлягає військовому обліку в Україні (ст. 23 ЗУ).
              </div>
            </div>

            {/* Skills & bio */}
            {selectedCandidate.skills && (
              <div className="space-y-1.5">
                <div className="text-xs font-bold text-slate-300">Професійні навички:</div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 text-xs text-slate-300 leading-relaxed">
                  {selectedCandidate.skills}
                </div>
              </div>
            )}

            {selectedCandidate.languages && (
              <div className="text-xs text-slate-400">
                <span className="font-bold text-slate-300">Мови:</span> {selectedCandidate.languages}
              </div>
            )}

            {/* Video Trade Test */}
            {selectedCandidate.videoUrl ? (
              <a
                href={selectedCandidate.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-blue-300 text-xs font-bold flex items-center justify-center gap-2 transition"
              >
                <Video className="w-4 h-4 text-blue-400" />
                <span>Дивитися практичний іспит (Trade Test)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <div className="text-[11px] text-slate-500 italic p-2 rounded-lg bg-slate-950/40 text-center">
                Відео Trade Test підтверджено методистом у Ташкенті / Делі.
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-3 border-t border-white/10 flex items-center gap-2">
              <button
                onClick={() => {
                  handleApproveCandidate(selectedCandidate);
                  setSelectedCandidate(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Затвердити працівника</span>
              </button>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition"
              >
                Закрити
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
