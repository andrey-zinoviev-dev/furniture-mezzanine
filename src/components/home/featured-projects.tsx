import Link from "next/link";
import { getFeaturedProjects, type Project } from "@/lib/projects";
import styles from "./featured-projects.module.css";

type FeaturedProjectsProps = {
  limit?: number;
};

/** Несколько тонов-заглушек под будущую галерею кадров проекта. */
function galleryFrames(project: Project, count: number): string[] {
  const base = project.tone.replace("#", "");
  if (base.length !== 6) {
    return Array.from({ length: count }, () => project.tone);
  }

  const r = parseInt(base.slice(0, 2), 16);
  const g = parseInt(base.slice(2, 4), 16);
  const b = parseInt(base.slice(4, 6), 16);

  return Array.from({ length: count }, (_, index) => {
    const shift = (index - (count - 1) / 2) * 14;
    const channel = (value: number) =>
      Math.max(0, Math.min(255, Math.round(value + shift)))
        .toString(16)
        .padStart(2, "0");
    return `#${channel(r)}${channel(g)}${channel(b)}`;
  });
}

/** Избранные проекты: слева название, справа горизонтальная лента кадров. */
export function FeaturedProjects({ limit = 5 }: FeaturedProjectsProps) {
  const items = getFeaturedProjects(limit);

  return (
    <ul className={styles.list}>
      {items.map((project) => {
        const frames = galleryFrames(project, 5);

        return (
          <li key={project.slug} className={styles.row}>
            <div className={styles.meta}>
              <Link href={`/projects/${project.slug}/`} className={styles.label}>
                <span className={styles.title}>{project.title}</span>
                <span className={styles.count} aria-label={`${frames.length} кадров`}>
                  [ {frames.length} ]
                </span>
              </Link>
              <span className={styles.category}>{project.category}</span>
            </div>

            <div className={styles.indent} aria-hidden="true" />

            <div className={styles.scroller} tabIndex={0} aria-label={`Кадры: ${project.title}`}>
              <div className={styles.track}>
                {frames.map((tone, index) => (
                  <Link
                    key={`${project.slug}-${index}`}
                    href={`/projects/${project.slug}/`}
                    className={styles.frame}
                    style={{ backgroundColor: tone }}
                    tabIndex={-1}
                  >
                    <span className={styles.grain} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
