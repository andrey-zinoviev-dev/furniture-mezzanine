import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/lib/home-content";
import { site } from "@/lib/site";
import { siteRoutes } from "@/lib/routes";
import styles from "./about-section.module.css";

/**
 * Секция «О нас»: editorial-сетка со скрина —
 * мета-строка, крупный текст, три колонки снизу.
 * Светлый фон, без подписи после большого абзаца.
 */
export function AboutSection() {
  const year = new Date().getFullYear();

  return (
    <section className={styles.section} aria-labelledby="about">
      <div className={styles.meta}>
        <p className={styles.metaGroup}>
          <span>{site.name}</span>
          <span aria-hidden="true">/</span>
          <span>О компании</span>
          <span aria-hidden="true">/</span>
          <span>©{year}</span>
        </p>
        <p className={styles.metaGroup}>
          <Link href={siteRoutes.about.href}>Подробнее</Link>
          <span aria-hidden="true">/</span>
          <Link href={siteRoutes.contacts.href}>Контакты</Link>
        </p>
      </div>

      <div className={styles.hero}>
        <p className={styles.index} aria-hidden="true">
          {aboutSection.index}
        </p>
        <div className={styles.heroCopy}>
          <h2 id="about" className={styles.title}>
            {aboutSection.title}
          </h2>
          <p className={styles.body}>{aboutSection.body}</p>
        </div>
      </div>

      <div className={styles.cols}>
        <div className={styles.col}>
          <p className={styles.colLabel}>
            <span aria-hidden="true">↓</span> Услуги
          </p>
          <ul className={styles.list}>
            {aboutSection.services.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>
            <span aria-hidden="true">↓</span> Подход
          </p>
          <ul className={styles.list}>
            {aboutSection.facts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colLabel}>
            <span aria-hidden="true">↓</span> {aboutSection.image.credit}
          </p>
          <figure className={styles.figure}>
            <Image
              src={aboutSection.image.src}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className={styles.image}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
