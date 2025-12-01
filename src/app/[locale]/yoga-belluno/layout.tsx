import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: isItalian ? "Yoga a Belluno" : "Yoga in Belluno",
    description: isItalian
      ? "Lezioni di yoga a Belluno con Sarah Pompanin. Anukalana, Vinyasa e Yin Yoga. Classi settimanali in studio, adatte a tutti i livelli."
      : "Yoga classes in Belluno with Sarah Pompanin. Anukalana, Vinyasa and Yin Yoga. Weekly studio classes suitable for all levels.",
    openGraph: {
      title: isItalian
        ? "Yoga a Belluno — Anukalana, Vinyasa e Yin Yoga"
        : "Yoga in Belluno — Anukalana, Vinyasa and Yin Yoga",
      description: isItalian
        ? "Lezioni settimanali di yoga a Belluno e Ponte nelle Alpi con Sarah Pompanin."
        : "Weekly yoga classes in Belluno and Ponte nelle Alpi with Sarah Pompanin.",
      url: `https://smupyoga.com/${locale}/yoga-belluno/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/PXL_20250112_213048967.MP.jpg",
          width: 1200,
          height: 630,
          alt: "Yoga a Belluno",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isItalian ? "Yoga a Belluno" : "Yoga in Belluno",
      description: isItalian
        ? "Anukalana, Vinyasa e Yin"
        : "Anukalana, Vinyasa and Yin",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/yoga-belluno/`,
      languages: {
        en: "https://smupyoga.com/en/yoga-belluno/",
        it: "https://smupyoga.com/it/yoga-belluno/",
      },
    },
  };
}

export default function YogaBellunoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
