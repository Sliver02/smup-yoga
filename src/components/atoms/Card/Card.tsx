import { Link } from "@/i18n/routing";
import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Card.module.scss";

export interface CardProps {
	title?: ReactNode;
	subtitle?: ReactNode;
	children?: ReactNode;
	footer?: ReactNode;
	/** Optional leading icon (e.g. a lucide-react glyph). */
	icon?: ReactNode;
	/** Visual weight of the card's surface. Defaults to "border" (previous look). */
	surface?: "flat" | "shadow" | "border";
	/** Title/subtitle scale. "large" matches the page's own heading proportions,
	 * for a card used as a section's primary header rather than a grid item. */
	size?: "small" | "medium" | "large";
	/** Turns the whole card into a link — hover/focus affordance only applies then. */
	href?: string;
	className?: string;
}

export const Card = ({
	title,
	subtitle,
	children,
	footer,
	icon,
	surface = "border",
	size = "medium",
	href,
	className,
}: CardProps) => {
	const hasHeader = Boolean(icon || title || subtitle);

	const content = (
		<>
			{hasHeader && (
				<div className={classNames(styles.header)}>
					{icon && <div className={styles.icon}>{icon}</div>}
					{title && <h3 className={styles.title}>{title}</h3>}
					{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
				</div>
			)}
			{children && <div className={styles.body}>{children}</div>}
			{footer && <div className={styles.footer}>{footer}</div>}
		</>
	);

	const classes = classNames(
		styles.card,
		styles[surface],
		styles[size],
		{ [styles.linked]: Boolean(href) },
		className
	);

	if (!href) {
		return <div className={classes}>{content}</div>;
	}

	return (
		<Link href={href} className={classes}>
			{content}
		</Link>
	);
};
