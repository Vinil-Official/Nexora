import React from 'react';
import { Search, Camera, Mic } from 'lucide-react';

export default function NexoraSearch() {
  return (
    <div className="px-4 py-2 bg-white md:hidden">
      <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2.5 group focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-400 transition-all border border-transparent focus-within:border-transparent shadow-inner">
        <Search size={18} className="text-slate-400 group-focus-within:text-blue-500" />
        <input 
          type="text" 
          placeholder="Search for products" 
          className="flex-grow bg-transparent outline-none text-[14px] text-slate-700 placeholder:text-slate-400"
        />
        <div className="flex items-center gap-2.5 text-slate-400">
          <button className="hover:text-blue-500 transition-colors">
            <Camera size={18} />
          </button>
          <div className="w-[1px] h-4 bg-slate-300"></div>
          <button className="hover:text-blue-500 transition-colors">
            <Mic size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
