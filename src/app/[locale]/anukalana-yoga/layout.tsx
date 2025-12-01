import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: "Anukalana Yoga",
    description: isItalian
      ? "Anukalana Yoga a Cortina, Belluno e Cadore. Pratica integrata che unisce asana, pranayama, meditazione e lavoro miofasciale. Sequenze fluide guidate dal respiro."
      : "Anukalana Yoga in Cortina, Belluno and Cadore. Integrated practice combining asana, pranayama, meditation and fascia work. Fluid breath-led sequences.",
    openGraph: {
      title: isItalian
        ? "Anukalana Yoga — Integrazione attraverso il movimento fluido"
        : "Anukalana Yoga — Integration through fluid movement",
      description: isItalian
        ? "Lezioni di Anukalana Yoga nelle Dolomiti con Sarah Pompanin. Adatto a tutti i livelli."
        : "Anukalana Yoga classes in the Dolomites with Sarah Pompanin. Suitable for all levels.",
      url: `https://smupyoga.com/${locale}/anukalana-yoga/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/PXL_20250823_075608610.jpg",
          width: 1200,
          height: 630,
          alt: "Anukalana Yoga",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Anukalana Yoga",
      description: isItalian
        ? "Pratica integrata nelle Dolomiti"
        : "Integrated practice in the Dolomites",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/anukalana-yoga/`,
      languages: {
        en: "https://smupyoga.com/en/anukalana-yoga/",
        it: "https://smupyoga.com/it/anukalana-yoga/",
      },
    },
  };
}

export default function AnukalanaYogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
