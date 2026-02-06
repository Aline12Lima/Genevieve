import { motion } from "framer-motion";
import bento1 from "../../assets/images/Bento1.jpg";
import bento2 from "../../assets/images/bento.jpg";
import bento3 from "../../assets/images/bento2.jpg";

export function BentoPresentation() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-0 bg-black px-6 md:px-12">
      <div
        className="
          max-w-7xl mx-auto 
          grid grid-cols-1 
          md:grid-cols-4 
          /* Desktop: Linha 1 curta (260px) e Linha 2 alta (540px) */
          lg:grid-rows-[260px_540px] 
          md:grid-rows-[400px_400px] 
          gap-3 h-auto md:h-[800px]
        "
      >
        {/* 1. Imagem Superior Esquerda */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-1 bg-[#121212] overflow-hidden rounded-2xl"
        >
          <img
            src={bento2}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            alt="Design"
          />
        </motion.div>

        {/* 2. Imagem Vertical Central (Ocupa as 2 linhas) */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-1 md:row-span-2 bg-[#121212] overflow-hidden rounded-2xl"
        >
          <img
            src={bento1}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            alt="Vertical"
          />
        </motion.div>

        {/* 3. Card CONCEITO / IMAGINE (Superior Direita) - Mais curto no Desktop */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 bg-[#121212] p-8 rounded-2xl flex flex-col justify-center border border-white/5"
        >
          <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-2">
            CONCEITO
          </span>
          <h3 className="text-white text-5xl font-black uppercase tracking-tighter leading-none">
            RE
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              IMAGINE
            </span>
          </h3>
          <p className="text-gray-400 text-[11px] font-medium mt-3 uppercase tracking-wider">
            Transformamos sua ideia em novas oportunidades.
          </p>
        </motion.div>

        {/* 4. Card MARCA / EVOLUIR (Inferior Esquerda) */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-1 bg-[#121212] p-8 rounded-2xl flex flex-col justify-center border border-white/5"
        >
          <span className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase mb-4">
            MARCA
          </span>
          <h3 className="text-white text-4xl font-black uppercase tracking-tighter leading-[0.9]">
            EVO
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              LUIR
            </span>
          </h3>
          <p className="text-gray-400 text-[10px] mt-4 uppercase">
            Dê o novo passo: Redesign.
          </p>
        </motion.div>

        {/* 5. Imagem Inferior Direita (Fica mais alta no Desktop) */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 bg-[#121212] overflow-hidden rounded-2xl"
        >
          <img
            src={bento3}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            alt="Equipe"
          />
        </motion.div>
      </div>
    </section>
  );
}
