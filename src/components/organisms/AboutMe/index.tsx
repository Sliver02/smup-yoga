import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardDisplay from "@/components/molecules/CardDisplay";

const AboutMe = () => {
  return (
    <div id="about">
      <Container>
        <Row xsJustify={Justify.start} mdJustify={Justify.center}>
          <Col>
            <SectionTitle text="Styles & Specializations" />
          </Col>
        </Row>
        <Row xsJustify={Justify.center}>
          <Col xs={12} sm={6} lg={4}>
            <CardDisplay
              image="PXL_20250726_114904897.MP.jpg"
              title="Anukalana Yoga"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis dolores id!"
            />
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <CardDisplay
              image="PXL_20250726_114904897.MP.jpg"
              title="Yin Yoga"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis dolores id!"
            />
          </Col>
          <Col xs={12} sm={6} lg={4}>
            <CardDisplay
              image="PXL_20250726_114904897.MP.jpg"
              title="Kid's Yoga"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis dolores id!"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
