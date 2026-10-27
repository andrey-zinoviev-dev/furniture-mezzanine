"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type CSSProperties,
  type TransitionEvent,
} from "react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
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

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function wrapTrackIndex(index: number, clones: number, total: number) {
  let next = index;
  while (next >= clones + total) next -= total;
  while (next < clones) next += total;
  return next;
}

/** Избранные проекты: шапка (заголовок + подпись), лента на всю ширину. */
export function FeaturedProjects({ limit = 8 }: FeaturedProjectsProps) {
  const items = getFeaturedProjects(limit);
  const total = items.length;
  const loop = total >= 2;
  /** Клонов с каждого края (не больше total). */
  const clones = loop ? Math.min(3, total) : 0;

  const [trackIndex, setTrackIndex] = useState(clones);
  const [paused, setPaused] = useState(false);
  const [instant, setInstant] = useState(false);
  const settleRaf = useRef(0);

  const logicalIndex = loop
    ? ((trackIndex - clones) % total + total) % total
    : trackIndex;

  const settleInstant = useEffectEvent(() => {
    window.cancelAnimationFrame(settleRaf.current);
    settleRaf.current = window.requestAnimationFrame(() => {
      settleRaf.current = window.requestAnimationFrame(() => {
        setInstant(false);
      });
    });
  });

  const jumpTo = useEffectEvent((next: number) => {
    setInstant(true);
    setTrackIndex(next);
    settleInstant();
  });

  const tick = useEffectEvent(() => {
    setTrackIndex((index) => (loop ? index + 1 : index));
  });

  useEffect(() => {
    if (!loop || paused) return;

    const id = window.setInterval(() => {
      if (canAutoplay()) tick();
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [loop, paused]);

  useEffect(() => {
    return () => window.cancelAnimationFrame(settleRaf.current);
  }, []);

  // Без анимации transitionend не придёт — нормализуем сразу.
  useEffect(() => {
    if (!loop || instant) return;
    if (trackIndex >= clones && trackIndex < clones + total) return;
    if (!prefersReducedMotion()) return;
    jumpTo(wrapTrackIndex(trackIndex, clones, total));
  }, [trackIndex, loop, clones, total, instant]);

  if (total === 0) return null;

  const slides = loop
    ? [
        ...items.slice(-clones).map((project, i) => ({
          project,
          key: `${project.slug}-head-${i}`,
          clone: true as const,
          labelIndex: total - clones + i,
        })),
        ...items.map((project, i) => ({
          project,
          key: project.slug,
          clone: false as const,
          labelIndex: i,
        })),
        ...items.slice(0, clones).map((project, i) => ({
          project,
          key: `${project.slug}-tail-${i}`,
          clone: true as const,
          labelIndex: i,
        })),
      ]
    : items.map((project, i) => ({
        project,
        key: project.slug,
        clone: false as const,
        labelIndex: i,
      }));

  const go = (delta: -1 | 1) => {
    if (!loop) {
      setTrackIndex((index) => (index + delta + total) % total);
      return;
    }

    const max = total + 2 * clones - 1;
    setTrackIndex((index) => Math.max(0, Math.min(max, index + delta)));
  };

  const onTrackTransitionEnd = (event: TransitionEvent<HTMLUListElement>) => {
    if (event.propertyName !== "transform" || event.target !== event.currentTarget) {
      return;
    }
    if (!loop) return;
    if (trackIndex >= clones && trackIndex < clones + total) return;
    jumpTo(wrapTrackIndex(trackIndex, clones, total));
  };

  const currentLabel = String(logicalIndex + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  return (
    <div className={styles.works}>
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="featured-projects" className={styles.title}>
            Посмотрите, как это выглядит после реализации
          </h2>
          <SectionEyebrow>Проекты</SectionEyebrow>
        </div>
        <SectionLead>
          Избранные работы Mezzanine — от отдельных мебельных решений до
          нескольких помещений в одном проекте. Здесь можно оценить детали
          исполнения, пропорции и то, как мебель вписывается в интерьер.
        </SectionLead>
      </header>

      <div className={styles.carousel}>
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
            className={
              instant ? `${styles.track} ${styles.trackInstant}` : styles.track
            }
            style={{ "--active-index": trackIndex } as CSSProperties}
            onTransitionEnd={onTrackTransitionEnd}
          >
            {slides.map((slide, index) => {
              const isActive = index === trackIndex;
              const { project, labelIndex } = slide;

              return (
                <li
                  key={slide.key}
                  className={[
                    styles.card,
                    isActive ? styles.cardActive : "",
                    slide.clone ? styles.cardClone : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  data-active={isActive ? "true" : undefined}
                  aria-current={isActive && !slide.clone ? "true" : undefined}
                  aria-hidden={slide.clone ? true : undefined}
                >
                  <Link
                    href={`/projects/${project.slug}/`}
                    className={styles.cardLink}
                    tabIndex={slide.clone ? -1 : undefined}
                    onFocus={() => {
                      if (slide.clone) return;
                      setTrackIndex(index);
                    }}
                  >
                    <span className={styles.cardMeta}>
                      <span className={styles.cardIndex}>
                        {String(labelIndex + 1).padStart(3, "0")}
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

        <div className={styles.toolbar}>
          {total > 1 ? (
            <div
              className={styles.controls}
              role="group"
              aria-label="Навигация по проектам"
            >
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
          <Link href={siteRoutes.projects.href} className={styles.allLink}>
            Все проекты
          </Link>
        </div>
      </div>
    </div>
  );
}
