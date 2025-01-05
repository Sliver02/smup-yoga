import { BaseProps } from "@/common/globalInterfaces";

export enum Align {
	start = "flex-start",
	center = "center",
	end = "flex-end",
	stretch = "stretch",
	baseline = "baseline",
}

export enum Justify {
	start = "flex-start",
	center = "center",
	end = "flex-end",
	around = "space-around",
	between = "space-between",
	evenly = "space-evenly",
}

export type breakpointsNames = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Offsets = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

interface AlignProps {
	xsAlign?: Align;
	smAlign?: Align;
	mdAlign?: Align;
	lgAlign?: Align;
	xlAlign?: Align;
	xxlAlign?: Align;
}

interface AlignSelfProps {
	xsAlignSelf?: Align;
	smAlignSelf?: Align;
	mdAlignSelf?: Align;
	lgAlignSelf?: Align;
	xlAlignSelf?: Align;
	xxlAlignSelf?: Align;
}

interface JustifyProps {
	xsJustify?: Justify;
	smJustify?: Justify;
	mdJustify?: Justify;
	lgJustify?: Justify;
	xlJustify?: Justify;
	xxlJustify?: Justify;
}

interface ReverseProps {
	xsReverse?: boolean;
	smReverse?: boolean;
	mdReverse?: boolean;
	lgReverse?: boolean;
	xlReverse?: boolean;
	xxlReverse?: boolean;
}

export interface ContainerProps extends BaseProps {
	fullWidth?: boolean;
	fullHeight?: boolean;
	customWidth?: string;
}

export interface RowProps extends BaseProps, AlignProps, JustifyProps, ReverseProps {
	gap?: string;
	nowrap?: boolean;
	fitContent?: boolean;
}

export interface ColProps extends BaseProps, AlignSelfProps {
	xs?: Columns;
	sm?: Columns;
	md?: Columns;
	lg?: Columns;
	xl?: Columns;
	xxl?: Columns;
	xsOffset?: Offsets;
	smOffset?: Offsets;
	mdOffset?: Offsets;
	lgOffset?: Offsets;
	xlOffset?: Offsets;
	xxlOffset?: Offsets;
	xsOrder?: number;
	smOrder?: number;
	mdOrder?: number;
	lgOrder?: number;
	xlOrder?: number;
	xxlOrder?: number;
}
