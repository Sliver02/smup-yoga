import classNames from "classnames";
import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { CSSProperties } from "react";
import Image from "next/image";

export interface SectionProps extends BaseProps {
  backgroundColor?: string;
  backgroundImage?: {
    src: string;
    alt: string;
    format?: "png" | "jpg" | "jpeg" | "webp";
  };
}

const Section = ({
  className,
  children,
  backgroundColor,
  backgroundImage,
}: SectionProps) => {
  const cssVar = {
    ["--background-color"]: backgroundColor,
  } as CSSProperties;

  return (
    <div className={classNames(className, styles.section)} style={cssVar}>
      {backgroundImage && (
        <Image
          className={classNames(styles.backgroundImage)}
          alt=""
          src={
            "/images/" +
            backgroundImage.src +
            "." +
            (backgroundImage.format || "jpg")
          }
          placeholder="blur"
          blurDataURL={
            "/images/" +
            backgroundImage.src +
            "_placeholder" +
            "." +
            (backgroundImage.format || "jpg")
          }
          fill
        />
      )}
      <span className={classNames(styles.content)}>{children}</span>
    </div>
  );
};

export default Section;
