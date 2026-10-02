import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Works from "./pages/Works";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.995 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.995 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/sobre" element={<PageTransition><About /></PageTransition>} />
            <Route path="/projetos" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/projetos/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
            <Route path="/obras" element={<PageTransition><Works /></PageTransition>} />
            <Route path="/experiencia" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/competencias" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/formacao" element={<PageTransition><Education /></PageTransition>} />
            <Route path="/certificacoes" element={<PageTransition><Certifications /></PageTransition>} />
            <Route path="/contato" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}