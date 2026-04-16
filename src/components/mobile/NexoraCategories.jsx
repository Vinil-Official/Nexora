import React from 'react';
import { Smartphone, Shirt, Sparkles, Laptop, Home, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Fashion', icon: <Shirt size={22} />, color: 'bg-orange-50 text-orange-600' },
  { name: 'Mobiles', icon: <Smartphone size={22} />, color: 'bg-blue-50 text-blue-600' },
  { name: 'Beauty', icon: <Sparkles size={22} />, color: 'bg-pink-50 text-pink-600' },
  { name: 'Electronics', icon: <Laptop size={22} />, color: 'bg-indigo-50 text-indigo-600' },
  { name: 'Home', icon: <Home size={22} />, color: 'bg-green-50 text-green-600' },
  { name: 'Appliances', icon: <Zap size={22} />, color: 'bg-yellow-50 text-yellow-600' },
];

export default function NexoraCategories() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-b border-slate-100 mb-2">
      <div className="max-w-7xl mx-auto flex overflow-x-auto md:justify-center gap-6 md:gap-12 px-4 py-6 scrollbar-hide no-scrollbar">
        {categories.map((cat, index) => (
          <div 
            key={index} 
            onClick={() => navigate(`/products?category=${cat.name}`)}
            className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group"
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center ${cat.color} group-hover:scale-110 transition-all shadow-sm border border-white`}>
              {cat.icon}
            </div>
            <span className="text-[12px] md:text-sm font-bold text-slate-600 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
