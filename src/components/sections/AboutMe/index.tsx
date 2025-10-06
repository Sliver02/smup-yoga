import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardFrame from "@/components/molecules/CardFrame";
import Section from "@/components/organisms/Section";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

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
              <div>
                <Row>
                  <Col>
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
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className={classNames(styles.socialContainer)}>
                      <Link
                        href={"https://www.instagram.com/smup_yoga/"}
                        target="_blank"
                        aria-description="Instagram Profile"
                      >
                        <InstagramIcon
                          fontSize="large"
                          className={classNames(styles.icon)}
                        />
                      </Link>
                      <Link
                        href={
                          "https://www.linkedin.com/in/sarah-maria-ursula-pompanin-4492a1100/"
                        }
                        target="_blank"
                        aria-description="LinkedIn Profile"
                      >
                        <LinkedInIcon
                          fontSize="large"
                          className={classNames(styles.icon)}
                        />
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </div>
  );
};

export default AboutMe;
