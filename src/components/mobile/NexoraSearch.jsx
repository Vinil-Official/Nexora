import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function NexoraSearch() {
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
    <div className="px-4 py-2 bg-white md:hidden">
      <form 
        onSubmit={handleSearch}
        className={`flex items-center gap-2 rounded-xl px-3 py-2.5 group transition-all border shadow-inner ${
          isAiMode 
            ? 'bg-blue-50 border-blue-200 focus-within:ring-2 focus-within:ring-blue-500' 
            : 'bg-slate-100 border-transparent focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-400'
        }`}
      >
        <button type="submit" className="flex items-center">
          <Search size={18} className={isAiMode ? "text-blue-500" : "text-slate-400 group-focus-within:text-blue-500"} />
        </button>
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isAiMode ? "Ask AI for products..." : "Search for products"} 
          className="flex-grow bg-transparent outline-none text-[14px] text-slate-700 placeholder:text-slate-400"
        />
        <div className="flex items-center gap-2.5 text-slate-400">
          <button 
            type="button"
            onClick={() => setIsAiMode(!isAiMode)}
            className={`transition-colors p-1 rounded-lg ${isAiMode ? 'text-blue-600 bg-blue-100' : 'hover:text-blue-500'}`}
            title="AI Smart Search"
          >
            <Sparkles size={18} />
          </button>
        </div>
      </form>
      {isAiMode && (
        <div className="mt-2 text-[10px] font-bold text-blue-600 uppercase tracking-widest flex items-center gap-1 animate-pulse px-1">
          <Sparkles size={10} /> Smart Search Active
        </div>
      )}
    </div>
  );
}
