"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Contact from "@/components/sections/Contact";
import { useTranslations } from "next-intl";
import "@/designSystem/utils.scss";

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
              <Row gap="30px">
                <Col xs={12}>
                  <p className="text--p-lg">
                    {t.rich("description1", {
                      strong: (children) => <strong>{children}</strong>,
                    })}
                  </p>
                </Col>
                <Col xs={12}>
                  <p className="text--p-lg">
                    {t.rich("description2", {
                      strong: (children) => <strong>{children}</strong>,
                    })}
                  </p>
                </Col>
                <Col xs={12}>
                  <p className="text--p-lg">
                    {t.rich("description3", {
                      strong: (children) => <strong>{children}</strong>,
                    })}
                  </p>
                </Col>
                <Col xs={12}>
                  <p className="text--p-lg">
                    {t.rich("extended_description1", {
                      strong: (children) => <strong>{children}</strong>,
                    })}
                  </p>
                </Col>
                <Col xs={12}>
                  <p className="text--p-lg">
                    {t.rich("extended_description2", {
                      strong: (children) => <strong>{children}</strong>,
                    })}
                  </p>
                </Col>
                <Col xs={12}>
                  <p className="text--p-lg">
                    {t.rich("extended_description3", {
                      strong: (children) => <strong>{children}</strong>,
                    })}
                  </p>
                </Col>
              </Row>
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
