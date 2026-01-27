import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Gamepad2, Brain, Palette, Lock, ArrowLeft, 
  Monitor, Activity, Layers, X, Terminal 
} from 'lucide-react';
import { useAccess } from '../components/AccessContext';

type PortalType = 'games' | 'sims' | 'training' | 'creative' | 'access';

const LyfPage: React.FC = () => {
  const [activePortal, setActivePortal] = useState<PortalType | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [massCode, setMassCode] = useState('');
  const [accessMsg, setAccessMsg] = useState('');
  const { unlockLevel1 } = useAccess();

  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX - innerWidth / 2) / innerWidth,
        y: (e.clientY - innerHeight / 2) / innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleAccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (massCode.trim() === 'Mass') {
      setAccessMsg('ACCESS GRANTED. REALITY LEVEL UPDATED.');
      setTimeout(() => {
        unlockLevel1();
        setActivePortal(null);
      }, 1500);
    } else {
      setAccessMsg('INVALID KEY. SIMULATION LOCKED.');
      setMassCode('');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="h-screen w-full bg-[#050505] overflow-hidden relative font-sans selection:bg-fuchsia-500 selection:text-white pt-16"
    >
      {/* 1. BACKGROUND SYSTEMS */}
      <div 
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out z-0"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      >
         {/* Grid Floor */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(219,39,119,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)_translateY(200px)_scale(2)] opacity-20"></div>
         
         {/* Floating Particles */}
         {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full blur-[1px]"
              style={{
                background: i % 2 === 0 ? '#d946ef' : '#22d3ee',
                width: Math.random() * 3 + 'px',
                height: Math.random() * 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.4 + 0.1,
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            />
         ))}
      </div>

      {/* 2. HUD INTERFACE (Top Layer) */}
      <div className="absolute top-20 left-0 w-full px-8 md:px-12 z-20 flex justify-between items-start pointer-events-none">
         {/* Left HUD */}
         <div className="pointer-events-auto">
            <div className="w-48 h-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 mb-2 rounded-sm shadow-[0_0_15px_rgba(219,39,119,0.3)]"></div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest">
                <span className="text-gray-500 uppercase">Simulation Type:</span>
                <span className="text-cyan-400 font-bold uppercase animate-pulse">Reality</span>
            </div>
         </div>

         {/* Right HUD (Exit) */}
         <Link 
            to="/businesses" 
            className="pointer-events-auto group flex items-center gap-3 text-[10px] md:text-xs font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest border border-white/10 px-6 py-3 bg-black/40 backdrop-blur rounded hover:border-red-500/50 hover:bg-red-950/10"
         >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Exit Simulation
         </Link>
      </div>

      {/* 3. CENTRAL HUB (Nodes) */}
      <div 
         className={`absolute inset-0 flex items-center justify-center transition-all duration-700 z-10 ${activePortal ? 'opacity-0 scale-150 pointer-events-none blur-sm' : 'opacity-100 scale-100'}`}
      >
         {/* Container for responsive scaling */}
         <div 
            className="relative w-[800px] h-[600px] max-w-full max-h-full transition-transform duration-100 ease-out"
             style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) scale(0.85) md:scale(1)` }}
         >

            {/* Connecting Lines (Decorative) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="#d946ef" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#22d3ee" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="#a855f7" strokeWidth="1" />
                <line x1="50%" y1="50%" x2="75%" y2="70%" stroke="#eab308" strokeWidth="1" />
                <circle cx="50%" cy="50%" r="60" stroke="white" strokeWidth="1" fill="none" className="animate-pulse-slow" />
            </svg>
            
            {/* Center: ACCESS */}
            <div 
               onClick={() => setActivePortal('access')}
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-30"
            >
               <div className="relative bg-[#050505] border border-white/10 p-0 rounded-full w-32 h-32 flex flex-col items-center justify-center group-hover:scale-110 group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300">
                  <Lock size={20} className="text-gray-600 mb-2 group-hover:text-white transition-colors" />
                  <span className="text-[10px] font-mono text-gray-600 group-hover:text-white uppercase tracking-widest">Access</span>
               </div>
            </div>

            {/* Top Left: GAME WORLDS */}
            <div 
               onClick={() => setActivePortal('games')}
               className="absolute top-[15%] left-[5%] md:left-[10%] cursor-pointer group z-20"
            >
               <div className="relative bg-black/40 backdrop-blur-md border border-fuchsia-900/50 p-6 rounded-xl w-64 group-hover:scale-105 group-hover:border-fuchsia-500 group-hover:shadow-[0_0_20px_rgba(219,39,119,0.2)] transition-all duration-300">
                  <Gamepad2 size={24} className="text-fuchsia-500 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1 font-display uppercase">Game Worlds</h3>
                  <p className="text-[10px] text-fuchsia-400 font-mono uppercase tracking-wider">Interactive Systems</p>
               </div>
            </div>

            {/* Top Right: SIM ENGINES */}
            <div 
               onClick={() => setActivePortal('sims')}
               className="absolute top-[25%] right-[5%] md:right-[10%] cursor-pointer group z-20"
            >
               <div className="relative bg-black/40 backdrop-blur-md border border-cyan-900/50 p-6 rounded-xl w-64 group-hover:scale-105 group-hover:border-cyan-500 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300">
                  <Monitor size={24} className="text-cyan-500 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1 font-display uppercase">Sim Engines</h3>
                  <p className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider">Model Behavior</p>
               </div>
            </div>

            {/* Bottom Left: REALITY TRAINING */}
            <div 
               onClick={() => setActivePortal('training')}
               className="absolute bottom-[25%] left-[10%] md:left-[15%] cursor-pointer group z-20"
            >
               <div className="relative bg-black/40 backdrop-blur-md border border-purple-900/50 p-6 rounded-xl w-64 group-hover:scale-105 group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300">
                  <Brain size={24} className="text-purple-500 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1 font-display uppercase">Reality Training</h3>
                  <p className="text-[10px] text-purple-400 font-mono uppercase tracking-wider">Cognitive Conditioning</p>
               </div>
            </div>

            {/* Bottom Right: CREATIVE SYSTEMS */}
            <div 
               onClick={() => setActivePortal('creative')}
               className="absolute bottom-[15%] right-[10%] md:right-[15%] cursor-pointer group z-20"
            >
               <div className="relative bg-black/40 backdrop-blur-md border border-yellow-900/50 p-6 rounded-xl w-64 group-hover:scale-105 group-hover:border-yellow-500 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300">
                  <Palette size={24} className="text-yellow-500 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-1 font-display uppercase">Creative Systems</h3>
                  <p className="text-[10px] text-yellow-400 font-mono uppercase tracking-wider">World Building</p>
               </div>
            </div>

         </div>
      </div>

      {/* 4. FOOTER QUOTE */}
      <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none z-10 opacity-50">
          <p className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.4em]">Where simulated worlds train real minds.</p>
      </div>

      {/* 5. ACTIVE PORTAL OVERLAY */}
      {activePortal && (
         <div className="absolute inset-0 z-50 bg-black/95 backdrop-blur-xl animate-[fadeIn_0.5s_ease-out] flex items-center justify-center p-4">
            <button 
               onClick={() => setActivePortal(null)}
               className="absolute top-24 right-8 md:right-16 text-gray-500 hover:text-white transition-colors flex items-center gap-2 font-mono uppercase text-xs tracking-widest border border-white/10 px-4 py-2 rounded hover:bg-white/5"
            >
               Close Portal <X size={16} />
            </button>

            {/* CONTENT CONTAINERS */}
            <div className="animate-in fade-in zoom-in-95 duration-500">
            {/* 🎮 GAMES */}
            {activePortal === 'games' && (
               <div className="max-w-4xl w-full text-center">
                  <Gamepad2 size={64} className="mx-auto text-fuchsia-500 mb-6 animate-bounce" />
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Game Worlds</h2>
                  <p className="text-fuchsia-400 font-mono text-lg mb-12 uppercase tracking-widest">"In Lyf, games are systems - not distractions."</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                     <div className="p-6 border border-fuchsia-500/30 bg-fuchsia-900/10 rounded-xl hover:bg-fuchsia-900/20 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-2">Story-Driven Environments</h3>
                        <p className="text-gray-400 text-sm font-mono">Immersive narratives that test moral alignment and strategic foresight.</p>
                     </div>
                     <div className="p-6 border border-fuchsia-500/30 bg-fuchsia-900/10 rounded-xl hover:bg-fuchsia-900/20 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-2">Physics-Aware Gameplay</h3>
                        <p className="text-gray-400 text-sm font-mono">1:1 Reality mapping where every action carries kinetic consequence.</p>
                     </div>
                  </div>
               </div>
            )}

            {/* 🌌 SIMULATIONS */}
            {activePortal === 'sims' && (
               <div className="max-w-4xl w-full">
                  <div className="flex items-center gap-6 mb-8">
                     <Monitor size={48} className="text-cyan-500" />
                     <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Simulation Engines</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                     {['Decision Making', 'Resource Dynamics', 'Human Behavior'].map((item, i) => (
                        <div key={i} className="h-32 border border-cyan-500/30 rounded-lg flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-cyan-900/10 relative overflow-hidden group">
                           <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                           <span className="font-mono text-cyan-300 text-sm uppercase tracking-wider relative z-10">{item}</span>
                        </div>
                     ))}
                  </div>
                  <p className="text-xl text-gray-300 font-light border-l-4 border-cyan-500 pl-6">
                     Every simulation is a controlled experiment. Modeling the chaos of reality in a sandbox of logic.
                  </p>
               </div>
            )}

            {/* 🧠 TRAINING */}
            {activePortal === 'training' && (
               <div className="max-w-3xl w-full text-center">
                   <div className="inline-block p-4 rounded-full bg-purple-900/20 mb-6">
                      <Brain size={48} className="text-purple-500" />
                   </div>
                   <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Reality Training</h2>
                   <div className="space-y-6 text-left max-w-xl mx-auto">
                      <div className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 rounded">
                         <Activity className="text-purple-500" />
                         <div>
                            <h4 className="text-white font-bold">Cognitive Conditioning</h4>
                            <p className="text-xs text-gray-500 font-mono">Stress-response testing without physical risk.</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 rounded">
                         <Layers className="text-purple-500" />
                         <div>
                            <h4 className="text-white font-bold">Scenario Rehearsal</h4>
                            <p className="text-xs text-gray-500 font-mono">Strategic thinking development for high-stakes environments.</p>
                         </div>
                      </div>
                   </div>
                   <p className="mt-12 text-gray-500 text-xs font-mono uppercase tracking-widest">
                      Used by X-Force & Divu Units
                   </p>
               </div>
            )}

            {/* 🎨 CREATIVE */}
            {activePortal === 'creative' && (
               <div className="max-w-4xl w-full">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                     <div className="flex-1">
                        <Palette size={64} className="text-yellow-500 mb-6" />
                        <h2 className="text-4xl font-display font-bold text-white mb-4">Creative Systems</h2>
                        <p className="text-gray-400 leading-relaxed font-mono text-sm">
                           Lyf provides tools for world-building, game mechanics design, and interactive storytelling. Creativity here is structured, not chaotic.
                        </p>
                     </div>
                     <div className="flex-1 grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/30 rounded-lg animate-pulse"></div>
                        <div className="aspect-square bg-gradient-to-bl from-orange-500/20 to-transparent border border-orange-500/30 rounded-lg"></div>
                        <div className="aspect-square bg-gradient-to-tr from-red-500/20 to-transparent border border-red-500/30 rounded-lg"></div>
                        <div className="aspect-square bg-gradient-to-tl from-pink-500/20 to-transparent border border-pink-500/30 rounded-lg animate-pulse"></div>
                     </div>
                  </div>
               </div>
            )}

            {/* 🔐 ACCESS */}
            {activePortal === 'access' && (
               <div className="max-w-md w-full p-8 border border-red-900/50 bg-black rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
                  
                  <div className="text-center mb-8">
                     <Terminal size={32} className="text-red-500 mx-auto mb-4" />
                     <h2 className="text-2xl font-display font-bold text-white mb-2">Access Layer</h2>
                     <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                        Verify Identity to Unlock Simulations
                     </p>
                  </div>

                  <form onSubmit={handleAccessSubmit} className="space-y-6">
                     <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                           <span>Public</span>
                           <span className="text-green-500">Games</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                           <span>Authorized</span>
                           <span className="text-red-500">Simulations</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-gray-500 uppercase">
                           <span>Restricted</span>
                           <span className="text-red-800">Training</span>
                        </div>
                     </div>

                     <div className="relative group">
                        <input 
                           type="text" 
                           value={massCode}
                           onChange={(e) => setMassCode(e.target.value)}
                           className="w-full bg-red-950/10 border border-red-900/30 rounded p-4 text-center text-red-500 font-mono text-sm tracking-[0.5em] focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.2)] outline-none transition-all uppercase placeholder-red-900/50"
                           placeholder="AUTH KEY"
                           spellCheck={false}
                           autoComplete="off"
                        />
                     </div>

                     <button className="w-full py-4 bg-red-600 hover:bg-red-500 text-black font-bold font-mono text-xs uppercase tracking-widest rounded transition-colors shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                        Verify Access
                     </button>
                  </form>

                  {accessMsg && (
                     <div className="mt-6 text-center text-[10px] font-mono text-red-400 animate-pulse">
                        {'>'} {accessMsg}
                     </div>
                  )}
               </div>
            )}
            </div>
         </div>
      )}

    </div>
  );
};

export default LyfPage;