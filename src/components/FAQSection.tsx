import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'Preciso aparecer ou mostrar meu rosto?',
    answer: 'Não! O Orayon oferece estratégias que funcionam mesmo sem você precisar aparecer. Você pode trabalhar de forma anônima ou usando as ferramentas de IA para criar conteúdo.',
  },
  {
    question: 'Tem alguma mensalidade ou taxa recorrente?',
    answer: 'O cadastro no ecossistema é gratuito. Você terá acesso às informações de como funciona o modelo de ganhos e poderá escolher como deseja participar de acordo com seu objetivo.',
  },
  {
    question: 'Quanto posso ganhar com o Orayon?',
    answer: 'Os ganhos variam de acordo com seu esforço e dedicação. Temos membros que conquistam desde uma renda extra até resultados expressivos mensais. O ecossistema oferece múltiplas fontes de ganho para você escalar.',
  },
  {
    question: 'Preciso ter experiência prévia?',
    answer: 'Não é necessário ter experiência. O ecossistema foi desenvolvido para atender desde iniciantes até profissionais experientes, com ferramentas e treinamentos que acompanham seu nível.',
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Você terá acesso a uma comunidade ativa, materiais de apoio e suporte para tirar dúvidas e acelerar seus resultados dentro do ecossistema.',
  },
  {
    question: 'O Orayon é seguro e confiável?',
    answer: 'Sim! O Orayon é um projeto sério e estruturado, focado em entregar valor real para seus membros através de tecnologia de ponta e estratégias de mercado comprovadas.',
  },
  {
    question: 'Posso participar de qualquer lugar?',
    answer: 'Sim, o ecossistema é 100% online e pode ser acessado de qualquer lugar do mundo. Tudo que você precisa é de um dispositivo com internet.',
  },
  {
    question: 'Como começo a ganhar?',
    answer: 'Após o cadastro, você terá acesso ao passo a passo completo para ativar sua conta e começar a explorar as diferentes formas de ganho disponíveis no ecossistema.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(245_58%_51%/0.08),transparent_60%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas principais dúvidas sobre o ecossistema Orayon
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl border-none px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-base md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
