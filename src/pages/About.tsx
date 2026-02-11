import { motion } from "framer-motion";

import Persona1 from "../assets/images/Aline.jpg";
import Persona2 from "../assets/images/ju.png";
import Persona3 from "../assets/images/Jeff.jpg";
import bgIMG from "../assets/images/Templares1service.png";

export function About() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      {/* ===================== HERO ===================== */}
      <section className="min-h-[80vh] flex flex-col justify-end px-6 md:px-12 pb-20 border-b border-white/10">
        <div className="max-w-[1440px] mx-auto w-full mt-32">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase mb-12"
          >
            Construindo
            <br />
            <span className="text-[#00a3ff] font-light font-beauty">
              Experiências
            </span>
            <br />
            Digitais
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <p className="md:col-start-7 md:col-span-6 text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              Um estúdio enxuto focado em criar landing pages, websites
              profissionais, sistemas administrativos, integrações e soluções
              digitais que elevam negócios com clareza, performance e design.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== O QUE FAZEMOS ===================== */}
      <section
        className="
          relative
          py-32 px-6 md:px-12
          border-t border-white/10
          bg-cover bg-center bg-no-repeat
          "
        style={{
          backgroundImage: `url(${bgIMG})`,
        }}
      >
        {/* overlay opcional para contraste */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-100">
                [ 01 ] O QUE FAZEMOS
              </span>
            </div>

            <div className="lg:col-span-8 space-y-16">
              <p className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-tight text-white max-w-3xl">
                Criamos soluções digitais claras, funcionais e elegantes para
                marcas que precisam crescer, se posicionar e converter.
              </p>

              <div className="grid grid-cols-1 bg-white/100 rounded-[13px] py-4 md:grid-cols-2 gap-12  front-black text-black ">
                <ul className="space-y-4  py-4 ml-4 ">
                  <li>— Landing pages e websites profissionais</li>
                  <li>— Portfólios e cardápios digitais</li>
                  <li>— Campanhas e páginas de produtos</li>
                  <li>— Evolução e reformulação de sites existentes</li>
                </ul>

                <ul className="space-y-4">
                  <li>— Painéis administrativos e CMS</li>
                  <li>— Integrações com Google, WhatsApp e Instagram</li>
                  <li>— Automações de e-mail e fluxos de contato</li>
                  <li>— Manutenção pós-lançamento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EQUIPE ===================== */}
      <section className="py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">
              [ 02 ] NOSSO TIME
            </span>
          </div>

          <div className="lg:col-span-8 space-y-16">
            <p className="text-2xl md:text-4xl font-medium leading-[1.2] tracking-tight text-gray-200 max-w-3xl">
              Um time enxuto, multidisciplinar e focado em resultado.
            </p>

            <div className="flex flex-wrap gap-16">
              {[
                {
                  name: "Juliane Lima",
                  role: "Comercial",
                  image: Persona2,
                },
                {
                  name: "Aline Lima",
                  role: "Desenvolvimento",
                  image: Persona1,
                },
                {
                  name: "Jefferson",
                  role: "Design e Desenvolvedor ",
                  image: Persona3,
                },
              ].map((person) => (
                <div key={person.name} className="flex items-center gap-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-white font-bold text-sm uppercase">
                      {person.name}
                    </p>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-32 border-t border-white/10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="px-6"
        >
          <h2 className="text-6xl md:text-[10vw] font-bold tracking-[-0.05em] uppercase leading-none mb-12">
            Vamos Trabalhar
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #f5f5f5" }}
            >
              Juntos?
            </span>
          </h2>

          <a
            href="mailto:contato@suaagencia.com"
            className="text-xl md:text-2xl border-b border-[#00a3ff] pb-2 hover:text-[#00a3ff] transition-colors"
          >
            Mande um Olá →
          </a>
        </motion.div>
      </section>
    </div>
  );
}
