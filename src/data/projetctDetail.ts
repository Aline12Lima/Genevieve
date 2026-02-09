// src/data/projects/projectDetails.ts

// vídeos
import videoRH from "../assets/video/1.mp4";
import videoCompany from "../assets/video/RH.mp4";
import videoAdvocacia from "../assets/video/advocacia.mp4";
import videoTourism from "../assets/video/clinic.mp4";
import videoSalon from "../assets/video/companyConsut.mp4";
import videoDentist from "../assets/video/dentist.mp4";
import videoRestaurantPasta from "../assets/video/gym.mp4";
import videoRestaurant1 from "../assets/video/restaurantPasta.mp4";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;

  // grid
  video: string;

  // detail page
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
    title: "RH Solutions",
    category: "Consultoria de Recursos Humanos",
    tags: ["Web", "Branding"],
    description:
      "Plataforma digital moderna para gestão de talentos e recrutamento.",
    video: videoRH,
    intro: "Soluções digitais focadas em pessoas e performance.",
    heroVideo: videoRH,
    sections: [
      {
        id: "overview",
        title: "Visão Geral",
        text: "Sistema completo para gestão de talentos.",
      },
    ],
  },

  {
    id: 2,
    slug: "agveia-consulting",
    title: "AGveia Consulting",
    category: "Consultoria Empresarial",
    tags: ["Web", "Corporativo"],
    description:
      "Website institucional com dashboard de gestão para empresa de consultoria.",
    video: videoCompany,
    intro: "Clareza estratégica aplicada ao digital.",
    heroVideo: videoCompany,
    sections: [
      {
        id: "layout",
        title: "Layout Corporativo",
        text: "Design focado em tomada de decisão.",
      },
    ],
  },

  {
    id: 3,
    slug: "advocacia-direito",
    title: "Advocacia & Direito",
    category: "Escritório de Advocacia",
    tags: ["Web", "Institucional"],
    description:
      "Portal elegante para escritório de advocacia com área do cliente.",
    video: videoAdvocacia,
    intro: "Autoridade e confiança no ambiente digital.",
    heroVideo: videoAdvocacia,
    sections: [],
  },

  {
    id: 4,
    slug: "celia-turismo",
    title: "Célia Turismo",
    category: "Agência de Viagens",
    tags: ["Web", "E-commerce"],
    description:
      "Sistema de reservas e catálogo de destinos para agência de turismo.",
    video: videoTourism,
    intro: "Experiência digital para destinos inesquecíveis.",
    heroVideo: videoTourism,
    sections: [],
  },

  {
    id: 5,
    slug: "beleza-estilo",
    title: "Beleza & Estilo",
    category: "Salão de Beleza",
    tags: ["Web", "Agendamento"],
    description: "Plataforma de agendamento online com galeria de serviços.",
    video: videoSalon,
    intro: "Estética, performance e conversão.",
    heroVideo: videoSalon,
    sections: [],
  },

  {
    id: 6,
    slug: "odonto-care",
    title: "Odonto Care",
    category: "Clínica Odontológica",
    tags: ["Web", "Saúde"],
    description:
      "Website médico com sistema de agendamento e prontuário digital.",
    video: videoDentist,
    intro: "Tecnologia aplicada à saúde.",
    heroVideo: videoDentist,
    sections: [],
  },

  {
    id: 7,
    slug: "pasta-italiana",
    title: "Pasta Italiana",
    category: "Restaurante",
    tags: ["Web", "Cardápio Digital"],
    description: "Cardápio digital interativo com sistema de pedidos online.",
    video: videoRestaurantPasta,
    intro: "Experiência gastronômica desde o primeiro clique.",
    heroVideo: videoRestaurantPasta,
    sections: [],
  },

  {
    id: 8,
    slug: "grand-chef",
    title: "Grand Chef",
    category: "Restaurante Fine Dining",
    tags: ["Web", "Reservas"],
    description: "Experiência digital premium com reservas e menu degustação.",
    video: videoRestaurant1,
    intro: "Alta gastronomia traduzida em design.",
    heroVideo: videoRestaurant1,
    sections: [],
  },
];
