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
  /** По одному клону с края — достаточно для бесшовного loop на full-width. */
  const clones = loop ? 1 : 0;

  const [trackIndex, setTrackIndex] = useState(clones);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLUListElement>(null);
  const settleRaf = useRef(0);

  const logicalIndex = loop
    ? ((trackIndex - clones) % total + total) % total
    : trackIndex;

  /** Мгновенный прыжок на оригинал после клона — через DOM, без React-state «instant». */
  const jumpTo = (next: number) => {
    const el = trackRef.current;
    window.cancelAnimationFrame(settleRaf.current);

    if (el) {
      el.style.transition = "none";
      el.style.transform = `translate3d(${-100 * next}%, 0, 0)`;
    }

    setTrackIndex(next);

    settleRaf.current = window.requestAnimationFrame(() => {
      settleRaf.current = window.requestAnimationFrame(() => {
        if (!el) return;
        el.style.transition = "";
        el.style.transform = "";
      });
    });
  };

  const advance = (delta: -1 | 1) => {
    if (!loop) {
      setTrackIndex((index) => (index + delta + total) % total);
      return;
    }

    // Без анимации не заходим на клоны — сразу логический сосед.
    if (prefersReducedMotion()) {
      setTrackIndex((index) => {
        const logical = ((index - clones) % total + total) % total;
        return clones + ((logical + delta + total) % total);
      });
      return;
    }

    const max = total + 2 * clones - 1;
    setTrackIndex((index) => Math.max(0, Math.min(max, index + delta)));
  };

  // Только для interval: свежие loop/total/clones без рестарта таймера.
  const onAutoplayTick = useEffectEvent(() => {
    advance(1);
  });

  useEffect(() => {
    if (!loop || paused) return;

    const id = window.setInterval(() => {
      if (canAutoplay()) onAutoplayTick();
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [loop, paused]);

  useEffect(() => {
    return () => window.cancelAnimationFrame(settleRaf.current);
  }, []);

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
        {/* <SectionLead>
          Избранные работы Mezzanine — от отдельных мебельных решений до
          нескольких помещений в одном проекте. Здесь можно оценить детали
          исполнения, пропорции и то, как мебель вписывается в интерьер.
        </SectionLead> */}
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
            ref={trackRef}
            className={styles.track}
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
                        sizes="(max-width: 1022px) 70vw, 50vw"
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
                onClick={() => advance(-1)}
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
                onClick={() => advance(1)}
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
