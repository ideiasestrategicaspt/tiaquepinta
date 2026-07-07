import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden gradient-dark pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Subtle radial light */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--brand-pink) / 0.35) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <span className="pill-tag-dark mb-6">
            Método VDPF — Vivendo de Pintura Facial
          </span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6 text-balance">
            Aprenda Pintura Facial e Transforme Essa Arte em{" "}
            <em className="not-italic italic text-[#F472B6] font-medium">
              Renda de Verdade
            </em>
          </h1>

          <p className="font-body text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Mais de 300 artistas já aprenderam com o Método VDPF e hoje trabalham em festas e eventos pelo Brasil.
            Você pode ser a próxima.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            <a href="#precos" className="btn-primary">
              Quero entrar no curso
            </a>
            <a href="#eventos" className="btn-outline-white">
              Contratar para evento
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/70 text-xs md:text-sm">
            <div className="flex text-[#F472B6]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span>Aprovado por mais de 300 alunas em todo o Brasil</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
