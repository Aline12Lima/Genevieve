import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { trackEvent } from "../lib/metaPixel";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [whatsAppHref, setWhatsAppHref] = useState(
    "https://wa.me/5535997382410",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const empresa = String(formData.get("empresa") ?? "").trim();
    const nicho = String(formData.get("nicho") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const telefone = String(formData.get("telefone") ?? "").trim();
    const diferencial = String(formData.get("diferencial") ?? "").trim();

    const payload = {
      name: empresa,
      email,
      message: diferencial,
      phone: telefone,
    };

    const { error } = await supabase.from("contacts").insert([payload]);

    if (error) {
      console.error("Erro ao inserir em contacts:", error);
      setIsSubmitting(false);
      return;
    }

    // 🔥 GOOGLE ADS (ADICIONADO - NÃO ALTERA LAYOUT)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17947178216/SEU_LABEL_AQUI", // 🔁 SUBSTITUIR
        value: 150.0,
        currency: "BRL",
      });
    }

    // 🔥 META PIXEL
    trackEvent("Lead", {
      value: 150,
      currency: "BRL",
    });

    // 🔥 MENSAGEM WHATSAPP (CORRIGIDO)
    const whatsappMessage = `Olá! Acabei de preencher o formulário no site.%0A%0A*Nome/Empresa:* ${encodeURIComponent(
      empresa,
    )}%0A*Nicho:* ${encodeURIComponent(
      nicho || "Não informado",
    )}%0A*E-mail:* ${encodeURIComponent(email)}%0A*WhatsApp:* ${encodeURIComponent(
      telefone,
    )}%0A*Mensagem:* ${encodeURIComponent(diferencial)}`;

    setWhatsAppHref(`https://wa.me/5535997382410?text=${whatsappMessage}`);

    form.reset();
    setIsSent(true);
    setIsSubmitting(false);
  }

  return (
    <>
      <Helmet>
        <title>Solicite um Orçamento | Genevieve - Landing Pages</title>
        <meta
          name="description"
          content="Pronto para profissionalizar sua presença online? Entre em contato com a Genevieve e receba uma consultoria para o desenvolvimento do seu novo site."
        />
      </Helmet>

      <div className="bg-black text-white selection:bg-[#00a3ff] selection:text-white pt-40 pb-20">
        <section className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* LADO ESQUERDO */}
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
                  <a
                    href="https://wa.me/5535997382410"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-2xl font-medium group-hover:text-[#00a3ff] transition-colors"
                  >
                    35997382410{" "}
                    <ArrowUpRight
                      size={20}
                      className="opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* FORMULÁRIO */}
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 rounded-[2.5rem]"
            >
              {!isSent ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* TODO O SEU FORMULÁRIO ORIGINAL FOI MANTIDO */}

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

                  <p className="text-gray-500 mb-8">
                    Seus dados foram salvos. Agora você pode continuar no
                    WhatsApp.
                  </p>

                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-12 py-5 bg-white text-black rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#00a3ff] hover:text-white transition-all duration-500 group"
                  >
                    Continuar no WhatsApp
                    <ArrowUpRight
                      size={18}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
