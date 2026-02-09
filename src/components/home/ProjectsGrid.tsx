import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Imports dos vídeos
import videoRH from "../../assets/video/RH.mp4";
import videoCompany from "../../assets/video/companyConsut.mp4";
import videoAdvocacia from "../../assets/video/advocacia.mp4";
import videoTourism from "../../assets/video/tourism.mp4";
import videoSalon from "../../assets/video/salon.mp4";
import videoDentist from "../../assets/video/dentist.mp4";
import videoRestaurantPasta from "../../assets/video/restaurantPasta.mp4";
import videoRestaurant1 from "../../assets/video/restautant1.mp4";

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  video: string;
  description: string;
  slug: string; // Para futura página individual
}

const projects: Project[] = [
  {
    id: 1,
    title: "RH Solutions",
    category: "Consultoria de Recursos Humanos",
    tags: ["Web", "Branding"],
    video: videoRH,
    description:
      "Plataforma digital moderna para gestão de talentos e recrutamento.",
    slug: "rh-solutions",
  },
  {
    id: 2,
    title: "AGveia Consulting",
    category: "Consultoria Empresarial",
    tags: ["Web", "Corporativo"],
    video: videoCompany,
    description:
      "Website institucional com dashboard de gestão para empresa de consultoria.",
    slug: "agveia-consulting",
  },
  {
    id: 3,
    title: "Advocacia & Direito",
    category: "Escritório de Advocacia",
    tags: ["Web", "Institucional"],
    video: videoAdvocacia,
    description:
      "Portal elegante para escritório de advocacia com área do cliente.",
    slug: "advocacia-direito",
  },
  {
    id: 4,
    title: "Célia Turismo",
    category: "Agência de Viagens",
    tags: ["Web", "E-commerce"],
    video: videoTourism,
    description:
      "Sistema de reservas e catálogo de destinos para agência de turismo.",
    slug: "celia-turismo",
  },
  {
    id: 5,
    title: "Beleza & Estilo",
    category: "Salão de Beleza",
    tags: ["Web", "Agendamento"],
    video: videoSalon,
    description: "Plataforma de agendamento online com galeria de serviços.",
    slug: "beleza-estilo",
  },
  {
    id: 6,
    title: "Odonto Care",
    category: "Clínica Odontológica",
    tags: ["Web", "Saúde"],
    video: videoDentist,
    description:
      "Website médico com sistema de agendamento e prontuário digital.",
    slug: "odonto-care",
  },
  {
    id: 7,
    title: "Pasta Italiana",
    category: "Restaurante",
    tags: ["Web", "Cardápio Digital"],
    video: videoRestaurantPasta,
    description: "Cardápio digital interativo com sistema de pedidos online.",
    slug: "pasta-italiana",
  },
  {
    id: 8,
    title: "Grand Chef",
    category: "Restaurante Fine Dining",
    tags: ["Web", "Reservas"],
    video: videoRestaurant1,
    description: "Experiência digital premium com reservas e menu degustação.",
    slug: "grand-chef",
  },
];

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-16 md:py-0 overflow-hidden scroll-mt-12"
    >
      {/* Header */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-none">
            Nossos Projetos
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Ideias transformadas em{" "}
            <span className="text-[#00a3ff] font-bold">sucessos criativos</span>
          </p>
        </motion.div>
      </div>

      {/* Grid de Projetos */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative block"
    >
      <Link to={`/projeto/${project.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900 border border-white/10 mb-12">
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-4 group-hover:bg-[#00a3ff] group-hover:border-[#23007B] transition-all duration-300">
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">
                {project.category}
              </p>
              <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>

          <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#23007B] transition-all duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}
