"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { getRecentProjects, type Project } from "@/lib/projects";
import styles from "./solutions-marquee.module.css";

type SolutionsMarqueeProps = {
  limit?: number;
};

function detailImage(project: Project): string {
  return project.detailCover ?? project.cover;
}

/**
 * Слайдер недавно реализованных решений.
 * Один проект на экран: заголовок, описание, два кадра, параметры, стрелки.
 */
export function SolutionsMarquee({ limit = 5 }: SolutionsMarqueeProps) {
  const items = getRecentProjects(limit);
  const labelId = useId();
  const [index, setIndex] = useState(0);

  const total = items.length;
  const project = items[index];

  if (!project || total === 0) {
    return null;
  }

  const goPrev = () => setIndex((current) => (current - 1 + total) % total);
  const goNext = () => setIndex((current) => (current + 1) % total);
  const slideNumber = String(index + 1).padStart(2, "0");

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  return (
    <article
      className={styles.showcase}
      aria-roledescription="карусель"
      aria-labelledby={labelId}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className={styles.top}>
        <div className={styles.intro}>
          <h3 id={labelId} className={styles.title}>
            {project.title}
          </h3>
          <Link href={`/projects/${project.slug}/`} className={styles.projectLink}>
            <span className={styles.projectLinkDot} aria-hidden="true" />
            Смотреть проект
          </Link>
        </div>

        <div className={styles.about}>
          <p className={styles.aboutLabel}>О решении</p>
          <div className={styles.aboutColumns}>
            <p className={styles.aboutText}>{project.task ?? project.summary}</p>
            <p className={styles.aboutText}>
              {project.solution ?? project.space ?? project.summary}
            </p>
          </div>
        </div>

        <p className={styles.index} aria-hidden="true">
          {slideNumber}.
        </p>
      </div>

      <div className={styles.media}>
        <figure className={styles.detail}>
          <Image
            src={detailImage(project)}
            alt=""
            fill
            sizes="(max-width: 720px) 100vw, 28vw"
            className={styles.image}
            priority={index === 0}
          />
        </figure>

        <figure className={styles.hero}>
          <Image
            key={project.cover}
            src={project.cover}
            alt=""
            fill
            sizes="(max-width: 720px) 100vw, 72vw"
            className={styles.image}
            priority={index === 0}
          />

          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            onClick={goPrev}
            aria-label="Предыдущее решение"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            onClick={goNext}
            aria-label="Следующее решение"
          >
            <span aria-hidden="true">→</span>
          </button>
        </figure>
      </div>

      <div className={styles.meta}>
        <dl className={styles.params}>
          <div>
            <dt>Бюджет</dt>
            <dd>{project.budget ?? "по смете"}</dd>
          </div>
          <div>
            <dt>Функция</dt>
            <dd>{project.purpose ?? project.category}</dd>
          </div>
          <div>
            <dt>Время изготовления</dt>
            <dd>{project.leadTime ?? "уточняется"}</dd>
          </div>
        </dl>

        <div className={styles.metaAside}>
          <span className={styles.metaLabel}>{project.category}</span>
          <span className={styles.metaRule} aria-hidden="true" />
          <span className={styles.metaYear}>{project.year}</span>
        </div>
      </div>

      <p className={styles.status} aria-live="polite">
        Решение {index + 1} из {total}
      </p>
    </article>
  );
}
