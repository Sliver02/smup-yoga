"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Contact from "@/components/sections/Contact";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "@/designSystem/utils.scss";

const OutdoorYogaPage = () => {
  const t = useTranslations("outdoor");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <Header />
      <Hero
        title={t("title")}
        subtitle={t("hero_subtitle")}
        compact
        backgroundImage="/images/PXL_20250726_110233771.MP.jpg"
        breadcrumbItems={[
          { label: tCommon("home"), href: "/" },
          { label: t("title") },
        ]}
      />

      <Section>
        <Container>
          <Row xsJustify={Justify.center} mdAlign={Align.center} gap="30px">
            <Col xs={12} md={5}>
              <div className="desktop-only">
                <Image
                  src="/images/PXL_20250726_110233771.MP.jpg"
                  alt="Outdoor Yoga"
                  width={600}
                  height={400}
                  className="responsive-image"
                  placeholder="blur"
                  blurDataURL="/images/PXL_20250726_110233771.MP_placeholder.jpg"
                />
              </div>
            </Col>
            <Col xs={12} md={6} mdOffset={1} mdAlignSelf={Align.center}>
              <Row gap="30px">
                <Col xs={12}>
                  <p className="text--p-lg">
                    {t.rich("description1", {
                      strong: (children) => <strong>{children}</strong>,
                    })}
                  </p>
                </Col>
                <Col xs={12}>
                  <Row gap="10px">
                    <Col xs={12}>
                      <p className="text--p-lg">
                        {t.rich("description2", {
                          strong: (children) => <strong>{children}</strong>,
                        })}
                      </p>
                    </Col>
                    <Col xs={12}>
                      <SectionTitle text={t("locations_title")} />
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <Row gap="10px">
                    <Col xs={12}>
                      <h3 className="location-heading">
                        {t("location1_name")}
                      </h3>
                      <p className="text--p-md">{t("location1_desc")}</p>
                    </Col>
                    <Col xs={12}>
                      <h3 className="location-heading">
                        {t("location2_name")}
                      </h3>
                      <p className="text--p-md">{t("location2_desc")}</p>
                    </Col>
                    <Col xs={12}>
                      <h3 className="location-heading">
                        {t("location3_name")}
                      </h3>
                      <p className="text--p-md">{t("location3_desc")}</p>
                    </Col>
                  </Row>
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

export default OutdoorYogaPage;
