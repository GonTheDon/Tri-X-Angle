import React, { useState, useEffect } from 'react';
import { useAccess } from '../components/AccessContext';
import { AccessLevel } from '../types';
import { Users, Lock, Terminal, X, Unlock } from 'lucide-react';

const TOPIC_POOL = [
  { title: "Optimizing Neural Pathways for Low-Latency Decision Making", author: "Dr. K", tag: "AI Research", desc: "Signal analysis confirms the hypothesis..." },
  { title: "Quantum Resistance in Standard Encryption", author: "ZeroPoint", tag: "Security", desc: "Breaking current cryptographic standards..." },
  { title: "The Geometry of Social Collapse", author: "Architect", tag: "Sociology", desc: "Modeling societal breaking points..." },
  { title: "Algorithmic Governance in Post-Scarcity Economies", author: "Nexus", tag: "Economics", desc: "Resource allocation without bias..." },
  { title: "Sentience Thresholds in Large Language Models", author: "Ghost", tag: "AI Ethics", desc: "Defining the spark of consciousness..." },
  { title: "Hardware-Level Backdoors in Consumer Electronics", author: "Hardware_Junkie", tag: "Security", desc: "Found silicon-level vulnerabilities..." },
  { title: "The Ethics of Memory Manipulation", author: "Mnemosyne", tag: "Bio-Tech", desc: "Editing traumatic events from storage..." },
  { title: "Subspace Communication Protocols", author: "Void_Walker", tag: "Physics", desc: "Faster-than-light data transfer theories..." },
  { title: "Synthetic Biology and Self-Replicating Code", author: "Darwin_X", tag: "Bio-Tech", desc: "DNA as a storage medium..." },
  { title: "Dark Web Topology Mapping", author: "Cartographer", tag: "Network", desc: "Visualizing the unseen layers..." },
  { title: "Predictive History: Using AI to Model the Past", author: "Chronos", tag: "History", desc: "Filling gaps in historical records..." },
  { title: "Energy Harvesting from Zero-Point Fields", author: "Tesla_Reborn", tag: "Physics", desc: "Unlimited power generation concepts..." }
];

const Community: React.FC = () => {
  const { accessLevel, unlockLevel1 } = useAccess();
  const isLocked = accessLevel === AccessLevel.PUBLIC;

  // State for active nodes simulation
  const [activeCount, setActiveCount] = useState(14205);
  const [activeUsers, setActiveUsers] = useState([
    { name: 'User_X91', status: 'Online' },
    { name: 'User_X92', status: 'Online' },
    { name: 'User_X93', status: 'Online' }
  ]);

  // Feed State
  const [displayedTopics, setDisplayedTopics] = useState(TOPIC_POOL.slice(0, 3));

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<{ title: string } | null>(null);
  const [inputCode, setInputCode] = useState('');
  const [authStatus, setAuthStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Effect to randomize users and count
  useEffect(() => {
    // Initial random count setup
    setActiveCount(Math.floor(Math.random() * (28000 - 50 + 1)) + 50);

    const interval = setInterval(() => {
      // Update count
      setActiveCount(prev => {
         const change = Math.floor(Math.random() * 100) - 50; 
         let newCount = prev + change;
         if (newCount > 28000) newCount = 28000;
         if (newCount < 50) newCount = 50;
         return newCount;
      });

      // Generate new users
      const newUsers = Array(3).fill(null).map(() => ({
        name: `User_X${Math.floor(Math.random() * 900) + 100}`,
        status: 'Online'
      }));
      setActiveUsers(newUsers);

    }, 10000); // 10 seconds for user nodes

    return () => clearInterval(interval);
  }, []);

  // Effect to randomize topics every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...TOPIC_POOL].sort(() => 0.5 - Math.random());
      setDisplayedTopics(shuffled.slice(0, 3));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleTopicClick = (topic: typeof TOPIC_POOL[0]) => {
     if (!isLocked) return;
     setSelectedTopic(topic);
     setInputCode('');
     setAuthStatus('idle');
     setIsModalOpen(true);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode.trim() === 'Mass') {
      setAuthStatus('success');
      setTimeout(() => {
         unlockLevel1();
         setIsModalOpen(false);
      }, 1500);
    } else {
      setAuthStatus('error');
      setTimeout(() => setAuthStatus('idle'), 2000);
      setInputCode('');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-20">
      
      {/* Blue Border Container */}
      <div className="border border-tri-neon shadow-[0_0_30px_rgba(0,243,255,0.15)] rounded-xl p-8 md:p-12 mb-12 relative bg-tri-black/50 backdrop-blur-sm overflow-hidden">
        {/* Background Grid Pattern inside box */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">The Collective</h1>
          <p className="text-gray-400 font-mono text-sm">Discussion threads for AI researchers, scientists, and reality architects.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Active Nodes Panel */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8 h-full">
             <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
               <Users className="text-tri-neon" size={20} />
               <h3 className="text-white font-bold text-lg">Active Nodes</h3>
               <span className="ml-auto text-xs font-mono text-tri-neon animate-pulse">
                 {activeCount.toLocaleString()} Connected
               </span>
             </div>
             <div className="space-y-4">
               {activeUsers.map((user, i) => (
                 <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-black/40 border border-white/5">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-black border border-gray-600 shadow-inner"></div>
                   <div>
                     <div className="text-sm text-white font-mono">{user.name}</div>
                     <div className={`text-[10px] font-mono ${user.status === 'Online' ? 'text-green-500' : 'text-yellow-500'}`}>
                       {user.status}
                     </div>
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Read-Only Mode Panel */}
          <div className="border border-red-900/50 bg-red-950/10 rounded-xl p-8 md:p-12 text-center backdrop-blur-sm relative overflow-hidden flex flex-col items-center justify-center h-full min-h-[250px]">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               {/* Scanline effect */}
               <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,0,0,0.05)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
               
               <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Read-Only Mode</h3>
               <p className="text-gray-400 text-sm mb-8 max-w-md relative z-10">
                 Detailed schematics and peer discussions are encrypted for Level 1 (Mass) clearance and above.
               </p>
               <div className="inline-block px-6 py-2 border border-red-500 text-red-500 text-xs font-mono rounded uppercase tracking-widest hover:bg-red-500/10 transition-colors cursor-default relative z-10">
                 OBSERVER ACCESS ONLY
               </div>
          </div>
        </div>
      </div>

      {/* Feed Section (Outside Box) */}
      <div className="max-w-4xl mx-auto space-y-4">
          {displayedTopics.map((post, i) => (
            <div 
              key={i} 
              onClick={() => handleTopicClick(post)}
              className={`bg-[#0a0a0a] border border-white/5 p-6 rounded-lg relative group overflow-hidden transition-all duration-300 ${isLocked ? 'cursor-pointer hover:border-red-900/50' : 'cursor-default border-green-900/30'}`}
            >
              {/* Lock Overlay */}
              {isLocked && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                   <div className="flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-widest bg-black/90 px-4 py-2 rounded border border-red-900 shadow-[0_0_20px_rgba(220,38,38,0.2)]">
                      <Lock size={14} /> Restricted Access
                   </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-3 relative z-0">
                <span className="text-[10px] font-mono text-tri-neon/70 border border-tri-neon/20 px-2 py-0.5 rounded bg-tri-neon/5">{post.tag}</span>
                <div className="flex items-center gap-2">
                  {isLocked ? <Lock size={12} className="text-gray-600" /> : <Unlock size={12} className="text-green-500" />}
                  <span className="text-xs text-gray-600 font-mono">{post.author}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-0">{post.title}</h3>
              <p className="text-sm text-gray-500 relative z-0">
                  {isLocked ? "Content encrypted. Verify clearance to view full discussion thread." : post.desc}
              </p>
            </div>
          ))}
      </div>

      {/* Pop-up Window for MASS Code */}
      {isModalOpen && selectedTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-[#050505] border border-tri-neon/30 rounded-xl shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden relative">
                
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-2 text-tri-neon text-xs font-mono">
                        <Terminal size={14} />
                        <span>SECURE THREAD ACCESS</span>
                    </div>
                    <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                        <X size={18} />
                    </button>
                </div>

                <div className="p-8">
                    {/* Item Info */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-900/20 border border-red-500/30 mb-4 text-red-500">
                            <Lock size={20} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">{selectedTopic.title}</h3>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Encrypted Discussion</p>
                    </div>

                    {/* Auth Form */}
                    <form onSubmit={handleAuthSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                                <span>Security Level</span>
                                <span className="text-tri-neon">Level 1 (MASS)</span>
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
                            {authStatus === 'success' ? 'Access Granted' : 'Verify Clearance'}
                        </button>
                    </form>
                    
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

export default Community;