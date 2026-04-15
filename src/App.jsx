import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Shops from "./pages/Shops";
import ShopMicroSite from "./pages/ShopMicroSite";
import Models from "./pages/Models";
import ModelPortfolio from "./pages/ModelPortfolio";
import Services from "./pages/Services";
import ServiceProvider from "./pages/ServiceProvider";
import ProductDetail from "./pages/ProductDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shops" element={<Shops />} />
          <Route path="products" element={<Products />} />
          <Route path="shop/:shopId" element={<ShopMicroSite />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="models" element={<Models />} />
          <Route path="model/:modelId" element={<ModelPortfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="service/:serviceId" element={<ServiceProvider />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
