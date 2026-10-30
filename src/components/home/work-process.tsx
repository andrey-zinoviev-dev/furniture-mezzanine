import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
import { workSteps } from "@/lib/home-content";
import styles from "./work-process.module.css";

/**
 * Процесс: ряд карточек-шагов.
 * Номер + линия → название → checkpoint.
 */
export function WorkProcess() {
  return (
    <section className={styles.section} aria-labelledby="process">
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="process" className={styles.title}>
            Мебель на заказ — проще, чем кажется
          </h2>
          <SectionEyebrow>Процесс</SectionEyebrow>
        </div>
        {/* <SectionLead>
          От первого обсуждения до обслуживания после установки — шесть
          последовательных этапов. Вы участвуете в ключевых решениях, а
          организацию и контроль работ мы берём на себя.
        </SectionLead> */}
        <SectionLead>
          От первого знакомства с проектом до обслуживания после установки —
          пять последовательных этапов. Вы участвуете в ключевых решениях, а
          организацию и контроль работ мы берём на себя.
        </SectionLead>
      </header>

      <ol className={styles.points}>
        {workSteps.map((step) => (
          <li key={step.n} className={styles.point}>
            <div className={styles.pointHead}>
              <span className={styles.pointIndex}>{step.n}</span>
              <span className={styles.pointRule} aria-hidden="true" />
            </div>
            <p className={styles.pointTitle}>{step.title}</p>
            <p className={styles.pointBody}>{step.checkpoint}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
