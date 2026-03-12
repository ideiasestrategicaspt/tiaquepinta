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
      <SectionDivider variant="paint" />
      <AboutSection />
      <SectionDivider variant="stars" />
      <MethodSection />
      <SectionDivider variant="brush" />
      <CourseContentSection />
      <SectionDivider variant="party" />
      <PlansSection />
      <SectionDivider variant="sparkle" />
      <TestimonialsSection />
      <SectionDivider variant="paint" />
      <PdfSection />
      <SectionDivider variant="stars" />
      <GallerySection />
      <SectionDivider variant="brush" />
      <EventsSection />
      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
