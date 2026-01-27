import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Shield, Heart, Activity, Radio, Users, 
  Lock, Smartphone, AlertCircle, Eye, CheckCircle 
} from 'lucide-react';

const DivuPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeScenario, setActiveScenario] = useState<number | null>(null);

  useEffect(() => {
    // Simulated smooth entry
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const architecture = [
    {
      title: 'Emergency Trigger Layer',
      icon: Smartphone,
      desc: 'Single-touch activation. Physical & digital triggers designed to work even under extreme stress or coercion.',
      color: 'text-pink-500'
    },
    {
      title: 'Intelligence Layer',
      icon: BrainIcon, 
      desc: 'Threat pattern recognition. Context-aware escalation that understands location, audio environment, and vital signs.',
      color: 'text-violet-500'
    },
    {
      title: 'Communication Layer',
      icon: Radio,
      desc: 'Instant alerts with redundant channels. If data fails, SMS takes over. If SMS fails, mesh networks activate.',
      color: 'text-blue-500'
    },
    {
      title: 'Response Layer',
      icon: Shield,
      desc: 'Community responders and trained force members coordinated in real-time. Divu does not wait for permission to protect.',
      color: 'text-red-500'
    }
  ];

  const scenarios = [
    { title: 'Late-Night Travel', situation: 'Route deviation detected or prolonged static location.', action: 'Silent ping to user. Failure to verify triggers Level 1 Alert.' },
    { title: 'Domestic Threat', situation: 'High-stress audio patterns or sudden impact detected.', action: 'Stealth recording initiates. Location beacons sent to private responders.' },
    { title: 'Child Distress', situation: 'Geofence breach or biometric spike (heart rate).', action: 'Immediate parent notification + live environmental audio feed.' },
    { title: 'Public Isolation', situation: 'User initiates "Watch Me" mode in unsafe areas.', action: 'Real-time location sharing with active responder pool until safe.' }
  ];

  const principles = [
    "Safety over convenience.",
    "Action over noise.",
    "Privacy by default.",
    "Intelligence over authority.",
    "Response over paperwork."
  ];

  return (
    <div className="min-h-screen bg-tri-black text-gray-200 font-sans selection:bg-pink-500/30 selection:text-pink-100">
      
      {/* 1. ENTRY SECTION — GUARDIAN PRESENCE */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* Soft Guardian Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/10 via-tri-black to-tri-black opacity-50"></div>
        
        {/* Heartbeat Pulse Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[80px] animate-pulse-slow"></div>

        <div className={`relative z-10 text-center transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 flex justify-center">
            <div className="p-5 border border-pink-500/20 bg-pink-500/5 rounded-full">
              <Shield size={48} className="text-pink-500" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-wide">
            Divu
          </h1>
          
          <h2 className={`text-lg md:text-xl font-mono text-pink-400 mb-8 uppercase tracking-widest transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            A Women & Child Safety Intelligence Program
          </h2>

          <p className={`max-w-xl mx-auto text-gray-400 font-light text-base md:text-lg italic transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            "Designed for moments when time, trust, and response decide everything."
          </p>
        </div>
      </section>

      {/* 2. WHY DIVU EXISTS */}
      <section className="py-24 px-4 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-16 text-center">Core Reasoning</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          {/* Subtle Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5"></div>

          <div className="text-right md:pr-12">
            <h3 className="text-2xl font-display font-bold text-gray-400 mb-6">Why Safety Systems Fail</h3>
            <ul className="space-y-6 text-gray-500 font-mono text-sm">
              <li className="flex items-center justify-end gap-3">
                <span>Help arrives late</span> <AlertCircle size={14} />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span>Systems depend on attention</span> <Eye size={14} />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span>Panic disables complex action</span> <Activity size={14} />
              </li>
              <li className="flex items-center justify-end gap-3">
                <span>Technology reacts instead of predicts</span> <Radio size={14} />
              </li>
            </ul>
          </div>

          <div className="md:pl-12">
            <h3 className="text-2xl font-display font-bold text-pink-500 mb-6">The Truth</h3>
            <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
              In critical moments, complexity kills response.
            </p>
            <div className="pl-4 border-l-2 border-pink-500/50">
              <p className="text-sm text-gray-400 font-mono">
                Divu was created to reduce action to a single decision — and amplify everything that follows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT DIVU IS (Panels) */}
      <section className="py-24 px-4 bg-tri-dark/30">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="p-8 rounded-lg bg-tri-glassBorder border border-white/5 hover:border-pink-500/20 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">A Safety Intelligence Program</h3>
            <p className="text-gray-400 text-sm">Not just an app. Not just a gadget. A coordinated response ecosystem.</p>
          </div>
          <div className="p-8 rounded-lg bg-tri-glassBorder border border-white/5 hover:border-pink-500/20 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Multi-Layered Protection</h3>
            <p className="text-gray-400 text-sm">Web systems. Mobile triggers. Physical devices. Human responders.</p>
          </div>
          <div className="p-8 rounded-lg bg-tri-glassBorder border border-white/5 hover:border-pink-500/20 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2">Built for Real Conditions</h3>
            <p className="text-gray-400 text-sm">Panic-safe. One-action triggers. Minimal thinking required. Maximum response output.</p>
          </div>
        </div>
      </section>

      {/* 4. SYSTEM ARCHITECTURE */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-12 text-center">Divu System Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architecture.map((layer, idx) => (
            <div key={idx} className="p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-colors group">
              <div className={`mb-4 ${layer.color} opacity-80 group-hover:opacity-100`}>
                <layer.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{layer.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{layer.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE HUMAN LAYER */}
      <section className="py-24 px-4 bg-gradient-to-b from-tri-black to-tri-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 rounded-full blur-[100px]"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Users size={40} className="text-gray-600 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-white mb-6">The Human Layer</h2>
          <p className="text-lg text-gray-300 mb-8 font-light">
            Technology initiates response. <span className="text-white font-bold">Humans complete it.</span>
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8 font-mono">
            Our network consists of trained members, non-biased operators, and intelligence-driven field units. 
            They operate beyond standard institutional limits to ensure safety is not just recorded, but enforced.
          </p>
          <div className="inline-block px-4 py-2 border border-white/10 rounded text-[10px] text-gray-500 uppercase tracking-widest">
            Certain responders operate under a separate clearance layer.
          </div>
        </div>
      </section>

      {/* 6. USE CASES */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-12">Designed for Real Moments</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {scenarios.map((scenario, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-tri-glassBorder border border-white/5 rounded-lg hover:border-pink-500/30 transition-all cursor-default"
              onMouseEnter={() => setActiveScenario(idx)}
              onMouseLeave={() => setActiveScenario(null)}
            >
              <h3 className={`text-xl font-bold mb-4 transition-colors ${activeScenario === idx ? 'text-pink-400' : 'text-white'}`}>
                {scenario.title}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-mono block mb-1">Situation</span>
                  <p className="text-sm text-gray-300">{scenario.situation}</p>
                </div>
                <div className={`transition-opacity duration-300 ${activeScenario === idx ? 'opacity-100' : 'opacity-60'}`}>
                  <span className="text-[10px] text-pink-500 uppercase font-mono block mb-1">System Response</span>
                  <p className="text-sm text-white">{scenario.action}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PHILOSOPHY */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-12">Principles That Cannot Be Compromised</h2>
          <div className="flex flex-col gap-6">
            {principles.map((p, i) => (
              <p key={i} className="text-xl md:text-2xl font-display text-gray-300 hover:text-white transition-colors cursor-default">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTRIBUTION */}
      <section className="py-24 px-4 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Who Can Contribute</h2>
          <p className="text-gray-400 text-sm font-mono">
            Divu is not sold. It is built collectively.
          </p>
        </div>

        <div className="p-8 border border-white/10 rounded-xl bg-tri-glassBorder relative overflow-hidden">
          <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-500 mb-8 text-center">
            <span>ENGINEERS</span>
            <span>DESIGNERS</span>
            <span>RESEARCHERS</span>
            <span>FIELD RESPONDERS</span>
          </div>

          <button className="w-full py-4 bg-pink-900/20 hover:bg-pink-900/40 border border-pink-500/30 text-pink-200 font-bold uppercase tracking-widest text-sm rounded transition-all">
            Signal Contribution Intent
          </button>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="py-16 px-4 text-center border-t border-white/5">
         <Link to="/businesses" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors font-mono text-xs uppercase tracking-widest">
            <ArrowLeft size={14} className="mr-2" /> Return to Mother Network
         </Link>
         
         <div className="max-w-2xl mx-auto space-y-4">
           <p className="text-[10px] text-gray-600 font-mono leading-relaxed uppercase tracking-widest">
              Divu operates under controlled visibility.<br/>
              System internals, responder identities, and operational intelligence are not publicly accessible.
           </p>
           <p className="text-sm text-gray-400 font-display italic pt-4">
             "Divu exists so that hesitation is never the deciding factor."
           </p>
         </div>
      </footer>

    </div>
  );
};

// Helper Icon for Brain since it wasn't in the initial import list but used in architecture
const BrainIcon = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.97-3.465" />
    <path d="M19.97 14.535A4 4 0 0 1 18 18" />
  </svg>
);

export default DivuPage;