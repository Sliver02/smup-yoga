import "@/designSystem/globals.scss";
import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation"; // Next.js API for 404 handling
import { routing } from "@/i18n/routing";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const rightGrotesk = localFont({
  src: "../../../public/fonts/RightGrotesk.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "SMUP — Sarah Pompanin | Yoga in the Dolomites",
    template: "%s | SMUP Yoga",
  },
  description:
    "Outdoor and studio yoga by Sarah Pompanin (SMUP) — group & private lessons in the Venetian Dolomites. Summer outdoor sessions, private bookings, and Cortina 2026 offerings.",
  openGraph: {
    title: "SMUP — Yoga in the Dolomites",
    description:
      "Outdoor and studio yoga by Sarah Pompanin (SMUP). Group & private lessons in the Venetian Dolomites.",
    url: "https://smupyoga.com",
    siteName: "SMUP Yoga",
    images: [
      {
        url: "https://smupyoga.com/images/IMG_2646.jpg",
        width: 1200,
        height: 630,
        alt: "SMUP Yoga in the Dolomites",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMUP — Yoga in the Dolomites",
    description: "Outdoor and studio yoga by Sarah Pompanin (SMUP).",
  },
  alternates: {
    canonical: "https://smupyoga.com/",
    languages: {
      en: "https://smupyoga.com/en/",
      it: "https://smupyoga.com/it/",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Extract the locale from the route params (async for Next.js App Router)
  const { locale } = await params;

  // Validate that the requested locale is supported
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Load the translation messages for the selected locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} data-theme="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={classNames(inter.variable, rightGrotesk.variable)}>
        <NextIntlClientProvider messages={messages}>
          <div className={classNames("root")}>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
