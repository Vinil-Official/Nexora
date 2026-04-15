import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { shops, products } from "../data/mockData";
import { ArrowLeft } from "lucide-react";
import { ProductCard } from "../components/ProductCard";

export default function ShopMicroSite() {
  const { shopId } = useParams();
  const shop = shops.find(s => s.id === shopId);
  const shopProducts = products.filter(p => p.shopId === shopId);

  if (!shop) return <div className="p-20 text-center">Shop not found.</div>;

  return (
    <div className={`min-h-screen pb-20 bg-slate-50`}>
      {/* Banner */}
      <div className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-12">
          <Link to="/shops" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to shops
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-full md:w-1/3 aspect-[2/1] md:aspect-video rounded-xl overflow-hidden shadow-sm border border-slate-200">
               <img src={shop.bannerImage} className="w-full h-full object-cover" alt="Shop Banner" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-3">
                {shop.name}
              </h1>
              <p className="text-xl text-slate-600">
                {shop.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl font-display font-bold text-slate-900">Shop Collection</h2>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity">
            Contact Shop
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shopProducts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard item={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
