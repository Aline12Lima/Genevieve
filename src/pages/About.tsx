import { motion, type Variants } from "framer-motion";
import {
  Plus,
  ShieldCheck,
  Heart,
  Star,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

// Imports de Imagens
import fotoAline from "../assets/images/Aline.jpg";
import imgDesign from "../assets/images/habilidades.jpg";
import imgDev from "../assets/images/Aline.jpg";
import imgAdmin from "../assets/images/ju.png";
import imgLucas from "../assets/images/Jeff.jpg";

// CORREÇÃO AQUI: O objeto Variants contém APENAS os estados
const fadeInUpVariants: Variants = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
};

// CORREÇÃO AQUI: Criamos um objeto de props para espalhar no componente
const fadeInUpProps = {
  variants: fadeInUpVariants,
  initial: "initial",
  whileInView: "whileInView",
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" as any }, // 'as any' para garantir o build
};

export function About() {
  const pilares = [
    { title: "Dedicação", icon: <Star className="w-5 h-5" /> },
    { title: "Família", icon: <Heart className="w-5 h-5" /> },
    { title: "Honestidade", icon: <ShieldCheck className="w-5 h-5" /> },
    { title: "Respeito", icon: <Users className="w-5 h-5" /> },
    { title: "Qualidade", icon: <Award className="w-5 h-5" /> },
    { title: "Resultado", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const time = [
    { name: "Lucas", role: "Design & UX", image: imgDesign },
    { name: "Juliane", role: "Gestão & Processos", image: imgAdmin },
    { name: "Aline", role: "Desenvolvimento ", image: imgDev },
    { name: "Jefferson", role: "Automação & IA", image: imgLucas },
  ];

  return (
    <div className="bg-[#0a0a0b] text-white selection:bg-[#00a3ff] font-sans">
      {/* 1. HERO & PILARES */}
      <section className="pt-44 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* USANDO OS PROPS CORRIGIDOS */}
          <motion.div
            {...fadeInUpProps}
            className="mb-20 text-center lg:text-left"
          >
            <span className="flex items-center justify-center lg:justify-start gap-2 text-[#00a3ff] font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
              <Plus size={12} /> Nossos Valores
            </span>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Construídos sobre <br />
              <span className="text-gray-600 italic font-light">
                fundações sólidas.
              </span>
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {pilares.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center gap-4 hover:bg-[#00a3ff] hover:border-[#00a3ff] transition-all duration-500 group"
                >
                  <div className="text-[#00a3ff] group-hover:text-white transition-colors">
                    {p.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-white">
                    {p.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. A FUNDADORA */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUpProps} className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#00a3ff]/10 rounded-full blur-3xl" />
              <img
                src={fotoAline}
                alt="Aline Lima"
                className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-8 left-8 z-20 bg-black text-white p-6 rounded-2xl">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#00a3ff] mb-1">
                  Fundadora
                </p>
                <p className="font-black text-2xl uppercase tracking-tighter">
                  Aline Lima
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUpProps}
              transition={{ ...fadeInUpProps.transition, delay: 0.2 } as any}
            >
              <h2 className="text-[#00a3ff] font-mono text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">
                A História
              </h2>
              <h3 className="text-4xl md:text-3xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                A Genevieve nasceu no canteiro de obras <br />
                <span className="text-[#df731b] italic font-light">
                  e evoluiu para o Software.
                </span>
              </h3>

              <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                <p>
                  Antes de criar sites, vivi a rotina real: medições,
                  organização de projetos e a pressão por resultados dentro de
                  obras.
                </p>
                <p>
                  Foi ali que entendi um problema claro: muitas empresas
                  excelentes perdem oportunidades todos os dias por não terem
                  uma presença digital estratégica.
                </p>
                <p>
                  Hoje, transformo essa experiência em soluções digitais que
                  ajudam empresas de obras a serem encontradas, gerar contatos e
                  fechar mais contratos.
                </p>
                <p className="font-bold text-black italic">
                  Não crio apenas sites. Construo presença, posicionamento e
                  resultado.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. O TIME */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <motion.h2
              {...fadeInUpProps}
              className="text-[#00a3ff] font-mono text-[10px] tracking-[0.5em] uppercase mb-4 font-bold"
            >
              Expertise Técnica
            </motion.h2>
            <motion.h3
              {...fadeInUpProps}
              transition={{ ...fadeInUpProps.transition, delay: 0.1 } as any}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
            >
              Nosso Time
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {time.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeInUpProps}
                transition={
                  { ...fadeInUpProps.transition, delay: i * 0.1 } as any
                }
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] bg-zinc-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-center lg:text-left px-2">
                  <p className="text-[#00a3ff] text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    {member.role}
                  </p>
                  <h4 className="text-2xl font-bold tracking-tight uppercase text-white">
                    {member.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
