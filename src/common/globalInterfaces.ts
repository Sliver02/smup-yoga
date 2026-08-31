import { ReactNode } from "react";

export interface BaseProps {
	id?: string;
	children?: ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export interface LinkProps {
	id?: string;
	href: string;
	title?: string;
	target?: string;
	label?: string;
	download?: boolean | string;
}

export interface AlertResponse {
	severity: "success" | "warning" | "error";
	text: string;
}

export enum Color {
	primary = "primary",
	neutral = "neutral",
	accent = "accent",
	secondary = "secondary",
	tertiary = "tertiary",
	warning = "warning",
	success = "success",
	error = "error",
}

export enum Status {
	default = "default",
	success = "success",
	warning = "warning",
	error = "error",
	loading = "loading",
}

export enum Size {
	xs = "xs",
	sm = "sm",
	md = "md",
	lg = "lg",
	xl = "xl",
	xxl = "xxl",
}

export enum Surface {
	raised = "raised",
	border = "border",
	flat = "flat",
}
