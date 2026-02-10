import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

export function CTAFlutuanteMobile() {
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
        text-[10px]
        font-black
        uppercase
        tracking-widest
        shadow-[0_20px_40px_rgba(0,0,0,0.4)]
        active:scale-95
        transition-all
      "
    >
      Aderir agora
    </Link>,
    document.body,
  );
}
