import { Link, useNavigate } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";

export function ProductCard({ item }) {
  const navigate = useNavigate();

  if (!item) return null;

  const handleCardClick = () => {
    navigate(`/product/${item.id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    // Wishlist logic placeholder
  };

  return (
    <motion.div 
      onClick={handleCardClick}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
        {/* AD Badge */}
        {item.tag === "AD" && (
          <div className="absolute top-2 left-2 bg-slate-900/40 backdrop-blur-md text-white text-[9px] font-black px-1.5 py-0.5 rounded leading-tight tracking-wider z-10">
            AD
          </div>
        )}

        {/* Wishlist Button */}
        <button 
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur-md rounded-full shadow-sm hover:bg-white hover:text-red-500 transition-all z-10"
        >
          <Heart className="w-3.5 h-3.5" />
        </button>

        {/* Main Product Image */}
        <motion.img 
          src={item.image} 
          alt={item.title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="w-full h-full object-cover"
        />

        {/* Rating Badge Overlay */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded flex items-center gap-1 shadow-sm border border-slate-100">
          <span className="text-[10px] font-black text-slate-900">{item.rating || "3.6"}</span>
          <Star className="w-2.5 h-2.5 fill-green-600 text-green-600" />
          <div className="w-[1px] h-2.5 bg-slate-300 mx-0.5" />
          <span className="text-[10px] font-bold text-slate-500">{item.reviewsCount || "108"}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-2.5 flex flex-col flex-1">
        {/* Brand/Shop Name */}
        <h3 className="text-[13px] font-black text-slate-900 leading-tight mb-0.5 line-clamp-1 truncate group-hover:text-blue-600 transition-colors uppercase tracking-tight">
          {item.brand || item.shopName}
        </h3>
        
        {/* Product Title / Subtitle */}
        <p className="text-[11px] text-slate-500 mb-2 line-clamp-1 truncate leading-relaxed">
          {item.title}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-1.5 mt-auto">
          <div className="text-green-600 font-black text-[11px] shrink-0">
            {item.discount || "65% OFF"}
          </div>
          <span className="text-slate-400 line-through text-[10px] font-medium shrink-0">₹{item.originalPrice}</span>
          <span className="text-slate-900 font-black text-[13px] ml-auto">₹{item.price}</span>
        </div>

        {/* Bank Offer Badge */}
        <div className="mt-2 flex items-center gap-1 bg-blue-50/50 px-1.5 py-0.5 rounded border border-blue-100/50">
          <span className="text-[8px] font-black text-blue-700 bg-blue-100 px-1 rounded uppercase tracking-tighter italic whitespace-nowrap">Wow!</span>
          <span className="text-[9px] font-bold text-slate-700 truncate shrink">₹{Math.floor(item.price * 0.9)} with Bank offer</span>
        </div>
      </div>
    </motion.div>
  );
}
