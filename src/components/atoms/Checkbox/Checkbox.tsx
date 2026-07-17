"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
	label?: ReactNode;
	className?: string;
}

export const Checkbox = ({ label, className, ...props }: CheckboxProps) => (
	<label className={classNames(styles.wrapper, className)}>
		<CheckboxPrimitive.Root className={styles.root} {...props}>
			<CheckboxPrimitive.Indicator className={styles.indicator}>
				<svg viewBox="0 0 16 16" fill="none" aria-hidden className={styles.checkIcon}>
					<path
						d="M3 8l4 4 6-6"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
		{label && <span className={styles.label}>{label}</span>}
	</label>
);
