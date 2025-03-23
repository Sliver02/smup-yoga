import styles from "./styles.module.scss";
import { ColProps } from "../interfaces";
import classNames from "classnames";

const Col = ({ className, children, ...props }: ColProps) => {
	const customization = (Object.keys(props) as Array<keyof typeof props>).map(
		(key) => {
			if (props[key]) {
				return styles[`${key}-${props[key]}`];
			}
		}
	);

	return (
		<div className={classNames(styles.col, className, customization)}>
			{children}
		</div>
	);
};

export default Col;
