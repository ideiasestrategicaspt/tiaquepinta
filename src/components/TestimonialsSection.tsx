import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    text: "O curso mudou minha vida! Hoje faço pintura facial em festas todo fim de semana.",
    stars: 5,
  },
  {
    name: "Ana Paula",
    text: "Aprendi pintura facial muito rápido. O método da Luana é incrível e prático!",
    stars: 5,
  },
  {
    name: "Camila Santos",
    text: "Comecei do zero e logo já estava atendendo festas. O suporte ajuda demais!",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
          O que as alunas dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground/80 mb-4 italic">"{t.text}"</p>
              <p className="font-display font-bold text-foreground">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
