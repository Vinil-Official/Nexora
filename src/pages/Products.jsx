import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/mockData";
import { ProductCard } from "../components/ProductCard";
import { Filter, ArrowUpDown } from "lucide-react";

const CATEGORIES = ["All Products", "Fashion", "Mobiles", "Beauty", "Electronics", "Home", "Appliances"];

const MIN_PRICE = 0;
const MAX_PRICE = 30000;

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All Products");
  const [priceMin, setPriceMin] = useState(MIN_PRICE);
  const [priceMax, setPriceMax] = useState(MAX_PRICE);
  const [sortOrder, setSortOrder] = useState("none"); // "none" | "asc" | "desc"

  useEffect(() => {
    if (categoryParam && CATEGORIES.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    } else if (!categoryParam) {
      setSelectedCategory("All Products");
    }
  }, [categoryParam]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === "All Products") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((p) => {
      const matchCat = selectedCategory === "All Products" || p.category === selectedCategory;
      const matchPrice = p.price >= priceMin && p.price <= priceMax;
      return matchCat && matchPrice;
    });
    if (sortOrder === "asc") return [...filtered].sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [selectedCategory, priceMin, priceMax, sortOrder]);

  // Track column width % for the filled range track
  const minPct = ((priceMin - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const maxPct = ((priceMax - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 lg:px-8">


        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-1 border-r border-slate-200 pr-8 hidden md:block">
            <div className="flex items-center gap-2 font-bold text-slate-800 mb-6">
              <Filter className="w-5 h-5 text-blue-600" /> Categories
            </div>
            <ul className="flex flex-col gap-2 mb-12">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleCategoryChange(cat)}
                    className={`w-full flex justify-between items-center px-4 py-3 rounded-full transition-all font-semibold text-sm ${
                      selectedCategory === cat
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      selectedCategory === cat ? "bg-white/20" : "bg-slate-200"
                    }`}>
                      {cat === "All Products"
                        ? products.length
                        : products.filter((p) => p.category === cat).length}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Functional Price Range Filter */}
            <div className="bg-[#e5e5e5] rounded-3xl p-6 mb-12">
              <h4 className="font-bold text-slate-800 text-sm mb-1">Price Range</h4>
              <p className="text-[11px] text-slate-500 mb-5">
                ₹{priceMin.toLocaleString()} – ₹{priceMax.toLocaleString()}
              </p>

              {/* Dual-range slider */}
              <div className="relative h-6 flex items-center mb-4">
                {/* Track background */}
                <div className="absolute w-full h-1 bg-slate-300 rounded-full" />
                {/* Filled track */}
                <div
                  className="absolute h-1 bg-blue-600 rounded-full"
                  style={{ left: `${minPct}%`, right: `${100 - maxPct}%` }}
                />
                {/* Min handle */}
                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  step={10}
                  value={priceMin}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val <= priceMax - 10) setPriceMin(val);
                  }}
                  className="absolute w-full appearance-none bg-transparent cursor-pointer range-thumb"
                />
                {/* Max handle */}
                <input
                  type="range"
                  min={MIN_PRICE}
                  max={MAX_PRICE}
                  step={10}
                  value={priceMax}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val >= priceMin + 10) setPriceMax(val);
                  }}
                  className="absolute w-full appearance-none bg-transparent cursor-pointer range-thumb"
                />
              </div>

              <div className="flex justify-between text-[10px] font-bold text-slate-600 mt-2">
                <span>₹0</span>
                <span>₹30,000</span>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-3">
            {/* Mobile Category Navigation */}
            <div className="flex md:hidden overflow-x-auto no-scrollbar gap-2 mb-8 pb-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-black transition-all border shadow-sm ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white border-blue-600 shadow-blue-200"
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Bar */}
            <div className="flex items-center gap-3 mb-8">
              <span className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold uppercase tracking-wider">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort by Price
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setSortOrder(sortOrder === "asc" ? "none" : "asc")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                    sortOrder === "asc"
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                      : "border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  Low → High
                </button>
                <button
                  onClick={() => setSortOrder(sortOrder === "desc" ? "none" : "desc")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${
                    sortOrder === "desc"
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                      : "border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  High → Low
                </button>
              </div>
            </div>
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-slate-400">
                <span className="text-5xl mb-4">🔍</span>
                <p className="font-semibold text-lg">No products match your filters.</p>
                <button
                  onClick={() => { setSelectedCategory("All Products"); setPriceMin(MIN_PRICE); setPriceMax(MAX_PRICE); setSortOrder("none"); }}
                  className="mt-4 text-blue-600 text-sm font-bold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8 mb-16">
                {filteredProducts.map((p) => (
                  <ProductCard key={p.id} item={p} />
                ))}
              </div>
            )}

            <div className="text-center mt-12 border-t border-slate-200 pt-16">
              <button className="px-8 py-3 rounded-full border border-slate-300 text-slate-800 font-semibold text-sm hover:border-slate-500 hover:bg-slate-50 transition-colors shadow-sm">
                Discover More Artifacts
              </button>
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
