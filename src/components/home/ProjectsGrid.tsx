import { motion } from "framer-motion";
import { MapPin, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import imgBrasil from "../../assets/map/3907.jpg";

export function ProjectsGrid() {
  const navigate = useNavigate();
  const slides = [imgBrasil, imgBrasil, imgBrasil, imgBrasil];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row min-h-[600px] lg:h-[80vh]">
        {/* LADO ESQUERDO: CARROSSEL INFINITO */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-full bg-zinc-200 overflow-hidden">
          <motion.div
            className="flex h-full"
            style={{ width: "400%" }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {slides.map((img, index) => (
              <div key={index} className="relative w-1/4 h-full flex-shrink-0">
                <img
                  src={img}
                  alt="Atendimento Brasil e Portugal"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </motion.div>

          {/* Badges de Localização */}
          <div className="absolute bottom-8 left-8 z-20 flex gap-2">
            <div className="bg-white text-black px-4 py-1.5 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
              Focus: Brasil
            </div>
          </div>
        </div>

        {/* LADO DIREITO: CONTEÚDO */}
        <div className="w-full lg:w-1/2 bg-[#0a0a0b] px-6 md:px-12 py-16 lg:py-0 flex items-center border-l border-white/5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl p-6 md:p-10 lg:p-12"
          >
            <div className="inline-flex items-center gap-2 mb-6 text-[#00a3ff] font-mono text-[10px] tracking-[0.3em] uppercase">
              <Globe2 className="w-3 h-3" />
              Presença Internacional
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8">
              Sua empresa <br />
              <span className="text-[#00a3ff] italic font-light">
                sem fronteiras.
              </span>
            </h3>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              Com foco total no mercado do{" "}
              <span className="text-white font-bold">Brasil</span>, expandimos
              nossa expertise também para{" "}
              <span className="text-zinc-300">Portugal</span>, entregando
              soluções de alta performance para construção civil.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-12">
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg group hover:border-[#00a3ff]/50 transition-colors">
                <MapPin className="w-5 h-5 text-[#00a3ff]" />
                <span className="text-zinc-300 text-sm font-semibold uppercase tracking-wider">
                  Projetos em todo o território nacional
                </span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg group hover:border-[#00a3ff]/50 transition-colors">
                <Globe2 className="w-5 h-5 text-[#00a3ff]" />
                <span className="text-zinc-300 text-sm font-semibold uppercase tracking-wider">
                  Suporte global via WhatsApp
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate("/contato")}
              className="group relative px-10 py-5 bg-[#00a3ff] text-white font-black uppercase text-[11px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,163,255,0.3)]"
            >
              Falar com um Especialista
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
