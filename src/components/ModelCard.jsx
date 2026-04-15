import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function ModelCard({ item }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
      </div>
      <div className="p-5 flex flex-col justify-between border-t border-slate-100">
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-1 block">
            {item.category}
          </span>
          <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">
            {item.name}
          </h3>
        </div>
        <Link to={`/model/${item.id}`} className="inline-flex w-full justify-center items-center py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-semibold transition-colors">
          View Portfolio
        </Link>
      </div>
    </div>
  );
}
