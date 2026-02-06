import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function CTAWorkTogether() {
  return (
    <section className="relative py-12 bg-surface-base  flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Video Background */}

      {/* Overlay (opcional, mas recomendado) */}
      <div className="absolute inset-0 bg-surface-base z-10" />

      {/* Conteúdo */}
      <span className="relative z-20 text-gray-500 text-xs uppercase tracking-[0.4em] mb-0">
        Entre em contato
      </span>

      <h2 className="relative z-20 text-white  text-6xl md:text-9xl font-black tracking-tighter leading-none mb-12">
        Fale <br />
        conosco <br />
        <span
          style={{ WebkitTextStroke: "1px white" }}
          className="text-transparent"
        >
          Agora
        </span>
      </h2>

      <Link to="/contact" className="relative z-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-12 py-4 border border-border-strongrounded-full text-text-primary text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
        >
          CONTATO
        </motion.button>
      </Link>
    </section>
  );
}
