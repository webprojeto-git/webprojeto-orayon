import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import BenefitsSection from '@/components/BenefitsSection';
import AuthoritySection from '@/components/AuthoritySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  // JSON-LD Schema
  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orayon",
    "url": "https://orayon.ai",
    "logo": "https://orayon.ai/logo.png",
    "description": "Ecossistema de IA para ganhos recorrentes e automação de negócios digitais"
  };

  const schemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Orayon Webprojeto",
    "url": "https://orayon.ai/webprojeto"
  };

  const schemaVideo = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Orayon Webprojeto - Como Funciona",
    "description": "Vídeo explicativo sobre o ecossistema Orayon e como gerar ganhos recorrentes com IA",
    "thumbnailUrl": "https://img.youtube.com/vi/kjd7KKUMNH4/maxresdefault.jpg",
    "uploadDate": "2024-01-01",
    "contentUrl": "https://www.youtube.com/watch?v=kjd7KKUMNH4",
    "embedUrl": "https://www.youtube.com/embed/kjd7KKUMNH4"
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o Orayon Webprojeto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Orayon é um ecossistema completo que combina tecnologia de ponta com estratégias comprovadas para você gerar ganhos recorrentes e escalar seus resultados no digital usando IA."
        }
      },
      {
        "@type": "Question",
        "name": "Para quem é o Orayon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O Orayon é para influenciadores, criadores de conteúdo, afiliados de produtos digitais, empreendedores e empresários que querem usar IA para vender, atender e escalar seus negócios."
        }
      },
      {
        "@type": "Question",
        "name": "O cadastro é gratuito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, o acesso é gratuito neste mês para você entrar, aprender, se conectar e desbloquear oportunidades de ganhos recorrentes com IA aplicada."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Orayon Webprojeto | Ganhos Recorrentes com IA Aplicada</title>
        <meta 
          name="description" 
          content="Acesso gratuito ao ecossistema Orayon. Aprenda, conecte-se e desbloqueie oportunidades de ganhos recorrentes com IA aplicada. Para empreendedores, creators e afiliados." 
        />
        <meta name="keywords" content="Orayon, Webprojeto, IA, inteligência artificial, ganhos recorrentes, automação, WhatsApp, Instagram, afiliados, empreendedores digitais" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Orayon Webprojeto | Ganhos Recorrentes com IA" />
        <meta property="og:description" content="Acesso gratuito ao ecossistema Orayon. Desbloqueie oportunidades de ganhos recorrentes com IA aplicada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orayon.ai/webprojeto" />
        <meta property="og:image" content="https://img.youtube.com/vi/kjd7KKUMNH4/maxresdefault.jpg" />
        <meta property="og:site_name" content="Orayon" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Orayon Webprojeto | Ganhos Recorrentes com IA" />
        <meta name="twitter:description" content="Acesso gratuito ao ecossistema Orayon. Desbloqueie oportunidades de ganhos recorrentes com IA aplicada." />
        <meta name="twitter:image" content="https://img.youtube.com/vi/kjd7KKUMNH4/maxresdefault.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://orayon.ai/webprojeto" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrganization)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaWebSite)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaVideo)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(schemaFAQ)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <TargetAudienceSection />
          <BenefitsSection />
          <AuthoritySection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
