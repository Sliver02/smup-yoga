import { RouteEnum } from "@/common/routeEnum";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CardDisplay } from "@/components/molecules/CardDisplay";
import { Section } from "@/components/organisms/Section";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import styles from "./Styles.module.scss";

interface Practice {
  key: string;
  href: RouteEnum;
  image: string;
}

const PRACTICES: Practice[] = [
  {
    key: "anukalana",
    href: RouteEnum.ANUKALANA,
    image: "PXL_20250823_075608610",
  },
  { key: "yin", href: RouteEnum.YIN, image: "PXL_20250601_164142948.MP" },
  { key: "kids", href: RouteEnum.KID, image: "photo_2_2025-09-03_09-38-20" },
  {
    key: "outdoor",
    href: RouteEnum.OUTDOOR,
    image: "PXL_20250726_110233771.MP",
  },
  {
    key: "private",
    href: RouteEnum.PRIVATE_LESSONS,
    image: "PXL_20250101_151738219",
  },
];

export interface StylesProps {
  /** Route of the page currently open — its own card is dropped from the grid. */
  exclude?: RouteEnum;
  /** Overrides the default "What I teach" heading (used for cross-links). */
  title?: string;
  backgroundColor?: string;
}

export const Styles = ({ exclude, title, backgroundColor }: StylesProps) => {
  const t = useTranslations("classes");
  const practices = PRACTICES.filter((practice) => practice.href !== exclude);

  return (
    <div id="classes">
      <Section backgroundColor={backgroundColor}>
        <Container>
          <Row>
            <Col>
              <SectionTitle text={title ?? t("title")} center />
            </Col>
          </Row>
          {/* The intro pitches the whole offering — it only belongs on the home
              grid, not on the "other practices" cross-link at the foot of a page. */}
          {!title && (
            <Row xsJustify={Justify.center}>
              <Col xs={12} lg={8}>
                <p
                  className={classNames(
                    styles.intro,
                    "text--p-lg",
                    "text--align-center"
                  )}
                >
                  {t("intro")}
                </p>
              </Col>
            </Row>
          )}
          <Row xsJustify={Justify.center} gap="1.5rem 0">
            {practices.map((practice, index) => (
              <Col key={practice.key} xs={12} sm={6} lg={4}>
                <FadeIn
                  className={classNames(styles.card)}
                  delay={(index % 3) * 0.12}
                  y={32}
                >
                  <CardDisplay
                    image={practice.image}
                    href={practice.href}
                    title={t(`${practice.key}.title`)}
                    cta={t("discover")}
                    description={t.rich(`${practice.key}.description`, {
                      strong: (children) => <strong>{children}</strong>,
                    })}
                  />
                </FadeIn>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
    </div>
  );
};
