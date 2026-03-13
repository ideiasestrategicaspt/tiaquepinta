import { WHATSAPP_FESTA } from "@/lib/whatsapp";
import { MapPin, Calendar, Users } from "lucide-react";
import { PaintSplash, BrushStroke } from "./PaintEffects";

const EventsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      <PaintSplash className="absolute -top-8 -right-8 w-52 h-52 text-primary/30 animate-splash-in" />
      <PaintSplash className="absolute -bottom-8 -left-8 w-44 h-44 text-primary/25 animate-splash-in" style={{ animationDelay: "0.3s" }} />
      <BrushStroke className="absolute bottom-10 right-0 w-72 text-secondary" />
      <div className="absolute top-2 left-2 md:top-10 md:left-[5%] text-xl md:text-4xl animate-float">⭐</div>
      <div className="absolute top-2 right-2 md:top-20 md:right-[6%] text-xl md:text-3xl animate-float" style={{ animationDelay: "0.5s" }}>🖌️</div>
      <div className="absolute bottom-2 left-2 md:bottom-12 md:left-[4%] text-xl md:text-3xl animate-float" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-2 right-2 md:bottom-20 md:right-[5%] text-xl md:text-3xl animate-float" style={{ animationDelay: "0.8s" }}>🎈</div>
      <div className="hidden md:block absolute top-1/3 left-[3%] text-3xl animate-float" style={{ animationDelay: "1.3s" }}>🎨</div>
      <div className="hidden lg:block absolute top-1/2 right-[8%] text-2xl animate-float" style={{ animationDelay: "0.6s" }}>🎉</div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4 animate-wiggle inline-block">🎨</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
            Contrate a Tia que Pinta para seu evento
          </h2>
          <p className="font-body text-foreground/70 text-lg mb-6">
            Transforme a festa do seu filho em um momento mágico com pintura facial profissional.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body text-sm">Vila Velha e região</span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm">
              <Calendar className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm">Agenda 2026 aberta</span>
            </div>
            <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-sm">
              <Users className="w-4 h-4 text-accent" />
              <span className="font-body text-sm">+1000 festas realizadas</span>
            </div>
          </div>
          
          <a
            href={WHATSAPP_FESTA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta btn-cta-lg btn-cta-pulse animate-micro-bounce"
          >
            🎉 Quero contratar para festa
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
