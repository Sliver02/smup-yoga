import { useEffect, useRef, useState } from "react";

interface ScrollState {
	scrollY: number;
	scrollX: number;
	direction: "up" | "down" | null;
}

export const useScroll = (): ScrollState => {
	const [scroll, setScroll] = useState<ScrollState>({
		scrollY: 0,
		scrollX: 0,
		direction: null,
	});

	const prevScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			const currentX = window.scrollX;

			setScroll({
				scrollY: currentY,
				scrollX: currentX,
				direction: currentY > prevScrollY.current ? "down" : "up",
			});

			prevScrollY.current = currentY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return scroll;
};
