import { Video, BookOpen, FolderOpen, MessageCircle, Award, Package } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient mb-10">
          O que está incluso no curso
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {benefits.map((b, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-card text-center">
              <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="font-body font-semibold text-foreground">{b.title}</span>
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
