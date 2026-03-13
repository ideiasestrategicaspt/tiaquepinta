import { Palette, Brush, Sparkles, Image, Calendar, BookOpen } from "lucide-react";
import { PaintSplash, BrushStroke } from "./PaintEffects";

const items = [
  { icon: Brush, title: "Técnicas de pintura facial" },
  { icon: Sparkles, title: "Desenhos infantis populares em festas" },
  { icon: Palette, title: "Combinação de cores" },
  { icon: Brush, title: "Técnica one stroke" },
  { icon: Image, title: "Criação de portfólio" },
  { icon: Calendar, title: "Como começar a trabalhar em eventos" },
];

const MethodSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-muted via-purple-100/40 to-muted overflow-hidden">
      <PaintSplash className="absolute -top-10 -left-10 w-56 h-56 text-primary/30 animate-splash-in" />
      <BrushStroke className="absolute top-8 right-0 w-80 text-secondary" />
      <PaintSplash className="absolute -bottom-10 -right-10 w-48 h-48 text-accent/30 animate-splash-in" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-16 left-12 text-4xl animate-float">⭐</div>
      <div className="absolute top-24 right-16 text-3xl animate-float" style={{ animationDelay: "0.7s" }}>🎨</div>
      <div className="absolute bottom-16 left-20 text-3xl animate-float" style={{ animationDelay: "1.2s" }}>✨</div>
      <div className="absolute bottom-24 right-8 text-3xl animate-float" style={{ animationDelay: "0.4s" }}>🖌️</div>
      <div className="absolute top-1/2 left-6 text-3xl animate-float" style={{ animationDelay: "0.9s" }}>🎈</div>
      <div className="absolute top-1/3 right-1/4 text-2xl animate-float" style={{ animationDelay: "1.5s" }}>🎉</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
            O que é o Método VDPF?
          </h2>
          <p className="font-body text-foreground/80 text-lg max-w-2xl mx-auto">
            O Método VDPF foi criado para ensinar pintura facial do básico ao avançado, mesmo para quem nunca pintou antes. O curso mostra passo a passo as técnicas utilizadas em festas infantis e eventos.
          </p>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          O que você vai aprender
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-4 sm:p-6 shadow-card hover:shadow-card-hover hover:scale-105 transition-all duration-300 flex flex-col items-center text-center sm:flex-row sm:text-left gap-3 sm:gap-4"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <span className="font-body font-semibold text-foreground text-sm sm:text-base leading-tight">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
