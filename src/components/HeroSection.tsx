import { CheckCircle2 } from 'lucide-react';

const CTA_LINK = "https://app.orayon.ai/webprojeto";

const HeroSection = () => {
  const bulletPoints = [
    "Comunidade + estratégias prontas para vender com IA",
    "Automação no WhatsApp e Instagram (funis e agentes)",
    "Oportunidades com afiliados, indicações e projetos",
    "Templates, playbooks e encontros (online)",
    "Para empreendedores, creators e afiliados"
  ];

  return (
    <section id="inicio" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Orayon</span> – Webprojeto
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Acesso gratuito neste mês para entrar, aprender, se conectar e desbloquear 
              oportunidades de <strong className="text-foreground">ganhos recorrentes</strong> com IA aplicada.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-3 mb-8 text-left">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            {/* Positioning Statement */}
            <p className="text-sm text-muted-foreground mb-8 p-4 rounded-xl bg-card/50 border border-border/50">
              Orayon é o ecossistema completo que combina tecnologia de ponta com estratégias 
              comprovadas para você gerar ganhos recorrentes e escalar seus resultados no digital.
            </p>

            {/* CTA Button */}
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg group w-full sm:w-auto justify-center"
              aria-label="Quero me cadastrar agora no Orayon Webprojeto"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Quero me cadastrar agora</span>
            </a>
          </div>

          {/* Right Column - Video */}
          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/kjd7KKUMNH4"
                title="Orayon Webprojeto - Vídeo explicativo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
                aria-label="Vídeo explicativo sobre o Orayon Webprojeto"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-40" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-30" />
          </div>
        </div>

        {/* Quick Checklist */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm">
          {["Estratégias prontas", "Comunidade e networking", "Funis com IA", "Templates e playbooks"].map((item, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border/50">
              <span className="text-accent">✅</span>
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
