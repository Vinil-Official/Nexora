import { useParams, Link } from "react-router-dom";
import { products } from "../data/mockData";
import { ArrowLeft, Share2, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919999999999";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(product?.image || "");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Not Found</h2>
        <Link to="/products" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>
    );
  }

  const handleBuyNow = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in buying *${product.title}* from *${product.shopName}* priced at ₹${product.price}. Could you please help me with the order?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleShare = async () => {
    const productUrl = window.location.href;
    const shareData = {
      title: product.title,
      text: `Check out ${product.title} from ${product.shopName}`,
      url: productUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(productUrl);
        window.alert("Product link copied to clipboard.");
        return;
      }

      window.prompt("Copy this product link:", productUrl);
    } catch (error) {
      if (error?.name !== "AbortError") {
        window.prompt("Copy this product link:", productUrl);
      }
    }
  };

  const allImages = [product.image, ...(product.additionalImages || [])];

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 py-6">
          <Link to="/products" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square bg-[#f8fafc] rounded-3xl overflow-hidden border border-slate-100 shadow-sm relative group">
              <img 
                src={selectedImage} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 right-6">
                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm border border-slate-100">
                  {product.tag || "PREMIUM"}
                </span>
              </div>
            </div>
            
            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {allImages.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImage === img ? "border-blue-600 shadow-md" : "border-transparent hover:border-slate-300"
                    }`}
                  >
                    <img src={img} alt={`${product.title} thumbnail ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500 text-xs font-medium">Original Artifact</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-slate-900 tracking-tight leading-tight mb-4">
                {product.title}
              </h1>
              <div className="flex items-center gap-3 text-lg font-medium text-slate-600">
                <span>by</span>
                <Link to={`/shop/${product.shopId}`} className="text-blue-600 hover:underline">
                  {product.shopName}
                </Link>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-50" />
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl mb-10 border border-slate-100">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-slate-900">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-slate-400 line-through font-medium">₹{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleBuyNow}
                  className="flex-1 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-5 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center gap-2.5 whitespace-nowrap transition-all active:scale-[0.98] shadow-lg shadow-emerald-200"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.486a.5.5 0 0 0 .614.614l5.7-1.484A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.032-1.385l-.36-.214-3.733.97.992-3.614-.235-.374A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.569 2.182 12 2.182S21.818 6.57 21.818 12 17.431 21.818 12 21.818z" />
                  </svg>
                  Buy via WhatsApp
                </button>
                <button
                  onClick={handleShare}
                  className="p-4 bg-white border border-slate-200 text-slate-800 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-colors"
                  aria-label="Share this product"
                >
                  <Share2 className="w-5 h-5 opacity-60" />
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-widest text-xs">Description</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  {product.fullDescription}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Category</span>
                  <span className="text-slate-800 font-medium">{product.category}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Status</span>
                  <span className="text-emerald-600 font-bold">{product.tag || "IN STOCK"}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
