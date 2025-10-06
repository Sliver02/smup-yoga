import { Col, Container, Row } from "@/components/atoms/Grid";
import SectionTitle from "@/components/atoms/SectionTitle";
import InfiniteText from "@/components/molecules/InfiniteText";
import Section from "@/components/organisms/Section";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export interface CalendarItem {
  title: string;
  rows: string[];
}

const Calendar = () => {
  const t = useTranslations("calendar");

  const calendarList: CalendarItem[] = [
    {
      title: t("monday"),
      rows: ["9:30 - Vinyasa, Belluno", "18:30 - Vinyasa, Belluno"],
    },

    {
      title: t("tuesday"),
      rows: [
        "8:30 - Anukalana, Belluno",
        "17:30 - Anukalana, Ponte nelle Alpi",
      ],
    },
    {
      title: t("wednesday"),
      rows: [
        "17:30 - Anukalana, Tai di Cadore",
        "19:00 - Anukalana, Vodo di Cadore",
      ],
    },
    {
      title: t("thursday"),
      rows: ["11:00 - Yin Yoga, Belluno"],
    },
    {
      title: t("friday"),
      rows: ["19:30 - Vinyasa, Belluno"],
    },
  ];

  return (
    <div id="calendar" className={classNames(styles.calendar)}>
      <InfiniteText
        backgroundColor="var(--primary-active)"
        items={[
          t("loop.weekly-classes"),
          t("loop.join-now"),
          t("loop.relax"),
          t("loop.breathe"),
          t("loop.live"),
          t("loop.weekly-classes"),
          t("loop.join-now"),
          t("loop.relax"),
          t("loop.breathe"),
          t("loop.live"),
        ]}
      />
      <Section
        backgroundImage={{
          src: "IMG_2646",
          alt: "Outside Yoga practice in the Dolomites",
        }}
      >
        <div className={classNames(styles.backgroundGradient)} />
        <Container>
          <Row>
            <Col xs={12} lg={5} lgOffset={1}>
              <SectionTitle text={t("title")} />
            </Col>
          </Row>
          {calendarList.map((item, index) => (
            <Row key={index}>
              <Col xs={12} lg={5} lgOffset={1}>
                <p className={classNames("text--p-xl")}>
                  <strong className={classNames("text--p-xxl")}>
                    {item.title}
                  </strong>
                  {item.rows.map((row, index) => (
                    <span key={index}>
                      <br />
                      {row}
                    </span>
                  ))}
                </p>
              </Col>
            </Row>
          ))}
        </Container>
      </Section>
    </div>
  );
};

export default Calendar;
