import Image from "next/image";
import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";

export interface SectionTitleProps extends BaseProps {
  text: string;
  center?: boolean;
}

const SectionTitle = ({ text, center }: SectionTitleProps) => {
  return (
    <span
      className={classNames(
        styles["sectionTitle"],
        center && styles["sectionTitle--center"]
      )}
    >
      <span className={classNames(styles.iconContainer)}>
        <Image
          className={styles.icon}
          alt={text}
          src="/icons/star_01_pink.svg"
          fill
        />
      </span>
      <h3>{text}</h3>
    </span>
  );
};

export default SectionTitle;
