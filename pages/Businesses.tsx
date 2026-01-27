import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BUSINESSES } from '../constants';
import { Lock, ArrowUpRight, Brain, Shield, Crosshair, Snowflake, Database, Gamepad2, Layers, Info, X, ChevronDown, Terminal } from 'lucide-react';
import { useAccess } from '../components/AccessContext';
import { AccessLevel } from '../types';

const iconMap: Record<string, any> = {
  Brain, Shield, Crosshair, Snowflake, Database, Gamepad2, Layers
};

const Businesses: React.FC = () => {
  const { accessLevel, unlockLevel1 } = useAccess();
  const navigate = useNavigate();
  
  // X-Force Expansion State
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [massCode, setMassCode] = useState('');
  const [authStatus, setAuthStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [authMessage, setAuthMessage] = useState('');

  const handleExpand = (id: string) => {
    if (expandedId === id) {
        setExpandedId(null);
        setMassCode('');
        setAuthStatus('idle');
        setAuthMessage('');
    } else {
        setExpandedId(id);
    }
  };

  const handleMassAuth = (e: React.FormEvent) => {
      e.preventDefault();
      if (massCode.trim() === 'Mass') { // Hardcoded for demo as per prompt
          setAuthStatus('success');
          setAuthMessage('Clearance accepted. Proceeding to internal layer.');
          setTimeout(() => {
              unlockLevel1();
              navigate('/businesses/xforce');
          }, 2000);
      } else {
          setAuthStatus('error');
          setMassCode('');
          setAuthMessage('Clearance not recognized.');
          setTimeout(() => {
              setAuthStatus('idle');
              setAuthMessage('');
          }, 2000);
      }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      
      {/* 1. HERO / INTRODUCTION */}
      <section className="px-4 max-w-7xl mx-auto mb-20 text-center md:text-left">
        <div className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            An <span className="text-tri-neon">Ecosystem</span> of<br/> Purpose-Built Intelligence.
          </h1>
          <div className="pl-0 md:pl-6 border-l-0 md:border-l-2 border-tri-neon/30">
            <h2 className="text-xl md:text-2xl text-gray-200 font-light mb-6">
              Not independent companies. Not scattered ventures.<br/>
              A synchronized network of specialized operational arms - engineered, governed, and evolved under a single intelligence architecture.
            </h2>
            <div className="space-y-4">
              <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
                "Owned by one but managed by many one". The "Spark".
              </p>
              <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
                This page represents the operational surface layer of a much larger system.
                Every entity listed here exists to solve a specific class of real-world problems - ranging from technology acceleration and safety systems to intelligence modeling, innovation, and simulation. 
                These businesses are not experimental ideas. They are deliberately constructed modules, optimized for their domain and designed to work in coordination.
              </p>
              <p className="text-white/60 font-mono text-xs italic">
                What you see here is intentional visibility - enough to understand purpose, not enough to expose internals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTEXT PANELS (Why These Exist) */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-tri-glassBorder border border-white/5 rounded-lg">
                <h4 className="text-white font-bold mb-3 font-display">The Problem</h4>
                <p className="text-sm text-gray-500 font-mono leading-relaxed">
                  Modern systems fail because they are fragmented, noisy, and reactive. They operate in silos with conflicting objectives.
                </p>
            </div>
            <div className="p-6 bg-tri-glassBorder border border-tri-neon/10 rounded-lg">
                <h4 className="text-tri-neon font-bold mb-3 font-display">The Solution</h4>
                <p className="text-sm text-gray-400 font-mono leading-relaxed">
                  This network was built to be the opposite. Intelligence is shared, not duplicated. Decisions are data-driven.
                </p>
            </div>
            <div className="p-6 bg-tri-glassBorder border border-white/5 rounded-lg">
                <h4 className="text-white font-bold mb-3 font-display">The Method</h4>
                <p className="text-sm text-gray-500 font-mono leading-relaxed">
                  Growth is controlled. Ethics and intent are enforced centrally. Together, they form a living architecture, not a portfolio.
                </p>
            </div>
        </div>
      </section>

      {/* 3. THE MOTHER LAYER (Descriptive Block) */}
      <section className="px-4 max-w-7xl mx-auto mb-16 relative">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-gray-500 to-transparent opacity-20 hidden md:block"></div>
        <div className="md:pl-10">
          <div className="flex items-center gap-3 mb-4">
             <Layers className="text-white animate-pulse" size={24} />
             <h3 className="text-2xl font-display font-bold text-white">The Mother Network <span className="text-gray-600 text-sm font-mono tracking-widest uppercase ml-2">(Supervisory Layer)</span></h3>
          </div>
          <p className="text-gray-300 max-w-3xl leading-relaxed mb-6">
            Above and beyond the individual businesses exists a non-public supervisory layer known internally as <strong>Mothers</strong>.
            This layer functions as a strategic controller, ethical filter, and resource allocator. It does not engage publicly.
            Its role is to ensure that every entity beneath it evolves in alignment, not in conflict.
          </p>
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            You do not interact with Mothers directly. You experience its decisions through outcomes.
          </div>
        </div>
      </section>

      {/* 4. UX GUIDE */}
      <section className="px-4 max-w-7xl mx-auto mb-8 flex items-center gap-3 opacity-60">
        <Info size={14} className="text-tri-neon" />
        <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
          The panels below are entry points. Clicking a business begins the learning process.
        </p>
      </section>

      {/* 5. BUSINESS GRID */}
      <section className="px-4 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
            {BUSINESSES.map((biz) => {
            const Icon = iconMap[biz.iconName];
            const isMothers = biz.id === 'mothers';
            const isXForce = biz.id === 'xforce';
            const isExpanded = expandedId === biz.id;
            
            // X-Force Special Logic
            if (isXForce) {
                return (
                    <div 
                        key={biz.id}
                        className={`relative rounded-xl overflow-hidden transition-all duration-500 ${isExpanded ? 'col-span-1 md:col-span-2 lg:col-span-3 bg-[#020202] border border-white/20' : 'bg-black border border-white/5 hover:border-red-900/40 cursor-pointer h-full'}`}
                        onClick={() => !isExpanded && handleExpand(biz.id)}
                    >
                         {/* Default Collapsed State */}
                         {!isExpanded && (
                            <div className="p-8 h-full flex flex-col relative group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none"></div>
                                <div className="flex items-start justify-between mb-6">
                                    <div className="p-3 rounded-lg bg-white/5 text-red-700 transition-colors">
                                        <Crosshair size={24} />
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-mono border border-red-900/50 px-2 py-1 rounded text-red-700 bg-red-950/20">
                                        <Lock size={10} /> RESTRICTED
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-1 text-gray-200">X-Force</h3>
                                <p className="text-xs font-mono mb-4 text-red-900 uppercase tracking-wider">Private Intelligence & Response</p>
                                <div className="mt-auto pt-8">
                                    <button className="w-full py-3 rounded text-sm font-bold flex items-center justify-center gap-2 border border-white/10 text-gray-500 group-hover:text-gray-300 group-hover:border-white/20 transition-all uppercase tracking-widest">
                                        View Dossier
                                    </button>
                                </div>
                            </div>
                         )}

                         {/* Expanded Dossier State */}
                         {isExpanded && (
                             <div className="p-8 md:p-12 animate-in fade-in zoom-in-95 duration-300">
                                 <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-6">
                                     <div>
                                         <h2 className="text-3xl font-display font-bold text-white mb-2">X-Force</h2>
                                         <p className="text-red-500 font-mono text-sm uppercase tracking-widest">Operational Overview (Public Layer)</p>
                                         <p className="text-[10px] text-gray-600 font-mono mt-1">Information below is intentionally limited.</p>
                                     </div>
                                     <button 
                                        onClick={(e) => { e.stopPropagation(); handleExpand(biz.id); }}
                                        className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-xs font-mono uppercase"
                                     >
                                         Close Dossier <X size={16} />
                                     </button>
                                 </div>

                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                     <div className="space-y-8">
                                         <div>
                                             <h3 className="text-lg font-bold text-white mb-3">What X-Force Is</h3>
                                             <p className="text-gray-400 text-sm leading-relaxed">
                                                 X-Force is a privately governed intelligence and response division, designed to operate where traditional systems fail due to delay, bias, bureaucracy, or limitation. It is not military. It is not police. It is not government-controlled. It exists to respond, not to represent.
                                             </p>
                                         </div>
                                         <div>
                                             <h3 className="text-lg font-bold text-white mb-3">Why X-Force Exists</h3>
                                             <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside marker:text-red-900">
                                                 <li>Institutions react slowly</li>
                                                 <li>Authority chains break under pressure</li>
                                                 <li>Neutrality is compromised</li>
                                                 <li>Intelligence is diluted by politics</li>
                                             </ul>
                                             <p className="text-gray-500 text-xs mt-3 italic">X-Force was created to remove friction between decision and action.</p>
                                         </div>
                                     </div>

                                     <div className="space-y-8">
                                         <div>
                                             <h3 className="text-lg font-bold text-white mb-3">Selection Philosophy</h3>
                                             <p className="text-gray-400 text-sm leading-relaxed">
                                                 X-Force members are not recruited. They are identified. Selection is based on cognitive resilience, ethical clarity, pressure tolerance, and systems thinking. Selection difficulty exceeds conventional elite examinations.
                                             </p>
                                         </div>
                                         <div>
                                             <h3 className="text-lg font-bold text-white mb-3">Operational Domains</h3>
                                             <ul className="text-gray-400 text-sm space-y-2 font-mono text-xs">
                                                 <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500"></div> High-risk response coordination</li>
                                                 <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500"></div> Intelligence-driven rescue operations</li>
                                                 <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500"></div> Threat anticipation & neutralization</li>
                                                 <li className="flex items-center gap-2"><div className="w-1 h-1 bg-red-500"></div> Crisis intervention support</li>
                                             </ul>
                                         </div>
                                     </div>
                                 </div>

                                 <div className="relative mb-12">
                                     <div className="absolute inset-0 flex items-center">
                                         <div className="w-full border-t border-red-900/30"></div>
                                     </div>
                                     <div className="relative flex justify-center text-xs uppercase tracking-widest">
                                         <span className="bg-[#020202] px-4 text-red-700 font-mono">Access Boundary - Clearance Required</span>
                                     </div>
                                 </div>

                                 <div className="max-w-md mx-auto text-center">
                                     <h3 className="text-white font-bold mb-2">Authorized Access Only</h3>
                                     <p className="text-gray-500 text-xs mb-6">
                                         X-Force does not accept applications. Access is granted through verification, not interest.
                                         If you possess a valid Mass Code, you may proceed.
                                     </p>

                                     <form onSubmit={handleMassAuth} className="space-y-4">
                                         <div className="relative">
                                             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
                                                 <Terminal size={14} />
                                             </span>
                                             <input 
                                                 type="text" 
                                                 value={massCode}
                                                 onChange={(e) => setMassCode(e.target.value)}
                                                 className="w-full bg-black border border-white/10 rounded p-3 pl-10 text-white font-mono text-sm focus:border-red-500/50 outline-none transition-colors"
                                                 placeholder="Mass Authorization"
                                                 spellCheck={false}
                                             />
                                         </div>
                                         <button 
                                             type="submit"
                                             className="w-full py-3 bg-red-900/20 hover:bg-red-900/40 border border-red-900/30 text-red-200 font-bold uppercase tracking-widest text-xs rounded transition-all"
                                         >
                                             Verify Clearance
                                         </button>
                                     </form>
                                     {authMessage && (
                                         <div className={`mt-4 font-mono text-xs ${authStatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                             {authMessage}
                                         </div>
                                     )}
                                 </div>

                                 <div className="mt-12 text-center border-t border-white/5 pt-6">
                                     <button 
                                        onClick={(e) => { e.stopPropagation(); handleExpand(biz.id); }}
                                        className="text-gray-600 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
                                     >
                                         Close Dossier
                                     </button>
                                 </div>
                             </div>
                         )}
                    </div>
                );
            }

            // Normal Business Card Logic
            const isRestricted = (biz.restricted && accessLevel !== AccessLevel.MOTHER && accessLevel !== AccessLevel.MASS && !isXForce) || isMothers;
            const CardComponent = (isRestricted ? 'div' : Link) as any;
            const linkProps = isRestricted ? {} : { to: `/businesses/${biz.id}` };
            
            let borderClass = 'border-white/10';
            if (isMothers) borderClass = 'border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.05)]';
            
            return (
                <CardComponent 
                    key={biz.id} 
                    {...linkProps}
                    className={`group relative bg-tri-dark border ${borderClass} rounded-xl p-8 overflow-hidden transition-all flex flex-col h-full ${!isRestricted ? 'hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-opacity-50 cursor-pointer' : 'cursor-default'}`}
                >
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${isMothers ? 'from-white/10' : 'from-white/5'} to-transparent rounded-bl-full transition-opacity group-hover:opacity-70`} />
                
                <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-lg bg-white/5 ${biz.color} ${!isRestricted ? 'group-hover:bg-white/10' : ''} transition-colors`}>
                        <Icon size={24} />
                    </div>
                    {biz.restricted && (
                        <div className={`flex items-center gap-1 text-[10px] font-mono border px-2 py-1 rounded ${isMothers ? 'text-gray-300 border-gray-600 bg-gray-900' : 'text-red-500 border-red-900/50 bg-red-950/30'}`}>
                           <Lock size={10} /> {isMothers ? 'SUPERVISORY' : 'RESTRICTED'}
                        </div>
                    )}
                    </div>

                    <h3 className={`text-2xl font-bold mb-1 transition-colors ${isMothers ? 'text-white' : 'text-white group-hover:text-tri-neon'}`}>{biz.name}</h3>
                    <p className={`text-xs font-mono mb-4 ${biz.color} opacity-80 uppercase tracking-wider`}>{biz.tagline}</p>
                    
                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                    {biz.description}
                    </p>

                    {!isRestricted && (
                        <div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300 mb-2">
                            <p className="text-[10px] text-tri-neon font-mono">
                                {"> CLICK TO ACCESS OPERATIONAL DASHBOARD"}
                            </p>
                        </div>
                    )}

                    <div className="mt-auto space-y-3">
                        {biz.id === 'bugsbunny' && (
                            <Link 
                            to="/plans" 
                            className="w-full py-3 rounded text-sm font-bold flex items-center justify-center gap-2 bg-transparent border border-tri-neon/50 text-tri-neon hover:bg-tri-neon hover:text-black transition-all"
                            >
                            VIEW PLANS
                            </Link>
                        )}

                        <button 
                            disabled={isRestricted}
                            className={`w-full py-3 rounded text-sm font-bold flex items-center justify-center gap-2 transition-all border ${
                            isRestricted 
                                ? 'bg-gray-900 border-gray-800 text-gray-600 cursor-not-allowed' 
                                : 'bg-transparent border-white/20 text-white group-hover:bg-white group-hover:text-black group-hover:border-white'
                            }`}
                        >
                            {isMothers ? 'VISIBILITY LIMITED' : 'ENTER DIVISION'}
                            {!isRestricted && <ArrowUpRight size={14} />}
                        </button>
                    </div>
                </div>
                </CardComponent>
            );
            })}
        </div>
      </section>

      {/* 6. REALITY STATEMENT FOOTER */}
      <section className="px-4 max-w-4xl mx-auto text-center border-t border-white/5 pt-12">
        <p className="text-[10px] text-gray-600 font-mono leading-loose uppercase tracking-widest">
            All information on this page is provided for informational and observational purposes only.<br/>
            Internal systems, intelligence layers, and operational controls are not publicly accessible.<br/>
            To progress beyond surface visibility, authorization is required.
        </p>
      </section>

    </div>
  );
};

export default Businesses;