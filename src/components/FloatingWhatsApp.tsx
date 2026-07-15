import { WHATSAPP_DUVIDA } from "@/lib/whatsapp";
import { HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setNearFooter(rect.top < window.innerHeight - 40);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bottomClass = nearFooter ? "bottom-24 md:bottom-8" : "bottom-4 md:bottom-6";

  return (
    <div
      className={`fixed z-50 flex flex-col-reverse items-end gap-3 transition-all duration-300 right-4 md:right-6 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      } ${bottomClass}`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={WHATSAPP_CURSO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="group relative"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <span
          className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
          style={{
            boxShadow:
              "0 14px 36px -8px rgba(37,211,102,0.55), 0 6px 16px -4px rgba(0,0,0,0.25)",
          }}
        >
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
        </span>
      </a>

      <a
        href={WHATSAPP_DUVIDA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tenho uma dúvida sobre o Método VDPF"
        className="group relative"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <span
          className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
          style={{
            boxShadow:
              "0 14px 36px -8px rgba(37,211,102,0.55), 0 6px 16px -4px rgba(0,0,0,0.25)",
            border: "2px solid #25D366",
          }}
        >
          <HelpCircle className="w-6 h-6 md:w-8 md:h-8 text-[#25D366]" />
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
