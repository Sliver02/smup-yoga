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

  // No `pathnames` map: every route uses the same path in both locales, so the
  // identity mapping it used to hold did nothing except narrow `Link`'s href
  // type to "/" — which is why components reached for next/link instead and
  // dropped the locale prefix on every internal link.
});

// Export i18n-aware navigation helpers for usage throughout the app
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
