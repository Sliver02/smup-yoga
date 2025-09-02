import { BaseProps } from "@/common/globalInterfaces";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import ImagePlus from "@/components/atoms/ImagePlus";
import classNames from "classnames";
import styles from "./styles.module.scss";

export interface HeroProps extends BaseProps {
  title: string;
  subtitle: string;
}

const Hero = ({ className, title, subtitle }: HeroProps) => {
  return (
    <div className={classNames(className, styles.hero)} id="home">
      <ImagePlus
        className={classNames(className, styles.backgroundImage)}
        alt="Yoga nature alps Dolomites"
        src="/images/IMG_2617.png"
        fill
      />
      <div className={classNames(styles.textWrapper, "text--align-center")}>
        <Container>
          <Row xsJustify={Justify.center}>
            <Col xs={12} lg={8}>
              <h1>{title}</h1>
              <p
                className={classNames(
                  "text--strong",
                  "text--p-xl",
                  "text--strong"
                )}
              >
                {subtitle}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
