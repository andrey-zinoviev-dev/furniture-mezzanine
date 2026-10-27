import type { ReactNode } from "react";
import styles from "./section-lead.module.css";

type SectionLeadProps = {
  children: ReactNode;
  className?: string;
};

/** Типографика подписи секции: uppercase, muted-strong. */
export function SectionLead({ children, className }: SectionLeadProps) {
  return (
    <p className={className ? `${styles.lead} ${className}` : styles.lead}>
      {children}
    </p>
  );
}
