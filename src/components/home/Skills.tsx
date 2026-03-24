import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import fotoAline from "../../assets/dataImagens/build/0.png";

export function Skills() {
  const navigate = useNavigate();

  const testimonials = [
    {
      text: "Amamos o resultado. Conseguimos orçamentos vindos direto do site, o resultado foi incrível.",
      author: "WM Topografia",
      company: "Georreferenciamento",
    },
    {
      text: "O resultado ficou profissional e surpreendente. Passa a confiança exata que nossa engenharia precisa.",
      author: "Eng. Mayara Nunes",
      company: "Planejamento de Obras",
    },
    {
      text: "Hoje o site é nosso principal canal de novos clientes.",
      author: "FFFundações",
      company: "Engenharia de Base",
    },
  ];

  return (
    <section className="py-32 bg-[#F2F2F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-[#00a3ff]/5 rounded-xl blur-2xl group-hover:bg-[#00a3ff]/10 transition-all" />
            <div className="bg-white p-4 shadow-[0_50px_100px_rgba(0,0,0,0.1)] relative z-10">
              <img
                src={fotoAline}
                alt="Aline - Fundadora"
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="pt-6 pb-2">
                <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.3em] mb-1">
                  Fundadora & Tech Lead
                </p>
                <p className="font-black text-black text-2xl uppercase tracking-tighter">
                  Aline Lima
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#00a3ff] font-mono text-[10px] tracking-[0.5em] uppercase mb-6 font-bold">
                Nossa Essência
              </h2>
              <h3 className="text-5xl lg:text-7xl font-black text-black leading-[0.85] tracking-tighter uppercase mb-8">
                A Genevieve nasceu <br /> no{" "}
                <span className="text-[#00a3ff] italic font-light">
                  canteiro.
                </span>
              </h3>
              <p className="text-zinc-600 text-xl leading-relaxed max-w-lg mb-10">
                Antes de criar sites, vivi a rotina real de obras. Hoje,
                transformo essa vivência em ferramentas que geram contratos
                reais.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#00a3ff] transition-all duration-500 shadow-xl"
              >
                Ler nossa história
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-24">
          <h2 className="text-black font-black text-3xl uppercase tracking-tighter mb-16">
            O que os clientes dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 bg-white/50 border border-white rounded-2xl"
              >
                <p className="text-zinc-500 italic text-lg leading-relaxed mb-8">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-black text-black text-[11px] uppercase tracking-widest">
                    {t.author}
                  </h4>
                  <p className="text-[#00a3ff] text-[9px] font-mono uppercase font-bold mt-1">
                    {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
