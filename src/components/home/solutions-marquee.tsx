import Link from "next/link";
import { getRecentProjects } from "@/lib/projects";
import styles from "./solutions-marquee.module.css";

type SolutionsMarqueeProps = {
  limit?: number;
};

/** Ряд карточек-ссылок на недавно реализованные проекты. */
export function SolutionsMarquee({ limit = 5 }: SolutionsMarqueeProps) {
  const items = getRecentProjects(limit);

  if (items.length === 0) {
    return null;
  }

  return (
    <ul
      className={styles.list}
      aria-label="Недавно реализовали"
      style={{ ["--card-count" as string]: items.length }}
    >
      {items.map((project) => (
        <li key={project.slug}>
          <Link href={`/projects/${project.slug}/`} className={styles.card}>
            <span className={styles.title}>{project.title}</span>
            <span
              className={styles.visual}
              style={{ backgroundColor: project.tone }}
              aria-hidden="true"
            >
              <span className={styles.grain} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
