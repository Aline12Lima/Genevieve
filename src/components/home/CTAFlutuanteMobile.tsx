import { createPortal } from "react-dom";

export function CTAFlutuanteMobile() {
  // Evita erro de SSR (Server Side Rendering)
  if (typeof document === "undefined") return null;

  return createPortal(
    <button
      className="
        fixed bottom-10 right-6
        z-[9999] 
        lg:hidden
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
    </button>,
    document.body,
  );
}
