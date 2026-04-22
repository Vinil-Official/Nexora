import { Sparkles, Search, Headset } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function NexoraHeader() {
  const [query, setQuery] = useState('');
  const [isAiMode, setIsAiMode] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?q=${encodeURIComponent(query)}&ai=${isAiMode}`);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 px-4 py-3 md:py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo - left aligned container */}
        <div className="flex-1 flex justify-start">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-lg group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-display font-black text-2xl tracking-tighter text-white">
              NEXORA
            </span>
          </Link>
        </div>
        
        {/* Functional Search Bar - perfectly centered container */}
        <div className="hidden md:flex flex-[2] justify-center items-center">
           <form 
            onSubmit={handleSearch}
            className={`w-full max-w-xl flex items-center gap-2 rounded-xl px-4 py-2.5 shadow-inner transition-all border ${
              isAiMode ? 'bg-blue-50 border-blue-200' : 'bg-white border-transparent'
            }`}
           >
              <Search className={`w-4 h-4 ${isAiMode ? 'text-blue-500' : 'text-slate-400'}`} />
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={isAiMode ? "Ask AI for products, styles and more..." : "Search for products, brands and more"}
                className="flex-grow bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400"
              />
              <button 
                type="button"
                onClick={() => setIsAiMode(!isAiMode)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight transition-all ${
                  isAiMode 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                <Sparkles size={12} />
                {isAiMode ? 'Smart ON' : 'Smart Search'}
              </button>
           </form>
        </div>

        <div className="flex-1 flex justify-end">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white/15 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-white hover:bg-white/25 transition-colors md:px-3 md:text-xs"
          >
            <Headset className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Customer Service
          </Link>
        </div>
      </div>
    </div>
  );
}
