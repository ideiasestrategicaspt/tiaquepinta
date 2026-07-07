import { WHATSAPP_CURSO } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_CURSO}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] group-hover:scale-105 transition-transform duration-300">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
