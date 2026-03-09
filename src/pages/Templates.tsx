import { useParams, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { projects } from "../data/projetctDetail";
import { setSEO } from "../lib/seo";

export function Project() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (!project) return;
    setCurrentIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    if (!project) return;
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  useEffect(() => {
    if (project) {
      setSEO(`${project.title} | Genevieve`, project.description);
    }
  }, [project]);

  useEffect(() => {
    if (!project || project.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % project.images.length);
    }, 3000);

    return () => clearInterval(timer);
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
      <section className="min-h-screen px-6 md:px-20 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-6 text-center">
            <p className="uppercase tracking-[0.2em] text-sm font-bold">
              {project.category}
            </p>

            <h1 className="text-5xl md:text-8xl font-black uppercase leading-none">
              {project.title}
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              {project.intro}
            </p>
          </div>

          <div className="w-full max-w-4xl mx-auto h-[300px] md:h-[420px] rounded-2xl overflow-hidden relative bg-[#111]">
            {project.images.map((image, index) => (
              <img
                key={`${project.slug}-${index}`}
                src={image}
                alt={`${project.title} ${index + 1}`}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Imagem anterior"
                  onClick={goToPrevious}
                  className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/30 transition"
                >
                  ←
                </button>

                <button
                  type="button"
                  aria-label="Próxima imagem"
                  onClick={goToNext}
                  className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/30 transition"
                >
                  →
                </button>
              </>
            )}

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {project.images.map((_, index) => (
                <span
                  key={`${project.slug}-dot-${index}`}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "w-5 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
