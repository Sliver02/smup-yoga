"use client";

import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import classNames from "classnames";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Autocomplete.module.scss";

export interface AutocompleteOption {
	value: string;
	label: string;
	disabled?: boolean;
}

export interface AutocompleteProps {
	label?: string;
	options: AutocompleteOption[];
	error?: string;
	fullWidth?: boolean;
	className?: string;
	placeholder?: string;
	value?: string;
	defaultValue?: string;
	onValueChange?: (
		value: string,
		eventDetails: AutocompletePrimitive.Root.ChangeEventDetails
	) => void;
	onOpenChange?: (
		open: boolean,
		eventDetails: AutocompletePrimitive.Root.ChangeEventDetails
	) => void;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	disabled?: boolean;
	name?: string;
}

function FilteredList() {
	const filteredItems = AutocompletePrimitive.useFilteredItems<AutocompleteOption>();
	return (
		<AutocompletePrimitive.List>
			{filteredItems.map((opt) => (
				<AutocompletePrimitive.Item
					key={opt.value}
					value={opt}
					disabled={opt.disabled}
					className={styles.item}
				>
					{opt.label}
				</AutocompletePrimitive.Item>
			))}
			{filteredItems.length === 0 && (
				<AutocompletePrimitive.Empty className={styles.empty}>
					No results
				</AutocompletePrimitive.Empty>
			)}
		</AutocompletePrimitive.List>
	);
}

export const Autocomplete = ({
	label,
	options,
	error,
	fullWidth,
	className,
	placeholder,
	value,
	defaultValue,
	onValueChange,
	onOpenChange,
	onChange,
	disabled,
	name,
}: AutocompleteProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isFocused, setIsFocused] = useState(false);
	const [internalHasValue, setInternalHasValue] = useState(Boolean(defaultValue));

	const hasValue = value !== undefined ? Boolean(value) : internalHasValue;
	const floatLabel = isOpen || hasValue || isFocused;

	return (
		<div className={classNames(styles.wrapper, { [styles.fullWidth]: fullWidth }, className)}>
			<AutocompletePrimitive.Root
				items={options}
				value={value}
				defaultValue={defaultValue}
				disabled={disabled}
				name={name}
				onValueChange={(newValue, event) => {
					setInternalHasValue(Boolean(newValue));
					onValueChange?.(newValue, event);
					onChange?.({
						target: { value: newValue, name: name ?? "" },
					} as React.ChangeEvent<HTMLInputElement>);
				}}
				onOpenChange={(open, event) => {
					setIsOpen(open);
					onOpenChange?.(open, event);
				}}
			>
				<AutocompletePrimitive.InputGroup
					className={classNames(styles.inputGroup, { [styles.error]: error })}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				>
					<AutocompletePrimitive.Input
						className={styles.input}
						placeholder={placeholder ?? " "}
					/>
					<AutocompletePrimitive.Trigger
						className={styles.chevronButton}
						aria-label="Toggle options"
					>
						<ChevronDown className={styles.chevronIcon} />
					</AutocompletePrimitive.Trigger>
				</AutocompletePrimitive.InputGroup>
				<AutocompletePrimitive.Portal>
					<AutocompletePrimitive.Positioner className={styles.positioner}>
						<AutocompletePrimitive.Popup className={styles.popup}>
							<FilteredList />
						</AutocompletePrimitive.Popup>
					</AutocompletePrimitive.Positioner>
				</AutocompletePrimitive.Portal>
			</AutocompletePrimitive.Root>
			{label && (
				<label className={classNames(styles.label, { [styles.floated]: floatLabel })}>
					{label}
				</label>
			)}
			{error && <span className={styles.errorText}>{error}</span>}
		</div>
	);
};
