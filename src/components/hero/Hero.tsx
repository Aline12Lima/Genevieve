import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 block text-xs uppercase tracking-[0.35em] text-gray-400"
        >
          Creative Digital Agency
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05]"
        >
          We build digital
          <br />
          experiences
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-8 max-w-xl text-gray-400 text-sm md:text-base"
        >
          We help brands stand out through thoughtful design, strategic
          development, and meaningful digital experiences.
        </motion.p>
      </div>
    </section>
  );
}
