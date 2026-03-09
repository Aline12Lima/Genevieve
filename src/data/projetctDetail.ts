import build0 from "../assets/dataImagens/build/0.png";
import build1 from "../assets/dataImagens/build/1.png";
import build2 from "../assets/dataImagens/build/2.png";

import constructor1 from "../assets/dataImagens/constructor/1.png";
import constructor2 from "../assets/dataImagens/constructor/2.png";
import constructor3 from "../assets/dataImagens/constructor/3.png";
import constructor4 from "../assets/dataImagens/constructor/4.png";

import construtora1 from "../assets/dataImagens/construtora/1.png";
import construtora2 from "../assets/dataImagens/construtora/2.png";
import construtora3 from "../assets/dataImagens/construtora/Captura de tela de 2026-03-07 19-15-23.png";
import construtora4 from "../assets/dataImagens/construtora/Captura de tela de 2026-03-07 19-15-54.png";

import interiores0 from "../assets/dataImagens/interiores/0.png";
import interiores2 from "../assets/dataImagens/interiores/2.png";
import interiores3 from "../assets/dataImagens/interiores/3.png";

import limpeza0 from "../assets/dataImagens/limpeza/0.png";
import limpeza1 from "../assets/dataImagens/limpeza/1.png";
import limpeza2 from "../assets/dataImagens/limpeza/2.png";
import limpeza3 from "../assets/dataImagens/limpeza/3.png";
import limpeza4 from "../assets/dataImagens/limpeza/4.png";

import rh0 from "../assets/dataImagens/RH/0.png";
import rh1 from "../assets/dataImagens/RH/1.png";
import rh2 from "../assets/dataImagens/RH/2.png";
import rh3 from "../assets/dataImagens/RH/3.png";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  mainImage: string;
  images: string[];

  intro: string;
  sections: {
    id: string;
    title: string;
    text: string;
    images?: string[];
  }[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "empreiteira-build",
    title: "Construções",
    mainImage: build2,
    images: [build0, build1, build2],
    category: "Empreiteira",
    tags: ["Web", "Construtoras"],
    description: "Website para apresentação de serviços da construtora Build.",
    intro: "Presença digital para gerar autoridade e novos contratos.",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Template de site desenvolvido para construtora empreiteira, focado em apresentar serviços, projetos e gerar novos contratos. O design é moderno e profissional, transmitindo confiança e credibilidade para o público-alvo do setor de construção civil.",
      },
    ],
  },

  {
    id: 2,
    slug: "Construtora",
    title: "Constructor - Construtora",
    mainImage: constructor4,
    images: [constructor1, constructor2, constructor3, constructor4],
    category: "Consultoria Empresarial",
    tags: ["Web", "Obras"],
    description: "Website institucional com dashboard de uma construtora",
    intro: "Clareza estratégica aplicada ao digital.",
    sections: [
      {
        id: "layout",
        title: "Layout Corporativo",
        text: "O projeto Consultoria Administrativa Agevia foca em clareza, profissionalismo e conversão...",
      },
    ],
  },

  {
    id: 3,
    slug: "ConSted",
    title: "ConSted - Empreiteira de Serviços",
    mainImage: construtora2,
    images: [construtora1, construtora2, construtora3, construtora4],
    category: "Construtora",
    tags: ["Web", "Empreiteiras"],
    description:
      "Página institucional para empreiteira de serviços, com foco em construção civil.",
    intro: "Criatividade e confiança aplicadas ao ambiente digital.",
    sections: [
      {
        id: "layout",
        title: "Layout Moderno",
        text: "Projeto desenvolvido para reforçar credibilidade e confiança...",
      },
    ],
  },

  {
    id: 4,
    slug: "Interiores",
    title: "Interiores - Serviços de Decoração",
    mainImage: interiores0,
    images: [interiores0, interiores2, interiores3],
    category: "Arquitetura",
    tags: ["Web", "Arquitetura"],
    description:
      "Website para empresa de decoração de interiores, focado em apresentar portfólio e atrair novos clientes.",
    intro: "Experiência digital para grandes construções.",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Website desenvolvido para transformar visitas em novos contratos...",
      },
    ],
  },

  {
    id: 5,
    slug: "Limpeza",
    title: "Cleaning Point",
    mainImage: limpeza4,
    images: [limpeza0, limpeza1, limpeza2, limpeza3],
    category: "Serviços de Limpeza",
    tags: ["Web", "Empreiteira"],
    description: "Seus serviços precisam ser vistos. ",
    intro: "Seja notado por novos clientes, sem esconder sua empresa.",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Website desenvolvido para valorizar a marca e aumentar conversões.",
      },
    ],
  },

  {
    id: 6,
    slug: "Consultoria",
    title: "RH Acuvic",
    mainImage: rh0,
    images: [rh0, rh1, rh2, rh3],
    category: "Serviços",
    tags: ["Web", "RH Obras"],
    description:
      "Website para consultoria de RH especializada em construção civil, focado em apresentar serviços e gerar novos contratos.",
    intro: "Tecnologia aplicada à sua empresa de serviços.",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Website focado em confiança, clareza e conversão.",
      },
    ],
  },
];
