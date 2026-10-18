import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import {
  categoryToSlug,
  getProjectCategories,
  getProjectsByCategorySlug,
  projects,
} from "@/lib/projects";
import { siteRoutes } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata = pageMetadata(siteRoutes.projects);

type ProjectsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const rawCategory = params.category;
  const activeSlug = typeof rawCategory === "string" ? rawCategory : undefined;
  const filtered = getProjectsByCategorySlug(activeSlug);
  const categories = getProjectCategories();
  const totalCount = projects.length;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {siteRoutes.projects.title}
          <span className={styles.count} aria-label={`${totalCount} проектов`}>
            ({totalCount})
          </span>
        </h1>
      </header>

      <nav className={styles.filters} aria-label="Фильтр по категории">
        <ul className={styles.filterList}>
          <li>
            <Link
              href={siteRoutes.projects.href}
              className={styles.filterLink}
              aria-current={!activeSlug ? "page" : undefined}
            >
              Все
            </Link>
          </li>
          {categories.map((category) => {
            const slug = categoryToSlug(category);
            const isActive = activeSlug === slug;
            return (
              <li key={slug}>
                <Link
                  href={`${siteRoutes.projects.href}?category=${slug}`}
                  className={styles.filterLink}
                  aria-current={isActive ? "page" : undefined}
                >
                  {category}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <ul className={styles.list}>
        {filtered.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}/`} className={styles.row}>
              <span className={styles.name}>{project.title}</span>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.year}>{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
