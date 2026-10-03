import Link from "next/link";
import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";
import { siteRoutes } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata = pageMetadata(siteRoutes.projects);

export default function ProjectsPage() {
  return (
    <PageStub route={siteRoutes.projects}>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}/`} className={styles.row}>
              <span className={styles.name}>{project.title}</span>
              <span className={styles.category}>{project.category}</span>
              <span className={styles.year}>{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </PageStub>
  );
}
