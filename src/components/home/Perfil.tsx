import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export function Perfil() {
  const navigate = useNavigate(); // Essencial: dentro da função

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  };

  const etapas = [
    {
      num: "01",
      titulo: "Diagnóstico",
      desc: "Entendemos sua necessidade, objetivo da empresa, público, tipo de serviço e local de atuação.",
    },
    {
      num: "02",
      titulo: "Definição Visual",
      desc: "Definimos layout, logo, estilos, cores, fotos e organização das informações do seu site.",
    },
    {
      num: "03",
      titulo: "Contrato e Início",
      desc: "Sinal de 50% para início, com contrato assinado. Aceitamos Pix, crédito, débito e parcelamento.",
    },
    {
      num: "04",
      titulo: "Entrega e Suporte",
      desc: "Site no ar após sua aprovação final, com 2 semanas de suporte técnico garantido.",
    },
  ];

  return (
    <section className="relative bg-[#F2F2F2] py-24 px-6 md:px-16 text-black">
      <div className="max-w-[1400px] mx-auto">
        {/* Título */}
        <motion.div {...fadeInUp} className="mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#00a3ff] font-bold mb-4">
            Processo de Trabalho
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Como funciona o nosso projeto?
          </h3>
        </motion.div>

        {/* Grid de Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {etapas.map((item, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: index * 0.1 }}
              className="relative bg-white p-8 border-b-4 border-[#00a3ff] shadow-sm"
            >
              <span className="text-[#00a3ff] font-bold text-sm block mb-4 opacity-50">
                {item.num}
              </span>
              <h4 className="text-xl font-bold mb-3 uppercase tracking-tight">
                {item.titulo}
              </h4>
              <p className="text-black/70 leading-relaxed text-sm">
                {item.desc}
              </p>

              {index < etapas.length - 1 && (
                <span className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-3xl font-bold text-[#00a3ff]/70">
                  &gt;
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Botão de Ação */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <button
            onClick={() => navigate("/contato")}
            className="relative z-50 bg-black text-white px-10 py-5 text-[12px] font-bold uppercase tracking-widest hover:bg-[#00a3ff] transition-all transform hover:-translate-y-1 active:scale-95 shadow-lg cursor-pointer"
          >
            Iniciar meu orçamento →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
