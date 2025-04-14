import TypesafeI18n from "@/commons/i18n/i18n-react";
import { detectLocale } from "@/commons/i18n/i18n-util";
import { loadLocaleAsync } from "@/commons/i18n/i18n-util.async";
import { useEffect, useState } from "react";
import { sessionStorageDetector } from "typesafe-i18n/detectors";

const detectedLocale = detectLocale(sessionStorageDetector);

export type TranslationProps = {
  children: React.ReactNode;
};

export const Translation: React.FC<TranslationProps> = ({ children }) => {
  const [wasLoaded, setWasLoaded] = useState(false);

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true));
  }, []);

  if (!wasLoaded) return null;

  return <TypesafeI18n locale={detectedLocale}>{children}</TypesafeI18n>;
};
