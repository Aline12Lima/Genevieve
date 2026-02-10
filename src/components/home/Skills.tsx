import { motion } from "framer-motion";
import imagembg from "../../assets/images/skills.png";

const skills = [
  { name: "DESING WEB", level: "100%" },
  { name: "LANDING PAGES", level: "100%" },
  { name: "INTEGRAÇÃO NO GOOGLE", level: "100%" },
  { name: "Manutenções", level: "100%" },
];

export function Skills() {
  return (
    <section className="py-24 bg-[#F2F2F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* COLUNA ESQUERDA — TEXTO */}
        <div className="order-1 space-y-16">
          <h3 className="font-beauty text-black text-6xl lg:text-7xl font-black tracking-tighter">
            HABILIDADES
          </h3>

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
          <h2 className="text-[120px] font-black text-black/5 absolute -top-20 -left-10 select-none hidden lg:block">
            ESSENCIAL
          </h2>

          <div className="bg-white p-2 w-full max-w-md aspect-[3/4] overflow-hidden">
            <img
              src={imagembg}
              alt="Skills"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
