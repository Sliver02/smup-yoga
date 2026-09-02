"use client";

import { BaseProps } from "@/common/globalInterfaces";
import classNames from "classnames";
import styles from "./CardFrame.module.scss";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/** A point that never loops back on itself — a plain quadratic curve through
 * a single control point, unlike a multi-point spline (e.g. MotionPathPlugin's
 * array mode), which can overshoot past its endpoints into a circle. */
const quadraticPoint = (
	t: number,
	p0: { x: number; y: number },
	p1: { x: number; y: number },
	p2: { x: number; y: number }
) => {
	const mt = 1 - t;
	return {
		x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
		y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y,
	};
};

export interface CardFrameProps extends BaseProps {
	/** Import the image so Next generates its blur placeholder. */
	image: StaticImageData;
	alt?: string;
}

export const CardFrame = ({ className, image, alt }: CardFrameProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const topIconRef = useRef<HTMLImageElement>(null);
	const bottomIconRef = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const container = containerRef.current;
		const topIcon = topIconRef.current;
		const bottomIcon = bottomIconRef.current;
		if (!container || !topIcon || !bottomIcon) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const ctx = gsap.context(() => {
			// Pink: starts level with the frame's vertical middle, out past its
			// left border; the control point pulls the curve further out still,
			// so it arcs up and leans back in to its resting spot at the
			// top-left corner. Black is the exact mirror image, arcing down
			// into the bottom-right corner.
			const pinkStart = { x: -25, y: 170 };
			const pinkControl = { x: -90, y: 80 };
			const pinkEnd = { x: 0, y: 0 };

			gsap.set([topIcon, bottomIcon], { rotation: 0 });

			// Runs across the photo's entire transit through the viewport — from
			// the moment it first appears at the bottom to the moment it fully
			// exits the top — so there's ample scroll distance to actually see
			// both stars travel, not just a flash near the top of the page.
			ScrollTrigger.create({
				trigger: container,
				start: "top bottom",
				end: "bottom top",
				scrub: 0.8,
				invalidateOnRefresh: true,
				onUpdate: (self) => {
					const t = self.progress;
					const { x, y } = quadraticPoint(t, pinkStart, pinkControl, pinkEnd);
					const pinkRotation = gsap.utils.interpolate(-40, 0, t);
					gsap.set(topIcon, { x, y, rotation: pinkRotation });
					gsap.set(bottomIcon, { x: -x, y: -y, rotation: -pinkRotation });
				},
			});
		}, container);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={containerRef} className={classNames(className, styles.cardFrame)}>
			<div className={classNames(styles.imageContainer)}>
				<Image
					className={classNames(styles.backgroundImage)}
					alt={alt ?? ""}
					src={image}
					placeholder="blur"
					fill
				/>

				<div className={classNames(styles.frame)}>
					<Image
						ref={topIconRef}
						className={classNames(styles.icon, styles.icon_top)}
						width={60}
						height={60}
						src="/icons/star_01_pink.svg"
						alt=""
					/>
					<Image
						ref={bottomIconRef}
						className={classNames(styles.icon, styles.icon_bottom)}
						width={60}
						height={60}
						src="/icons/star_02_black.svg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
