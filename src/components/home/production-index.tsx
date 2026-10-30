import Link from "next/link";
import { GoldenGrid, GoldenGridCell } from "@/components/golden-grid";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
import { productionIndex } from "@/lib/home-content";
import styles from "./production-index.module.css";

/**
 * Направления: шапка вне сетки;
 * lead слева (1–4), список справа (6–12).
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

      <GoldenGrid>
        <GoldenGridCell start={1} span={4}>
          <SectionLead className={styles.lead}>
            Кухни, системы хранения и мебель для жилых пространств. Конструкцию,
            размеры и конфигурацию определяем исходя из особенностей помещения и
            ваших требований.
          </SectionLead>
        </GoldenGridCell>

        <GoldenGridCell start={6} span={7}>
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
        </GoldenGridCell>
      </GoldenGrid>
    </section>
  );
}
