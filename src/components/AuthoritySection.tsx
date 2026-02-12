import { Bot, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const featureIcons = [Zap, TrendingUp];

const AuthoritySection = () => {
  const { t } = useLanguage();

  return (
    <section id="webprojeto" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t.authority.badge}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">{t.authority.title}</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {t.authority.subtitle}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {t.authority.features.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-card/50 border border-border/50">
                  <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-sm text-muted-foreground p-4 rounded-xl bg-card/30 border border-border/30">
            {t.authority.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
