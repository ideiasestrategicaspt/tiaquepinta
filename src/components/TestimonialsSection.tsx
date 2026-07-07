import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Comecei do zero e em três meses já estava atendendo festas. O suporte da Luana faz toda a diferença — nunca me senti sozinha.",
    name: "Camila Santos",
  },
  {
    text: "O curso mudou a minha vida. Hoje faço pintura facial em festas todo fim de semana e estou construindo meu próprio negócio.",
    name: "Maria Silva",
  },
  {
    text: "Aprendi muito mais rápido do que esperava. O método é prático, direto e funciona mesmo pra quem nunca tinha pintado na vida.",
    name: "Ana Paula",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="pill-tag mb-5">O que as alunas dizem</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight text-balance">
            Resultados reais de alunas reais
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl p-7 border border-brand-pink/10 shadow-soft"
              style={{ background: "hsl(var(--brand-pink-soft))" }}
            >
              <div className="flex text-brand-pink mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground/80 leading-relaxed mb-5">
                {t.text}
              </blockquote>
              <figcaption className="font-medium text-foreground text-sm">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
