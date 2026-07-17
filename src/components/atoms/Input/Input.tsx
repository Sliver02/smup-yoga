import { Field } from "@base-ui/react/field";
import classNames from "classnames";
import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

export interface InputProps extends Omit<
	InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
	"size"
> {
	label?: string;
	error?: string;
	fullWidth?: boolean;
	multiline?: boolean;
	rows?: number;
}

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
	({ label, error, fullWidth, multiline, rows, className, ...props }, ref) => {
		return (
			<Field.Root className={classNames(styles.wrapper, { [styles.fullWidth]: fullWidth })}>
				<Field.Control
					ref={ref as React.Ref<HTMLInputElement>}
					render={multiline ? <textarea rows={rows ?? 4} /> : <input />}
					placeholder=" "
					className={classNames(
						styles.control,
						{ [styles.error]: error, [styles.multiline]: multiline },
						className
					)}
					{...(props as InputHTMLAttributes<HTMLInputElement>)}
				/>
				{label && <Field.Label className={styles.label}>{label}</Field.Label>}
				{error && (
					<Field.Error match={true} className={styles.errorText}>
						{error}
					</Field.Error>
				)}
			</Field.Root>
		);
	}
);

Input.displayName = "Input";
