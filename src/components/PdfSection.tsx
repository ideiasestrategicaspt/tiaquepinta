import { WHATSAPP_PDF } from "@/lib/whatsapp";
import { FileText, Download, Sparkles } from "lucide-react";
import { PaintSplash, BrushStroke } from "./PaintEffects";

const PdfSection = () => {
  return (
    <section className="relative py-10 md:py-24 bg-gradient-to-br from-muted via-white to-muted overflow-hidden">
      {/* Paint effects */}
      <PaintSplash className="absolute -top-6 -left-8 w-36 h-36 text-primary/12 animate-splash-in" />
      <BrushStroke className="absolute top-8 right-0 w-52 text-accent" />
      <PaintSplash className="absolute -bottom-8 -right-6 w-28 h-28 text-secondary/12 animate-splash-in" style={{ animationDelay: "0.3s" }} />
      <div className="absolute top-12 right-16 text-2xl opacity-20 animate-float">🖌️</div>
      <div className="absolute bottom-16 left-12 text-xl opacity-15 animate-float" style={{ animationDelay: "0.9s" }}>⭐</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-card border border-border/50 text-center relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-transparent rounded-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-transparent rounded-full opacity-50"></div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-button animate-micro-bounce">
              <FileText className="w-7 h-7 md:w-10 md:h-10 text-white" />
            </div>
            
            <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
              <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5" />
              <span>Para Iniciantes</span>
            </div>
            
            <h2 className="font-display text-2xl md:text-4xl font-bold text-gradient mb-3 md:mb-4">
              Comece com os PDFs para iniciantes
            </h2>
            <p className="font-body text-foreground/70 text-sm md:text-lg mb-4 md:mb-6">
              Pacote com 3 PDFs para quem quer começar na pintura facial sem investir muito.
            </p>
            
            <ul className="font-body text-foreground/70 text-left max-w-xs mx-auto mb-4 md:mb-6 space-y-2 md:space-y-3 bg-muted/50 rounded-2xl p-4 md:p-5 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Download className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" />
                </span>
                <span>Apostila de apoio completa</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Download className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" />
                </span>
                <span>Desenhos para treino</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Download className="w-3 h-3 md:w-3.5 md:h-3.5 text-green-600" />
                </span>
                <span>Guia para iniciantes</span>
              </li>
            </ul>
            
            <div className="mb-4 md:mb-6">
              <p className="font-display text-4xl md:text-5xl font-bold text-gradient">R$ 97</p>
              <p className="font-body text-xs md:text-sm text-muted-foreground">Pagamento único • Acesso imediato</p>
            </div>
            
            <a
              href={WHATSAPP_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta btn-cta-lg btn-cta-pulse"
            >
              📚 Quero os PDFs Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PdfSection;
