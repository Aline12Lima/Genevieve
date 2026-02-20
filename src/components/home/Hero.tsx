import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import imageHero from "../../assets/images/woman-wearing-smart-glasses-futuristic-technology-digital-remix.webp";

export function Hero() {
  const container = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "60px"]);
  const h1Opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 1, 0]);
  const h1Scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  return (
    <section ref={container} className="relative h-[200vh] bg-black">
      <h1 className="sr-only">
        Criação de Sites para Empresas da Construção Civil
      </h1>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* BACKDROP */}
        <motion.div
          style={{ scale, borderRadius, opacity: imageOpacity }}
          className="absolute inset-0 z-10 overflow-hidden border border-white/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a8a]/40 via-black to-black opacity-90" />
          <img
            src={imageHero}
            alt="Criação de sites modernos e estratégicos"
            fetchPriority="high"
            className="w-full h-full object-cover object-center mix-blend-lighten"
          />
        </motion.div>

        {/* CONTEÚDO */}
        <div className="relative z-30 flex flex-col justify-start pt-40 md:pt-60 px-6 md:px-16">
          {/* WebSite® */}
          <motion.div
            style={{ opacity: h1Opacity, scale: h1Scale }}
            className="mb-8 md:mb-0"
          >
            <p className="text-white text-xl sm:text-lg md:text-2xl font-medium tracking-tight">
              WebSite®
            </p>
          </motion.div>

          {/* Genevieve central */}
          <motion.div
            style={{ opacity: h1Opacity, scale: h1Scale }}
            className="flex items-center justify-center"
          >
            <p className="font-beauty text-white text-[22vw] sm:text-[16vw] md:text-[15vw] leading-[0.8] tracking-tighter lowercase text-center">
              Genevieve
            </p>
          </motion.div>

          {/* Lista abaixo alinhada à direita */}
          <motion.div
            style={{ opacity: h1Opacity, scale: h1Scale }}
            className="flex justify-end mt-38 sm:-mt-28 md:mt-0"
          >
            <div className="flex flex-col text-right gap-1">
              {[
                "Design",
                "Landing Pages",
                "Cardápios",
                "Portfólios",
                "Manutenção pós-venda",
              ].map((item) => (
                <span
                  key={item}
                  className="text-white text-sm sm:text-sm md:text-xs font-bold uppercase tracking-[0.2em] opacity-90"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
