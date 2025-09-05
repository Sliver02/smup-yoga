import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardFrame from "@/components/molecules/CardFrame";
import Section from "@/components/organisms/Section";
import classNames from "classnames";

const AboutMe = () => {
  return (
    <div id="about">
      <Section>
        <Container>
          <Row xsJustify={Justify.center} mdAlign={Align.center}>
            <Col xs={12} md={5}>
              <CardFrame image="PXL_20250112_213040356.jpg" alt="Kid's Yoga" />
            </Col>
            <Col xs={12} md={4}>
              <SectionTitle text="About me" />
              <p className={classNames("text--p-lg")}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                perferendis vitae totam quae pariatur amet aspernatur enim eaque
                accusantium libero tenetur necessitatibus molestias ea hic,
                animi, repellat veniam harum quasi.
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default AboutMe;
