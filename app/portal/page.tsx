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
  AlertCircle,
  Key,
  HelpCircle,
  Send,
  MessageSquare
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
  const [authTab, setAuthTab] = useState<'login' | 'request'>('login');
  const [loginPhone, setLoginPhone] = useState('');
  const [loginPin, setLoginPin] = useState('');
  const [authError, setAuthError] = useState('');
  const [authPendingInfo, setAuthPendingInfo] = useState<{ companyName?: string; message?: string } | null>(null);

  // Request Access Form state
  const [reqCompany, setRegCompany] = useState('');
  const [regName, setRegName] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regIndustry, setRegIndustry] = useState('Виробництво / Завод');
  const [regWorkers, setRegWorkers] = useState('10–15 осіб');
  const [regSuccessMsg, setRegSuccessMsg] = useState('');
  const [regPinHint, setRegPinHint] = useState('');

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

  // Styled Rejection Modal state (replacing prompt)
  const [rejectModalOpen, setRejectModalOpen] = useState(false);
  const [candidateToReject, setCandidateToReject] = useState<Candidate | null>(null);
  const [rejectReason, setRejectReason] = useState('Невідповідність кваліфікації / розряду');
  const [customRejectReason, setCustomRejectReason] = useState('');
  const [rejectSubmitting, setRejectSubmitting] = useState(false);

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
    setAuthPendingInfo(null);
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
    if (!loginPin.trim()) {
      setAuthError('Введіть 4-значний PIN-код доступу');
      return;
    }

    setAuthLoading(true);
    setAuthError('');
    setAuthPendingInfo(null);

    try {
      const res = await fetch('/api/portal/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'login', 
          phone: loginPhone.trim(),
          pin: loginPin.trim()
        })
      });
      const data = await res.json();

      if (data.success && data.user) {
        setUser(data.user);
        localStorage.setItem('riclub_employer_session', JSON.stringify(data.user));
      } else if (data.pendingApproval) {
        setAuthPendingInfo({
          companyName: data.companyName,
          message: data.error
        });
      } else if (data.notFound) {
        setAuthError('Підприємство з таким номером не знайдено в базі роботодавців.');
        setRegPhone(loginPhone.trim());
      } else {
        setAuthError(data.error || 'Помилка авторизації');
      }
    } catch (e) {
      setAuthError('Мережева помилка зв’язку з CRM');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqCompany.trim() || !regPhone.trim()) return;
    setAuthLoading(true);
    setAuthError('');
    setRegSuccessMsg('');

    try {
      const res = await fetch('/api/portal/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          action: 'request_access',
          companyName: reqCompany.trim(),
          contactName: regName.trim() || 'Керівник',
          phone: regPhone.trim(),
          industry: regIndustry,
          workersNeeded: regWorkers
        })
      });
      const data = await res.json();
      if (data.success) {
        setRegSuccessMsg(data.message || 'Заявку успішно зареєстровано в CRM!');
        if (data.pinHint) setRegPinHint(data.pinHint);
      } else {
        setAuthError(data.error || 'Помилка оформлення заявки');
      }
    } catch (e) {
      setAuthError('Мережева помилка реєстрації заявки');
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
        setActionSuccessMsg(`✅ Фахівця ${candidate.name} успішно затверджено на оформлення!`);
        setTimeout(() => setActionSuccessMsg(''), 5000);
        fetchCandidates(user.companyId);
        if (selectedCandidate?.id === candidate.id) {
          setSelectedCandidate(prev => prev ? { ...prev, status: 'Затверджено замовником' } : null);
        }
      }
    } catch (e) {
      alert('Помилка оновлення статусу');
    }
  };

  const openRejectModal = (candidate: Candidate) => {
    setCandidateToReject(candidate);
    setRejectReason('Невідповідність кваліфікації / розряду');
    setCustomRejectReason('');
    setRejectModalOpen(true);
  };

  const confirmReject = async () => {
    if (!user || !candidateToReject) return;
    setRejectSubmitting(true);
    const finalReason = rejectReason === 'Інше' ? (customRejectReason || 'Інша причина') : rejectReason;

    try {
      const res = await fetch('/api/portal/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'reject',
          candidateId: candidateToReject.id,
          companyId: user.companyId,
          companyName: user.companyName,
          reason: finalReason
        })
      });
      const data = await res.json();
      if (data.success) {
        setActionSuccessMsg(`⚠️ Запит на заміну фахівця ${candidateToReject.name} передано координатору (гарантія 48 год).`);
        setTimeout(() => setActionSuccessMsg(''), 5000);
        fetchCandidates(user.companyId);
        setRejectModalOpen(false);
        setCandidateToReject(null);
        if (selectedCandidate?.id === candidateToReject.id) {
          setSelectedCandidate(null);
        }
      }
    } catch (e) {
      alert('Помилка передачі запиту');
    } finally {
      setRejectSubmitting(false);
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
        setActionSuccessMsg(`📌 Фахівця ${candidate.name} заброньовано у ваш штат!`);
        setTimeout(() => setActionSuccessMsg(''), 5000);
        fetchCandidates(user.companyId);
        setActiveTab('my');
      }
    } catch (e) {
      alert('Помилка бронювання кандидата');
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
        setActionSuccessMsg(`📋 ${data.message || 'Заявку на нову бригаду передано координатору!'}`);
        setTimeout(() => setActionSuccessMsg(''), 6000);
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
    if (s.includes('віз') || s.includes('дороз') || s.includes('транзит') || s.includes('дозв')) return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
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
    <div className="min-h-screen bg-[#070b14] text-slate-100 pb-28 md:pb-20 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#090e1a]/95 backdrop-blur-md border-b border-white/[0.08] px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <img 
                src="/images/logo/riclub_gold_seal_3d.png" 
                alt="Recruiter I Club" 
                className="w-8 h-8 object-contain drop-shadow-[0_2px_6px_rgba(217,119,6,0.35)] transition-transform duration-300 group-hover:scale-105" 
              />
              <div>
                <span className="font-extrabold text-xs tracking-wider text-white uppercase block leading-tight">
                  RECRUITER <span className="text-amber-400">I</span> CLUB
                </span>
                <span className="text-[9.5px] text-slate-400 font-mono block">Закритий кабінет роботодавця</span>
              </div>
            </Link>
          </div>

          {/* User Session Info or Demo Button */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold text-white flex items-center gap-1.5 justify-end">
                    <Building2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[200px]">{user.companyName}</span>
                    {user.isDemo && (
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1 py-0.5 rounded font-mono font-extrabold shrink-0">DEMO</span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">{user.contactName} · {user.phone}</div>
                </div>
                <button
                  onClick={handleLogout}
                  title="Вийти з кабінету"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 border border-white/[0.08] transition text-xs"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Вийти</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleDemoLogin}
                disabled={authLoading}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Демо-вхід (ТОВ Інвест)</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 py-5 sm:py-8 space-y-6">
        
        {/* ACTION SUCCESS BANNER */}
        {actionSuccessMsg && (
          <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs font-bold flex items-center justify-between gap-3 animate-fadeIn shadow-lg shadow-emerald-500/10">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{actionSuccessMsg}</span>
            </div>
            <button onClick={() => setActionSuccessMsg('')} className="text-emerald-300 hover:text-white font-bold p-1">✕</button>
          </div>
        )}

        {/* NOT LOGGED IN HERO & LOGIN / REQUEST FORM */}
        {!user ? (
          <div className="max-w-xl mx-auto my-6 sm:my-10 p-6 sm:p-8 rounded-3xl bg-slate-900/95 border border-amber-500/25 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-bold">
                <Lock className="w-3 h-3" />
                <span>Закритий B2B-доступ лише для верифікованих підприємств</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Особистий кабінет роботодавця
              </h1>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
                База кандидатів з Узбекистану, Індії та Азії. Доступ надається виключно після узгодження договору з координатором клубу.
              </p>
            </div>

            {/* PENDING APPROVAL ALERT */}
            {authPendingInfo && (
              <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-300">
                  <Clock className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>Кабінет для «{authPendingInfo.companyName}» на стадії активації</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  {authPendingInfo.message || 'Заявку прийнято. Доступ відкривається автоматично після підтвердження договору та внесення в базу роботодавців.'}
                </p>
                <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-[11px]">
                  <span>Статус активації:</span>
                  <span className="text-amber-400 font-bold">Очікуйте сповіщення від координатора</span>
                </div>
              </div>
            )}

            {/* Auth Switcher: Login with PIN vs Request Access */}
            <div className="space-y-4">
              <div className="flex rounded-xl bg-slate-950 p-1 border border-white/[0.08]">
                <button
                  onClick={() => { setAuthTab('login'); setAuthError(''); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    authTab === 'login' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Увійти (Телефон + PIN)
                </button>
                <button
                  onClick={() => { setAuthTab('request'); setAuthError(''); }}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
                    authTab === 'request' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Подати заявку на доступ
                </button>
              </div>

              {authError && (
                <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div>{authError}</div>
                    {authError.includes('не знайдено') && (
                      <button 
                        onClick={() => setAuthTab('request')}
                        className="text-amber-400 underline font-bold text-[11px] block mt-1"
                      >
                        Перейти до форми заявки на підключення ➔
                      </button>
                    )}
                  </div>
                </div>
              )}

              {authTab === 'login' ? (
                /* TAB: LOGIN WITH PHONE + PIN */
                <form onSubmit={handlePhoneLogin} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 mb-1">
                      НОМЕР ТЕЛЕФОНУ ПІДПРИЄМСТВА *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+38 (067) 000-00-00"
                      value={loginPhone}
                      onChange={(e) => setLoginPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold text-slate-300">
                        ПЕРСОНАЛЬНИЙ 4-ЗНАЧНИЙ PIN-КОД ДОСТУПУ *
                      </label>
                      <span className="text-[10px] text-amber-400/80 font-mono">надається координатором</span>
                    </div>
                    <div className="relative">
                      <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        maxLength={6}
                        required
                        placeholder="••••"
                        value={loginPin}
                        onChange={(e) => setLoginPin(e.target.value)}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-sm text-white focus:outline-none focus:border-amber-400 font-mono tracking-widest text-center"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={authLoading}
                    className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.99]"
                  >
                    {authLoading ? 'Звірка з базою CRM...' : 'Увійти в кабінет роботодавця'}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={() => setAuthTab('request')}
                      className="text-[11px] text-slate-400 hover:text-amber-400 transition"
                    >
                      Ще не маєте PIN-коду? <span className="underline font-semibold">Подайте заявку на підключення</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* TAB: REQUEST ACCESS APPLICATION */
                <div>
                  {regSuccessMsg ? (
                    <div className="p-5 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-200 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                        ✓
                      </div>
                      <h3 className="text-sm font-bold text-white">Заявку прийнято в обробку CRM</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {regSuccessMsg}
                      </p>
                      {regPinHint && (
                        <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 font-mono text-xs text-amber-300">
                          Ваш тимчасовий PIN: <strong className="text-white text-sm">{regPinHint}</strong> (збережіть його)
                        </div>
                      )}
                      <button
                        onClick={() => { setRegSuccessMsg(''); setAuthTab('login'); }}
                        className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold"
                      >
                        Перейти до форми входу ➔
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleRequestAccess} className="space-y-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-300 mb-1">НАЗВА ПІДПРИЄМСТВА (ТОВ / ПП) *</label>
                        <input
                          type="text"
                          required
                          placeholder="ТОВ «Буд-Інвест» або Завод..."
                          value={reqCompany}
                          onChange={(e) => setRegCompany(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-300 mb-1">КОНТАКТНА ОСОБА (ПІБ)</label>
                          <input
                            type="text"
                            placeholder="Олександр Васильович, директор"
                            value={regName}
                            onChange={(e) => setRegName(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-300 mb-1">ТЕЛЕФОН (WhatsApp/Telegram) *</label>
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

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-bold text-slate-300 mb-1">ГАЛУЗЬ ДІЯЛЬНОСТІ</label>
                          <select
                            value={regIndustry}
                            onChange={(e) => setRegIndustry(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                          >
                            <option>Виробництво / Завод</option>
                            <option>Будівництво / Монтаж</option>
                            <option>Склад / WMS / Логістика</option>
                            <option>Агро / Теплиці / Переробка</option>
                            <option>Текстиль / Швейний цех</option>
                            <option>Інша галузь</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-slate-300 mb-1">ПОТРІБНО РОБІТНИКІВ</label>
                          <select
                            value={regWorkers}
                            onChange={(e) => setRegWorkers(e.target.value)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs text-white focus:outline-none focus:border-amber-400"
                          >
                            <option>3–5 працівників</option>
                            <option>10–15 працівників</option>
                            <option>20–50 працівників</option>
                            <option>50+ фахівців (бригада під ключ)</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={authLoading}
                        className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                      >
                        {authLoading ? 'Реєстрація заявки в CRM...' : 'Подати заявку на відкриття кабінету ➔'}
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* LOGGED IN WORKSPACE */
          <div className="space-y-6">

            {/* BENTO STATS METRICS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Закріплено за вами</div>
                  <div className="text-lg sm:text-2xl font-black text-white font-mono">{myCandidates.length} <span className="text-xs font-normal text-slate-400">осіб</span></div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Працюють на зміні</div>
                  <div className="text-lg sm:text-2xl font-black text-emerald-400 font-mono">
                    {myCandidates.filter(c => (c.status || '').toLowerCase().includes('змін') || (c.status || '').toLowerCase().includes('працевлаш')).length}
                    <span className="text-xs font-normal text-slate-400"> людей</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Оформлення / Віза D</div>
                  <div className="text-lg sm:text-2xl font-black text-amber-400 font-mono">
                    {myCandidates.filter(c => (c.status || '').toLowerCase().includes('віз') || (c.status || '').toLowerCase().includes('дозв') || (c.status || '').toLowerCase().includes('скринінг')).length}
                    <span className="text-xs font-normal text-slate-400"> осіб</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-slate-400 font-medium">Загальний пул CRM</div>
                  <div className="text-lg sm:text-2xl font-black text-purple-300 font-mono">{allCandidates.length} <span className="text-xs font-normal text-slate-400">анкет</span></div>
                </div>
              </div>
            </div>

            {/* STICKY SEGMENT TABS (Desktop + Tablet) */}
            <div className="sticky top-[58px] z-30 bg-[#070b14]/95 backdrop-blur-sm py-2">
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
                  <span>Офіційні документи</span>
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
                  <span>Замовити нову бригаду</span>
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
                      placeholder={activeTab === 'my' ? "Пошук серед закріплених працівників (ім'я, фах)..." : "Пошук по всій базі кандидатів CRM..."}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-950 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Country pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
                    {['all', 'Узбекистан', 'Індія', 'Бангладеш'].map(c => (
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
                    Синхронізація кандидатів з Neon CRM...
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
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2.5">
                                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-lg font-bold text-slate-300">
                                  {flag}
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition leading-snug">
                                    {cand.name}
                                  </h4>
                                  <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                                    <span>{cand.country}</span>
                                    <span>·</span>
                                    <span>{cand.experienceYears ? `${cand.experienceYears} р. досвіду` : 'Перевірений'}</span>
                                  </div>
                                </div>
                              </div>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusBadge} shrink-0`}>
                                {cand.status}
                              </span>
                            </div>

                            <div>
                              <div className="text-xs font-semibold text-slate-200 line-clamp-2">
                                {cand.profession}
                              </div>
                              {cand.skills && (
                                <div className="text-[11px] text-slate-400 mt-1 line-clamp-2 bg-slate-950/60 p-2 rounded-lg border border-white/[0.04]">
                                  🛠 {cand.skills}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-white/[0.06] flex items-center gap-2">
                            <button
                              onClick={() => setSelectedCandidate(cand)}
                              className="flex-1 py-2 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs font-bold transition flex items-center justify-center gap-1.5"
                            >
                              <Eye className="w-3.5 h-3.5 text-amber-400" />
                              <span>Анкета</span>
                            </button>

                            {activeTab === 'my' ? (
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => handleApproveCandidate(cand)}
                                  title="Затвердити кандидата"
                                  className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1 shadow-sm"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                  <span className="hidden sm:inline">Погодити</span>
                                </button>
                                <button
                                  onClick={() => openRejectModal(cand)}
                                  title="Запит на заміну"
                                  className="py-2 px-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 text-xs font-bold transition"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => handleAssignCandidate(cand)}
                                className="py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center gap-1 shadow-md shadow-amber-500/20"
                              >
                                <PlusCircle className="w-3.5 h-3.5" />
                                <span>Забронювати</span>
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: OFFICIAL DOCUMENTS & CONTRACTS */}
            {activeTab === 'docs' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-xs flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                  <span>
                    Усі документи відповідають Закону України «Про зайнятість населення» та Ліцензії Мінсоцполітики №1428. Кожен працівник оформлюється офіційно в штат вашого ТОВ/ПП.
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'Типовий B2B договір на підбір персоналу',
                      desc: 'Гарантія безкоштовної заміни протягом 48 годин, 100% захист від мобілізації (ст. 23 ЗУ).',
                      type: 'PDF · 280 KB',
                      badge: 'Офіційний договір'
                    },
                    {
                      title: 'Форма дозволу на застосування праці іноземців',
                      desc: 'Затверджений бланк Державної служби зайнятості України (наказ Мінекономіки).',
                      type: 'DOCX · 145 KB',
                      badge: 'Держпраці / ДЦЗ'
                    },
                    {
                      title: 'Шаблон трудового контракту з іноземним працівником',
                      desc: 'Двомовний контракт (українська / узбецька / англійська) для реєстрації в ДПС.',
                      type: 'DOCX · 190 KB',
                      badge: 'Кадровий облік'
                    },
                    {
                      title: 'Пам’ятка зустрічі та адаптації на виробництві',
                      desc: 'Інструкція для майстрів цеху: мовний мікро-словник, розселення, ТБ і охорона праці.',
                      type: 'PDF · 520 KB',
                      badge: 'Адаптація 360'
                    }
                  ].map((doc, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-white/[0.08] flex items-start justify-between gap-4">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/10 text-amber-400 font-mono">
                          {doc.badge}
                        </span>
                        <h4 className="text-sm font-bold text-white">{doc.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{doc.desc}</p>
                        <span className="text-[11px] text-slate-500 font-mono block">{doc.type}</span>
                      </div>
                      <button
                        onClick={() => {
                          alert(`📄 Зразок документу «${doc.title}» доступний у вашого персонального координатора клубу.`);
                        }}
                        className="p-2.5 rounded-xl bg-white/[0.06] hover:bg-amber-500 hover:text-slate-950 text-slate-300 transition shrink-0"
                        title="Завантажити зразок"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: NEW REQUISITION FORM */}
            {activeTab === 'request' && (
              <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-white/10 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white">Замовити нову бригаду або добір фахівців</h3>
                  <p className="text-xs text-slate-400">
                    Специфікація автоматично потрапляє до відповідального координатора вашого підприємства в CRM.
                  </p>
                </div>

                <form onSubmit={handleRequisitionSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">СПЕЦІАЛЬНІСТЬ / ПОСАДА *</label>
                    <input
                      type="text"
                      required
                      placeholder="Напр. Зварювальники MIG/MAG або Пакувальники"
                      value={reqProfession}
                      onChange={(e) => setReqProfession(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">КІЛЬКІСТЬ ЛЮДЕЙ (ЧОЛ) *</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        required
                        value={reqHeadcount}
                        onChange={(e) => setReqHeadcount(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">МІСТО / ЛОКАЦІЯ РОБІТ</label>
                      <input
                        type="text"
                        placeholder="м. Київ / Київська обл."
                        value={reqCity}
                        onChange={(e) => setReqCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">ПРОПОНОВАНА СТАВКА / ЗАРПЛАТА НА РУКИ (ГРН)</label>
                    <input
                      type="text"
                      placeholder="28 000 – 35 000 грн + житло"
                      value={reqSalary}
                      onChange={(e) => setReqSalary(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">ДОДАТКОВІ ВИМОГИ (ЗМІНИ, ЖИТЛО, РОЗРЯД)</label>
                    <textarea
                      rows={3}
                      placeholder="Вкажіть специфіку верстатів, графік (день/ніч), чи надається гуртожиток..."
                      value={reqComment}
                      onChange={(e) => setReqComment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={reqSubmitting}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs sm:text-sm transition shadow-lg shadow-emerald-500/20"
                  >
                    {reqSubmitting ? 'Передача заявки в CRM...' : 'Надіслати заявку на формування бригади ➔'}
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </main>

      {/* STYLED REJECTION MODAL (REPLACING NATIVE PROMPT) */}
      {rejectModalOpen && candidateToReject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl bg-slate-900 border border-white/15 p-6 shadow-2xl text-slate-100 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Запит на заміну кандидата</span>
              </div>
              <button 
                onClick={() => setRejectModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div>
              <h4 className="text-base font-bold text-white">{candidateToReject.name}</h4>
              <p className="text-xs text-slate-400">{candidateToReject.profession} ({candidateToReject.country})</p>
            </div>

            <div className="space-y-2 text-xs">
              <label className="block font-bold text-slate-300">Оберіть причину заміни:</label>
              {[
                'Невідповідність кваліфікації / розряду',
                'Зміна виробничого графіка чи обсягів',
                'Потрібен інший спеціаліст у цей цех',
                'Інше'
              ].map((r) => (
                <label 
                  key={r} 
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border cursor-pointer transition ${
                    rejectReason === r ? 'bg-amber-500/15 border-amber-500/40 text-amber-200' : 'bg-slate-950/60 border-white/[0.06] text-slate-300'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="reason" 
                    checked={rejectReason === r} 
                    onChange={() => setRejectReason(r)}
                    className="text-amber-500"
                  />
                  <span>{r}</span>
                </label>
              ))}

              {rejectReason === 'Інше' && (
                <input
                  type="text"
                  placeholder="Вкажіть детальну причину..."
                  value={customRejectReason}
                  onChange={(e) => setCustomRejectReason(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-white/15 text-xs text-white mt-2"
                />
              )}
            </div>

            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300/90 leading-relaxed">
              🛡 За договором гарантія заміни становить 48 годин без додаткової комісії.
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setRejectModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-slate-300 font-bold text-xs"
              >
                Скасувати
              </button>
              <button
                type="button"
                disabled={rejectSubmitting}
                onClick={confirmReject}
                className="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md shadow-rose-600/20"
              >
                {rejectSubmitting ? 'Обробка...' : 'Підтвердити заміну'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CANDIDATE DETAILS MODAL */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-white/15 p-5 sm:p-7 shadow-2xl text-slate-100 space-y-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-2xl font-bold">
                  {getCountryFlag(selectedCandidate.country)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{selectedCandidate.name}</h3>
                  <div className="text-xs text-slate-400">{selectedCandidate.country} · {selectedCandidate.profession}</div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedCandidate(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/[0.06] grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Статус у воронці</span>
                <span className="text-amber-400 font-bold">{selectedCandidate.status}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Досвід роботи</span>
                <span className="text-white font-bold">{selectedCandidate.experienceYears || '3+'} років</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Очікувана зарплата</span>
                <span className="text-emerald-400 font-bold">{selectedCandidate.salaryExpectation || 'за сіткою підприємства'}</span>
              </div>
            </div>

            {selectedCandidate.skills && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Кваліфікація та навички:</h4>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] text-xs text-slate-300 leading-relaxed">
                  {selectedCandidate.skills}
                </div>
              </div>
            )}

            {selectedCandidate.bio && (
              <div className="space-y-1.5">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Резюме та біографія:</h4>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/[0.06] text-xs text-slate-400 leading-relaxed whitespace-pre-line">
                  {selectedCandidate.bio}
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {selectedCandidate.companyId === user?.companyId ? (
                <>
                  <button
                    onClick={() => {
                      handleApproveCandidate(selectedCandidate);
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
                  >
                    <Check className="w-4 h-4" />
                    <span>Погодити кандидата на виїзд</span>
                  </button>
                  <button
                    onClick={() => {
                      openRejectModal(selectedCandidate);
                    }}
                    className="py-2.5 px-4 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 font-bold text-xs transition"
                  >
                    Запит на заміну
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    handleAssignCandidate(selectedCandidate);
                    setSelectedCandidate(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Забронювати у штат підприємства</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE BOTTOM NAVIGATION BAR (iOS / Android App feel) */}
      {user && (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#090e1a]/95 backdrop-blur-md border-t border-white/10 px-2 py-1.5 flex items-center justify-around text-[10px] font-bold">
          <button
            onClick={() => setActiveTab('my')}
            className={`flex flex-col items-center gap-0.5 p-1.5 rounded-xl transition ${
              activeTab === 'my' ? 'text-emerald-400' : 'text-slate-400'
            }`}
          >
            <Users className="w-5 h-5" />
            <span>Мої ({myCandidates.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`flex flex-col items-center gap-0.5 p-1.5 rounded-xl transition ${
              activeTab === 'all' ? 'text-amber-400' : 'text-slate-400'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>База ({allCandidates.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('docs')}
            className={`flex flex-col items-center gap-0.5 p-1.5 rounded-xl transition ${
              activeTab === 'docs' ? 'text-blue-400' : 'text-slate-400'
            }`}
          >
            <FileText className="w-5 h-5" />
            <span>Документи</span>
          </button>

          <button
            onClick={() => setActiveTab('request')}
            className={`flex flex-col items-center gap-0.5 p-1.5 rounded-xl transition ${
              activeTab === 'request' ? 'text-white' : 'text-slate-400'
            }`}
          >
            <PlusCircle className="w-5 h-5" />
            <span>Замовити</span>
          </button>
        </nav>
      )}
    </div>
  );
}
