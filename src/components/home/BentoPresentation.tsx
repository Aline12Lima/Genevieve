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
    <section className="py-20 bg-surface-base px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
        {/* Card Grande de Imagem - Bento 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="md:col-span-2 md:row-span-1 bg-surface-card overflow-hidden rounded-2xl"
        >
          <img
            src={bento2}
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            alt="Design de Interface Genevieve"
          />
        </motion.div>

        {/* Card de Texto "CONCEPT" - Otimizado */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-1 bg-surface-soft p-8 rounded-2xl flex flex-col justify-start border border-border-soft"
        >
          <span className="text-[10px] text-accent-blue font-bold tracking-[0.2em] uppercase mb-6">
            CONCEPT
          </span>
          <h3 className="text-text-primary text-5xl font-black mb-4 uppercase leading-[0.9] tracking-tighter">
            RE
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              IMAGINE
            </span>
          </h3>
          <p className="text-text-secondary text-[11px] leading-relaxed mt-auto">
            Design focado em modernidade com tecnologias de ponta.
          </p>
        </motion.div>

        {/* Card de Imagem Vertical - Bento 2 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-1 md:row-span-2 bg-[#111] overflow-hidden rounded-2xl"
        >
          <img
            src={bento1}
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            alt="Experiência Mobile First"
          />
        </motion.div>

        {/* Card de Texto "BRANDING" - Otimizado */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-2 bg-surface-soft p-10 rounded-2xl flex flex-col justify-center border border-border-soft"
        >
          <span className="text-[10px] text-text-muted font-bold tracking-[0.3em] uppercase mb-4">
            construção
          </span>
          <h3 className="text-text-text-primary text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none">
            RE
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              DESIGN
            </span>
          </h3>
          <p className="text-text-secondary  text-sm mt-6 max-w-xs">
            Sua marca em evidência nas pesquisas do Google com entrega em uma
            semana.
          </p>
        </motion.div>

        {/* Card de Imagem Horizontal - Bento 3 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-1 bg-surface-card overflow-hidden rounded-2xl"
        >
          <img
            src={bento3}
            className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
            alt="Customização sob medida"
          />
        </motion.div>
      </div>
    </section>
  );
}
