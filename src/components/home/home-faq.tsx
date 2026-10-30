"use client";

import { useId, useState } from "react";
import { GoldenGrid, GoldenGridCell } from "@/components/golden-grid";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { homeFaq } from "@/lib/home-content";
import styles from "./home-faq.module.css";

/**
 * FAQ главной: шапка (заголовок + подпись) отдельно;
 * аккордеон справа в золотой сетке (колонки 6–12).
 */
export function HomeFaq() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>(homeFaq[0]?.id ?? "");

  return (
    <section className={styles.section} aria-labelledby="home-faq">
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="home-faq" className={styles.title}>
            Что важно знать
            <span className={styles.count} aria-hidden="true">
              ({String(homeFaq.length).padStart(2, "0")})
            </span>
          </h2>
          <SectionEyebrow>Вопросы</SectionEyebrow>
        </div>
      </header>

      <GoldenGrid>
        <GoldenGridCell start={6} span={7}>
          <ul className={styles.list}>
            {homeFaq.map((item, index) => {
              const panelId = `${baseId}-panel-${item.id}`;
              const buttonId = `${baseId}-btn-${item.id}`;
              const isOpen = openId === item.id;

              return (
                <li
                  key={item.id}
                  className={styles.item}
                  data-open={isOpen || undefined}
                >
                  <button
                    type="button"
                    id={buttonId}
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? "" : item.id)}
                  >
                    <span className={styles.triggerMain}>
                      <span className={styles.itemIndex}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.itemTitle}>{item.question}</span>
                    </span>
                    <span className={styles.chevron} aria-hidden="true" />
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={styles.panel}
                    hidden={!isOpen}
                  >
                    <p className={styles.panelBody}>{item.answer}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </GoldenGridCell>
      </GoldenGrid>
    </section>
  );
}
