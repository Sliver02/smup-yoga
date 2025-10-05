import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardFrame from "@/components/molecules/CardFrame";
import Section from "@/components/organisms/Section";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations("about");

  return (
    <div id="about" className={classNames(styles.about)}>
      <div className={classNames(styles.backgroundGradient)} />
      <Section>
        <Container>
          <Row xsJustify={Justify.center} mdAlign={Align.center}>
            <Col xs={12} md={5}>
              <CardFrame image="PXL_20250112_213040356" alt="Kid's Yoga" />
            </Col>
            <Col xs={12} md={6}>
              <SectionTitle text={t("title")} />
              <p className={classNames("text--p-lg")}>
                {t.rich("description1", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
              <p className={classNames("text--p-lg")}>
                {t.rich("description2", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
              <p className={classNames("text--p-lg")}>
                {t.rich("description3", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
              <p className={classNames("text--p-lg")}>
                {t.rich("description4", {
                  strong: (children) => <strong>{children}</strong>,
                })}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default AboutMe;
