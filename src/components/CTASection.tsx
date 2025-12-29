import { ArrowRight, Sparkles } from 'lucide-react';

const CTA_LINK = "https://orayon.fernandomentor.com.br/";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Oportunidade Exclusiva
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Pronto para transformar sua vida financeira com{' '}
            <span className="gradient-text">Inteligência Artificial</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Entre agora para o ecossistema Orayon e comece a construir suas múltiplas fontes 
            de renda recorrente. Não deixe essa oportunidade passar.
          </p>

          {/* CTA Button */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3 text-lg group"
          >
            <span>Quero Fazer Parte do Orayon</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Trust Elements */}
          <p className="text-sm text-muted-foreground mt-8">
            Cadastro gratuito • Sem compromisso • Acesso imediato
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
