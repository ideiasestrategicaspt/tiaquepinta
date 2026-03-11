import { WHATSAPP_PDF } from "@/lib/whatsapp";
import { FileText } from "lucide-react";

const PdfSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-card text-center">
          <div className="w-16 h-16 rounded-full gradient-warm flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2 className="font-display text-3xl font-bold text-gradient mb-4">
            Comece com os PDFs para iniciantes
          </h2>
          <p className="font-body text-foreground/80 text-lg mb-6">
            Pacote com 3 PDFs para quem quer começar na pintura facial.
          </p>
          <ul className="font-body text-foreground/80 text-left max-w-xs mx-auto mb-6 space-y-2">
            <li>📄 Apostila de apoio</li>
            <li>🎨 Desenhos para treino</li>
            <li>📚 Guia para iniciantes</li>
          </ul>
          <p className="font-display text-4xl font-bold text-gradient mb-6">R$ 97</p>
          <a
            href={WHATSAPP_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display text-lg font-bold px-10 py-4 rounded-full gradient-hero text-primary-foreground shadow-button hover:scale-105 transition-transform"
          >
            Quero os PDFs
          </a>
        </div>
      </div>
    </section>
  );
};

export default PdfSection;
