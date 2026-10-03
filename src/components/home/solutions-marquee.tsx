"use client";

import Link from "next/link";
import { startTransition, useId, useState } from "react";
import { getRecentProjects } from "@/lib/projects";
import styles from "./solutions-marquee.module.css";

type SolutionsMarqueeProps = {
  limit?: number;
};

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

/** Активный проект крупно + сетка выбора снизу (клик меняет обложку). */
export function SolutionsMarquee({ limit = 8 }: SolutionsMarqueeProps) {
  const items = getRecentProjects(limit);
  const listId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] ?? items[0];

  if (!active) {
    return null;
  }

  const total = formatIndex(items.length - 1);
  const current = formatIndex(activeIndex);

  return (
    <div className={styles.shell} aria-label="Недавно реализовали">
      <div className={styles.stage}>
        <div className={styles.copy}>
          <p className={styles.summary}>{active.solution ?? active.summary}</p>
          <p className={styles.counter}>
            ({current} / {total})
          </p>
          <h3 className={styles.headline}>
            <Link href={`/projects/${active.slug}/`}>{active.title}</Link>
          </h3>
          <p className={styles.category}>{active.category}</p>
        </div>

        <div className={styles.coverBlock}>
          <Link
            href={`/projects/${active.slug}/`}
            className={styles.cover}
            style={{ backgroundColor: active.tone }}
            aria-label={`${active.title}: открыть проект`}
          >
            <span className={styles.grain} aria-hidden="true" />
          </Link>
          <div className={styles.coverMeta}>
            <span>/ {current}</span>
            <span>{active.title}</span>
          </div>
        </div>
      </div>

      <div
        className={styles.picker}
        role="listbox"
        id={listId}
        aria-label="Выбор проекта"
        aria-activedescendant={`${listId}-option-${active.slug}`}
        style={{ ["--picker-count" as string]: items.length }}
      >
        {items.map((project, index) => {
          const isActive = index === activeIndex;
          const label = formatIndex(index);

          return (
            <button
              key={project.slug}
              type="button"
              role="option"
              id={`${listId}-option-${project.slug}`}
              className={styles.thumb}
              aria-selected={isActive}
              onClick={() => {
                startTransition(() => {
                  setActiveIndex(index);
                });
              }}
            >
              <span className={styles.thumbIndex}>/ {label}</span>
              <span
                className={styles.thumbVisual}
                style={{ backgroundColor: project.tone }}
                data-active={isActive || undefined}
              >
                <span className={styles.grain} aria-hidden="true" />
              </span>
              <span className={styles.srOnly}>{project.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
