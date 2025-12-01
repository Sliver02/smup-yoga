import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: isItalian ? "Chi sono" : "About me",
    description: isItalian
      ? "Ciao, sono Sarah e vivo tra le Dolomiti! Insegnatrice certificata di Anukalana Yoga, Yin Yoga, Yoga Bimbi e Pilates. Insegno a Cortina, Belluno e Cadore."
      : "Hi, I'm Sarah and I live in the Dolomites! Certified instructor in Anukalana Yoga, Yin Yoga, Kids Yoga and Pilates. I teach in Cortina, Belluno and Cadore.",
    openGraph: {
      title: isItalian
        ? "Chi sono — Sarah Pompanin"
        : "About me — Sarah Pompanin",
      description: isItalian
        ? "Insegnatrice certificata di yoga nelle Dolomiti. Anukalana, Yin, Yoga Bimbi."
        : "Certified yoga instructor in the Dolomites. Anukalana, Yin, Kids Yoga.",
      url: `https://smupyoga.com/${locale}/about/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/PXL_20250112_213040356.jpg",
          width: 1200,
          height: 630,
          alt: "Sarah Pompanin — SMUP Yoga",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: isItalian
        ? "Chi sono — Sarah Pompanin"
        : "About me — Sarah Pompanin",
      description: isItalian
        ? "Insegnatrice di yoga nelle Dolomiti"
        : "Yoga instructor in the Dolomites",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/about/`,
      languages: {
        en: "https://smupyoga.com/en/about/",
        it: "https://smupyoga.com/it/about/",
      },
    },
  };
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
