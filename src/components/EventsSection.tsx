import { WHATSAPP_FESTA } from "@/lib/whatsapp";
import { MapPin, Calendar, Users } from "lucide-react";
import { PaintSplash } from "./PaintEffects";

const EventsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 overflow-hidden">
      <PaintSplash className="absolute -top-8 -right-8 w-44 h-44 text-secondary animate-splash-in" />
      <PaintSplash className="absolute -bottom-8 -left-8 w-36 h-36 text-primary animate-splash-in" style={{ animationDelay: "0.3s" }} />

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
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-body text-sm">Vila Velha e região</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Calendar className="w-4 h-4 text-secondary" />
              <span className="font-body text-sm">Agenda 2026 aberta</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
              <Users className="w-4 h-4 text-green-500" />
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
