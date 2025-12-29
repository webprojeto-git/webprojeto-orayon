import { UserPlus, Rocket, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Cadastro no Ecossistema',
    description: 'Faça seu cadastro gratuito e tenha acesso imediato ao ecossistema Orayon e todas as suas ferramentas.',
  },
  {
    icon: Rocket,
    step: '02',
    title: 'Ativação e Uso das Ferramentas',
    description: 'Ative seu acesso e comece a utilizar as ferramentas de IA para potencializar suas estratégias digitais.',
  },
  {
    icon: DollarSign,
    step: '03',
    title: 'Ganhos Recorrentes',
    description: 'Explore múltiplas fontes de renda e construa um fluxo de ganhos recorrentes e escaláveis.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Passo a Passo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Como{' '}
            <span className="gradient-text">Funciona</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Três passos simples para começar sua jornada de ganhos com IA
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Step Card */}
                <div className="glass-card rounded-3xl p-8 text-center h-full hover:border-primary/50 transition-all duration-500">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Step Label */}
                  <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 block">
                    Passo {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
