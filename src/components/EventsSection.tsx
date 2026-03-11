import { WHATSAPP_FESTA } from "@/lib/whatsapp";
import { MapPin } from "lucide-react";
import { PaintSplash } from "./PaintEffects";

const EventsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-background overflow-hidden">
      <PaintSplash className="absolute -top-8 -right-8 w-44 h-44 text-secondary animate-splash-in" />
      <PaintSplash className="absolute -bottom-8 -left-8 w-36 h-36 text-primary animate-splash-in" style={{ animationDelay: "0.3s" }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="text-4xl mb-4 animate-wiggle inline-block">🎨</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
          Contrate a Tia que Pinta para eventos
        </h2>
        <p className="font-body text-foreground/80 text-lg mb-4 max-w-xl mx-auto">
          Pintura facial para festas infantis e eventos.
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
          <MapPin className="w-5 h-5" />
          <span className="font-body">Atendimento em Vila Velha e região</span>
        </div>
        <a
          href={WHATSAPP_FESTA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display text-lg font-bold px-10 py-4 rounded-full bg-accent text-accent-foreground shadow-button hover:scale-105 transition-transform"
        >
          🎉 Quero contratar para festa
        </a>
      </div>
    </section>
  );
};

export default EventsSection;
