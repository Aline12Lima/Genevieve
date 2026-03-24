import { motion } from "framer-motion";
import {
  Globe,
  Zap,
  MessageSquare,
  BarChart3,
  Paintbrush,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Sites & Landing Pages",
    icon: <Globe className="text-[#00a3ff]" />,
    setup: "Projeto Único",
    maintenance: "Manutenção Mensal",
    description:
      "Desenvolvimento de alta performance com foco em conversão de clientes.",
    includes: [
      "Hospedagem inclusa",
      "Domínio (.com.br)",
      "Licenças de Software",
      "Suporte Técnico Ativo",
      "Certificado SSL (Segurança)",
    ],
  },
  {
    title: "Automação & Dados",
    icon: <Zap className="text-yellow-500" />,
    setup: "Implementação",
    maintenance: "Suporte Técnico",
    description:
      "Integração de formulários com planilhas e sistemas que trabalham sozinhos.",
    includes: [
      "Garantia de funcionamento",
      "Conexão com Planilhas Google ",
      "Planilhas Preenchidas Automáticas",
      "Backup de Dados",
      "Atualizações de API",
    ],
  },
  {
    title: "Atendimento Automático",
    icon: <MessageSquare className="text-green-500" />,
    setup: "Configuração",
    maintenance: "Gestão de Fluxo",
    description:
      "Sistemas de resposta imediata para não perder nenhum lead no WhatsApp.",
    includes: [
      "Chatbot Inteligente",
      "Triagem de Clientes",
      "Escalabilidade",
      "Relatórios de Contatos",
      "Otimização de Mensagens",
    ],
  },
  {
    title: "Tráfego Pago (Ads)",
    icon: <BarChart3 className="text-red-500" />,
    setup: "Setup de Conta",
    maintenance: "Gestão Mensal",
    description:
      "Anúncios estratégicos no Google e Meta para atrair quem quer contratar.",
    includes: [
      "Análise de Concorrentes",
      "Criação de Criativos",
      "Otimização de Verba",
      "Pixel & API de Conversão",
      "Relatório de ROI",
    ],
  },
  {
    title: "Identidade & Marca",
    icon: <Paintbrush className="text-purple-500" />,
    setup: "Projeto Único",
    maintenance: "Sem Mensalidade",
    description:
      "Criação de logotipos e identidade visual para empresas de engenharia.",
    includes: [
      "Manual da Marca",
      "Logotipo Vetorizado",
      "Paleta de Cores",
      "Tipografia Exclusiva",
      "Aplicações de Papelaria",
    ],
  },
];

export default function DetailedServices() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl hover:border-[#00a3ff]/40 transition-all group"
          >
            <div className="mb-6 p-4 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">
              {s.title}
            </h3>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
              {s.description}
            </p>

            <div className="flex gap-2 mb-8">
              <span className="text-[10px] bg-[#00a3ff]/10 text-[#00a3ff] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {s.setup}
              </span>
              {s.maintenance !== "Sem Mensalidade" && (
                <span className="text-[10px] bg-white/5 text-zinc-400 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  {s.maintenance}
                </span>
              )}
            </div>

            <ul className="space-y-3">
              {s.includes.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-xs text-zinc-400"
                >
                  <CheckCircle2 size={14} className="text-[#00a3ff]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
