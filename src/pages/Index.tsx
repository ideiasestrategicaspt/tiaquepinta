import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import MethodSection from "@/components/MethodSection";
import CourseContentSection from "@/components/CourseContentSection";
import PlansSection from "@/components/PlansSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventsSection from "@/components/EventsSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <StatsBar />

      <ScrollReveal variant="fade-up"><AboutSection /></ScrollReveal>
      <ScrollReveal variant="fade-up"><ObjectionsSection /></ScrollReveal>
      <ScrollReveal variant="fade-up"><MethodSection /></ScrollReveal>
      <ScrollReveal variant="fade-up"><CourseContentSection /></ScrollReveal>
      <ScrollReveal variant="fade-up"><PlansSection /></ScrollReveal>
      <ScrollReveal variant="fade-up"><TestimonialsSection /></ScrollReveal>
      <ScrollReveal variant="fade-up"><EventsSection /></ScrollReveal>
      <ScrollReveal variant="fade-up"><FaqSection /></ScrollReveal>

      <FooterSection />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
