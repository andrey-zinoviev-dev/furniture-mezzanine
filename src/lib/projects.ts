export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  /** Тон-заглушка под фото до появления реальных изображений */
  tone: string;
  /** Вариант типографики в мозаике */
  labelMode?: "top" | "bottom" | "side" | "outline";
  /** Задача клиента — для карточек доверия на главной */
  task?: string;
  /** Особенность пространства */
  space?: string;
  /** Решение */
  solution?: string;
  /** Показывать в блоке избранных на главной */
  featured?: boolean;
  /** Участвует в ленте «новые решения» */
  recent?: boolean;
};

/**
 * Заглушка данных портфолио.
 * Позже заменится на CMS / Sanity / файлы контента.
 */
export const projects: Project[] = [
  {
    slug: "kuhnya-loft-chernaya",
    title: "Кухня Loft",
    category: "Кухни",
    year: "2025",
    summary: "Линейная кухня с островом и глухими фасадами.",
    tone: "#1a1714",
    labelMode: "top",
    task: "Кухня с островом в открытой гостиной без визуального шума",
    space: "Длинная стена, несущая колонна, низкие потолки",
    solution: "Глухие фасады, остров как зонирование, техника в колонне",
    featured: true,
    recent: true,
  },
  {
    slug: "garderobnaya-walk-in",
    title: "Walk-in",
    category: "Гардеробные",
    year: "2025",
    summary: "Гардеробная с открытыми секциями и подсветкой.",
    tone: "#2c221c",
    labelMode: "side",
    task: "Отдельная гардеробная вместо шкафов по квартире",
    space: "Узкая комната 4,2 м² после перепланировки",
    solution: "Открытые секции, остров с ящиками, точечная подсветка",
    featured: true,
    recent: true,
  },
  {
    slug: "shkaf-kupe-yasen",
    title: "Шкаф-купе",
    category: "Шкафы",
    year: "2024",
    summary: "Встроенный шкаф в нишу, фасады ясень.",
    tone: "#3a2f28",
    labelMode: "outline",
    task: "Максимум хранения в нише у входной зоны",
    space: "Ниша 2800×600, перепад стены 12 мм",
    solution: "Встроенный купе в размер, фасады ясень, выравнивание по плоскости",
    featured: true,
  },
  {
    slug: "spalnya-komplekt",
    title: "Спальня",
    category: "Спальни",
    year: "2024",
    summary: "Кровать, прикроватные тумбы и стеновая панель.",
    tone: "#241c18",
    labelMode: "bottom",
    task: "Спальный комплект в одном материале и ритме",
    space: "Спальня 14 м², скос потолка у окна",
    solution: "Кровать, тумбы и стеновая панель как единый блок",
    featured: true,
    recent: true,
  },
  {
    slug: "stol-obedenniy",
    title: "Обеденный стол",
    category: "Столы",
    year: "2024",
    summary: "Массив дуба, нестандартная длина.",
    tone: "#4a3b32",
    labelMode: "top",
    task: "Стол на 8 человек без ощущения «офисной» столешницы",
    space: "Столовая зона 3,6 м в ширину",
    solution: "Массив дуба 3200 мм, скрытое усиление, тонкие опоры",
    recent: true,
  },
  {
    slug: "vannaya-tumba",
    title: "Тумба",
    category: "Ванная",
    year: "2025",
    summary: "Влагостойкая тумба под раковину.",
    tone: "#161312",
    labelMode: "side",
    task: "Тумба под накладную раковину с местом для хранения",
    space: "Ванная с тёплым полом и стояками в углу",
    solution: "Влагостойкий корпус, вырезы под коммуникации, мягкое закрывание",
    featured: true,
    recent: true,
  },
  {
    slug: "detskaya-zona",
    title: "Детская",
    category: "Детская",
    year: "2023",
    summary: "Кровать-чердак и система хранения.",
    tone: "#312820",
    labelMode: "outline",
    task: "Спальное место, стол и хранение в одной комнате",
    space: "Детская 11 м², два окна",
    solution: "Кровать-чердак, рабочая зона внизу, шкаф в нише",
  },
  {
    slug: "meblirovka-studii",
    title: "Студия",
    category: "Меблировка",
    year: "2025",
    summary: "Комплексная меблировка студии под ключ.",
    tone: "#1f1915",
    labelMode: "bottom",
    task: "Вся мебель студии в одном проекте и монтаже",
    space: "Студия 28 м², открытая планировка",
    solution: "Кухня, шкаф, стеллаж и ТВ-зона в одной системе материалов",
    featured: true,
    recent: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 4): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}

export function getRecentProjects(limit = 8): Project[] {
  const recent = projects.filter((project) => project.recent);
  return (recent.length > 0 ? recent : projects).slice(0, limit);
}
