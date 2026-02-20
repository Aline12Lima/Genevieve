import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Importações das imagens
import imageHero1 from "../../assets/images/caminhao_agregados.jpg";
import imageHero2 from "../../assets/images/maquina_escavadeira.jpg";
import imageHero3 from "../../assets/images/estrututa_metalica.jpg";

const slides = [imageHero1, imageHero2, imageHero3];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const container = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Lógica para trocar as imagens de fundo lentamente
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Troca a cada 6 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={container}
      className="relative h-[120vh] bg-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full">
        {/* CARROSSEL DE FUNDO (BACKGROUND SLIDESHOW) */}
        <div className="absolute inset-0 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.img
                style={{ scale }}
                src={slides[currentSlide]}
                alt="Marketing para Construção"
                fetchPriority="high"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* GRADIENTE SOBREPOSTO - Para destacar o texto conforme a referência */}
          <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 z-20 bg-gradient-to-b from-transparen via-transparent to-black/60" />
        </div>

        {/* CONTEÚDO PRINCIPAL - Alinhado conforme o print */}
        <div className="relative z-30 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 max-w-[1440px] mx-auto">
          <motion.div style={{ opacity: contentOpacity }} className="max-w-4xl">
            <h1 className="text-white text-2xl md:text-2xl lg:text-4xl font-bold tracking-tight uppercase leading-[0.9] mb-4">
              Agência de <br />
              Websites <br />
              Para <span className="text-[#00a3ff]">Construção Civil</span>
            </h1>

            {/* Linha decorativa dourada */}
            <div className="w-32 h-1.5 bg-[#00a3ff] mb-10" />

            <p className="text-white text-lg md:text-xl leading-relaxed mb-12 max-w-2xl font-light opacity-95">
              Fazemos parceria com empresas de construção em todo o Brasil para
              melhorar sua presença digital, oferecendo experiências visual,
              gestão de redes sociais e websites de alta performance.
            </p>

            {/* BOTÕES */}

            <div className="flex flex-wrap gap-5">
              <a
                href="/contato"
                className="bg-[#00a3ff]  text-white px-10 py-4 font-bold uppercase text-[12px] tracking-widest hover:bg-[black] transition-all transform hover:-translate-y-1 text-center"
              >
                Contate-nos
              </a>

              <a
                href="#nichos"
                className="border-2 border-white/80 text-white px-10 py-4 font-bold uppercase text-[12px] tracking-widest hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 text-center"
              >
                Explore os nossos serviços
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
