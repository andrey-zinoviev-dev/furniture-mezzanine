import Link from "next/link";
import { GoldenGrid, GoldenGridCell } from "@/components/golden-grid";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
import { aboutSection } from "@/lib/home-content";
import { siteRoutes } from "@/lib/routes";
import styles from "./about-section.module.css";

/**
 * «О нас»: шапка вне сетки;
 * lead слева сверху; подпись + CTA справа (колонки 6–12).
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

      <GoldenGrid>
        <GoldenGridCell start={1} span={4}>
          <SectionLead className={styles.lead}>
            {aboutSection.aside.lead}
          </SectionLead>
        </GoldenGridCell>

        <GoldenGridCell start={6} span={7} className={styles.right}>
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

          <Link href={siteRoutes.about.href} className={styles.asideLink}>
            {aboutSection.aside.linkLabel}
          </Link>
        </GoldenGridCell>
      </GoldenGrid>
    </section>
  );
}
