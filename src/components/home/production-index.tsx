"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { productionIndex } from "@/lib/home-content";
import styles from "./production-index.module.css";

/**
 * Услуги: слайд 50/50 — слева фото, справа подпись и навигация.
 * На мобиле: фото сверху, горизонтальный список, свайп между услугами.
 */
export function ProductionIndex() {
  const labelId = useId();
  const navRef = useRef<HTMLElement>(null);
  const pointerStartX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const total = productionIndex.length;
  const item = productionIndex[index];

  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>(
      `[data-nav-index="${index}"]`,
    );
    if (!nav || !active) return;

    // Keep scroll inside the nav; scrollIntoView also moves the page.
    const navRect = nav.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const delta =
      activeRect.left -
      navRect.left -
      (navRect.width - activeRect.width) / 2;
    nav.scrollBy({ left: delta, behavior: "smooth" });
  }, [index]);

  if (!item || total === 0) {
    return null;
  }

  const goPrev = () => setIndex((current) => (current - 1 + total) % total);
  const goNext = () => setIndex((current) => (current + 1) % total);

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  }

  function onPointerDown(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "mouse") return;
    pointerStartX.current = event.clientX;
  }

  function onPointerUp(event: PointerEvent<HTMLElement>) {
    if (pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(delta) < 48) return;
    if (delta < 0) goNext();
    else goPrev();
  }

  function onPointerCancel() {
    pointerStartX.current = null;
  }

  return (
    <section
      className={styles.section}
      aria-labelledby={labelId}
      aria-roledescription="карусель"
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <h2 id={labelId} className={styles.srOnly}>
        Что производим
      </h2>

      <div className={styles.panel} key={item.href}>
        <div
          className={styles.media}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <Link
            href={item.href}
            className={styles.mediaLink}
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              src={item.cover}
              alt=""
              fill
              sizes="(max-width: 1022px) 100vw, 50vw"
              className={styles.image}
              priority={index === 0}
            />
          </Link>
        </div>

        <div className={styles.copy}>
          <div className={styles.body}>
            <nav ref={navRef} className={styles.nav} aria-label="Категории">
              {productionIndex.map((slide, slideIndex) => (
                <button
                  key={slide.href}
                  type="button"
                  data-nav-index={slideIndex}
                  className={
                    slideIndex === index ? styles.navActive : styles.navItem
                  }
                  aria-current={slideIndex === index ? "true" : undefined}
                  onClick={() => setIndex(slideIndex)}
                >
                  {slide.title}
                </button>
              ))}
            </nav>

            <div className={styles.main}>
              <h3 className={styles.title}>{item.title}</h3>
              {item.description ? (
                <p className={styles.description}>{item.description}</p>
              ) : null}
              <Link href={item.href} className={styles.link}>
                Смотреть услугу
              </Link>
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.arrow}
                onClick={goPrev}
                aria-label="Предыдущая услуга"
              >
                ←
              </button>
              <span className={styles.divider} aria-hidden="true">
                |
              </span>
              <button
                type="button"
                className={styles.arrow}
                onClick={goNext}
                aria-label="Следующая услуга"
              >
                →
              </button>
            </div>

            <p className={styles.counter} aria-live="polite">
              {String(index + 1).padStart(2, "0")}
              <span aria-hidden="true"> / </span>
              {String(total).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
