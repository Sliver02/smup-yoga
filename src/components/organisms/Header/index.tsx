"use client";
import { BaseProps } from "@/common/globalInterfaces";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export interface HeaderProps extends BaseProps {
  prot?: string;
}

export interface NavButtonsProps {
  label: string;
  url: string;
}

const Header = ({ className }: HeaderProps) => {
  const t = useTranslations("header");
  const [openMenu, setOpenMenu] = useState(false);

  const navButtons: NavButtonsProps[] = [
    {
      label: t("home"),
      url: "#home",
    },
    {
      label: t("about"),
      url: "#about",
    },
    {
      label: t("calendar"),
      url: "#calendar",
    },
    {
      label: t("styles"),
      url: "#styles",
    },
    {
      label: t("contact"),
      url: "#contact",
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

      <div
        className={classNames(styles.hamburger)}
        onClick={() => setOpenMenu((openMenu) => !openMenu)}
      >
        <MenuRoundedIcon fontSize="large" />
      </div>

      <div
        className={classNames(styles.menu, openMenu && styles["menu--open"])}
      >
        {navButtons.map((button, index) => (
          <a
            key={index}
            className={classNames(styles["menu__button"])}
            href={button.url}
            onClick={() => setOpenMenu(false)}
          >
            {button.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
