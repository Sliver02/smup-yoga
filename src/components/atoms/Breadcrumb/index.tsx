import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import Link from "next/link";
import styles from "./styles.module.scss";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends BaseProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ className, items }: BreadcrumbProps) => {
  return (
    <nav
      className={classNames(className, styles.breadcrumb)}
      aria-label="Breadcrumb"
    >
      <ol className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item.href && index < items.length - 1 ? (
              <>
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
                <span className={styles.separator}>/</span>
              </>
            ) : (
              <span className={styles.current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
