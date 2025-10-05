// src/i18n/next-sitemap.routingData.js
// This file contains the routing data used by next-sitemap to generate
// multilingual sitemaps with proper hreflang tags for SEO

// All supported locales for the application
const locales = [
  "en",
  "it", // Italian
];

// Mapping of base paths to localized URLs for each locale
// This ensures that each page has proper localized URLs in the sitemap
const pathnames = {
  // Homepage - same path for all locales
  "/": {
    en: "/",
    it: "/",
  },
};

// Export the routing data for next-sitemap configuration
module.exports = { locales, pathnames };
