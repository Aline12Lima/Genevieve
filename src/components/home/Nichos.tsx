import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HardHat, MapPin, LayoutGrid } from "lucide-react";

import service1 from "../../assets/servicos/sites.png";
import service2 from "../../assets/servicos/bucharest-romania-july-30th-2024-young-man-clicks-facebook-page-bookmark.jpg"; // Usei um placeholder pois o link anterior era longo

import service6 from "../../assets/servicos/closeup-hands-using-computer-laptop-with-screen-showing-analysis-data.jpg";

export function Nichos() {
  const navigate = useNavigate();

  const servicos = [
    {
      id: 1,
      title: "Sites que geram clientes",
      sub: "Presença Digital",
      desc: "Criamos sites que transformam visitantes em pedidos de orçamento e novos contratos.",
      icon: <HardHat className="w-5 h-5" />,
      img: service1,
    },
    {
      id: 2,
      title: "Apareça no Google",
      sub: "SEO & Google Maps",
      desc: "Seja encontrado por quem já está procurando serviços de obras na sua região.",
      icon: <MapPin className="w-5 h-5" />,
      img: service2,
    },

    {
      id: 6,
      title: "Planilhas Automaticas",
      sub: "Orçamentos & Dados",
      desc: "Formulários que preenchem planilhas automaticamente, organizando orçamentos.",
      icon: <LayoutGrid className="w-5 h-5" />,
      img: service6,
    },
  ];

  return (
    <section className="bg-white py-24 px-4 md:px-8" id="nichos">
      <div className="max-w-7xl mx-auto">
        {/* Header da Seção */}
        <div className="text-center mb-20">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00a3ff] uppercase tracking-[0.4em] text-[10px] font-bold mb-4"
          >
            Soluções para empresas de obras
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9]"
          >
            Sua empresa precisa de mais clientes? <br />
            <span className="text-[#ca9f1b] font-light italic">
              Nosso trabalho é trazer eles.
            </span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="bg-[#c7d9eb] flex flex-col h-full group transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 hover:border-[#00a3ff]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]"
            >
              {/* Imagem */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay sutil para melhorar leitura do ícone */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />

                <div className="absolute top-5 right-5 bg-white p-3 text-[#00a3ff] shadow-lg rounded-lg z-10 transition-transform group-hover:scale-110">
                  {s.icon}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-8 flex flex-col flex-grow">
                <span
                  className={
                    "text-[10px] font-mono uppercase tracking-widest mb-2 font-bold group-hover:text-[#00a3ff] transition-colors " +
                    (s.sub === "Orçamentos & Dados"
                      ? "text-zinc-700"
                      : "text-zinc-400")
                  }
                >
                  {s.sub}
                </span>
                <h4 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
                  {s.title}
                </h4>
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-sm">
                  {s.desc}
                </p>

                <button
                  onClick={() => navigate("/servicos")}
                  className="inline-flex items-center justify-center bg-white text-black border border-gray-200 font-bold py-4 px-8 w-full text-[10px] uppercase tracking-widest hover:bg-black hover:text-white hover:border-black transition-all duration-300 rounded-lg"
                >
                  Saber mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
