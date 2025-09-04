import { Col, Container, Row } from "@/components/atoms/Grid";
import SectionTitle from "@/components/atoms/SectionTitle";
import InfiniteText from "@/components/molecules/InfiniteText";
import Section from "@/components/organisms/Section";
import classNames from "classnames";

export interface CalendarItem {
  title: string;
  rows: string[];
}

const Calendar = () => {
  const calendarList: CalendarItem[] = [
    {
      title: "Lunedì",
      rows: ["9:30 - Vinyasa, Belluno", "18:30 - Vinyasa, Belluno"],
    },

    {
      title: "Martedì",
      rows: [
        "8:30 - Anukalana, Belluno",
        "17:30 - Anukalana, Ponte nelle Alpi",
      ],
    },
    {
      title: "Mercoledì",
      rows: [
        "17:30 - Anukalana, Tai di Cadore",
        "19:00 - Anukalana, Vodo di Cadore",
      ],
    },
    {
      title: "Giovedì",
      rows: ["11:00 - Yin Yoga, Belluno"],
    },
    {
      title: "Venerdì",
      rows: ["19:30 - Vinyasa, Belluno"],
    },
  ];

  const colorBackground = "var(--primary-main)";

  return (
    <div id="calendar">
      <InfiniteText
        backgroundColor={colorBackground}
        items={[
          "WEEKLY SESSIONS",
          "JOIN NOW",
          "RELAX",
          "BREATH",
          "LIVE",
          "WEEKLY SESSIONS",
          "JOIN NOW",
          "RELAX",
          "BREATH",
          "LIVE",
        ]}
      />
      <Section backgroundImage="IMG_2646.jpg">
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(90deg,${colorBackground} 20%, #f4f6ff00 100%)`,
          }}
        />
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <SectionTitle text="Calendar" />
            </Col>
          </Row>
          {calendarList.map((item, index) => (
            <Row key={index}>
              <Col xs={12} lg={6}>
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
