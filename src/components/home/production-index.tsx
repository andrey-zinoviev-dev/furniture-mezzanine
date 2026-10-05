import Link from "next/link";
import { productionIndex } from "@/lib/home-content";
import styles from "./production-index.module.css";

/**
 * Индекс услуг: слева заголовок и подпись, справа вертикальный список.
 * Референс — editorial contents / золотая сетка.
 */
export function ProductionIndex() {
  return (
    <section className={styles.section} aria-labelledby="produce">
      <div className={styles.rail}>
        <h2 id="produce" className={styles.title}>
          Что производим
        </h2>
        <p className={styles.caption}>
          Конкретная задача — кухня, шкаф, гардеробная или весь объект
        </p>
      </div>

      <div className={styles.main}>
        <div className={styles.listHead}>
          <p className={styles.listLabel}>Категории</p>
          <span className={styles.listArrow} aria-hidden="true">
            →
          </span>
        </div>

        <ul className={styles.list}>
          {productionIndex.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={styles.row}>
                <span className={styles.name}>{item.title}</span>
                <span className={styles.num}>
                  {String(item.index).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
