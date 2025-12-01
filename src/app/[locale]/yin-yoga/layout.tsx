import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: "Yin Yoga",
    description: isItalian
      ? "Yin Yoga a Cortina, Belluno e Cadore. Sequenze lente e passive con supporti. Utile a stimolare il tessuto connettivo, aumentare mobilità e favorire il rilassamento profondo."
      : "Yin Yoga in Cortina, Belluno and Cadore. Slow passive postures aided by props. Stimulates connective tissue, increases mobility and encourages deep relaxation.",
    openGraph: {
      title: isItalian
        ? "Yin Yoga — Immobilità profonda e rigenerazione"
        : "Yin Yoga — Deep stillness and restoration",
      description: isItalian
        ? "Lezioni di Yin Yoga nelle Dolomiti con Sarah Pompanin. Pratica rigenerante per corpo e mente."
        : "Yin Yoga classes in the Dolomites with Sarah Pompanin. Restorative practice for body and mind.",
      url: `https://smupyoga.com/${locale}/yin-yoga/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/PXL_20250601_164142948.MP.jpg",
          width: 1200,
          height: 630,
          alt: "Yin Yoga",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Yin Yoga",
      description: isItalian
        ? "Immobilità profonda nelle Dolomiti"
        : "Deep stillness in the Dolomites",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/yin-yoga/`,
      languages: {
        en: "https://smupyoga.com/en/yin-yoga/",
        it: "https://smupyoga.com/it/yin-yoga/",
      },
    },
  };
}

export default function YinYogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
