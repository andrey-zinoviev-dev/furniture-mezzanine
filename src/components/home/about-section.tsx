import { aboutSection } from "@/lib/home-content";
import styles from "./about-section.module.css";

/**
 * «О нас»: крупный серый абзац (как у Mugen) на светлом фоне;
 * ключевые фразы — белым на чёрной плашке.
 */
export function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about">
      <p className={styles.index} aria-hidden="true">
        {aboutSection.index} / О компании
      </p>
      <h2 id="about" className={styles.title}>
        {aboutSection.title}
      </h2>
      <p className={styles.body}>
        {aboutSection.body.map((part, i) =>
          part.mark ? (
            <mark key={i} className={styles.mark}>
              {part.text}
            </mark>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
      </p>
    </section>
  );
}
