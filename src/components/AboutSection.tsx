import luanaFotoAsset from "@/assets/luana-portrait.jpeg.asset.json";
const luanaFoto = luanaFotoAsset.url;

const AboutSection = () => {
  return (
    <section id="sobre" className="section" style={{ background: "hsl(var(--brand-pink-soft))" }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative order-1 md:order-none">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[4/5] max-w-[480px] mx-auto md:mx-0">
              <img
                src={luanaFoto}
                alt="Luana Moreira - Tia que Pinta"
                className="w-full h-full object-cover"
              />
              {/* Substituir imagem em src/assets/luana-hero.jpeg */}
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-2 md:-right-4 bg-brand-pink text-white rounded-2xl px-5 py-3 shadow-pink">
              <p className="font-display text-2xl md:text-3xl font-semibold leading-none">+12 anos</p>
              <p className="text-[11px] uppercase tracking-widest opacity-90 mt-1">de experiência</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="pill-tag mb-5">Quem é a Tia que Pinta</span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight text-balance">
              Prazer, sou Luana Moreira
            </h2>
            <div className="space-y-5 text-foreground/75 text-base md:text-lg leading-relaxed">
              <p>
                Artista lúdica e criadora do Método VDPF (Vivendo de Pintura Facial). Desde 2012, atuo com pintura facial infantil em Vila Velha, ES, com mais de 1.000 festas realizadas.
              </p>
              <p>
                Mais de 300 alunas já passaram pelo método e hoje trabalham em festas todo fim de semana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
