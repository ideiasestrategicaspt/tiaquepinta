import { Video, BookOpen, FolderOpen, MessageCircle, Award, Package } from "lucide-react";
import { PaintSplash, BrushStroke } from "./PaintEffects";

const benefits = [
  { icon: Video, title: "Mais de 50 aulas gravadas" },
  { icon: BookOpen, title: "Apostila completa" },
  { icon: FolderOpen, title: "Portfólio de apoio" },
  { icon: MessageCircle, title: "Grupo exclusivo no WhatsApp" },
  { icon: Award, title: "Certificado de participação" },
  { icon: Package, title: "Dicas de materiais" },
];

const bonuses = [
  "🎁 Aula de pintura gestacional",
  "🎁 Aula de bola mania",
];

const CourseContentSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-background via-purple-50/40 to-background overflow-hidden">
      {/* Paint effects */}
      <PaintSplash className="absolute -top-8 -left-10 w-48 h-48 text-secondary/25 animate-splash-in" />
      <BrushStroke className="absolute bottom-12 right-0 w-72 text-primary" />
      <PaintSplash className="absolute -bottom-6 -right-6 w-40 h-40 text-accent/25 animate-splash-in" style={{ animationDelay: "0.6s" }} />
      <div className="absolute top-10 left-10 text-4xl opacity-40 animate-float">🖌️</div>
      <div className="absolute bottom-20 right-16 text-3xl opacity-40 animate-float" style={{ animationDelay: "0.7s" }}>⭐</div>
      <div className="absolute top-1/3 right-20 text-3xl opacity-35 animate-float" style={{ animationDelay: "1.2s" }}>✨</div>
      <div className="absolute bottom-1/3 left-16 text-3xl opacity-30 animate-float" style={{ animationDelay: "0.5s" }}>🎨</div>
      <div className="absolute top-1/2 right-8 text-2xl opacity-30 animate-float" style={{ animationDelay: "1.5s" }}>🎈</div>
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient mb-10">
          O que está incluso no curso
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="bg-card rounded-2xl p-4 sm:p-6 shadow-card text-center">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full gradient-hero flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <b.icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary-foreground" />
              </div>
              <span className="font-body font-semibold text-foreground text-sm sm:text-base leading-tight">{b.title}</span>
            </div>
          ))}
        </div>

        {/* Bonuses */}
        <div className="max-w-md mx-auto gradient-warm rounded-2xl p-8 text-center shadow-card">
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">Bônus Exclusivos</h3>
          <div className="space-y-3">
            {bonuses.map((b, i) => (
              <p key={i} className="font-body text-lg text-primary-foreground/90 font-medium">{b}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;
