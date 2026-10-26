import Link from "next/link";
import { siteRoutes } from "@/lib/routes";
import styles from "./final-cta.module.css";

/**
 * Финальный CTA: секция с контентом внутри.
 * Фон как у футера, отделена тонкой линией.
 */
export function FinalCta() {
  return (
    <section className={styles.section} aria-labelledby="final-cta">
      <h2 id="final-cta" className={styles.title}>
        Есть идея или готовый дизайн-проект?
      </h2>
      <p className={styles.lead}>
        Пришлите планировку, рендеры, референсы или опишите задумку. Этого
        достаточно, чтобы начать предметное обсуждение будущей мебели.
      </p>
      <Link href={siteRoutes.contacts.href} className={styles.cta}>
        Связаться
        <span className={styles.ctaArrow} aria-hidden="true">
          ↗
        </span>
      </Link>
    </section>
  );
}
