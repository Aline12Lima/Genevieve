import { motion } from "framer-motion";

export function Contact() {
  return (
    <div className="bg-black text-white pt-40 pb-20 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* COLUNA ESQUERDA: INFOS */}
        <div className="lg:col-span-5 space-y-12">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-[12vw] md:text-[6vw] font-black leading-none tracking-tighter uppercase"
          >
            Vamos <br />
            <span className="text-transparent text-stroke">Conversar</span>
          </motion.h1>

          <div className="space-y-8">
            {/* EMAIL */}
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

            {/* SOCIAL */}
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

        {/* COLUNA DIREITA: FORMULÁRIO */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 bg-[#0a0a0a] p-8 md:p-12 border border-white/5"
        >
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* NOME */}
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

            {/* BOTÃO */}
            <button
              type="submit"
              className="w-full py-5 bg-white text-black font-black uppercase tracking-widest text-[12px] hover:bg-gray-200 transition-colors"
            >
              Enviar Proposta
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
