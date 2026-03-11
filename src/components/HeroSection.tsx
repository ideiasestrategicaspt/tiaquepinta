import luanaHero from "@/assets/luana-hero.jpeg";
import { WHATSAPP_CURSO, WHATSAPP_FESTA } from "@/lib/whatsapp";
import { Star, Users, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-float" style={{ animationDelay: "0s" }}>⭐</div>
        <div className="absolute top-20 right-20 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>🎨</div>
        <div className="absolute bottom-20 left-20 text-3xl animate-float" style={{ animationDelay: "1s" }}>🎈</div>
        <div className="absolute bottom-40 right-10 text-4xl animate-float" style={{ animationDelay: "1.5s" }}>✨</div>
        <div className="absolute top-1/2 left-5 text-2xl animate-float" style={{ animationDelay: "2s" }}>🖌️</div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text */}
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Ganhe Dinheiro em Festas Infantis com{" "}
              <span className="underline decoration-wavy decoration-accent">Pintura Facial</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8">
              Método VDPF: O passo a passo que já formou mais de 300 alunas.
            </p>

            {/* Social proof */}
            <div className="flex flex-row gap-2 md:gap-4 justify-center md:justify-start mb-8">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={WHATSAPP_CURSO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-display text-lg font-bold px-8 py-4 rounded-full bg-accent text-accent-foreground shadow-button hover:scale-105 transition-transform">
                
                🎨 Quero aprender pintura facial
              </a>
              <a
                href={WHATSAPP_FESTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-display text-lg font-bold px-8 py-4 rounded-full bg-card text-primary shadow-button hover:scale-105 transition-transform">
                
                🎉 Quero contratar para festa
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="hidden md:block flex-shrink-0 z-10">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-card/20 blur-2xl"></div>
              <img
                src={luanaHero}
                alt="Luana Moreira - Tia que Pinta"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover border-4 border-card/30 shadow-card" />
              
              <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground rounded-full p-3 shadow-button animate-float">
                <Star className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;