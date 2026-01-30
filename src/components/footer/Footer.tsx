import { Instagram, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] border-t border-white/[0.05] pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-12 mb-16">
          {/* Coluna 1: Logo e Social */}
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-white text-2xl font-black tracking-tighter uppercase leading-none">
              GENE
              <span
                style={{ WebkitTextStroke: "1px white" }}
                className="text-transparent"
              >
                VIEVE
              </span>
            </h1>

            <div className="flex gap-4 text-white/80">
              <Instagram
                size={18}
                className="cursor-pointer hover:text-white transition-colors"
              />
              <Music2
                size={18}
                className="cursor-pointer hover:text-white transition-colors"
              />
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-[280px] font-normal">
              Soluções web modernas, pensadas para crescer.
            </p>
          </div>

          {/* Coluna 2: MAIN */}
          <div className="space-y-6">
            <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
              Páginas
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="hover:text-[#00a3ff] cursor-pointer transition-colors">
                O Que Fazemos
              </li>
              <li className="hover:text-[#00a3ff] cursor-pointer transition-colors">
                Sobre Nós
              </li>
              <li className="hover:text-[#00a3ff] cursor-pointer transition-colors">
                Portfolio
              </li>
              <li className="hover:text-[#00a3ff] cursor-pointer transition-colors">
                Orçamento
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">
            © 2026 GENEVIEVE. All Rights Reserved.
          </p>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest">
            Powered by Genevieve | Built For You
          </p>
        </div>
      </div>
    </footer>
  );
}
