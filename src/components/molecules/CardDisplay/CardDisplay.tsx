import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import styles from "./CardDisplay.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { ReactNode } from "react";

export interface CardDisplayProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	title?: string;
	description?: ReactNode;
}

export const CardDisplay = ({ className, title, description, image }: CardDisplayProps) => {
	return (
		<div className={classNames(className, styles.cardDisplay)}>
			<div className={classNames(styles.imageContainer)}>
				<Image
					className={classNames(styles.backgroundImage)}
					alt={title ?? ""}
					src={image}
					placeholder="blur"
					fill
				/>
				{title && (
					<div className={classNames(styles.titleContainer)}>
						<h4>{title}</h4>
					</div>
				)}
			</div>
			{description && (
				<div className={classNames(styles.descriptionContainer)}>
					<p className={classNames("text--p-lg")}>{description}</p>
				</div>
			)}
		</div>
	);
};
