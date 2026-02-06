import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Maximize2 } from "lucide-react";

// Imports de Vídeos
import imagefuture1 from "../../assets/video/1.mp4";
import imagefuture2 from "../../assets/video/conmpany.mp4";
import imagefuture3 from "../../assets/video/RH.mp4";
import imagefuture4 from "../../assets/video/consultoria.mp4";
import imagefuture5 from "../../assets/video/Belza.mp4";
import imagefuture6 from "../../assets/video/Oralcare.mp4";
import imagefuture7 from "../../assets/video/Restaurante.mp4";
import imagefuture8 from "../../assets/video/sushi.mp4";

// Tipagem para os itens de trabalho
interface WorkItem {
  title: string;
  cat: string;
  img: string;
}

// Tipagem para as props do Card
interface StackCardProps extends WorkItem {
  i: number;
  progress: MotionValue<number>;
  total: number;
}

const works: WorkItem[] = [
  { title: "JB", cat: "Engenharia", img: imagefuture1 },
  { title: "Consultoria", cat: "Empresa", img: imagefuture2 },
  { title: "Recursos Humanos", cat: "Agência", img: imagefuture4 },
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
    <section ref={container} className="relative bg-black min-h-[800vh] pb-0">
      <div className="sticky top-0 h-[18vh] md:h-[25vh] flex flex-col items-center justify-center bg-black z-20">
        <p className="text-white/30 text-[8px] md:text-[10px] font-bold tracking-[0.4em] uppercase mb-2">
          Nossos
        </p>
        <h2 className="text-white text-5xl md:text-[10vw] font-black uppercase leading-none">
          Pro
          <span
            style={{ WebkitTextStroke: "1px white" }}
            className="text-transparent"
          >
            Jetos
          </span>
        </h2>
      </div>

      <div className="relative px-2 md:px-12">
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

// TIPAGEM APLICADA AQUI: Substituído 'any' por 'StackCardProps'
function StackCard({ i, title, cat, img, progress, total }: StackCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitEnterFullscreen) {
        // O '(videoRef.current as any)' aqui é necessário apenas para APIs legadas do Safari/iOS
        (videoRef.current as any).webkitEnterFullscreen();
      }
    }
  };

  const start = i / total;
  const end = (i + 1) / total;

  const scale = useTransform(progress, [start, end], [1, 0.85]);

  const isLast = i === total - 1;
  const opacity = useTransform(
    progress,
    [start, end, end + 0.02],
    [1, 1, isLast ? 1 : 0],
  );

  return (
    <div className="h-screen flex items-start justify-center sticky top-24 md:top-0 md:items-center px-2">
      <motion.div
        style={{ scale, opacity, zIndex: i }}
        className="relative w-full max-w-7xl h-[50vh] md:h-[80vh] bg-[#111] rounded-[20px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
      >
        <video
          ref={videoRef}
          src={img}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />

        <button
          onClick={handleFullscreen}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-30 p-3 md:p-4 bg-black/50 backdrop-blur-lg rounded-full border border-white/10 text-white active:scale-90 transition-all hover:bg-white hover:text-black"
        >
          <Maximize2 size={20} className="md:w-6 md:h-6" />
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent p-6 md:p-16 flex flex-col justify-end pointer-events-none">
          <p className="text-white font-black tracking-[0.4em] text-[9px] mb-2 uppercase">
            {cat}
          </p>
          <h3 className="text-white text-4xl md:text-8xl font-black uppercase leading-[0.8] tracking-tighter">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
}
