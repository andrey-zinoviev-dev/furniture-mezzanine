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
        <div className={styles.headMain}>
          <h2 id="process" className={styles.title}>
            Процесс
            <span className={styles.count} aria-hidden="true">
              ({String(total).padStart(2, "0")})
            </span>
          </h2>
          <p className={styles.lead}>
            Шесть понятных этапов: от первого разговора до обслуживания после
            сдачи. Без сюрпризов по смете и срокам — каждый шаг согласуем до
            следующего.
          </p>
        </div>
        <p className={styles.note}>
          Обычно путь от брифа до монтажа занимает от 6 до 12 недель — в
          зависимости от объёма и комплектации.
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
