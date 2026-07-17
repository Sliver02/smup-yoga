"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import classNames from "classnames";
import { useState } from "react";
import styles from "./Select.module.scss";
import { ChevronDown } from "lucide-react";

export interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
	label?: string;
	options: SelectOption[];
	error?: string;
	fullWidth?: boolean;
	className?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Select = ({
	label,
	options,
	error,
	fullWidth,
	className,
	onValueChange,
	onOpenChange,
	onChange,
	value,
	defaultValue,
	...props
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [internalHasValue, setInternalHasValue] = useState(Boolean(defaultValue));

	const hasValue = value !== undefined ? Boolean(value) : internalHasValue;
	const floatLabel = isOpen || hasValue;

	return (
		<div className={classNames(styles.wrapper, { [styles.fullWidth]: fullWidth }, className)}>
			<SelectPrimitive.Root
				value={value}
				defaultValue={defaultValue}
				onValueChange={(newValue, event) => {
					setInternalHasValue(Boolean(newValue));
					onValueChange?.(newValue, event);
					onChange?.({
						target: { value: newValue, name: props.name ?? "" },
					} as React.ChangeEvent<HTMLInputElement>);
				}}
				onOpenChange={(open, event) => {
					setIsOpen(open);
					onOpenChange?.(open, event);
				}}
				{...props}
			>
				<SelectPrimitive.Trigger
					className={classNames(styles.trigger, { [styles.error]: error })}
				>
					<span className={styles.value}>
						<SelectPrimitive.Value />
					</span>
					<span aria-hidden className={styles.chevron}>
						<ChevronDown />
					</span>
				</SelectPrimitive.Trigger>
				<SelectPrimitive.Portal>
					<SelectPrimitive.Positioner
						className={styles.positioner}
						alignItemWithTrigger={false}
					>
						<SelectPrimitive.Popup className={styles.popup}>
							{options.map((opt) => (
								<SelectPrimitive.Item
									key={opt.value}
									value={opt.value}
									disabled={opt.disabled}
									className={styles.item}
								>
									<SelectPrimitive.ItemText>{opt.label}</SelectPrimitive.ItemText>
								</SelectPrimitive.Item>
							))}
						</SelectPrimitive.Popup>
					</SelectPrimitive.Positioner>
				</SelectPrimitive.Portal>
			</SelectPrimitive.Root>
			{label && (
				<label className={classNames(styles.label, { [styles.floated]: floatLabel })}>
					{label}
				</label>
			)}
			{error && <span className={styles.errorText}>{error}</span>}
		</div>
	);
};
