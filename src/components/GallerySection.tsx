import { useState } from "react";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import { BrushStroke } from "./PaintEffects";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

const GallerySection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActive((i) => (i === images.length - 1 ? 0 : i + 1));

  const getIndex = (offset: number) =>
    (active + offset + images.length) % images.length;

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-muted via-blue-50/40 to-muted overflow-hidden">
      {/* Extra decorative blobs */}
      <div className="absolute top-1/4 left-4 w-40 h-40 rounded-full bg-primary/8 blur-2xl" />
      <div className="absolute bottom-1/3 right-8 w-36 h-36 rounded-full bg-accent/8 blur-2xl" />
      <BrushStroke className="absolute top-4 left-0 w-72 text-primary" />
      <BrushStroke className="absolute bottom-4 right-0 w-64 text-accent" />
      <div className="absolute top-2 right-2 md:top-8 md:right-4 text-xl md:text-4xl animate-float">⭐</div>
      <div className="absolute top-2 left-2 md:top-16 md:left-2 text-xl md:text-3xl animate-float" style={{ animationDelay: "0.6s" }}>🎨</div>
      <div className="absolute bottom-2 right-2 md:bottom-10 md:right-4 text-xl md:text-3xl animate-float" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-2 left-2 md:bottom-8 md:left-4 text-xl md:text-3xl animate-float" style={{ animationDelay: "0.3s" }}>🖌️</div>
      <div className="hidden lg:block absolute top-1/2 right-2 text-3xl animate-float" style={{ animationDelay: "1.4s" }}>🎈</div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
          Veja o Que Você Vai Aprender a Pintar
        </h2>

        <div className="relative flex items-center justify-center max-w-5xl mx-auto">
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-all"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center gap-2 md:gap-4 px-12 md:px-16">
            {/* Left background image */}
            <div
              onClick={() => setActive(getIndex(-1))}
              className="hidden md:block rounded-2xl overflow-hidden shadow-card opacity-40 scale-75 transition-all duration-500 cursor-pointer hover:opacity-60 shrink-0"
            >
              <img
                src={images[getIndex(-1)]}
                alt="Pintura facial"
                className="w-40 h-44 object-contain"
                loading="lazy"
              />
            </div>

            {/* Active / Featured image */}
            <div className="rounded-2xl overflow-hidden shadow-card-hover ring-4 ring-primary/30 transition-all duration-500 z-10 shrink-0">
              <img
                src={images[active]}
                alt={`Pintura facial ${active + 1}`}
                className="w-64 h-72 md:w-80 md:h-96 object-contain bg-muted"
                loading="lazy"
              />
            </div>

            {/* Right background image */}
            <div
              onClick={() => setActive(getIndex(1))}
              className="hidden md:block rounded-2xl overflow-hidden shadow-card opacity-40 scale-75 transition-all duration-500 cursor-pointer hover:opacity-60 shrink-0"
            >
              <img
                src={images[getIndex(1)]}
                alt="Pintura facial"
                className="w-40 h-44 object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-all"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === active ? "bg-primary scale-125" : "bg-primary/30"
              }`}
              aria-label={`Ir para imagem ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
