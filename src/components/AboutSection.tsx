import { Brain, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Tecnologia IA',
    description: 'Ferramentas inteligentes que trabalham por você, automatizando processos e maximizando resultados.',
  },
  {
    icon: TrendingUp,
    title: 'Modelo de Ganhos',
    description: 'Sistema estruturado para gerar receita recorrente através de múltiplas fontes de monetização.',
  },
  {
    icon: Zap,
    title: 'Escalabilidade Digital',
    description: 'Cresça sem limites. Nossa infraestrutura suporta seu crescimento exponencial no digital.',
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(245_58%_51%/0.08),transparent_60%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Sobre o Orayon
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que é o{' '}
            <span className="gradient-text">Orayon</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-balance">
            Orayon é um ecossistema digital completo que une o poder da Inteligência Artificial 
            com estratégias de monetização para que você construa um negócio digital sólido, 
            com ganhos recorrentes e escaláveis.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 glow-effect group hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
