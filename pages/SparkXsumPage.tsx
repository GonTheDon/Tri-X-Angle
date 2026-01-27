import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Brain, Database, Activity, ShieldCheck, 
  Lock, GitMerge, Cpu, Server, Terminal 
} from 'lucide-react';
import { useAccess } from '../components/AccessContext';

type ModuleType = 'overview' | 'intelligence' | 'data' | 'learning' | 'decision' | 'ethics' | 'access';

const SparkXsumPage: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [massCode, setMassCode] = useState('');
  const [accessMessage, setAccessMessage] = useState('');
  const { unlockLevel1 } = useAccess();

  useEffect(() => {
    // Simulate system boot
    setTimeout(() => setIsLoaded(true), 500);
  }, []);

  const handleModuleClick = (module: ModuleType) => {
    setActiveModule(module);
    setMassCode('');
    setAccessMessage('');
  };

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (massCode.trim() === 'Mass') {
      setAccessMessage('AUTHORIZATION VERIFIED. ACCESS LEVEL UPDATED.');
      setTimeout(() => {
          unlockLevel1();
          setAccessMessage('REDIRECTING TO INTERNAL CONSOLE...'); 
      }, 1500);
    } else {
      setAccessMessage('INVALID AUTHORIZATION KEY.');
      setMassCode('');
    }
  };

  const navItems: { id: ModuleType; label: string; icon: any }[] = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'intelligence', label: 'Intelligence Model', icon: Brain },
    { id: 'data', label: 'Data Architecture', icon: Database },
    { id: 'learning', label: 'Learning Systems', icon: GitMerge },
    { id: 'decision', label: 'Decision Layer', icon: Cpu },
    { id: 'ethics', label: 'Ethics & Control', icon: ShieldCheck },
    { id: 'access', label: 'Access Boundary', icon: Lock },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-[#020202] text-gray-300 font-mono overflow-hidden flex flex-col md:flex-row relative selection:bg-indigo-900 selection:text-white">
      
      {/* 1. LEFT COLUMN - NAVIGATION */}
      <div className={`w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-900 bg-[#050505] flex flex-col z-20 transition-transform duration-700 ease-out ${isLoaded ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-gray-900 bg-black">
          <Link to="/businesses" className="flex items-center text-xs text-indigo-400 hover:text-white mb-6 transition-colors uppercase tracking-wider border border-indigo-900/30 px-3 py-2 rounded w-fit">
            <ArrowLeft size={12} className="mr-2" /> Exit Console
          </Link>
          <h1 className="text-xl font-bold text-white tracking-tighter uppercase mb-1">SparkXsum</h1>
          <div className="text-[10px] text-indigo-500 uppercase tracking-[0.2em]">Intelligence Core</div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 scrollbar-hide">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleModuleClick(item.id)}
              className={`w-full text-left px-6 py-4 flex items-center gap-3 text-xs uppercase tracking-widest transition-all border-l-2 ${
                activeModule === item.id 
                  ? 'border-indigo-500 bg-indigo-900/10 text-white' 
                  : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-gray-900/50'
              }`}
            >
              <item.icon size={14} className={activeModule === item.id ? 'text-indigo-400' : 'text-gray-600'} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-900 text-[10px] text-gray-700 font-mono">
          SYS_STATUS: ONLINE<br/>
          V.9.4.1 (STABLE)
        </div>
      </div>

      {/* 2. CORE CANVAS */}
      <div className="flex-1 relative flex flex-col min-h-0 bg-[#020202]">
        
        {/* Background Grid Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(79,70,229,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        
        <main className="flex-1 overflow-y-auto p-8 md:p-16 relative z-10 flex flex-col justify-center scrollbar-hide">
          
          {/* DEFAULT STATE */}
          {!activeModule && (
            <div className={`text-center transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="inline-block p-4 border border-indigo-900/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_indigo]"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-800 uppercase tracking-widest mb-4">
                Intelligence Systems Active
              </h2>
              <p className="text-gray-600 font-mono text-xs uppercase tracking-[0.2em]">
                Select a module to observe behavior.
              </p>
            </div>
          )}

          {/* MODULE: OVERVIEW */}
          {activeModule === 'overview' && (
            <div className="max-w-3xl mx-auto text-center animate-in slide-in-from-bottom-4 duration-500 fade-in">
              <h2 className="text-xs text-indigo-500 uppercase tracking-[0.3em] mb-8">System Overview</h2>
              <div className="border border-gray-900 bg-[#080808] p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-indigo-900"></div>
                <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
                  SparkXsum is a centralized artificial intelligence and database management system, designed to power, coordinate, and optimize complex operations across multiple domains.
                </p>
                <div className="flex flex-col gap-2 text-sm text-gray-500 font-mono border-t border-gray-900 pt-8">
                  <p>It is not built for demos.</p>
                  <p className="text-gray-400">It is built for decision density.</p>
                </div>
              </div>
            </div>
          )}

          {/* MODULE: INTELLIGENCE MODEL */}
          {activeModule === 'intelligence' && (
            <div className="max-w-4xl mx-auto w-full animate-in slide-in-from-bottom-4 duration-500 fade-in">
              <h2 className="text-xs text-indigo-500 uppercase tracking-[0.3em] mb-8">Intelligence Model</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-800">
                 <div className="bg-[#050505] p-12 flex items-center justify-center relative overflow-hidden border-b md:border-b-0 md:border-r border-gray-800">
                    {/* Abstract Diagram */}
                    <div className="relative w-40 h-40">
                       <div className="absolute inset-0 border border-indigo-900/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                       <div className="absolute inset-4 border border-gray-800 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_20px_indigo]"></div>
                       {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                         <div key={i} className="absolute top-1/2 left-1/2 w-full h-[1px] bg-indigo-900/20 origin-left" style={{ transform: `rotate(${deg}deg)` }}></div>
                       ))}
                    </div>
                 </div>
                 <div className="bg-[#080808] p-12 flex flex-col justify-center">
                    <ul className="space-y-6 text-sm text-gray-400 font-mono">
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500"></div> Multi-model reasoning</li>
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500"></div> Context-aware inference</li>
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500"></div> Domain-adaptive intelligence</li>
                       <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-indigo-500"></div> Constraint-driven outputs</li>
                    </ul>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500 italic">
                      "SparkXsum does not predict for curiosity.<br/>It predicts to decide."
                    </div>
                 </div>
              </div>
            </div>
          )}

          {/* MODULE: DATA ARCHITECTURE */}
          {activeModule === 'data' && (
            <div className="max-w-5xl mx-auto w-full animate-in slide-in-from-bottom-4 duration-500 fade-in">
              <h2 className="text-xs text-indigo-500 uppercase tracking-[0.3em] mb-8">Data Architecture</h2>
              <div className="flex flex-col md:flex-row gap-8">
                 <div className="flex-1 space-y-2">
                    {['Structured + Unstructured Data', 'Temporal Versioning', 'Secure Segmentation', 'Zero-Leak Architecture'].map((item, i) => (
                       <div key={i} className="p-4 border border-gray-800 bg-[#080808] hover:border-indigo-900/50 transition-colors">
                          <span className="text-gray-400 text-sm font-mono">{item}</span>
                       </div>
                    ))}
                 </div>
                 <div className="flex-1 border border-gray-800 bg-[#050505] p-8 flex items-center justify-center">
                    <div className="text-center">
                       <Server className="text-indigo-900 w-16 h-16 mx-auto mb-4 opacity-50" />
                       <div className="text-[10px] text-gray-700 font-mono uppercase tracking-widest">
                          [SCHEMATIC REDACTED]
                       </div>
                    </div>
                 </div>
              </div>
              <div className="mt-8 text-center border-t border-gray-900 pt-8">
                 <p className="text-gray-300 text-sm font-mono">Data is treated as a strategic asset, not storage.</p>
              </div>
            </div>
          )}

          {/* MODULE: LEARNING SYSTEMS */}
          {activeModule === 'learning' && (
            <div className="max-w-3xl mx-auto w-full animate-in slide-in-from-bottom-4 duration-500 fade-in">
               <h2 className="text-xs text-indigo-500 uppercase tracking-[0.3em] mb-8">Learning Systems</h2>
               <div className="space-y-1">
                  {[
                     { title: 'Continuous Learning', desc: 'Real-time ingestion of operational outcomes.' },
                     { title: 'Feedback-Controlled Adaptation', desc: 'Adjusts weights based on error signal propagation.' },
                     { title: 'Drift Detection', desc: 'Identifies deviation from reality baseline.' },
                     { title: 'Self-Correction Loops', desc: 'Autonomous re-calibration of confidence intervals.' }
                  ].map((block, i) => (
                     <div key={i} className="group p-6 border border-gray-800 bg-[#080808] hover:bg-indigo-900/10 hover:border-indigo-500/30 transition-all cursor-default">
                        <h3 className="text-gray-200 text-sm font-bold uppercase mb-1 group-hover:text-indigo-400 transition-colors">{block.title}</h3>
                        <p className="text-gray-600 text-xs font-mono">{block.desc}</p>
                     </div>
                  ))}
               </div>
               <div className="mt-8 p-4 bg-indigo-900/5 border-l-2 border-indigo-500 text-xs text-gray-400 font-mono">
                  Learning is throttled by ethics and intent.
               </div>
            </div>
          )}

          {/* MODULE: DECISION LAYER */}
          {activeModule === 'decision' && (
            <div className="max-w-2xl mx-auto w-full animate-in slide-in-from-bottom-4 duration-500 fade-in">
               <h2 className="text-xs text-indigo-500 uppercase tracking-[0.3em] mb-8">Decision Layer</h2>
               <div className="bg-[#050505] border border-gray-800 p-10 md:p-14 text-justify shadow-2xl">
                  <p className="text-gray-400 text-sm font-mono leading-loose mb-6">
                     <strong className="text-white">DECISION SCORING.</strong> Every output is assigned a confidence vector.
                     <br/><br/>
                     <strong className="text-white">RISK WEIGHTING.</strong> Actions are evaluated against safety constraints before generation.
                     <br/><br/>
                     <strong className="text-white">PRIORITY ARBITRATION.</strong> Conflicting directives are resolved via strategic hierarchy.
                  </p>
                  <div className="h-px w-full bg-gray-800 my-8"></div>
                  <p className="text-xl md:text-2xl text-white font-display uppercase font-bold text-center">
                     SparkXsum does not generate answers.<br/>
                     <span className="text-indigo-500">It generates decisions.</span>
                  </p>
               </div>
            </div>
          )}

          {/* MODULE: ETHICS & CONTROL */}
          {activeModule === 'ethics' && (
            <div className="max-w-xl mx-auto w-full animate-in slide-in-from-bottom-4 duration-500 fade-in">
               <h2 className="text-xs text-indigo-500 uppercase tracking-[0.3em] mb-8">Ethics & Control</h2>
               <div className="flex flex-col gap-4 items-center border border-gray-800 p-8 bg-[#080808]">
                  <ShieldCheck size={32} className="text-gray-500 mb-4" />
                  {['Bias Mitigation', 'Intent Validation', 'Override Constraints', 'Human-in-the-Loop Safeguards'].map((txt, i) => (
                     <div key={i} className="w-full text-center py-2 border-b border-gray-900 text-gray-400 font-mono text-sm last:border-0">
                        {txt}
                     </div>
                  ))}
                  <div className="mt-6 text-indigo-400 text-xs uppercase tracking-widest font-bold">
                     Intelligence without control is instability.
                  </div>
               </div>
            </div>
          )}

          {/* MODULE: ACCESS BOUNDARY */}
          {activeModule === 'access' && (
             <div className="max-w-md mx-auto w-full animate-in slide-in-from-bottom-4 duration-500 fade-in">
                <h2 className="text-xs text-red-500 uppercase tracking-[0.3em] mb-8">Access Boundary</h2>
                <div className="border border-red-900/30 bg-[#0a0505] p-8">
                   <div className="space-y-4 text-xs font-mono text-gray-500 mb-8">
                      <p className="flex justify-between"><span>PUBLIC LAYER</span> <span className="text-green-500">OBSERVATIONAL</span></p>
                      <p className="flex justify-between"><span>AUTHORIZED LAYER</span> <span className="text-red-700">RESTRICTED</span></p>
                      <p className="flex justify-between"><span>CORE LAYER</span> <span className="text-red-900">NO ACCESS</span></p>
                   </div>
                   
                   <form onSubmit={handleAccessSubmit} className="space-y-4">
                      <div className="relative">
                         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600">
                             <Terminal size={12} />
                         </span>
                         <input 
                             type="text" 
                             value={massCode}
                             onChange={(e) => setMassCode(e.target.value)}
                             className="w-full bg-black border border-gray-800 focus:border-red-900/50 text-white font-mono text-xs p-3 pl-8 outline-none uppercase tracking-widest placeholder-gray-800"
                             placeholder="AUTHORIZATION KEY"
                             autoComplete="off"
                             spellCheck={false}
                         />
                      </div>
                      <button className="w-full py-3 bg-red-900/10 hover:bg-red-900/20 border border-red-900/30 text-red-500 hover:text-red-400 text-xs font-bold uppercase tracking-widest transition-colors">
                         Verify Authorization
                      </button>
                   </form>
                   {accessMessage && (
                      <div className="mt-4 text-[10px] text-center font-mono text-gray-400 animate-pulse">
                         {'>'} {accessMessage}
                      </div>
                   )}
                </div>
             </div>
          )}

        </main>
        
        {/* 3. BOTTOM STATUS BAR */}
        <footer className="h-12 bg-[#050505] border-t border-gray-900 flex items-center justify-between px-6 z-20 shrink-0">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] text-gray-500 font-mono uppercase">System: Active</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                 <span className="text-[10px] text-gray-500 font-mono uppercase">Mode: Observation</span>
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              <span className="text-[10px] text-gray-600 font-mono uppercase">Visibility: Public</span>
              <span className="text-[10px] text-gray-600 font-mono uppercase border-l border-gray-800 pl-4">
                 Clearance: None
              </span>
           </div>
        </footer>

      </div>
    </div>
  );
};

export default SparkXsumPage;