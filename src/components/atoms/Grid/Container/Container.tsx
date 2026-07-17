import classNames from "classnames";
import { ContainerProps } from "../interfaces";
import styles from "./Container.module.scss";

export const Container = ({
	className,
	children,
	fullHeight,
	customWidth,
	id,
	style,
}: ContainerProps) => (
	<div
		id={id}
		style={{ maxWidth: customWidth, ...style }}
		className={classNames(styles.container, { [styles.fullHeight]: fullHeight }, className)}
	>
		{children}
	</div>
);
