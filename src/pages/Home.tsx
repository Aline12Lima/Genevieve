import { useEffect } from "react"; // 1. Adicionado o Hook necessário
import { Hero } from "../components/home/Hero";
import { Perfil } from "../components/home/Perfil";
import { Nichos } from "../components/home/Nichos";
import { GroupWork } from "../components/home/GroupWork";
import { Skills } from "../components/home/Skills";
import { ProjectsGrid } from "../components/home/ProjectsGrid";
import { CTAFlutuanteMobile } from "../components/home/CTAFlutuanteMobile";

export function Home() {
  // 2. Lógica de Scroll (Boas práticas de Engenharia de Software)
  // Esta função "escuta" se alguém clicou no link "Serviços" do Header
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash === "#nichos") {
        const element = document.getElementById("nichos");
        if (element) {
          // Timeout pequeno para garantir que o DOM renderizou
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Executa ao carregar a página
    handleHashScroll();

    // Opcional: Escuta mudanças na hash (caso o usuário clique várias vezes)
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  return (
    <main className="relative">
      <Hero />
      <Perfil />
      <Nichos />
      <ProjectsGrid />
      <Skills />
      <GroupWork />
      <CTAFlutuanteMobile />
    </main>
  );
}
