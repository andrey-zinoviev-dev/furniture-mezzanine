import Link from "next/link";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
import { productionIndex } from "@/lib/home-content";
import styles from "./production-index.module.css";

/**
 * Направления:
 * — шапка: заголовок + eyebrow вне сетки;
 * — ≥1280px: 360px | 0.25fr | 1fr; ниже: 360px | 1fr —
 *   подпись слева, строки-ссылки справа.
 */
export function ProductionIndex() {
  if (productionIndex.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="services">
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="services" className={styles.title}>
            С какой части интерьера начнём?
          </h2>
          <SectionEyebrow>Направления</SectionEyebrow>
        </div>
      </header>

      <div className={styles.layout}>
        <SectionLead className={styles.lead}>
          Кухни, системы хранения и мебель для жилых пространств. Конструкцию,
          размеры и конфигурацию определяем исходя из особенностей помещения и
          ваших требований.
        </SectionLead>

        <ul className={styles.list}>
          {productionIndex.map((service) => (
            <li key={service.href}>
              <Link href={service.href} className={styles.row}>
                <span className={styles.index} aria-hidden="true">
                  {String(service.index).padStart(2, "0")}
                </span>
                <span className={styles.name}>{service.title}</span>
                {service.subsections.length > 0 ? (
                  <span className={styles.subsections}>
                    {service.subsections.join(" · ")}
                  </span>
                ) : (
                  <span className={styles.subsections} />
                )}
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
