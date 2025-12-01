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
import "@/designSystem/utils.scss";

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
              <Row gap="40px">
                <Col xs={12}>
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
                  </Row>
                </Col>
                <Col xs={12}>
                  <SectionTitle text={t("benefits_title")} />
                  <ul className="styled-list">
                    <li>{t("benefit1")}</li>
                    <li>{t("benefit2")}</li>
                    <li>{t("benefit3")}</li>
                    <li>{t("benefit4")}</li>
                    <li>{t("benefit5")}</li>
                  </ul>
                </Col>
                <Col xs={12}>
                  <SectionTitle text={t("formats_title")} />
                  <ul className="styled-list">
                    <li>{t("format1")}</li>
                    <li>{t("format2")}</li>
                    <li>{t("format3")}</li>
                    <li>{t("format4")}</li>
                  </ul>
                </Col>
                <Col xs={12}>
                  <div className="cta-box">{t("cta")}</div>
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

export default PrivateLessonsPage;
