import { Bot, Zap, TrendingUp } from 'lucide-react';

const AuthoritySection = () => {
  return (
    <section id="webprojeto" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Sobre o Projeto</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Webprojeto</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Automações e crescimento com IA aplicada para negócios.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border/50">
              <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Automação Inteligente</h3>
                <p className="text-sm text-muted-foreground">
                  Funis automatizados para WhatsApp e Instagram que trabalham 24/7
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border/50">
              <TrendingUp className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Crescimento Escalável</h3>
                <p className="text-sm text-muted-foreground">
                  Estratégias prontas para escalar seus resultados com IA
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground p-4 rounded-xl bg-card/30 border border-border/30">
            Entre para o Ecossistema de IA. Um ambiente para empreendedores, influenciadores e afiliados 
            que querem usar IA e automação para gerar oportunidades reais e ganhos recorrentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
