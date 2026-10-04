import { risksSolutions } from "@/lib/home-content";
import styles from "./risks-solutions.module.css";

/** Риски клиента и как мы их закрываем — карточки mid-page. */
export function RisksSolutions() {
  return (
    <section className={styles.band} aria-labelledby="risks">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <p className={styles.eyebrow}>[ Риски ]</p>
            <h2 id="risks" className={styles.title}>
              Риски и решения
            </h2>
          </div>
          <p className={styles.note}>
            Типичные опасения до заказа мебели — и что мы делаем, чтобы они не
            стали проблемой на объекте.
          </p>
        </div>

        <ul className={styles.grid}>
          {risksSolutions.map((item, index) => (
            <li key={item.id} className={styles.card} data-tone={index + 1}>
              <span className={styles.backdrop} aria-hidden="true" />
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.mark} aria-hidden="true">
                    {item.mark}
                  </span>
                  <span className={styles.index}>
                    /{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={styles.risk}>{item.risk}</h3>
                <p className={styles.solution}>{item.solution}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
