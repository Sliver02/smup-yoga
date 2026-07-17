import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Card.module.scss";

export interface CardProps {
	title?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	/** Optional leading icon (e.g. a lucide-react glyph). */
	icon?: ReactNode;
	className?: string;
}

export const Card = ({ title, children, footer, icon, className }: CardProps) => (
	<article className={classNames(styles.card, className)}>
		{icon && <div className={styles.icon}>{icon}</div>}
		{title && <h3 className={styles.title}>{title}</h3>}
		{children && <div className={styles.body}>{children}</div>}
		{footer && <div className={styles.footer}>{footer}</div>}
	</article>
);
