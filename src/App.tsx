/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useCallback } from 'react';
import { 
  Search, 
  Copy, 
  Check, 
  Sparkles, 
  Languages, 
  FileText, 
  Megaphone, 
  GraduationCap, 
  Users, 
  Handshake, 
  BarChart2, 
  Gavel, 
  Code2, 
  Globe, 
  Building2,
  X,
  ChevronRight,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CATEGORIES } from './constants';
import { Language, Prompt, Category } from './types';
import { optimizePrompt } from './services/geminiService';

const ICON_MAP: Record<string, any> = {
  FileText,
  Megaphone,
  GraduationCap,
  Users,
  Handshake,
  BarChart2,
  Gavel,
  Code2,
  Globe,
  Building2
};

export default function App() {
  const [lang, setLang] = useState<Language>('ko');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(CATEGORIES[0].id); // Default to first category
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const [inputPrompt, setInputPrompt] = useState('');
  const [optimizedOutput, setOptimizedOutput] = useState('');
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [showOptimizer, setShowOptimizer] = useState(false);

  const t = useCallback((key: { ko: string, en: string }) => key[lang], [lang]);

  const activeCategory = useMemo(() => 
    CATEGORIES.find(c => c.id === selectedCategory) || null
  , [selectedCategory]);

  const filteredPrompts = useMemo(() => {
    let result: Prompt[] = [];
    CATEGORIES.forEach(cat => {
      if (!selectedCategory || cat.id === selectedCategory) {
        result.push(...cat.prompts);
      }
    });

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.content[lang].toLowerCase().includes(q) ||
        p.role.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [selectedCategory, searchQuery, lang]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleOptimize = async () => {
    if (!inputPrompt.trim()) return;
    setIsOptimizing(true);
    try {
      const result = await optimizePrompt(inputPrompt, lang);
      setOptimizedOutput(result);
    } catch (error) {
      alert(lang === 'ko' ? "최적화 도중 오류가 발생했습니다." : "An error occurred during optimization.");
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#050507] text-zinc-100 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 flex-shrink-0 bg-[#0a0a0c] border-r border-zinc-800/50 flex flex-col z-20">
        <div className="p-8 border-b border-zinc-800/50">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 p-2 rounded-xl">
              <Sparkles className="text-white" size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">AIARA Space</h1>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-8 mt-4">
          {/* Tools Section */}
          <div className="space-y-3">
            <p className="px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">분석 도구</p>
            <button 
              onClick={() => setShowOptimizer(true)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all group"
            >
              <Sparkles size={18} className="group-hover:text-amber-400 transition-colors" />
              <span className="font-medium">{lang === 'ko' ? '프롬프트 개선기' : 'Prompt Optimizer'}</span>
            </button>
          </div>

          {/* Categories Section */}
          <div className="space-y-3">
            <p className="px-4 text-[11px] font-bold text-zinc-500 uppercase tracking-widest">카테고리</p>
            <div className="space-y-1">
              <button 
                onClick={() => setSelectedCategory(null)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${!selectedCategory ? 'bg-amber-600/10 text-amber-400 font-bold' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50 font-medium'}`}
              >
                <div className={`w-1 h-4 rounded-full ${!selectedCategory ? 'bg-amber-400' : 'bg-transparent'}`} />
                <span>{lang === 'ko' ? '전체 보기' : 'Show All'}</span>
              </button>
              {CATEGORIES.map(cat => {
                const Icon = ICON_MAP[cat.icon];
                const isActive = selectedCategory === cat.id;
                return (
                  <button 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${isActive ? 'bg-amber-600/10 text-amber-400 font-bold' : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50 font-medium'}`}
                  >
                    <div className={`w-1 h-4 rounded-full ${isActive ? 'bg-amber-400' : 'bg-transparent'}`} />
                    {Icon && <Icon size={18} />}
                    <span>{t(cat.title)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-zinc-800/50 space-y-2">
          <button 
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all text-sm font-bold"
          >
            <div className="flex items-center gap-3">
              <Languages size={18} />
              <span>{lang === 'ko' ? 'Language' : '언어'}</span>
            </div>
            <span className="text-amber-400">{lang === 'ko' ? 'KR' : 'EN'}</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-[#050507]/80 backdrop-blur-md border-b border-zinc-800/50 flex items-center justify-between px-10 z-10">
          <div className="flex-1 max-w-2xl relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-amber-400 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder={lang === 'ko' ? "어떤 프롬프트를 찾으시나요?" : "What prompt are you looking for?"}
              className="w-full bg-zinc-900 border border-zinc-800 focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/5 outline-none rounded-2xl py-3 pl-12 pr-6 text-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-6 ml-6">
            <div className="flex flex-col items-end">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Status</span>
              <span className="text-xs font-bold text-emerald-400">System Online</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-10 custom-scrollbar pb-32">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Section Header */}
            <div className="flex items-end justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-400">
                  {activeCategory ? <span className="bg-amber-600/10 p-2 rounded-xl">{(() => { const Icon = ICON_MAP[activeCategory.icon]; return Icon ? <Icon size={24} /> : <FileText size={24} />; })()}</span> : <FileText size={24} />}
                  <h2 className="text-4xl font-bold tracking-tight">
                    {selectedCategory ? t(activeCategory!.title) : (lang === 'ko' ? '전체 프롬프트 라이브러리' : 'All Prompt Library')}
                  </h2>
                </div>
                <p className="text-zinc-500 text-lg font-medium">
                  {lang === 'ko' ? '비즈니스 생산성을 혁신하는 고품질 데이터 세트입니다.' : 'A high-quality dataset that innovates business productivity.'}
                </p>
              </div>
              <div className="bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800 text-sm font-bold text-zinc-400">
                {filteredPrompts.length} Prompts
              </div>
            </div>

            {/* Prompt Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredPrompts.map((prompt) => (
                  <motion.div 
                    layout
                    key={prompt.id}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[#0c0c0e] border border-zinc-800/50 hover:border-amber-500/30 rounded-[2rem] p-8 flex flex-col gap-6 relative group transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black font-mono text-zinc-600 border border-zinc-800 px-2.5 py-1 rounded-lg uppercase tracking-widest">Prompt #{prompt.id}</span>
                      <div className="flex gap-2">
                        <span className="text-[11px] font-bold bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20">{prompt.role}</span>
                        <span className="text-[11px] font-bold bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">{prompt.type}</span>
                      </div>
                    </div>

                    <div className="min-h-[160px] relative overflow-hidden group/text">
                      <div className="absolute top-0 left-0 w-2 h-full bg-amber-600 rounded-full opacity-50" />
                      <p className="pl-6 text-xl leading-relaxed text-zinc-300 font-medium">
                        {prompt.content[lang]}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleCopy(prompt.id, prompt.content[lang])}
                        className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl transition-all font-bold text-base shadow-lg ${copiedId === prompt.id ? 'bg-emerald-600 text-white shadow-emerald-900/20' : 'bg-zinc-800 hover:bg-white hover:text-black text-zinc-100 shadow-black/20'}`}
                      >
                        {copiedId === prompt.id ? (
                          <><Check size={20} /><span>{lang === 'ko' ? '복사 완료' : 'Copied Success'}</span></>
                        ) : (
                          <><Copy size={20} /><span>{lang === 'ko' ? '프롬프트 복사' : 'Copy Prompt'}</span></>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredPrompts.length === 0 && (
              <div className="py-32 text-center space-y-4">
                <div className="inline-block p-6 bg-zinc-900 rounded-full text-zinc-700">
                  <Search size={64} />
                </div>
                <p className="text-2xl font-bold text-zinc-500">
                  {lang === 'ko' ? '검색 결과가 없습니다.' : 'No results found.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Full Screen Optimizer Modal (Overlay) */}
      <AnimatePresence>
        {showOptimizer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="w-full max-w-5xl h-[85vh] bg-[#0c0c0e] border border-zinc-800 rounded-[3rem] shadow-2xl shadow-amber-500/10 flex flex-col overflow-hidden relative"
            >
              <div className="p-10 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="bg-amber-500 p-4 rounded-2xl shadow-2xl shadow-amber-600/40">
                    <Sparkles className="text-white" size={32} />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold">{lang === 'ko' ? '프롬프트 개선기' : 'Prompt Optimizer'}</h2>
                    <p className="text-zinc-500 text-lg font-medium">{lang === 'ko' ? '내 생각을 훨씬 더 전문적인 프롬프트로 바꿔보세요' : 'Turn your thoughts into much more professional prompts'}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowOptimizer(false)}
                  className="p-3 hover:bg-zinc-800 rounded-full transition-all text-zinc-500 hover:text-white"
                >
                  <X size={40} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <div className="w-6 h-6 border-2 border-zinc-800 rounded-full flex items-center justify-center text-[10px] font-black">1</div>
                    <label className="text-xs font-bold uppercase tracking-[0.2em]">{lang === 'ko' ? '생각 입력' : 'Your Thought'}</label>
                  </div>
                  <div className="relative">
                    <textarea 
                      value={inputPrompt}
                      onChange={(e) => setInputPrompt(e.target.value)}
                      placeholder={lang === 'ko' ? "예: 효과적인 마케팅 문구 좀 써줘" : "e.g., Write some effective marketing copy"}
                      className="w-full bg-[#050507] border border-zinc-800 focus:border-amber-500 focus:ring-8 focus:ring-amber-500/5 outline-none rounded-[2rem] p-8 text-2xl min-h-[180px] transition-all resize-none shadow-inner font-medium"
                    />
                    <button 
                      onClick={handleOptimize}
                      disabled={isOptimizing || !inputPrompt.trim()}
                      className="absolute bottom-6 right-6 bg-amber-600 disabled:bg-zinc-800 disabled:text-zinc-700 hover:bg-amber-500 px-8 py-4 rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 font-bold flex items-center gap-3 text-lg"
                    >
                      {isOptimizing ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}><Sparkles size={24} /></motion.div> : <Send size={24} />}
                      <span>{lang === 'ko' ? '최적화 시작' : 'Start Optimize'}</span>
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {(isOptimizing || optimizedOutput) && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-emerald-500">
                          <div className="w-6 h-6 border-2 border-emerald-900/30 rounded-full flex items-center justify-center text-[10px] font-black">2</div>
                          <label className="text-xs font-bold uppercase tracking-[0.2em]">{lang === 'ko' ? 'AI의 제안' : 'AI Suggestion'}</label>
                        </div>
                        {optimizedOutput && !isOptimizing && (
                          <button 
                            onClick={() => handleCopy('optimizer', optimizedOutput)}
                            className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all font-bold text-sm ${copiedId === 'optimizer' ? 'bg-emerald-600 text-white' : 'bg-zinc-800 text-emerald-500 hover:bg-emerald-500 hover:text-white border border-emerald-500/20'}`}
                          >
                            {copiedId === 'optimizer' ? <><Check size={16} /><span>{lang === 'ko' ? '복사됨' : 'Copied'}</span></> : <><Copy size={16} /><span>{lang === 'ko' ? '결과 복사' : 'Copy Result'}</span></>}
                          </button>
                        )}
                      </div>
                      
                      <div className={`relative bg-[#050507] border rounded-[2rem] p-10 min-h-[200px] transition-all duration-700 ${isOptimizing ? 'border-zinc-800 animate-pulse' : 'border-emerald-500/30'}`}>
                        {isOptimizing ? (
                          <div className="flex flex-col items-center justify-center h-full py-10 gap-4">
                            <Sparkles className="text-amber-500 animate-bounce" size={40} />
                            <span className="text-xl font-bold text-zinc-500 italic">{lang === 'ko' ? '문장을 정교하게 다듬고 있습니다...' : 'Refining your thought...'}</span>
                          </div>
                        ) : (
                          <p className="text-2xl leading-relaxed text-zinc-100 font-medium">
                            {optimizedOutput}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="p-8 bg-black/40 border-t border-zinc-800 text-center">
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
                  Powered by Gemini 3 Flash Preview & AI Prompt Lab
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1a1a1c;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2a2a2c;
        }
        @import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Pretendard', sans-serif;
        }
      `}</style>
    </div>
  );
}

