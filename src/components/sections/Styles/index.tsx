import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardDisplay from "@/components/molecules/CardDisplay";
import Section from "@/components/organisms/Section";
import { useTranslations } from "next-intl";

const Styles = () => {
  const t = useTranslations("styles");

  return (
    <div id="styles">
      <Section>
        <Container>
          <Row>
            <Col>
              <SectionTitle text="Styles & Specializations" center />
            </Col>
          </Row>
          <Row xsJustify={Justify.center}>
            <Col xs={12} md={6} lg={4}>
              <CardDisplay
                image="PXL_20250823_075608610"
                title={t("anukalana.title")}
                description={t("anukalana.description")}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <CardDisplay
                image="PXL_20250601_164142948.MP"
                title={t("yin.title")}
                description={t("yin.description")}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <CardDisplay
                image="photo_2_2025-09-03_09-38-20"
                title={t("kids.title")}
                description={t("kids.description")}
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default Styles;
