import { WHATSAPP_PLANO_BASICO, WHATSAPP_PLANO_ESSENCIAL, WHATSAPP_PLANO_VITALICIO } from "@/lib/whatsapp";
import { Star, Check } from "lucide-react";

const plans = [
  {
    name: "Curso Básico",
    access: "3 meses de acesso",
    price: "R$ 450",
    priceNote: "ou 12x de R$ 45",
    link: WHATSAPP_PLANO_BASICO,
    featured: false,
    features: [
      "Mais de 50 aulas gravadas passo a passo",
      "Técnicas fundamentais de pintura facial",
      "Desenhos infantis que fazem sucesso em festas",
      "Apostila completa para prática",
      "Certificado de participação"
    ]
  },
  {
    name: "Curso Essencial",
    access: "7 meses de acesso",
    price: "R$ 847",
    priceNote: "ou 12x de R$ 84,70",
    link: WHATSAPP_PLANO_ESSENCIAL,
    featured: true,
    features: [
      "Acesso estendido para praticar as técnicas com calma",
      "Grupo exclusivo de suporte no WhatsApp",
      "Aulas bônus com novos desenhos e técnicas",
      "Certificado de participação"
    ],
    badge: "⭐ Plano mais escolhido pelas alunas"
  },
  {
    name: "Curso Vitalício",
    access: "Acesso ilimitado",
    price: "R$ 1.097",
    priceNote: "ou 12x de R$ 109,70",
    link: WHATSAPP_PLANO_VITALICIO,
    featured: false,
    features: [
      "Acesso permanente ao curso",
      "Todas as futuras atualizações do Método VDPF",
      "Conteúdos novos adicionados ao longo do tempo",
      "Mentorias ao vivo exclusivas",
      "Comunidade de alunas para troca de experiências"
    ]
  }
];


const PlansSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
            Garanta Seu Acesso ao Método VDPF
          </h2>
          <p className="font-body text-foreground/70 max-w-xl mx-auto">
            Comece hoje a transformar sua paixão em renda. Pagamento via Pix ou cartão em até 12x (com taxas). 
          </p>
        </div>

        {/* Mobile: featured plan first, then others */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* On mobile, reorder: featured first */}
          {[...plans].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)).map((plan, i) =>
          <div
            key={plan.name}
            className={`relative rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-card-hover ${
            plan.featured ?
            "bg-gradient-to-br from-card to-purple-50 border-2 border-primary shadow-card-hover md:scale-105 order-first md:order-none" :
            "bg-card shadow-card"}`
            }>
            
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-lg font-display text-sm font-bold shadow-button whitespace-nowrap">
                  {plan.badge || "Mais Popular"}
                </div>
              )}
              
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-foreground">{plan.name}</h3>
              <p className="font-body text-xs sm:text-sm mb-3 sm:mb-4 text-muted-foreground">{plan.access}</p>
              
              <div className="mb-4 sm:mb-6">
                <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">{plan.price}</p>
                <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">{plan.priceNote}</p>
              </div>

              <ul className="text-left space-y-2 mb-5 sm:mb-6 text-xs sm:text-sm">
                {plan.features.map((feature, j) =>
              <li key={j} className="flex items-start gap-2 text-foreground/80">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="font-body">{feature}</span>
                  </li>
              )}
              </ul>
              
              <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-cta w-full text-base sm:text-lg ${plan.featured ? 'btn-cta-pulse animate-micro-bounce' : ''}`}>
              
                Quero entrar no curso
              </a>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default PlansSection;