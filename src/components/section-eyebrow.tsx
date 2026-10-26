import type { ReactNode } from "react";
import styles from "./section-eyebrow.module.css";

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** Маленький маркер секции: accent-точка слева + mono-подпись. */
export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <p
      className={
        className ? `${styles.eyebrow} ${className}` : styles.eyebrow
      }
    >
      {children}
    </p>
  );
}
