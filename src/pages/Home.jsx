import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/mockData";
import ResponsiveContainer from "../components/mobile/ResponsiveContainer";
import NexoraHeader from "../components/mobile/NexoraHeader";
import NexoraSearch from "../components/mobile/NexoraSearch";
import NexoraCategories from "../components/mobile/NexoraCategories";
import NexoraCarousel from "../components/mobile/NexoraCarousel";
import ProductScroll from "../components/mobile/ProductScroll";
import PromoBanner from "../components/mobile/PromoBanner";
import NexoraBottomNav from "../components/mobile/NexoraBottomNav";
import SkeletonLoader from "../components/mobile/SkeletonLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for skeleton effect
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Filter some products for the scroll sections
  const personalizedProducts = products.map(p => ({
    ...p,
    discount: Math.floor(Math.random() * 40) + 10
  })).slice(0, 6);

  const bestSellingProducts = products.slice(0, 6);

  return (
    <ResponsiveContainer>
      <NexoraHeader />
      <NexoraSearch />
      
      <main className="pb-24">
        {isLoading ? (
          <div className="max-w-7xl mx-auto px-4 py-6 flex md:justify-center gap-6 md:gap-12 overflow-x-hidden">
            {[1, 2, 3, 4, 5, 6].map(i => <SkeletonLoader key={i} type="category" />)}
          </div>
        ) : (
          <NexoraCategories />
        )}

        {isLoading ? (
          <div className="max-w-7xl mx-auto px-4"><SkeletonLoader type="banner" /></div>
        ) : (
          <NexoraCarousel />
        )}

        {isLoading ? (
          <div className="max-w-7xl mx-auto px-4 py-8 flex gap-6 overflow-x-hidden">
            {[1, 2, 3, 4].map(i => <SkeletonLoader key={i} type="card" />)}
          </div>
        ) : (
          <ProductScroll title="Still looking for these?" products={personalizedProducts} />
        )}

        <div className="max-w-7xl mx-auto">
          <PromoBanner 
            image="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2066&auto=format&fit=crop"
            title="Premium Home Appliances"
            subtitle="Upgrade your smart living today"
            position="right"
          />
        </div>

        <ProductScroll title="Trending Now" products={bestSellingProducts} />

        <div className="max-w-7xl mx-auto px-4 py-12 text-center bg-slate-50 border-y border-slate-100 mt-8 mb-12 rounded-3xl mx-4">
          <p className="text-blue-600 text-xs md:text-sm uppercase font-black tracking-[0.3em] mb-3">The Nexora Collection</p>
          <h2 className="text-slate-900 font-display font-black text-2xl md:text-4xl max-w-2xl mx-auto leading-tight">
            Curated premium products for the modern lifestyle.
          </h2>
          <Link to="/products">
            <button className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg">
              Explore All Categories
            </button>
          </Link>
        </div>
      </main>

      <NexoraBottomNav />
    </ResponsiveContainer>
  );
}
