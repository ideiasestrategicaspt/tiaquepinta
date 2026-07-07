import { WHATSAPP_CURSO } from "@/lib/whatsapp";
import { useEffect, useState } from "react"; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-soft" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <a href="#top" className="font-display text-xl md:text-2xl font-bold text-brand-pink tracking-tight">
          Tia que Pinta
        </a>
        <a
          href={WHATSAPP_CURSO}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-xs md:text-sm py-2.5 md:py-3 px-5 md:px-6"
        >
          Quero aprender <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
