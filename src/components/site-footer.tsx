import Link from "next/link";
import { Container } from "@/components/container";
import { primaryNavRoutes, productRoutes, siteRoutes } from "@/lib/routes";
import { site } from "@/lib/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <div className={styles.top}>
          <Link href="/" className={styles.brand}>
            {site.name}
          </Link>
          {/* <p className={styles.tagline}>{site.tagline}</p>
          <Link href={siteRoutes.contacts.href} className={styles.cta}>
            Заявка
          </Link> */}
        </div>

        <div className={styles.cols}>
          <div>
            <p className={styles.colTitle}>Мебель</p>
            <ul className={styles.list}>
              {productRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href}>{route.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.colTitle}>Компания</p>
            <ul className={styles.list}>
              {primaryNavRoutes.map((route) => (
                <li key={route.href}>
                  <Link href={route.href}>{route.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>SEO · производство · заявки</span>
        </div>
      </Container>
    </footer>
  );
}
