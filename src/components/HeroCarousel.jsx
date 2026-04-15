import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: "Best Deal Online on smart watches",
    highlight: "SMART WEARABLE.",
    subText: "UP to 80% OFF",
    bgColor: "bg-[#008ecc]",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Unleash your creativity",
    highlight: "PRO CAMERAS.",
    subText: "Flat 50% OFF",
    bgColor: "bg-blue-600",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Next Gen Audio",
    highlight: "WIRELESS EARBUDS.",
    subText: "Starting at ₹999",
    bgColor: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000",
  }
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prev = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <div className="relative w-full h-[300px] md:h-[450px] mb-12 bg-slate-50 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 w-full h-full ${slides[current].bgColor} flex items-center text-white`}
        >
          {/* Text Content */}
          <div className="container mx-auto px-4 z-20 w-full relative flex">
            <div className="w-full md:w-1/2 md:pl-16">
              <h3 className="text-lg md:text-2xl font-medium mb-2 text-slate-100">{slides[current].title}</h3>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-4">{slides[current].highlight}</h1>
              <p className="text-xl md:text-3xl font-medium text-slate-300">{slides[current].subText}</p>
              
              {/* Pagination Dots */}
              <div className="flex gap-2 mt-12">
                {slides.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-3 bg-white/30 hover:bg-white/50'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="hidden md:block w-1/2 h-full absolute right-0 top-0">
             <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].bgColor} via-transparent to-transparent z-10 w-1/3`} />
             <img src={slides[current].image} alt="Slide" className="w-full h-full object-cover object-center" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button onClick={prev} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-800 shadow-xl z-30 transition-transform hover:scale-105">
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 -ml-1" />
      </button>
      
      <button onClick={next} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-slate-800 shadow-xl z-30 transition-transform hover:scale-105">
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 -mr-1" />
      </button>
    </div>
  );
}
