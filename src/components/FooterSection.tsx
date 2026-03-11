import { WHATSAPP_CURSO } from "@/lib/whatsapp";
import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <>
      {/* CTA Final */}
      <section className="py-16 md:py-24 gradient-hero text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Comece hoje na pintura facial e descubra como transformar arte em renda
          </h2>
          <a
            href={WHATSAPP_CURSO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-display text-xl font-bold px-12 py-5 rounded-full bg-accent text-accent-foreground shadow-button hover:scale-105 transition-transform animate-pulse-glow"
          >
            🎨 Quero viver de pintura facial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-display text-xl font-bold text-background">Tia que Pinta</p>
            <div className="flex gap-6">
              <a href="https://instagram.com/tiaquepinta" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com/@tiaquepinta" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors font-bold text-sm flex items-center">
                TikTok
              </a>
              <a href="https://youtube.com/@tiaquepinta" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors font-bold text-sm flex items-center">
                YouTube
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
