import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import imageHero from "../../assets/images/woman-wearing-smart-glasses-futuristic-technology-digital-remix.jpg";

export function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.4], ["0px", "60px"]);
  const h1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.35], [1, 1, 0]);
  const h1Scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const bgTextOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <section ref={container} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* IMAGEM BACKDROP */}
        <motion.div
          style={{
            scale,
            borderRadius,
            opacity: imageOpacity,
            visibility: useTransform(scrollYProgress, (pos) =>
              pos > 0.2 ? "hidden" : "visible",
            ),
          }}
          className="absolute inset-0 z-20 overflow-hidden border border-white/5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a8a]/40 via-black to-black opacity-90" />
          <img
            src={imageHero}
            alt="Hero Background"
            className="w-full h-full object-cover object-center mix-blend-lighten"
          />
        </motion.div>

        {/* H1 CENTRAL - No mobile vira WEBSITES */}
        <motion.div
          style={{ opacity: h1Opacity, scale: h1Scale }}
          className="relative z-30 text-center  w-full"
        >
          {/* Desktop exibe 'genevieve', Mobile exibe 'websites' */}
          <h1 className="font-beauty text-white text-[16vw] md:text-[15vw] leading-[0.8] tracking-tighter lowercase">
            <span className="md:hidden opacity-90">websites</span>
            <span className="hidden md:inline">genevieve</span>
          </h1>
        </motion.div>

        {/* ELEMENTOS AUXILIARES */}
        <motion.div
          style={{ opacity: bgTextOpacity }}
          className="absolute inset-0 z-40 flex items-center justify-between p-8 md:p-16 pointer-events-none"
        >
          {/* LADO ESQUERDO (Ajustado no mobile para subir: justify-start + pt-20) */}
          <div className="flex flex-col h-full justify-start pt-20 md:justify-center md:pt-0">
            {/* No mobile exibe 'Design', no desktop 'WebSites®' */}
            <h2 className="text-white text-lg md:text-2xl font-medium tracking-tight top-">
              <span className="hidden md:inline">WebSites®</span>
            </h2>
          </div>

          {/* LADO DIREITO (Ajustado no mobile para subir: justify-start + pt-24) */}
          <div className="flex flex-col h-full justify-start pt-24 md:justify-center items-end text-right">
            <div className="flex flex-col gap-1 md:mt-30">
              {["Design", "Desenvolvimento", "Manutenção"].map((item) => (
                <span
                  key={item}
                  className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] opacity-90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
