import { Brush, Clock, Palette, Sparkles } from "lucide-react";

const items = [
  {
    icon: Brush,
    title: "Não sei desenhar",
    text: "O método foi desenvolvido para quem começa do zero. Você aprende técnicas simples que não exigem habilidade prévia em desenho, apenas prática guiada.",
  },
  {
    icon: Clock,
    title: "Não tenho tempo",
    text: "As aulas são gravadas e você assiste no seu ritmo, quando e onde quiser. Sem horários fixos, sem pressão.",
  },
  {
    icon: Palette,
    title: "Não tenho materiais",
    text: "O curso inclui lista completa dos materiais essenciais e onde comprar. Você começa com o mínimo necessário.",
  },
  {
    icon: Sparkles,
    title: "Tenho medo de não conseguir",
    text: "Com mais de 50 aulas passo a passo e suporte no grupo do WhatsApp, você nunca está sozinha. As 300+ alunas provam que é possível.",
  },
];

const ObjectionsSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="pill-tag mb-5">Por que o Método VDPF funciona</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 leading-tight text-balance">
            Você não precisa de experiência.<br className="hidden md:block" /> Precisa do método certo.
          </h2>
          <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
            Os obstáculos que impedem a maioria de começar, e como o Método resolve cada um.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={i}
                className="rounded-2xl p-7 md:p-8 border border-brand-pink/10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                style={{ background: "hsl(var(--brand-pink-soft))" }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-brand-pink" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                  {it.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{it.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
