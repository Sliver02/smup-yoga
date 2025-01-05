import { ReactNode } from "react";

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

export interface LinkProps {
  id?: string;
  href: string;
  title?: string;
  target?: string;
  label?: string;
  download?: boolean | string;
}

export interface BaseProps {
  id?: string;
  children?: ReactNode;
  className?: string;
}

export enum Surface {
  "raised" = "raised",
  "border" = "border",
  "flat" = "flat",
}
