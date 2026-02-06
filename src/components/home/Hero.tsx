import { motion } from "framer-motion";
import img1 from "../../assets/img2/1.png";
import img2 from "../../assets/img2/2.png";
import img3 from "../../assets/images/Templares1service.png";
import img4 from "../../assets/img2/8.png";
import img5 from "../../assets/img2/9.png";

const images = [img1, img2, img3, img4, img5];

export function Hero() {
  return (
    <section
      className="
    relative
    w-full
    h-auto
    bg-black
    overflow-hidden
    flex flex-col
    items-center
    pt-24 sm:pt-16 md:pt-32
  "
    >
      <div className="relative mb-2 text-center z-20">
        <h1
          className="
    text-white
    font-bold
    tracking-tight
    leading-tight
    text-3xl sm:text-3xl md:text-5xl lg:text-6xl
  "
        >
          Construindo web
          <span className="italic font-serif text-[#00a3ff]">Sites</span>
          <br />
          Sofisticados
        </h1>
      </div>

      <div
        className="relative w-full overflow-visible"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="flex gap-6 w-max"
          style={{ rotateX: "10deg" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...images, ...images].map((src, index) => (
            <motion.div
              key={index}
              className="
                w-70 h-120
                sm:w-64 sm:h-80
                md:w-72 md:h-[420px]
                flex-shrink-0
                bg-zinc-900
                rounded-[2rem]
                overflow-hidden
                border border-zinc-800
                shadow-[0_20px_50px_rgba(0,0,0,0.5)]
              "
              whileHover={{
                z: 40,
                rotateX: "10deg",
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={src}
                alt={`Projeto ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-black via-black/60 to-transparent z-10" />
      </div>
    </section>
  );
}
