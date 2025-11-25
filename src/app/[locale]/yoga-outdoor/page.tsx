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
import Image from "next/image";

const OutdoorYogaPage = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e05d7c",
        contrastText: "#5f1224",
      },
    },
  });

  const t = useTranslations("outdoor");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero title={t("title")} subtitle={t("hero_subtitle")} compact />

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
                <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Image
                    src="/images/PXL_20250726_110233771.MP.jpg"
                    alt="Outdoor Yoga"
                    width={1200}
                    height={800}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                    placeholder="blur"
                    blurDataURL="/images/PXL_20250726_110233771.MP_placeholder.jpg"
                  />
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "30px",
                  }}
                  dangerouslySetInnerHTML={{ __html: t("description1") }}
                />
                <div
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginBottom: "40px",
                  }}
                  dangerouslySetInnerHTML={{ __html: t("description2") }}
                />

                <SectionTitle text={t("locations_title")} />

                <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    {t("location1_name")}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "var(--neutral-text-light)",
                    }}
                  >
                    {t("location1_desc")}
                  </p>
                </div>

                <div style={{ marginTop: "30px", marginBottom: "30px" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    {t("location2_name")}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "var(--neutral-text-light)",
                    }}
                  >
                    {t("location2_desc")}
                  </p>
                </div>

                <div style={{ marginTop: "30px", marginBottom: "40px" }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      marginBottom: "10px",
                    }}
                  >
                    {t("location3_name")}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "var(--neutral-text-light)",
                    }}
                  >
                    {t("location3_desc")}
                  </p>
                </div>

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

export default OutdoorYogaPage;
