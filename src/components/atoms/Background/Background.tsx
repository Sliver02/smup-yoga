import classNames from "classnames";
import { CSSProperties } from "react";
import { BaseProps } from "@/common/globalInterfaces";
import styles from "./Background.module.scss";

export interface BackgroundProps extends BaseProps {
	backgroundColor?: string;
}

export const Background = ({ className, children, backgroundColor }: BackgroundProps) => (
	<div
		className={classNames(styles.background, className)}
		style={{ ["--background-color"]: backgroundColor } as CSSProperties}
	>
		{children}
	</div>
);
