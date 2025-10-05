"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  routeTranslations,
  defaultLocale,
  type Language,
} from "@/utils/routeTranslations";

interface TranslationContextType {
  t: (key: string) => string;
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
  toggleLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [language, setLanguage] = useState<Language>(() => {
    // Try localStorage first, then URL, then default
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("preferred-language") as Language;
      if (saved && (saved === "es" || saved === "en")) {
        return saved;
      }
    }
    const currentLocale = pathname.split("/")[1] as Language;
    return currentLocale || defaultLocale;
  });

  const [translations, setTranslations] = useState({});

  const loadTranslations = async (lang: Language) => {
    try {
      const response = await import(`@/locales/${lang}.json`);
      setTranslations(response.default);
    } catch (error) {
      console.error(`Failed to load translations for ${lang}:`, error);
    }
  };

  // Update language when URL changes
  useEffect(() => {
    const urlLocale = pathname.split("/")[1] as Language;
    if (urlLocale && (urlLocale === "es" || urlLocale === "en")) {
      if (urlLocale !== language) {
        setLanguage(urlLocale);
        if (typeof window !== "undefined") {
          localStorage.setItem("preferred-language", urlLocale);
        }
      }
    }
  }, [pathname, language]);

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k as keyof typeof value];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  };

  const translateRoute = (
    currentPath: string,
    targetLang: Language
  ): string => {
    const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}/, "") || "/";
    const segments = pathWithoutLocale.split("/").filter(Boolean);

    if (segments.length === 0) {
      return `/${targetLang}`;
    }

    const mainRoute = segments[0];
    const translations =
      routeTranslations[targetLang as keyof typeof routeTranslations];
    const translatedRoute =
      translations[mainRoute as keyof typeof translations] || mainRoute;

    const remainingSegments = segments.slice(1);
    const newPath = `/${targetLang}/${translatedRoute}${
      remainingSegments.length > 0 ? "/" + remainingSegments.join("/") : ""
    }`;

    return newPath;
  };

  const changeLanguage = async (newLanguage: Language) => {
    const newPath = translateRoute(pathname, newLanguage);
    // Use history API to avoid page reload
    window.history.replaceState({}, "", newPath);
    setLanguage(newLanguage);

    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", newLanguage);
    }
  };

  const toggleLanguage = async () => {
    const newLang = language === "es" ? "en" : "es";
    changeLanguage(newLang);
  };

  return (
    <TranslationContext.Provider
      value={{ t, language, changeLanguage, toggleLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
}
