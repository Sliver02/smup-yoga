import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./PhotoCollage.module.scss";

export interface PhotoCollageProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	mainImage: StaticImageData;
	mainAlt?: string;
	/** Import the image so Next generates its blur placeholder. */
	insetImage: StaticImageData;
	insetAlt?: string;
	/** Mirrors the inset to the opposite corner, for rhythm across pages. */
	reverse?: boolean;
	/** Small credit line for sourced (non-own-camera) photography. */
	credit?: ReactNode;
}

export const PhotoCollage = ({
	className,
	mainImage,
	mainAlt,
	insetImage,
	insetAlt,
	reverse = false,
	credit,
}: PhotoCollageProps) => {
	return (
		<div className={classNames(className, styles.collage)}>
			<div className={styles.mainPhoto}>
				<Image
					className={styles.mainImage}
					alt={mainAlt ?? ""}
					src={mainImage}
					placeholder="blur"
					fill
				/>
				<div
					className={classNames(styles.insetPhoto, {
						[styles.insetPhotoReverse]: reverse,
					})}
				>
					<Image
						alt={insetAlt ?? ""}
						src={insetImage}
						placeholder="blur"
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
			</div>
			{credit && <p className={classNames("text--p-sm", styles.credit)}>{credit}</p>}
		</div>
	);
};
