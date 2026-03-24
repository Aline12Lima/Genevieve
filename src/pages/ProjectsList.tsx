import { useEffect } from "react";
import { setSEO } from "../lib/seo";
import { Plus, ExternalLink } from "lucide-react";

// Importações das imagens
import build0 from "../assets/dataImagens/capas/1.png";
import build1 from "../assets/dataImagens/capas/2.png";
import build2 from "../assets/dataImagens/capas/3.png";
import constructor1 from "../assets/dataImagens/capas/4.png";
import constructor2 from "../assets/dataImagens/capas/5.png";
import constructor3 from "../assets/dataImagens/capas/6.png";

const projects = [
  {
    title: "Construtech JB",
    category: "Engenharia",
    image: build0,
    link: "https://jb-construtech.vercel.app/",
  },
  {
    title: "Vini Gesso",
    category: "Gesso & Drywall",
    image: build1,
    link: "https://vini-gesso.vercel.app/",
  },
  {
    title: "Eng.  Mayra",
    category: "Cursos e Consultoria",
    image: build2,
    link: "https://www.engmayra.com.br/",
  },
  {
    title: "WM Topografia",
    category: "Topografia",
    image: constructor1,
    link: "https://wmtopografiaegeo.com.br/",
  },
  {
    title: "FF Fundações",
    category: "Fundações",
    image: constructor2,
    link: "https://fff-xi-orpin.vercel.app/",
  },
  {
    title: "Psi Angela",
    category: "Outros Projetos",
    image: constructor3,
    link: "https://psi-angela.alinelima.dev/",
  },
];

export function ProjectsList() {
  useEffect(() => {
    setSEO(
      "Portfólio | Genevieve",
      "Confira nossos projetos de engenharia e software.",
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#0a0a0b] min-h-screen text-white pt-40 pb-20 px-6 md:px-12">
      <section className="max-w-7xl mx-auto">
        <header className="mb-12">
          <span className="flex items-center gap-2 text-[#00a3ff] font-mono text-[10px] tracking-[0.4em] uppercase font-black">
            <Plus size={12} /> Portfólio
          </span>
          <h1 className="text-5xl md:text-4xl font-black uppercase tracking-tighter leading-none mt-4">
            Nossos{"   "}
            <span className="text-zinc-600 italic font-light">Projetos.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <a
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 p-0 m-0"
            >
              {/* Background Image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="absolute inset-0 w-full h-full object-cover object-[center_top_-80px] opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-transparent from-black via-black/20 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between z-20">
                {/* Topo: textos */}
                <div className="p-8">
                  <span className="text-[10px] font-black tracking-[0.3em] text-[#00a3ff] mb-2 block">
                    {proj.category}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">
                    {proj.title}
                  </h3>
                </div>
                {/* Base: botão centralizado */}
                <div className="flex justify-center pb-8">
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white text-black w-fit px-4 py-2 rounded-full group-hover:bg-[#00a3ff] group-hover:text-white transition-colors">
                    Ver Projeto <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
