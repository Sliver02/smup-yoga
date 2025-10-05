// Import the Next.js middleware helper from next-intl
import createMiddleware from "next-intl/middleware";

// Import your routing configuration which contains all locales, defaultLocale, and pathnames
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

// Paths/patterns to skip (public folder served at root, so exclude those prefixes)
const SKIP_PREFIXES = [
  "/_next",
  "/api",
  "/images",
  "/icons",
  "/assets",
  "/fonts",
  "/static",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/sitemap-0.xml",
  "/_next/static/",
  "/_next/image/",
];

// simple file-extension check (png,jpg,svg,css,js,woff2,ico,...)
const hasFileExt = (pathname: string) => /\.[a-zA-Z0-9]{1,6}$/.test(pathname);

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // skip known prefixes or file-like requests so public/* is never routed through intl middleware
  if (
    SKIP_PREFIXES.some((p) => pathname.startsWith(p)) ||
    hasFileExt(pathname)
  ) {
    return NextResponse.next();
  }

  // otherwise run the next-intl middleware
  return intlMiddleware(req);
}

// Next.js middleware configuration object
export const config = {
  matcher: [
    "/", // Match the root path explicitly
    "/((?!api|_next|static|.*\\..*).*)",
  ],
};
