"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Contact from "@/components/sections/Contact";
import Locations from "@/components/sections/Locations";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "@/designSystem/utils.scss";

const AnukalanaPage = () => {
  const t = useTranslations("classes.anukalana");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <Header />
      <Hero
        title={t("title")}
        subtitle={t("hero_subtitle")}
        compact
        backgroundImage="/images/PXL_20250823_075608610.jpg"
        breadcrumbItems={[
          { label: tCommon("home"), href: "/" },
          { label: t("title") },
        ]}
      />

      <Section>
        <Container>
          <Row xsJustify={Justify.center} mdAlign={Align.center}>
            <Col xs={12} md={5}>
              <div className="desktop-only">
                <Image
                  src="/images/PXL_20250823_075608610.jpg"
                  alt="Anukalana Yoga"
                  width={600}
                  height={400}
                  className="responsive-image"
                  placeholder="blur"
                  blurDataURL="/images/PXL_20250823_075608610_placeholder.jpg"
                />
              </div>
            </Col>
            <Col xs={12} md={6} mdOffset={1} mdAlignSelf={Align.center}>
              <p className="text--p-lg">
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
    </main>
  );
};

export default AnukalanaPage;
