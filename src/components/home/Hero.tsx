import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { projects } from "../../data/projects";

export function Hero() {
  const readyProjects = useMemo(() => projects.slice(0, 3), []);
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === readyProjects.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? readyProjects.length - 1 : prev - 1));

  useEffect(() => {
    const length = readyProjects.length;
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => window.clearInterval(timer);
  }, [readyProjects.length]);

  const activeProject = readyProjects[current];

  return (
    <section className="relative w-full h-[100vh] min-h-[650px] bg-zinc-950 overflow-hidden flex items-center">
      {/* --- Estrutura Fixa (Background) --- */}
      <div className="absolute inset-0 z-0 grid md:grid-cols-12 w-full h-full">
        {/* Lado Esquerdo Fixo (Vazio para o texto) */}
        <div className="hidden md:block md:col-span-5 bg-zinc-950" />

        {/* Lado Direito: Área do Carrossel de Imagens */}
        <div className="relative col-span-12 md:col-span-7 h-full w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeProject.link} // Chave única para engatilhar a animação
              src={activeProject.image}
              alt={activeProject.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.6, scale: 1 }} // Opacidade para contraste do texto
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-52 md:-top-28 left-[-32px] right-0 bottom-auto w-full h-[60%] md:bottom-0 md:h-[calc(100%+3rem)] object-cover object-top object-left"
            />
          </AnimatePresence>

          {/* Overlay de gradiente para suavizar a transição entre o fundo fixo e a imagem */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent md:from-zinc-950 md:via-zinc-950/20" />
        </div>
      </div>

      {/* --- Conteúdo Sobreposto (Z-index alto) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full h-full flex items-center">
        <div className="grid md:grid-cols-12 gap-12 w-full items-center">
          {/* Lado Esquerdo: Textos FIXOS (Sem efeito de carrossel) */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:gap-5 pt-0 md:pt-0">
            {/* H1 Hero Principal Fixo */}
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500">
              Seu novo site em 5 dias
            </h2>

            {/* Texto H1 Secundário Fixo */}
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-white">
              Empresa <br /> com um site bem feito <br />
              <span className="text-zinc-500 italic font-light">
                se torna grande.
              </span>
            </h1>

            {/* CTAs */}
            <div className="flex items-center gap-2 mt-8">
              <button
                type="button"
                className="flex items-center justify-center px-5 py-2.5 bg-blue-600 rounded-xl text-white font-black uppercase tracking-tight text-xs md:text-sm hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                Quero meu site assim
              </button>

              {/* Desktop: botão do site ao lado do CTA */}
              <div className="hidden md:block overflow-hidden rounded-full">
                <AnimatePresence mode="wait">
                  <motion.a
                    key={activeProject.link}
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-white text-black px-4 py-2 shadow-xl hover:bg-blue-500 hover:text-white transition-colors"
                  >
                    Ver site pronto <ExternalLink size={12} />
                  </motion.a>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Lado Direito: Área das Imagens e Botões Fixos/Dinâmicos */}
          <div className="col-span-12 md:col-span-7 relative h-[300px] md:h-[500px] w-full">
            {/* BOTÃO DINÂMICO: 'Ver site' - Muda com a imagem, sobreposto */}
            <div className="absolute bottom-6 right-38 md:hidden z-20 overflow-hidden rounded-full">
              <AnimatePresence mode="wait">
                <motion.a
                  key={activeProject.link} // Reanima quando o link muda
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-white text-black px-4 py-2 shadow-xl hover:bg-blue-500 hover:text-white transition-colors"
                >
                  Ver site pronto <ExternalLink size={12} />
                </motion.a>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Desktop: navegação centralizada do carrossel */}
        <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 items-center gap-4">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Projeto anterior"
            className="text-white/50 hover:text-white bg-white/5 p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {readyProjects.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Ir para o projeto ${index + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  current === index ? "bg-blue-500 w-8" : "bg-white/20 w-3"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Próximo projeto"
            className="text-white/50 hover:text-white bg-white/5 p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
