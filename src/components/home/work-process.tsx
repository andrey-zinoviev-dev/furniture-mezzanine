import type { CSSProperties } from "react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
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
        <div className={headStyles.top}>
          <h2 id="process" className={styles.title}>
            Мебель на заказ — проще, чем кажется
          </h2>
          <SectionEyebrow>Процесс</SectionEyebrow>
        </div>
        <SectionLead>
          От первого обсуждения до обслуживания после установки — шесть
          последовательных этапов. Вы участвуете в ключевых решениях, а
          организацию и контроль работ мы берём на себя.
        </SectionLead>
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
