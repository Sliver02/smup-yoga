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
    title: "Yin Yoga",
    description: isItalian
      ? "Yin Yoga a Cortina, Belluno e Cadore. Sequenze lente e passive con supporti. Utile a stimolare il tessuto connettivo, aumentare mobilità e favorire il rilassamento profondo."
      : "Yin Yoga in Cortina, Belluno and Cadore. Slow passive postures aided by props. Stimulates connective tissue, increases mobility and encourages deep relaxation.",
    openGraph: {
      title: isItalian
        ? "Yin Yoga — Immobilità profonda e rigenerazione"
        : "Yin Yoga — Deep stillness and restoration",
      description: isItalian
        ? "Lezioni di Yin Yoga nelle Dolomiti con Sarah Pompanin. Pratica rigenerante per corpo e mente."
        : "Yin Yoga classes in the Dolomites with Sarah Pompanin. Restorative practice for body and mind.",
      url: `https://smupyoga.com/${locale}/yin-yoga/`,
      siteName: "SMUP Yoga",
      images: [
        {
          url: "https://smupyoga.com/images/PXL_20250601_164142948.MP.jpg",
          width: 1200,
          height: 630,
          alt: "Yin Yoga",
        },
      ],
      locale: isItalian ? "it_IT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Yin Yoga",
      description: isItalian
        ? "Pratica rigenerante nelle Dolomiti"
        : "Restorative practice in the Dolomites",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/yin-yoga/`,
      languages: {
        en: "https://smupyoga.com/en/yin-yoga/",
        it: "https://smupyoga.com/it/yin-yoga/",
      },
    },
  };
}

const YinYogaPage = () => {
  const t = useTranslations("classes.yin");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
        <Header />
        <Hero
          title={t("title")}
          subtitle={t("hero_subtitle")}
          compact
          backgroundImage="/images/PXL_20250601_164142948.MP.jpg"
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
                    src="/images/PXL_20250601_164142948.MP.jpg"
                    alt="Yin Yoga"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                    placeholder="blur"
                    blurDataURL="/images/PXL_20250601_164142948.MP_placeholder.jpg"
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

export default YinYogaPage;
