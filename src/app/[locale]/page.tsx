"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Calendar from "@/components/sections/Calendar";
import Contact from "@/components/sections/Contact";
import Styles from "@/components/sections/Styles";
import { useTranslations } from "next-intl";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const isItalian = locale === "it";
  
  return {
    title: "SMUP — Sarah Pompanin | Yoga Cortina, Belluno, Cadore",
    description: isItalian
      ? "Yoga con Sarah Pompanin (SMUP) a Cortina d'Ampezzo, Belluno e Cadore. Anukalana, Yin, Yoga Bimbi. Lezioni di gruppo, private, outdoor nelle Dolomiti. Online e in presenza."
      : "Yoga with Sarah Pompanin (SMUP) in Cortina d'Ampezzo, Belluno, and Cadore. Anukalana, Yin, Kids Yoga. Group classes, private lessons, outdoor sessions in the Dolomites. Online and in-person.",
    openGraph: {
      title: isItalian
        ? "SMUP — Yoga Cortina, Belluno, Cadore Dolomiti"
        : "SMUP — Yoga Cortina, Belluno, Cadore Dolomites",
      description: isItalian
        ? "Lezioni di yoga con Sarah Pompanin a Cortina, Belluno, Cadore. Anukalana, Yin, Yoga Bimbi. Lezioni di gruppo e private nelle Dolomiti."
        : "Yoga classes with Sarah Pompanin in Cortina, Belluno, Cadore. Anukalana, Yin, Kids Yoga. Group & private lessons in the Dolomites.",
      url: `https://smupyoga.com/${locale}/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/IMG_2646.jpg",
          width: 1200,
          height: 630,
          alt: isItalian ? "SMUP Yoga nelle Dolomiti" : "SMUP Yoga in the Dolomites",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isItalian ? "SMUP — Yoga nelle Dolomiti" : "SMUP — Yoga in the Dolomites",
      description: isItalian
        ? "Yoga outdoor e in studio con Sarah Pompanin (SMUP)."
        : "Outdoor and studio yoga by Sarah Pompanin (SMUP).",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/`,
      languages: {
        en: "https://smupyoga.com/en/",
        it: "https://smupyoga.com/it/",
      },
    },
  };
}

const Home = () => {
  const t = useTranslations("hero");

  return (
    <main>
      <Header />
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <AboutMe />
      <Calendar />
      <Styles />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
