import { motion, AnimatePresence } from "framer-motion";
import { Plus, Zap } from "lucide-react";
import { useState, useEffect } from "react";

// Imports de imagens de obras (Pilares)
import imgPilar1 from "../assets/images2/pilar1.jpeg";
import imgPilar from "../assets/images2/pilares.jpeg";
import imgPilar3 from "../assets/images2/avanço.jpeg";

// Imports dos colaboradores (apenas para a seção do Time abaixo)
import Persona1 from "../assets/images/Aline.jpg";
import Persona2 from "../assets/images/ju.png";
import Persona3 from "../assets/images/Jeff.jpg";

// Array restrito apenas às imagens de obras para o background
const pilaresSlides = [imgPilar1, imgPilar, imgPilar3];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};

export function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lógica de troca das imagens de fundo da seção
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % pilaresSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-[#00a3ff] selection:text-white font-sans overflow-x-hidden">
      {/* ===================== HEADER HERO ===================== */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-[1440px] mx-auto">
          <motion.span
            {...fadeInUp}
            className="flex justify-center items-center gap-2 text-[#00a3ff] font-bold uppercase tracking-[0.3em] text-[10px] mb-10"
          >
            <Plus size={12} /> Sobre Nós
          </motion.span>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="text-center md:text-left">
              <h1 className="text-[8vw] md:text-[5vw] font-bold leading-[0.85] tracking-tighter uppercase">
                Engenharia de Software <br />
                com DNA de{" "}
                <span className="text-[#00a3ff] font-beauty lowercase font-light">
                  Canteiro de Obras
                </span>
              </h1>
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed text-center md:text-left"
            >
              Não somos apenas uma agência de marketing; somos parceiros que
              entendem o ritmo, a pressão e a entrega de uma obra de grande
              escala. Nosso trabalho é transformar essa sua excelência
              operacional em autoridade.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ===================== ESTATÍSTICAS COM BACKGROUND DINÂMICO ===================== */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* BACKGROUND SLIDESHOW (Apenas as 3 imagens de obras) */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={pilaresSlides[currentSlide]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.3, scale: 1 }} // Opacidade baixa para não brigar com o conteúdo
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          {/* Overlay escuro para garantir contraste */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* CONTEÚDO DA SEÇÃO */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center md:text-left">
              <h4 className="text-white text-3xl md:text-4xl font-black tracking-tighter mb-4 uppercase leading-tight">
                Falamos a linguagem tanto dos canteiros quanto das reuniões
                executivas.
              </h4>
              <p className="text-[#00a3ff] text-xs font-bold tracking-[0.3em] uppercase opacity-80">
                Foco em Resultado
              </p>
            </div>

            {/* CARD AZUL SÓLIDO (Como você solicitou) */}
            <motion.div
              {...fadeInUp}
              className="bg-white/30 p-10 md:p-14 rounded-[3rem] text-black flex flex-col items-center text-center justify-center min-h-[400px] gap-8 shadow-2xl shadow-[#00a3ff]/20 mx-auto w-full max-w-[420px]"
            >
              <div className="w-20 h-20 bg-black/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-black/5">
                <Zap size={44} fill="black" strokeWidth={1} />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter leading-tight uppercase">
                  Pronto para levar sua marca para o próximo nível?
                </h3>
                <div className="w-12 h-[2px] bg-black/20 rounded-full mx-auto" />
                <p className="text-white text-sm font-black uppercase tracking-[0.2em]">
                  Te acompanharemos deste os primeiros pilares até seus
                  objetivos
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== O TIME ===================== */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
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
              className="group max-w-[350px] mx-auto w-full"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] mb-8 bg-[#111]">
                <img
                  src={person.image}
                  loading="lazy"
                  alt={person.name}
                  className="w-full aspect-[3/4] object-cover grayscale "
                />
              </div>
              <div className="text-center">
                <p className="text-[#00a3ff] text-[10px] font-black uppercase tracking-[0.2em] mb-2">
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
    </div>
  );
}
