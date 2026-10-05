import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects, stubCovers, type Project } from "@/lib/projects";
import styles from "./featured-projects.module.css";

type FeaturedProjectsProps = {
  limit?: number;
};

/** Кадры галереи: свои у проекта, иначе ротация из общего пула. */
function galleryFrames(project: Project, count: number): string[] {
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery.slice(0, count);
  }

  const offset = Math.max(
    0,
    stubCovers.findIndex((cover) => cover === project.cover),
  );

  return Array.from(
    { length: count },
    (_, index) => stubCovers[(offset + index) % stubCovers.length],
  );
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
                {frames.map((cover, index) => (
                  <Link
                    key={`${project.slug}-${index}`}
                    href={`/projects/${project.slug}/`}
                    className={styles.frame}
                    tabIndex={-1}
                  >
                    <Image
                      src={cover}
                      alt=""
                      fill
                      sizes="(max-width: 720px) 45vw, 20vw"
                      className={styles.image}
                    />
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
