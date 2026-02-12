import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/translations';

const languages: { code: Language; flag: string; label: string }[] = [
  { code: 'pt', flag: '🇧🇷', label: 'Português (Brasil)' },
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language selector">
      {languages.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => setLanguage(code)}
          aria-label={label}
          aria-pressed={language === code}
          className={`w-8 h-8 text-lg rounded-full flex items-center justify-center transition-all ${
            language === code
              ? 'ring-2 ring-primary scale-110'
              : 'opacity-60 hover:opacity-100 hover:scale-105'
          }`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
