"use client";
import classNames from "classnames";
import MarqueeSlider from "react-marquee-slider";
import styles from "./styles.module.scss";
import Image from "next/image";
import { CSSProperties } from "react";

export interface InfiniteTextProps {
  items: string[];
  backgroundColor?: string;
}

const InfiniteText = ({ items, backgroundColor }: InfiniteTextProps) => {
  const cssVar = {
    ["--background-color"]: backgroundColor,
  } as CSSProperties;

  return (
    <div className={classNames(styles.infiniteText)} style={cssVar}>
      <MarqueeSlider
        direction="ltr"
        velocity={30}
        scatterRandomly={false}
        resetAfterTries={2}
        onInit={() => true}
        onFinish={() => {}}
      >
        {items.map((item, index) => (
          <h3 key={index} className={classNames(styles.item)}>
            {item}
            <Image
              className={classNames(styles.icon)}
              width={40}
              height={40}
              alt=""
              src="/icons/star_02_black.svg"
            />
          </h3>
        ))}
      </MarqueeSlider>
    </div>
  );
};

export default InfiniteText;
