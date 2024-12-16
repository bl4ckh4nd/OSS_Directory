interface FilterBarProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: string[];
}

export const FilterBar = ({ selectedLanguage, onLanguageChange, languages }: FilterBarProps) => {
  return (
    <div className="flex items-center gap-4 py-4">
      <span className="text-sm font-medium text-casper/60">Filter by:</span>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onLanguageChange('')}
          className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
            selectedLanguage === ''
              ? 'bg-regentGray text-cloudBurst shadow-lg shadow-regentGray/30'
              : 'bg-fiord/20 text-casper/60 hover:bg-regentGray/20 border border-fiord/30'
          }`}
        >
          All
        </button>
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => onLanguageChange(lang)}
            className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
              selectedLanguage === lang
                ? 'bg-regentGray text-cloudBurst shadow-lg shadow-regentGray/30'
                : 'bg-fiord/20 text-casper/60 hover:bg-regentGray/20 border border-fiord/30'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};