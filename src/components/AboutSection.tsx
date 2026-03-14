import cursoVdpfAvatar from "@/assets/curso-vdpf-avatar.jpeg";
import { PaintSplash } from "./PaintEffects";

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50/80 via-background to-blue-50/60 overflow-hidden">
      {/* Decorative elements */}
      <PaintSplash className="absolute -top-6 -right-6 w-48 h-48 animate-splash-in" gradient={{ from: "#F855B0", to: "#FFA5A9" }} />
      <PaintSplash className="absolute -bottom-8 -left-8 w-40 h-40 animate-splash-in" style={{ animationDelay: "0.4s" }} gradient={{ from: "#00A3EB", to: "#95B2D1" }} />
      <div className="absolute top-2 right-2 md:top-12 md:right-[6%] text-xl md:text-4xl animate-float" style={{ animationDelay: "0.3s" }}>🎨</div>
      <div className="absolute bottom-2 left-2 md:bottom-14 md:left-[5%] text-xl md:text-3xl animate-float" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute top-2 left-2 md:top-1/3 md:left-[3%] text-xl md:text-3xl animate-float" style={{ animationDelay: "0.7s" }}>⭐</div>
      <div className="absolute bottom-2 right-2 md:bottom-1/3 md:right-[4%] text-lg md:text-2xl animate-float" style={{ animationDelay: "1.3s" }}>🖌️</div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
          <div className="flex-shrink-0">
            <img
              src={cursoVdpfAvatar}
              alt="Luana Moreira - Tia que Pinta"
              className="block md:hidden w-48 h-48 rounded-2xl object-cover shadow-card" />
            
            <img
              src={cursoVdpfAvatar}
              alt="Logo Tia que Pinta"
              className="hidden md:block w-56 h-56 rounded-2xl object-contain shadow-card" />
            
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
              Quem é a Tia que Pinta
            </h2>
            <p className="font-body text-foreground/80 text-lg leading-relaxed mb-4">
              <strong>Luana Moreira</strong> é artista especializada em pintura facial infantil desde 2012 em Vila Velha – ES.
            </p>
            <p className="font-body text-foreground/80 text-lg leading-relaxed mb-4">
              Criadora da <strong>Comunidade Somos os Artistas</strong> e <strong>Método VDPF – Vivendo de Pintura Facial</strong>, que ensina pessoas a aprender pintura facial do zero e transformar essa habilidade em uma fonte de renda trabalhando em festas e eventos.
            </p>
          </div>
        </div>
      </div>
    </section>);
};

export default AboutSection;
