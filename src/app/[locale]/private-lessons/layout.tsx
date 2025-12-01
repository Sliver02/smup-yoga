import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: isItalian ? "Lezioni Private" : "Private Lessons",
    description: isItalian
      ? "Lezioni private di yoga personalizzate con Sarah Pompanin. In presenza (Cortina, Belluno, Cadore) e online. Programma su misura per le tue esigenze."
      : "Personalized private yoga lessons with Sarah Pompanin. In-person (Cortina, Belluno, Cadore) and online. Tailored program for your needs.",
    openGraph: {
      title: isItalian
        ? "Lezioni Private — Sessioni personalizzate"
        : "Private Lessons — Personalized sessions",
      description: isItalian
        ? "Lezioni di yoga personalizzate in presenza e online. Attenzione individuale e programma su misura."
        : "Personalized yoga lessons in-person and online. Individual attention and tailored program.",
      url: `https://smupyoga.com/${locale}/private-lessons/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/PXL_20250101_151738219.jpg",
          width: 1200,
          height: 630,
          alt: isItalian ? "Lezioni Private" : "Private Lessons",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isItalian ? "Lezioni Private" : "Private Lessons",
      description: isItalian
        ? "Sessioni personalizzate in presenza e online"
        : "Personalized sessions in-person and online",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/private-lessons/`,
      languages: {
        en: "https://smupyoga.com/en/private-lessons/",
        it: "https://smupyoga.com/it/private-lessons/",
      },
    },
  };
}

export default function PrivateLessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
