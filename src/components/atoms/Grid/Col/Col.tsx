import classNames from "classnames";
import { ColProps } from "../interfaces";
import styles from "./Col.module.scss";

export const Col = ({ className, children, id, style, ...colProps }: ColProps) => {
	const customization = (Object.keys(colProps) as Array<keyof typeof colProps>).map((key) => {
		const value = colProps[key];
		if (value === undefined || value === null) return;
		return styles[`${key}-${value}`];
	});

	return (
		<div id={id} style={style} className={classNames(styles.col, customization, className)}>
			{children}
		</div>
	);
};
