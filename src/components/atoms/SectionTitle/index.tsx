import Image from "next/image";
import { SectionTitleProps } from "./interfaces";
import styles from "./styles.module.scss";

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <span className={styles.sectionTitle}>
      <span className={styles.iconContainer}>
        <Image
          className={styles.icon}
          alt={text}
          src="/icons/star_01.svg"
          fill
        />
      </span>
      <h3>{text}</h3>
    </span>
  );
};

export default SectionTitle;
