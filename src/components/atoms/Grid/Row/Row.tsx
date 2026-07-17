import classNames from "classnames";
import { RowProps } from "../interfaces";
import styles from "./Row.module.scss";

export const Row = ({
	className,
	children,
	id,
	style,
	gap,
	nowrap,
	fitContent,
	...alignProps
}: RowProps) => {
	const customization = (Object.keys(alignProps) as Array<keyof typeof alignProps>).map((key) => {
		const value = alignProps[key];
		if (value === undefined || value === null || value === false) return;
		if (typeof value === "boolean") return styles[key];
		return styles[`${key}-${value}`];
	});

	return (
		<div
			id={id}
			style={{ ...(gap ? { gap } : {}), ...style }}
			className={classNames(
				styles.row,
				{ [styles.nowrap]: nowrap, [styles.fitContent]: fitContent },
				customization,
				className
			)}
		>
			{children}
		</div>
	);
};
