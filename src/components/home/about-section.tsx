import Link from "next/link";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
import { aboutSection } from "@/lib/home-content";
import { siteRoutes } from "@/lib/routes";
import styles from "./about-section.module.css";

/**
 * «О нас»: шапка отдельно;
 * подпись, под ней lead + ссылка.
 */
export function AboutSection() {
  return (
    <section className={styles.section} aria-labelledby="about">
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="about" className={styles.title}>
            {/* {aboutSection.title} */}
            Проектная компания с собственным производством
          </h2>
          <SectionEyebrow>{aboutSection.eyebrow}</SectionEyebrow>
        </div>
      </header>

      <div className={styles.main}>
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

        {/* <div className={styles.points}>
          {aboutSection.points.map((point, index) => (
            <div key={point.title} className={styles.point}>
              <div className={styles.pointHead}>
                <span className={styles.pointIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.pointRule} aria-hidden="true" />
              </div>
              <p className={styles.pointTitle}>{point.title}</p>
              <p className={styles.pointBody}>{point.body}</p>
            </div>
          ))}
        </div> */}

        <div className={styles.aside}>
          <SectionLead className={styles.lead}>
            {aboutSection.aside.lead}
          </SectionLead>
          {/* <SectionLead className={styles.lead}>
            {aboutSection.aside.invite}
          </SectionLead> */}
          <Link href={siteRoutes.about.href} className={styles.asideLink}>
            {aboutSection.aside.linkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
