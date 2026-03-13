import { WHATSAPP_CURSO } from "@/lib/whatsapp";
import { Instagram, Youtube } from "lucide-react";

const FooterSection = () => {
  return (
    <>
      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-purple-600 to-secondary relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-5xl animate-float">⭐</div>
          <div className="absolute bottom-20 right-20 text-4xl animate-float" style={{ animationDelay: "1s" }}>🎨</div>
          <div className="absolute top-1/2 right-10 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>✨</div>
          <div className="absolute top-20 right-1/3 text-3xl animate-float" style={{ animationDelay: "0.8s" }}>🖌️</div>
          <div className="absolute bottom-1/3 left-1/4 text-3xl animate-float" style={{ animationDelay: "1.3s" }}>🎈</div>
          <div className="absolute bottom-10 left-1/3 text-3xl animate-float" style={{ animationDelay: "0.3s" }}>🎉</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Comece hoje e transforme sua paixão em renda
          </h2>
          <p className="font-body text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Junte-se a mais de 300 alunas que já estão vivendo de pintura facial. Vagas limitadas para turma 2026!
          </p>
          <a
            href={WHATSAPP_CURSO}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta btn-cta-lg btn-cta-pulse animate-micro-bounce inline-flex items-center gap-3"
          >
            🎨 Quero viver de pintura facial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">T</span>
              </div>
              <p className="font-display text-xl font-bold text-background">Tia que Pinta</p>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/tiaquepinta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
              </a>
              <a href="https://tiktok.com/@tiaquepinta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors font-bold text-sm">
                  TT
                </div>
              </a>
              <a href="https://youtube.com/@tiaquepinta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-background/70 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Youtube className="w-5 h-5" />
                </div>
              </a>
            </div>
            
            <p className="font-body text-sm text-background/50">
              © 2026 Tia que Pinta. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
