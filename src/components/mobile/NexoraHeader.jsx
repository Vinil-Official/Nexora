import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NexoraHeader() {
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
        
        {/* Placeholder for Search - perfectly centered container */}
        <div className="hidden md:flex flex-[2] justify-center items-center">
           <div className="w-full max-w-xl flex items-center gap-2 bg-white rounded-xl px-4 py-2.5 shadow-inner">
             <span className="text-slate-400 text-sm">Search for products, brands and more</span>
           </div>
        </div>

        {/* Empty balancing div for desktop */}
        <div className="hidden md:flex flex-1"></div>
      </div>
    </div>
  );
}
