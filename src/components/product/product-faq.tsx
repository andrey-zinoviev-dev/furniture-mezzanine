"use client";

import { useId, useState } from "react";
import type { ProductFaq } from "@/lib/product-content";
import styles from "./product-accordion.module.css";

type ProductFaqSectionProps = {
  items: ProductFaq[];
};

/**
 * Заглушка FAQ направления (аккордеон на золотой сетке).
 */
export function ProductFaqSection({ items }: ProductFaqSectionProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>(items[0]?.id ?? "");

  if (items.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="product-faq">
      <div className={styles.layout}>
        <header className={styles.head}>
          <h2 id="product-faq" className={styles.title}>
            Вопросы
            <span className={styles.count} aria-hidden="true">
              ({String(items.length).padStart(2, "0")})
            </span>
          </h2>
          <p className={styles.lead}>
            Короткие ответы до заявки — сроки, замер, материалы и оплата.
          </p>
        </header>

        <ul className={styles.list}>
          {items.map((item, index) => {
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
