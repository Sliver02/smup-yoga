"use client";

import classNames from "classnames";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useEffect, useRef } from "react";
import styles from "./FadeIn.module.scss";

gsap.registerPlugin(ScrollTrigger);

export interface FadeInProps {
	children: ReactNode;
	className?: string;
	/** Vertical distance (px) the element travels while fading in. */
	y?: number;
	/** Animation duration in seconds. */
	duration?: number;
	/** Delay before the animation starts, in seconds — handy for staggering. */
	delay?: number;
	/** Replay every time the element re-enters the viewport. */
	repeat?: boolean;
	/** Wrapper element/tag to render. */
	as?: React.ElementType;
}

export const FadeIn = ({
	children,
	className,
	y = 24,
	duration = 0.8,
	delay = 0,
	repeat = false,
	as: Tag = "div",
}: FadeInProps) => {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		// Respect users who prefer reduced motion — reveal instantly.
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			gsap.set(el, { autoAlpha: 1 });
			return;
		}

		const ctx = gsap.context(() => {
			gsap.fromTo(
				el,
				{ autoAlpha: 0, y },
				{
					autoAlpha: 1,
					y: 0,
					duration,
					delay,
					ease: "power2.out",
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
						toggleActions: repeat ? "restart none none reset" : "play none none none",
					},
				}
			);
		}, el);

		return () => ctx.revert();
	}, [y, duration, delay, repeat]);

	return (
		<Tag ref={ref} className={classNames(styles.fadeIn, className)}>
			{children}
		</Tag>
	);
};
