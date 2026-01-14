import { Users, ShoppingBag, Briefcase, Bot, Building2 } from 'lucide-react';

const audiences = [
  {
    icon: Users,
    title: "Influenciadores e criadores",
    description: "Monetize sua audiência com ferramentas de IA"
  },
  {
    icon: ShoppingBag,
    title: "Afiliados de produtos digitais",
    description: "Automatize suas vendas e escale resultados"
  },
  {
    icon: Briefcase,
    title: "Empreendedores e prestadores de serviço",
    description: "Atenda mais clientes com menos esforço"
  },
  {
    icon: Bot,
    title: "Quem quer usar IA para vender e escalar",
    description: "Aprenda e aplique estratégias comprovadas"
  },
  {
    icon: Building2,
    title: "Empresários que querem escalar com IA",
    description: "Atenda clientes e automatize processos"
  }
];

const TargetAudienceSection = () => {
  return (
    <section id="para-quem-e" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Para quem <span className="gradient-text">é</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O ecossistema Orayon foi criado para quem quer resultados reais com IA
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{audience.title}</h3>
                  <p className="text-sm text-muted-foreground">{audience.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
