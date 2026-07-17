"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import { ReactNode } from "react";

export interface SmoothScrollProps {
	children: ReactNode;
	/** Override Lenis defaults (lerp, duration, orientation, …). */
	options?: LenisOptions;
}

const defaultOptions: LenisOptions = {
	lerp: 0.1,
	smoothWheel: true,
};

/**
 * Wraps the app in a root Lenis instance for smooth scrolling.
 * Consume it anywhere below with `useLenis()` — e.g. to `scrollTo` a section.
 */
export const SmoothScroll = ({ children, options }: SmoothScrollProps) => (
	<ReactLenis root options={{ ...defaultOptions, ...options }}>
		{children}
	</ReactLenis>
);
