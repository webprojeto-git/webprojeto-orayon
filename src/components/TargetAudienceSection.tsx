import { Users, ShoppingBag, Briefcase, Bot, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const audienceIcons = [Users, ShoppingBag, Briefcase, Bot, Building2];

const TargetAudienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="para-quem-e" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.targetAudience.title} <span className="gradient-text">{t.targetAudience.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.targetAudience.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.targetAudience.audiences.map((audience, index) => {
            const Icon = audienceIcons[index];
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
