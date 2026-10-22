"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useEffectEvent, useState, type CSSProperties } from "react";
import { getFeaturedProjects } from "@/lib/projects";
import { siteRoutes } from "@/lib/routes";
import styles from "./featured-projects.module.css";

type FeaturedProjectsProps = {
  limit?: number;
};

const AUTOPLAY_MS = 3000;
const MOBILE_MQ = "(max-width: 1022px)";

function canAutoplay() {
  return (
    !window.matchMedia(MOBILE_MQ).matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    !document.hidden
  );
}

/** Избранные проекты: шапка в сетке, лента на всю ширину секции. */
export function FeaturedProjects({ limit = 8 }: FeaturedProjectsProps) {
  const items = getFeaturedProjects(limit);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;

  const tick = useEffectEvent(() => {
    setActiveIndex((index) => (index + 1) % total);
  });

  useEffect(() => {
    if (total < 2 || paused) return;

    const id = window.setInterval(() => {
      if (canAutoplay()) tick();
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [total, paused]);

  if (total === 0) return null;

  const go = (delta: -1 | 1) => {
    setActiveIndex((index) => (index + delta + total) % total);
  };

  const currentLabel = String(activeIndex + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  return (
    <div className={styles.works}>
      <header className={styles.head}>
        <h2 id="featured-projects" className={styles.title}>
          Проекты
          <span className={styles.count} aria-hidden="true">
            ({totalLabel})
          </span>
          <span className={styles.srOnly}> — {total}</span>
        </h2>
        <div className={styles.headAside}>
          <p className={styles.lead}>
            Избранные объекты — кухни, гардеробные и комплексная меблировка.
          </p>
          <div className={styles.headActions}>
            <Link href={siteRoutes.projects.href} className={styles.allLink}>
              Все проекты
            </Link>
            {total > 1 ? (
              <div className={styles.controls} role="group" aria-label="Навигация по проектам">
                <button
                  type="button"
                  className={styles.controlBtn}
                  aria-label="Предыдущий проект"
                  onClick={() => go(-1)}
                >
                  ←
                </button>
                <span className={styles.controlStatus} aria-live="polite">
                  {currentLabel}
                  <span className={styles.controlSep} aria-hidden="true">
                    /
                  </span>
                  {totalLabel}
                </span>
                <button
                  type="button"
                  className={styles.controlBtn}
                  aria-label="Следующий проект"
                  onClick={() => go(1)}
                >
                  →
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <div
        className={styles.scroller}
        tabIndex={0}
        aria-label="Избранные проекты"
        aria-roledescription="карусель"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setPaused(false);
          }
        }}
      >
        <ul
          className={styles.track}
          style={{ "--active-index": activeIndex } as CSSProperties}
        >
          {items.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <li
                key={project.slug}
                className={
                  isActive ? `${styles.card} ${styles.cardActive}` : styles.card
                }
                data-active={isActive ? "true" : undefined}
                aria-current={isActive ? "true" : undefined}
              >
                <Link
                  href={`/projects/${project.slug}/`}
                  className={styles.cardLink}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className={styles.cardMeta}>
                    <span className={styles.cardIndex}>
                      {String(index + 1).padStart(3, "0")}
                    </span>
                    <span className={styles.cardTitle}>{project.title}</span>
                    <span className={styles.cardPlace}>{project.category}</span>
                    {project.task ? (
                      <span className={styles.cardTask}>{project.task}</span>
                    ) : null}
                  </span>
                  <span className={styles.frame}>
                    <Image
                      src={project.cover}
                      alt=""
                      fill
                      sizes="(max-width: 1022px) 70vw, (min-width: 1023px) 40vw, 24vw"
                      className={styles.image}
                    />
                    <span className={styles.grain} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
