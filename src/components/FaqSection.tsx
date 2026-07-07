import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Preciso ter experiência prévia em pintura ou desenho?",
    a: "Não. O Método VDPF foi criado especificamente para quem começa do zero. As primeiras aulas ensinam desde a base e você não precisa saber desenhar para começar.",
  },
  {
    q: "As aulas têm horário fixo ou são gravadas?",
    a: "Todas as aulas são gravadas e ficam disponíveis na plataforma. Você assiste quando quiser, quantas vezes quiser, no seu próprio ritmo.",
  },
  {
    q: "Em quanto tempo consigo trabalhar em festas?",
    a: "Depende do ritmo de cada uma, mas muitas alunas já conseguem fazer os primeiros atendimentos dentro dos primeiros 3 meses. O método é progressivo e prático.",
  },
  {
    q: "Preciso comprar materiais antes de começar?",
    a: "Não é necessário comprar nada antes de entrar. O curso inclui uma lista completa dos materiais essenciais e você vai montando seu kit gradualmente conforme avança.",
  },
  {
    q: "Tenho suporte se tiver dúvidas durante o curso?",
    a: "Sim. O acesso inclui entrada no grupo exclusivo de alunas no WhatsApp, onde você tira dúvidas e troca experiências com outras alunas e com a Luana.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Você pode pagar via Pix (à vista por R$ 250) ou cartão de crédito em até 12x de R$ 25. O acesso é liberado imediatamente após a confirmação do pagamento.",
  },
  {
    q: "Por quanto tempo tenho acesso ao curso?",
    a: "O acesso é válido por 12 meses a partir da data da compra, tempo suficiente para assistir todas as aulas e praticar com calma.",
  },
  {
    q: "E se eu me arrepender depois de comprar?",
    a: "Você tem 7 dias de garantia após a compra. Se por qualquer motivo não ficar satisfeita, devolvemos o valor integralmente.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="section bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground leading-tight">
            Perguntas frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-brand-pink/15"
              >
                <AccordionTrigger className="text-left font-body font-medium text-base md:text-lg text-foreground py-5 hover:no-underline hover:text-brand-pink">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/75 leading-relaxed pb-5 text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
