import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NexoraBottomNav from "./mobile/NexoraBottomNav";

export default function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {!isHomePage && <Navbar />}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex-grow w-full pb-24 md:pb-0"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <NexoraBottomNav />
      {!isHomePage && <Footer />}
    </div>
  );
}
