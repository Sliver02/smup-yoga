import classNames from "classnames";
import { CardDisplayProps } from "./interfaces";
import Image from "next/image";
import styles from "./styles.module.scss";

const CardDisplay = ({
  className,
  title,
  description,
  image,
}: CardDisplayProps) => {
  return (
    <div className={classNames(className, styles.cardDisplay)}>
      <div className={classNames(styles.imageContainer)}>
        <Image
          className={classNames(styles.backgroundImage)}
          alt={title}
          src={"/images/" + image}
          fill
        />
        <div className={classNames(styles.titleContainer)}>
          <h4 className={classNames("")}>{title}</h4>
        </div>
      </div>
      {description && (
        <div className={classNames(styles.descriptionContainer)}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
