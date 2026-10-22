"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  mobileNavItems,
  type MobileNavGroup,
  type MobileNavItem,
} from "@/lib/routes";
import styles from "./mobile-nav.module.css";

type Panel =
  | { kind: "root" }
  | { kind: "group"; group: MobileNavGroup };

type Direction = "forward" | "back" | "none";

function isGroup(item: MobileNavItem): item is MobileNavGroup {
  return item.type === "group";
}

export function MobileNav() {
  const panelId = useId();
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState<Panel>({ kind: "root" });
  const [direction, setDirection] = useState<Direction>("none");

  const depth = panel.kind === "root" ? 0 : 1;

  const close = useCallback(() => {
    setOpen(false);
    setPanel({ kind: "root" });
    setDirection("none");
  }, []);

  const toggle = useCallback(() => {
    setOpen((prev) => {
      if (prev) {
        setPanel({ kind: "root" });
        setDirection("none");
        return false;
      }
      setPanel({ kind: "root" });
      setDirection("none");
      return true;
    });
  }, []);

  const goToGroup = useCallback((group: MobileNavGroup) => {
    setDirection("forward");
    setPanel({ kind: "group", group });
  }, []);

  const goBack = useCallback(() => {
    setDirection("back");
    setPanel({ kind: "root" });
  }, []);

  useEffect(() => {
    close();
  }, [pathname, close]);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        toggleRef.current?.focus();
      }
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    toggleRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const items =
    panel.kind === "root"
      ? mobileNavItems
      : panel.group.children.map(
          (child): MobileNavItem => ({
            type: "link",
            href: child.href,
            title: child.title,
          }),
        );

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={toggle}
      >
        {open ? (
          <span className={styles.toggleClose} aria-hidden="true">
            ×
          </span>
        ) : (
          <span className={styles.toggleLines} aria-hidden="true" />
        )}
      </button>

      {open ? (
        <div
          id={panelId}
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Навигация"
        >
          <div className={styles.body}>
            <ul
              key={panel.kind === "root" ? "root" : panel.group.id}
              className={styles.list}
              data-direction={direction}
              role="list"
            >
              {items.map((item) => (
                <li key={isGroup(item) ? item.id : item.href}>
                  {isGroup(item) ? (
                    <button
                      type="button"
                      className={styles.item}
                      onClick={() => goToGroup(item)}
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={styles.item}
                      onClick={close}
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {depth > 0 ? (
              <button
                type="button"
                className={styles.back}
                onClick={goBack}
              >
                ← назад
              </button>
            ) : (
              <div className={styles.footerSpacer} aria-hidden="true" />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
