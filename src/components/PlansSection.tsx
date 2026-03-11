import { WHATSAPP_PLANO_BASICO, WHATSAPP_PLANO_ESSENCIAL, WHATSAPP_PLANO_VITALICIO } from "@/lib/whatsapp";
import { Star } from "lucide-react";

const plans = [
  {
    name: "Curso Básico",
    access: "3 meses de acesso",
    price: "R$ 450",
    link: WHATSAPP_PLANO_BASICO,
    featured: false,
  },
  {
    name: "Curso Essencial",
    access: "7 meses de acesso",
    price: "R$ 847",
    link: WHATSAPP_PLANO_ESSENCIAL,
    featured: true,
  },
  {
    name: "Curso Vitalício",
    access: "Acesso ilimitado",
    price: "R$ 1.097",
    link: WHATSAPP_PLANO_VITALICIO,
    featured: false,
  },
];

const PlansSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
          Planos do Curso
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-8 text-center shadow-card transition-transform hover:scale-105 ${
                plan.featured
                  ? "gradient-hero text-primary-foreground ring-4 ring-accent"
                  : "bg-card text-foreground"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full font-display text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" /> Mais Popular
                </div>
              )}
              <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`font-body text-sm mb-6 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {plan.access}
              </p>
              <p className="font-display text-4xl font-bold mb-8">{plan.price}</p>
              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block w-full font-display text-lg font-bold px-6 py-4 rounded-full transition-transform hover:scale-105 ${
                  plan.featured
                    ? "bg-accent text-accent-foreground shadow-button"
                    : "gradient-hero text-primary-foreground shadow-button"
                }`}
              >
                Quero entrar no curso
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
