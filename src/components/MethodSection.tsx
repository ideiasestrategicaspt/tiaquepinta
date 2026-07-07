const modules = [
  { num: "01", title: "Fundamentos", text: "O que é a pintura facial, segurança e primeiros passos." },
  { num: "02", title: "Materiais", text: "Quais tintas, pincéis e acessórios usar. Lista completa." },
  { num: "03", title: "Técnicas", text: "Coordenação motora, one stroke, técnica esponja e acabamentos." },
  { num: "04", title: "Designs", text: "Mais de 45 desenhos populares em festas infantis." },
  { num: "05", title: "Portfólio", text: "Como montar seu portfólio e se posicionar no mercado." },
  { num: "06", title: "Negócio", text: "Como precificar, cobrar e conquistar os primeiros clientes." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="section" style={{ background: "hsl(var(--brand-pink-light))" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="pill-tag mb-5">O Método VDPF</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 leading-tight text-balance">
            Do básico ao avançado — com um caminho claro
          </h2>
          <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
            O Método VDPF cobre tudo o que você precisa para aprender pintura facial do zero e começar a trabalhar em festas e eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
          {modules.map((m, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              style={{ borderLeft: "4px solid hsl(var(--brand-pink))" }}
            >
              <p className="font-display text-sm text-brand-pink uppercase tracking-widest mb-3">
                Módulo {m.num}
              </p>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                {m.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
