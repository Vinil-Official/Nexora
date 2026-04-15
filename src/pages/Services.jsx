import { motion } from "framer-motion";
import { serviceProviders } from "../data/mockData";
import { ServiceCard } from "../components/ServiceCard";

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-display font-bold mb-4">Premium Service Partners</h1>
          <p className="text-slate-600 text-lg">
            Find trusted professionals, from beauty parlours to modern construction firms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceProviders.map((sp, i) => (
            <motion.div
              key={sp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ServiceCard item={sp} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
