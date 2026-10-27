import Image from "next/image";
import Link from "next/link";
import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
// import { designersInviteBenefits } from "@/lib/home-content";
import { siteRoutes } from "@/lib/routes";
import styles from "./designers-invite.module.css";

/**
 * Секция «Дизайнерам»: шапка (title | eyebrow + линия),
 * ниже сетка — подпись+CTA блоком внизу слева, фото справа.
 */
export function DesignersInvite() {
  return (
    <section className={styles.section} aria-labelledby="designers-invite">
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="designers-invite" className={styles.title}>
            Ваш проект — наша точная реализация
          </h2>
          <SectionEyebrow>Дизайнерам</SectionEyebrow>
        </div>
      </header>

      <div className={styles.frame}>
        <div className={styles.copy}>
          <div className={styles.caption}>
            <SectionLead>
              Берём на себя техническую проработку, производство и монтаж мебели
              по вашему дизайн-проекту. Сохраняем авторские решения, а любые
              изменения предварительно согласовываем с вами.
            </SectionLead>
            <Link href={siteRoutes.designers.href} className={styles.cta}>
              Подробнее о сотрудничестве
            </Link>
          </div>
        </div>

        {/*
        <div className={styles.principles}>
          <p className={styles.principlesLabel}>Наши принципы сотрудничества</p>
          <ul className={styles.benefits}>
            {designersInviteBenefits.map((item, index) => (
              <li key={item.id} className={styles.benefit}>
                <span className={styles.benefitIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitBody}>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        */}

        <div className={styles.media} aria-hidden="true">
          <Image
            src="/covers/proj-studio-a.jpg"
            alt=""
            fill
            sizes="(max-width: 1022px) 100vw, 50vw"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
