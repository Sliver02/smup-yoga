import { BaseProps } from "@/common/globalInterfaces";

export type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Offsets = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

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

export interface ContainerProps extends BaseProps {
	fullWidth?: boolean;
	fullHeight?: boolean;
	customWidth?: string;
}

export interface RowProps extends BaseProps {
	gap?: string;
	nowrap?: boolean;
	fitContent?: boolean;
	// align-items per breakpoint
	xsAlign?: Align;
	smAlign?: Align;
	mdAlign?: Align;
	lgAlign?: Align;
	xlAlign?: Align;
	xxlAlign?: Align;
	// justify-content per breakpoint
	xsJustify?: Justify;
	smJustify?: Justify;
	mdJustify?: Justify;
	lgJustify?: Justify;
	xlJustify?: Justify;
	xxlJustify?: Justify;
	// reverse per breakpoint
	xsReverse?: boolean;
	smReverse?: boolean;
	mdReverse?: boolean;
	lgReverse?: boolean;
	xlReverse?: boolean;
	xxlReverse?: boolean;
}

export interface ColProps extends BaseProps {
	// column span per breakpoint
	xs?: Columns;
	sm?: Columns;
	md?: Columns;
	lg?: Columns;
	xl?: Columns;
	xxl?: Columns;
	// offset per breakpoint
	xsOffset?: Offsets;
	smOffset?: Offsets;
	mdOffset?: Offsets;
	lgOffset?: Offsets;
	xlOffset?: Offsets;
	xxlOffset?: Offsets;
	// order per breakpoint
	xsOrder?: number;
	smOrder?: number;
	mdOrder?: number;
	lgOrder?: number;
	xlOrder?: number;
	xxlOrder?: number;
	// align-self per breakpoint
	xsAlignSelf?: Align;
	smAlignSelf?: Align;
	mdAlignSelf?: Align;
	lgAlignSelf?: Align;
	xlAlignSelf?: Align;
	xxlAlignSelf?: Align;
}
