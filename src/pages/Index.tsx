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

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <MethodSection />
      <CourseContentSection />
      <PlansSection />
      <TestimonialsSection />
      <PdfSection />
      <GallerySection />
      <EventsSection />
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
