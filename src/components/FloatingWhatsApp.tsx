import { WHATSAPP_CURSO } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href={WHATSAPP_CURSO}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Fale conosco no WhatsApp"
    >
      {/* Pulse animation ring */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
      
      {/* Button */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_4px_20px_-4px_rgba(34,197,94,0.6)] group-hover:scale-110 group-hover:shadow-[0_8px_30px_-4px_rgba(34,197,94,0.8)] transition-all duration-300">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
        
        {/* Notification dot */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
          1
        </span>
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco!
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-foreground rotate-45"></div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
