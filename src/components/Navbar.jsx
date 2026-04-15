import { Link, useLocation } from "react-router-dom";
import { Compass, ShoppingBag, Users, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="relative container mx-auto px-4 h-16 flex items-center">
        {/* Logo — left */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#008ecc] flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">
            NEXORA
          </span>
        </Link>

        {/* Nav links — absolutely centered */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          <NavLink to="/products" icon={<Sparkles className="w-4 h-4" />} text="Products" />
          <NavLink to="/shops" icon={<ShoppingBag className="w-4 h-4" />} text="Shops" />
          <NavLink to="/models" icon={<Users className="w-4 h-4" />} text="Models" />
          <NavLink to="/services" icon={<Compass className="w-4 h-4" />} text="Services" />
        </nav>
      </div>
    </header>
  );
}

function NavLink({ to, icon, text }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-1.5 text-[15px] font-semibold transition-colors duration-200",
        isActive ? "text-[#008ecc]" : "text-slate-700 hover:text-[#008ecc]"
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

