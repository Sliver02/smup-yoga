import Image from "next/image";
import styles from "./styles.module.scss";

export interface SectionTitleProps {
  text: string;
  icon?: {
    type?: "star";
    color?: string;
  };
}

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
