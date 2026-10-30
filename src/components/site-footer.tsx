import Link from "next/link";
import { Container } from "@/components/container";
import { GoldenGrid, GoldenGridCell } from "@/components/golden-grid";
import {
  furnitureNavRoutes,
  primaryNavRoutes,
  proofNavRoutes,
  siteRoutes,
} from "@/lib/routes";
import { site } from "@/lib/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        {/* Ссылки справа, как аккордеон рисков: колонки 6–12 */}
        <GoldenGrid className={styles.nav}>
          <GoldenGridCell start={6} span={7}>
            <div className={styles.cols}>
              <div>
                <p className={styles.colTitle}>Мебель</p>
                <ul className={styles.list}>
                  <li>
                    <Link href={siteRoutes.kuhni.href}>
                      {siteRoutes.kuhni.title}
                    </Link>
                  </li>
                  {furnitureNavRoutes.map((route) => (
                    <li key={route.href}>
                      <Link href={route.href}>{route.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className={styles.colTitle}>Производство</p>
                <ul className={styles.list}>
                  {proofNavRoutes.map((route) => (
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
          </GoldenGridCell>
        </GoldenGrid>

        <GoldenGrid>
          <GoldenGridCell start={1} span={8}>
            <Link href="/" className={styles.brand}>
              {site.name}
            </Link>
          </GoldenGridCell>
          <GoldenGridCell start={9} span={4} className={styles.metaCell}>
            <div className={styles.meta}>
              <a href="#top" className={styles.backToTop}>
                Наверх ↑
              </a>
              <span>
                © {new Date().getFullYear()} {site.name}
              </span>
            </div>
          </GoldenGridCell>
        </GoldenGrid>
      </Container>
    </footer>
  );
}
