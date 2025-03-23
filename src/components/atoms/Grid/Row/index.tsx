import styles from "./styles.module.scss";
import { RowProps } from "../interfaces";
import classNames from "classnames";

const Row = ({ className, children, ...props }: RowProps) => {
	const customization = (Object.keys(props) as Array<keyof typeof props>).map(
		(key) => {
			if (props[key]) {
				return styles[`${key}-${props[key]}`];
			}
		}
	);

	return (
		<div className={classNames(styles.row, className, customization)}>
			{children}
		</div>
	);
};

export default Row;
