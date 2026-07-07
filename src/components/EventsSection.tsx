import { WHATSAPP_FESTA } from "@/lib/whatsapp";

const services = [
  { emoji: "🎂", title: "Festas infantis", text: "Pintura facial para aniversários e celebrações." },
  { emoji: "🎪", title: "Eventos corporativos", text: "Uma atração que encanta crianças e adultos." },
  { emoji: "📸", title: "Ensaios e editoriais", text: "Arte lúdica para sessões fotográficas." },
  { emoji: "🎈", title: "Outros eventos", text: "Consulte disponibilidade." },
];

const EventsSection = () => {
  return (
    <section id="eventos" className="section gradient-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="pill-tag-dark mb-5">Contratação</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight text-balance">
            Contrate a Tia que Pinta para o seu evento
          </h2>
          <p className="text-white/75 text-base md:text-lg leading-relaxed">
            Luana atende em Vila Velha e região com agenda 2026 aberta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto mb-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="text-3xl mb-3">{s.emoji}</div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={WHATSAPP_FESTA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Verificar disponibilidade no WhatsApp
          </a>
          <p className="text-white/55 text-xs md:text-sm mt-5">
            Vila Velha — ES · Agenda 2026 aberta · +1.000 festas realizadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
