import type { ReactNode } from "react";
import styles from "./container.module.css";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Единая ширина контента для header / main / footer. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={className ? `${styles.container} ${className}` : styles.container}>
      {children}
    </div>
  );
}
