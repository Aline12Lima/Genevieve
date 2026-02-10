import { Instagram, MessageCircle } from "lucide-react";
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
    <footer className="w-full bg-[#0a0a0a] border-t border-white/[0.05] pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Grid principal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Logo + Descrição */}
          <div className="space-y-6">
            <h1 className="text-white text-2xl font-black tracking-tighter uppercase leading-none">
              GENE
              <span
                style={{ WebkitTextStroke: "1px white" }}
                className="text-transparent"
              >
                VIEVE
              </span>
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Soluções de Lading Pages modernas, <br /> pensadas para crescer.
              <br /> Portifólios, Cardápios e muito mais.
            </p>
          </div>

          {/* Coluna 2: Páginas */}
          <div className="space-y-6">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
              Páginas
            </h3>

            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[var(--color-blue)] transition-colors"
                >
                  Início
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("nichos")}
                  className="hover:text-[var(--color-blue)] transition-colors"
                >
                  Serviços
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="hover:text-[var(--color-blue)] transition-colors"
                >
                  Projetos
                </button>
              </li>

              <li>
                <button
                  onClick={() => navigate("/contato")}
                  className="hover:text-[#00a3ff] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="space-y-6">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
              Redes Sociais
            </h3>

            <div className="flex gap-6 text-white/80">
              <a
                href="https://www.instagram.com/genevieve_website/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Genevieve Website"
                className="hover:text-[var(--color-blue)] transition-colors"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://wa.me/5535997382410"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Genevieve Website"
                className="hover:text-[var(--color-blue)] transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Coluna 4: Contato */}
          <div className="space-y-6">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
              Contato
            </h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="mailto:genevievewebsite@gmail.com">
                genevievewebsite@gmail.com
              </a>
              <a href="tel:+5535997382410">+55 35 99738-2410</a>
              <span>Brasil</span>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">
            © 2026 Genevieve. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">
            Criado por Genevieve · Para Você
          </p>
        </div>
      </div>
    </footer>
  );
}
