import { motion } from "framer-motion";

// Tipagem para os projetos (Boa prática de Eng. de Software)
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MELATY",
    category: "Psicologia Clínica",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070",
    year: "2026",
  },
  {
    id: 2,
    title: "ORAL CARE",
    category: "Odontologia Premium",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070",
    year: "2026",
  },
  {
    id: 3,
    title: "CONSTRUCTION",
    category: "Engenharia Civil",
    image:
      "https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070",
    year: "2026",
  },
  {
    id: 4,
    title: "BEAUTY SALON",
    category: "Estética Avançada",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2070",
    year: "2026",
  },
];

export function Projects() {
  return (
    <div className="bg-black pt-40 pb-20 px-6 md:px-12 selection:bg-white selection:text-black">
      {/* HEADER DA PÁGINA */}
      <section className="max-w-[1440px] mx-auto mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase"
          >
            SELECTED <br />
            <span
              style={{ WebkitTextStroke: "1px white" }}
              className="text-transparent"
            >
              WORKS
            </span>
          </motion.h1>

          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
            [ 2024 — 2026 ]
          </p>
        </div>
      </section>

      {/* GRID DE PROJETOS */}
      <section className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index % 2) * 0.2 }}
            // Adiciona margem superior em colunas alternadas para o efeito assimétrico
            className={`group cursor-pointer ${index % 2 !== 0 ? "md:mt-32" : ""}`}
          >
            {/* CONTAINER DA IMAGEM */}
            <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* INFO DO PROJETO */}
            <div className="mt-8 flex justify-between items-start border-t border-white/10 pt-6">
              <div>
                <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">
                  {project.title}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                  {project.category}
                </p>
              </div>
              <span className="text-[10px] font-bold text-gray-600">
                {project.year}
              </span>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
