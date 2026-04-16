import React, { useState } from 'react';
import { Home, Grid, Zap, User, ShoppingCart } from 'lucide-react';

export default function NexoraBottomNav() {
  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { name: 'Home', icon: <Home size={22} /> },
    { name: 'Categories', icon: <Grid size={22} /> },
    { name: 'Deals', icon: <Zap size={22} /> },
    { name: 'Account', icon: <User size={22} /> },
    { name: 'Cart', icon: <ShoppingCart size={22} />, badge: 19 },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-white border-t border-slate-100 px-2 py-3 pb-6 flex justify-around items-center z-50 md:hidden">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActiveTab(item.name)}
          className={`relative flex flex-col items-center gap-1 transition-all duration-300 ${
            activeTab === item.name ? 'text-blue-600 scale-110' : 'text-slate-400'
          }`}
        >
          <div className="relative">
            {item.icon}
            {item.badge && (
              <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[8px] font-bold px-1 rounded-full border-2 border-white shadow-sm ring-1 ring-red-200">
                {item.badge}
              </span>
            )}
          </div>
          <span className={`text-[10px] font-bold uppercase transition-all ${
            activeTab === item.name ? 'opacity-100 translate-y-0' : 'opacity-70'
          }`}>
            {item.name}
          </span>
          {activeTab === item.name && (
            <div className="absolute -bottom-1 w-1 h-1 bg-blue-600 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}
