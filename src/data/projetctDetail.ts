import imgRH from "../assets/images2/RH.png";
import imgCompany from "../assets/images2/Agevia.png";
import imgAdvocacia from "../assets/images2/arket.png";
import imgTourism from "../assets/images2/builds.png";
import imgSalon from "../assets/images2/Avlon.png";
import imgDentist from "../assets/images2/Dentist.png";
import imgPasta from "../assets/images2/Argiliano.png";
import imgRestaurant1 from "../assets/images2/Countour.png";

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
    tags: ["Web", "Branding"],
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
    tags: ["Web", "Corporativo"],
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
    mainImage: imgAdvocacia,
    category: "Escritório de Arquitetura",
    tags: ["Web", "Institucional"],
    description: "Página criativa e minimalista.",
    video: "https://www.youtube.com/embed/OiwT4qXcQos",
    heroVideo: "https://www.youtube.com/embed/OiwT4qXcQos",
    projectUrl: "https://arket.webflow.io/",
    intro: "Criatividade e confiança no ambiente.",
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
    mainImage: imgTourism,
    category: "Serviços de Mão de Obra",
    tags: ["Web", "Serviços"],
    description: "Página para uma construtora empreiteira.",
    video: "https://www.youtube.com/embed/WwEswdBl1Dc",
    heroVideo: "https://www.youtube.com/embed/WwEswdBl1Dc",
    projectUrl: "https://buildbes.webflow.io/home/home-two",
    intro: "Experiência digital para grandes construções.",
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
    slug: "beleza-estilo",
    title: "Beleza & Estilo",
    mainImage: imgSalon,
    category: "Salão de Beleza",
    tags: ["Web", "Agendamento"],
    description: "Plataforma de agendamento online com galeria de serviços.",
    video: "https://www.youtube.com/embed/f7ZtOrPtfrE",
    heroVideo: "https://www.youtube.com/embed/f7ZtOrPtfrE",
    projectUrl: "https://avlon.webflow.io/home-two",
    intro: "Estética, performance e conversão.",
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
    slug: "odonto-care",
    title: "Odonto Care",
    mainImage: imgDentist,
    category: "Clínica Odontológica",
    tags: ["Web", "Saúde"],
    description:
      "Website médico com sistema de agendamento e prontuário digital.",
    video: "https://www.youtube.com/embed/vr3itvrkLtw",
    heroVideo: "https://www.youtube.com/embed/vr3itvrkLtw",
    projectUrl: "https://dentista-template.webflow.io/",
    intro: "Tecnologia aplicada à saúde.",
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
    slug: "pasta-italiana",
    title: "Pasta Italiana",
    mainImage: imgPasta,
    category: "Restaurante",
    tags: ["Web", "Cardápio Digital"],
    description: "Cardápio digital interativo com sistema de pedidos online.",
    video: "https://www.youtube.com/embed/DdAnSEaaVd0",
    heroVideo: "https://www.youtube.com/embed/DdAnSEaaVd0",
    projectUrl: "https://artigiano-pasta.webflow.io/products",
    intro: "Experiência gastronômica desde o primeiro clique.",
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
    slug: "engenharia",
    title: "Contour",
    mainImage: imgRestaurant1,
    category: "Construção Civil",
    tags: ["Web", "Institucional"],
    description: "Website premium para empresa de engenharia.",
    video: "https://www.youtube.com/embed/1rReOJFf0P8",
    heroVideo: "https://www.youtube.com/embed/1rReOJFf0P8",
    projectUrl: "https://contour-128.webflow.io/",
    intro: "Autoridade e excelência traduzidas em design.",
    sections: [
      {
        id: "overview",
        title: "Descrição",
        text: "Presença digital sofisticada para posicionamento premium."
      }
    ]
  }
];
