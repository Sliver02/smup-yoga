"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Contact from "@/components/sections/Contact";
import Locations from "@/components/sections/Locations";
import { ThemeProvider, createTheme } from "@mui/material";
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
    title: isItalian ? "Yoga a Cortina d'Ampezzo e Cadore" : "Yoga in Cortina d'Ampezzo and Cadore",
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
      title: isItalian ? "Yoga a Cortina e Cadore" : "Yoga in Cortina and Cadore",
      description: isItalian
        ? "Lezioni nelle Dolomiti"
        : "Classes in the Dolomites",
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

const YogaCortinaPage = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e05d7c",
        contrastText: "#5f1224",
      },
    },
  });

  const t = useTranslations("locations.cortina");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero
          title={t("title")}
          subtitle={t("subtitle")}
          compact
          backgroundImage="/images/IMG_2646.jpg"
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
                    src="/images/IMG_2646.jpg"
                    alt="Yoga a Cortina d'Ampezzo"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                    placeholder="blur"
                    blurDataURL="/images/IMG_2646_placeholder.jpg"
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
                  {t.rich("description", {
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

        <Locations priorityLocation="Cadore" />
        <Contact />
        <Footer />
      </ThemeProvider>
    </main>
  );
};

export default YogaCortinaPage;
