import { motion } from "framer-motion";
import { shops } from "../data/mockData";
import { Link } from "react-router-dom";

export default function Shops() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-display font-bold mb-4">Shops Brands</h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Browse through unique micro-sites and independent store collections.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {shops.map(shop => (
            <Link key={shop.id} to={`/shop/${shop.id}`} className="group relative rounded-3xl overflow-hidden h-64 border border-slate-200 shadow-sm hover:shadow-xl transition-all block">
              <img src={shop.bannerImage} alt={shop.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-display font-bold text-white mb-2">{shop.name}</h3>
                <p className="text-slate-200">{shop.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
