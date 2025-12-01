import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: isItalian ? "Yoga Bimbi" : "Kids Yoga",
    description: isItalian
      ? "Yoga per bambini a Cortina, Belluno e Cadore. Lezioni giocose con storie, canzoni e giochi per esplorare asana, respirazione e attenzione consapevole."
      : "Kids Yoga in Cortina, Belluno and Cadore. Playful sessions with stories, songs and games to explore asanas, breathing and mindful awareness.",
    openGraph: {
      title: isItalian
        ? "Yoga Bimbi — Pratica giocosa per giovani menti"
        : "Kids Yoga — Playful practice for young minds",
      description: isItalian
        ? "Lezioni di yoga per bambini nelle Dolomiti con Sarah Pompanin. Metodo Bimbiyoga."
        : "Kids yoga classes in the Dolomites with Sarah Pompanin. Bimbiyoga method.",
      url: `https://smupyoga.com/${locale}/kids-yoga/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/photo_2_2025-09-03_09-38-20.jpg",
          width: 1200,
          height: 630,
          alt: isItalian ? "Yoga Bimbi" : "Kids Yoga",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isItalian ? "Yoga Bimbi" : "Kids Yoga",
      description: isItalian
        ? "Pratica giocosa per bambini nelle Dolomiti"
        : "Playful practice for kids in the Dolomites",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/kids-yoga/`,
      languages: {
        en: "https://smupyoga.com/en/kids-yoga/",
        it: "https://smupyoga.com/it/kids-yoga/",
      },
    },
  };
}

export default function KidsYogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
