import { useState, useRef, useCallback, useEffect } from "react";
import { WHATSAPP_PLANO_BASICO, WHATSAPP_PLANO_ESSENCIAL, WHATSAPP_PLANO_VITALICIO } from "@/lib/whatsapp";
import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { PaintSplash, BrushStroke } from "./PaintEffects";

const plans = [
{
  name: "Curso Básico",
  access: "3 meses de acesso",
  price: "R$ 250",
  priceNote: "ou 12x de R$ 25",
  link: WHATSAPP_PLANO_BASICO,
  featured: false,
  features: [
  "Mais de 50 aulas gravadas passo a passo",
  "Técnicas fundamentais de pintura facial",
  "Desenhos infantis que fazem sucesso em festas",
  "Apostila completa para prática",
  "Certificado de participação"]

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
  "Certificado de participação"],

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
  "Comunidade de alunas para troca de experiências"]

}];


const PlanCard = ({ plan, largePrice }: {plan: typeof plans[0];isActive?: boolean;largePrice?: boolean;}) =>
<div
  className={`relative rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 ${
  plan.featured ?
  "bg-gradient-to-br from-card to-purple-50 border-2 border-primary shadow-card-hover md:scale-105" :
  "bg-card shadow-card"}`
  }
  style={{ minWidth: 0 }}>
  
    {plan.featured &&
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-lg font-display text-sm font-bold shadow-button whitespace-nowrap">
        {plan.badge || "Mais Popular"}
      </div>
  }

    <h3 className="font-display text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-foreground">{plan.name}</h3>
    <p className="font-body text-xs sm:text-sm mb-3 sm:mb-4 text-muted-foreground">{plan.access}</p>

    <div className="mb-4 sm:mb-6">
      <p className={`font-display text-3xl sm:text-4xl font-bold text-gradient whitespace-nowrap ${largePrice ? 'md:text-6xl' : 'md:text-4xl'}`}>{plan.priceNote.replace("ou ", "")}</p>
      <p className="font-body text-sm text-muted-foreground mt-2 sm:text-xs">ou <span className="font-semibold text-foreground">{plan.price}</span> à vista</p>
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
    className={`btn-cta w-full text-base sm:text-lg ${plan.featured ? "btn-cta-pulse animate-micro-bounce" : ""}`}>
    
      Quero entrar no curso
    </a>
  </div>;


const PlansSection = () => {
  const isMobile = useIsMobile();
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 1023px)');
    const onChange = () => setIsTabletOrSmaller(mql.matches);
    mql.addEventListener('change', onChange);
    setIsTabletOrSmaller(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, []);
  const [activeIndex, setActiveIndex] = useState(1); // Essencial starts in center
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);
  const isDragging = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    touchDelta.current = 0;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    touchDelta.current = e.touches[0].clientX - touchStartX.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const threshold = 50;
    if (touchDelta.current < -threshold) {
      scrollToIndex((activeIndex + 1) % plans.length);
    } else if (touchDelta.current > threshold) {
      scrollToIndex((activeIndex - 1 + plans.length) % plans.length);
    }
  }, [activeIndex, scrollToIndex]);

  if (isTabletOrSmaller) {
    const getCardStyle = (i: number): React.CSSProperties => {
      const diff = i - activeIndex;
      if (diff === 0) {
        return { transform: 'translateX(0) scale(1)', zIndex: 3, opacity: 1, filter: 'blur(0px)' };
      }
      if (diff === -1 || diff === plans.length - 1) {
        return { transform: 'translateX(-30%) scale(0.88)', zIndex: 1, opacity: 0.5, filter: 'blur(3px)' };
      }
      if (diff === 1 || diff === -(plans.length - 1)) {
        return { transform: 'translateX(30%) scale(0.88)', zIndex: 1, opacity: 0.5, filter: 'blur(3px)' };
      }
      return { transform: 'translateX(0) scale(0.8)', zIndex: 0, opacity: 0, filter: 'blur(5px)' };
    };

    return (
      <section className="relative py-16 bg-gradient-to-b from-muted via-purple-50/30 to-muted overflow-hidden">
        <PaintSplash className="absolute -top-8 -right-8 w-36 h-36 animate-splash-in" gradient={{ from: "#F855B0", to: "#FFA5A9" }} />
        <BrushStroke className="absolute bottom-8 left-0 w-60" gradient={{ from: "#FFC235", to: "#8DC605" }} />
        <div className="absolute top-12 left-8 text-2xl opacity-20 animate-float">⭐</div>
        <div className="absolute bottom-16 right-12 text-xl opacity-15 animate-float" style={{ animationDelay: "0.8s" }}>✨</div>
        <div className="px-4">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-gradient mb-4">
              Garanta Seu Acesso ao Método VDPF
            </h2>
            <p className="font-body text-foreground/70 text-sm">
              Comece hoje a transformar sua paixão em renda. Pagamento via Pix ou cartão em até 12x (com taxas).
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative px-4"
          style={{ minHeight: 480 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          
          <div className="relative w-full" style={{ maxWidth: '85%', margin: '0 auto' }}>
            {plans.map((plan, i) =>
            <div
              key={plan.name}
              className="transition-all duration-500 ease-out"
              style={{
                ...getCardStyle(i),
                position: i === activeIndex ? 'relative' : 'absolute',
                top: i === activeIndex ? undefined : 0,
                left: i === activeIndex ? undefined : 0,
                right: i === activeIndex ? undefined : 0,
                width: '100%'
              }}
              onClick={() => scrollToIndex(i)}>
              
                <PlanCard plan={plan} isActive={i === activeIndex} largePrice />
              </div>
            )}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, i) =>
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === activeIndex ?
              "bg-primary scale-125" :
              "bg-primary/30"}`
              } />

            )}
          </div>
        </div>
      </section>);

  }

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-muted via-purple-50/30 to-muted overflow-hidden">
      <PaintSplash className="absolute -top-8 -left-10 w-40 h-40 animate-splash-in" gradient={{ from: "#DE70D2", to: "#95B2D1" }} />
      <BrushStroke className="absolute top-6 right-0 w-64" gradient={{ from: "#00A3EB", to: "#F0CA61" }} />
      <PaintSplash className="absolute -bottom-6 -right-8 w-32 h-32 animate-splash-in" style={{ animationDelay: "0.4s" }} gradient={{ from: "#FFC235", to: "#F855B0" }} />
      <div className="absolute top-16 right-16 text-3xl opacity-20 animate-float">🖌️</div>
      <div className="absolute bottom-20 left-12 text-2xl opacity-20 animate-float" style={{ animationDelay: "0.6s" }}>⭐</div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
            Garanta Seu Acesso ao Método VDPF
          </h2>
          <p className="font-body text-foreground/70 max-w-xl mx-auto">
            Comece hoje a transformar sua paixão em renda. Pagamento via Pix ou cartão em até 12x (com taxas).
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan) =>
          <PlanCard key={plan.name} plan={plan} isActive />
          )}
        </div>
      </div>
    </section>);

};

export default PlansSection;