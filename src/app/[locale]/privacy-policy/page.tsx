"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import { useTranslations } from "next-intl";
import "@/designSystem/utils.scss";

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
              <Row gap="30px">
                <Col xs={12}>
                  <p className="text--p-lg">{t("intro")}</p>
                </Col>
                <Col xs={12}>
                  <Row gap="20px">
                    <Col xs={12}>
                      <h2 className="section-heading">{t("section1_title")}</h2>
                      <p className="text--p-lg">{t("section1_content")}</p>
                    </Col>
                    <Col xs={12}>
                      <h2 className="section-heading">{t("section2_title")}</h2>
                      <p className="text--p-lg">{t("section2_content")}</p>
                    </Col>
                    <Col xs={12}>
                      <h2 className="section-heading">{t("section3_title")}</h2>
                      <p className="text--p-lg">{t("section3_content")}</p>
                    </Col>
                    <Col xs={12}>
                      <h2 className="section-heading">{t("section4_title")}</h2>
                      <p className="text--p-lg">{t("section4_content")}</p>
                    </Col>
                    <Col xs={12}>
                      <h2 className="section-heading">{t("section5_title")}</h2>
                      <p className="text--p-lg">{t("section5_content")}</p>
                    </Col>
                    <Col xs={12}>
                      <h2 className="section-heading">{t("section6_title")}</h2>
                      <p className="text--p-lg">{t("section6_content")}</p>
                    </Col>
                    <Col xs={12}>
                      <h2 className="section-heading">{t("section7_title")}</h2>
                      <p className="text--p-lg">{t("section7_content")}</p>
                      <p className="text--p-lg info-card">
                        {t("contact_info")}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>

      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
