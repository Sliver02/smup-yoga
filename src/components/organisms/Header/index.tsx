"use client";
import { BaseProps } from "@/common/globalInterfaces";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

export interface HeaderProps extends BaseProps {
  prot?: string;
}

export interface NavItem {
  label: string;
  url?: string;
  children?: NavItem[];
}

const Header = ({ className }: HeaderProps) => {
  const t = useTranslations("header");
  const tClasses = useTranslations("classes");
  const tLoc = useTranslations("locations");
  const tOutdoor = useTranslations("outdoor");
  const tPrivate = useTranslations("private");

  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: t("home"),
      url: "/",
    },
    {
      label: t("about"),
      url: "/chi-sono",
    },
    {
      label: t("classes"),
      children: [
        { label: tClasses("anukalana.title"), url: "/anukalana" },
        { label: tClasses("yin.title"), url: "/yin-yoga" },
        { label: tClasses("kids.title"), url: "/yoga-bimbi" },
        { label: tOutdoor("title"), url: "/yoga-outdoor" },
        { label: tPrivate("title"), url: "/lezioni-private" },
      ],
    },
    {
      label: tLoc("title"),
      children: [
        { label: tLoc("belluno.title"), url: "/yoga-belluno" },
        { label: tLoc("cortina.title"), url: "/yoga-cortina" },
      ],
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
        {navItems.map((item, index) => (
          <div key={index} className={styles.navItem}>
            {item.children ? (
              <div
                className={styles.dropdown}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={classNames(
                    styles.navbar__button,
                    styles.dropdownButton
                  )}
                >
                  {item.label}
                  <KeyboardArrowDownIcon fontSize="small" />
                </button>
                <div
                  className={classNames(styles.dropdownMenu, {
                    [styles.dropdownMenuOpen]: openDropdown === item.label,
                  })}
                >
                  {item.children.map((child, childIndex) => (
                    <Link
                      key={childIndex}
                      href={child.url!}
                      className={styles.dropdownItem}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : item.url?.startsWith("#") ? (
              <a className={classNames(styles.navbar__button)} href={item.url}>
                {item.label}
              </a>
            ) : (
              <Link
                className={classNames(styles.navbar__button)}
                href={item.url!}
              >
                {item.label}
              </Link>
            )}
          </div>
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
        {navItems.map((item, index) => (
          <div key={index} className={styles.mobileNavItem}>
            {item.children ? (
              <>
                <div className={styles.mobileDropdownLabel}>{item.label}</div>
                {item.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    href={child.url!}
                    className={classNames(
                      styles["menu__button"],
                      styles.mobileSubItem
                    )}
                    onClick={() => setOpenMenu(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </>
            ) : item.url?.startsWith("#") ? (
              <a
                className={classNames(styles["menu__button"])}
                href={item.url}
                onClick={() => setOpenMenu(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                className={classNames(styles["menu__button"])}
                href={item.url!}
                onClick={() => setOpenMenu(false)}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
