import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const scrolledTextClass = scrolled
    ? "text-gray-400"
    : isDarkBg
      ? "text-white"
      : "text-gray-300";

  const scrolledBorderClass = scrolled
    ? "border-gray-400/40"
    : "border-white/50";

  /* ===================== SCROLL HEADER ===================== */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===================== OBSERVER BG ===================== */
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

  /* ===================== LOCK BODY ===================== */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  /* ===================== HELPERS ===================== */
  function scrollToTop() {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function scrollToSection(id: string) {
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 140; // altura do header fixo
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 400);
    } else {
      scroll();
    }
  }

  const menuLinks = [
    { name: "Início", action: scrollToTop },
    { name: "Serviços", action: () => scrollToSection("nichos") },
    { name: "Projetos", action: () => scrollToSection("projects") }, // Alterado de "/projetos" para "projects"
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
        className={`fixed top-0 left-0 w-full z-[9999] flex items-center justify-between px-6 md:px-16 transition-all duration-500 ${
          isOpen
            ? "mt-0 py-6"
            : scrolled
              ? "mt-2 py-2 bg-transparent border-white/5"
              : "mt-4 lg:mt-6 py-6 bg-transparent"
        }`}
      >
        {/* LOGO */}
        <button onClick={scrollToTop} className="z-[101]">
          <h1
            className={`font-beauty text-[10vw] sm:text-[8vw] md:text-[5vw] lg:text-[3vw] leading-none tracking-tighter transition-colors duration-300 ${scrolledTextClass}`}
          >
            Genevieve
          </h1>
        </button>

        {/* NAV DESKTOP */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <div
            className={`flex items-center gap-8 px-8 py-2 bg-white/5 backdrop-blur-md border ${scrolledBorderClass} rounded-full`}
          >
            {menuLinks.map((link) => (
              <button
                key={link.name}
                onClick={link.action}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] ${scrolledTextClass} transition-colors`}
              >
                {link.name}
              </button>
            ))}

            <button
              onClick={() => navigate("/contato")}
              className={`bg-white/10 hover:bg-[#23007B] px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest ${scrolledTextClass} transition-all border ${
                scrolled ? "border-gray-400/40" : "border-white/10"
              }`}
            >
              Contato
            </button>
          </div>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden relative p-2 z-[101] transition-colors duration-300 ${scrolledTextClass}`}
        >
          {isOpen ? <X size={32} /> : <Menu size={28} />}
        </button>
      </motion.header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[90] flex flex-col items-center justify-start pt-[30vh] gap-8"
          >
            {menuLinks.map((link) => (
              <motion.button
                key={link.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={() => {
                  link.action();
                  setIsOpen(false);
                }}
                className="text-5xl font-veauly text-white italic hover:text-[#23007B] transition-colors"
              >
                {link.name}
              </motion.button>
            ))}

            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => {
                navigate("/contato");
                setIsOpen(false);
              }}
              className="mt-4 px-12 py-4 rounded-full border border-white/20 text-white font-veauly text-2xl hover:bg-[#23007B] transition-all"
            >
              Contato
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
