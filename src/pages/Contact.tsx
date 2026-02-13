import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Mapeamento mantido para sua tabela existente
    const payload = {
      empresa: formData.get("empresa"),
      nicho: formData.get("nicho"),
      publico_alvo: formData.get("publico_alvo"),
      regiao: formData.get("regiao"),
      como_vende: formData.get("como_vende"),
      servicos_destaque: formData.get("servicos_destaque"),
      diferencial: formData.get("diferencial"),
    };

    const { error } = await supabase.from("contact").insert([payload]);

    if (error) {
      console.error(error);
      setIsSubmitting(false);
      return;
    }

    form.reset();
    setIsSent(true);
    setIsSubmitting(false);
    setTimeout(() => setIsSent(false), 5000);
  }

  return (
    <div className="bg-black text-white selection:bg-[#00a3ff] selection:text-white pt-40 pb-20">
      <section className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LADO ESQUERDO: INFOS (ESTILO AGENTIX) */}
          <motion.div {...fadeInUp} className="space-y-12">
            <div>
              <span className="flex items-center gap-2 text-[#00a3ff] font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                <Check size={12} /> Contato Directo
              </span>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
                Vamos <br />{" "}
                <span className="text-[#00a3ff] font-beauty lowercase font-light">
                  Conversar
                </span>
              </h1>
            </div>

            <div className="space-y-8">
              <div className="group cursor-pointer">
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">
                  E-mail
                </p>
                <div className="flex items-center gap-3 text-2xl font-medium group-hover:text-[#00a3ff] transition-colors">
                  genevievewebsite@gmail.com{" "}
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </div>
              </div>

              <div className="group cursor-pointer">
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-2">
                  WhatsApp
                </p>
                <div className="flex items-center gap-3 text-2xl font-medium group-hover:text-[#00a3ff] transition-colors">
                  +55 35 997382410{" "}
                  <ArrowUpRight
                    size={20}
                    className="opacity-0 group-hover:opacity-100 transition-all"
                  />
                </div>
              </div>

              <div className="pt-8">
                <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-6">
                  Redes Sociais
                </p>
                <div className="flex gap-6">
                  {["Instagram", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm font-bold uppercase tracking-wider hover:text-[#00a3ff] transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* LADO DIREITO: FORMULÁRIO (CLEAN & PREMIUM) */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[2.5rem]"
          >
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Seu Nome / Empresa
                    </label>
                    <input
                      name="empresa"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#00a3ff] transition-colors"
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Nicho do Negócio
                    </label>
                    <input
                      name="nicho"
                      type="text"
                      className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#00a3ff] transition-colors"
                      placeholder="Ex: Clínica, Advocacia..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      E-mail Corporativo
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#00a3ff] transition-colors placeholder:text-gray-800"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      WhatsApp
                    </label>
                    <input
                      name="telefone"
                      type="tel"
                      required
                      className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-[#00a3ff] transition-colors placeholder:text-gray-800"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Sua Mensagem / Dúvida
                  </label>
                  <textarea
                    name="diferencial"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#00a3ff] transition-colors h-32 resize-none"
                    placeholder="Como podemos te ajudar hoje?"
                  />
                </div>

                {/* Inputs invisíveis para manter compatibilidade com sua tabela caso queira enviar campos vazios */}
                <input
                  type="hidden"
                  name="publico_alvo"
                  value="Contato Direto"
                />
                <input
                  type="hidden"
                  name="servicos_destaque"
                  value="Dúvida Geral"
                />

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full md:w-auto px-12 py-5 bg-white text-black rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#00a3ff] hover:text-white transition-all duration-500 group"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-[#00a3ff]/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-[#00a3ff]" size={40} />
                </div>
                <h3 className="text-3xl font-bold mb-2 uppercase">
                  Mensagem Recebida
                </h3>
                <p className="text-gray-500">
                  Em breve entraremos em contato com você.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
