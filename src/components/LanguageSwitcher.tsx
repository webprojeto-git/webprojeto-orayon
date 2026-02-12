import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/translations';

const languages: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

const langNames: Record<Language, string> = {
  pt: 'Português (Brasil)',
  en: 'English',
  es: 'Español',
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language selector">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          aria-label={langNames[code]}
          aria-pressed={language === code}
          className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
            language === code
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
