import { motion } from "framer-motion";

export function About() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      {/* SEÇÃO HERO - Títulos Monumentais */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-[1440px] mx-auto">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase"
          >
            WE BUILD <br />
            <span
              style={{ WebkitTextStroke: "1px white" }}
              className="text-transparent"
            >
              DIGITAL
            </span>
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase"
          >
            EXPERIENCES
          </motion.h1>
        </div>
      </section>

      {/* SEÇÃO MANIFESTO - Grid Assimétrico */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Coluna Esquerda: Subtítulo Técnico */}
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-500">
              [ 01 ] NOSSA ABORDAGEM
            </h2>
          </div>

          {/* Coluna Direita: Texto de Destaque */}
          <div className="lg:col-span-8 space-y-12">
            <p className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-tight text-gray-200">
              Acreditamos que a simplicidade é o último grau da sofisticação. Na
              Genevieve, fundimos engenharia de software de elite com design
              visceral.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-400 font-normal leading-relaxed">
              <p>
                Como estudantes e entusiastas de engenharia, entendemos que o
                código é a base, mas a experiência do usuário é o que define o
                sucesso. Cada pixel é planejado, cada transição é calculada.
              </p>
              <p>
                Não entregamos apenas sites; entregamos ferramentas de
                crescimento. Focamos em escalabilidade e performance, garantindo
                que sua presença digital esteja anos à frente da concorrência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO NÚMEROS - Estilo Minimalista */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16">
          {[
            { label: "Anos de Experiência", value: "05" },
            { label: "Projetos Lançados", value: "120+" },
            { label: "Países Atendidos", value: "08" },
            { label: "Satisfação", value: "99%" },
          ].map((item, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-5xl md:text-7xl font-black tracking-tighter">
                {item.value}
              </h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
