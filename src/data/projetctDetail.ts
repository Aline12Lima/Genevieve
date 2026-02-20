import imgRH from "../assets/images2/RH.png";
import imgCompany from "../assets/images2/Agevia.png";
import imgTerra from "../assets/images/maquina_escavadeira.jpg";
import imgArquitetura from "../assets/images/estrututa_metalica.jpg";
import imgPisos from "../assets/images/engenheiros.jpg";
import imgEngenharia from "../assets/images/caminhao_agregados.jpg";
import imgPerfil from "../assets/images/female-engineer-with-white-helmet-holding-project-plan-looks-happy.jpg";
import imgServico from "../assets/images2/Countour.png";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;

  video: string;
  mainImage: string;
  projectUrl: string;

  intro: string;
  heroVideo: string;
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
    slug: "rh-solutions",
    title: "RH Consultoria",
    mainImage: imgRH,
    category: "Consultoria de Recursos Humanos",
    tags: ["Web", "Construtoras"],
    description:
      "Plataforma digital moderna para gestão de talentos e recrutamento.",
    video: "https://www.youtube.com/embed/1rReOJFf0P8",
    heroVideo: "https://www.youtube.com/embed/1rReOJFf0P8",
    projectUrl: "https://acuvic-template.webflow.io/",
    intro: "Soluções digitais focadas em pessoas e performance.",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Texto aqui..."
      }
    ]
  },

  {
    id: 2,
    slug: "agevia-consulting",
    title: "AGevia Consultoria",
    mainImage: imgCompany,
    category: "Consultoria Empresarial",
    tags: ["Web", "RH"],
    description:
      "Website institucional com dashboard de gestão para empresa de consultoria.",
    video: "https://www.youtube.com/embed/my3AEb_ELT4",
    heroVideo: "https://www.youtube.com/embed/my3AEb_ELT4",
    projectUrl: "https://agevia.framer.website/about",
    intro: "Clareza estratégica aplicada ao digital.",
    sections: [
      {
        id: "layout",
        title: "Layout Corporativo",
        text: "O projeto Consultoria Administrativa Agevia foca em clareza, profissionalismo e conversão..."
      }
    ]
  },

  {
    id: 3,
    slug: "arquitetura",
    title: "Arket",
    mainImage: imgTerra,
    category: "Escritório de Arquitetura",
    tags: ["Web", "Engenharia"],
    description: "Página criativa e minimalista.",
    video: "https://www.youtube.com/embed/OiwT4qXcQos",
    heroVideo: "https://www.youtube.com/embed/OiwT4qXcQos",
    projectUrl: "https://arket.webflow.io/",
    intro: "Criatividade e confiança no ambiente. Confira o video apresentativo do site:",
    sections: [
      {
        id: "layout",
        title: "Layout Moderno",
        text: "Projeto desenvolvido para reforçar credibilidade e confiança..."
      }
    ]
  },

  {
    id: 4,
    slug: "construcao-predios",
    title: "Buildbes",
    mainImage: imgArquitetura,
    category: "Serviços de Mão de Obra",
    tags: ["Web", "Serviços"],
    description: "Página para uma construtora empreiteira.",
    video: "https://www.youtube.com/embed/WwEswdBl1Dc",
    heroVideo: "https://www.youtube.com/embed/WwEswdBl1Dc",
    projectUrl: "https://buildbes.webflow.io/home/home-two",
    intro: "Experiência digital para grandes construções. Confira abaixo o video do site ou clique no link:",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Website desenvolvido para transformar visitas em novos contratos..."
      }
    ]
  },

  {
    id: 5,
    slug: "Serviços",
    title: "Empreiteira - Drenagem",
    mainImage: imgPisos,
    category: "Serviços",
    tags: ["Web", "Empreiteira"],
    description: "Seus serviços precisam ser vistos. ",
    video: "https://www.youtube.com/embed/WwEswdBl1Dc",
    heroVideo: "https://www.youtube.com/embed/WwEswdBl1Dc",
    projectUrl: "https://www.danieljamesdrainage.com/",
    intro: "Seja notado por novos clientes, não esconda sua empresa. Confira abaixo o video do site ou clique no link:",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Website desenvolvido para valorizar a marca e aumentar conversões."
      }
    ]
  },

  {
    id: 6,
    slug: "Terraplanagem",
    title: "Terraplanagem",
    mainImage: imgEngenharia,
    category: "Serviços",
    tags: ["Web", "Terraplanagem"],
    description:
      "Website médico com sistema de agendamento e prontuário digital.",
    video: "https://www.youtube.com/embed/vr3itvrkLtw",
    heroVideo: "https://www.youtube.com/embed/WwEswdBl1Dc",
    projectUrl: "https://dentista-template.webflow.io/",
    intro: "Tecnologia aplicada à empresas.Confira abaixo o video do site ou clique no link:",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Website focado em confiança, clareza e conversão."
      }
    ]
  },

  {
    id: 7,
    slug: "Portfólio",
    title: "Portfólio",
    mainImage: imgPerfil,
    category: "Perfil Profissional ",
    tags: ["Web", "Portfolio"],
    description: "Apresente seus serviços de forma profissional.",
    video: "https://www.youtube.com/embed/DdAnSEaaVd0",
    heroVideo: "https://www.youtube.com/embed/WwEswdBl1Dc",
    projectUrl: "https://artigiano-pasta.webflow.io/products",
    intro: "Experiência gastronômica desde o primeiro clique. Confira abaixo o video do site ou clique no link:",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Website que transforma sabor em desejo e visitas em reservas."
      }
    ]
  },

  {
    id: 8,
    slug: "Engenharia",
    title: "Contour",
    mainImage: imgServico,
    category: "Construção Civil",
    tags: ["Web", "Institucional"],
    description: "Website premium para empresa de engenharia.",
    video: "https://www.youtube.com/embed/1rReOJFf0P8",
    heroVideo: "https://www.youtube.com/embed/1rReOJFf0P8",
    projectUrl: "https://noema-128.webflow.io/home-2",
    intro: "Autoridade e excelência traduzidas em design.Confira abaixo o video do site ou clique no link:",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Presença digital sofisticada para posicionamento premium."
      }
    ]
  }
];
