import Image from "next/image";
import Link from "next/link";
import { AboutSection } from "@/components/home/about-section";
import { DesignersInvite } from "@/components/home/designers-invite";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ProductionIndex } from "@/components/home/production-index";
import { ProductionProof } from "@/components/home/production-proof";
import { RisksSolutions } from "@/components/home/risks-solutions";
// import { SolutionsMarquee } from "@/components/home/solutions-marquee";
import { ValuesAccordion } from "@/components/home/values-accordion";
import { WorkProcess } from "@/components/home/work-process";
import {
  journalPreview,
  // materialsPreview,
} from "@/lib/home-content";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata = pageMetadata(siteRoutes.home);

export default function HomePage() {
  return (
    <div className={styles.home}>
      {/* 1. Hero — медиа сверху, оффер и CTA в белом блоке снизу */}
      <section className={styles.hero} aria-labelledby="home-offer">
        <div className={styles.heroMedia} aria-hidden="true">
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/covers/living.jpg"
          >
            <source
              src="/google_veo3_video_2026_10_07_03_18_00.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroMain}>
            <h1 id="home-offer" className={styles.monument}>
              Индивидуальная мебель без компромиссов между интерьером, функцией
              и реализацией
            </h1>
            <Link href={siteRoutes.contacts.href} className={styles.primary}>
              Обсудить проект
            </Link>
          </div>
          <p className={styles.heroLead}>
            Проектируем и производим под конкретное пространство: кухни,
            гардеробные, комплексная меблировка. Чертежи и узлы фиксируем до
            запуска в цех.
          </p>
        </div>
      </section>

      {/* 2. Услуги — слайдер 50/50 */}
      <ProductionIndex />

      {/* 3. Избранные проекты — сетка 320px | 1fr, горизонтальная лента */}
      <section className={styles.section} aria-labelledby="featured-projects">
        <FeaturedProjects />
      </section>

      {/* 4. О нас — editorial-сетка */}
      {/* <AboutSection /> */}

      {/* 5. Новые решения */}
      {/* <section className={styles.section} aria-labelledby="new-solutions">
        <p className={styles.sectionEyebrow}>В работе и рядом</p>
        <h2 id="new-solutions" className={styles.srOnly}>
          Недавно реализовали
        </h2>
        <SolutionsMarquee />
      </section> */}

      {/* 5. Риски и решения */}
      <RisksSolutions />

      {/* 6. Ценности */}
      {/* <section className={styles.section} aria-labelledby="values">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionEyebrow}>Почему Mezzanine</p>
            <h2 id="values" className={styles.sectionTitle}>
              Ценности
            </h2>
          </div>
          <p className={styles.sectionNote}>
            Закрываем типичные риски: смета, проект, качество, монтаж.
          </p>
        </div>
        <ValuesAccordion />
      </section> */}

      {/* 6. Доказательство производства */}
      {/* <section className={styles.section} aria-labelledby="production-proof">
        <ProductionProof />
      </section> */}

      {/* 7. Процесс — равные карточки со скроллом */}
      {/* <WorkProcess /> */}

      {/* 8. Материалы */}
      {/* <section className={styles.section} aria-labelledby="materials">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionEyebrow}>Исполнение</p>
            <h2 id="materials" className={styles.sectionTitle}>
              Материалы и детали
            </h2>
          </div>
          <Link href={siteRoutes.materials.href} className={styles.sectionLink}>
            Все материалы
          </Link>
        </div>
        <ul className={styles.materials}>
          {materialsPreview.map((item) => (
            <li key={item.title}>
              <figure className={styles.material} style={{ backgroundColor: item.tone }}>
                <span className={styles.materialGrain} aria-hidden="true" />
                <figcaption>
                  <span className={styles.materialTitle}>{item.title}</span>
                  <span className={styles.materialCaption}>{item.caption}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section> */}


      {/* 9. Дизайнерам — тёмное типографическое поле */}
      <DesignersInvite />

      {/* 10. Журнал */}
      <section className={styles.journalSection} aria-labelledby="journal">
        <div className={styles.journalHead}>
          <p className={styles.journalEyebrow}>Экспертиза</p>
          <h2 id="journal" className={styles.journalHeading}>
            Статьи
          </h2>
        </div>
        <ul className={styles.journal}>
          {journalPreview.map((article, index) => (
            <li key={article.title}>
              <Link href={article.href} className={styles.journalItem}>
                <span className={styles.journalMedia}>
                  <Image
                    src={article.cover}
                    alt=""
                    fill
                    sizes="(max-width: 720px) 100vw, 50vw"
                    className={styles.journalMediaImage}
                  />
                </span>
                <span className={styles.journalMeta}>
                  <span className={styles.journalIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.journalTag}>{article.tag}</span>
                </span>
                <span className={styles.journalTitle}>{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>


      {/* 12. Финальный CTA — 50/50: цитата | фото + действия */}
      {/* <section className={styles.finalCta} aria-labelledby="final-cta">
        <div className={styles.finalQuote}>
          <p className={styles.finalMeta}>2026</p>
          <h2 id="final-cta" className={styles.finalTitle}>
            От эскиза до монтажа — мебель, которая живёт с интерьером
          </h2>
          <Link href={siteRoutes.contacts.href} className={styles.finalAsideLink}>
            Контакты —
          </Link>
        </div>

        <div className={styles.finalPanel}>
          <div className={styles.finalMedia} aria-hidden="true">
            <Image
              src="/covers/living.jpg"
              alt=""
              fill
              sizes="(max-width: 980px) 100vw, 50vw"
              className={styles.finalImage}
            />
            <span className={styles.finalGrain} />
          </div>

          <div className={styles.finalInfo}>
            <div>
              <p className={styles.finalColTitle}>Связь</p>
              <ul className={styles.finalList}>
                <li>
                  <Link href={siteRoutes.contacts.href}>Оставить заявку</Link>
                </li>
                <li>
                  <Link href={siteRoutes.contacts.href}>Приложить планировку</Link>
                </li>
                <li>
                  <Link href={siteRoutes.contacts.href}>Обсудить проект</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className={styles.finalColTitle}>Разделы</p>
              <ul className={styles.finalList}>
                <li>
                  <Link href={siteRoutes.projects.href}>Проекты</Link>
                </li>
                <li>
                  <Link href={siteRoutes.kuhni.href}>Кухни</Link>
                </li>
                <li>
                  <Link href={siteRoutes.garderobnye.href}>Гардеробные</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
