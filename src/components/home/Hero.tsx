import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importações
import card1 from "../../assets/PROMO/Agenda.jpg";
import card3 from "../../assets/PROMO/symary.jpg";
import card4 from "../../assets/PROMO/Cover.jpg";

const slides = [card1, card3, card4];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const time = current === slides.length - 1 ? 12000 : 6000;
    const timer = setInterval(nextSlide, time);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="relative w-full h-auto md:h-[600px] lg:h-[700px] bg-zinc-950 overflow-hidden pt-8 pb-10 md:pb-0">
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full flex items-center justify-center px-2 md:px-0 mt-0 md:mt-0 lg:mt-0"
          >
            {/* MOBILE: object-contain (Garante que NÃO CORTE a arte)
               DESKTOP: object-fill ou contain dependendo da sua preferência de preenchimento
            */}
            <img
              src={slides[current]}
              className="w-full h-auto max-h-[450px] md:w-3/4 md:h-3/4 md:max-h-none object-contain md:object-fill cursor-pointer md:rounded-xl md:shadow-2xl"
              alt={`Banner Marketing ${current + 1}`}
            />

            {/* BOTÃO ADQUIRA: Posicionado para não cobrir o centro da arte no mobile */}
            {current === slides.length - 1 && (
              <button
                className="absolute left-8 bottom-64 md:left-1/4 md:bottom-48 lg:left-1/4 lg:bottom-48 z-30 bg-[#00a3ff] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-[#007acc] transition-all animate-pulse-slow"
                onClick={() => (window.location.href = "/contato")}
              >
                Adquira seu site agora
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Setas de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-1 md:p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-1 md:p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5 md:w-8 md:h-8" />
      </button>

      {/* Dots (Indicadores) */}
      <div className="absolute bottom-2 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 md:h-2 transition-all duration-300 rounded-full ${
              current === index
                ? "bg-[#00a3ff] w-5 md:w-12"
                : "bg-white/20 w-1.5 md:w-2"
            }`}
          />
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0px rgba(0,163,255,0); }
          50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0,163,255,0.4); }
        }
      `,
        }}
      />
    </section>
  );
}
