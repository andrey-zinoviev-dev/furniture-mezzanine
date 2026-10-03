"use client";

import { useId, useState } from "react";
import { values } from "@/lib/home-content";
import styles from "./values-accordion.module.css";

/**
 * Аккордеон ценностей.
 * Референс — тёмный typographic list; цвета местами: чёрный текст на белом.
 */
export function ValuesAccordion() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>(values[0].id);

  return (
    <ul className={styles.list}>
      {values.map((item, index) => {
        const panelId = `${baseId}-panel-${item.id}`;
        const buttonId = `${baseId}-btn-${item.id}`;
        const isOpen = openId === item.id;

        return (
          <li key={item.id} className={styles.item} data-open={isOpen || undefined}>
            <button
              type="button"
              id={buttonId}
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? "" : item.id)}
            >
              <span className={styles.main}>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.hint}>
                  {String(index + 1).padStart(2, "0")} / почему это важно
                </span>
              </span>
              <span className={styles.mark} aria-hidden="true">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={styles.panel}
              hidden={!isOpen}
            >
              <p className={styles.body}>{item.body}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
