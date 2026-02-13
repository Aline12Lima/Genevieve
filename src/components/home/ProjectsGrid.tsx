import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "../../data/projetctDetail";
import type { Project } from "../../data/projetctDetail";

// ✅ Forma correta de animar Link
const MotionLink = motion(Link);

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
          <h2 className="text-4xl md:text-5xl lg:text-8xl xl:text-6xl font-black uppercase leading-none">
            Templates de Sites <br /> e Landing Pages
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Ideias transformadas em{" "}
            <span className="text-[var(--color-blue)] font-bold">
              sucessos criativos
            </span>
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={`${project.id}-${project.slug}`}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionLink
      to={`/projeto/${project.slug}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900 border border-white/10 mb-12">
        {/* Imagem */}
        <img
          src={project.mainImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        <div className="absolute inset-0 p-6 flex flex-col justify-between">
          {/* Tags */}
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

          {/* Conteúdo */}
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/30 rounded-full mb-4 group-hover:bg-[#00a3ff] group-hover:border-[#23007B] transition-all duration-300">
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-white" />
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

        {/* Ring hover */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-transparent group-hover:ring-[#23007B] transition-all duration-300" />
      </div>
    </MotionLink>
  );
}
