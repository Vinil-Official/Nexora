import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { models } from "../data/mockData";
import { ArrowLeft, Camera, Mail, Calendar } from "lucide-react";

export default function ModelPortfolio() {
  const { modelId } = useParams();
  const model = models.find(m => m.id === modelId);

  if (!model) return <div className="p-20 text-center">Model not found.</div>;

  return (
    <div className={`min-h-screen bg-slate-50`}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <Link to="/models" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to roster
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-slate-200">
            <img src={model.image} className="w-full h-full object-cover" alt={model.name} />
          </div>
          
          <div>
            <span className="text-slate-500 uppercase tracking-widest font-semibold text-sm mb-4 block">
              {model.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6">
              {model.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              {model.about}
            </p>
            
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm">
                <Calendar className="w-5 h-5" /> Book Now
              </button>
              <div className="flex gap-2">
                <button className="w-12 h-12 rounded-lg border border-slate-300 text-slate-600 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-lg border border-slate-300 text-slate-600 flex items-center justify-center hover:bg-slate-100 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

          <h2 className="text-3xl font-display font-bold mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {model.gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="aspect-square bg-slate-200 rounded-2xl overflow-hidden group"
              >
                <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery" />
              </motion.div>
            ))}
          </div>
      </div>
    </div>
  );
}
