import { Video, ShoppingBag, Briefcase, Check } from 'lucide-react';

const audiences = [
  {
    icon: Video,
    title: 'Influenciadores Digitais',
    description: 'Criadores de conteúdo que querem monetizar além de publis e parcerias tradicionais.',
    benefits: [
      'Monetize sua audiência de forma inteligente',
      'Crie produtos digitais com IA',
      'Ganhe comissões recorrentes',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Afiliados de Produtos Digitais',
    description: 'Profissionais que já trabalham com afiliação e querem escalar resultados.',
    benefits: [
      'Produtos de alta conversão',
      'Comissões competitivas',
      'Ferramentas de automação',
    ],
  },
  {
    icon: Briefcase,
    title: 'Empreendedores Digitais',
    description: 'Quem busca construir um negócio sólido e escalável no mercado digital.',
    benefits: [
      'Modelo de negócio validado',
      'Suporte e comunidade',
      'Múltiplas fontes de receita',
    ],
  },
];

const TargetAudienceSection = () => {
  return (
    <section id="para-quem" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Público-Alvo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Para{' '}
            <span className="gradient-text">Quem É</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O Orayon foi criado para pessoas que querem construir resultados reais no digital
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 group hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <audience.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {audience.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mt-auto">
                {audience.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
