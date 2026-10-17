import Image from "next/image";
import Link from "next/link";
import { siteRoutes } from "@/lib/routes";
import styles from "./designers-invite.module.css";

/**
 * Секция «Дизайнерам»: сетка 320px | 1fr как у рисков.
 * Заголовок с левого края (как «Риски»), подпись и CTA — с линии контента.
 */
export function DesignersInvite() {
  return (
    <section className={styles.section} aria-labelledby="designers-invite">
      <div className={styles.frame}>
        <h2 id="designers-invite" className={styles.title}>
          Дизайнерам — мебель по вашему проекту без потери замысла
        </h2>

        <div className={styles.copy}>
          {/* <p className={styles.label}>Дизайнерам</p> */}
          <p className={styles.note}>
            Для студий и частных практик: производство по чертежам,
            сопровождение до монтажа и одна ответственность за результат.
          </p>
          <Link href={siteRoutes.designers.href} className={styles.cta}>
            Начать сотрудничество
          </Link>
        </div>

        <div className={styles.media} aria-hidden="true">
          <div className={styles.mediaPhoto}>
            <Image
              src="/covers/proj-studio-a.jpg"
              alt=""
              fill
              sizes="(max-width: 1022px) 90vw, 50vw"
              className={styles.image}
            />
          </div>
          <div className={styles.inset}>
            <Image
              src="/covers/proj-studio-b.jpg"
              alt=""
              fill
              sizes="160px"
              className={styles.insetImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
