const stats = [
  { number: "300+", label: "Alunas formadas" },
  { number: "19,6 mil", label: "Seguidores no Instagram" },
  { number: "1.000+", label: "Festas realizadas" },
  { number: "Desde 2012", label: "No mercado de eventos" },
];

const StatsBar = () => {
  return (
    <section className="bg-brand-black py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center ${i > 0 ? "md:border-l md:border-white/10" : ""}`}
            >
              <p className="font-display text-3xl md:text-5xl font-semibold text-[#F472B6] mb-2 leading-none">
                {s.number}
              </p>
              <p className="text-[11px] md:text-xs text-white/50 uppercase tracking-widest">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
