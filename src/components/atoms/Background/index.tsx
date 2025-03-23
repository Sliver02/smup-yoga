import classNames from "classnames";
import styles from "./styles.module.scss";
import { BaseProps } from "@/common/globalInterfaces";
import { CSSProperties } from "react";

export interface BackgroundProps extends BaseProps {
	backgroundColor?: string;
}

const Background = ({
	className,
	children,
	backgroundColor,
}: BackgroundProps) => {
	const cssVar = {
		["--background-color"]: backgroundColor,
	} as CSSProperties;

	return (
		<div
			className={classNames(
				className,
				styles.background,
				styles["sidebar-open"]
			)}
			style={cssVar}
		>
			{children}
		</div>
	);
};

export default Background;
