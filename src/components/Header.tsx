import { ArrowRight } from 'lucide-react';

const CTA_LINK = "https://app.orayon.ai/webprojeto";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold gradient-text">
            Orayon
          </a>

          {/* CTA Button */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
            aria-label="Cadastrar no Orayon Webprojeto"
          >
            <span>Cadastrar</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
