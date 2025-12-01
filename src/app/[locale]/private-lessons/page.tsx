"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
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
        it: "https://smupyoga.com/it/lezioni-private/",
      },
    },
  };
}

const PrivateLessonsPage = () => {
  const t = useTranslations("private");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
        <Header />
        <Hero
          title={t("title")}
          subtitle={t("hero_subtitle")}
          compact
          backgroundImage="/images/PXL_20250101_151738219.jpg"
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
                    marginTop: "40px",
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
                    marginBottom: "40px",
                  }}
                >
                  {t.rich("description2", {
                    strong: (children) => <strong>{children}</strong>,
                  })}
                </p>

                <SectionTitle text={t("benefits_title")} />

                <ul
                  style={{
                    fontSize: "18px",
                    lineHeight: "2",
                    marginTop: "20px",
                    marginBottom: "40px",
                    paddingLeft: "20px",
                  }}
                >
                  <li>{t("benefit1")}</li>
                  <li>{t("benefit2")}</li>
                  <li>{t("benefit3")}</li>
                  <li>{t("benefit4")}</li>
                  <li>{t("benefit5")}</li>
                </ul>

                <SectionTitle text={t("formats_title")} />

                <ul
                  style={{
                    fontSize: "18px",
                    lineHeight: "2",
                    marginTop: "20px",
                    marginBottom: "40px",
                    paddingLeft: "20px",
                  }}
                >
                  <li>{t("format1")}</li>
                  <li>{t("format2")}</li>
                  <li>{t("format3")}</li>
                  <li>{t("format4")}</li>
                </ul>

                <div
                  style={{
                    padding: "30px",
                    background: "var(--surface-secondary)",
                    borderRadius: "12px",
                    fontSize: "18px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {t("cta")}
                </div>
              </Col>
            </Row>
          </Container>
        </Section>

        <Contact />
        <Footer />
    </main>
  );
};

export default PrivateLessonsPage;
