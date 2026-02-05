import { motion } from "framer-motion";
import img1 from "../../assets/img2/1.png";
import img2 from "../../assets/img2/2.png";
import img3 from "../../assets/images/Templares1service.png";
import img4 from "../../assets/img2/8.png";
import img5 from "../../assets/img2/9.png";

const images = [img1, img2, img3, img4, img5];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Texto Principal - Ajustado para ser mais harmônico */}
      <div className="relative mt-32 text-center mb-0 ">
        <h1 className="text-white text-5xl md:text-4xl font-bold leading-tight tracking-tight">
          Construindo web
          <span className="italic font-serif text-gray-400">Sites</span> <br />
          Sofisticados
        </h1>
      </div>

      {/* Container do Carrossel com Perspectiva 3D */}
      <div
        className="relative w-full overflow-visible"
        style={{ perspective: "1200px" }} // Aumenta a profundidade do efeito
      >
        <motion.div
          className="flex gap-6 w-max"
          style={{
            rotateX: "50deg", // Inclina os cards para trás (efeito deitado)
            rotateZ: "0deg", // Leve inclinação lateral estilo Growza
          }}
          animate={{
            x: [100, -900], // Ajuste este valor conforme o número de imagens
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <motion.div
              key={index}
              className="w-64 h-80 md:w-86 md:h-[420px] flex-shrink-0 bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              whileHover={{
                z: 50, // Faz o card "pular" para fora da inclinação no hover
                rotateX: "10deg", // Endireita levemente ao passar o mouse
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={src}
                alt={`Project ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Gradientes laterais para suavizar a entrada/saída */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black via-black/50 to-transparent z-10" />
      </div>
    </section>
  );
}
