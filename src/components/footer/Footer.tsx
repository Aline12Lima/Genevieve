import { Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  function scrollToTop() {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/[0.05] pt-16 pb-10 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Grid Principal: 1 coluna no mobile, 3 colunas no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0 items-center mb-16">
          {/* LADO ESQUERDO: Genevieve */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            <button onClick={scrollToTop} className="group">
              <span className="text-white text-2xl font-black tracking-tighter uppercase leading-none block">
                <span
                  style={{ WebkitTextStroke: "1px white" }}
                  className="text-transparent"
                >
                  Genevieve
                </span>
                <br />
                Website & Landing Pages
              </span>
            </button>
            <p className="text-gray-500 text-xs uppercase tracking-widest leading-relaxed max-w-[250px]">
              Criação de Sites Estratégicos para Construção Civil e Engenharia
            </p>
          </div>

          {/* CENTRO: Redes Sociais */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
              Social
            </h3>
            <div className="flex gap-8 text-white/70">
              <a
                href="https://www.linkedin.com/company/genevieve-website/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#00a3ff] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/genevieve_website/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#00a3ff] transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5535997382410"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#00a3ff] transition-all duration-300 hover:scale-110"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* LADO DIREITO: Contato */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right space-y-4">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
              Contato
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:genevievewebsite@gmail.com"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                genevievewebsite@gmail.com
              </a>
              <a
                href="https://wa.me/5535997382410"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (window.gtag) {
                    window.gtag("event", "conversion", {
                      send_to: "AW-17947178216/KDJnCL3o7pscEOjp8O1C",
                    });
                  }
                }}
              >
                +55 35 99738-2410
              </a>
            </div>
            <span className="text-zinc-600 text-[10px] font-mono uppercase">
              Brasil & Portugal
            </span>
          </div>
        </div>

        {/* Linha inferior centralizada */}
        <div className="border-t border-white/5 pt-8 w-full flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
          <p>© 2026 Genevieve. Todos os direitos reservados.</p>
          <p className="opacity-70">Feito por Aline Lima · Tech Lead</p>
        </div>
      </div>
    </footer>
  );
}
