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
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <span className="text-black font-semibold tracking-wide  uppercase text-[24px]">
        Nossos Pacotes
      </span>
      <div className="grid md:grid-cols-3 gap-8 mb-20 ">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all shadow-sm"
          >
            <div className="mb-4">{plan.icon}</div>
            <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
            <ul className="space-y-3 mb-8">
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
            <button className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800">
              Solicitar Orçamento
            </button>
          </div>
        ))}
      </div>

      {/* Manutenção - O diferencial de recorrência */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-2">
            <Settings className="text-slate-400 w-5 h-5" />
            <h4 className="font-bold text-xl uppercase tracking-wider">
              Manutenção Inteligente
            </h4>
          </div>
          <p className="text-slate-600">
            Garanta suporte, segurança e atualizações constantes para o seu
            ativo digital. Se você não tem tempo para atualizar suas informaçoes
            semanais ou mensal, também ofereceços esse serviço, aqui cuidadmos
            de tudo. Confira:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto text-center">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <p className="text-xs text-slate-400 uppercase">
              Mensalidade de manutenção
            </p>
            <p className="font-bold text-slate-900 text-lg">
              R$ 150,00 - R$ 300
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            <p className="text-xs text-slate-400 uppercase">
              {" "}
              Manutenção Por Demanda
            </p>
            <p className="font-bold text-slate-900 text-lg">
              A partir de R$ 50
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-6 border-t">
          <p className="text-sm font-semibold mb-4 text-slate-400">
            Formas de Pagamento Aceitas:
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-lg">
              <Wallet className="w-4 h-4" /> Pix
            </div>
            <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-lg">
              <CreditCard className="w-4 h-4" /> Cartão
            </div>
            <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-lg">
              <Calendar className="w-4 h-4" /> Parcelamento
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
