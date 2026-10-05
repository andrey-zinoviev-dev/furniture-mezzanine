import Image from "next/image";
import Link from "next/link";
import { categoryNavigator } from "@/lib/home-content";
import styles from "./category-navigator.module.css";

/**
 * Горизонтальный скролл категорий: одна крупная карточка на категорию.
 * Референс — ASS-лента, без ряда из нескольких объектов.
 */
export function CategoryNavigator() {
  return (
    <div className={styles.shell}>
      <ul className={styles.track} aria-label="Категории мебели">
        {categoryNavigator.map((category) => (
          <li key={category.href} className={styles.item}>
            <Link href={category.href} className={styles.card}>
              <Image
                src={category.cover}
                alt=""
                fill
                sizes="(max-width: 720px) 70vw, 18rem"
                className={styles.image}
              />
              <span className={styles.grain} aria-hidden="true" />
              <span className={styles.index}>
                [ {String(category.index).padStart(2, "0")} ]
              </span>
              <span className={styles.name}>{category.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
