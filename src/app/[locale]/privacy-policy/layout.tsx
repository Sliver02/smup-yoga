import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isItalian = locale === "it";

  return {
    title: "Privacy Policy",
    description: isItalian
      ? "Privacy Policy di SMUP Yoga. Informazioni su come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali."
      : "SMUP Yoga Privacy Policy. Information on how we collect, use and protect your personal data.",
    openGraph: {
      title: "Privacy Policy — SMUP Yoga",
      description: isItalian
        ? "Informativa sulla privacy per il sito SMUP Yoga."
        : "Privacy policy for SMUP Yoga website.",
      url: `https://smupyoga.com/${locale}/privacy-policy/`,
      siteName: "SMUP Yoga",
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/privacy-policy/`,
      languages: {
        en: "https://smupyoga.com/en/privacy-policy/",
        it: "https://smupyoga.com/it/privacy-policy/",
      },
    },
  };
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
