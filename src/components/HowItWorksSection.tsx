import { UserPlus, PlayCircle, Share2 } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Cadastre-se pelo botão",
    description: "Crie sua conta gratuita em poucos segundos e entre para o ecossistema Orayon."
  },
  {
    number: "2",
    icon: PlayCircle,
    title: "O vídeo explica tudo sobre os pilares do projeto",
    description: "Assista ao vídeo completo e entenda como funciona cada oportunidade disponível."
  },
  {
    number: "3",
    icon: Share2,
    title: "Divulgue seu link",
    description: "Depois de concluído o seu cadastro, divulgue o seu link para pessoas e empresas que vão precisar de alguma tecnologia em IA."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para começar a gerar resultados com IA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-8 text-center relative group hover:border-primary/50 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-sm font-bold text-white">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
