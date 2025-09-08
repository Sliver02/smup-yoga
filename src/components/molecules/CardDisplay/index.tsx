import classNames from "classnames";
import Image from "next/image";
import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { ReactNode } from "react";

export interface CardDisplayProps extends BaseProps {
  image: string;
  title?: string;
  description?: ReactNode;
}

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
          alt={title ?? ""}
          src={"/images/" + image}
          fill
        />
        {title && (
          <div className={classNames(styles.titleContainer)}>
            <h4 className={classNames("")}>{title}</h4>
          </div>
        )}
      </div>
      {description && (
        <div className={classNames(styles.descriptionContainer)}>
          <p className={classNames("text--p-lg")}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
