"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Contact from "@/components/sections/Contact";
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
    title: isItalian ? "Chi sono" : "About me",
    description: isItalian
      ? "Ciao, sono Sarah e vivo tra le Dolomiti! Insegnatrice certificata di Anukalana Yoga, Yin Yoga, Yoga Bimbi e Pilates. Insegno a Cortina, Belluno e Cadore."
      : "Hi, I'm Sarah and I live in the Dolomites! Certified instructor in Anukalana Yoga, Yin Yoga, Kids Yoga and Pilates. I teach in Cortina, Belluno and Cadore.",
    openGraph: {
      title: isItalian ? "Chi sono — Sarah Pompanin" : "About me — Sarah Pompanin",
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
      title: isItalian ? "Chi sono — Sarah Pompanin" : "About me — Sarah Pompanin",
      description: isItalian
        ? "Insegnatrice di yoga nelle Dolomiti"
        : "Yoga instructor in the Dolomites",
    },
    alternates: {
      canonical: `https://smupyoga.com/${locale}/about/`,
      languages: {
        en: "https://smupyoga.com/en/about/",
        it: "https://smupyoga.com/it/chi-sono/",
      },
    },
  };
}

const AboutPage = () => {
  const t = useTranslations("about");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
        <Header />
        <Hero
          title={t("title")}
          subtitle="Sarah Pompanin"
          compact
          backgroundImage="/images/PXL_20250112_213040356.jpg"
          breadcrumbItems={[
            { label: tCommon("home"), href: "/" },
            { label: t("title") },
          ]}
        />

        <Section>
          <Container>
            <Row xsJustify={Justify.center}>
              <Col xs={12} lg={10}>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "30px",
                  }}
                >
                  {t.rich("description1", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "30px",
                  }}
                >
                  {t.rich("description2", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "30px",
                  }}
                >
                  {t.rich("description3", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "30px",
                  }}
                >
                  {t.rich("extended_description1", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "30px",
                  }}
                >
                  {t.rich("extended_description2", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                  }}
                >
                  {t.rich("extended_description3", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>
              </Col>
            </Row>
          </Container>
        </Section>

        <Contact />
        <Footer />
    </main>
  );
};

export default AboutPage;
