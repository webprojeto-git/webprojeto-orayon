import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50 bg-card/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold gradient-text">
            ai.webprojeto
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} ai.webprojeto. {t.footer.copyright}
          </p>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="https://orayon.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              orayon.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
