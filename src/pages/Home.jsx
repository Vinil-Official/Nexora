import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products, models, serviceProviders } from "../data/mockData";
import { ProductCard } from "../components/ProductCard";
import { ModelCard } from "../components/ModelCard";
import { ServiceCard } from "../components/ServiceCard";
import { HeroCarousel } from "../components/HeroCarousel";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="Grab the best deal on" highlightedWord="Products" link="/products" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} item={p} />
            ))}
          </div>

          <SectionHeader title="Shop From Top" highlightedWord="Categories" link="/models" className="mt-16" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {models.slice(0, 4).map((m) => (
              <ModelCard key={m.id} item={m} />
            ))}
          </div>

          <SectionHeader title="Daily" highlightedWord="Essentials" link="/services" className="mt-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceProviders.slice(0, 3).map((s) => (
              <ServiceCard key={s.id} item={s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ title, highlightedWord, link, className = "" }) {
  return (
    <div className={`flex justify-between items-end mb-8 border-b border-slate-200 pb-3 ${className}`}>
      <div className="relative">
        <h2 className="text-xl md:text-2xl font-sans font-medium text-slate-700">
          {title} {highlightedWord && <span className="text-[#008ecc] font-semibold">{highlightedWord}</span>}
        </h2>
        <div className="absolute -bottom-[13px] left-0 h-[2px] bg-[#008ecc] w-full max-w-[120px]" />
      </div>
      <Link to={link} className="flex items-center gap-1 text-sm font-semibold text-slate-500 hover:text-[#008ecc] transition-colors">
        View All 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </Link>
    </div>
  )
}
