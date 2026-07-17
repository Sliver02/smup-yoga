"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends ButtonPrimitive.Props {
	variant?: "contained" | "outlined" | "text";
	size?: "small" | "medium" | "large";
	fullWidth?: boolean;
	icon?: ReactNode;
	iconPosition?: "start" | "end";
}

export const Button = ({
	variant = "contained",
	size = "medium",
	fullWidth,
	icon,
	iconPosition = "start",
	className,
	children,
	...props
}: ButtonProps) => (
	<ButtonPrimitive
		className={classNames(
			styles.button,
			styles[variant],
			styles[size],
			{ [styles.fullWidth]: fullWidth },
			className
		)}
		{...props}
	>
		{icon && iconPosition === "start" && <span className={styles.icon}>{icon}</span>}
		{children}
		{icon && iconPosition === "end" && <span className={styles.icon}>{icon}</span>}
	</ButtonPrimitive>
);
