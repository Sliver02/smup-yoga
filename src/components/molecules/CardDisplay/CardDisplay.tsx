import { BaseProps } from "@/common/globalInterfaces";
import { Link } from "@/i18n/routing";
import classNames from "classnames";
import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./CardDisplay.module.scss";

export interface CardDisplayProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	title?: string;
	description?: ReactNode;
	/** Turns the whole card into a link to a detail page. */
	href?: string;
	/** Shows the affordance badge on linked cards; text itself isn't displayed. */
	cta?: string;
}

export const CardDisplay = ({
	className,
	title,
	description,
	image,
	href,
	cta,
}: CardDisplayProps) => {
	const content = (
		<>
			<div className={classNames(styles.media)}>
				<Image
					className={classNames(styles.image)}
					alt={title ?? ""}
					src={image}
					placeholder="blur"
					sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
					fill
				/>
			</div>
			<div className={classNames(styles.note)}>
				{href && cta && (
					<span className={classNames(styles.badge)} aria-hidden>
						<ArrowUpRight size={18} />
					</span>
				)}
				<div className={classNames(styles.body)}>
					{title && <h4 className={classNames(styles.title)}>{title}</h4>}
					{description && <p className={classNames(styles.description)}>{description}</p>}
				</div>
			</div>
		</>
	);

	if (!href) {
		return <div className={classNames(className, styles.cardDisplay)}>{content}</div>;
	}

	return (
		<Link href={href} className={classNames(className, styles.cardDisplay, styles.linked)}>
			{content}
		</Link>
	);
};
