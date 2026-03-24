import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  HardHat,
  Building2,
  PenTool,
  Briefcase,
  ArrowRight,
} from "lucide-react";

import imageWM from "../../assets/dataImagens/capas/4.png";
import imageMayara from "../../assets/dataImagens/capas/3.png";
import imageFF from "../../assets/dataImagens/capas/5.png";

export function Perfil() {
  const navigate = useNavigate();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.42, 0, 1, 1] },
    },
  };

  const grupos = [
    {
      titulo: "Técnicos & Projetistas",
      lista: "Arquitetos, Engenheiros e Consultorias",
      icon: <PenTool className="w-5 h-5" />,
    },
    {
      titulo: "Executores & Obras",
      lista: "Empreiteiras, Construtoras e Serviços em Campo",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      titulo: "Especialistas",
      lista: "Elétrica, Hidráulica, Pintura e Reformas",
      icon: <HardHat className="w-5 h-5" />,
    },
    {
      titulo: "Profissionais",
      lista: "Portfólios Pessoais e Apresentação de Serviços",
      icon: <Briefcase className="w-5 h-5" />,
    },
  ];

  const etapas = [
    {
      num: "01",
      titulo: "Diagnóstico",
      desc: "Alinhamos objetivos, público e local de atuação para criar algo único.",
    },
    {
      num: "02",
      titulo: "Definição",
      desc: "Estruturamos o layout, identidade visual e organização estratégica.",
    },
    {
      num: "03",
      titulo: "Execução",
      desc: "Desenvolvimento focado em performance e velocidade de carregamento.",
    },
    {
      num: "04",
      titulo: "Suporte",
      desc: "Site no ar com acompanhamento técnico e otimização contínua.",
    },
  ];

  const ultimosProjetos = [
    { nome: "WM Topografia", bg: "bg-zinc-800", img: imageWM },
    { nome: "Mayra Nunes", bg: "bg-zinc-700", img: imageMayara },
    { nome: "FF Fundações", bg: "bg-zinc-800", img: imageFF },
  ];

  return (
    <section className="relative bg-[#0a0a0b] py-32 px-6 md:px-16 overflow-hidden">
      {/* Background Decor */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start mb-32">
          {/* LADO ESQUERDO: QUEM ATENDEMOS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-5"
          >
            <motion.h2
              variants={itemVariants}
              className="text-[#00a3ff] font-mono text-[11px] tracking-[0.4em] uppercase mb-4 font-black"
            >
              Quem atendemos
            </motion.h2>
            <motion.h3
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter leading-[1.1] uppercase"
            >
              Especialistas em <br />
              <span className="text-gray-500 italic font-light">
                obras e engenharia.
              </span>
            </motion.h3>

            <div className="grid gap-4">
              {grupos.map((grupo, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-6 p-6 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-[#00a3ff]/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-[#00a3ff]/10 text-[#00a3ff] group-hover:bg-[#00a3ff] group-hover:text-white transition-all duration-500">
                    {grupo.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg uppercase tracking-tight">
                      {grupo.titulo}
                    </h4>
                    <p className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">
                      {grupo.lista}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* LADO DIREITO: COMO TRABALHAMOS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-zinc-900/20 p-8 md:p-14 rounded-2xl border border-white/0.05 backdrop-blur-sm relative"
          >
            <h2 className="text-[#00a3ff] font-mono text-[11px] tracking-[0.4em] uppercase mb-12 font-black">
              Como trabalhamos
            </h2>

            <div className="space-y-12 relative">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "80%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-[21px] top-4 w-[1px] bg-gradient-to-b from-[#00a3ff] via-[#00a3ff]/20 to-transparent hidden md:block"
              />

              {etapas.map((etapa, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="flex gap-8 items-start relative group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#0a0a0b] border border-white/10 group-hover:border-[#00a3ff] group-hover:shadow-[0_0_15px_rgba(0,163,255,0.3)] transition-all duration-500 flex items-center justify-center text-white font-black text-xs z-10">
                    {etapa.num}
                  </div>
                  <div className="pt-1">
                    <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tighter group-hover:text-[#00a3ff] transition-colors">
                      {etapa.titulo}
                    </h4>
                    <p className="text-zinc-500 text-base leading-relaxed max-w-md group-hover:text-zinc-400 transition-colors">
                      {etapa.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <button
                onClick={() => navigate("/contato")}
                className="w-full md:w-auto bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#00a3ff] hover:text-white transition-all duration-300 flex items-center justify-center gap-4"
              >
                Iniciar meu projeto agora
                <CheckCircle2 className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* NOVA SEÇÃO: ÚLTIMOS PROJETOS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-0 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-[#00a3ff] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 font-black">
                Portfólio
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
                Confira nossos últimos projetos
              </h3>
            </div>
            <button
              onClick={() => navigate("/projects")}
              className="group flex items-center gap-3 text-white font-bold uppercase text-[10px] tracking-widest hover:text-[#00a3ff] transition-colors"
            >
              Ver todos os projetos
              <ArrowRight
                size={16}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ultimosProjetos.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={
                  "relative aspect-square rounded-2xl overflow-hidden group cursor-pointer border border-white/5"
                }
              >
                {proj.img && (
                  <img
                    src={proj.img}
                    alt={proj.nome}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                  <p className="text-[#00a3ff] font-mono text-[9px] tracking-widest uppercase mb-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    Engenharia & Obras
                  </p>
                  <h4 className="text-white font-black text-xl uppercase tracking-tighter translate-y-2 group-hover:translate-y-0 transition-transform">
                    {proj.nome}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
