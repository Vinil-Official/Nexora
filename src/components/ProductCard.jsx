import { Link, useNavigate } from "react-router-dom";

// ✏️ Replace with your business WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "919999999999";

export function ProductCard({ item }) {
  const navigate = useNavigate();

  const handleBuyNow = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent card click navigation
    const message = encodeURIComponent(
      `Hi! I'm interested in buying *${item.title}* from *${item.shopName}* priced at ₹${item.price}. Could you please help me with the order?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleCardClick = () => {
    navigate(`/product/${item.id}`);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent card click navigation when clicking "View Shop" link
  };

  if (!item) return null;

  return (
    <div 
      onClick={handleCardClick}
      className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-500 relative p-4 flex flex-col items-center cursor-pointer"
    >

      {/* Image container */}
      <div className="w-full aspect-[4/5] bg-[#f2f4f8] rounded-2xl overflow-hidden mb-5 relative flex items-center justify-center">
        {item.tag && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
            {item.tag}
          </div>
        )}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="w-full text-left flex flex-col flex-grow px-2">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-semibold text-[16px] text-slate-900 leading-tight">
            {item.title}
          </h3>
          <span className="font-bold text-blue-600 text-[15px] shrink-0">₹{item.price}</span>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <span className="text-slate-500 text-[11px] font-medium">by {item.shopName}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="bg-slate-100 text-slate-600 text-[9px] font-bold uppercase px-2 py-0.5 rounded border border-slate-200">
            {item.tag || "IN STOCK"}
          </span>
        </div>

        <div className="mt-auto pt-2 flex flex-col gap-2">
          {/* Buy Now → opens WhatsApp */}
          <button
            onClick={handleBuyNow}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold transition-colors shadow-sm hover:shadow-md active:scale-95"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.486a.5.5 0 0 0 .614.614l5.7-1.484A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.032-1.385l-.36-.214-3.733.97.992-3.614-.235-.374A9.808 9.808 0 0 1 2.182 12C2.182 6.57 6.569 2.182 12 2.182S21.818 6.57 21.818 12 17.431 21.818 12 21.818z" />
            </svg>
            Buy Now
          </button>

          {/* View Shop */}
          <Link
            to={`/shop/${item.shopId}`}
            onClick={handleLinkClick}
            className="flex items-center justify-center w-full py-2.5 rounded-full border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 hover:text-blue-600 transition-colors group-hover:border-slate-300 relative z-10"
          >
            View Shop{" "}
            <span className="ml-1 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              -&gt;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
