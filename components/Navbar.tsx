import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAccess } from './AccessContext';
import { AccessLevel } from '../types';
import { Menu, X, Terminal, Lock, Globe, ShieldAlert, Info } from 'lucide-react';

const Navbar: React.FC<{ onOpenTerminal: () => void }> = ({ onOpenTerminal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { accessLevel } = useAccess();
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Businesses', path: '/businesses' },
    { name: 'Community', path: '/community' },
    { name: 'Database', path: '/database' },
    { name: 'Models', path: '/models' },
  ];

  const getLinkStyle = (path: string) => {
    const isActive = location.pathname === path;
    return `block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 font-mono tracking-widest ${
      isActive
        ? 'text-tri-neon bg-tri-glassBorder'
        : 'text-gray-400 hover:text-white hover:bg-tri-glass'
    }`;
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 bg-tri-black/80 backdrop-blur-md border-b border-tri-glassBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-display font-bold text-xl tracking-tighter flex items-center gap-2">
              <Globe className="w-5 h-5 text-tri-neon animate-pulse-slow" />
              TriXAngle
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link key={link.name} to={link.path} className={getLinkStyle(link.path)}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
             {/* Interactive Clearance Badge */}
             <div className="hidden md:flex flex-col items-end mr-4 group relative cursor-help">
               <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-1">
                 Clearance <Info size={10} />
               </span>
               <span className={`text-xs font-bold font-mono ${accessLevel === AccessLevel.MOTHER ? 'text-red-500' : accessLevel === AccessLevel.MASS ? 'text-tri-neon' : 'text-gray-400'}`}>
                 {accessLevel}
               </span>

               {/* Tooltip */}
               <div className="absolute top-full right-0 mt-4 w-72 p-4 bg-[#0a0a0a] border border-white/20 rounded-lg shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-50">
                 <div className="flex items-start gap-3">
                    <ShieldAlert className="text-tri-neon shrink-0" size={16} />
                    <div>
                      <p className="text-white font-bold text-xs uppercase mb-1">Access Protocol</p>
                      <p className="text-gray-400 text-[10px] font-mono leading-relaxed">
                        You are viewing the public observation layer. Operational systems are masked. Certified access is required for full system interaction.
                      </p>
                    </div>
                 </div>
               </div>
             </div>

            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-full bg-tri-glassBorder hover:bg-tri-neon/20 text-tri-neon transition-all"
              aria-label="Access Gate"
            >
              {accessLevel === AccessLevel.PUBLIC ? <Lock size={18} /> : <Terminal size={18} />}
            </button>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-tri-glass focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-tri-black/95 backdrop-blur-xl border-b border-tri-glassBorder">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={getLinkStyle(link.path)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;