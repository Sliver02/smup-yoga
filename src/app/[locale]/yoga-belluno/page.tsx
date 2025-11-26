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

const YogaBellunoPage = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#e05d7c",
        contrastText: "#5f1224",
      },
    },
  });

  const t = useTranslations("locations.belluno");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <ThemeProvider theme={theme}>
        <Header />
        <Hero
          title={t("title")}
          subtitle={t("subtitle")}
          compact
          backgroundImage="/images/PXL_20250112_213048967.MP.jpg"
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
                    src="/images/PXL_20250112_213048967.MP.jpg"
                    alt="Yoga a Belluno"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "12px",
                    }}
                    placeholder="blur"
                    blurDataURL="/images/PXL_20250112_213048967.MP_placeholder.jpg"
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

        <Locations priorityLocation="Belluno" />
        <Contact />
        <Footer />
      </ThemeProvider>
    </main>
  );
};

export default YogaBellunoPage;
