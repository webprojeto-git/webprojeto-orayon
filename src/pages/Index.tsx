import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import EarningsSection from '@/components/EarningsSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Orayon | Ecossistema de Ganhos com Inteligência Artificial</title>
        <meta 
          name="description" 
          content="Construa múltiplas fontes de renda recorrente com o ecossistema Orayon. Tecnologia de IA para influenciadores digitais, afiliados e empreendedores." 
        />
        <meta name="keywords" content="Orayon, ganhos recorrentes, IA, inteligência artificial, renda digital, afiliados, empreendedores digitais" />
        <meta property="og:title" content="Orayon | Ecossistema de Ganhos com IA" />
        <meta property="og:description" content="Construa múltiplas fontes de renda recorrente com tecnologia de ponta e estratégias comprovadas." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://orayon.com.br" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <HowItWorksSection />
          <EarningsSection />
          <TargetAudienceSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
