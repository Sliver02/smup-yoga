import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: isItalian
      ? "Yoga a Cortina d'Ampezzo e Cadore"
      : "Yoga in Cortina d'Ampezzo and Cadore",
    description: isItalian
      ? "Lezioni di yoga a Cortina d'Ampezzo e Cadore (Vodo, Tai, Calalzo) con Sarah Pompanin. Anukalana Yoga in studio e sessioni outdoor estive nelle Dolomiti."
      : "Yoga classes in Cortina d'Ampezzo and Cadore (Vodo, Tai, Calalzo) with Sarah Pompanin. Anukalana Yoga studio classes and summer outdoor sessions in the Dolomites.",
    openGraph: {
      title: isItalian
        ? "Yoga a Cortina d'Ampezzo e Cadore — Studio e Outdoor"
        : "Yoga in Cortina d'Ampezzo and Cadore — Studio and Outdoor",
      description: isItalian
        ? "Lezioni di Anukalana Yoga a Cortina e nel Cadore. Sessioni outdoor estive nelle Dolomiti."
        : "Anukalana Yoga classes in Cortina and Cadore. Summer outdoor sessions in the Dolomites.",
      url: `https://smupyoga.com/${locale}/yoga-cortina/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/IMG_2646.jpg",
          width: 1200,
          height: 630,
          alt: "Yoga a Cortina d'Ampezzo",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isItalian
        ? "Yoga a Cortina e Cadore"
        : "Yoga in Cortina and Cadore",
      description: isItalian
        ? "Studio e outdoor nelle Dolomiti"
        : "Studio and outdoor in the Dolomites",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/yoga-cortina/`,
      languages: {
        en: "https://smupyoga.com/en/yoga-cortina/",
        it: "https://smupyoga.com/it/yoga-cortina/",
      },
    },
  };
}

export default function YogaCortinaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
