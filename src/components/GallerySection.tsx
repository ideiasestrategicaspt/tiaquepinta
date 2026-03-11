import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import { BrushStroke } from "./PaintEffects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [gallery1, gallery2, gallery3, gallery4];

const GallerySection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
      <BrushStroke className="absolute top-4 left-0 w-64 text-primary" />
      <BrushStroke className="absolute bottom-4 right-0 w-56 text-accent" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
          Galeria de Trabalhos
        </h2>

        <div className="relative flex items-center justify-center gap-3 md:gap-6 max-w-5xl mx-auto">
          {/* Prev button */}
          <button
            onClick={prev}
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-all"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Images */}
          <div className="flex items-center justify-center gap-3 md:gap-4 overflow-hidden">
            {images.map((img, i) => {
              const isActive = i === active;
              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-2xl overflow-hidden shadow-card transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "scale-105 ring-4 ring-primary/40 shadow-card-hover z-10"
                      : "scale-90 opacity-50 hover:opacity-70"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Pintura facial ${i + 1}`}
                    className={`object-contain w-full transition-all duration-500 ${
                      isActive ? "h-48 md:h-72" : "h-36 md:h-56"
                    }`}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-all"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
