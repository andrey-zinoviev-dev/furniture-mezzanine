import Link from "next/link";
import { productionProof } from "@/lib/home-content";
import { siteRoutes } from "@/lib/routes";
import styles from "./production-proof.module.css";

/**
 * Доказательный блок производства — компактный типографический список
 * (верх референса «DESIGN PROCESS» / list rows), почти без текста.
 */
export function ProductionProof() {
  return (
    <div className={styles.shell}>
      <div className={styles.head}>
        <h2 id="production-proof" className={styles.title}>
          Производство
        </h2>
        <p className={styles.aside}>Как делаем</p>
      </div>

      <div className={styles.visuals} aria-hidden="true">
        {["#3a2f28", "#1a1714", "#4a3b32", "#241c18"].map((tone) => (
          <span key={tone} className={styles.visual} style={{ backgroundColor: tone }} />
        ))}
      </div>

      <ul className={styles.list}>
        {productionProof.map((item, index) => (
          <li key={item.title} className={styles.row}>
            <span className={styles.num} aria-hidden="true">
              {index + 1}
            </span>
            <div className={styles.copy}>
              <p className={styles.label}>
                <span className={styles.step}>Step</span> {item.title}
              </p>
              <p className={styles.detail}>{item.detail}</p>
            </div>
            <span className={styles.note}>{item.note}</span>
          </li>
        ))}
      </ul>

      <div className={styles.foot}>
        <Link href={siteRoutes.production.href} className={styles.link}>
          Смотреть производство
        </Link>
      </div>
    </div>
  );
}
