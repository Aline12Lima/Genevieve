import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import imageService1 from "../../assets/img2/Service2.png";
import imageService2 from "../../assets/images/template2service.png";
import imageService3 from "../../assets/images/template3service.png";

const works = [
  {
    title: "Site Completo",
    category: "Cuidamos de tudo",
    image: imageService2, // Mapeado para a imagem importada
    align: "right",
  },
  {
    title: "MARKETING",
    category: "Aumentamos sua performance",
    image: imageService1,
    align: "left",
  },
  {
    title: "Você no Google",
    category: "E mais...",
    image: imageService3,
    align: "right",
  },
];

export function ShowcaseScroll() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    /* Ajustado para terminar a animação exatamente no fim da seção */
    offset: ["start start", "end end"],
  });

  return (
    /* Reduzi de 400vh para 300vh para os 3 cards ficarem mais compactos */
    <section ref={container} className="relative bg-black min-h-[300vh] pb-0">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden pointer-events-none">
        <h2 className="text-[14vw] font-black text-white/10 leading-none uppercase text-center">
          Nossos <br /> SERVIÇOS
        </h2>
        <p className="text-[#00a3ff] text-[6vw] font-black uppercase leading-tight text-center">
          Vai Além da <br /> Simplicidade
        </p>
      </div>

      {/* Removido o -mt-[100vh] que causava desalinhamento no final */}
      <div className="relative z-10 px-6 md:px-20">
        {works.map((work, i) => (
          <div
            key={i}
            className="h-screen flex items-center justify-center lg:justify-between"
          >
            {/* O align agora é tratado dentro do WorkCard ou via justify */}
            <div
              className={`w-full flex ${work.align === "right" ? "justify-end" : "justify-start"}`}
            >
              <WorkCard index={i} {...work} progress={scrollYProgress} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface WorkCardProps {
  index: number;
  title: string;
  category: string;
  image: string; // Agora recebe a imagem dinâmica do array
  progress: MotionValue<number>;
}

function WorkCard({ index, title, category, image, progress }: WorkCardProps) {
  const start = index * 0.2;
  const end = start + 0.4;

  const y = useTransform(progress, [start, end], [300, -150]);
  const opacity = useTransform(
    progress,
    [start, start + 0.1, end - 0.1, end],
    [1, 1, 1, 1],
  );

  return (
    <motion.div
      style={{ y, opacity }}
      className="relative w-full max-w-lg md:max-w-5xl h-[450px] md:h-auto md:aspect-video bg-[#111] rounded-3xl overflow-hidden border border-white/5 shadow-2xl"
    >
      <img
        src={image} // Uso da imagem dinâmica
        alt={title}
        className="w-full h-full object-cover transition-all duration-700"
      />

      <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent text-left">
        <p className="text-white text-[10px] font-bold tracking-widest mb-1 uppercase">
          {category}
        </p>
        <h3 className="text-white text-4xl font-black uppercase">{title}</h3>
        <button className="mt-4 text-[10px] text-white/50 font-bold uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
          Saber mais <span>→</span>
        </button>
      </div>
    </motion.div>
  );
}
