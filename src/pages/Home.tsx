import { useEffect, useState } from "react";
import { Hero } from "../components/home/Hero";
import { Perfil } from "../components/home/Perfil";
import { Nichos } from "../components/home/Nichos";
import { Skills } from "../components/home/Skills";
import { ProjectsGrid } from "../components/home/ProjectsGrid";
import { setSEO } from "../lib/seo";
import salleImage from "../../src/assets/salle.png";

export function Home() {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    setSEO(
      "Genevieve | Websites Estratégicos",
      "Criação de websites modernos focados em conversão.",
      salleImage,
    );

    // Aparece sempre 2 segundos após o carregamento
    const timer = setTimeout(() => {
      setShowPromo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashScroll = () => {
      const { hash } = window.location;
      if (!hash) return;

      const targetId = hash.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth" });
        });
      }
    };

    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <main className="relative">
      {/* Pop-up de Promoção */}
      {showPromo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative max-w-sm w-full bg-zinc-900 rounded-xl overflow-hidden shadow-2xl border border-white/10 mt-12 md:mt-40 lg:mt-26">
            {/* Botão Fechar */}
            <button
              onClick={() => setShowPromo(false)}
              className="absolute top-3 right-3 z-10 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all border border-white/20"
            >
              ✕
            </button>

            {/* Imagem */}
            <img
              src={salleImage}
              alt="Promoção Especial"
              className="w-full h-auto block"
            />
          </div>
        </div>
      )}

      <Hero />
      <Perfil />
      <Nichos />
      <ProjectsGrid />
      <Skills />
    </main>
  );
}
