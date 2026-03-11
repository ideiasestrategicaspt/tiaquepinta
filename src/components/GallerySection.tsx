import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import { BrushStroke } from "./PaintEffects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const images = [gallery1, gallery2, gallery3, gallery4];

const GallerySection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-muted overflow-hidden">
      <BrushStroke className="absolute top-4 left-0 w-64 text-primary" />
      <BrushStroke className="absolute bottom-4 right-0 w-56 text-accent" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
          Galeria de Trabalhos
        </h2>

        <div className="max-w-5xl mx-auto">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {images.map((img, i) => (
                <CarouselItem key={i} className="basis-1/2 md:basis-1/4">
                  <div className="rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105">
                    <img
                      src={img}
                      alt={`Pintura facial ${i + 1}`}
                      className="w-full h-48 md:h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
