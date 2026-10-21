import Image from "next/image";
import Link from "next/link";
import {
  getProjectsForProductCategory,
  slugToCategory,
} from "@/lib/projects";
import { siteRoutes } from "@/lib/routes";
import styles from "./product-projects.module.css";

type ProductProjectsProps = {
  categorySlug: string;
  productTitle: string;
};

/**
 * Проекты направления — строго по categorySlug из портфолио.
 */
export function ProductProjects({
  categorySlug,
  productTitle,
}: ProductProjectsProps) {
  const items = getProjectsForProductCategory(categorySlug);
  const categoryLabel = slugToCategory(categorySlug) ?? productTitle;
  const allHref = `${siteRoutes.projects.href}?category=${categorySlug}`;

  return (
    <section className={styles.section} aria-labelledby="product-projects">
      <div className={styles.works}>
        <header className={styles.head}>
          <h2 id="product-projects" className={styles.title}>
            Проекты
            <span className={styles.count} aria-hidden="true">
              ({String(items.length).padStart(2, "0")})
            </span>
          </h2>
          <div className={styles.headAside}>
            <p className={styles.lead}>
              Реализованные объекты в категории «{categoryLabel}».
            </p>
            <Link href={allHref} className={styles.allLink}>
              Все в категории
            </Link>
          </div>
        </header>

        {items.length === 0 ? (
          <p className={styles.empty}>
            Пока нет опубликованных проектов в этой категории.
          </p>
        ) : (
          <div
            className={styles.scroller}
            tabIndex={0}
            aria-label={`Проекты: ${categoryLabel}`}
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
                      <span className={styles.cardPlace}>{project.year}</span>
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
        )}
      </div>
    </section>
  );
}
