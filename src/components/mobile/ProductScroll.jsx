import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

export default function ProductScroll({ title, products = [] }) {
  const navigate = useNavigate();

  return (
    <div className="py-6 bg-blue-50/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg md:text-xl font-display font-black text-slate-900 tracking-tight leading-none uppercase">
            {title}
          </h3>
          <Link to="/products">
            <button className="text-[12px] md:text-sm font-bold text-blue-600 bg-white px-4 py-2 shadow-md border border-slate-100 rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-0.5">
              View All
            </button>
          </Link>
        </div>
        
        {/* Mobile: Scroll, Desktop: Grid */}
        <div className="flex md:grid md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar pb-4 md:pb-0">
          {products.map((product, index) => (
            <motion.div 
              key={product.id || index} 
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex-shrink-0 w-[160px] md:w-full bg-white rounded-2xl p-3 shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-slate-50">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <h4 className="text-sm font-bold text-slate-800 line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">
                {product.title}
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-base font-black text-slate-900">
                  ₹{product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-slate-400 line-through font-medium">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
