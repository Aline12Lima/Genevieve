import { motion } from "framer-motion";
import imagembg from "../../assets/images/skills.png";

const skills = [
  { name: "DESIGN WEB", level: "85%" },
  { name: "LANDING PAGES", level: "100%" },
  { name: "Indexação no Google", level: "90%" },
  { name: "Manutenções", level: "78%" },
];

export function Skills() {
  return (
    <section className="py-24 bg-[#F2F2F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* COLUNA ESQUERDA — TEXTO */}
        <div className="order-1 space-y-16">
          <h2 className="font-beauty text-black text-6xl lg:text-7xl font-black tracking-tighter">
            HABILIDADES
          </h2>

          <div className="space-y-12">
            {skills.map((skill) => (
              <div key={skill.name} className="border-b border-black/10 pb-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-black text-2xl font-bold uppercase tracking-tighter">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 text-xs font-mono">
                    {skill.level}
                  </span>
                </div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-[2px] bg-[#00a3ff]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* COLUNA DIREITA — IMAGEM */}
        <div className="order-2 relative">
          <span className="text-[24px] sm:text-[32px] lg:text-[50px] font-black text-black/5 absolute -top-20 -left-10 select-none hidden lg:block">
            ESSENCIAL
          </span>

          <div className="bg-white p-2 w-full max-w-md aspect-[3/4] overflow-hidden">
            <img
              src={imagembg}
              loading="lazy"
              alt="Criação de sites e habilidades em performance digital"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
