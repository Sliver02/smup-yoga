"use client";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Contact from "@/components/sections/Contact";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTranslations } from "next-intl";

const PrivateLessonsPage = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e05d7c",
        contrastText: "#5f1224",
      },
    },
  });

  const t = useTranslations("private");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero 
          title={t("title")} 
          subtitle={t("hero_subtitle")} 
          compact 
          backgroundImage="/images/PXL_20250101_151738219.jpg"
        />

        <Container>
          <Row>
            <Col>
              <Breadcrumb
                items={[
                  { label: tCommon("home"), href: "/" },
                  { label: t("title") },
                ]}
              />
            </Col>
          </Row>
        </Container>

        <Section>
          <Container>
            <Row xsJustify={Justify.center}>
              <Col xs={12} lg={10}>
                <SectionTitle text={t("title")} center />
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
      </ThemeProvider>
    </main>
  );
};

export default PrivateLessonsPage;
