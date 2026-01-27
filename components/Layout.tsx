import React, { useState } from 'react';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';
import AccessModal from './AccessModal';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="bg-tri-black min-h-screen text-gray-200 selection:bg-tri-neon selection:text-black font-sans">
      <ParticleBackground />
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />
      
      <main className="relative z-10 fade-in">
        {children}
      </main>

      <AccessModal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 mt-20 text-center text-xs text-gray-600 font-mono">
        <p>&copy; {new Date().getFullYear()} TriXAngle Architecture. All Rights Reserved.</p>
        <p className="mt-2 opacity-50">Authorized Personnel Only.</p>
      </footer>
    </div>
  );
};

export default Layout;