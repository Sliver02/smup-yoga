import type { NextConfig } from "next";
import withPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "it"], // Supported languages
    defaultLocale: "it", // Default language
  },
};

export default withPlaiceholder(nextConfig);
