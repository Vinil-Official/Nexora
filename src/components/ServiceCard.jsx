import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ item }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="h-48 w-full rounded-xl overflow-hidden mb-6 border border-slate-100">
        <img src={item.image} alt={item.providerName} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]" />
      </div>
      <div className="flex flex-col flex-grow">
        <span className="text-sm font-semibold text-accent-blue mb-1 uppercase tracking-wide">
          {item.category}
        </span>
        <h3 className="font-display text-xl font-bold mb-4">{item.providerName}</h3>
        <Link 
          to={`/service/${item.providerId}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-accent-blue transition-colors group"
        >
          View Provider
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
