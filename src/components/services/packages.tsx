import { CreditCard, Wallet, Calendar } from "lucide-react";
import {
  CheckCircle2,
  MessageSquare,
  Globe,
  TrendingUp,
  Settings,
} from "lucide-react";

const Packages = () => {
  const plans = [
    {
      title: "Landing Page Essencial",
      icon: <MessageSquare className="text-green-500" />,
      features: [
        "1 Página estratégica",
        "Copy focado em vendas",
        "Integração WhatsApp",
        "Integração Instagram",
        "Integração Linkedin",
        "SEO básico",
        "Assitência pós venda 14 dias",
        "Domínio Não está incluso",
        "Animações e efeitos básicos",
      ],
    },
    {
      title: "Site Profissional",
      icon: <Globe className="text-blue-500" />,
      features: [
        "Tudo do plano essencial +",
        "Até 5 páginas",
        "SEO Elaborado",
        "Formulários",
        "Integração com recebimento de  emails automaticos",
        "Prenchimento de planilhas automaticas",
        "Animaçoes  e efeitos avançados",
        "Primeiro ano de Domínio incluso",
      ],
    },
    {
      title: "Site Estratégico + Growth",
      icon: <TrendingUp className="text-red-500" />,
      features: [
        "Tudo do plano Essencial e Profissional incluso +",
        "Site completo",
        "Para mais de 5 páginas de navegações",
        "Google Business Completo",
        "Otimização de Conversão",
        "Painel Administrativo-CMS",
        " Incluso login admin",
        "Treinamento e manual de uso",
        "Assitência pós venda 30 dias",
        "Altonimia para editar seu site",
      ],
    },
  ];

  return (
    <section className="py-24 px-6  mx-auto bg-black text-center">
      {/* Título com a mesma fonte e estilo do Hero */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-200 mt-4 mb-16 leading-tight">
        Nossos Pacotes
      </h1>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm flex flex-col text-left"
          >
            <div className="mb-4">{plan.icon}</div>
            <h3 className="text-xl font-bold mb-4 text-slate-900">
              {plan.title}
            </h3>

            {/* ul com flex-grow para empurrar o botão para baixo */}
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  {feat}
                </li>
              ))}
            </ul>

            {/* mt-auto garante que todos os botões fiquem alinhados na mesma base */}
            <button className="w-full mt-auto py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-[#00a3ff] transition-all active:scale-95">
              Solicitar Orçamento
            </button>
          </div>
        ))}
      </div>

      {/* Manutenção Inteligente - Sem a linha superior */}
      <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <Settings className="text-[#00a3ff] w-5 h-5 animate-spin-slow" />
            <h4 className="font-bold text-white text-xl uppercase tracking-wider">
              Manutenção Inteligente
            </h4>
          </div>
          <p className="text-slate-400">
            Garanta suporte, segurança e atualizações constantes para o seu
            ativo digital. Cuidamos de tudo para que você foque no seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto text-center">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <p className="text-[10px] text-slate-500 uppercase font-bold">
              Mensalidade
            </p>
            <p className="font-bold text-slate-900 text-lg">R$ 150 - R$ 300</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <p className="text-[10px] text-slate-500 uppercase font-bold">
              Por Demanda
            </p>
            <p className="font-bold text-slate-900 text-lg">
              A partir de R$ 50
            </p>
          </div>
        </div>
      </div>

      {/* Formas de Pagamento Centralizadas */}
      <div className="mt-16  flex flex-col items-center">
        <p className="text-sm font-semibold mb-6 text-slate-400 uppercase tracking-widest">
          Formas de Pagamento Aceitas:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <Wallet className="w-4 h-4 text-[#00a3ff]" /> Pix
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <CreditCard className="w-4 h-4 text-[#00a3ff]" /> Cartão
          </div>
          <div className="flex items-center gap-2 text-slate-300 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            <Calendar className="w-4 h-4 text-[#00a3ff]" /> Parcelamento
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
