import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Globe,
  RefreshCcw,
  Settings,
  Search,
  Sparkles,
} from "lucide-react";

import Persona1 from "../assets/images/Aline.jpg";
import Persona2 from "../assets/images/ju.png";
import Persona3 from "../assets/images/Jeff.jpg";

export function About() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black">
      {/* ===================== HERO ===================== */}
      <section className="min-h-[70vh] ] flex flex-col justify-start  px-6  pt-28 pb-10  md:min-h-[80vh md:pt-34  md:px-12 md:pb-20  md:justify-center border-b border-white/10">
        <div className="max-w-[1440px] mx-auto w-full mt-16 md:mt-0">
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="text-[12vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter uppercase mb-4 md:mb-6"
          >
            Construindo
            <br />
            <span className="text-[#00a3ff] font-light font-beauty">
              Experiências
            </span>
            <br />
            Digitais
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:-mt-10">
            <p className="md:col-start-7 md:col-span-6 text-base md:text-2xl text-gray-200 font-light leading-relaxed">
              Um estúdio enxuto focado em criar landing pages, websites
              profissionais, sistemas administrativos, integrações e soluções
              digitais que elevam negócios com clareza, performance e design.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== FERRAMENTAS ===================== */}
      <section className="pt-16 md:pt-24 pb-20 md:py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto space-y-12 md:space-y-20">
          <div className="text-center space-y-4 md:space-y-6">
            <span className="text-sm md:text-[16px] font-bold uppercase tracking-[0.4em] text-gray-400">
              O que Fazemos
            </span>

            <h2 className="text-3xl md:text-6xl font-bold tracking-tight">
              Estrutura, Performance
              <br />
              <span className="text-[#00a3ff] font-light font-beauty">
                & Inteligência
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <LayoutTemplate />,
                title: "Essencial",
                items: [
                  "Landing pages",
                  "Single Page",
                  "Portfólios",
                  "Cardápios digitais",
                  "Páginas estratégicas",
                ],
              },
              {
                icon: <Globe />,
                title: "Websites Profissionais",
                items: [
                  "Site completo",
                  "Múltiplas páginas",
                  "Interações personalizadas",
                  "Automação de e-mails",
                ],
              },
              {
                icon: <Settings />,
                title: "Domínios",
                items: [
                  "Integração de domínio",
                  "Gestão de DNS",
                  "Configuração técnica",
                ],
              },
              {
                icon: <RefreshCcw />,
                title: "Reforma de Sites",
                items: [
                  "Redesign",
                  "Atualização de informações",
                  "Melhoria de performance",
                ],
              },
              {
                icon: <Sparkles />,
                title: "Painéis Administrativos",
                items: [
                  "CMS personalizado",
                  "Login administrativo",
                  "Autonomia para o cliente",
                ],
              },
              {
                icon: <Search />,
                title: "SEO",
                items: [
                  "Integrações com Google",
                  "Performance orgânica",
                  "Otimização para buscas",
                ],
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="
                  sticky top-24 md:static
                  bg-[#111]
                  border border-white/5
                  rounded-2xl
                  p-6 md:p-8
                  transition-all duration-300
                "
              >
                <div className="space-y-4 md:space-y-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00a3ff]/10 text-[#00a3ff]">
                    {skill.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {skill.title}
                  </h3>

                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NOSSO TIME ===================== */}
      <section className="pt-16 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 lg:col-start-5 space-y-6 md:space-y-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300">
              NOSSO TIME
            </span>

            <p className="text-xl md:text-4xl font-medium leading-[1.2] tracking-tight text-gray-200 max-w-3xl mb-12 md:mb-20">
              Um time enxuto, multidisciplinar e focado em resultado.
            </p>
            <div className="flex flex-wrap gap-10 md:gap-16">
              {[
                { name: "Juliane Lima", role: "Comercial", image: Persona2 },
                {
                  name: "Aline Lima",
                  role: "Desenvolvimento",
                  image: Persona1,
                },
                {
                  name: "Jefferson",
                  role: "Design e Desenvolvedor",
                  image: Persona3,
                },
              ].map((person) => (
                <div key={person.name} className="flex items-center gap-4">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover"
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
    </div>
  );
}
