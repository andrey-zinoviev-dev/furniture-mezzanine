import Link from "next/link";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { aboutSection } from "@/lib/home-content";
import { siteRoutes } from "@/lib/routes";
import styles from "./about-section.module.css";

/**
 * «О нас»: шапка как у остальных секций;
 * подпись слева на ~½ контейнера (24px);
 * маленькие подписи + aside — в нижней части контейнера, без внешней сетки.
 */
export function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about">
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="about" className={styles.title}>
            {aboutSection.title}
          </h2>
          <SectionEyebrow>{aboutSection.eyebrow}</SectionEyebrow>
        </div>
      </header>

      <div className={styles.body}>
        {aboutSection.body.map((paragraph, pi) => (
          <p key={pi} className={styles.paragraph}>
            {paragraph.map((part, i) =>
              part.mark ? (
                <span key={i} className={styles.emphasis}>
                  {part.text}
                </span>
              ) : (
                <span key={i}>{part.text}</span>
              ),
            )}
          </p>
        ))}
      </div>

      <div className={styles.footer}>
        {aboutSection.points.map((point) => (
          <div key={point.title} className={styles.point}>
            <p className={styles.pointTitle}>{point.title}</p>
            <p className={styles.pointBody}>{point.body}</p>
          </div>
        ))}

        <div className={styles.aside}>
          <p className={styles.asideLead}>{aboutSection.aside.lead}</p>
          <p className={styles.asideInvite}>
            {aboutSection.aside.invite}{" "}
            <Link href={siteRoutes.about.href} className={styles.asideLink}>
              {aboutSection.aside.linkLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
