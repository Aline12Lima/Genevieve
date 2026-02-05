import { motion } from "framer-motion";
import imagembg from "../../assets/images/skills.png";

const skills = [
  { name: "DESIGN WEB", level: "80%" },
  { name: "DESENVOLVIMENTO", level: "100%" },
  { name: "Indexação no Google", level: "90%" },
  { name: "Manutenções", level: "65%" },
];

export function Skills() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <h2 className="text-[120px] font-black text-white/5 absolute -top-20 -left-10 select-none">
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

        <div className="space-y-12">
          <h3 className="text-white text-6xl font-black tracking-tighter mb-16">
            HABILIDADES
          </h3>
          {skills.map((skill) => (
            <div key={skill.name} className="border-b border-white/10 pb-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-white text-2xl font-bold uppercase tracking-tighter">
                  {skill.name}
                </span>
                <span className="text-gray-500 text-xs font-mono">
                  {skill.level}
                </span>
              </div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-[2px] bg-[#00a3ff]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
