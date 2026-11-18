import { Layout } from "@/components/Layout";
import {
  LANGUAGES,
  type LanguageCode,
  LanguageContext,
  TRANSLATIONS,
} from "@/lib/i18n";
import { Home } from "@/pages/Home";
import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "vs-auto-language";

function getInitialLanguage(): LanguageCode {
  if (typeof window === "undefined") return "it";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && LANGUAGES.some((l) => l.code === stored)) {
    return stored as LanguageCode;
  }
  return "it";
}

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage);

  const dir = useMemo(
    () => LANGUAGES.find((l) => l.code === language)?.dir ?? "ltr",
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language, dir]);

  const value = useMemo(
    () => ({ language, setLanguage, t: TRANSLATIONS[language], dir }),
    [language, dir],
  );

  return (
    <LanguageContext.Provider value={value}>
      <Layout>
        <Home />
      </Layout>
    </LanguageContext.Provider>
  );
}
