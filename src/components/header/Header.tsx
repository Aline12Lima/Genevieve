import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/GWhite.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // No seu arquivo Header.tsx
  const menuLinks = [
    { name: "Início", action: scrollToTop },
    { name: "Sobre", action: () => navigate("/about") },
    { name: "Serviços", action: () => navigate("/services") },
    { name: "Projetos", action: () => navigate("/projects") }, // Mude de /templates para /projetos
    { name: "Blog", action: () => navigate("/blog") },
  ];
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full z-[9999] flex items-center justify-between px-6 md:px-16 transition-all duration-500 
          ${scrolled ? "bg-black/90 backdrop-blur-lg py-4 shadow-2xl" : "bg-transparent py-8"}`}
      >
        <button
          onClick={scrollToTop}
          className="z-[101] flex items-center gap-2 group"
        >
          <img
            src={logo}
            alt="logo Genevieve"
            className="w-16 md:w-20 h-auto transition-transform group-hover:scale-105"
          />
          <h1 className="font-beauty text-3xl md:text-4xl text-white leading-none tracking-tighter">
            Genevieve
          </h1>
        </button>

        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-1 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
            {menuLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className="px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 hover:text-white hover:bg-[#00a3ff] transition-all duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => navigate("/contato")}
            className="bg-[#00a3ff] hover:bg-white hover:text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-lg shadow-[#00a3ff]/20"
          >
            Contato
          </button>
          <a
            href="https://www.instagram.com/genevieve_website/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-white text-[#00a3ff] hover:bg-[#00a3ff] hover:text-white rounded-full p-2 transition-colors shadow-lg shadow-[#00a3ff]/20"
            aria-label="Instagram Genevieve Website"
          >
            <Instagram size={22} />
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2 z-[101]"
        >
          {isOpen ? <X size={32} /> : <Menu size={28} />}
        </button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center gap-8"
          >
            {menuLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  link.action();
                  setIsOpen(false);
                }}
                className="text-5xl font-beauty text-white hover:text-[#00a3ff] transition-colors"
              >
                {link.name}
              </button>
            ))}
            {/* Instagram Icon Only Mobile Menu */}
            <a
              href="https://www.instagram.com/genevieve_website/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center bg-white text-[#00a3ff] hover:bg-[#00a3ff] hover:text-white rounded-full p-3 transition-colors shadow-lg shadow-[#00a3ff]/20"
              aria-label="Instagram Genevieve Website"
            >
              <Instagram size={32} />
            </a>
            {/* Botão Contato Mobile */}
            <button
              onClick={() => {
                navigate("/contato");
                setIsOpen(false);
              }}
              className="mt-4 px-8 py-3 rounded-full text-[12px] font-black uppercase tracking-widest bg-[#00a3ff] text-white hover:bg-white hover:text-black transition-all shadow-lg shadow-[#00a3ff]/20"
            >
              Contato
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
