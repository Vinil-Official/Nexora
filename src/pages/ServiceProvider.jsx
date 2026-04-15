import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { serviceProviders } from "../data/mockData";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServiceProvider() {
  const { serviceId } = useParams();
  const provider = serviceProviders.find(sp => sp.id === serviceId);

  if (!provider) return <div className="p-20 text-center">Service Provider not found.</div>;

  return (
    <div className={`min-h-screen pb-20 bg-slate-50`}>
      <div className="bg-white border-b border-slate-200 mb-12">
        <div className="container mx-auto px-4 py-8">
          <Link to="/services" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to partners
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-full md:w-1/3 aspect-[3/2] rounded-xl overflow-hidden shadow-sm border border-slate-200">
               <img src={provider.bannerImage} className="w-full h-full object-cover" alt="Provider Banner" />
            </div>
            <div className="flex-1">
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2 block">
                {provider.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">{provider.name}</h1>
              <p className="text-lg text-slate-600 max-w-2xl text-left">{provider.description}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-display font-bold mb-6">Offered Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {provider.services.map((s, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="flex items-center gap-3 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-accent-blue" />
                    {s.title}
                  </span>
                  <span className="font-bold font-mono text-slate-500">{s.price}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-display font-bold mb-6">Work Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {provider.gallery.map((img, i) => (
                <div key={i} className="aspect-video rounded-2xl overflow-hidden shadow-sm">
                  <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery" />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center border-t border-slate-200 pt-12">
              <button className="bg-gradient-to-r from-accent-blue to-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-105 transition-all">
                Request a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
