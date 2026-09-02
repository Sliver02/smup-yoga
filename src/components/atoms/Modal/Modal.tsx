"use client";

import { Dialog } from "@base-ui/react/dialog";
import classNames from "classnames";
import { X } from "lucide-react";
import { ComponentProps, ReactElement, ReactNode } from "react";
import styles from "./Modal.module.scss";

export interface ModalProps extends ComponentProps<typeof Dialog.Root> {
	/** Element that opens the modal — receives the trigger's a11y/click props via Base UI's render prop. */
	trigger: ReactElement;
	/** Accessible name for the popup (Base UI has no visible title element to derive it from here). */
	label: string;
	children: ReactNode;
	className?: string;
}

export const Modal = ({ trigger, label, children, className, ...props }: ModalProps) => (
	<Dialog.Root {...props}>
		<Dialog.Trigger render={trigger} />
		<Dialog.Portal>
			<Dialog.Backdrop className={styles.backdrop} />
			<Dialog.Popup aria-label={label} className={classNames(styles.popup, className)}>
				<Dialog.Close className={styles.close} aria-label="Close">
					<X size={20} />
				</Dialog.Close>
				{children}
			</Dialog.Popup>
		</Dialog.Portal>
	</Dialog.Root>
);
