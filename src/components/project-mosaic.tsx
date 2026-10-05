import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import styles from "./project-mosaic.module.css";

type ProjectMosaicProps = {
  limit?: number;
};

/**
 * Мозаика проектов: плотный grid без зазоров, типографика по краям плиток.
 * Референс — editorial/brutalist collage; фон сайта белый, плитки — фото-заглушки.
 */
export function ProjectMosaic({ limit = 8 }: ProjectMosaicProps) {
  const items = projects.slice(0, limit);

  return (
    <ul className={styles.grid}>
      {items.map((project) => (
        <li key={project.slug}>
          <Link
            href={`/projects/${project.slug}/`}
            className={`${styles.tile} ${styles[project.labelMode ?? "top"]}`}
          >
            <Image
              src={project.cover}
              alt=""
              fill
              sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw"
              className={styles.image}
            />
            <span className={styles.noise} aria-hidden="true" />
            <span className={styles.category}>{project.category}</span>
            <span className={styles.title}>{project.title}</span>
            <span className={styles.meta}>{project.year}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
