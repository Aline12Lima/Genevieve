import { useState } from "react";
import {
  Send,
  Globe,
  Database,
  Search,
  Layout,
  MessageCircle,
  Plus, // Adicionado para o ícone de X
  CheckCircle2, // Adicionado para o ícone de sucesso
} from "lucide-react";
import { supabase } from "../../lib/supabase";

export function FormServices() {
  const [showOutroObjetivo, setShowOutroObjetivo] = useState(false);
  const [showOutraEstrutura, setShowOutraEstrutura] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      empresa: formData.get("empresa"),
      nicho: formData.get("nicho"),
      publico_alvo: formData.get("publico_alvo"),
      regiao: formData.get("regiao"),
      como_vende: formData.get("como_vende"),
      servicos_destaque: formData.get("servicos_destaque"),
      diferencial: formData.get("diferencial"),
      objetivos: formData.getAll("objetivos"),
      outro_objetivo: formData.get("outro_objetivo"),
      marketing_atual: [
        formData.get("anuncia") ? `Anuncia: ${formData.get("anuncia")}` : "",
        formData.get("redes") ? `Redes: ${formData.get("redes")}` : "",
        formData.get("google") ? `Google: ${formData.get("google")}` : "",
        formData.get("lista") ? `Lista: ${formData.get("lista")}` : "",
      ].filter(Boolean),
      identidade_visual: `Logo: ${formData.get("logo")} | Cores: ${formData.get("cores")}`,
      concorrentes: formData.get("concorrentes"),
      sites_admirados: formData.get("sites_admirados"),
      estrutura_desejada: formData.getAll("estrutura_desejada"),
      outra_estrutura: formData.get("outra_estrutura"),
      possui_dominio: formData.get("possui_dominio"),
      destino_dados: formData.get("destino_dados"),
      precisa_seo: formData.get("precisa_seo"),
      quantidade_paginas: formData.get("quantidade_paginas"),
    };

    const { error } = await supabase.from("briefing").insert([payload]);

    if (error) {
      console.error(error);
      alert("Erro ao enviar: " + error.message);
      setIsSubmitting(false);
      return;
    }

    form.reset();
    setIsSent(true);
    setIsSubmitting(false);
    // Removido o setTimeout para que a mensagem não suma sozinha
  }

  return (
    <section className="py-20 px-6 bg-black min-h-screen selection:bg-white selection:text-black">
      <div className="max-w-4xl mt-32 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white font-beauty tracking-tight">
            Briefing de Diagnóstico Estratégico
          </h2>
          <p className="text-gray-400 italic max-w-2xl mx-auto">
            Forneça os detalhes do seu projeto abaixo. Nossa equipe analisará
            seu perfil para apresentar uma solução sob medida.
          </p>
        </div>

        {!isSent ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-12 text-slate-900"
          >
            {/* 01. SOBRE O NEGÓCIO */}
            <div className="space-y-8">
              <h3 className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em] border-b pb-2">
                🔹 01. Sobre o Negócio
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Nome da Empresa
                  </label>
                  <input
                    name="empresa"
                    type="text"
                    placeholder="Nome da empresa"
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-100"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Nicho / Ramo
                  </label>
                  <input
                    name="nicho"
                    type="text"
                    placeholder="Ex: Clínica Odontológica"
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Produtos ou Serviços de Destaque
                  </label>
                  <input
                    name="servicos_destaque"
                    type="text"
                    placeholder="O que você quer vender no site?"
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Público-alvo
                  </label>
                  <input
                    name="publico_alvo"
                    type="text"
                    placeholder="Quem é o seu cliente ideal?"
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Cidade/Região de Atuação
                  </label>
                  <input
                    name="regiao"
                    type="text"
                    placeholder="Onde você atua?"
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-100"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Como vende hoje?
                  </label>
                  <input
                    name="como_vende"
                    type="text"
                    placeholder="Ex: Instagram, Indicações..."
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-100"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase text-slate-500">
                  Diferencial / Onde divulga hoje?
                </label>
                <textarea
                  name="diferencial"
                  placeholder="Quais os diferenciais do seu negócio?"
                  className="w-full p-4 bg-slate-50 rounded-xl h-24 focus:ring-2 focus:ring-blue-500 outline-none resize-none border border-slate-100"
                />
              </div>
            </div>

            {/* 02. OBJETIVO DO SITE */}
            <div className="space-y-6">
              <h3 className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em] border-b pb-2">
                🔹 02. Objetivo do Site
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Gerar leads?",
                  "Autoridade?",
                  "Vender produto?",
                  "Agendamento?",
                  "WhatsApp direto?",
                ].map((obj) => (
                  <label
                    key={obj}
                    className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <input
                      name="objetivos"
                      value={obj}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300"
                    />
                    <span className="text-sm text-slate-700">{obj}</span>
                  </label>
                ))}
                <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 border border-dashed border-blue-200">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                    onChange={(e) => setShowOutroObjetivo(e.target.checked)}
                  />
                  <span className="text-sm text-slate-700 font-bold">
                    Outro?
                  </span>
                </label>
              </div>
              {showOutroObjetivo && (
                <input
                  name="outro_objetivo"
                  type="text"
                  placeholder="Descreva seu outro objetivo..."
                  className="w-full p-4 bg-blue-50 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none animate-in fade-in zoom-in duration-300"
                />
              )}
            </div>

            {/* 03. MARKETING E REFERÊNCIAS */}
            <div className="space-y-8">
              <h3 className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em] border-b pb-2">
                🔹 03. Marketing e Identidade
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Já anuncia no Google ou Meta?
                  </label>
                  <input
                    name="anuncia"
                    type="text"
                    placeholder="Ex: Google Ads, Facebook Ads ou ainda não anuncio"
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Redes sociais da empresa
                  </label>
                  <input
                    name="redes"
                    type="text"
                    placeholder="Ex: Instagram, LinkedIn, Facebook"
                    className="w-full p-4 bg-slate-50 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none border border-slate-100"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Logotipo
                  </label>
                  <select
                    name="logo"
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Já possui logo?</option>
                    <option value="sim">Sim (Enviarei pelo WhatsApp)</option>
                    <option value="nao">Não (Preciso criar)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500">
                    Cores de Preferência
                  </label>
                  <input
                    name="cores"
                    type="text"
                    placeholder="Ex: Azul e Branco"
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase text-slate-500">
                  Concorrentes que você admira
                </label>
                <textarea
                  name="concorrentes"
                  placeholder="Ex: Empresa X, Empresa Y ou perfis que considera referência"
                  className="w-full p-4 bg-slate-50 rounded-xl h-24 border border-slate-100 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-bold uppercase text-slate-500">
                  Links de sites que você gosta do visual
                </label>
                <textarea
                  name="sites_admirados"
                  placeholder="Cole aqui os links de sites que servem como inspiração"
                  className="w-full p-4 bg-slate-50 rounded-xl h-24 border border-slate-100 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>

            {/* 04. LOGÍSTICA TÉCNICA */}
            <div className="space-y-8">
              <h3 className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em] border-b pb-2">
                🔹 04. Infraestrutura e SEO
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500 flex items-center gap-2">
                    <Globe size={12} /> Domínio
                  </label>
                  <select
                    name="possui_dominio"
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Já possui domínio?</option>
                    <option value="sim">Sim, já tenho</option>
                    <option value="nao">Não, preciso registrar</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500 flex items-center gap-2">
                    <Search size={12} /> SEO (Google)
                  </label>
                  <select
                    name="precisa_seo"
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Quer aparecer nas buscas?</option>
                    <option value="essencial">Sim, é prioridade</option>
                    <option value="opcional">No momento não</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500 flex items-center gap-2">
                    <Database size={12} /> Destino dos Dados
                  </label>
                  <select
                    name="destino_dados"
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Onde quer receber leads?</option>
                    <option value="planilha">Planilha Supabase</option>
                    <option value="email">E-mail Corporativo</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-bold uppercase text-slate-500 flex items-center gap-2">
                    <Layout size={12} /> Formato do Projeto
                  </label>
                  <select
                    name="quantidade_paginas"
                    className="w-full p-4 bg-slate-50 rounded-xl border border-slate-100 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="">Páginas</option>
                    <option value="unica">Landing Page (Única)</option>
                    <option value="multiplas">Site Institucional</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 05. ESTRUTURA DESEJADA */}
            <div className="space-y-6">
              <h3 className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em] border-b pb-2">
                🔹 05. Estrutura Desejada
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Landing Page?",
                  "Site Institucional?",
                  "Blog?",
                  "Área Administrativa?",
                  "Integração WhatsApp?",
                  "Integração CRM?",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 transition-colors"
                  >
                    <input
                      name="estrutura_desejada"
                      value={item}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded border-gray-300"
                    />
                    <span className="text-sm text-slate-700">{item}</span>
                  </label>
                ))}
                <label className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100 border border-dashed border-blue-200">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                    onChange={(e) => setShowOutraEstrutura(e.target.checked)}
                  />
                  <span className="text-sm text-slate-700 font-bold">
                    Outro?
                  </span>
                </label>
              </div>
              {showOutraEstrutura && (
                <input
                  name="outra_estrutura"
                  type="text"
                  placeholder="Qual outra funcionalidade deseja?"
                  className="w-full p-4 bg-blue-50 border border-blue-100 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none animate-in fade-in zoom-in duration-300"
                />
              )}
            </div>

            <div className="pt-10 border-t flex justify-center">
              <button
                disabled={isSubmitting || isSent}
                type="submit"
                className={`w-full md:w-auto px-16 py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl active:scale-95 group ${isSent ? "bg-green-500 text-black" : "bg-black text-white hover:bg-[#00a3ff]"} ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {isSent
                  ? "Briefing Enviado ✓"
                  : isSubmitting
                    ? "Enviando..."
                    : "Solicitar Proposta Estratégica"}
                {!isSubmitting && !isSent && (
                  <Send
                    size={32}
                    className="hidden md:block group-hover:translate-x-1 transition-transform"
                  />
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="relative bg-white p-12 rounded-[2rem] text-center shadow-2xl animate-in fade-in zoom-in">
            {/* Botão X para fechar manualmente adicionado aqui */}
            <button
              onClick={() => setIsSent(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2"
            >
              <Plus size={24} className="rotate-45" />
            </button>

            {/* Ícone CheckCircle2 adicionado aqui para evitar visual torto */}
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-green-500" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4 uppercase tracking-tighter">
              Briefing enviado com sucesso!
            </h3>
            <p className="text-slate-600 mb-8 max-w-sm mx-auto">
              Sua solicitação estratégica foi salva. Agora, envie seu logotipo
              pelo WhatsApp para agilizar o início do projeto.
            </p>
            <a
              href="https://wa.me/5535997382410?text=Olá! Acabei de enviar o briefing estratégico e gostaria de dar andamento no envio do Logo.. "
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle size={20} /> Enviar Logo via WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default FormServices;
