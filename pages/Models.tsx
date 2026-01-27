import React, { useState } from 'react';
import { Cpu, Lock, Terminal, X, ShieldAlert } from 'lucide-react';
import { useAccess } from '../components/AccessContext';
import { AccessLevel } from '../types';
import GlitchText from '../components/GlitchText';

const MODELS = [
  { id: 'tri-alpha', name: 'Tri-Alpha', status: 'Active', latency: '12ms', type: 'Language Analysis', load: 60 },
  { id: 'vector-9', name: 'Vector-9', status: 'Training', latency: 'N/A', type: 'Visual Recognition', load: 85 },
  { id: 'chaos-engine', name: 'Chaos-Engine', status: 'Restricted', latency: '0.4ms', type: 'Probability Sim', load: 40 },
  { id: 'nexus-core', name: 'Nexus-Core', status: 'Standby', latency: '1ms', type: 'Strategic Planning', load: 10 },
  { id: 'sentinel-v4', name: 'Sentinel-V4', status: 'Active', latency: '8ms', type: 'Threat Detection', load: 75 },
  { id: 'helix-gen', name: 'Helix-Gen', status: 'Offline', latency: '--', type: 'Genetic Sequencing', load: 0 },
];

const Models: React.FC = () => {
  const { accessLevel, unlockLevel1 } = useAccess();
  const [selectedModel, setSelectedModel] = useState<typeof MODELS[0] | null>(null);
  const [authCode, setAuthCode] = useState('');
  const [authError, setAuthError] = useState(false);

  // If level is PUBLIC, encryption is active.
  // If level is MASS or MOTHER, encryption is lifted.
  const isLocked = accessLevel === AccessLevel.PUBLIC;

  const handleModelClick = (model: typeof MODELS[0]) => {
    if (isLocked) {
      setSelectedModel(model);
      setAuthCode('');
      setAuthError(false);
    }
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (authCode.trim() === 'Mass') {
      unlockLevel1();
      setSelectedModel(null);
    } else {
      setAuthError(true);
      setTimeout(() => setAuthError(false), 2000);
      setAuthCode('');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-20">
       {/* Header */}
       <div className="mb-12 flex items-center justify-between">
         <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2 border-l-4 border-tri-neon pl-4">
              Predictive Models
            </h1>
            <p className="text-gray-500 font-mono text-sm pl-5">
              Advanced neural architectures for simulation and inference.
            </p>
         </div>
         {isLocked && (
           <div className="flex items-center gap-2 px-3 py-1 bg-red-900/20 border border-red-500/50 rounded text-red-500 text-xs font-mono uppercase tracking-widest animate-pulse">
             <Lock size={12} /> Encryption Active
           </div>
         )}
       </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MODELS.map((model, i) => (
          <div 
            key={i} 
            onClick={() => handleModelClick(model)}
            className={`
              relative overflow-hidden rounded-xl p-6 border transition-all duration-300
              ${isLocked 
                ? 'bg-[#080808] border-red-900/30 hover:border-red-500/50 cursor-pointer group' 
                : 'bg-tri-glassBorder border-white/10 hover:border-tri-neon/30 cursor-default'
              }
            `}
          >
             {/* Encrypted Overlay Effect */}
             {isLocked && (
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>
             )}

             <div className="flex justify-between items-start mb-4 relative z-10">
                {isLocked ? (
                   <Lock className="w-8 h-8 text-red-600/70 group-hover:text-red-500 transition-colors" />
                ) : (
                   <Cpu className={`w-8 h-8 ${model.status === 'Active' ? 'text-green-500' : model.status === 'Restricted' ? 'text-red-500' : 'text-yellow-500'}`} />
                )}
                
                <span className={`text-[10px] font-mono border px-2 py-1 rounded ${
                  isLocked 
                    ? 'border-red-900 text-red-700 bg-red-950/20' 
                    : 'border-white/10 text-gray-400'
                }`}>
                  {isLocked ? 'LOCKED' : model.status}
                </span>
             </div>
             
             <h3 className={`text-xl font-bold mb-1 ${isLocked ? 'text-gray-500' : 'text-white'}`}>
               {model.name}
             </h3>
             <div className="text-xs text-gray-600 font-mono mb-6 uppercase tracking-wider h-4">
               {isLocked ? <GlitchText text="ENCRYPTED PROTOCOL" speed={50} /> : model.type}
             </div>
             
             <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4 relative z-10">
               <div>
                 <div className="text-[10px] text-gray-600 uppercase mb-1">Latency</div>
                 <div className={`font-mono text-sm ${isLocked ? 'text-red-900 blur-sm select-none' : 'text-white'}`}>
                   {isLocked ? '88ms' : model.latency}
                 </div>
               </div>
               <div>
                  <div className="text-[10px] text-gray-600 uppercase mb-1">Load</div>
                  <div className="w-full bg-gray-900 h-1.5 rounded-full mt-1.5 overflow-hidden">
                    <div 
                      className={`h-full ${isLocked ? 'bg-red-900/50' : 'bg-tri-neon animate-pulse'}`} 
                      style={{ width: `${model.load}%` }}
                    ></div>
                  </div>
               </div>
             </div>

             {isLocked && (
               <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest border border-red-500/50 px-4 py-2 rounded bg-black">
                   <Lock size={12} /> Auth Required
                 </div>
               </div>
             )}
          </div>
        ))}
      </div>

      {/* Auth Modal */}
      {selectedModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
           <div className="w-full max-w-md bg-[#050505] border border-red-900/50 rounded-xl shadow-[0_0_50px_rgba(220,38,38,0.2)] overflow-hidden relative">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/5">
                 <div className="flex items-center gap-2 text-red-500 text-xs font-mono">
                    <ShieldAlert size={14} />
                    <span>RESTRICTED MODEL ACCESS</span>
                 </div>
                 <button onClick={() => setSelectedModel(null)} className="text-gray-500 hover:text-white transition-colors">
                    <X size={18} />
                 </button>
              </div>
              
              <div className="p-8">
                 <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-red-900/20 border border-red-500/20 flex items-center justify-center mx-auto mb-4 text-red-500">
                       <Cpu size={32} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">{selectedModel.name}</h3>
                    <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                       Encryption Level: High
                    </p>
                 </div>

                 <form onSubmit={handleAuth} className="space-y-4">
                    <div className="space-y-2">
                       <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                           <span>Required Clearance</span>
                           <span className="text-tri-neon">MASS</span>
                       </div>
                       <div className="relative group">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-red-500 transition-colors">
                             <Terminal size={14} />
                          </span>
                          <input 
                             type="text" 
                             value={authCode}
                             onChange={(e) => setAuthCode(e.target.value)}
                             className="w-full bg-black border border-white/10 rounded p-3 pl-10 text-white font-mono text-sm focus:border-red-500 outline-none transition-colors placeholder-gray-800"
                             placeholder="ENTER MASS CODE"
                             autoFocus
                             autoComplete="off"
                          />
                       </div>
                    </div>
                    <button className="w-full py-3 bg-red-900/20 hover:bg-red-900/30 border border-red-900/50 text-red-500 font-bold uppercase tracking-widest text-xs rounded transition-all">
                       Decrypt Model
                    </button>
                 </form>

                 {authError && (
                    <div className="mt-4 text-center text-red-500 text-xs font-mono animate-pulse">
                       ACCESS DENIED. INCORRECT CREDENTIALS.
                    </div>
                 )}
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Models;