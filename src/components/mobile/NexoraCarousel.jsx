import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1550009158-9effb64fda70?q=80&w=2070&auto=format&fit=crop",
    title: "Upgrade Your Style",
    subtitle: "Up to 60% OFF on Nexora Fashion",
    color: "bg-blue-600"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    title: "Tech Revolution",
    subtitle: "New Arrivals in Home Gadgets",
    color: "bg-indigo-600"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    title: "Beauty Essentials",
    subtitle: "Grab the best deals on Skincare",
    color: "bg-purple-600"
  }
];

export default function NexoraCarousel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
      <div className="relative w-full h-[200px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={banners[index].image} 
              alt={banners[index].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex flex-col justify-center px-8 md:px-20">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-blue-400 text-[10px] md:text-sm font-black tracking-[0.2em] uppercase mb-2"
              >
                Limited Offer
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white text-2xl md:text-5xl font-display font-black leading-tight max-w-lg"
              >
                {banners[index].title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white/80 text-sm md:text-xl mt-2 md:mt-4 max-w-md font-medium"
              >
                {banners[index].subtitle}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => navigate('/products')}
                className="mt-6 md:mt-10 bg-white text-blue-600 px-6 md:px-10 py-2 md:py-4 rounded-xl md:rounded-2xl text-[12px] md:text-lg font-black w-max shadow-xl hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95"
              >
                Shop Now
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-6 md:bottom-10 right-8 md:right-12 flex gap-2 md:gap-3 z-20">
          {banners.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={`h-2 md:h-3 rounded-full transition-all duration-500 ${i === index ? 'w-8 md:w-12 bg-white' : 'w-2 md:w-3 bg-white/30 hover:bg-white/50'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
