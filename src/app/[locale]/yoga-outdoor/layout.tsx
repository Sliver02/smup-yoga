import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: isItalian ? "Yoga Outdoor" : "Outdoor Yoga",
    description: isItalian
      ? "Sessioni di yoga all'aperto nelle Dolomiti. BAR ALPINO Calalzo, Malga Caseera Razzo, rifugi. Pratica yoga immersi nella natura con Sarah Pompanin."
      : "Outdoor yoga sessions in the Dolomites. BAR ALPINO Calalzo, Malga Caseera Razzo, mountain huts. Practice yoga immersed in nature with Sarah Pompanin.",
    openGraph: {
      title: isItalian
        ? "Yoga Outdoor — Sessioni estive nelle Dolomiti"
        : "Outdoor Yoga — Summer sessions in the Dolomites",
      description: isItalian
        ? "Pratica yoga all'aria aperta in location suggestive delle Dolomiti. Anukalana, Vinyasa e meditazioni guidate."
        : "Practice yoga outdoors in stunning Dolomites locations. Anukalana, Vinyasa and guided meditations.",
      url: `https://smupyoga.com/${locale}/yoga-outdoor/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/PXL_20250726_110233771.MP.jpg",
          width: 1200,
          height: 630,
          alt: "Yoga Outdoor nelle Dolomiti",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isItalian ? "Yoga Outdoor" : "Outdoor Yoga",
      description: isItalian
        ? "Sessioni estive nelle Dolomiti"
        : "Summer sessions in the Dolomites",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/yoga-outdoor/`,
      languages: {
        en: "https://smupyoga.com/en/yoga-outdoor/",
        it: "https://smupyoga.com/it/yoga-outdoor/",
      },
    },
  };
}

export default function YogaOutdoorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
