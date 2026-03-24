import { createPortal } from "react-dom";
import { MessageCircle } from "lucide-react";

export function CTAFlutuante() {
  if (typeof document === "undefined") return null;

  // Link formatado com seu número e mensagem inicial
  const whatsappUrl =
    "https://wa.me/5535997382410?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20Genevieve.";

  return createPortal(
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-10 right-6
        z-[9999]
        flex items-center gap-3
        px-8 py-4
        rounded-full
        bg-[#25D366] 
        text-white
        text-[12px]
        font-black
        uppercase
        tracking-widest
        shadow-[0_20px_40px_rgba(37,211,102,0.3)]
        hover:bg-[#1ebd5e]
        hover:-translate-y-1
        active:scale-95
        transition-all
        duration-300
      "
    >
      <MessageCircle size={18} fill="currentColor" />
      Aderir agora
    </a>,
    document.body,
  );
}
