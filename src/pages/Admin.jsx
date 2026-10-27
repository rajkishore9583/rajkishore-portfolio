import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, KeyRound, ArrowLeft, LogOut, CheckCircle2, AlertCircle, 
  LayoutDashboard, User, FolderKanban, Cpu, Briefcase, Award, 
  Mail, Download, Upload, RotateCcw, Plus, Trash2, Edit3, Save, 
  ExternalLink, Check, Eye, EyeOff, Sparkles, Shield, ToggleLeft, ToggleRight, X,
  Key
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

// Default Admin Password (can be overridden by VITE_ADMIN_PASSWORD in environment)
const DEFAULT_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'Raj@Admin2026';
const AUTH_KEY = 'rajkishore_admin_session';

export default function Admin({ darkMode, onNavigateHome }) {
  const {
    data,
    inbox,
    updatePersonalInfo,
    updateStats,
    toggleAvailability,
    addProject,
    updateProject,
    deleteProject,
    addSkillCategory,
    deleteSkillCategory,
    addSkill,
    updateSkill,
    deleteSkill,
    addExperience,
    updateExperience,
    deleteExperience,
    addCertification,
    updateCertification,
    deleteCertification,
    addEducation,
    updateEducation,
    deleteEducation,
    deleteInboxMessage,
    toggleMessageRead,
    clearInbox,
    resetToDefaults,
    exportDataJSON,
    importDataJSON,
    // Security & Password Management
    adminPassword,
    verifyAdminPassword,
    changeAdminPassword,
    resetAdminPasswordToDefault,
    showToast
  } = usePortfolio();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [authError, setAuthError] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [shake, setShake] = useState(false);

  // Active Tab State
  const [activeTab, setActiveTab] = useState('overview');

  // Handle Login with smooth feedback & verification
  const handleLogin = (e) => {
    e.preventDefault();
    if (!passwordInput.trim()) return;

    setAuthError('');
    setIsAuthenticating(true);

    setTimeout(() => {
      const isValid = verifyAdminPassword 
        ? verifyAdminPassword(passwordInput) 
        : (passwordInput === DEFAULT_PASSWORD);

      if (isValid) {
        sessionStorage.setItem(AUTH_KEY, 'true');
        setIsAuthenticated(true);
        setAuthError('');
        setIsAuthenticating(false);
        showToast('Welcome back, Rajkishore! Administrator access authorized.', 'success');
      } else {
        setIsAuthenticating(false);
        setAuthError('Access Denied: The password you entered is incorrect.');
        setShake(true);
        setTimeout(() => setShake(false), 600);
      }
    }, 450);
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setPasswordInput('');
    showToast('Logged out of Admin CMS.', 'info');
  };

  // =========================================================================
  // ULTRA-MODERN ANIMATED LOGIN SCREEN
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0b0418] text-slate-100 flex items-center justify-center p-4 relative overflow-hidden selection:bg-purple-600/40 selection:text-purple-200">
        
        {/* Futuristic Cyber Matrix Grid */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `radial-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px), radial-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0, 20px 20px'
          }}
        />

        {/* Floating Glowing Neon Gradient Mesh Orbs */}
        <motion.div 
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 75%)' }}
        />

        <motion.div 
          animate={{
            x: [0, -45, 35, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-28 -right-28 w-[520px] h-[520px] rounded-full blur-[150px] pointer-events-none opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(147, 51, 234, 0.25) 50%, transparent 75%)' }}
        />

        <motion.div 
          animate={{
            scale: [0.95, 1.08, 0.95],
            opacity: [0.35, 0.55, 0.35]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[360px] h-[360px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)' }}
        />

        {/* Ambient Floating Dust Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: (i * 90) % 900 - 450,
                y: (i * 70) % 700 - 350,
                opacity: 0.2
              }}
              animate={{
                y: [0, -45, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 5 + (i % 4) * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute left-1/2 top-1/2 w-1.5 h-1.5 rounded-full bg-purple-400/50 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
            />
          ))}
        </div>

        {/* Main Glassmorphic Login Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 25 }}
          animate={shake ? { x: [-12, 12, -8, 8, -4, 4, 0] } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-md rounded-3xl p-[1.5px] bg-gradient-to-b from-purple-500/50 via-purple-700/20 to-cyan-500/30 shadow-[0_0_60px_rgba(168,85,247,0.22)] backdrop-blur-2xl z-10"
        >
          <div className="rounded-3xl p-8 sm:p-10 bg-[#0d061c]/90 backdrop-blur-2xl relative overflow-hidden">
            
            {/* Top Security Pill Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-purple-950/70 border border-purple-500/30 text-purple-300 shadow-glow-sm">
                <Shield className="w-3 h-3 text-cyan-400 animate-pulse" />
                <span>Enterprise CMS Gateway</span>
              </div>
            </div>

            {/* Glowing Icon Header */}
            <div className="flex flex-col items-center text-center space-y-3 mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
                <div className="relative w-16 h-16 rounded-2xl bg-[#130924] border border-purple-500/40 flex items-center justify-center text-white shadow-glow-btn">
                  <Lock className="w-7 h-7 text-purple-300 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-300 bg-clip-text text-transparent">Admin</span> Control Panel
                </h1>
                <p className="text-xs text-purple-300/80 mt-1.5">
                  Authenticated management portal for Rajkishore Pradhan
                </p>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-cyan-400" />
                    Security Passphrase
                  </span>
                </label>

                <div className="relative">
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    required
                    autoFocus
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter admin password..."
                    className="w-full px-4 py-3.5 pr-11 rounded-2xl text-sm bg-[#130924]/90 border border-purple-500/35 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-purple-500/30 outline-none transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-purple-400 hover:text-cyan-300 transition-colors"
                  >
                    {passwordVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Error Banner with AnimatePresence */}
                <AnimatePresence>
                  {authError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2 mt-3 p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs text-rose-300"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{authError}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isAuthenticating}
                className="w-full py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-cyan-600 shadow-glow-btn hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {isAuthenticating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Dashboard</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Bottom Footer Info (Clean & Secure - ZERO password hints!) */}
            <div className="mt-8 pt-6 border-t border-purple-500/20 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={onNavigateHome}
                className="inline-flex items-center gap-1.5 text-purple-300 hover:text-cyan-300 transition-colors group cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>Back to Website</span>
              </button>
              <span className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                256-Bit SSL Encrypted
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    );
  }

  // =========================================================================
  // DASHBOARD LAYOUT
  // =========================================================================
  const unreadMessagesCount = inbox.filter((m) => !m.read).length;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'hero-about', label: 'Hero & About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderKanban, badge: data.projectsData.length },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase, badge: data.experienceData.length },
    { id: 'certifications', label: 'Certificates & Education', icon: Award },
    { id: 'inbox', label: 'Messages Inbox', icon: Mail, badge: unreadMessagesCount > 0 ? unreadMessagesCount : null },
    { id: 'security', label: 'Security & Password', icon: KeyRound },
    { id: 'backup', label: 'Backup & Reset', icon: Download },
  ];

  return (
    <div className="min-h-screen bg-[#0b0418] text-slate-100 flex flex-col selection:bg-purple-600/30 selection:text-purple-300">
      
      {/* Top Admin Header Bar */}
      <header className="sticky top-0 z-40 bg-[#130924]/90 backdrop-blur-md border-b border-purple-500/20 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-glow-sm">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight">Admin CMS</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/20">
                v2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              {data.personalInfo.name} — {data.personalInfo.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Availability Status Toggle */}
          <button
            type="button"
            onClick={toggleAvailability}
            title="Toggle Available for Roles status"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-950/70 border border-purple-500/30 hover:border-purple-400 transition-colors"
          >
            <span className={`w-2 h-2 rounded-full ${data.personalInfo.availableForRoles !== false ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
            <span>{data.personalInfo.availableForRoles !== false ? 'Available for Roles' : 'Busy / Engaged'}</span>
          </button>

          {/* View Live Site */}
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-purple-300 hover:text-white bg-purple-900/40 hover:bg-purple-900/70 border border-purple-500/30 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>View Site</span>
          </button>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="p-2 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/30 transition-all"
            title="Log Out"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:flex-row max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 gap-6">
        
        {/* Left Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0 space-y-1.5">
          <div className="p-3 rounded-2xl glass-dark border border-purple-500/20 mb-4 hidden md:block">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-400 px-3 py-1">
              CMS Sections
            </div>
          </div>

          <div className="flex flex-row md:flex-col gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-purple-950/40 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-purple-300" />
                    <span>{tab.label}</span>
                  </div>

                  {tab.badge !== undefined && tab.badge !== null && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-purple-900/60 text-purple-300'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Active Panel Content */}
        <main className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <OverviewPanel 
                data={data} 
                inbox={inbox}
                setActiveTab={setActiveTab} 
                exportDataJSON={exportDataJSON} 
                resetToDefaults={resetToDefaults}
                onNavigateHome={onNavigateHome}
              />
            )}

            {activeTab === 'hero-about' && (
              <HeroAboutManager 
                personalInfo={data.personalInfo} 
                updatePersonalInfo={updatePersonalInfo} 
                updateStats={updateStats}
              />
            )}

            {activeTab === 'projects' && (
              <ProjectsManager 
                projects={data.projectsData} 
                addProject={addProject} 
                updateProject={updateProject} 
                deleteProject={deleteProject} 
              />
            )}

            {activeTab === 'skills' && (
              <SkillsManager 
                skillsData={data.skillsData} 
                addSkillCategory={addSkillCategory} 
                deleteSkillCategory={deleteSkillCategory} 
                addSkill={addSkill} 
                updateSkill={updateSkill} 
                deleteSkill={deleteSkill} 
              />
            )}

            {activeTab === 'experience' && (
              <ExperienceManager 
                experienceData={data.experienceData} 
                addExperience={addExperience} 
                updateExperience={updateExperience} 
                deleteExperience={deleteExperience} 
              />
            )}

            {activeTab === 'certifications' && (
              <CertificatesEducationManager 
                certificationsData={data.certificationsData} 
                educationData={data.educationData} 
                addCertification={addCertification} 
                updateCertification={updateCertification} 
                deleteCertification={deleteCertification} 
                addEducation={addEducation} 
                updateEducation={updateEducation} 
                deleteEducation={deleteEducation} 
              />
            )}

            {activeTab === 'inbox' && (
              <InboxManager 
                inbox={inbox} 
                deleteInboxMessage={deleteInboxMessage} 
                toggleMessageRead={toggleMessageRead} 
                clearInbox={clearInbox} 
              />
            )}

            {activeTab === 'security' && (
              <SecurityPasswordManager 
                changeAdminPassword={changeAdminPassword} 
                resetAdminPasswordToDefault={resetAdminPasswordToDefault} 
                handleLogout={handleLogout} 
                showToast={showToast} 
              />
            )}

            {activeTab === 'backup' && (
              <BackupManager 
                exportDataJSON={exportDataJSON} 
                importDataJSON={importDataJSON} 
                resetToDefaults={resetToDefaults} 
              />
            )}
          </AnimatePresence>
        </main>

      </div>
    </div>
  );
}

// =========================================================================
// 1. OVERVIEW PANEL
// =========================================================================
function OverviewPanel({ data, inbox, setActiveTab, exportDataJSON, resetToDefaults, onNavigateHome }) {
  const totalSkills = data.skillsData.reduce((acc, cat) => acc + cat.skills.length, 0);

  const stats = [
    { label: 'Total Projects', value: data.projectsData.length, tab: 'projects', icon: FolderKanban },
    { label: 'Technical Skills', value: totalSkills, tab: 'skills', icon: Cpu },
    { label: 'Certifications', value: data.certificationsData.length, tab: 'certifications', icon: Award },
    { label: 'Experience Milestones', value: data.experienceData.length, tab: 'experience', icon: Briefcase },
    { label: 'Inbox Inquiries', value: inbox.length, tab: 'inbox', icon: Mail },
    { label: 'Admin Security', value: 'Protected', tab: 'security', icon: KeyRound },
  ];

  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-6"
    >
      {/* Welcome Card */}
      <div className="p-6 sm:p-8 rounded-3xl glass-dark border border-purple-500/30 relative overflow-hidden">
        <div className="max-w-xl space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-900/60 text-purple-300 border border-purple-500/30">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Live CMS Controller
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Hello, {data.personalInfo.firstName || 'Rajkishore'}!
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Manage your SAP consulting case studies, skills matrix, credentials, and profile details in real-time. All updates reflect instantly on your portfolio.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <button
              type="button"
              onClick={onNavigateHome}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-glow-btn hover:shadow-glow transition-all"
            >
              Preview Live Portfolio
            </button>
            <button
              type="button"
              onClick={exportDataJSON}
              className="px-5 py-2.5 rounded-full text-xs font-bold text-purple-200 bg-purple-950/60 border border-purple-500/30 hover:bg-purple-900/40 transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Download JSON Backup
            </button>
          </div>
        </div>
      </div>

      {/* Stats Counter Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.label}
              type="button"
              onClick={() => setActiveTab(s.tab)}
              className="p-5 rounded-2xl glass-dark border border-purple-500/20 hover:border-purple-400/50 hover:shadow-glow-sm transition-all text-left group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-neon-purple group-hover:scale-105 transition-transform">
                  {s.value}
                </span>
                <Icon className="w-5 h-5 text-purple-400/60 group-hover:text-purple-300 transition-colors" />
              </div>
              <p className="text-xs font-semibold text-slate-300">{s.label}</p>
            </button>
          );
        })}
      </div>

      {/* Quick Access Action Shortcuts */}
      <div className="p-6 rounded-3xl glass-dark border border-purple-500/20 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300">
          Quick Management Actions
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => setActiveTab('projects')}
            className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/40 text-left transition-all"
          >
            <div className="font-bold text-xs sm:text-sm text-white mb-1">Add / Edit Projects</div>
            <p className="text-[11px] text-slate-400">Update SAP S/4HANA O2C, Python, and SCADA showcases</p>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('hero-about')}
            className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/40 text-left transition-all"
          >
            <div className="font-bold text-xs sm:text-sm text-white mb-1">Edit Bio & Credentials</div>
            <p className="text-[11px] text-slate-400">Update headline, graduation year, resume PDF link</p>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('inbox')}
            className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400/40 text-left transition-all"
          >
            <div className="font-bold text-xs sm:text-sm text-white mb-1">Check Inbox</div>
            <p className="text-[11px] text-slate-400">Read inquiries submitted through the contact form</p>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// =========================================================================
// 2. HERO & ABOUT MANAGER
// =========================================================================
function HeroAboutManager({ personalInfo, updatePersonalInfo, updateStats }) {
  const [form, setForm] = useState({ ...personalInfo });
  const [stats, setStats] = useState([...personalInfo.stats]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleStatChange = (index, field, value) => {
    const updated = [...stats];
    updated[index][field] = value;
    setStats(updated);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updatePersonalInfo({
      ...form,
      stats,
    });
  };

  return (
    <motion.div
      key="hero-about"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="p-6 sm:p-8 rounded-3xl glass-dark border border-purple-500/25 space-y-6"
    >
      <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
        <div>
          <h2 className="text-xl font-bold text-white">Hero & About Section</h2>
          <p className="text-xs text-slate-400">Manage headline, contact handles, bio, and stat counters.</p>
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-glow-btn hover:shadow-glow transition-all"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Core Identifiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">First / Display Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">Professional Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">Hero Monospace Bio</label>
            <textarea
              rows={3}
              name="shortBio"
              value={form.shortBio}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400 resize-none"
            />
          </div>
        </div>

        {/* About Section Headings */}
        <div className="space-y-4 pt-4 border-t border-purple-500/20">
          <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300">About Me Copy</h3>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">About Heading</label>
            <input
              type="text"
              name="aboutHeading"
              value={form.aboutHeading}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">About Narrative Description</label>
            <textarea
              rows={3}
              name="aboutDescription"
              value={form.aboutDescription}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400 resize-none"
            />
          </div>
        </div>

        {/* Contact Coordinates */}
        <div className="space-y-4 pt-4 border-t border-purple-500/20">
          <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300">Direct Coordinates & Resume</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">Phone Number</label>
              <input
                type="text"
                name="phoneFormatted"
                value={form.phoneFormatted}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">Resume PDF URL</label>
              <input
                type="text"
                name="resumeUrl"
                value={form.resumeUrl}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none focus:border-purple-400"
              />
            </div>
          </div>
        </div>

        {/* 3 Stat Counter Cards */}
        <div className="space-y-4 pt-4 border-t border-purple-500/20">
          <h3 className="text-sm font-bold uppercase tracking-wider text-purple-300">3 Stat Counter Cards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 space-y-2">
                <label className="block text-[10px] font-bold text-purple-400 uppercase">Stat #{idx + 1}</label>
                <input
                  type="text"
                  value={s.value}
                  onChange={(e) => handleStatChange(idx, 'value', e.target.value)}
                  placeholder="e.g. 7+"
                  className="w-full px-3 py-1.5 rounded-lg text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                />
                <input
                  type="text"
                  value={s.label}
                  onChange={(e) => handleStatChange(idx, 'label', e.target.value)}
                  placeholder="e.g. SAP Certifications"
                  className="w-full px-3 py-1.5 rounded-lg text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-glow-btn hover:shadow-glow transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save & Publish Changes</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}

// =========================================================================
// 3. PROJECTS MANAGER
// =========================================================================
function ProjectsManager({ projects, addProject, updateProject, deleteProject }) {
  const [editingProject, setEditingProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialForm = {
    title: '',
    role: 'SAP Functional Consultant',
    category: 'SAP & ERP',
    image: '/images/sap-bg.png',
    overview: '',
    description: '',
    challenge: '',
    solution: '',
    tags: 'SAP S/4HANA, O2C, Fit-Gap Analysis, UAT',
    codeUrl: 'https://github.com/rajkishore9583',
    demoUrl: '#projects',
    metrics: [
      { label: 'Metric 1', value: '35%' },
      { label: 'Metric 2', value: '94%' },
      { label: 'Metric 3', value: '98.5%' }
    ]
  };

  const [form, setForm] = useState(initialForm);

  const handleOpenAdd = () => {
    setEditingProject(null);
    setForm(initialForm);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (project) => {
    setEditingProject(project);
    setForm({
      ...project,
      tags: Array.isArray(project.tags) ? project.tags.join(', ') : project.tags,
      metrics: project.metrics && project.metrics.length === 3 ? project.metrics : initialForm.metrics,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = form.tags.split(',').map((t) => t.trim()).filter(Boolean);
    const projectPayload = {
      ...form,
      tags: tagsArray,
    };

    if (editingProject) {
      updateProject(editingProject.id, projectPayload);
    } else {
      addProject(projectPayload);
    }
    setIsModalOpen(false);
  };

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-6"
    >
      {/* Top Action Bar */}
      <div className="flex items-center justify-between p-6 rounded-3xl glass-dark border border-purple-500/25">
        <div>
          <h2 className="text-xl font-bold text-white">Projects Manager ({projects.length})</h2>
          <p className="text-xs text-slate-400">Add, edit, or remove enterprise case studies and code repositories.</p>
        </div>
        <button
          type="button"
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-glow-btn hover:shadow-glow transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="p-5 rounded-2xl glass-dark border border-purple-500/20 hover:border-purple-400/40 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-900/60 text-purple-300">
                  {proj.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">{proj.role}</span>
              </div>
              <h3 className="text-base font-bold text-white">{proj.title}</h3>
              <p className="text-xs text-slate-300 line-clamp-2 mt-1">{proj.description}</p>
              
              <div className="flex flex-wrap gap-1 mt-3">
                {proj.tags?.slice(0, 4).map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#130924] text-purple-300 border border-purple-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-purple-500/15 flex items-center justify-between">
              <a
                href={proj.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-purple-400 hover:text-white flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" />
                <span>Repo Link</span>
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenEdit(proj)}
                  className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/40 transition-colors"
                  title="Edit Project"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Delete "${proj.title}"?`)) {
                      deleteProject(proj.id);
                    }
                  }}
                  className="p-1.5 rounded-lg text-rose-400 hover:text-white hover:bg-rose-500/20 transition-colors"
                  title="Delete Project"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 glass-dark border border-purple-500/40 my-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-500/20">
              <h3 className="text-lg font-bold text-white">
                {editingProject ? 'Edit Project' : 'Create New Project'}
              </h3>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Category</label>
                  <input
                    type="text"
                    required
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="e.g. SAP & ERP"
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Role</label>
                  <input
                    type="text"
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="e.g. SAP Functional Consultant"
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Short Description</label>
                <textarea
                  rows={2}
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Overview & Context</label>
                <textarea
                  rows={2}
                  value={form.overview}
                  onChange={(e) => setForm({ ...form, overview: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Enterprise Challenge</label>
                  <textarea
                    rows={2}
                    value={form.challenge}
                    onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Delivered Solution</label>
                  <textarea
                    rows={2}
                    value={form.solution}
                    onChange={(e) => setForm({ ...form, solution: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none resize-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Tags (Comma-Separated)</label>
                <input
                  type="text"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                  placeholder="SAP S/4HANA, O2C, Fit-Gap Analysis"
                  className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm bg-[#130924] border border-purple-500/30 text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Image URL / Preset</label>
                  <input
                    type="text"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    placeholder="/images/sap-bg.png"
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">GitHub Repo URL</label>
                  <input
                    type="text"
                    value={form.codeUrl}
                    onChange={(e) => setForm({ ...form, codeUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-purple-500/20">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:bg-purple-950/50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-glow-btn"
                >
                  {editingProject ? 'Update Project' : 'Publish Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// =========================================================================
// 4. SKILLS MANAGER
// =========================================================================
function SkillsManager({ skillsData, addSkillCategory, deleteSkillCategory, addSkill, updateSkill, deleteSkill }) {
  const [newCatName, setNewCatName] = useState('');
  const [newSkill, setNewSkill] = useState({ name: '', level: 90, tag: 'Core' });
  const [selectedCat, setSelectedCat] = useState(skillsData[0]?.category || '');

  const handleAddCat = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    addSkillCategory(newCatName.trim(), 'Category description');
    setNewCatName('');
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!newSkill.name.trim() || !selectedCat) return;
    addSkill(selectedCat, {
      name: newSkill.name.trim(),
      level: Number(newSkill.level) || 85,
      tag: newSkill.tag.trim() || 'Technical',
    });
    setNewSkill({ name: '', level: 90, tag: 'Core' });
  };

  return (
    <motion.div
      key="skills"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-6"
    >
      {/* Top Creation Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Create Category */}
        <div className="p-5 rounded-2xl glass-dark border border-purple-500/25 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300">Add Skill Category</h3>
          <form onSubmit={handleAddCat} className="flex gap-2">
            <input
              type="text"
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              placeholder="e.g. Cloud & DevOps"
              className="flex-1 px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-all flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              Add
            </button>
          </form>
        </div>

        {/* Add Skill to Category */}
        <div className="p-5 rounded-2xl glass-dark border border-purple-500/25 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300">Add Skill Pill</h3>
          <form onSubmit={handleAddSkill} className="space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value)}
                className="col-span-1 px-2.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-purple-200 outline-none"
              >
                {skillsData.map((c) => (
                  <option key={c.category} value={c.category}>{c.category}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Skill name..."
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                className="col-span-2 px-3 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Tag (e.g. ERP Core)"
                value={newSkill.tag}
                onChange={(e) => setNewSkill({ ...newSkill, tag: e.target.value })}
                className="flex-1 px-3 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
              />
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#130924] border border-purple-500/30 text-xs">
                <span>{newSkill.level}%</span>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                  className="w-16 accent-purple-500"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-glow-sm"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Categories & Skills Matrix */}
      <div className="space-y-6">
        {skillsData.map((catGroup) => (
          <div key={catGroup.category} className="p-6 rounded-3xl glass-dark border border-purple-500/20 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-purple-500/15">
              <div>
                <h3 className="text-base font-bold text-white">{catGroup.category}</h3>
                <p className="text-xs text-slate-400">{catGroup.description}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm(`Delete entire category "${catGroup.category}" and its skills?`)) {
                    deleteSkillCategory(catGroup.category);
                  }
                }}
                className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-500/20 transition-colors"
                title="Delete Category"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {/* Skills Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {catGroup.skills.map((skill, sIdx) => (
                <div
                  key={skill.name}
                  className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-200">{skill.name}</div>
                    <div className="flex items-center gap-2 text-[10px] text-purple-400">
                      <span>{skill.tag}</span>
                      <span>•</span>
                      <span>{skill.level}%</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => deleteSkill(catGroup.category, sIdx)}
                    className="p-1 rounded text-slate-500 hover:text-rose-400 transition-colors opacity-70 group-hover:opacity-100"
                    title="Delete skill"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// =========================================================================
// 5. EXPERIENCE MANAGER
// =========================================================================
function ExperienceManager({ experienceData, addExperience, updateExperience, deleteExperience }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialForm = {
    role: '',
    company: '',
    period: '2024',
    location: '',
    type: 'SAP Consulting',
    badge: 'Enterprise Experience',
    highlights: 'Analyzed process flows\nConducted Fit-Gap analysis',
    tech: 'SAP S/4HANA, O2C, Python'
  };

  const [form, setForm] = useState(initialForm);

  const handleOpenAdd = () => {
    setEditingIndex(null);
    setForm(initialForm);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (exp, idx) => {
    setEditingIndex(idx);
    setForm({
      ...exp,
      highlights: exp.highlights?.join('\n') || '',
      tech: exp.tech?.join(', ') || '',
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const highlightsArray = form.highlights.split('\n').map((h) => h.trim()).filter(Boolean);
    const techArray = form.tech.split(',').map((t) => t.trim()).filter(Boolean);

    const payload = {
      ...form,
      highlights: highlightsArray,
      tech: techArray,
    };

    if (editingIndex !== null) {
      updateExperience(editingIndex, payload);
    } else {
      addExperience(payload);
    }
    setIsModalOpen(false);
  };

  return (
    <motion.div
      key="experience"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between p-6 rounded-3xl glass-dark border border-purple-500/25">
        <div>
          <h2 className="text-xl font-bold text-white">Experience & Internships ({experienceData.length})</h2>
          <p className="text-xs text-slate-400">Manage career milestones across SAP consulting and software development.</p>
        </div>
        <button
          type="button"
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-glow-btn hover:shadow-glow transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Experience</span>
        </button>
      </div>

      <div className="space-y-4">
        {experienceData.map((exp, idx) => (
          <div
            key={exp.role + idx}
            className="p-5 rounded-2xl glass-dark border border-purple-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300">
                  {exp.badge}
                </span>
                <span className="text-xs font-mono text-purple-400">{exp.period}</span>
              </div>
              <h3 className="text-base font-bold text-white">{exp.role}</h3>
              <p className="text-xs text-slate-300">{exp.company} • {exp.location}</p>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={() => handleOpenEdit(exp, idx)}
                className="p-2 rounded-xl text-purple-300 hover:text-white hover:bg-purple-900/40"
              >
                <Edit3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm(`Delete "${exp.role}"?`)) {
                    deleteExperience(idx);
                  }
                }}
                className="p-2 rounded-xl text-rose-400 hover:bg-rose-500/20"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-xl rounded-3xl p-6 sm:p-8 glass-dark border border-purple-500/40 my-8 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-purple-500/20">
              <h3 className="text-lg font-bold text-white">
                {editingIndex !== null ? 'Edit Experience' : 'Add Experience Entry'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Role Title</label>
                <input
                  type="text"
                  required
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Timeline / Period</label>
                  <input
                    type="text"
                    required
                    value={form.period}
                    onChange={(e) => setForm({ ...form, period: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Location</label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Badge Tag</label>
                  <input
                    type="text"
                    value={form.badge}
                    onChange={(e) => setForm({ ...form, badge: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Highlights (One bullet per line)</label>
                <textarea
                  rows={3}
                  value={form.highlights}
                  onChange={(e) => setForm({ ...form, highlights: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-purple-300 mb-1">Tech Chips (Comma-separated)</label>
                <input
                  type="text"
                  value={form.tech}
                  onChange={(e) => setForm({ ...form, tech: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-purple-500/20">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-xs text-slate-300">
                  Cancel
                </button>
                <button type="submit" className="px-5 py-2 text-xs font-bold text-white bg-purple-600 rounded-full shadow-glow-btn">
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// =========================================================================
// 6. CERTIFICATES & EDUCATION MANAGER
// =========================================================================
function CertificatesEducationManager({
  certificationsData,
  educationData,
  addCertification,
  updateCertification,
  deleteCertification,
  addEducation,
  updateEducation,
  deleteEducation,
}) {
  const [newCert, setNewCert] = useState({
    title: '',
    issuer: 'SAP',
    platform: 'SAP Learning',
    badgeUrl: '#',
    date: 'Certified',
    description: '',
  });

  const handleAddCert = (e) => {
    e.preventDefault();
    if (!newCert.title.trim()) return;
    addCertification(newCert);
    setNewCert({
      title: '',
      issuer: 'SAP',
      platform: 'SAP Learning',
      badgeUrl: '#',
      date: 'Certified',
      description: '',
    });
  };

  return (
    <motion.div
      key="certifications"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-8"
    >
      {/* Certifications Management */}
      <div className="p-6 rounded-3xl glass-dark border border-purple-500/25 space-y-5">
        <h2 className="text-xl font-bold text-white">Certifications & Badges ({certificationsData.length})</h2>

        <form onSubmit={handleAddCert} className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-purple-300">Add New Certificate</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Certificate Title..."
              value={newCert.title}
              onChange={(e) => setNewCert({ ...newCert, title: e.target.value })}
              className="px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
            />
            <input
              type="text"
              placeholder="Issuer (e.g. SAP)"
              value={newCert.issuer}
              onChange={(e) => setNewCert({ ...newCert, issuer: e.target.value })}
              className="px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
            />
            <input
              type="text"
              placeholder="Verification URL..."
              value={newCert.badgeUrl}
              onChange={(e) => setNewCert({ ...newCert, badgeUrl: e.target.value })}
              className="px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
            />
            <input
              type="text"
              placeholder="Date / Status..."
              value={newCert.date}
              onChange={(e) => setNewCert({ ...newCert, date: e.target.value })}
              className="px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
            />
          </div>
          <textarea
            rows={2}
            placeholder="Description..."
            value={newCert.description}
            onChange={(e) => setNewCert({ ...newCert, description: e.target.value })}
            className="w-full px-3.5 py-2 rounded-xl text-xs bg-[#130924] border border-purple-500/30 text-white outline-none resize-none"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition-all flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            Add Certificate
          </button>
        </form>

        <div className="space-y-3">
          {certificationsData.map((cert, idx) => (
            <div
              key={cert.title}
              className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 flex items-center justify-between gap-3"
            >
              <div>
                <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                <p className="text-xs text-purple-400">{cert.issuer} • {cert.date}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm(`Delete certificate "${cert.title}"?`)) {
                    deleteCertification(idx);
                  }
                }}
                className="p-1.5 rounded text-rose-400 hover:bg-rose-500/20"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Education Management */}
      <div className="p-6 rounded-3xl glass-dark border border-purple-500/25 space-y-4">
        <h2 className="text-xl font-bold text-white">Education Timelines ({educationData.length})</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {educationData.map((edu, idx) => (
            <div key={edu.degree} className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400">{edu.period}</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-purple-900/60 text-purple-200">{edu.grade}</span>
              </div>
              <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
              <p className="text-xs text-slate-300">{edu.institution}</p>
              <input
                type="text"
                value={edu.period}
                onChange={(e) => updateEducation(idx, { ...edu, period: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg text-xs bg-[#130924] border border-purple-500/30 text-white outline-none"
                placeholder="Timeline e.g. 2024 – 2027"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// =========================================================================
// 7. CONTACT MESSAGES / INBOX MANAGER
// =========================================================================
function InboxManager({ inbox, deleteInboxMessage, toggleMessageRead, clearInbox }) {
  return (
    <motion.div
      key="inbox"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="p-6 sm:p-8 rounded-3xl glass-dark border border-purple-500/25 space-y-6"
    >
      <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
        <div>
          <h2 className="text-xl font-bold text-white">Contact Form Inquiries ({inbox.length})</h2>
          <p className="text-xs text-slate-400">Captured messages submitted by visitors through the portfolio.</p>
        </div>
        {inbox.length > 0 && (
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Clear all messages from inbox?')) {
                clearInbox();
              }
            }}
            className="text-xs text-rose-400 hover:text-rose-300 underline"
          >
            Clear All
          </button>
        )}
      </div>

      {inbox.length === 0 ? (
        <div className="p-12 text-center text-slate-400 text-xs">
          No inquiries yet. New submissions from your portfolio will appear here.
        </div>
      ) : (
        <div className="space-y-3">
          {inbox.map((msg) => (
            <div
              key={msg.id}
              className={`p-5 rounded-2xl transition-all border ${
                msg.read
                  ? 'bg-purple-950/20 border-purple-500/15 text-slate-400'
                  : 'bg-purple-950/50 border-purple-500/40 text-slate-100 shadow-glow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${msg.read ? 'bg-slate-500' : 'bg-emerald-400'}`} />
                  <span className="font-bold text-sm text-white">{msg.name}</span>
                  <a href={`mailto:${msg.email}`} className="text-xs text-purple-400 hover:underline">
                    ({msg.email})
                  </a>
                </div>
                <span className="text-[11px] font-mono text-slate-500">{msg.date}</span>
              </div>

              <p className="text-xs leading-relaxed text-slate-200 mt-2 whitespace-pre-wrap">
                {msg.message}
              </p>

              <div className="pt-3 mt-3 border-t border-purple-500/15 flex items-center justify-end gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => toggleMessageRead(msg.id)}
                  className="text-purple-300 hover:text-white"
                >
                  {msg.read ? 'Mark as Unread' : 'Mark as Read'}
                </button>
                <button
                  type="button"
                  onClick={() => deleteInboxMessage(msg.id)}
                  className="text-rose-400 hover:text-rose-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// =========================================================================
// 8. BACKUP & RESET MANAGER
// =========================================================================
function BackupManager({ exportDataJSON, importDataJSON, resetToDefaults }) {
  const [importText, setImportText] = useState('');

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        importDataJSON(content);
      }
    };
    reader.readAsText(file);
  };

  const handleManualImport = () => {
    if (!importText.trim()) return;
    if (importDataJSON(importText.trim())) {
      setImportText('');
    }
  };

  return (
    <motion.div
      key="backup"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-6"
    >
      <div className="p-6 rounded-3xl glass-dark border border-purple-500/25 space-y-4">
        <h2 className="text-xl font-bold text-white">Export & Backup</h2>
        <p className="text-xs text-slate-400">
          Download a complete snapshot of your portfolio data as a JSON file to keep an offline backup or commit to GitHub.
        </p>
        <button
          type="button"
          onClick={exportDataJSON}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-glow-btn hover:shadow-glow transition-all"
        >
          <Download className="w-4 h-4" />
          <span>Export JSON Backup File</span>
        </button>
      </div>

      <div className="p-6 rounded-3xl glass-dark border border-purple-500/25 space-y-4">
        <h2 className="text-xl font-bold text-white">Import / Restore Backup</h2>
        <p className="text-xs text-slate-400">
          Select a previously exported JSON file to restore your portfolio content:
        </p>

        <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-purple-200 bg-purple-950/60 border border-purple-500/30 hover:bg-purple-900/40 cursor-pointer">
          <Upload className="w-4 h-4" />
          <span>Choose JSON File</span>
          <input type="file" accept=".json" onChange={handleFileUpload} className="hidden" />
        </label>
      </div>

      <div className="p-6 rounded-3xl bg-rose-950/20 border border-rose-500/30 space-y-3">
        <h3 className="text-base font-bold text-rose-300">Danger Zone: Reset to Factory Defaults</h3>
        <p className="text-xs text-slate-400">
          Reset all portfolio data back to the original default state (Rajkishore Pradhan, B.Tech 2024–2027, default projects).
        </p>
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Are you sure you want to restore factory default data? Any unsaved edits will be reverted.')) {
              resetToDefaults();
            }
          }}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-rose-300 bg-rose-500/20 border border-rose-500/30 hover:bg-rose-500/30 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset to Default Data</span>
        </button>
      </div>
    </motion.div>
  );
}

// =========================================================================
// 8. SECURITY & PASSWORD MANAGER PANEL
// =========================================================================
function SecurityPasswordManager({ changeAdminPassword, resetAdminPasswordToDefault, handleLogout, showToast }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password strength calculation
  const getStrength = (pass) => {
    if (!pass) return { score: 0, text: 'Empty', color: 'bg-slate-700', width: '0%' };
    let score = 0;
    if (pass.length >= 6) score += 1;
    if (pass.length >= 10) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass)) score += 1;

    if (score <= 1) return { score: 1, text: 'Weak', color: 'bg-rose-500', width: '25%' };
    if (score === 2) return { score: 2, text: 'Fair', color: 'bg-amber-500', width: '50%' };
    if (score === 3) return { score: 3, text: 'Good', color: 'bg-purple-500', width: '75%' };
    return { score: 4, text: 'Strong', color: 'bg-emerald-500', width: '100%' };
  };

  const strength = getStrength(newPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!currentPassword) {
      setErrorMsg('Please enter your current administrator password.');
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setErrorMsg('New password must be at least 6 characters in length.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg('New password and confirmation password do not match.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const result = changeAdminPassword(currentPassword, newPassword);
      setIsSubmitting(false);

      if (result.success) {
        setSuccessMsg('Admin security password updated successfully! Your new password is now active.');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        setErrorMsg(result.error || 'Failed to update password. Please check your current password.');
      }
    }, 400);
  };

  const handleResetDefault = () => {
    if (window.confirm('Reset admin password to the factory default ("Raj@Admin2026")?')) {
      const result = resetAdminPasswordToDefault();
      if (result.success) {
        setSuccessMsg('Admin password has been reset to system default (Raj@Admin2026).');
        setErrorMsg('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
      }
    }
  };

  return (
    <motion.div
      key="security"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl glass-dark border border-purple-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 shadow-glow-sm">
            <KeyRound className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Security & Password</h2>
            <p className="text-xs text-slate-400">
              Manage your administrator credentials and session security settings
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Change Password Card */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl glass-dark border border-purple-500/30 relative">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-400" />
              Change Admin Password
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Update the security password used to access this CMS. Changes take effect immediately without redeploying.
            </p>

            {successMsg && (
              <motion.div 
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3.5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{successMsg}</span>
              </motion.div>
            )}

            {errorMsg && (
              <motion.div 
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3.5 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2.5"
              >
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Current Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrent ? 'text' : 'password'}
                    required
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter existing password..."
                    className="w-full px-4 py-3 pr-11 rounded-xl text-sm bg-[#130924]/80 border border-purple-500/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-400 hover:text-white transition-colors"
                  >
                    {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5 flex items-center justify-between">
                  <span>New Password</span>
                  {newPassword && (
                    <span className="text-[10px] font-mono text-slate-400">
                      Strength: <strong className="text-white">{strength.text}</strong>
                    </span>
                  )}
                </label>
                <div className="relative">
                  <input
                    type={showNew ? 'text' : 'password'}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="At least 6 characters..."
                    className="w-full px-4 py-3 pr-11 rounded-xl text-sm bg-[#130924]/80 border border-purple-500/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-400 hover:text-white transition-colors"
                  >
                    {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>

                {/* Password Strength Bar */}
                {newPassword && (
                  <div className="w-full h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: strength.width }}
                      className={`h-full ${strength.color} transition-all duration-300`}
                    />
                  </div>
                )}
              </div>

              {/* Confirm New Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5 flex items-center justify-between">
                  <span>Confirm New Password</span>
                  {confirmPassword && (
                    <span className={`text-[10px] font-mono ${confirmPassword === newPassword ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {confirmPassword === newPassword ? '✓ Passwords match' : '✕ Does not match'}
                    </span>
                  )}
                </label>
                <div className="relative">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-type new password..."
                    className="w-full px-4 py-3 pr-11 rounded-xl text-sm bg-[#130924]/80 border border-purple-500/30 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-purple-400 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-400 hover:text-white transition-colors"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-3 py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 hover:from-purple-500 hover:to-cyan-600 shadow-glow-btn hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Updating Security Credentials...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save New Password</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Right Column: Security Status & Controls */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Active Session Info Card */}
          <div className="p-6 rounded-3xl glass-dark border border-purple-500/25 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              Active Session Status
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <span className="text-slate-400">Authentication</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Administrator
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <span className="text-slate-400">Storage Protection</span>
                <span className="font-semibold text-purple-300">Browser Local Encrypted</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-500/20">
                <span className="text-slate-400">Role Privilege</span>
                <span className="font-semibold text-cyan-300">Primary Portfolio Owner</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="w-full py-2.5 rounded-full text-xs font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/30 hover:bg-rose-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Terminate Session & Logout</span>
            </button>
          </div>

          {/* Reset to Default Card */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-purple-500/20 space-y-3">
            <h4 className="text-sm font-bold text-purple-300 flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-amber-400" />
              Restore Default Password
            </h4>
            <p className="text-xs text-slate-400">
              Forgot your customized password? You can revert the security password back to the factory system default anytime.
            </p>
            <button
              type="button"
              onClick={handleResetDefault}
              className="px-4 py-2 rounded-full text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Password to Default</span>
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
