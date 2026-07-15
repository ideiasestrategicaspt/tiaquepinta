
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
      <div className="container mx-auto flex items-center justify-between h-14 md:h-20 px-4">
        <a href="#top" className="font-display text-lg md:text-2xl font-bold text-brand-pink tracking-tight">
          Tia que Pinta
        </a>
        <a
          href="#precos"
          className="btn-primary text-xs md:text-sm py-2 md:py-3 px-4 md:px-6"
        >
          <span className="md:hidden">Quero aprender</span>
          <span className="hidden md:inline">Quero aprender →</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
