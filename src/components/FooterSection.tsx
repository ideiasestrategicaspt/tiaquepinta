import { WHATSAPP_PLANO_ESSENCIAL } from "@/lib/whatsapp";
import { Instagram } from "lucide-react";

const FooterSection = () => {
  return (
    <>
      {/* Final CTA */}
      <section className="section gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--brand-pink) / 0.3) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 text-balance">
              Sua arte pode se tornar sua principal fonte de renda
            </h2>
            <p className="text-white/75 text-base md:text-lg mb-10 leading-relaxed">
              Junte-se às mais de 300 alunas que já estão vivendo de pintura facial.
            </p>
            <a
              href={WHATSAPP_PLANO_ESSENCIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base py-4 px-8"
            >
              Quero entrar no Método VDPF
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-white/50">
              © 2026 Tia que Pinta — Luana Moreira · Vila Velha, ES
            </p>
            <a
              href="https://instagram.com/tiaquepinta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F472B6] hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @tiaquepinta
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
