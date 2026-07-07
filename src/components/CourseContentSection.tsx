import { Check, Gift } from "lucide-react";

const items = [
  { title: "Mais de 50 aulas gravadas", text: "Acesso imediato, assista quando e onde quiser." },
  { title: "Apostila completa", text: "Material de apoio atualizado." },
  { title: "Portfólio de pinturas", text: "Referências visuais para praticar." },
  { title: "Placas de treino", text: "Exercícios para desenvolver a técnica." },
  { title: "Lista de atividades", text: "Roteiro de prática para evoluir." },
  { title: "Certificado de participação", text: "Documento que comprova sua formação." },
  { title: "Bônus: Pintura Gestacional", text: "Aula exclusiva com técnicas especiais.", bonus: true },
  { title: "Bônus: Bola Mania", text: "Escultura com balões para ampliar serviços.", bonus: true },
];

const CourseContentSection = () => {
  return (
    <section className="section bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="pill-tag-dark mb-5">Tudo incluso</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white mb-4 leading-tight text-balance">
            O que você recebe ao entrar no Método VDPF
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-xl p-5 md:p-6 flex gap-4"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex-shrink-0">
                {it.bonus ? (
                  <div className="w-8 h-8 rounded-lg bg-[#F472B6]/20 flex items-center justify-center">
                    <Gift className="w-4 h-4 text-[#F472B6]" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-[#F472B6]/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#F472B6]" />
                  </div>
                )}
              </div>
              <div>
                <p className="font-medium text-white mb-1">{it.title}</p>
                <p className="text-sm text-white/60 leading-relaxed">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;
