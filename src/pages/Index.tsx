import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MethodSection from "@/components/MethodSection";
import CourseContentSection from "@/components/CourseContentSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import EventsSection from "@/components/EventsSection";
import PdfSection from "@/components/PdfSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SectionDivider from "@/components/SectionDivider";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <SectionDivider variant="paint" className="text-purple-50/80" />

      <ScrollReveal variant="fade-up">
        <AboutSection />
      </ScrollReveal>

      <SectionDivider variant="wave" className="text-muted" />

      <ScrollReveal variant="fade-up" delay={100}>
        <MethodSection />
      </ScrollReveal>

      <SectionDivider variant="blob" className="text-background" />

      <ScrollReveal variant="fade-up" delay={100}>
        <CourseContentSection />
      </ScrollReveal>

      <SectionDivider variant="paint" className="text-muted" />

      <ScrollReveal variant="zoom-in">
        <PlansSection />
      </ScrollReveal>

      <SectionDivider variant="wave" className="text-blue-50/50" />

      <ScrollReveal variant="fade-up">
        <TestimonialsSection />
      </ScrollReveal>

      <SectionDivider variant="blob" className="text-muted" />

      <ScrollReveal variant="fade-up" delay={100}>
        <PdfSection />
      </ScrollReveal>

      <SectionDivider variant="paint" className="text-muted" />

      <ScrollReveal variant="fade-up">
        <GallerySection />
      </ScrollReveal>

      <SectionDivider variant="wave" className="text-purple-50" />

      <ScrollReveal variant="fade-up">
        <EventsSection />
      </ScrollReveal>

      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
