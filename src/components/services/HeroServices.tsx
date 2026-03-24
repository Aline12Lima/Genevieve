import { motion } from "framer-motion";
import { Plus } from "lucide-react";

export default function HeroServices() {
  return (
    <section className="relative pt-44 pb-24 px-6 md:px-12 bg-[#0a0a0b] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00a3ff]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center lg:justify-start gap-2 text-[#00a3ff] font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
        >
          <Plus size={12} /> Nossas Soluções
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] text-white"
          >
            Pages que <br />
            <span className="text-gray-600 italic font-light">
              geram contratos.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-xl"
          >
            Não entregamos apenas código. Construímos ativos digitais
            estratégicos com manutenção técnica inclusa para garantir que sua
            empresa nunca pare de crescer.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
