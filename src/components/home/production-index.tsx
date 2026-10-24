"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { productionIndex } from "@/lib/home-content";
import styles from "./production-index.module.css";

/**
 * Услуги:
 * — десктоп: золотая сетка 320px | 1fr, навигация слева, слайд справа
 *   (фото + текст + CTA);
 * — мобилка: простой список ссылок.
 */
export function ProductionIndex() {
  const [active, setActive] = useState(0);
  const total = productionIndex.length;

  if (total === 0) return null;

  const item = productionIndex[active] ?? productionIndex[0];

  return (
    <section className={styles.section} aria-labelledby="services">
      <div className={styles.layout}>
        <h2 id="services" className={styles.title}>
          Что мы производим
          <span className={styles.count} aria-hidden="true">
            ({String(total).padStart(2, "0")})
          </span>
        </h2>

        {/* <p className={styles.lead}>
          Кухни, системы хранения и мебель для жилых пространств. Конструкцию,
          размеры и конфигурацию определяем исходя из особенностей помещения и
          ваших требований.
        </p> */}

        {/* Мобилка: развёрнутый список — фото, название, текст, CTA */}
        <ul className={styles.mobileList}>
          {productionIndex.map((service, index) => (
            <li key={service.href} className={styles.mobileItem}>
              <Link href={service.href} className={styles.mobileMedia}>
                <Image
                  src={service.cover}
                  alt=""
                  fill
                  sizes="100vw"
                  className={styles.image}
                  priority={index === 0}
                />
              </Link>
              <h3 className={styles.mobileItemTitle}>{service.title}</h3>
              {service.description ? (
                <p className={styles.mobileItemBody}>{service.description}</p>
              ) : null}
              <Link href={service.href} className={styles.mobileItemLink}>
                Подробнее
                <span className={styles.linkArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Десктоп: переключение слайдов */}
        <nav className={styles.nav} aria-label="Услуги">
          <ul className={styles.navList}>
            {productionIndex.map((service, index) => {
              const isActive = index === active;

              return (
                <li key={service.href}>
                  <button
                    type="button"
                    className={styles.navButton}
                    aria-current={isActive ? "true" : undefined}
                    aria-controls="services-stage"
                    onClick={() => setActive(index)}
                  >
                    {service.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          id="services-stage"
          className={styles.stage}
          aria-live="polite"
          aria-atomic="true"
        >
          <article
            className={styles.card}
            key={item.href}
            aria-label={item.title}
          >
            <div className={styles.copy}>
              {item.description ? (
                <h3 className={styles.leadTitle}>{item.description}</h3>
              ) : null}
              <Link href={item.href} className={styles.link}>
                Подробнее
                <span className={styles.linkArrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </div>

            <div className={styles.media}>
              <Image
                src={item.cover}
                alt=""
                fill
                sizes="(max-width: 1022px) 100vw, 55vw"
                className={styles.image}
                priority={active === 0}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
