import { BaseProps } from "@/common/globalInterfaces";
import Breadcrumb, { BreadcrumbItem } from "@/components/atoms/Breadcrumb";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import classNames from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";

export interface HeroProps extends BaseProps {
  title: string;
  subtitle: string;
  compact?: boolean;
  backgroundImage?: string;
  breadcrumbItems?: BreadcrumbItem[];
}

const Hero = ({
  className,
  title,
  subtitle,
  compact = false,
  backgroundImage = "/images/IMG_2617.png",
  breadcrumbItems,
}: HeroProps) => {
  const placeholderImage = backgroundImage.replace(
    /\.(jpg|png|jpeg)$/,
    "_placeholder.$1"
  );

  return (
    <div
      className={classNames(className, styles.hero, {
        [styles.compact]: compact,
      })}
      id={compact ? undefined : "home"}
    >
      <Image
        className={classNames(className, styles.backgroundImage)}
        alt="Yoga nature alps Dolomites"
        src={backgroundImage}
        placeholder="blur"
        blurDataURL={placeholderImage}
        priority
        fill
      />

      <div
        className={classNames(styles.textWrapper, {
          "text--align-center": !compact,
        })}
      >
        <Container>
          <Row xsJustify={compact ? Justify.start : Justify.center}>
            <Col xs={12} lg={compact ? 10 : 8}>
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
            {breadcrumbItems && breadcrumbItems.length > 0 && (
              <Col xs={12}>
                <Breadcrumb items={breadcrumbItems} />
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
