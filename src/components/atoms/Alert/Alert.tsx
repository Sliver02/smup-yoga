import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Alert.module.scss";

export interface AlertProps {
	severity: "success" | "warning" | "error" | "info";
	variant?: "filled" | "outlined";
	onClose?: () => void;
	children: ReactNode;
	className?: string;
}

export const Alert = ({
	severity,
	variant = "outlined",
	onClose,
	children,
	className,
}: AlertProps) => (
	<div
		role="alert"
		aria-live="polite"
		data-severity={severity}
		className={classNames(styles.alert, styles[severity], styles[variant], className)}
	>
		<div className={styles.content}>{children}</div>
		{onClose && (
			<button
				type="button"
				className={styles.closeButton}
				onClick={onClose}
				aria-label="Close alert"
			>
				×
			</button>
		)}
	</div>
);
