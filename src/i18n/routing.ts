// src/i18n/routing.ts

// Import helpers to define i18n routing and navigation from next-intl
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

// List of all supported locales for the application
export const locales = [
  "en",
  "it", // Italian
] as const;

// Type for allowed locale strings (used for type safety)
export type Locale = (typeof locales)[number];

// Define the i18n routing configuration
export const routing = defineRouting({
  // All supported locales for this project
  locales,

  // Fallback locale if no match is found
  defaultLocale: "it",

  // Define localized pathnames for important routes
  pathnames: {
    "/": {
      en: "/",
      it: "/",
    },
  },
});

// Export i18n-aware navigation helpers for usage throughout the app
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
