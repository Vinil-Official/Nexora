import React from 'react';
import { Search, ShoppingCart, ArrowLeft } from 'lucide-react';

export default function FashionHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-3">
        {/* Back Button */}
        <button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
          <ArrowLeft className="w-5 h-5 text-slate-700" />
        </button>

        {/* Search Bar */}
        <div className="flex-1 relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
            <Search className="w-4 h-4" />
          </div>
          <input 
            type="text" 
            placeholder="Search for products"
            className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Cart Icon */}
        <button className="relative p-2.5 hover:bg-slate-50 rounded-full transition-colors">
          <ShoppingCart className="w-6 h-6 text-slate-700" />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-black min-w-[18px] h-[18px] flex items-center justify-center rounded-full border-2 border-white px-0.5">
            19
          </span>
        </button>
      </div>
    </header>
  );
}
