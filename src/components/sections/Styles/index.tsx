import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardDisplay from "@/components/molecules/CardDisplay";
import Section from "@/components/organisms/Section";

const Styles = () => {
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
                image="PXL_20250823_075608610.jpg"
                title="Anukalana Yoga"
                description="anukalana-yoga-desc"
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <CardDisplay
                image="PXL_20250601_164142948.MP.jpg"
                title="Yin Yoga"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis dolores id!"
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <CardDisplay
                image="photo_2_2025-09-03_09-38-20.jpg"
                title="Kid's Yoga"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis dolores id!"
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default Styles;
