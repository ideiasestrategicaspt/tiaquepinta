import { Check } from "lucide-react";
import { WHATSAPP_PLANO_ESSENCIAL } from "@/lib/whatsapp";

const includedItems = [
  "Mais de 50 aulas gravadas",
  "Apostila completa",
  "Portfólio de pinturas",
  "Placas de treino",
  "Lista de atividades",
  "Certificado de participação",
  "Bônus: Pintura Gestacional",
  "Bônus: Bola Mania",
];

const PlansSection = () => {
  return (
    <section id="precos" className="section" style={{ background: "hsl(var(--brand-pink-soft))" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="pill-tag mb-5">Acesso completo</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 leading-tight text-balance">
            Um único plano. Tudo incluso.
          </h2>
          <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
            Sem nível básico, sem nível intermediário. Você entra e recebe o método completo de uma vez.
          </p>
        </div>

        <div
          className="max-w-[520px] mx-auto bg-white rounded-[20px] p-8 md:p-10 shadow-elevated relative"
          style={{ border: "2px solid hsl(var(--brand-pink))" }}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-pink text-white px-5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap">
            Método VDPF · Completo
          </div>

          <div className="text-center mb-8 pt-2">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Acesso por 12 meses</p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-lg text-foreground/70">12x de</span>
              <span className="font-display text-6xl md:text-7xl font-semibold text-brand-pink leading-none">
                R$ 25
              </span>
            </div>
            <p className="text-sm text-foreground/60">ou R$ 250 à vista</p>
          </div>

          <ul className="space-y-3 mb-8 border-t border-brand-pink/10 pt-6">
            {includedItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground/80">
                <Check className="w-5 h-5 text-brand-pink flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={WHATSAPP_PLANO_ESSENCIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center justify-center py-4 text-base"
          >
            Quero entrar no Método VDPF
          </a>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Pagamento seguro · Pix ou cartão · Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
