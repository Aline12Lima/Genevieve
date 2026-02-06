import {
  ArrowUpRight,
  Settings,
  Globe,
  LayoutTemplate,
  MousePointer2,
} from "lucide-react";

const features = [
  {
    title: "DE",
    subtitle: "SIGN",
    lastPart: "ER",
    desc: "TEMPLATES MODERNOS.",
    type: "special",
    icon: <LayoutTemplate size={20} className="text-[#00a3ff]" />,
  },
  {
    title: "FORMU",
    subtitle: "LÁRIOS",
    desc: "QUALIDADE E DEDICAÇÃO.",
    type: "center",
    icon: <MousePointer2 size={20} className="text-[#00a3ff]" />,
  },
  {
    title: "SERVIÇOS",
    subtitle: "GOOGLE",
    desc: "MUITO MAIS.",
    type: "filled",
    icon: <Globe size={20} className="text-[#00a3ff]" />,
  },
  {
    title: "MANUTEN",
    subtitle: "ÇÃO",
    desc: "SUPORTE CONSTANTE.",
    type: "outline",
    icon: <Settings size={20} className="text-[#00a3ff]" />,
  },
];

export function DestackServices() {
  return (
    <section className="bg-black text-white py-12">
      <div
        className="
          grid
          grid-cols-1        /* Mobile: 1 coluna */
          sm:grid-cols-2      /* Versão Tablet: 2 colunas (2 em cima, 2 em baixo) */
          md:grid-cols-2      /* Mantém 2 colunas em tablets médios */
          lg:grid-cols-4      /* Desktop: Só aqui vira 4 colunas */
          gap-4
          px-4 md:px-12
          max-w-[1400px]
          mx-auto
        "
      >
        {features.map((f, i) => (
          <div
            key={i}
            className="
              bg-[#121212]
              rounded-2xl
              p-6
              h-[220px]          /* Altura fixa para manter o grid simétrico 2x2 */
              flex flex-col
              justify-between
              group
              hover:bg-[#181818]
              transition-all
              duration-500
              border border-white/[0.05]
            "
          >
            {/* Topo - Mantive seu código original */}
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div className="p-2 bg-white/5 rounded-lg w-fit">{f.icon}</div>
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] max-w-[100px]">
                  {f.desc}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={18} className="text-white/40" />
              </div>
            </div>

            {/* Base - Mantive sua lógica de tipografia sofisticada */}
            <div className="mt-auto">
              <h3 className="font-black uppercase tracking-tighter leading-[0.85] text-4xl md:text-3xl lg:text-1x">
                {f.title}
                <br />
                <span
                  style={{ WebkitTextStroke: "1px white" }}
                  className="text-transparent"
                >
                  {f.subtitle}
                </span>
                {f.lastPart && (
                  <>
                    <br />
                    {f.lastPart}
                  </>
                )}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Logos - Mantive inalterado */}
      {/* Logos */}
      <div className="mt-16 py-4 border-t border-white/5 bg-black">
        <div className="flex flex-wrap gap-6 md:gap-0 items-center justify-around opacity-20 grayscale px-6">
          <LogoItem text="Oral Care" icon="+" />
          <LogoItem text="Psi Rizzo" icon="◈" />
          <LogoItem text="ONG Ande" icon="◎" />

          {/* Estes dois ficarão escondidos no mobile e aparecerão no tablet/desktop */}
          <div className="hidden sm:block">
            <LogoItem text="Nutri" icon="✦" />
          </div>
          <div className="hidden sm:block">
            <LogoItem text="Genevieve" icon="✧" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* Diminuído o ícone e o texto no mobile (padrão) e aumentado no md (tablet/desktop) */}
      <span className="text-sm md:text-xl">{icon}</span>
      <span className="text-sm sm:text-lg md:text-2xl font-black tracking-tighter uppercase">
        {text}
      </span>
    </div>
  );
}
