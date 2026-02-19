import { motion } from "framer-motion";

import imagefuture1 from "../../assets/nichos/JBHero.png";
import imagefuture2 from "../../assets/nichos/JBSobre.png";
import imagefuture3 from "../../assets/nichos/JBForm.png";
import imagefuture4 from "../../assets/nichos/JBProjetos.png";

import imagefuture5 from "../../assets/nichos/terapeutaHero.png";
import imagefuture6 from "../../assets/nichos/nutri.png";
import imagefuture7 from "../../assets/nichos/terapeutaServices.png";
import imagefuture8 from "../../assets/nichos/terapeutaSobre.png";

import imagefuture9 from "../../assets/nichos/salonHero.png";
import imagefuture10 from "../../assets/nichos/SalonSection.png";
import imagefuture11 from "../../assets/nichos/SalonSobre.png";
import imagefuture12 from "../../assets/nichos/Saloninsta.png";

type NichoProps = {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  direction?: "left" | "right";
  icon: string;
  iconBgColor?: string;
  sectionBgColor?: string;
  link?: string;
};

function NichoRow({
  title,
  subtitle,
  description,
  images,
  direction = "left",
  icon,
  iconBgColor = "bg-white",
  sectionBgColor = "transparent",
  link,
}: NichoProps) {
  const isLeft = direction === "left";
  const duplicatedImages = [...images, ...images];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="space-y-8 overflow-hidden py-12"
      style={{ backgroundColor: sectionBgColor }}
    >
      {/* Header do Nicho */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-6 md:px-12 lg:px-16">
        <div>
          <h3
            className={`text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight ${
              sectionBgColor === "#F2F2F2" ? "text-black" : "text-[#F2F2F2]"
            }`}
          >
            {title}
          </h3>

          <div className="flex items-center gap-3 mt-2">
            <div
              className={`w-14 h-14 rounded-2xl ${iconBgColor} flex items-center justify-center flex-shrink-0`}
            >
              <img
                src={icon}
                loading="lazy"
                alt="Site para empreiteiros, engenharia, arquitetos"
                className="w-8 h-8"
              />
            </div>
            <p
              className={`text-lg md:text-xl font-light ${
                sectionBgColor === "#F2F2F2" ? "text-black" : "text-gray-300"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <p
          className={`max-w-md text-sm md:text-base leading-relaxed md:text-right ${
            sectionBgColor === "#F2F2F2" ? "text-black" : "text-gray-300"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Carrossel */}
      <div className="relative w-full overflow-hidden py-4">
        <motion.div
          className="flex gap-6 md:gap-8 w-max"
          animate={{
            x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 35,
            ease: "linear",
          }}
        >
          {duplicatedImages.map((img, index) => (
            <div
              key={`${img}-${index}`}
              className="relative flex-shrink-0 w-[420px] md:w-[400px] lg:w-[550px] aspect-[14/10] group"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
                <img
                  src={img}
                  loading="lazy"
                  alt={`${title} – Projeto site para construção civil  ${(index % images.length) + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {link && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver template de ${title}`}
                      className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/40 rounded-lg text-white text-xs font-bold uppercase tracking-widest hover:bg-white/30 transition-all duration-300"
                    >
                      Ver Projeto
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Nichos() {
  return (
    <section
      id="nichos"
      className="relative bg-black text-gray-200 py-4 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#23007B]/5 to-transparent pointer-events-none" />

      <div className="relative space-y-16 md:space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 px-6"
        >
          <h2 className=" mt-8 text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-black text-gray-200 uppercase leading-none">
            Criação de Sites para Setores que <br /> Exigem <br /> Performance
          </h2>
          <p className="text-xl md:text-2xl lg:text-5xl text-gray-300 font-light">
            Precisão, clareza e intenção.
          </p>
        </motion.div>

        <NichoRow
          title="Construção Civil"
          subtitle="Obras • Engenharia • Infraestrutura"
          sectionBgColor="#141414"
          description="Projetos sólidos começam com posicionamento sólido. Criamos websites que transmitem credibilidade, estrutura e capacidade técnica desde o primeiro clique."
          images={[imagefuture1, imagefuture2, imagefuture3, imagefuture4]}
          icon="/icons/building-office.svg"
          link="https://jb-construtech.vercel.app/"
        />

        <NichoRow
          title="Profissionais"
          subtitle="Psicólogos • Dentistas • Nutricionistas"
          description="Seu Portfólio precisa passar confiança e profissionalismo. Desenvolvemos experiências digitais que acolhem, informam e geram segurança antes mesmo do primeiro cliente."
          direction="right"
          sectionBgColor="#262727"
          iconBgColor="bg-white"
          images={[imagefuture5, imagefuture6, imagefuture7, imagefuture8]}
          icon="/icons/id-card-lanyard.svg"
          link="https://psi-angela.alinelima.dev/"
        />

        <NichoRow
          title="Estética & Beleza"
          subtitle="Salões • Clínicas Estéticas • Studios"
          sectionBgColor="#1b1b1b"
          description="Imagem é posicionamento. Criamos websites que elevam percepção de valor e transformam visitas em agendamentos."
          images={[imagefuture9, imagefuture10, imagefuture11, imagefuture12]}
          icon="/icons/brush.svg"
          link="https://salon-x-nu.vercel.app/"
        />
      </div>
    </section>
  );
}
