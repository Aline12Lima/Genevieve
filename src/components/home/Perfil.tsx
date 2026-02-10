import { motion } from "framer-motion";

export function Perfil() {
  // Definição da animação com tipagem fixa para evitar erros no TS
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: 0.9,
      ease: [0.215, 0.61, 0.355, 1] as const, // O 'as const' resolve o erro de Type mismatch
    },
  };

  return (
    <section className="relative bg-[#F2F2F2] py-24 md:py-20 px-6 md:px-16 text-black">
      <div className="max-w-[1400px] mx-auto">
        {/* Header da Seção - Linha 16 */}
        <motion.div {...fadeInUp} className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/40 font-bold">
            Perfil
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Título Grande à Esquerda - Linha 24 */}
          <motion.div {...fadeInUp} className="lg:col-span-7">
            <h2 className="font-beauty text-5xl md:text-[5.5vw] leading-[1.1] tracking-tighter">
              Ajudamos marcas a <br />
              <span className="text-[#00a3ff]">elevar o padrão</span> <br />
              do mercado digital.
            </h2>
          </motion.div>

          {/* Texto Descritivo à Direita */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end pb-4"
          >
            <p className="text-lg md:text-xl leading-relaxed text-black/70 font-light">
              Nossa <span className="text-black font-medium">equipe</span> atua
              na intersecção entre performance técnica e estética editorial,
              criando experiências digitais pensadas para marcas que precisam se
              destacar, escalar e converter.
            </p>

            <button
              onClick={() => {
                const el = document.getElementById("projects");
                if (!el) return;

                const headerOffset = 140;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition =
                  elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }}
              className="
                inline-flex items-center gap-2
                mt-6
                text-sm uppercase tracking-widest
                font-semibold
                text-[var(--color-blue)]
                hover:text-black
                transition-colors duration-300
                 "
            >
              Ver outros projetos
              <span className="text-lg">→</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Marca d'água decorativa */}
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
        <h4 className="font-beauty text-[10vw] leading-none italic">
          Genevieve
        </h4>
      </div>
    </section>
  );
}
