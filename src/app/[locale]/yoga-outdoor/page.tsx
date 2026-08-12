"use client";
import { RouteEnum } from "@/common/routeEnum";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import { BookCta } from "@/components/sections/BookCta";
import { Contact } from "@/components/sections/Contact";
import { Styles } from "@/components/sections/Styles";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "@/designSystem/utils.scss";

const OutdoorYogaPage = () => {
  const t = useTranslations("outdoor");
  const tClasses = useTranslations("classes");
  const tCommon = useTranslations("breadcrumbs");

  const spots = [
    { name: t("location1_name"), desc: t("location1_desc") },
    { name: t("location2_name"), desc: t("location2_desc") },
    { name: t("location3_name"), desc: t("location3_desc") },
  ];

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
          <Row xsJustify={Justify.center} mdAlign={Align.center} gap="2rem 0">
            <Col xs={12} md={5}>
              <Image
                src="/images/PXL_20250726_110233771.MP.jpg"
                alt="Outdoor Yoga"
                width={600}
                height={400}
                className="responsive-image"
                placeholder="blur"
                blurDataURL="/images/PXL_20250726_110233771.MP_placeholder.jpg"
              />
            </Col>
            <Col xs={12} md={6} mdOffset={1} mdAlignSelf={Align.center}>
              <p className="text--p-lg text--measure">
                {t.rich("description1", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
              <p className="text--p-lg text--measure">
                {t.rich("description2", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section backgroundColor="var(--primary-active)">
        <Container>
          <Row>
            <Col>
              <SectionTitle text={t("locations_title")} center />
            </Col>
          </Row>
          <Row gap="1rem 0">
            {spots.map((spot) => (
              <Col key={spot.name} xs={12} md={4}>
                <div className="info-card">
                  <h4 className="location-heading">{spot.name}</h4>
                  <p className="text--p-md">{spot.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
          <Row xsJustify={Justify.center}>
            <Col xs={12} lg={8}>
              <SectionTitle text={t("practical_title")} center />
              <ul className="styled-list">
                <li>{t("practical1")}</li>
                <li>{t("practical2")}</li>
                <li>{t("practical3")}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Section>

      <Styles exclude={RouteEnum.OUTDOOR} title={tClasses("other_title")} />
      <BookCta image="PXL_20250726_110233771.MP" />
      <Contact />
      <Footer />
    </main>
  );
};

export default OutdoorYogaPage;
