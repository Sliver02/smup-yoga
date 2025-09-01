import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Image from "next/image";

export interface HeaderProps extends BaseProps {
  prot?: string;
}

export interface NavButtonsProps {
  label: string;
  url: string;
}

const Header = ({ className }: HeaderProps) => {
  const navButtons: NavButtonsProps[] = [
    {
      label: "Home",
      url: "#home",
    },
    {
      label: "About me",
      url: "#about",
    },
    {
      label: "Classes",
      url: "#classes",
    },
    {
      label: "Experiences",
      url: "#exp",
    },
    {
      label: "Lifestyle",
      url: "#life",
    },
  ];

  return (
    <div className={classNames(className, styles.header)}>
      <div className={classNames(className, styles.logoContainer)}>
        <a
          className={classNames(className, styles.navbar__button)}
          href={navButtons[0].url}
        >
          <Image alt="SMUP Yoga - Dolomites" src={"smup_logo_white.svg"} fill />
        </a>
      </div>
      <div className={classNames(className, styles.navbar)}>
        {navButtons.map((button, index) => (
          <a
            key={index}
            className={classNames(className, styles.navbar__button)}
            href={button.url}
          >
            {button.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
