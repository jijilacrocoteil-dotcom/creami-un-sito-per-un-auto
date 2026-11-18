import { LANGUAGES, useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <fieldset
      data-ocid="language.selector"
      aria-label={t.languageLabel}
      className="flex items-center gap-1 rounded-full border border-primary/40 bg-background/60 p-1 backdrop-blur-sm"
    >
      <Globe
        className="ml-1.5 hidden h-3.5 w-3.5 text-primary/70 sm:block"
        aria-hidden="true"
      />
      {LANGUAGES.map((lang) => {
        const active = lang.code === language;
        return (
          <button
            key={lang.code}
            type="button"
            data-ocid={`language.option.${lang.code}`}
            onClick={() => setLanguage(lang.code)}
            aria-pressed={active}
            aria-label={lang.label}
            title={lang.label}
            className={cn(
              "min-h-7 rounded-full px-2.5 py-1 text-[0.7rem] font-semibold tracking-wider transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
              active
                ? "bg-gold-gradient text-primary-foreground shadow-gold-soft"
                : "text-primary/80 hover:bg-primary/10 hover:text-primary",
            )}
          >
            {lang.short}
          </button>
        );
      })}
    </fieldset>
  );
}
