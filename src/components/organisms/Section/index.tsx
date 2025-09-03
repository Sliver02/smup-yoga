import classNames from "classnames";
import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { CSSProperties } from "react";

export interface SectionProps extends BaseProps {
  backgroundColor?: string;
}

const Section = ({ className, children, backgroundColor }: SectionProps) => {
  const cssVar = {
    ["--background-color"]: backgroundColor,
  } as CSSProperties;

  return (
    <div className={classNames(className, styles.section)} style={cssVar}>
      <span className={classNames(styles.content)}>{children}</span>
    </div>
  );
};

export default Section;
