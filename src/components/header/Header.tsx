import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);
  const scrolledTextClass = scrolled
    ? "text-gray-400"
    : isDarkBg
      ? "text-white"
      : "text-gray-300";
  const scrolledBorderClass = scrolled
    ? "border-gray-400/40"
    : "border-white/50";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect background color das seções visíveis
  useEffect(() => {
    const observeSections = () => {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          let mostVisibleSection = null;
          let maxRatio = 0;

          entries.forEach((entry) => {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio;
              mostVisibleSection = entry.target;
            }
          });

          if (mostVisibleSection) {
            const styles = window.getComputedStyle(mostVisibleSection);
            const bgColor = styles.backgroundColor;

            // Detectar se a cor é clara ou escura
            const rgbMatch = bgColor.match(/\d+/g);
            if (rgbMatch) {
              const brightness =
                (parseInt(rgbMatch[0]) +
                  parseInt(rgbMatch[1]) +
                  parseInt(rgbMatch[2])) /
                3;
              setIsDarkBg(brightness < 180);
            }
          }
        },
        { threshold: [0, 0.25, 0.5, 0.75, 1] },
      );

      document.querySelectorAll("section").forEach((section) => {
        sectionObserver.observe(section);
      });
    };

    setTimeout(observeSections, 100);
  }, []);

  // Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const menuLinks = [
    { name: "Início", href: "#" },
    { name: "Serviços", href: "#" },
    { name: "Projetos", href: "#" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.6,
          ease: [0.76, 0, 0.24, 1],
        }}
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-16 transition-all duration-500 ${
          isOpen
            ? "mt-0 py-6" // Remove margem e ajusta padding quando aberto
            : scrolled
              ? "mt-2 py-2 bg-transparent border-white/5"
              : "mt-4 lg:mt-6 py-6 bg-transparent"
        }`}
      >
        <h1
          className={`font-beauty text-[10vw] sm:text-[8vw] md:text-[5vw] lg:text-[3vw] leading-none tracking-tighter z-[101] transition-colors duration-300 ${scrolledTextClass}`}
        >
          Genevieve
        </h1>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <div
            className={`flex items-center gap-8 px-8 py-2 bg-white/5 backdrop-blur-md border ${scrolledBorderClass} rounded-full`}
          >
            {menuLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] ${scrolledTextClass} transition-colors`}
              >
                {link.name}
              </a>
            ))}
            <button
              className={`bg-white/10 hover:bg-[#23007B] px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest ${scrolledTextClass} transition-all border ${
                scrolled ? "border-gray-400/40" : "border-white/10"
              }`}
            >
              Contato
            </button>
          </div>
        </nav>

        {/* MENU MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden relative p-2 z-[101] transition-colors duration-300 ${scrolledTextClass}`}
        >
          {isOpen ? <X size={32} /> : <Menu size={28} />}
        </button>
      </motion.header>

      {/* OVERLAY MOBILE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-start pt-[30vh] gap-8"
          >
            {menuLinks.map((link) => (
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                key={link.name}
                href={link.href}
                className="text-5xl font-veauly text-white italic hover:text-[#23007B] transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="mt-4 px-12 py-4 rounded-full border border-white/20 text-white font-veauly text-2xl hover:bg-[#23007B] transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              Contato
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
