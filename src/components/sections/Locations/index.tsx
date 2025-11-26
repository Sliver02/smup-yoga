"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import Section from "@/components/organisms/Section";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

interface ClassSchedule {
  day: string;
  time: string;
  type: string;
  location: string;
}

export interface LocationsProps {
  className?: string;
  priorityLocation?: string;
}

const Locations = ({ className, priorityLocation }: LocationsProps) => {
  const t = useTranslations("calendar");
  const tLoc = useTranslations("locations");

  const schedule: ClassSchedule[] = [
    { day: t("monday"), time: "9:30", type: "Vinyasa", location: "Belluno" },
    { day: t("monday"), time: "18:30", type: "Vinyasa", location: "Belluno" },
    { day: t("tuesday"), time: "8:30", type: "Anukalana", location: "Belluno" },
    {
      day: t("tuesday"),
      time: "17:30",
      type: "Anukalana",
      location: tLoc("locations_list.ponte"),
    },
    {
      day: t("wednesday"),
      time: "17:30",
      type: "Anukalana",
      location: tLoc("locations_list.tai"),
    },
    {
      day: t("wednesday"),
      time: "19:00",
      type: "Anukalana",
      location: tLoc("locations_list.vodo"),
    },
    {
      day: t("thursday"),
      time: "11:00",
      type: "Yin Yoga",
      location: "Belluno",
    },
    { day: t("friday"), time: "19:30", type: "Vinyasa", location: "Belluno" },
  ];

  // Reorder schedule based on priority location
  const orderedSchedule = priorityLocation
    ? [
        ...schedule.filter((cls) => cls.location.includes(priorityLocation)),
        ...schedule.filter((cls) => !cls.location.includes(priorityLocation)),
      ]
    : schedule;

  return (
    <Section className={classNames(className, styles.locations)}>
      <Container>
        <Row>
          <Col>
            <SectionTitle text={tLoc("schedule_title")} center />
          </Col>
        </Row>
        <Row xsJustify={Justify.center}>
          <Col xs={12} lg={10}>
            <div className={styles.scheduleGrid}>
              {orderedSchedule.map((cls, index) => (
                <div
                  key={index}
                  className={classNames(styles.scheduleCard, {
                    [styles.priority]:
                      priorityLocation &&
                      cls.location.includes(priorityLocation),
                  })}
                >
                  <div className={styles.day}>{cls.day}</div>
                  <div className={styles.time}>{cls.time}</div>
                  <div className={styles.type}>{cls.type}</div>
                  <div className={styles.location}>{cls.location}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Locations;
