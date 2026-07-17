"use client";

import { Menu } from "@base-ui/react/menu";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";
import styles from "./Dropdown.module.scss";

export interface DropdownItem {
	label: string;
	/** Optional leading icon (e.g. a lucide-react glyph). */
	icon?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
}

export interface DropdownProps {
	/** Trigger content — text and/or icon. */
	label: ReactNode;
	items: DropdownItem[];
	/** Which side of the trigger the popup opens on. */
	side?: "top" | "bottom" | "left" | "right";
	className?: string;
}

export const Dropdown = ({ label, items, side = "bottom", className }: DropdownProps) => (
	<Menu.Root>
		<Menu.Trigger className={classNames(styles.trigger, className)}>
			{label}
			<ChevronDown className={styles.chevron} aria-hidden />
		</Menu.Trigger>
		<Menu.Portal>
			<Menu.Positioner className={styles.positioner} side={side} sideOffset={8}>
				<Menu.Popup className={styles.popup}>
					{items.map((item) => (
						<Menu.Item
							key={item.label}
							className={styles.item}
							disabled={item.disabled}
							onClick={item.onClick}
						>
							{item.icon && <span className={styles.itemIcon}>{item.icon}</span>}
							{item.label}
						</Menu.Item>
					))}
				</Menu.Popup>
			</Menu.Positioner>
		</Menu.Portal>
	</Menu.Root>
);
