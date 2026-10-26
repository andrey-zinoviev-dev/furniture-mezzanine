"use client";

import { useId, useState } from "react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { risksSolutions } from "@/lib/home-content";
import styles from "./risks-solutions.module.css";

/**
 * Риски: шапка (заголовок + подпись) отдельно;
 * аккордеон — в золотой сетке 320px | 1fr.
 * Тоггл — шеврон, без круга с плюсом.
 */
export function RisksSolutions() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string>(risksSolutions[0]?.id ?? "");

  return (
    <section className={styles.section} aria-labelledby="risks">
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="risks" className={styles.title}>
            Что может повлиять на результат — кроме дизайна?
          </h2>
          <SectionEyebrow>Риски</SectionEyebrow>
        </div>
        <p className={styles.lead}>
          Мы заранее учли основные риски индивидуального изготовления и
          предусмотрели конкретные решения для каждого из них. Ниже — как это
          работает на практике.
        </p>
      </header>

      <div className={styles.layout}>
        <ul className={styles.list}>
          {risksSolutions.map((item, index) => {
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
                    <span className={styles.itemTitle}>{item.risk}</span>
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
                  <p className={styles.panelLabel}>Решение</p>
                  <p className={styles.panelBody}>{item.solution}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
