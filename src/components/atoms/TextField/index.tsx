import classNames from "classnames";
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";

export interface TextFieldProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    "size"
  > {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
}

const TextField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(({ label, error, fullWidth, multiline, rows, className, ...props }, ref) => {
  const inputProps = {
    className: classNames(
      styles.input,
      {
        [styles.error]: error,
        [styles.fullWidth]: fullWidth,
        [styles.multiline]: multiline,
      },
      className
    ),
    placeholder: " ", // Required for the floating label effect
    ...props,
  };

  return (
    <div
      className={classNames(styles.wrapper, { [styles.fullWidth]: fullWidth })}
    >
      {multiline ? (
        <>
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={rows || 3}
            {...(inputProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
          {label && <label className={classNames(styles.label)}>{label}</label>}
        </>
      ) : (
        <>
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            {...(inputProps as InputHTMLAttributes<HTMLInputElement>)}
          />
          {label && <label className={classNames(styles.label)}>{label}</label>}
        </>
      )}
      {error && <span className={classNames(styles.errorText)}>{error}</span>}
    </div>
  );
});

TextField.displayName = "TextField";

export default TextField;
