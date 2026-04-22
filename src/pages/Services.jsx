import { motion } from "framer-motion";
import { serviceProviders } from "../data/mockData";
import { ServiceCard } from "../components/ServiceCard";
import { Mail } from "lucide-react";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-10 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">Customer Support</p>
            <h2 className="text-slate-900 text-lg md:text-xl font-display font-bold">Need help with any service booking?</h2>
          </div>
          <a
            href="mailto:nexora.support@gmail.com?subject=Nexora%20Customer%20Support"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-blue-200 px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-100 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Gmail Support
          </a>
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
