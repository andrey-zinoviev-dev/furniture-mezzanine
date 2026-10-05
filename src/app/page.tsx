import Image from "next/image";
import Link from "next/link";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { ProductionIndex } from "@/components/home/production-index";
import { ProductionProof } from "@/components/home/production-proof";
import { RisksSolutions } from "@/components/home/risks-solutions";
import { SolutionsMarquee } from "@/components/home/solutions-marquee";
import { ValuesAccordion } from "@/components/home/values-accordion";
import {
  journalPreview,
  materialsPreview,
  workSteps,
} from "@/lib/home-content";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";
import { site } from "@/lib/site";
import styles from "./page.module.css";

export const metadata = pageMetadata(siteRoutes.home);

export default function HomePage() {
  return (
    <div className={styles.home}>
      {/* 1. Оффер — на всю ширину, подпись и CTA по нижним углам */}
      <section className={styles.hero} aria-labelledby="home-offer">
        {/* <p className={styles.heroNote}>{site.name}</p> */}
        <h1 id="home-offer" className={styles.monument}>
          Индивидуальная мебель без компромиссов между интерьером, функцией и
          реализацией
        </h1>
        <div className={styles.heroFoot}>
          <p className={styles.monumentLead}>
            Проектируем мебель под конкретное пространство — от отдельного изделия до
            комплексной меблировки. Берём на себя техническую проработку, производство и
            монтаж.
          </p>
          <div className={styles.actions}>
            <Link href={siteRoutes.contacts.href} className={styles.primary}>
              Обсудить проект
            </Link>
            <Link href={siteRoutes.projects.href} className={styles.secondary}>
              Смотреть проекты
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Что производим — золотая сетка только здесь */}
      <ProductionIndex />

      {/* 3. Избранные проекты */}
      <section className={styles.section} aria-labelledby="featured-projects">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionEyebrow}>Портфолио</p>
            <h2 id="featured-projects" className={styles.sectionTitle}>
              Избранные проекты
            </h2>
          </div>
          <Link href={siteRoutes.projects.href} className={styles.sectionLink}>
            Все проекты
          </Link>
        </div>
        <FeaturedProjects />
      </section>

      {/* 4. Новые решения */}
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

      {/* 7. Процесс */}
      {/* <section className={styles.section} aria-labelledby="process">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionEyebrow}>Как идём</p>
            <h2 id="process" className={styles.sectionTitle}>
              Процесс работы
            </h2>
          </div>
          <Link href={siteRoutes.process.href} className={styles.sectionLink}>
            Подробнее
          </Link>
        </div>
        <ol className={styles.steps}>
          {workSteps.map((step) => (
            <li key={step.n} className={styles.step}>
              <span className={styles.stepNum}>{step.n}</span>
              <span className={styles.stepTitle}>{step.title}</span>
              <span className={styles.stepCheck}>{step.checkpoint}</span>
            </li>
          ))}
        </ol>
      </section> */}

      {/* 8. Комплексная меблировка */}
      {/* <section className={styles.meblirovka} aria-labelledby="meblirovka">
        <div
          className={styles.meblirovkaVisual}
          style={{ backgroundColor: "#1f1915" }}
          aria-hidden="true"
        >
          <span className={styles.meblirovkaGrain} />
        </div>
        <div className={styles.meblirovkaCopy}>
          <p className={styles.sectionEyebrow}>Стратегический продукт</p>
          <h2 id="meblirovka" className={styles.sectionTitle}>
            Комплексная меблировка
          </h2>
          <p className={styles.meblirovkaLead}>
            Один проект вместо нескольких отдельных мебельных заказов — единые материалы,
            сроки и ответственность за весь объём объекта.
          </p>
          <Link href={siteRoutes.meblirovkaKvartiry.href} className={styles.dotLink}>
            <span className={styles.dot} aria-hidden="true" />
            К меблировке квартиры
          </Link>
        </div>
      </section> */}

      {/* 9. Материалы */}
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

      {/* 10. Журнал */}
      <section className={styles.section} aria-labelledby="journal">
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.sectionEyebrow}>Экспертиза</p>
            <h2 id="journal" className={styles.sectionTitle}>
              Статьи
            </h2>
          </div>
        </div>
        <ul className={styles.journal}>
          {journalPreview.map((article) => (
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
                <span className={styles.journalBody}>
                  <span className={styles.journalBlur} aria-hidden="true">
                    <Image
                      src={article.cover}
                      alt=""
                      fill
                      sizes="(max-width: 720px) 100vw, 50vw"
                      className={styles.journalBlurImage}
                    />
                  </span>
                  <span className={styles.journalCopy}>
                    <span className={styles.journalTag}>{article.tag}</span>
                    <span className={styles.journalTitle}>{article.title}</span>
                    <span className={styles.journalCta}>Читать →</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* 11. Финальный CTA */}
      <section className={styles.finalCta} aria-labelledby="final-cta">
        <div className={styles.finalCopy}>
          <p className={styles.sectionEyebrow}>Следующий шаг</p>
          <h2 id="final-cta" className={styles.finalTitle}>
            Расскажите о вашем проекте
          </h2>
          <p className={styles.finalLead}>
            Пришлите планировку или опишите пространство — обсудим решение, этапы и
            ориентир по стоимости.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href={siteRoutes.contacts.href} className={styles.primary}>
            Оставить заявку
          </Link>
          <Link href={siteRoutes.contacts.href} className={styles.secondary}>
            Приложить планировку
          </Link>
        </div>
      </section>
    </div>
  );
}
