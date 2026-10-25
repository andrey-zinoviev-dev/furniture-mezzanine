import type { CSSProperties } from "react";
import { workSteps } from "@/lib/home-content";
import styles from "./work-process.module.css";

/**
 * Процесс: горизонтальный таймлайн на всю ширину.
 * Номер → акцентная черта → название → checkpoint снизу.
 */
export function WorkProcess() {
  const total = workSteps.length;

  return (
    <section className={styles.section} aria-labelledby="process">
      <header className={styles.head}>
        <h2 id="process" className={styles.title}>
          Мебель на заказ — проще, чем кажется
        </h2>
        <p className={styles.lead}>
          От первого обсуждения до обслуживания после установки — шесть
          последовательных этапов. Вы участвуете в ключевых решениях, а
          организацию и контроль работ мы берём на себя.
        </p>
      </header>

      <ol
        className={styles.timeline}
        style={{ "--cols": total } as CSSProperties}
      >
        {workSteps.map((step, index) => (
          <li
            key={step.n}
            className={styles.step}
            style={{ "--i": index } as CSSProperties}
          >
            <span className={styles.num}>{step.n}</span>
            <div className={styles.stepBody}>
              <span className={styles.bar} aria-hidden="true" />
              <span className={styles.stepTitle}>{step.title}</span>
            </div>
            <span className={styles.stepMeta}>({step.checkpoint})</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
