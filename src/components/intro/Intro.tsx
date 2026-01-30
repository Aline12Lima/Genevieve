import { motion } from "framer-motion";
// Importação de tipo específica para Verbatim Module Syntax
import type { Transition } from "framer-motion";

export function Intro() {
  // Controle de tempo: reduza este valor para o Hero abrir mais rápido
  const openDelay = 1.0;

  const panelTransition: Transition = {
    duration: 0.8,
    delay: openDelay,
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
      {/* Painel Superior */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={panelTransition}
        className="flex-1 bg-black flex items-end justify-center"
      >
        <div className="overflow-hidden mb-[-15px] md:mb-[-22px]">
          <motion.h1
            initial={{ y: "100%", opacity: 1 }}
            animate={{
              y: 0,
              opacity: 0,
            }}
            transition={{
              y: { duration: 0.6 },
              opacity: { delay: openDelay, duration: 0.1 },
            }}
            className="text-white text-3xl md:text-5xl font-black tracking-tighter uppercase"
          >
            GENE
            <span
              style={{ WebkitTextStroke: "1px white" }}
              className="text-transparent"
            >
              VIEVE
            </span>
          </motion.h1>
        </div>
      </motion.div>

      {/* Painel Inferior */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={panelTransition}
        className="flex-1 bg-black"
      />
    </div>
  );
}
