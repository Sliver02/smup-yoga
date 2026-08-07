import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./CardFrame.module.scss";
import Image, { StaticImageData } from "next/image";

export interface CardFrameProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	alt?: string;
}

export const CardFrame = ({ className, image, alt }: CardFrameProps) => {
	return (
		<div className={classNames(className, styles.cardFrame)}>
			<div className={classNames(styles.imageContainer)}>
				<Image
					className={classNames(styles.backgroundImage)}
					alt={alt ?? ""}
					src={image}
					placeholder="blur"
					fill
				/>

				<div className={classNames(styles.frame)}>
					<Image
						className={classNames(styles.icon, styles.icon_top)}
						width={60}
						height={60}
						src="/icons/star_01_pink.svg"
						alt=""
					/>
					<Image
						className={classNames(styles.icon, styles.icon_bottom)}
						width={60}
						height={60}
						src="/icons/star_02_black.svg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
