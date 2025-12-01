"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Contact from "@/components/sections/Contact";
import Locations from "@/components/sections/Locations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { Metadata } from "next";

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

const AnukalanaPage = () => {
  const t = useTranslations("classes.anukalana");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
        <Header />
        <Hero
          title={t("title")}
          subtitle={t("hero_subtitle")}
          compact
          backgroundImage="/images/PXL_20250823_075608610.jpg"
          breadcrumbItems={[
            { label: tCommon("home"), href: "/" },
            { label: t("title") },
          ]}
        />

        <Section>
          <Container>
            <Row xsJustify={Justify.center} mdAlign={Align.center}>
              <Col xs={12} md={5}>
                <div
                  style={{
                    display: "none",
                  }}
                  className="desktop-image"
                >
                  <Image
                    src="/images/PXL_20250823_075608610.jpg"
                    alt="Anukalana Yoga"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                    placeholder="blur"
                    blurDataURL="/images/PXL_20250823_075608610_placeholder.jpg"
                  />
                </div>
              </Col>
              <Col xs={12} md={6} mdOffset={1} mdAlignSelf={Align.center}>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                  }}
                >
                  {t.rich("description_long", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>
              </Col>
            </Row>
          </Container>
        </Section>
        <style jsx global>{`
          @media (min-width: 769px) {
            .desktop-image {
              display: block !important;
            }
          }
        `}</style>

        <Locations />
        <Contact />
        <Footer />
    </main>
  );
};

export default AnukalanaPage;
