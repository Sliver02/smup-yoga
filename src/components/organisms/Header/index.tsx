import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Bars3Icon } from "@heroicons/react/16/solid";

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
      label: "Calendar",
      url: "#calendar",
    },
    {
      label: "Events",
      url: "#events",
    },
    {
      label: "Lifestyle",
      url: "#life",
    },
  ];

  return (
    <div className={classNames(className, styles.header)}>
      <div className={classNames(styles.logoContainer)}>
        <Link className={classNames(styles.navbar__button)} href="." replace>
          <Image
            alt="SMUP Yoga - Dolomites"
            src={"smup_logo_white.svg"}
            priority
            fill
          />
        </Link>
      </div>
      <div className={classNames(styles.navbar)}>
        {navButtons.map((button, index) => (
          <a
            key={index}
            className={classNames(styles.navbar__button)}
            href={button.url}
          >
            {button.label}
          </a>
        ))}
      </div>

      <div className={classNames(styles.hamburger)}>
        <Bars3Icon />
      </div>
    </div>
  );
};

export default Header;
