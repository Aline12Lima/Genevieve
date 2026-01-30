import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Instale lucide-react ou use SVGs

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = ["O QUE FAZEMOS", "SOBRE NÓS", "PORTFOLIO", "ORÇAMENTO"];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full z-[90] flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/[0.05] bg-black/10 backdrop-blur-sm"
      >
        {/* LOGO */}
        <div className="flex items-center z-[100]">
          <h1 className="text-white text-xl md:text-2xl font-black tracking-tighter uppercase leading-none">
            GENE
            <span
              style={{ WebkitTextStroke: "1px white" }}
              className="text-transparent"
            >
              VIEVE
            </span>
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            {menuLinks.map((link) => (
              <li
                key={link}
                className="relative group overflow-hidden cursor-pointer"
              >
                <span className="block hover:text-white transition-colors duration-500">
                  {link}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* MOBILE TRIGGER & CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block  relative px-6 py-2 overflow-hidden border border-white/20 group transition-all duration-500">
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white group-hover:text-black transition-colors">
              ADERIR AGORA
            </span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </button>

          {/* ÍCONE MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white z-[100] p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black z-[85] flex flex-col justify-start px-8 pt-32"
          >
            <ul className="flex flex-col gap-8 text-2xl font-black tracking-tighter text-white uppercase">
              {menuLinks.map((link, i) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
