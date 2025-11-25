import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

export interface AlertProps {
  severity: "success" | "warning" | "error" | "info";
  variant?: "filled" | "outlined";
  onClose?: () => void;
  children: ReactNode;
  className?: string;
}

const Alert = ({
  severity,
  variant = "outlined",
  onClose,
  children,
  className,
}: AlertProps) => {
  return (
    <div
      className={classNames(
        styles.alert,
        styles[severity],
        styles[variant],
        className
      )}
      role="alert"
    >
      <div className={styles.content}>{children}</div>
      {onClose && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close alert"
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
