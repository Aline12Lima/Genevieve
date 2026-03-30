import { motion } from "framer-motion";
import { Plus, ArrowUpRight, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import image from "../assets/PROMO/symary.jpg";

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  },
};

const posts = [
  {
    id: 4,
    category: "Social Media",
    title:
      "O Novo Padrão de Consumo: Por que o Instagram é a sua Vitrine de Ouro no Brasil",
    date: "24 Mar, 2026",
    author: "Juliane Lima",
    readTime: "5 min",
    image: image,
    content: `No cenário atual do mercado brasileiro...`,
  },
  // ... outros posts permanecem iguais
];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<(typeof posts)[0] | null>(
    null,
  );

  useEffect(() => {
    document.body.style.overflow = selectedPost ? "hidden" : "unset";
  }, [selectedPost]);

  return (
    <div className="bg-slate-50 text-slate-900 selection:bg-[#00a3ff] selection:text-white font-sans overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-20 bg-black z-[999] border-b border-white/5" />

      {/* ===================== HEADER HERO ===================== */}
      <section className="relative pt-48 pb-20 px-6 md:px-12 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto text-left">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="flex items-center gap-2 text-[#00a3ff] font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              <Plus size={12} /> Insights & Estratégia
            </span>
            <h1 className="text-[12vw] md:text-[8vw] font-bold leading-[0.85] tracking-tighter uppercase text-slate-950">
              Ideias que <br />
              Geram{" "}
              <span className="text-[#00a3ff] font-beauty lowercase font-light">
                Valor
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ===================== GRID DE ARTIGOS ===================== */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-left">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative overflow-hidden rounded-[2rem] mb-8 bg-slate-200 aspect-[4/5]">
                  <img
                    src={post.image}
                    loading="lazy"
                    alt={post.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white text-slate-950 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 shadow-xl">
                    <ArrowUpRight size={24} />
                  </div>
                  {post.id === 3 && (
                    <div className="absolute bottom-6 left-6 bg-[#00a3ff] text-white p-2 rounded-lg opacity-80 group-hover:opacity-100 transition-opacity">
                      <Instagram size={20} />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#00a3ff] text-[10px] font-black uppercase tracking-[0.2em]">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold tracking-tight uppercase leading-[1.2] group-hover:text-[#00a3ff] transition-colors">
                    {post.title}
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
