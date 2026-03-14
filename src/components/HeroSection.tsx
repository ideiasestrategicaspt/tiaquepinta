import cursoVdpf from "@/assets/curso-vdpf.jpeg";
import { WHATSAPP_CURSO, WHATSAPP_FESTA } from "@/lib/whatsapp";
import { Star, Users, Instagram, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ background: "linear-gradient(135deg, hsl(265 70% 55%), hsl(152 80% 45%))" }}>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-5xl animate-float" style={{ animationDelay: "0s" }}>⭐</div>
        <div className="absolute top-20 right-20 text-4xl animate-float" style={{ animationDelay: "0.5s" }}>🎨</div>
        <div className="absolute bottom-20 left-20 text-4xl animate-float" style={{ animationDelay: "1s" }}>🎈</div>
        <div className="absolute bottom-40 right-10 text-5xl animate-float" style={{ animationDelay: "1.5s" }}>✨</div>
        <div className="absolute top-1/3 left-1/4 text-3xl animate-float" style={{ animationDelay: "0.8s" }}>🖌️</div>
        <div className="absolute bottom-1/3 right-1/4 text-3xl animate-float" style={{ animationDelay: "1.2s" }}>🎉</div>
      </div>

      {/* Mobile-only animated background bubbles */}
      <div className="md:hidden absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating paint blobs */}
        <div className="absolute w-32 h-32 rounded-full bg-accent/10 blur-xl hero-bubble-1" />
        <div className="absolute w-24 h-24 rounded-full bg-secondary/15 blur-xl hero-bubble-2" />
        <div className="absolute w-40 h-40 rounded-full bg-primary-foreground/5 blur-2xl hero-bubble-3" />
        <div className="absolute w-20 h-20 rounded-full bg-accent/8 blur-lg hero-bubble-4" />
        <div className="absolute w-28 h-28 rounded-full bg-secondary/10 blur-xl hero-bubble-5" />
        
        {/* Shimmer light sweep */}
        <div className="absolute inset-0 hero-shimmer" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="hero-enter hero-enter-1 font-display text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6">
              Ganhe Dinheiro em Festas Infantis com{" "}
              <span className="underline decoration-wavy decoration-accent">Pintura Facial</span>
            </h1>
            <p className="hero-enter hero-enter-2 font-body text-sm md:text-xl text-primary-foreground/90 mb-8">
              Método VDPF: O passo a passo que já formou mais de 300 alunas.
            </p>

            {/* Social proof */}
            <div className="hero-enter hero-enter-3 flex flex-row items-center gap-2 md:gap-4 justify-center md:justify-start mb-8">
              <span className="text-xl animate-wiggle">🖌️</span>
              <div className="flex items-center gap-1 md:gap-2 bg-card/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2">
                <Users className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="font-body text-xs md:text-sm font-semibold text-primary-foreground">+300 alunas</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 bg-card/20 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2">
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                <span className="font-body text-xs md:text-sm font-semibold text-primary-foreground">+19,6 mil seguidores</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-enter hero-enter-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={WHATSAPP_CURSO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta btn-cta-pulse btn-cta-mobile text-lg"
              >
                🎨 Quero aprender pintura facial
              </a>
              <a
                href={WHATSAPP_FESTA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-white btn-cta-mobile text-lg"
              >
                🎉 Quero contratar para festa
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block flex-shrink-0 z-10 hero-enter hero-enter-3">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-card/20 blur-2xl"></div>
              <img
                src={cursoVdpf}
                alt="Luana Moreira - Tia que Pinta"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover border-4 border-card/30 shadow-card" />
              
              <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground rounded-full p-3 shadow-button animate-float">
                <Star className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 hero-scroll-hint">
        <span className="font-body text-[10px] tracking-widest uppercase text-primary-foreground/60">Saiba mais</span>
        <ChevronDown className="w-5 h-5 text-primary-foreground/60 animate-bounce" />
      </div>
    </section>);

};

export default HeroSection;