import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// IMAGENS DESKTOP
import desk1 from "../../assets/PROMO/Agenda.jpg";
import desk2 from "../../assets/PROMO/symary.jpg";
import desk3 from "../../assets/PROMO/Cover.jpg";

// IMAGENS MOBILE
import mob1 from "../../assets/PROMO/PROMOMOBILE/1.png";
import mob2 from "../../assets/PROMO/PROMOMOBILE/2.png";
import mob3 from "../../assets/PROMO/PROMOMOBILE/3.png";

const slidesDesktop = [desk1, desk2, desk3];
const slidesMobile = [mob1, mob2, mob3];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile para trocar o array de imagens
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    const slides = isMobile ? slidesMobile : slidesDesktop;
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const slides = isMobile ? slidesMobile : slidesDesktop;
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slides = isMobile ? slidesMobile : slidesDesktop;
    const time = current === slides.length - 1 ? 12000 : 6000;
    const timer = setInterval(nextSlide, time);
    return () => clearInterval(timer);
  }, [current, isMobile]);

  const currentSlides = isMobile ? slidesMobile : slidesDesktop;

  return (
    <section className="relative w-full h-[550px] md:h-[600px] lg:h-[700px] bg-zinc-950 overflow-hidden pt-24 md:pt-16">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current}-${isMobile}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full flex items-center justify-center px-4 md:px-0"
          >
            {/* Desktop: Mantém w-3/4 e object-fill (Primeira versão)
              Mobile: w-full e h-[90%] com object-contain (Para as novas artes 1.png, etc)
            */}
            <img
              src={currentSlides[current]}
              className="w-full h-[90%] md:w-3/4 md:h-3/4 object-contain md:object-fill cursor-pointer md:rounded-xl md:shadow-2xl"
              alt={`Promoção ${current + 1}`}
            />

            {/* BOTÃO ADQUIRA: Ajustado para as duas versões */}
            {current === currentSlides.length - 1 && (
              <button
                className="hidden md:block absolute bottom-58 left-58 z-30 bg-[#00a3ff] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-[#007acc] transition-all animate-pulse-slow"
                onClick={() => (window.location.href = "/contato")}
              >
                Adquira seu site agora
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/60 text-white p-1.5 md:p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/60 text-white p-1.5 md:p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {currentSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 md:h-2 transition-all duration-300 rounded-full ${
              current === index
                ? "bg-[#00a3ff] w-6 md:w-12"
                : "bg-white/30 w-1.5 md:w-2"
            }`}
          />
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .animate-pulse-slow {
          animation: pulse-slow 2.5s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.98); }
        }
      `,
        }}
      />
    </section>
  );
}
