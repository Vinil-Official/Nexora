import React from 'react';
import { Heart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FashionProductCard({ product }) {
  if (!product) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
        {/* AD Badge */}
        {product.tag === "AD" && (
          <div className="absolute top-3 left-3 bg-slate-900/40 backdrop-blur-md text-white text-[9px] font-black px-2 py-0.5 rounded leading-tight tracking-wider z-10">
            AD
          </div>
        )}

        {/* Bestseller Badge */}
        {product.tag === "BESTSELLER" && (
          <div className="absolute top-3 left-3 bg-teal-600 text-white text-[9px] font-black px-2 py-1 rounded leading-tight tracking-wider z-10 shadow-sm uppercase">
            Bestseller
          </div>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white hover:text-red-500 transition-all z-10">
          <Heart className="w-4 h-4" />
        </button>

        {/* Main Image */}
        <motion.img 
          src={product.image} 
          alt={product.title}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="w-full h-full object-cover"
        />

        {/* Rating Badge */}
        {product.rating && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1.5 shadow-sm border border-slate-100">
            <span className="text-[11px] font-black text-slate-900">{product.rating}</span>
            <Star className="w-3 h-3 fill-green-600 text-green-600" />
            <div className="w-[1px] h-3 bg-slate-300 mx-0.5" />
            <span className="text-[11px] font-bold text-slate-500">{product.reviewsCount}</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-3 flex flex-col flex-1">
        {/* Trendy Tag */}
        {product.statusTag && (
          <div className="mb-1 text-[10px] font-black uppercase tracking-widest text-purple-600">
            {product.statusTag}
          </div>
        )}

        <h3 className="text-[15px] font-black text-slate-900 leading-tight mb-0.5 line-clamp-1 truncate group-hover:text-blue-600 transition-colors">
          {product.brand || product.title}
        </h3>
        <p className="text-[12px] text-slate-500 mb-2 line-clamp-1 truncate leading-relaxed">
          {product.subtitle || product.title}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-auto">
          <div className="flex items-center text-green-600 font-black text-[13px]">
            <span className="mr-0.5 truncate">{product.discount}</span>
          </div>
          <span className="text-slate-400 line-through text-[12px] font-medium">₹{product.originalPrice}</span>
          <span className="text-slate-900 font-black text-[14px]">₹{product.price}</span>
        </div>

        {/* Bank Offer Badge */}
        {product.bankOffer && (
          <div className="mt-2 flex items-center gap-1.5 bg-blue-50/50 px-2 py-1 rounded-lg border border-blue-100/50">
            <span className="text-[9px] font-black text-blue-700 bg-blue-100 px-1.5 rounded uppercase tracking-tighter italic">Wow!</span>
            <span className="text-[10px] font-bold text-slate-700 truncate">{product.bankOffer}</span>
          </div>
        )}

        {/* Item Tag (e.g. #StraightFit) */}
        {product.itemTag && (
          <div className="mt-2 text-[11px] font-bold text-slate-800 tracking-tight">
            {product.itemTag}
          </div>
        )}
      </div>
    </motion.div>
  );
}
