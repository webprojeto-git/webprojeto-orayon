import { UserPlus, PlayCircle, Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const stepIcons = [UserPlus, PlayCircle, Share2];

const HowItWorksSection = () => {
  const { t } = useLanguage();

  return (
    <section id="como-funciona" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.howItWorks.title} <span className="gradient-text">{t.howItWorks.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-8 text-center relative group hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
