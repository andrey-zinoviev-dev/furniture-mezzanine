"use client";

import { useId, useState } from "react";
import type { ProductTask } from "@/lib/product-content";
import styles from "./product-accordion.module.css";

type ProductTasksProps = {
  tasks: ProductTask[];
};

/**
 * Заглушка: основные задачи направления (аккордеон на золотой сетке).
 */
export function ProductTasks({ tasks }: ProductTasksProps) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>(tasks[0]?.id ?? "");

  if (tasks.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="product-tasks">
      <div className={styles.layout}>
        <header className={styles.head}>
          <h2 id="product-tasks" className={styles.title}>
            Задачи
            <span className={styles.count} aria-hidden="true">
              ({String(tasks.length).padStart(2, "0")})
            </span>
          </h2>
          <p className={styles.lead}>
            Что обычно нужно решить в этом направлении — и как мы это закрываем
            до цеха.
          </p>
        </header>

        <ul className={styles.list}>
          {tasks.map((item, index) => {
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
                    <span className={styles.itemTitle}>{item.title}</span>
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
                  <p className={styles.panelLabel}>Как решаем</p>
                  <p className={styles.panelBody}>{item.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
