import React, { useState } from 'react';
import { Search, Database as DbIcon, ChevronRight, Lock, X, Terminal, FileText, Unlock } from 'lucide-react';
import { KNOWLEDGE_FEED } from '../constants';

const Database: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ title: string, category: string } | null>(null);
  const [inputCode, setInputCode] = useState('');
  const [authStatus, setAuthStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Track unlocked items by title
  const [unlockedItems, setUnlockedItems] = useState<Set<string>>(new Set());

  const filtered = KNOWLEDGE_FEED.filter(k => 
    k.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    k.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleItemClick = (item: typeof KNOWLEDGE_FEED[0]) => {
    if (unlockedItems.has(item.title)) {
      // Already unlocked interaction (if any)
      return;
    }
    setSelectedItem(item);
    setInputCode('');
    setAuthStatus('idle');
    setIsModalOpen(true);
  };

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputCode.trim() === 'Mass') {
      setAuthStatus('success');
      setTimeout(() => {
        if (selectedItem) {
            setUnlockedItems(prev => new Set(prev).add(selectedItem.title));
        }
        setIsModalOpen(false);
      }, 1000);
    } else {
      setAuthStatus('error');
      setTimeout(() => setAuthStatus('idle'), 2000);
      setInputCode('');
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 max-w-7xl mx-auto pb-20">
      
      {/* Blue Border Container */}
      <div className="border border-tri-neon shadow-[0_0_30px_rgba(0,243,255,0.15)] rounded-xl p-8 md:p-12 min-h-[600px] relative bg-tri-black/50 backdrop-blur-sm overflow-hidden">
        {/* Background Grid Pattern inside box */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 shadow-[0_0_15px_rgba(112,0,255,0.2)]">
                <DbIcon className="text-tri-violet" size={32} />
                </div>
                <div>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wide">Data Vault</h1>
                <p className="text-xs text-tri-neon font-mono tracking-widest">ARCHIVE_ID: 77-ZETA</p>
                </div>
            </div>

            {/* Search */}
            <div className="relative mb-12 group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-tri-neon transition-colors" size={20} />
                <input 
                type="text" 
                placeholder="SEARCH INTELLIGENCE DATABASE..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/60 border border-white/10 rounded-lg py-5 pl-16 pr-4 text-white font-mono text-sm focus:border-tri-violet/50 focus:shadow-[0_0_20px_rgba(112,0,255,0.2)] focus:outline-none transition-all placeholder-gray-700"
                />
            </div>

            {/* List */}
            <div className="space-y-3">
                {filtered.map((item, idx) => {
                    const isUnlocked = unlockedItems.has(item.title);
                    return (
                        <div 
                            key={idx} 
                            onClick={() => handleItemClick(item)}
                            className={`group flex items-center justify-between p-6 border-b border-white/5 hover:bg-white/5 transition-all cursor-pointer rounded-lg ${isUnlocked ? 'border-l-2 border-l-green-500' : ''}`}
                        >
                            <div className="flex items-center gap-6">
                                <span className="text-[10px] font-mono w-24 text-gray-500 uppercase tracking-wider">{item.category}</span>
                                <div className="flex flex-col">
                                    <span className={`text-base font-medium transition-colors ${isUnlocked ? 'text-green-400' : 'text-white group-hover:text-tri-violet'}`}>
                                        {item.title}
                                    </span>
                                    {isUnlocked && <span className="text-[10px] text-gray-500 font-mono mt-1">{item.preview}</span>}
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-4">
                                {isUnlocked ? (
                                    <div className="flex items-center gap-2 text-green-500 text-xs font-mono">
                                        <Unlock size={14} /> DECRYPTED
                                    </div>
                                ) : (
                                    <Lock size={16} className="text-gray-600 group-hover:text-tri-neon transition-colors" />
                                )}
                                {!isUnlocked && (
                                    <ChevronRight size={16} className="text-gray-700 group-hover:text-white transition-transform group-hover:translate-x-1" />
                                )}
                            </div>
                        </div>
                    );
                })}
                
                {filtered.length === 0 && (
                <div className="text-center py-20 border border-dashed border-white/10 rounded-lg">
                    <p className="text-gray-600 font-mono text-sm uppercase tracking-widest">No matching records found in archive.</p>
                </div>
                )}
            </div>
        </div>
      </div>

      {/* Pop-up Window for MASS Code */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-[#050505] border border-tri-neon/30 rounded-xl shadow-[0_0_50px_rgba(0,243,255,0.15)] overflow-hidden relative">
                
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
                    <div className="flex items-center gap-2 text-tri-neon text-xs font-mono">
                        <Terminal size={14} />
                        <span>SECURE ACCESS REQUEST</span>
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
                        <h3 className="text-white font-bold text-lg mb-1">{selectedItem.title}</h3>
                        <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Restricted Intelligence</p>
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

export default Database;