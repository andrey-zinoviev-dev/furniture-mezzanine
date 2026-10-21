"use client";

import { useId, useState } from "react";
import { homeFaq } from "@/lib/home-content";
import styles from "./home-faq.module.css";

/**
 * FAQ главной: золотая сетка 320px | 1fr + аккордеон, как у рисков.
 */
export function HomeFaq() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>(homeFaq[0]?.id ?? "");

  return (
    <section className={styles.section} aria-labelledby="home-faq">
      <div className={styles.layout}>
        <header className={styles.head}>
          <h2 id="home-faq" className={styles.title}>
            Вопросы
            <span className={styles.count} aria-hidden="true">
              ({String(homeFaq.length).padStart(2, "0")})
            </span>
          </h2>
          <p className={styles.lead}>До начала проекта</p>
        </header>

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
      </div>
    </section>
  );
}
