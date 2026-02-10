import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export function CTAFlutuante() {
  if (typeof document === "undefined") return null;

  return createPortal(
    <Link
      to="/contato"
      className="
        fixed bottom-10 right-6
        z-[9999]
        px-8 py-4
        rounded-full
        bg-white
        text-black
        text-[12px]
        font-black
        uppercase
        tracking-widest
        shadow-[0_20px_40px_rgba(0,0,0,0.4)]
        hover:bg-[var(--color-blue)]
        active:scale-95
        transition-colors
      "
    >
      Aderir agora
    </Link>,
    document.body,
  );
}
