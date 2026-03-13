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

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <SectionDivider variant="paint" className="text-purple-50/80" />
      <AboutSection />
      <SectionDivider variant="wave" className="text-muted" />
      <MethodSection />
      <SectionDivider variant="blob" className="text-background" />
      <CourseContentSection />
      <SectionDivider variant="paint" className="text-muted" />
      <PlansSection />
      <SectionDivider variant="wave" className="text-blue-50/50" />
      <TestimonialsSection />
      <SectionDivider variant="blob" className="text-muted" />
      <PdfSection />
      <SectionDivider variant="paint" className="text-muted" />
      <GallerySection />
      <SectionDivider variant="wave" className="text-purple-50" />
      <EventsSection />
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
