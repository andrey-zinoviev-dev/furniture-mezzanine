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
        Обсудим проект
      </h2>
      <p className={styles.lead}>
        Проектируем и производим мебель под ваш интерьер — от кухни до
        комплексной меблировки
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
