"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTranslations } from "next-intl";

const PrivacyPolicyPage = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e05d7c",
        contrastText: "#5f1224",
      },
    },
  });

  const t = useTranslations("privacy");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </main>
  );
};

export default PrivacyPolicyPage;
