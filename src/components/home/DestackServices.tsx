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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-12 max-w-[1400px] mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-[#121212] rounded-2xl p-6 h-[320px] flex flex-col justify-between group hover:bg-[#181818] transition-all duration-500 border border-white/[0.05]"
          >
            {/* Topo do Card: Ícone e Descrição menor */}
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div className="p-2 bg-white/5 rounded-lg w-fit">{f.icon}</div>
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em] leading-tight max-w-[100px]">
                  {f.desc}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-white/40" />
              </div>
            </div>

            {/* Base do Card: Tipografia Comprimida */}
            <div className="mt-auto">
              {f.type === "special" ? (
                <h3 className="text-5xl font-black tracking-tighter leading-[0.85] uppercase">
                  DE
                  <br />
                  <span
                    style={{ WebkitTextStroke: "1px white" }}
                    className="text-transparent"
                  >
                    SIGN
                  </span>
                  <br />
                  ER
                </h3>
              ) : (
                <h3 className="text-5xl font-black tracking-tighter leading-[0.85] uppercase">
                  {f.title}
                  <br />
                  <span
                    style={{ WebkitTextStroke: "1px white" }}
                    className="text-transparent"
                  >
                    {f.subtitle}
                  </span>
                </h3>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Faixa de Logos (Marquee Estático) */}
      <div className="mt-16 py-8 border-t border-white/5 bg-black">
        <div className="flex flex-wrap gap-8 md:gap-0 items-center justify-around opacity-20 grayscale px-6">
          <LogoItem text="Oral Care" icon="+" />
          <LogoItem text="Psi Rizzo" icon="◈" />
          <LogoItem text=" ONG Ande" icon="◎" />
          <LogoItem text="Nutri" icon="✦" />
          <LogoItem text="Genevieve" icon="✧" />
        </div>
      </div>
    </section>
  );
}

function LogoItem({ text, icon }: { text: string; icon: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <span className="text-2xl font-black tracking-tighter uppercase">
        {text}
      </span>
    </div>
  );
}
