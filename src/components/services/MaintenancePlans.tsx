import { Shield, PenTool, Zap } from "lucide-react";

const plans = [
  {
    name: "Estabilidade Técnica",
    price: "Essencial",
    icon: <Shield className="text-[#00a3ff]" />,
    desc: "Para quem precisa do site sempre online e seguro.",
    features: [
      "Hospedagem Premium",
      "Certificado SSL",
      "Suporte contra Bugs",
      "Backups Semanais",
      "Monitoramento 24/7",
    ],
  },
  {
    name: "Gestão Ativa",
    price: "Mais Popular",
    icon: <PenTool className="text-purple-500" />,
    desc: "Para empresas que mudam informações e fotos com frequência.",
    features: [
      "Tudo do Estabilidade",
      "Até 4 Edições mensais",
      "Alteração de Textos/Fotos",
      "Otimização de Velocidade",
      "Suporte Prioritário",
    ],
  },
  {
    name: "Crescimento (Growth)",
    price: "Full Service",
    icon: <Zap className="text-yellow-500" />,
    desc: "Para quem quer evolução constante do ativo digital.",
    features: [
      "Tudo do Gestão Ativa",
      "Edições Ilimitadas",
      "Novas Seções/Landing Pages",
      "Relatório de Acessos",
      "Consultoria Mensal",
    ],
  },
];

export default function MaintenancePlans() {
  return (
    <section className="py-24 bg-white rounded-[4rem] mx-6 mb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#00a3ff] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
            Planos Mensais
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter">
            Manutenção Inteligente
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl border border-zinc-100 flex flex-col hover:shadow-xl transition-all"
            >
              <div className="mb-6">{p.icon}</div>
              <span className="text-[#00a3ff] text-[10px] font-black uppercase tracking-widest mb-2">
                {p.price}
              </span>
              <h4 className="text-2xl font-bold text-black mb-4">{p.name}</h4>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                {p.desc}
              </p>

              <ul className="space-y-4 mb-10 flex-grow">
                {p.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-zinc-700 font-medium"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00a3ff]" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-black text-white rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-[#00a3ff] transition-colors">
                Assinar Plano
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
