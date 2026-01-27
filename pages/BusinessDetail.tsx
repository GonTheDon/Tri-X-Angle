import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BUSINESSES } from '../constants';
import { ArrowLeft, Terminal } from 'lucide-react';
import { useAccess } from '../components/AccessContext';
import { AccessLevel } from '../types';
import BugsBunnyPage from './BugsBunnyPage';
import DivuPage from './DivuPage';
import IcedPage from './IcedPage';
import SparkXsumPage from './SparkXsumPage';
import LyfPage from './LyfPage';

const BusinessDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { accessLevel } = useAccess();

  // Special Routes
  if (id === 'bugsbunny') {
    return <BugsBunnyPage />;
  }
  if (id === 'divu') {
    return <DivuPage />;
  }
  if (id === 'iced') {
    return <IcedPage />;
  }
  if (id === 'sparkxsum') {
    return <SparkXsumPage />;
  }
  if (id === 'lyf') {
    return <LyfPage />;
  }
  
  const business = BUSINESSES.find(b => b.id === id);

  if (!business) {
    return <div className="min-h-screen pt-32 text-center text-white font-mono">ENTITY NOT FOUND.</div>;
  }

  // Security Check for X-Force
  if (business.restricted && accessLevel !== AccessLevel.MOTHER && accessLevel !== AccessLevel.MASS && business.id === 'xforce') {
      return (
          <div className="min-h-screen flex items-center justify-center bg-tri-black text-red-500 font-mono flex-col p-4 text-center">
              <div className="text-6xl mb-4">⛔</div>
              <h1 className="text-2xl font-bold mb-2">ACCESS DENIED</h1>
              <p className="text-gray-500 mb-8">This division requires higher clearance levels.</p>
              <Link to="/businesses" className="px-6 py-2 border border-red-500/50 rounded hover:bg-red-900/20 transition-colors">Return to Safety</Link>
          </div>
      )
  }

  return (
    <div className="min-h-screen bg-tri-black pb-20">
      {/* 1. CINEMATIC ENTRY */}
      <div className="relative h-[60vh] flex flex-col justify-end p-8 md:p-16 border-b border-white/10 overflow-hidden">
        {/* Ambient Glow */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b ${business.color.replace('text-', 'from-')}/20 to-transparent blur-[100px] rounded-full pointer-events-none opacity-50`} />
        
        <div className="relative z-10 max-w-4xl">
            <Link to="/businesses" className="inline-flex items-center text-gray-500 hover:text-white mb-6 transition-colors font-mono text-xs uppercase tracking-widest">
                <ArrowLeft size={14} className="mr-2" /> Mother Network
            </Link>
            <div className={`inline-block px-3 py-1 mb-4 border border-white/20 rounded-full text-xs font-mono uppercase tracking-widest ${business.color}`}>
                Division: {business.name}
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">
                {business.tagline}
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl">
                {business.longDescription}
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* 2. WHY THIS EXISTS */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className="text-xs font-mono text-red-500 uppercase tracking-widest mb-4">The Problem</h3>
                <p className="text-2xl font-display text-gray-400 leading-snug">
                    "{business.problemStatement}"
                </p>
            </div>
            <div>
                <h3 className="text-xs font-mono text-tri-neon uppercase tracking-widest mb-4">The Solution</h3>
                <p className="text-2xl font-display text-white leading-snug">
                    "{business.solutionPhilosophy}"
                </p>
            </div>
        </section>

        {/* 3. CAPABILITIES */}
        <section className="mb-20">
            <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-8 border-b border-gray-800 pb-2">Operational Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {business.capabilitiesDetail?.map((cap, i) => (
                    <div key={i} className="p-6 bg-white/5 border border-white/5 rounded-lg hover:border-white/20 transition-colors">
                        <Terminal className={`w-6 h-6 mb-4 ${business.color}`} />
                        <h4 className="text-white font-bold mb-2">{cap.title}</h4>
                        <p className="text-sm text-gray-500 font-mono">{cap.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* 4. ACTIVE PROJECTS & ACTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                 <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Live Operations</h3>
                 <div className="space-y-4">
                     {business.activeProjects?.map((proj, i) => (
                         <div key={i} className="flex items-center justify-between p-4 border-l-2 border-white/10 bg-tri-glassBorder">
                             <span className="text-white font-medium">{proj.title}</span>
                             <div className="flex items-center gap-2">
                                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                 <span className="text-xs font-mono text-gray-400 uppercase">{proj.status}</span>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>

            <div className="p-6 border border-white/10 rounded-xl bg-gradient-to-b from-white/5 to-transparent">
                <h3 className="text-white font-bold mb-4">Initiate Contact</h3>
                <p className="text-sm text-gray-400 mb-6">Direct channel to {business.name} requires brief validation.</p>
                
                <button className="w-full py-3 rounded border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-colors">
                    REQUEST BRIEFING
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default BusinessDetail;