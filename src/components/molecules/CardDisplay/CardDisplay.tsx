import { BaseProps } from "@/common/globalInterfaces";
import { Link } from "@/i18n/routing";
import classNames from "classnames";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./CardDisplay.module.scss";

export interface CardDisplayProps extends BaseProps {
  image: string;
  imageFormat?: string;
  title?: string;
  description?: ReactNode;
  /** Turns the whole card into a link to a detail page. */
  href?: string;
  /** Label of the affordance shown on linked cards. */
  cta?: string;
}

export const CardDisplay = ({
  className,
  title,
  description,
  image,
  imageFormat = "jpg",
  href,
  cta,
}: CardDisplayProps) => {
  const content = (
    <>
      <div className={classNames(styles.media)}>
        <Image
          className={classNames(styles.image)}
          alt={title ?? ""}
          src={"/images/" + image + "." + imageFormat}
          placeholder="blur"
          blurDataURL={"/images/" + image + "_placeholder." + imageFormat}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fill
        />
      </div>
      <div className={classNames(styles.body)}>
        {title && <h4 className={classNames(styles.title)}>{title}</h4>}
        {description && (
          <p className={classNames(styles.description)}>{description}</p>
        )}
        {href && cta && (
          <span className={classNames(styles.cta)}>
            {cta}
            <ArrowUpRight size={18} />
          </span>
        )}
      </div>
    </>
  );

  if (!href) {
    return (
      <div className={classNames(className, styles.cardDisplay)}>{content}</div>
    );
  }

  return (
    <Link
      href={href}
      className={classNames(className, styles.cardDisplay, styles.linked)}
    >
      {content}
    </Link>
  );
};
