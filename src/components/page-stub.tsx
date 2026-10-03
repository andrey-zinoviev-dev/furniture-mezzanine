import type { ReactNode } from "react";
import type { SiteRoute } from "@/lib/routes";
import styles from "./page-stub.module.css";

type PageStubProps = {
  route: SiteRoute;
  children?: ReactNode;
};

/**
 * Временная оболочка страницы: заголовок, тип раздела, SEO-описание.
 * Контент и дизайн будут наращиваться поверх этой структуры.
 */
export function PageStub({ route, children }: PageStubProps) {
  return (
    <div className={styles.page}>
      <p className={styles.kind}>{route.kindLabel}</p>
      <h1 className={styles.title}>{route.title}</h1>
      <p className={styles.description}>{route.description}</p>
      {children ? <div className={styles.body}>{children}</div> : null}
    </div>
  );
}
