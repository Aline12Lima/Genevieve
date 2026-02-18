// src/data/projects/projectDetails.ts

// vídeos
import videoRH from "../assets/video/RH.mp4";
import imgRH from "../assets/images2/RH.png";
import videoCompany from "../assets/video/companyConsut.mp4";
import imgCompany from "../assets/images2/Agevia.png";
import videoAdvocacia from "../assets/video/artket.webm";
import imgAdvocacia from "../assets/images2/arket.png";
import videoTourism from "../assets/video/buils.webm";
import imgTourism from "../assets/images2/builds.png";
import videoSalon from "../assets/video/salon.mp4";
import imgSalon from "../assets/images2/Avlon.png";
import videoDentist from "../assets/video/dentist.mp4";
import imgDentist from "../assets/images2/Dentist.png";
import videoRestaurantPasta from "../assets/video/restaurantPasta.mp4";
import imgPasta from "../assets/images2/Argiliano.png";
import videoRestaurant1 from "../assets/video/1.mp4";
import imgRestaurant1 from "../assets/images2/Countour.png";

export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  
  // grid
  video: string;
  mainImage: string;
  projectUrl: string;

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
    mainImage: imgRH,
    category: "Consultoria de Recursos Humanos",
    tags: ["Web", "Branding"],
    description:
      "Plataforma digital moderna para gestão de talentos e recrutamento.",
    video: videoRH,
    projectUrl: "https://acuvic-template.webflow.io/",
    intro: "Soluções digitais focadas em pessoas e performance.",
    heroVideo: videoRH,
    sections: [
      {
        id: "overview",
        title: "Descrição ",
        text: " Este projeto apresenta um website institucional  para uma empresa de consultoria em RH, com foco em credibilidade, clareza e posicionamento profissional. O layout moderno, aliado ao uso estratégico de vídeo, comunica autoridade, confiança e proximidade desde o primeiro contato. Cada seção  pensada para explicar serviços, benefícios e diferenciais de forma objetiva, facilitando a tomada de decisão do cliente. O resultado é uma presença digital que não apenas informa, mas vende serviços de RH com profissionalismo, estratégia e impacto visual.",      },
    ],
  },

  {
    id: 2,
    slug: "agveia-consulting",
    title: "AGevia Consultoria",
     mainImage: imgCompany,
    category: "Consultoria Empresarial",
    tags: ["Web", "Corporativo"],
    description:
      "Website institucional com dashboard de gestão para empresa de consultoria.",
    video: videoCompany,
    intro: "Clareza estratégica aplicada ao digital.",
    heroVideo: videoCompany,
    projectUrl: "https://agevia.framer.website/about",
    sections: [
      {
        id: "layout",
        title: "Layout Corporativo",
        text: "O projeto Consultoria Administrativa Agevia foca em clareza, profissionalismo e conversão. O layout clean e bem estruturado facilita a leitura, valoriza os serviços e transmite organização essencial para empresas da área administrativa. A navegação intuitiva orienta o visitante de forma estratégica, conduzindo do entendimento dos serviços à ação de contato. O resultado é um website que comunica confiança, reforça autoridade e transforma presença digital em oportunidade real de negócios.",       },
    ],
  },

  {
    id: 3,
    slug: "Arquitetura",
    title: "Arket",
     mainImage: imgAdvocacia,
    category: "Escritório de Arquitetura",
    tags: ["Web", "Institucional"],
    description:
      "Página criativa e minimalista.",
    video: videoAdvocacia,
      projectUrl: "https://arket.webflow.io/",
    intro: "Criatividade e confiança no ambiente.",
    heroVideo: videoAdvocacia,
    sections: [
      {
        id: "layout",
        title: "Layout Moderno",
        text: "Este projeto de website institucional para escritório de arqiotetura foi elaborado para reforçar credibilidade, autoridade e confiança ao cliente. O layout sóbrio e elegante comunica confiança, enquanto a estrutura clara organiza áreas de atuação e diferenciais do escritório. A experiência do usuário conduz o visitante com segurança, valorizando conteúdo estratégico e facilitando o contato. O resultado é um site que fortalece a imagem do escritório e transforma presença digital em confiança e captação de clientes qualificados.",       },
    ],
  },

  {
    id: 4,
    slug: "Construção de Prédios",
    title: "Buildbes",
     mainImage: imgTourism,
    category: "Serviços de Mão de Obra",
    tags: ["Web", "Serviços"],
    description:
      "Página para uma construtora empreiteira.",
    video: videoTourism,
    projectUrl: "https://buildbes.webflow.io/home/home-two",
    intro: "Experiência digital para destinos inesquecíveis.",
    heroVideo: videoTourism,
    sections: [
      {
        id: "overview",
        title: "Descrição ",
        text: "  Este projeto de website para empreiteira, foi desenvolvido para transformar em novos contratos e parceirias desde o primeiro acesso.O layout visualmente envolvente valoriza imagens, vídeos e roteiros, criando conexão emocional com o visitante. A estrutura clara facilita a navegação entre serviços e projetos, clareza e informações, incentivando a descoberta e a decisão de nova parceria. O resultado é uma presença digital que inspira, fortalece a marca e converte interesse em clientes.",},
      ],
      
  },

  {
    id: 5,
    slug: "beleza-estilo",
    title: "Beleza & Estilo",
     mainImage: imgSalon,
    category: "Salão de Beleza",
    tags: ["Web", "Agendamento"],
    description: "Plataforma de agendamento online com galeria de serviços.",
    video: videoSalon,
    projectUrl: "https://avlon.webflow.io/home-two",
    intro: "Estética, performance e conversão.",
    heroVideo: videoSalon,
     sections: [
      {
        id: "overview",
        title: "Descrição ",
        text: "  Este projeto de website para salão de beleza foi desenvolvido para valorizar a marca, os serviços e a experiência do cliente. O layout moderno e elegante destaca tratamentos, profissionais e resultados, despertando desejo desde o primeiro contato. A navegação intuitiva conduz o visitante com facilidade até o agendamento, reduzindo fricções e aumentando conversões. O resultado é um site que transforma beleza em posicionamento, visibilidade e mais clientes para o negócio.",},
      ],
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
    video: videoDentist,
     projectUrl: "https://dentista-template.webflow.io/",
    intro: "Tecnologia aplicada à saúde.",
    heroVideo: videoDentist,
      sections: [
      {
        id: "overview",
        title: "Descrição ",
        text: "  Website desenvolvido para clínica odontológica com foco em confiança, clareza e conversão.O layout clean transmite segurança e profissionalismo desde o primeiro acesso. A estrutura orienta o paciente com facilidade até informações e agendamento. Um site pensado para gerar credibilidade e atrair novos pacientes",},
      ],
  },

  {
    id: 7,
    slug: "pasta-italiana",
    title: "Pasta Italiana",
     mainImage: imgPasta,
    category: "Restaurante",
    tags: ["Web", "Cardápio Digital"],
    description: "Cardápio digital interativo com sistema de pedidos online.",
    video: videoRestaurantPasta,
    projectUrl: "https://artigiano-pasta.webflow.io/products",
    intro: "Experiência gastronômica desde o primeiro clique.",
    heroVideo: videoRestaurantPasta,
   sections: [
      {
        id: "overview",
        title: "Descrição ",
        text: "  Website desenvolvido para valorizar a tradição e a experiência da culinária italiana. O design envolvente desperta o apetite e destaca pratos, ambiente e cardápio. A navegação simples conduz o cliente até reservas e pedidos. Um site que transforma sabor em desejo e visitas em mesas ocupadas.",},
      ],
  },

  {
    id: 8,
    slug: "Engenharia",
    title: "Contour",
     mainImage: imgRestaurant1,
    category: "Construção Civil",
    tags: ["Web", "Reservas"],
    description: "Experiência digital",
    video: videoRestaurant1,
    projectUrl: "https://contour-128.webflow.io/",
    intro: "Alta gastronomia traduzida em design.",
    heroVideo: videoRestaurant1,
   sections: [
      {
        id: "overview",
        title: "Descrição ",
        text: "  Website criado para escritório de engenharia de alto nível como marca premium. O layout sofisticado destaca trajetória, projetos e experiências exclusivas. Cada detalhe reforça autoridade, excelência e identidade. Uma presença digital que traduz talento em prestígio e oportunidades.",},
      ],
  },
];
