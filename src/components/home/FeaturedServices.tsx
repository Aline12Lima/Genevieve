import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

import imagefuture1 from "../../assets/video/1.mp4";
import imagefuture2 from "../../assets/video/conmpany.mp4";
import imagefuture3 from "../../assets/video/RH.mp4";
import imagefuture4 from "../../assets/video/consultoria.mp4";
import imagefuture5 from "../../assets/video/Belza.mp4";
import imagefuture6 from "../../assets/video/Oralcare.mp4";
import imagefuture7 from "../../assets/video/Restaurante.mp4";
import imagefuture8 from "../../assets/video/sushi.mp4";

const works = [
  { title: "JB", cat: "Engenharia", img: imagefuture1 },
  { title: "Consultoria", cat: "Empresa", img: imagefuture2 },
  { title: "Recursos Homanos", cat: "Agência", img: imagefuture4 },
  { title: "Beleza", cat: "Estética", img: imagefuture5 },
  { title: "Oral Care", cat: "Clínica", img: imagefuture6 },
  { title: "Consultoria", cat: "Administrativa", img: imagefuture3 },
  { title: "Restaurante", cat: "Buffet", img: imagefuture7 },
  { title: "Restaurante", cat: "Sushi", img: imagefuture8 },
];

export function FeaturedServices() {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    // Aumentamos a min-h para dar espaço de scroll para 7 cards
    <section ref={container} className="relative bg-black min-h-[700vh]">
      <div className="sticky top-0 h-[30vh] flex flex-col items-center justify-center bg-black z-20">
        <p className="text-white/30 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">
          Nossos
        </p>
        <h2 className="text-white text-7xl md:text-[10vw] font-black uppercase leading-none">
          Pro
          <span
            style={{ WebkitTextStroke: "1px white" }}
            className="text-transparent"
          >
            Jetos
          </span>
        </h2>
      </div>

      <div className="relative px-6 md:px-12">
        {works.map((work, i) => (
          <StackCard
            key={i}
            i={i}
            {...work}
            progress={scrollYProgress}
            total={works.length}
          />
        ))}
      </div>
    </section>
  );
}
function StackCard({
  i,
  title,
  cat,
  img,
  progress,
  total,
}: {
  i: number;
  title: string;
  cat: string;
  img: string;
  progress: MotionValue<number>;
  total: number;
}) {
  const start = i / total;
  const end = (i + 1) / total;

  const scale = useTransform(progress, [start, end], [1, 0.8]);
  const opacity = useTransform(progress, [start, end, end + 0.05], [1, 1, 0]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, opacity, zIndex: i }}
        className="relative w-full max-w-6xl h-[60vh] md:h-[75vh] bg-[#111] rounded-[30px] overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Alterado de <img> para <video> com propriedades de auto-play */}
        <video
          src={img}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center transition-all duration-1000 "
        />

        {/* Overlay de gradiente para legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-8 md:p-12 flex flex-col justify-end">
          <p className="text-gray-100 font-bold tracking-[0.3em] text-[10px] mb-2 uppercase">
            {cat}
          </p>
          <h3 className="text-white text-5xl md:text-7xl font-black uppercase leading-[0.8] tracking-tighter">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
