import type { CSSProperties, ReactNode } from "react";
import styles from "./golden-grid.module.css";

type GoldenGridProps = {
  children: ReactNode;
  className?: string;
};

type GoldenGridCellBase = {
  children: ReactNode;
  className?: string;
  /** Линия старта колонки (1–12). По умолчанию 1. */
  start?: number;
};

type GoldenGridCellProps =
  | (GoldenGridCellBase & {
      /** Сколько колонок занять (1–12). */
      span?: number;
      end?: never;
    })
  | (GoldenGridCellBase & {
      span?: never;
      /** Линия конца (2–13 или -1 = до правого края). */
      end?: number;
    });

function cx(...parts: Array<string | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/** 12-колоночная сетка для асимметричного контента на десктопе. */
export function GoldenGrid({ children, className }: GoldenGridProps) {
  return <div className={cx(styles.grid, className)}>{children}</div>;
}

function resolveColumn({
  start = 1,
  span,
  end,
}: {
  start?: number;
  span?: number;
  end?: number;
}): string {
  if (end != null) {
    return `${start} / ${end}`;
  }
  if (span != null) {
    return `${start} / span ${span}`;
  }
  return `${start} / -1`;
}

/**
 * Ячейка золотой сетки.
 * Desktop: `start` + `span` или `start` + `end`.
 * Mobile (≤1022): на всю ширину.
 *
 * @example
 * <GoldenGridCell start={6} span={7}>…</GoldenGridCell>
 * <GoldenGridCell start={1} end={5}>…</GoldenGridCell>
 */
export function GoldenGridCell({
  children,
  className,
  start = 1,
  span,
  end,
}: GoldenGridCellProps) {
  const style = {
    "--gg-col": resolveColumn({ start, span, end }),
  } as CSSProperties;

  return (
    <div className={cx(styles.cell, className)} style={style}>
      {children}
    </div>
  );
}
