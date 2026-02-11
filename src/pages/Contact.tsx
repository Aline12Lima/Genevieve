import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const { error } = await supabase.from("contacts").insert([
      {
        name,
        email,
        phone,
        message,
      },
    ]);

    if (error) {
      console.error(error);
      setIsSubmitting(false);
      return;
    }

    // limpa o formulário
    form.reset();

    // muda estado do botão
    setIsSent(true);
    setIsSubmitting(false);

    // opcional: voltar ao estado normal após 4s
    setTimeout(() => {
      setIsSent(false);
    }, 4000);
  }

  return (
    <div className="bg-black text-white pt-40 pb-20 px-6 md:px-12 selection:bg-white selection:text-black">
      {/* ===================== CTA ===================== */}
      <section className="py-32 border-t border-white/10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="px-6 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-[10vw] font-bold tracking-[-0.05em] uppercase leading-none mb-12">
            Vamos Trabalhar
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px #f5f5f5" }}
            >
              Juntos?
            </span>
          </h2>

          <a className="text-xl md:text-2xl border-b border-[#00a3ff] pb-2 hover:text-[#00a3ff] transition-colors">
            Mande um Olá →
          </a>
        </motion.div>
      </section>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="lg:col-span-7 bg-[#0a0a0a] p-8 md:p-12 border border-white/5"
      >
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* NOME - linha inteira */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
            >
              Nome
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              className="bg-transparent border-b border-white/10 py-2 outline-none focus:border-white transition-colors"
              required
            />
          </div>

          {/* TELEFONE + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* TELEFONE */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
              >
                Telefone / WhatsApp
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                className="bg-transparent border-b border-white/10 py-2 outline-none focus:border-white transition-colors"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
              >
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@exemplo.com"
                className="bg-transparent border-b border-white/10 py-2 outline-none focus:border-white transition-colors"
                required
              />
            </div>
          </div>

          {/* MENSAGEM */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[10px] font-bold uppercase tracking-widest text-gray-500"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Como podemos ajudar?"
              className="bg-transparent border-b border-white/10 py-2 outline-none focus:border-white transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSent}
            className={`w-full py-5 font-black uppercase tracking-widest text-[12px] transition-colors
              ${
                isSent
                  ? "bg-green-500 text-black"
                  : "bg-white text-black hover:bg-gray-200"
              }
              ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
                `}
          >
            {isSent ? "Enviado ✓" : isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* COLUNA ESQUERDA */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
                E-mail
              </h3>
              <p className="text-xl hover:text-gray-400 transition-colors">
                <a href="mailto:genevievewebsite@gmail.com">
                  genevievewebsite@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 mb-4">
                Social
              </h3>
              <ul className="flex flex-col gap-2 text-xl">
                <li className="hover:translate-x-2 transition-transform">
                  <a
                    href="https://www.instagram.com/genevieve_website/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="hover:translate-x-2 transition-transform">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
