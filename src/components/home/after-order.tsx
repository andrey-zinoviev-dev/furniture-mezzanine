import { SectionEyebrow } from "@/components/section-eyebrow";
import headStyles from "@/components/section-head.module.css";
import { SectionLead } from "@/components/section-lead";
import { afterOrder } from "@/lib/home-content";
import styles from "./after-order.module.css";

/**
 * «Сопровождение проекта»: bento-сетка как на референсе Lawyers.
 * tall слева → два compact сверху справа → small снизу слева → feature снизу справа.
 */
export function AfterOrder() {
  const { eyebrow, title, lead, items } = afterOrder;

  return (
    <section className={styles.section} aria-labelledby="after-order">
      <header className={styles.head}>
        <div className={headStyles.top}>
          <h2 id="after-order" className={styles.title}>
            {title}
          </h2>
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </div>
        <SectionLead>{lead}</SectionLead>
      </header>

      <ul className={styles.bento}>
        {items.map((item) => (
          <li
            key={item.id}
            className={styles.tile}
            data-size={item.size}
            data-tone={item.tone}
          >
            <span className={styles.index}>{item.n}</span>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemBody}>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
