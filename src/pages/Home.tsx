import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { Hero } from "../components/home/Hero";
import { Perfil } from "../components/home/Perfil";
import { Nichos } from "../components/home/Nichos";
import { Skills } from "../components/home/Skills";
import { ProjectsGrid } from "../components/home/ProjectsGrid";

export function Home() {
  // const [showPromo, setShowPromo] = useState(false);

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
    <>
      <Helmet>
        <title>Genevieve | Criação de Landing Pages de Alta Conversão </title>
        <meta
          name="description"
          content="Desenvolvemos Landing Pages profissionais e sites estratégicos para empresas de engenharia, saúde e advocacia. Transforme visitantes em clientes com design moderno"
        />
      </Helmet>

      <main className="relative">
        <Hero />
        <Perfil />
        <Nichos />
        <ProjectsGrid />
        <Skills />
      </main>
    </>
  );
}
