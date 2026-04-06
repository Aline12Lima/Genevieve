// Importações das imagens
import build0 from "../assets/dataImagens/capas/1.png";
import build1 from "../assets/dataImagens/capas/2.png";
import build2 from "../assets/dataImagens/capas/3.png";
import constructor1 from "../assets/dataImagens/capas/4.png";
import constructor2 from "../assets/dataImagens/capas/5.png";
import constructor3 from "../assets/dataImagens/capas/6.png";

export type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Site Construtora JB",
    category: "Engenharia",
    image: build0,
    link: "https://jb-construtech.vercel.app/",
  },
  {
    title: "Portfólio Empreiteira de  Gesso",
    category: "Gesso & Drywall",
    image: build1,
    link: "https://vini-gesso.vercel.app/",
  },
  {
    title: " Site para Engenheira",
    category: "Cursos e Consultoria",
    image: build2,
    link: "https://www.engmayra.com.br/",
  },
  {
    title: "Site para Empresa de  Topografia",
    category: "Topografia",
    image: constructor1,
    link: "https://wmtopografiaegeo.com.br/",
  },
  {
    title: " Site para Empresa de Fundações",
    category: "Fundações",
    image: constructor2,
    link: "https://fff-xi-orpin.vercel.app/",
  },
  {
    title: "Site para Psicóloga",
    category: "Outros Projetos",
    image: constructor3,
    link: "https://psi-angela.alinelima.dev/",
  },
];
