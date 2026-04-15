import { motion } from "framer-motion";
import { models } from "../data/mockData";
import { ModelCard } from "../components/ModelCard";

export default function Models() {
  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-24 text-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">Talent Roster</h1>
          <p className="text-xl text-slate-500">
            Discover extraordinary models and talents across high fashion, commercial, and creative industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {models.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ModelCard item={m} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
