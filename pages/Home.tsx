import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GlitchText from '../components/GlitchText';
import { KNOWLEDGE_FEED } from '../constants';
import { useAccess } from '../components/AccessContext';
import { ArrowRight, Lock, Activity, Cpu, Layers, Terminal, X, Shield, FileText, CheckCircle2 } from 'lucide-react';
import { AccessLevel } from '../types';

const Home: React.FC<{ onRequestAccess: () => void }> = ({ onRequestAccess }) => {
  const { accessLevel, unlockLevel1 } = useAccess();

  // Feed Access Modal State
  const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
  const [selectedFeedItem, setSelectedFeedItem] = useState<typeof KNOWLEDGE_FEED[0] | null>(null);
  const [inputCode, setInputCode] = useState('');
  const [authStatus, setAuthStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFeedItemClick = (item: typeof KNOWLEDGE_FEED[0]) => {
    if (item.locked && accessLevel === AccessLevel.PUBLIC) {
      setSelectedFeedItem(item);
      setInputCode('');
      setAuthStatus('idle');
      setIsFeedModalOpen(true);
    }
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode.trim() === 'Mass') {
      setAuthStatus('success');
      setTimeout(() => {
        unlockLevel1();
        setIsFeedModalOpen(false);
      }, 2000);
    } else {
      setAuthStatus('error');
      setTimeout(() => setAuthStatus('idle'), 2000);
      setInputCode('');
    }
  };

  return (
    <div className="min-h-screen pt-16">
      
      {/* 1. HERO SECTION - AUTHORITY UPGRADE */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-10 pb-20">
        
        {/* Confidentiality Strip */}
        <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-tri-neon/20 bg-tri-neon/5 text-[10px] font-mono text-tri-neon uppercase tracking-widest shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                <Lock size={10} /> Restricted Intelligence System · Public Observation Mode
            </span>
        </div>

        <div className="mb-8 relative z-10">
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
            <GlitchText text="TriXAngle" speed={50} />
          </h1>
          <p className="text-tri-neon/80 font-mono text-lg md:text-xl tracking-[0.2em] uppercase mb-4">
            Intelligence Architecture
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          {/* Main Tagline */}
          <div className="space-y-4">
            <p className="text-gray-200 font-light text-2xl md:text-3xl">
              Reality is not for everyone. <span className="text-white font-medium">Intelligence is.</span>
            </p>
            <p className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-wider max-w-2xl mx-auto">
                A confidential research & development architecture spanning science, technology, intelligence, and human systems.
            </p>
          </div>

          {/* Buttons with Microcopy */}
          <div className="flex flex-col items-center justify-center gap-8 mt-8">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                <div className="flex flex-col gap-2">
                    <Link to="/database" className="w-full md:w-auto px-8 py-3 bg-white/5 border border-white/10 hover:border-tri-neon/50 hover:bg-tri-neon/10 text-white rounded transition-all duration-300 backdrop-blur-sm uppercase tracking-wider font-mono text-sm">
                    Explore Public
                    </Link>
                    <span className="text-[10px] text-gray-600 font-mono">View non-operational layers</span>
                </div>
                
                <div className="flex flex-col gap-2">
                    <button 
                    onClick={onRequestAccess}
                    className="w-full md:w-auto px-8 py-3 bg-tri-neon/80 hover:bg-tri-neon text-black font-bold rounded shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 uppercase tracking-wider font-mono text-sm"
                    >
                    Request Access
                    </button>
                    <span className="text-[10px] text-gray-600 font-mono">Certification required</span>
                </div>
            </div>
          </div>

          {/* What This Is Paragraph */}
          <div className="mt-12 pt-8 border-t border-white/5 max-w-3xl mx-auto">
             <p className="text-gray-400 text-sm leading-relaxed font-mono text-justify md:text-center opacity-80">
                TriXAngle is a multi-domain intelligence and research system designed for certified thinkers, builders, and specialists working on real-world problems across technology, science, safety, governance, and advanced systems. Public access is limited to informational observation. Operational layers require authorization.
             </p>
          </div>
        </div>
      </section>

      {/* 2. SYSTEM STATUS PANEL */}
      <section className="px-4 md:px-8 max-w-6xl mx-auto mb-20 transform -translate-y-10">
         <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-2">
               <Activity size={14} className="text-tri-neon" />
               <h3 className="text-xs font-bold text-white uppercase tracking-widest">System Status</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div className="p-3 bg-white/5 rounded border border-white/5 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-mono">
                     <Lock size={10} /> Access Mode
                  </div>
                  <span className="text-white text-xs font-bold font-mono">Public Observation</span>
               </div>
               <div className="p-3 bg-white/5 rounded border border-white/5 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-mono">
                     <Cpu size={10} /> Core Systems
                  </div>
                  <span className="text-green-500 text-xs font-bold font-mono flex items-center gap-2">
                     Active <span className="text-[8px] border border-green-500/30 px-1 rounded text-green-500/70">RESTRICTED</span>
                  </span>
               </div>
               <div className="p-3 bg-white/5 rounded border border-white/5 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-mono">
                     <FileText size={10} /> Research Modules
                  </div>
                  <span className="text-yellow-500 text-xs font-bold font-mono">Under Development</span>
               </div>
               <div className="p-3 bg-white/5 rounded border border-white/5 flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase font-mono">
                     <CheckCircle2 size={10} /> Certification Layer
                  </div>
                  <span className="text-tri-neon text-xs font-bold font-mono">Enabled</span>
               </div>
            </div>
         </div>
      </section>

      {/* 3. CORE INTELLIGENCE DIVISIONS */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-800 pb-4 gap-4">
            <div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">Core Intelligence Divisions</h2>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-wide">
                    Each division operates under strict access control. Public users observe structure - certified users execute work.
                </p>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Businesses', icon: Layers, link: '/businesses', desc: 'Mother Network & Subsidiaries' },
            { title: 'Community', icon: Activity, link: '/community', desc: 'Elite Minds & Builders' },
            { title: 'Database', icon: Cpu, link: '/database', desc: 'Intelligence Vault' },
            { title: 'Models', icon: Activity, link: '/models', desc: 'Predictive Engines' }
          ].map((item, idx) => (
            <Link key={idx} to={item.link} className="group relative p-6 bg-tri-glassBorder border border-white/5 hover:border-tri-neon/30 rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-tri-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <item.icon className="w-8 h-8 text-tri-neon mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-display text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 font-mono group-hover:text-gray-300">{item.desc}</p>
              <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4 text-tri-neon transform translate-x-0 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. PHILOSOPHY BRIDGE */}
      <section className="py-20 bg-tri-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tri-neon/50 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Bridge Line */}
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest mb-6">
              This system was built for individuals capable of operating beyond surface-level understanding.
          </p>

          <div className="mb-12">
            <span className="inline-block p-2 rounded-full bg-tri-violet/10 text-tri-violet text-xs font-mono mb-4">PHILOSOPHY</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
              Delusion is the default state.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tri-neon to-tri-violet">We engineer the exception.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 border-l border-tri-neon/20 bg-gradient-to-r from-white/5 to-transparent hover:border-tri-neon/50 transition-colors">
              <h4 className="text-tri-neon font-mono mb-2">01. FILTER</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Intelligence must be gated. Open access dilutes potency. We serve only thinkers, builders, and leaders.</p>
            </div>
            <div className="p-6 border-l border-tri-violet/20 bg-gradient-to-r from-white/5 to-transparent hover:border-tri-violet/50 transition-colors">
              <h4 className="text-tri-violet font-mono mb-2">02. SILENCE</h4>
              <p className="text-gray-400 text-sm leading-relaxed">True power is quiet. We operate beneath the noise of public perception, building infrastructure for the next reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIVE FEED - ENHANCED DISCLAIMER */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Container with removed dashed border */}
        <div className="relative rounded-lg p-0 md:p-6">
            {/* Feed Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                    <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                        <Terminal size={12} /> PUBLIC INTELLIGENCE FEED · NON-OPERATIONAL
                    </h2>
                    <p className="text-[10px] text-gray-600 font-mono mt-1">
                        Certain entries require elevated clearance for full access.
                    </p>
                </div>
                <div className="flex gap-2 items-center bg-black/50 border border-white/5 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-[10px] text-red-500 font-mono tracking-widest uppercase">LIVE STREAM</span>
                </div>
            </div>
            
            <div className="space-y-4">
              {KNOWLEDGE_FEED.map((item, idx) => {
                const isLocked = item.locked && accessLevel === AccessLevel.PUBLIC;
                
                return (
                    <div 
                        key={idx} 
                        onClick={() => handleFeedItemClick(item)}
                        className={`flex items-center justify-between p-4 bg-[#111216] border border-white/5 rounded-md transition-all group ${isLocked ? 'cursor-pointer hover:border-tri-violet/40 hover:bg-[#15161c]' : 'cursor-default border-white/5'}`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono border uppercase tracking-wider ${item.category === 'PHYSICS' || item.category === 'AI' || item.category === 'PARADOX' ? 'bg-[#1a1d26] text-[#7a8cba] border-[#2a2f3d]' : 'bg-[#1a1a2e] text-[#7d7aff] border-[#2a2a4a]'}`}>
                              {item.category}
                          </span>
                          {isLocked && (
                            <div className="flex items-center gap-1 text-[10px] text-[#7000ff] bg-[#7000ff]/10 px-2 py-0.5 rounded border border-[#7000ff]/20">
                                <Lock size={10} /> ENCRYPTED
                            </div>
                          )}
                        </div>
                        <h4 className="text-white font-medium text-sm group-hover:text-tri-neon transition-colors">{item.title}</h4>
                        <div className="text-xs text-gray-600 font-mono mt-1 opacity-70 tracking-wide uppercase">
                          {isLocked 
                            ? <span className="text-tri-violet/70"><GlitchText text="[ENCRYPTED] DATA REDACTION ACTIVE. MASS CLEARANCE REQUIRED." speed={30} /></span>
                            : item.preview}
                        </div>
                      </div>
                      <div className="text-right hidden md:block pl-6">
                         <span className="text-xs font-mono text-gray-600">T-{Math.floor(Math.random() * 60) + 10}s</span>
                      </div>
                    </div>
                );
              })}
            </div>
        </div>

      </section>

      {/* 6. ACCESS & REALITY NOTICE */}
      <section className="px-4 max-w-4xl mx-auto mb-20">
          <div className="p-8 border border-white/10 bg-[#080808] text-center rounded-xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
             <div className="mb-4 flex justify-center text-gray-500">
                <Shield size={24} />
             </div>
             <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Access & Reality Notice</h3>
             <p className="text-xs text-gray-500 font-mono leading-relaxed max-w-2xl mx-auto">
                TriXAngle is a controlled intelligence and research system. Public access is limited to informational observation. Certified and recognized individuals may be granted access to specialized research tasks, internal tools, and active projects. This system is under continuous development.
             </p>
          </div>
      </section>

      {/* Feed Access Modal */}
      {isFeedModalOpen && selectedFeedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-[#050505] border border-tri-neon/30 rounded-xl shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden relative">
                
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-2 text-tri-neon text-xs font-mono">
                        <Terminal size={14} />
                        <span>SECURE DATA STREAM</span>
                    </div>
                    <button onClick={() => setIsFeedModalOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                        <X size={18} />
                    </button>
                </div>

                <div className="p-8">
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-900/20 border border-red-500/30 mb-4 text-red-500">
                            <Lock size={20} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">{selectedFeedItem.title}</h3>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Restricted Feed Item</p>
                    </div>

                    <form onSubmit={handleAuthSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                                <span>Security Clearance</span>
                                <span className="text-tri-neon">MASS</span>
                            </div>
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-tri-neon transition-colors">
                                    {'>'}
                                </span>
                                <input 
                                    type="text" 
                                    autoFocus
                                    value={inputCode}
                                    onChange={(e) => setInputCode(e.target.value)}
                                    className={`w-full bg-black border ${authStatus === 'error' ? 'border-red-500' : 'border-white/20'} rounded p-4 pl-8 text-white font-mono text-sm outline-none focus:border-tri-neon focus:shadow-[0_0_15px_rgba(0,243,255,0.1)] transition-all placeholder-gray-800`}
                                    placeholder="ENTER MASS CODE"
                                    autoComplete="off"
                                />
                            </div>
                        </div>

                        <button 
                            type="submit"
                            disabled={authStatus === 'success'}
                            className={`w-full py-4 rounded font-bold text-xs uppercase tracking-widest transition-all ${
                                authStatus === 'success' 
                                    ? 'bg-green-500 text-black border border-green-400'
                                    : 'bg-white/10 hover:bg-tri-neon hover:text-black border border-white/10 text-white'
                            }`}
                        >
                            {authStatus === 'success' ? 'Access Granted' : 'Decrypt Content'}
                        </button>
                    </form>
                    
                    {authStatus === 'success' && (
                        <p className="mt-4 text-center text-xs text-green-500 font-mono animate-pulse">
                            Only Certified and Recognized can Spark.
                        </p>
                    )}

                    {authStatus === 'error' && (
                        <p className="mt-4 text-center text-xs text-red-500 font-mono animate-pulse">
                            ACCESS DENIED. INVALID CREDENTIALS.
                        </p>
                    )}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default Home;