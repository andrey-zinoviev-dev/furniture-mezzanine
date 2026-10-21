import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { siteRoutes } from "@/lib/routes";
import styles from "./featured-projects.module.css";

type FeaturedProjectsProps = {
  limit?: number;
};

/** Избранные проекты: заголовок слева, горизонтальная лента карточек справа. */
export function FeaturedProjects({ limit = 8 }: FeaturedProjectsProps) {
  const items = getFeaturedProjects(limit);

  return (
    <div className={styles.works}>
      <header className={styles.head}>
        <h2 id="featured-projects" className={styles.title}>
          Проекты
          <span className={styles.count} aria-hidden="true">
            ({String(items.length).padStart(2, "0")})
          </span>
          <span className={styles.srOnly}> — {items.length}</span>
        </h2>
        <div className={styles.headAside}>
          <p className={styles.lead}>
            Избранные объекты — кухни, гардеробные и комплексная меблировка.
          </p>
          <Link href={siteRoutes.projects.href} className={styles.allLink}>
            Все проекты
          </Link>
        </div>
      </header>

      <div
        className={styles.scroller}
        tabIndex={0}
        aria-label="Избранные проекты"
      >
        <ul className={styles.track}>
          {items.map((project, index) => (
            <li key={project.slug} className={styles.card}>
              <Link
                href={`/projects/${project.slug}/`}
                className={styles.cardLink}
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
                    sizes="(max-width: 1022px) 70vw, 22vw"
                    className={styles.image}
                  />
                  <span className={styles.grain} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
