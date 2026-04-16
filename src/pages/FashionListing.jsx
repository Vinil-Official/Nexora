import React, { useState, useEffect } from 'react';
import { products } from '../data/mockData';
import FashionHeader from '../components/fashion/FashionHeader';
import FashionProductCard from '../components/fashion/FashionProductCard';
import { motion } from 'framer-motion';

export default function FashionListing() {
  const [isLoading, setIsLoading] = useState(true);
  const fashionProducts = products.filter(p => p.category === "Fashion");

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <FashionHeader />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="bg-white rounded-2xl aspect-[3/5] animate-pulse">
                <div className="w-full aspect-[3/4] bg-slate-100 rounded-t-2xl" />
                <div className="p-3">
                  <div className="h-4 bg-slate-100 rounded w-2/3 mb-2" />
                  <div className="h-3 bg-slate-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {/* Header info */}
            <div className="mb-6 px-1 flex justify-between items-end">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 leading-tight">
                  Top trends for you
                </h2>
                <p className="text-sm text-slate-500 font-bold tracking-tight">
                  {fashionProducts.length} Products found
                </p>
              </div>
              <button className="text-blue-600 font-black text-sm hover:underline transition-all">
                Filter & Sort
              </button>
            </div>

            {/* Product Grid */}
            <motion.div 
              layout
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8"
            >
              {fashionProducts.map((p, idx) => (
                <FashionProductCard key={p.id} product={p} />
              ))}
            </motion.div>

            {/* Pagination Placeholder */}
            <div className="mt-16 py-12 text-center border-t border-slate-200">
              <p className="text-slate-400 font-bold text-sm mb-4 italic">You've reached the end of the collection</p>
              <button className="px-8 py-3 bg-white border border-slate-200 text-slate-900 font-black rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                Back to Top
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
