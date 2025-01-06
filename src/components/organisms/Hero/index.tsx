import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import Background from "@/components/atoms/Background";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align } from "@/components/atoms/Grid/interfaces";
import classNames from "classnames";

export interface HeroProps extends BaseProps {
  title: string;
  subtitle: string;
}

const Hero = ({ className, title, subtitle }: HeroProps) => {
  return (
    <div className={classNames(className, styles.hero)}>
      <Background backgroundColor="black">
        <Container>
          <Row xsAlign={Align.baseline}>
            <Col>
              <h1>{title}</h1>
              <p>{subtitle}</p>
            </Col>
          </Row>
        </Container>
      </Background>
    </div>
  );
};

export default Hero;
