import type { ProductPageContent } from "@/lib/product-content";
import { ProductFaqSection } from "./product-faq";
import { ProductHero } from "./product-hero";
import { ProductProjects } from "./product-projects";
import { ProductTasks } from "./product-tasks";
import styles from "./product-page.module.css";

type ProductPageProps = {
  product: ProductPageContent;
};

/**
 * Единый шаблон страницы направления:
 * hero → задачи → проекты категории → FAQ.
 */
export function ProductPage({ product }: ProductPageProps) {
  return (
    <div className={styles.page}>
      <ProductHero product={product} />
      <ProductTasks tasks={product.tasks} />
      <ProductProjects
        categorySlug={product.projectCategorySlug}
        productTitle={product.title}
      />
      <ProductFaqSection items={product.faq} />
    </div>
  );
}
