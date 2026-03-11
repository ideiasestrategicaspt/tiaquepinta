import { Palette, Brush, Sparkles, Image, Calendar, BookOpen } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
            O que é o Método VDPF
          </h2>
          <p className="font-body text-foreground/80 text-lg max-w-2xl mx-auto">
            O Método VDPF foi criado para ensinar pintura facial do básico ao avançado, mesmo para quem nunca pintou antes. O curso mostra passo a passo as técnicas utilizadas em festas infantis e eventos.
          </p>
        </div>

        <h3 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
          O que você vai aprender
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-body font-semibold text-foreground">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
