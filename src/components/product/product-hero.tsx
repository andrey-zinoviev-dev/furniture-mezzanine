import Image from "next/image";
import Link from "next/link";
import type { ProductPageContent } from "@/lib/product-content";
import styles from "./product-hero.module.css";

type ProductHeroProps = {
  product: ProductPageContent;
};

/**
 * Полноэкранный старт продукта:
 * крупный h1 слева; ниже один блок на остаток экрана —
 * фото слева + Info справа по верхней линии.
 */
export function ProductHero({ product }: ProductHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="product-title">
      <div className={styles.shell}>
        <h1 id="product-title" className={styles.title}>
          {product.title}
        </h1>

        <div className={styles.stage}>
          <div className={styles.media}>
            <Image
              src={product.cover}
              alt={product.coverAlt}
              fill
              priority
              sizes="(max-width: 1022px) 100vw, 58vw"
              className={styles.image}
            />
          </div>

          <aside className={styles.aside}>
            <div className={styles.block}>
              <p className={styles.blockTitle}>Info</p>
              <p className={styles.info}>{product.info}</p>
            </div>

            <div className={styles.block}>
              <p className={styles.blockTitle}>Services</p>
              <ul className={styles.services}>
                {product.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <Link href={product.cta.href} className={styles.cta}>
              {product.cta.label}
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
