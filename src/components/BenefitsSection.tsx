import { Workflow, MessageSquare, DollarSign, Users2, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const benefitIcons = [Workflow, MessageSquare, DollarSign, Users2, Sparkles];

const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="beneficios" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{t.benefits.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.benefits.items.map((benefit, index) => {
            const Icon = benefitIcons[index];
            return (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-6 group hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
