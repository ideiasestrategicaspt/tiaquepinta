import luanaHero from "@/assets/luana-hero.jpeg";
import luanaHero from "@/assets/luana-hero.jpeg";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
          <div className="flex-shrink-0">
            <img
              src={luanaHero}
              alt="Luana Moreira - Tia que Pinta"
              className="block md:hidden w-48 h-48 rounded-2xl object-cover shadow-card"
            />
            <img
              src={logoTia}
              alt="Logo Tia que Pinta"
              className="hidden md:block w-56 h-56 rounded-2xl object-contain shadow-card"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-4">
              Quem é a Tia que Pinta
            </h2>
            <p className="font-body text-foreground/80 text-lg leading-relaxed mb-4">
              <strong>Luana Moreira</strong> é artista especializada em pintura facial infantil desde 2012 em Vila Velha – ES.
            </p>
            <p className="font-body text-foreground/80 text-lg leading-relaxed">
              Criadora do <strong>Método VDPF – Vivendo de Pintura Facial</strong>, que ensina pessoas a aprender pintura facial do zero e transformar essa habilidade em uma fonte de renda trabalhando em festas e eventos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
