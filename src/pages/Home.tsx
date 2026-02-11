import { useEffect } from "react";
import { Hero } from "../components/home/Hero";
import { Perfil } from "../components/home/Perfil";
import { Nichos } from "../components/home/Nichos";
import { Skills } from "../components/home/Skills";
import { ProjectsGrid } from "../components/home/ProjectsGrid";
import { setSEO } from "../lib/seo";

export function Home() {
  useEffect(() => {
    setSEO(
      "Genevieve | Websites Estratégicos",
      "Criação de websites modernos focados em conversão.",
      "https://genevieve.com.br/og-image.jpg",
    );
  }, []);
  useEffect(() => {
    // Proteção para ambientes sem window (SSR / prerender)

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

    // Executa ao carregar a página
    handleHashScroll();

    // Escuta mudanças na hash
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);

  return (
    <main className="relative">
      <Hero />
      <Perfil />
      <Nichos />
      <ProjectsGrid />
      <Skills />
    </main>
  );
}
