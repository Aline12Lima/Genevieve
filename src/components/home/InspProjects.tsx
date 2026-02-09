import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "OralCare Studio",
    category: "Saúde & Estética",
    video: "/videos/dentista-preview.mp4",
    link: "#", // Futura página do projeto
  },
  {
    id: 2,
    title: "SalonX Experience",
    category: "Beleza & Lifestyle",
    video: "/videos/salon-preview.mp4",
    link: "#",
  },
  {
    id: 3,
    title: "Corporate Hub",
    category: "Administrativo",
    video: "/videos/admin-preview.mp4",
    link: "#",
  },
  {
    id: 4,
    title: "Gastro Gourmet",
    category: "Gastronomia",
    video: "/videos/restaurante-preview.mp4",
    link: "#",
  },
];

export function InspProjects() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 bg-[#F2F2F2] ">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">
              Portfólio
            </span>
            <h2 className="font-beauty text-white text-5xl md:text-[4vw] leading-none tracking-tighter mt-4">
              Projetos{" "}
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                Selecionados
              </span>
            </h2>
          </div>
          <p className="hidden md:block text-white/40 text-xs uppercase tracking-widest max-w-[200px] text-right">
            Foco em performance técnica e estética editorial.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="group block relative"
            >
              {/* Container do Vídeo/Imagem */}
              <div className="relative aspect-[16/10] md:aspect-square lg:aspect-[16/10] overflow-hidden rounded-2xl bg-[#121212]">
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay de Categoria (Aparece no Hover) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-[0.3em] border border-white/20 px-6 py-3 rounded-full backdrop-blur-md">
                    Ver Detalhes
                  </span>
                </div>
              </div>

              {/* Info do Projeto */}
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em] mt-2">
                    {project.category}
                  </p>
                </div>
                <div className="text-white/20 group-hover:text-white transition-colors duration-500">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
