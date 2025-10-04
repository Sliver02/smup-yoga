import { BaseProps } from "@/common/globalInterfaces";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface HeroProps extends BaseProps {
  title: string;
  subtitle: string;
}

const Hero = ({ className, title, subtitle }: HeroProps) => {
  return (
    <div className={classNames(className, styles.hero)} id="home">
      <Image
        className={classNames(className, styles.backgroundImage)}
        alt="Yoga nature alps Dolomites"
        src="/images/IMG_2617.png"
        placeholder="blur"
        blurDataURL="/images/IMG_2617_placeholder.png"
        priority
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
                  "text--p-xxl",
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
