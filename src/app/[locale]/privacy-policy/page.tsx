"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
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

const PrivacyPolicyPage = () => {
  const t = useTranslations("privacy");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
        <Header />
        <Hero
          title={t("title")}
          subtitle={t("last_updated")}
          compact
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
                  {t("intro")}
                </p>

                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "16px",
                  }}
                >
                  {t("section1_title")}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "20px",
                  }}
                >
                  {t("section1_content")}
                </p>

                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "16px",
                  }}
                >
                  {t("section2_title")}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "20px",
                  }}
                >
                  {t("section2_content")}
                </p>

                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "16px",
                  }}
                >
                  {t("section3_title")}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "20px",
                  }}
                >
                  {t("section3_content")}
                </p>

                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "16px",
                  }}
                >
                  {t("section4_title")}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "20px",
                  }}
                >
                  {t("section4_content")}
                </p>

                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "16px",
                  }}
                >
                  {t("section5_title")}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "20px",
                  }}
                >
                  {t("section5_content")}
                </p>

                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "16px",
                  }}
                >
                  {t("section6_title")}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "20px",
                  }}
                >
                  {t("section6_content")}
                </p>

                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    marginTop: "40px",
                    marginBottom: "16px",
                  }}
                >
                  {t("section7_title")}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "20px",
                  }}
                >
                  {t("section7_content")}
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    whiteSpace: "pre-line",
                    backgroundColor: "var(--neutral-background-light)",
                    padding: "20px",
                    borderRadius: "8px",
                    marginTop: "16px",
                  }}
                >
                  {t("contact_info")}
                </p>
              </Col>
            </Row>
          </Container>
        </Section>

        <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
