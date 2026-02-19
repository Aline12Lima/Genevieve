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

  function scrollToSection(id: string) {
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 140;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 400);
    } else {
      scroll();
    }
  }

  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/[0.05] pt-16 pb-10 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Grid principal centralizado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-16 w-full justify-items-center">
          {/* Coluna 1: Logo & Descrição */}
          <div className="flex flex-col items-center space-y-6">
            <span className="text-white text-3xl md:text-2xl font-black tracking-tighter uppercase leading-none">
              <span
                style={{ WebkitTextStroke: "1px white" }}
                className="text-transparent"
              >
                Genevieve <br />
              </span>
              Website & Landing Pages
            </span>
            <h1 className="text-gray-400 text-base md:text-sm leading-relaxed max-w-xs mt-4">
              Criação de Sites Estratégicos para Construção Civil e Engenharia
            </h1>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-white text-xs md:text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
              Navegação
            </h3>

            <ul className="flex flex-col gap-4 text-base md:text-sm text-gray-400 items-center">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[#00a3ff] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="hover:text-[#00a3ff] transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="hover:text-[#00a3ff] transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("nichos")}
                  className="hover:text-[#00a3ff] transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/blog")}
                  className="hover:text-[#00a3ff] transition-colors"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contato")}
                  className="hover:text-[#00a3ff] transition-colors font-bold"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="flex flex-col items-center space-y-6">
            <h3 className="text-white text-xs md:text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
              Redes Sociais
            </h3>
            <div className="flex gap-6 text-white/80">
              <a
                href="https://www.linkedin.com/company/genevieve-website/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Genevieve Website"
                className="hover:text-[#00a3ff] transition-colors"
              >
                <Linkedin size={22} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a
                href="https://www.instagram.com/genevieve_website/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Genevieve Website"
                className="hover:text-[#00a3ff] transition-colors"
              >
                <Instagram size={22} className="md:w-[18px] md:h-[18px]" />
              </a>
              <a
                href="https://wa.me/5535997382410"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Genevieve Website"
                className="hover:text-[#00a3ff] transition-colors"
              >
                <MessageCircle size={22} className="md:w-[18px] md:h-[18px]" />
              </a>
            </div>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div className="flex flex-col items-center space-y-6 text-gray-400 text-base md:text-sm">
            <h3 className="text-white text-xs md:text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
              Contato
            </h3>
            <a
              href="mailto:genevievewebsite@gmail.com"
              className="hover:text-[#00a3ff] transition-colors"
            >
              genevievewebsite@gmail.com
            </a>
            <a
              href="tel:+5535997382410"
              className="hover:text-[#00a3ff] transition-colors"
            >
              +55 35 99738-2410
            </a>
            <span>Brasil</span>
          </div>
        </div>

        {/* Linha inferior centralizada */}
        <div className="border-t border-white/10 pt-8 w-full flex flex-col items-center gap-4 text-[11px] text-gray-500 uppercase tracking-widest">
          <p>© 2026 Genevieve. Todos os direitos reservados.</p>
          <p>Feito por Aline Lima · Tech Lead</p>
        </div>
      </div>
    </footer>
  );
}
