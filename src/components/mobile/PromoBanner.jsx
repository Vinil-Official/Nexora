import React from 'react';

export default function PromoBanner({ image, title, subtitle, position = "left" }) {
  return (
    <div className="px-4 py-3">
      <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-slate-100 group cursor-pointer transition-all hover:shadow-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className={`absolute inset-0 flex flex-col justify-center px-8 bg-gradient-to-t from-black/20 via-transparent to-transparent ${position === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
          <div className="bg-white/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/50 shadow-xl max-w-[70%]">
            <h3 className="text-slate-900 font-display font-bold text-sm mb-0.5 leading-tight">{title}</h3>
            <p className="text-blue-600 font-bold text-[10px] uppercase tracking-wider">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
