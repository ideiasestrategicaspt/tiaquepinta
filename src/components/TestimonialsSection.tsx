import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1)), []);
  const next = useCallback(() => setActive((i) => (i === testimonials.length - 1 ? 0 : i + 1)), []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getIndex = (offset: number) =>
    (active + offset + testimonials.length) % testimonials.length;

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
          O que as alunas dizem
        </h2>

        <div className="relative flex items-center justify-center max-w-4xl mx-auto">
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-all"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-stretch justify-center gap-3 md:gap-6 px-12 md:px-16">
            {/* Left card */}
            <div
              onClick={() => setActive(getIndex(-1))}
              className="hidden md:flex flex-col bg-card rounded-2xl p-5 shadow-card opacity-40 scale-90 transition-all duration-500 cursor-pointer hover:opacity-60 w-64 shrink-0"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonials[getIndex(-1)].stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground/80 text-sm italic mb-3 line-clamp-3">"{testimonials[getIndex(-1)].text}"</p>
              <p className="font-display font-bold text-foreground text-sm mt-auto">{testimonials[getIndex(-1)].name}</p>
            </div>

            {/* Active card */}
            <div className="bg-card rounded-2xl p-6 shadow-card-hover ring-2 ring-primary/20 transition-all duration-500 z-10 w-72 md:w-80 shrink-0">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[active].stars }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground/80 mb-4 italic">"{testimonials[active].text}"</p>
              <p className="font-display font-bold text-foreground">{testimonials[active].name}</p>
            </div>

            {/* Right card */}
            <div
              onClick={() => setActive(getIndex(1))}
              className="hidden md:flex flex-col bg-card rounded-2xl p-5 shadow-card opacity-40 scale-90 transition-all duration-500 cursor-pointer hover:opacity-60 w-64 shrink-0"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonials[getIndex(1)].stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-foreground/80 text-sm italic mb-3 line-clamp-3">"{testimonials[getIndex(1)].text}"</p>
              <p className="font-display font-bold text-foreground text-sm mt-auto">{testimonials[getIndex(1)].name}</p>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-all"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === active ? "bg-primary scale-125" : "bg-primary/30"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
