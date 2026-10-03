import Link from "next/link";
import { Container } from "@/components/container";
import { primaryNavRoutes, productRoutes } from "@/lib/routes";
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
          <div className={styles.dropdown}>
            <button type="button" className={styles.trigger} aria-haspopup="true">
              Мебель
              <span className={styles.caret} aria-hidden="true" />
            </button>
            <ul className={styles.menu} role="list">
              {productRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href} className={styles.menuLink}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {primaryNavRoutes.map((route) => (
            <Link key={route.href} href={route.href} className={styles.link}>
              {route.title}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
