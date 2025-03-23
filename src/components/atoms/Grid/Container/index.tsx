import styles from "./styles.module.scss";
import { ContainerProps } from "../interfaces";
import classNames from "classnames";

const Container = ({
	className,
	children,
	fullHeight,
	customWidth,
}: ContainerProps) => {
	return (
		<div
			className={classNames(styles.container, className, {
				[styles.fullHeight]: fullHeight,
			})}
			style={{
				maxWidth: customWidth,
			}}
		>
			{children}
		</div>
	);
};

export default Container;
