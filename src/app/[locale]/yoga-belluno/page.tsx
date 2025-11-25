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
        <Hero title={t("title")} subtitle={t("subtitle")} compact />

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
                <div
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "var(--neutral-text)",
                    marginTop: "40px",
                  }}
                  dangerouslySetInnerHTML={{ __html: t("description") }}
                />
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
