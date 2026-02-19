import { motion } from "framer-motion";
import { Plus, ArrowUpRight, Zap } from "lucide-react";

import Persona1 from "../assets/images/Aline.jpg";
import Persona2 from "../assets/images/ju.png";
import Persona3 from "../assets/images/Jeff.jpg";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const, // Adicione o 'as const' aqui
  },
};

export function About() {
  return (
    <div className="bg-black text-white selection:bg-[#00a3ff] selection:text-white font-sans overflow-x-hidden">
      {/* ===================== HEADER HERO (AGENTIX STYLE) ===================== */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <motion.div {...fadeInUp} className="max-w-4xl">
              <span className="flex items-center gap-2 text-[#00a3ff] font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                <Plus size={12} /> Sobre Nós
              </span>
              <h1 className="text-[12vw] md:text-[7vw] font-bold leading-[0.85] tracking-tighter uppercase">
                Onde o Design <br />
                Encontra a{" "}
                <span className="text-[#00a3ff] font-beauty lowercase font-light">
                  Estratégia
                </span>
              </h1>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="hidden md:block pb-4"
            >
              <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group cursor-pointer hover:bg-white hover:text-black transition-all duration-500">
                <ArrowUpRight
                  size={32}
                  className="group-hover:rotate-45 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-12"
          >
            <p className="md:col-start-7  md:col-span-6 text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              Nascemos da necessidade de transformar a internet em um terreno
              lucrativo para negócios locais. Não fazemos apenas sites;
              construímos ativos digitais que trabalham enquanto você dorme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================== NOSSA MISSÃO (BENTO GRID) ===================== */}
      <section className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            {...fadeInUp}
            className="md:col-span-2 bg-[#0a0a0a] border border-white/5 p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[400px]"
          >
            <h2 className="text-4xl md:text-6xl font-bold max-w-xl leading-[1.1] tracking-tighter">
              Focados em elevar o seu faturamento através do{" "}
              <span className="text-[#00a3ff] font-beauty lowercase font-light">
                Digital.
              </span>
            </h2>
          </motion.div>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="bg-[#00a3ff] p-10 md:p-14 rounded-[2.5rem] text-black flex flex-col items-center text-center justify-center min-h-[400px] gap-8 shadow-2xl shadow-[#00a3ff]/20"
          >
            {/* Ícone com moldura circular para destaque */}
            <div className="w-20 h-20 bg-black/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-black/5">
              <Zap size={44} fill="black" strokeWidth={1} />
            </div>

            {/* Bloco de Texto com tipografia ajustada */}
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight uppercase">
                Performance <br /> Total
              </h3>

              <div className="w-12 h-[2px] bg-black/20 rounded-full" />

              {/* Centralização garantida com text-center e mx-auto */}
              <p className="text-white text-sm font-bold uppercase tracking-[0.2em] max-w-[200px] text-center mx-auto">
                Velocidade extrema para dominar o Google
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== ESTATÍSTICAS / VALORES ===================== */}
      <section className="py-20 md:py-32 bg-white text-black">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">
              100%
            </h4>
            <p className="text-xs uppercase font-bold tracking-widest text-black/50">
              Foco em Resultado
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">
              UX+
            </h4>
            <p className="text-xs uppercase font-bold tracking-widest text-black/50">
              Design de Experiência
            </p>
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-6xl md:text-8xl font-black tracking-tighter mb-2">
              24/7
            </h4>
            <p className="text-xs uppercase font-bold tracking-widest text-black/50">
              Sua Marca no Ar
            </p>
          </div>
        </div>
      </section>

      {/* ===================== O TIME (AGENTIX CARD STYLE) ===================== */}
      <section className="py-24 md:py-40 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="text-center mb-24">
          <motion.span
            {...fadeInUp}
            className="text-[#00a3ff] font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            Quem faz acontecer
          </motion.span>
          <motion.h2
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mt-4"
          >
            Nosso Time
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {[
            {
              name: "Juliane Lima",
              role: "Comercial & Estratégia",
              image: Persona2,
            },
            { name: "Aline Lima", role: "Tech Lead", image: Persona1 },
            { name: "Jefferson", role: "Design & Dev", image: Persona3 },
          ].map((person, index) => (
            <motion.div
              key={person.name}
              {...fadeInUp}
              transition={{ delay: index * 0.2 }}
              className="group cursor-default"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] mb-8 bg-[#111]">
                <img
                  src={person.image}
                  loading="lazy"
                  alt={person.name}
                  /* Removido o 'grayscale' e 'group-hover:grayscale-0' */
                  className="w-full aspect-[3/4] object-cover grayscale transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100">
                  <Plus className="text-black" />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[#00a3ff] text-[10px] font-black uppercase tracking-[0.2em]">
                  {person.role}
                </p>
                <h4 className="text-3xl font-bold tracking-tight uppercase">
                  {person.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <motion.div {...fadeInUp}>
          <h2 className="text-5xl md:text-[10vw] font-bold tracking-tighter uppercase leading-none mb-12">
            Pronto para <br /> <span className="text-[#00a3ff]">Escalar?</span>
          </h2>
          <a
            href="/contato"
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full font-bold text-lg hover:bg-[#00a3ff] hover:text-white transition-all duration-500"
          >
            Iniciar Projeto <ArrowUpRight />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
