import { CheckCircle2, Sparkles } from 'lucide-react';
import { handleRandomCtaClick } from '@/hooks/use-random-cta';

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
              Vagas Limitadas
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Últimas vagas do cadastro
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Você pode decidir depois. Garanta sua vaga agora e explore o ecossistema Orayon 
            sem compromisso.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            onClick={handleRandomCtaClick}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary js-random-cta inline-flex items-center gap-3 text-lg group"
            aria-label="Quero me cadastrar agora no Orayon Webprojeto"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Quero me cadastrar agora</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
