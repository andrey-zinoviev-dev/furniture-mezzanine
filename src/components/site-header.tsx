import Link from "next/link";
import { Container } from "@/components/container";
import {
  furnitureNavRoutes,
  proofNavRoutes,
  siteRoutes,
} from "@/lib/routes";
import { site } from "@/lib/site";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.brand}>
          {site.name}
        </Link>

        <nav className={styles.nav} aria-label="Основная навигация">
          <Link href={siteRoutes.kuhni.href} className={styles.link}>
            {siteRoutes.kuhni.title}
          </Link>

          <div className={styles.dropdown}>
            <button type="button" className={styles.trigger} aria-haspopup="true">
              Мебель
              <span className={styles.caret} aria-hidden="true" />
            </button>
            <ul className={styles.menu} role="list">
              {furnitureNavRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className={styles.menuLink}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href={siteRoutes.projects.href} className={styles.link}>
            {siteRoutes.projects.title}
          </Link>

          <div className={styles.dropdown}>
            <button type="button" className={styles.trigger} aria-haspopup="true">
              Производство
              <span className={styles.caret} aria-hidden="true" />
            </button>
            <ul className={styles.menu} role="list">
              {proofNavRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className={styles.menuLink}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link href={siteRoutes.designers.href} className={styles.link}>
            {siteRoutes.designers.title}
          </Link>

          <Link href={siteRoutes.about.href} className={styles.link}>
            {siteRoutes.about.title}
          </Link>

          <Link href={siteRoutes.contacts.href} className={styles.link}>
            {siteRoutes.contacts.title}
          </Link>
        </nav>
      </Container>
    </header>
  );
}
