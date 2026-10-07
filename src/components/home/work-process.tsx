import { workSteps } from "@/lib/home-content";
import styles from "./work-process.module.css";

/** Процесс работы: staggered-сетка с крупной нумерацией. */
export function WorkProcess() {
  return (
    <section className={styles.section} aria-labelledby="process">
      <div className={styles.head}>
        <h2 id="process" className={styles.title}>
          Персональная мебель — это легко
        </h2>
        <p className={styles.lead}>
          Пять понятных этапов: от первого разговора до монтажа. Без сюрпризов
          по смете и срокам — каждый шаг согласуем до следующего.
        </p>
      </div>

      <ol className={styles.grid}>
        {workSteps.map((step) => (
          <li key={step.n} className={styles.item} data-step={step.n}>
            <span className={styles.label}>Этап</span>
            <span className={styles.num} aria-hidden="true">
              {step.n}
            </span>
            <span className={styles.rule} aria-hidden="true" />
            <span className={styles.itemTitle}>{step.title}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
