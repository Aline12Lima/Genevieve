import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projetctDetail";
import { setSEO } from "../lib/seo";

export function Project() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      setSEO(`${project.title} | Genevieve`, project.description);
    }
  }, [project]);

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  if (!project) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-black text-white">
        <h1 className="text-3xl font-bold font-montserrat">
          Projeto não encontrado
        </h1>
      </section>
    );
  }

  return (
    <main className="bg-black text-white font-montserrat py-12">
      {/* SECTION 1: HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center px-6 md:px-20 pt-24 pb-12 gap-10">
        <div className="flex-1 space-y-6">
          <p className="uppercase tracking-[0.2em] text-sm font-bold">
            {project.category}
          </p>

          <h1 className="text-5xl md:text-8xl font-black uppercase leading-none">
            {project.title}
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
            {project.intro}
          </p>

          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-widest font-semibold text-[#00a3ff] hover:text-white transition-colors duration-300"
            >
              Ver projeto online
              <span className="text-lg">→</span>
            </a>
          )}
        </div>

        <div className="flex-1 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <img
            src={project.mainImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 shadow-2xl"
          />
        </div>
      </section>

      {/* SECTION 2: VIDEO */}
      {project.heroVideo && (
        <section className="w-full bg-[#111] py-10">
          <div className="w-full aspect-video md:h-[80vh] overflow-hidden bg-black">
            <video
              src={project.heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-contain"
            />
          </div>
        </section>
      )}

      {/* SECTION 3: TEXTO FINAL */}
      {project.sections?.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-8">
            {project.sections[0].title}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-loose">
            {project.sections[0].text}
          </p>
        </section>
      )}
    </main>
  );
}
