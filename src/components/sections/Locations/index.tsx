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
  dayKey: string;
  time: string;
  timeSlot: "morning" | "afternoon" | "evening";
  type: string;
  location: string;
}

export interface LocationsProps {
  className?: string;
  priorityLocation?: string;
  highlightType?: string;
}

const Locations = ({
  className,
  priorityLocation,
  highlightType,
}: LocationsProps) => {
  const t = useTranslations("calendar");
  const tLoc = useTranslations("locations");

  const schedule: ClassSchedule[] = [
    {
      day: t("monday"),
      dayKey: "monday",
      time: "9:30",
      timeSlot: "morning",
      type: "Vinyasa",
      location: "Belluno",
    },
    {
      day: t("monday"),
      dayKey: "monday",
      time: "18:30",
      timeSlot: "evening",
      type: "Vinyasa",
      location: "Belluno",
    },
    {
      day: t("tuesday"),
      dayKey: "tuesday",
      time: "8:30",
      timeSlot: "morning",
      type: "Anukalana",
      location: "Belluno",
    },
    {
      day: t("tuesday"),
      dayKey: "tuesday",
      time: "17:30",
      timeSlot: "afternoon",
      type: "Anukalana",
      location: tLoc("locations_list.ponte"),
    },
    {
      day: t("wednesday"),
      dayKey: "wednesday",
      time: "17:30",
      timeSlot: "afternoon",
      type: "Anukalana",
      location: tLoc("locations_list.tai"),
    },
    {
      day: t("wednesday"),
      dayKey: "wednesday",
      time: "19:00",
      timeSlot: "evening",
      type: "Anukalana",
      location: tLoc("locations_list.vodo"),
    },
    {
      day: t("thursday"),
      dayKey: "thursday",
      time: "11:00",
      timeSlot: "morning",
      type: "Yin Yoga",
      location: "Belluno",
    },
    {
      day: t("friday"),
      dayKey: "friday",
      time: "17:30",
      timeSlot: "afternoon",
      type: "Kid's Yoga",
      location: tLoc("locations_list.vodo"),
    },
  ];

  // Group schedule by day and time slot
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const timeSlots: ("morning" | "afternoon" | "evening")[] = [
    "morning",
    "afternoon",
    "evening",
  ];

  // Create a map for quick lookup
  const scheduleMap = new Map<string, ClassSchedule>();
  schedule.forEach((cls) => {
    scheduleMap.set(`${cls.dayKey}-${cls.timeSlot}`, cls);
  });

  return (
    <Section
      className={classNames(className, styles.locations)}
      backgroundColor="var(--primary-active)"
    >
      <Container>
        <Row>
          <Col>
            <SectionTitle text={tLoc("schedule_title")} center />
          </Col>
        </Row>
        <Row xsJustify={Justify.center}>
          <Col xs={12}>
            <div className={styles.scheduleTable}>
              {/* Header row with days */}
              <div className={styles.headerRow}>
                <div className={styles.timeSlotLabel}></div>
                {days.map((dayKey) => (
                  <div key={dayKey} className={styles.dayHeader}>
                    {t(dayKey)}
                  </div>
                ))}
              </div>

              {/* Time slot rows */}
              {timeSlots.map((slot) => (
                <div key={slot} className={styles.scheduleRow}>
                  <div className={styles.timeSlotLabel}>
                    {tLoc(`time_slots.${slot}`)}
                  </div>
                  {days.map((dayKey) => {
                    const cls = scheduleMap.get(`${dayKey}-${slot}`);
                    return (
                      <div key={`${dayKey}-${slot}`} className={styles.cell}>
                        {cls ? (
                          <div
                            className={classNames(styles.scheduleCard, {
                              [styles.highlight]:
                                highlightType &&
                                cls.type
                                  .toLowerCase()
                                  .includes(highlightType.toLowerCase()),
                              [styles.priority]:
                                priorityLocation &&
                                cls.location.includes(priorityLocation),
                            })}
                          >
                            <div className={styles.time}>{cls.time}</div>
                            <div className={styles.type}>{cls.type}</div>
                            <div className={styles.location}>
                              {cls.location}
                            </div>
                          </div>
                        ) : (
                          <div className={styles.emptyCell}>—</div>
                        )}
                      </div>
                    );
                  })}
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
