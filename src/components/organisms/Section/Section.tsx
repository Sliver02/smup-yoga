import classNames from "classnames";
import styles from "./Section.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";

export interface SectionProps extends BaseProps {
	backgroundColor?: string;
	/** Decorative background — import the image so Next generates its blur placeholder. */
	backgroundImage?: StaticImageData;
}

export const Section = ({
	className,
	children,
	backgroundColor,
	backgroundImage,
}: SectionProps) => {
	const cssVar = {
		["--background-color"]: backgroundColor,
	} as CSSProperties;

	return (
		<div className={classNames(className, styles.section)} style={cssVar}>
			{backgroundImage && (
				<Image
					className={classNames(styles.backgroundImage)}
					alt=""
					src={backgroundImage}
					placeholder="blur"
					fill
				/>
			)}
			<span className={classNames(styles.content)}>{children}</span>
		</div>
	);
};
