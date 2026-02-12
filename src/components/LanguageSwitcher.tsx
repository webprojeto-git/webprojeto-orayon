import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/lib/translations';

const languages: { code: Language; label: string; ariaLabel: string }[] = [
  { code: 'pt', label: 'BR', ariaLabel: 'Português (Brasil)' },
  { code: 'en', label: 'US', ariaLabel: 'English' },
  { code: 'es', label: 'ES', ariaLabel: 'Español' },
];

const FlagBR = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm">
    <rect width="640" height="480" fill="#009b3a" />
    <polygon points="320,60 600,240 320,420 40,240" fill="#fedf00" />
    <circle cx="320" cy="240" r="90" fill="#002776" />
    <path d="M196,240 C220,200 420,200 444,240" fill="none" stroke="#fff" strokeWidth="12" />
  </svg>
);

const FlagUS = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm">
    <rect width="640" height="480" fill="#fff" />
    {[0,1,2,3,4,5,6].map(i => (
      <rect key={i} y={i * 74} width="640" height="37" fill="#b22234" />
    ))}
    <rect width="260" height="260" fill="#3c3b6e" />
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 640 480" className="w-6 h-4 rounded-sm">
    <rect width="640" height="480" fill="#c60b1e" />
    <rect y="120" width="640" height="240" fill="#ffc400" />
  </svg>
);

const flagComponents: Record<Language, React.FC> = {
  pt: FlagBR,
  en: FlagUS,
  es: FlagES,
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Language selector">
      {languages.map(({ code, ariaLabel }) => {
        const Flag = flagComponents[code];
        return (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            aria-label={ariaLabel}
            aria-pressed={language === code}
            className={`p-1 rounded transition-all border ${
              language === code
                ? 'border-primary ring-1 ring-primary scale-110'
                : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
            }`}
          >
            <Flag />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
