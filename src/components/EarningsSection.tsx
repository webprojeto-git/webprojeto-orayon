import { Users, Percent, Package, RefreshCw, Handshake, Gift } from 'lucide-react';

const earningsWays = [
  {
    icon: Percent,
    title: 'Comissões de Afiliados',
    description: 'Ganhe comissões atrativas indicando produtos e serviços do ecossistema.',
  },
  {
    icon: Package,
    title: 'Produtos Digitais',
    description: 'Venda e lucre com produtos digitais criados e otimizados por IA.',
  },
  {
    icon: RefreshCw,
    title: 'Recorrência Mensal',
    description: 'Construa uma renda mensal previsível através de assinaturas e renovações.',
  },
  {
    icon: Users,
    title: 'Indicação de Membros',
    description: 'Expanda sua rede e ganhe bônus por cada novo membro que você trouxer.',
  },
  {
    icon: Handshake,
    title: 'Parcerias Estratégicas',
    description: 'Conecte-se com outros empreendedores e crie parcerias lucrativas.',
  },
  {
    icon: Gift,
    title: 'Bônus Exclusivos',
    description: 'Alcance metas e desbloqueie bônus especiais e premiações.',
  },
];

const EarningsSection = () => {
  return (
    <section id="ganhos" className="section-padding relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(185_84%_43%/0.08),transparent_60%)]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
            Monetização
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Formas de{' '}
            <span className="gradient-text-accent">Ganho</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diversifique suas fontes de renda com múltiplas oportunidades de monetização
          </p>
        </div>

        {/* Earnings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {earningsWays.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 group hover:border-accent/50 transition-all duration-500 cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarningsSection;
