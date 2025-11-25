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
import Locations from "@/components/sections/Locations";
import { ThemeProvider, createTheme } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

const YinYogaPage = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e05d7c",
        contrastText: "#5f1224",
      },
    },
  });

  const t = useTranslations("classes.yin");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero 
          title={t("title")} 
          subtitle={t("description")} 
          compact 
          backgroundImage="/images/PXL_20250601_164142948.MP.jpg"
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
                <div style={{ marginTop: "40px", marginBottom: "40px" }}>
                  <Image
                    src="/images/PXL_20250601_164142948.MP.jpg"
                    alt="Yin Yoga"
                    width={1200}
                    height={800}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                    placeholder="blur"
                    blurDataURL="/images/PXL_20250601_164142948.MP_placeholder.jpg"
                  />
                </div>
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

        <Locations />
        <Contact />
        <Footer />
      </ThemeProvider>
    </main>
  );
};

export default YinYogaPage;
