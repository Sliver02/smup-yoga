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

const YogaCortinaPage = () => {
  const t = useTranslations("locations.cortina");
  const tCommon = useTranslations("breadcrumbs");

  return (
    <main>
      <Header />
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        compact
        backgroundImage="/images/IMG_2646.jpg"
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
                  src="/images/IMG_2646.jpg"
                  alt="Yoga a Cortina d'Ampezzo"
                  width={600}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "12px",
                  }}
                  placeholder="blur"
                  blurDataURL="/images/IMG_2646_placeholder.jpg"
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

      <style jsx global>{`
        @media (min-width: 769px) {
          .desktop-image {
            display: block !important;
          }
        }
      `}</style>

      <Locations priorityLocation="Cortina" />
      <Contact />
      <Footer />
    </main>
  );
};

export default YogaCortinaPage;
