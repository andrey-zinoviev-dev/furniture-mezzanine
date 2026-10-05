/** Общие заглушки-фото для кадров галереи до реальных снимков. */
export const stubCovers = [
  "/covers/feat-01.jpg",
  "/covers/feat-02.jpg",
  "/covers/feat-03.jpg",
  "/covers/feat-04.jpg",
  "/covers/feat-05.jpg",
  "/covers/feat-06.jpg",
  "/covers/feat-07.jpg",
  "/covers/feat-08.jpg",
  "/covers/feat-09.jpg",
  "/covers/feat-10.jpg",
] as const;

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  /** Обложка-заглушка до появления реальных изображений */
  cover: string;
  /** Второй кадр для слайдера «новые решения» */
  detailCover?: string;
  /** Кадры для ленты избранных проектов */
  gallery?: string[];
  /** Вариант типографики в мозаике */
  labelMode?: "top" | "bottom" | "side" | "outline";
  /** Задача клиента — для карточек доверия на главной */
  task?: string;
  /** Особенность пространства */
  space?: string;
  /** Решение */
  solution?: string;
  /** Ориентир по бюджету (блок «новые решения») */
  budget?: string;
  /** Функция изделия / задачи */
  purpose?: string;
  /** Время изготовления */
  leadTime?: string;
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
    cover: "/covers/proj-kitchen-a.jpg",
    detailCover: "/covers/proj-kitchen-b.jpg",
    gallery: [
      "/covers/feat-01.jpg",
      "/covers/feat-02.jpg",
      "/covers/proj-kitchen-a.jpg",
      "/covers/feat-03.jpg",
      "/covers/proj-kitchen-b.jpg",
    ],
    labelMode: "top",
    task: "Кухня с островом в открытой гостиной без визуального шума",
    space: "Длинная стена, несущая колонна, низкие потолки",
    solution: "Глухие фасады, остров как зонирование, техника в колонне",
    budget: "от 920 000 ₽",
    purpose: "Кухня + остров",
    leadTime: "8–10 недель",
    featured: true,
    recent: true,
  },
  {
    slug: "garderobnaya-walk-in",
    title: "Walk-in",
    category: "Гардеробные",
    year: "2025",
    summary: "Гардеробная с открытыми секциями и подсветкой.",
    cover: "/covers/proj-closet-a.jpg",
    detailCover: "/covers/proj-closet-b.jpg",
    gallery: [
      "/covers/feat-04.jpg",
      "/covers/proj-closet-a.jpg",
      "/covers/feat-05.jpg",
      "/covers/proj-closet-b.jpg",
      "/covers/feat-06.jpg",
    ],
    labelMode: "side",
    task: "Отдельная гардеробная вместо шкафов по квартире",
    space: "Узкая комната 4,2 м² после перепланировки",
    solution: "Открытые секции, остров с ящиками, точечная подсветка",
    budget: "от 640 000 ₽",
    purpose: "Хранение",
    leadTime: "6–8 недель",
    featured: true,
    recent: true,
  },
  {
    slug: "shkaf-kupe-yasen",
    title: "Шкаф-купе",
    category: "Шкафы",
    year: "2024",
    summary: "Встроенный шкаф в нишу, фасады ясень.",
    cover: "/covers/proj-wardrobe-a.jpg",
    detailCover: "/covers/proj-wardrobe-b.jpg",
    gallery: [
      "/covers/proj-wardrobe-a.jpg",
      "/covers/feat-07.jpg",
      "/covers/proj-wardrobe-b.jpg",
      "/covers/feat-08.jpg",
      "/covers/feat-09.jpg",
    ],
    labelMode: "outline",
    task: "Максимум хранения в нише у входной зоны",
    space: "Ниша 2800×600, перепад стены 12 мм",
    solution: "Встроенный купе в размер, фасады ясень, выравнивание по плоскости",
    budget: "от 380 000 ₽",
    purpose: "Встроенное хранение",
    leadTime: "5–7 недель",
    featured: true,
  },
  {
    slug: "spalnya-komplekt",
    title: "Спальня",
    category: "Спальни",
    year: "2024",
    summary: "Кровать, прикроватные тумбы и стеновая панель.",
    cover: "/covers/proj-bedroom-a.jpg",
    detailCover: "/covers/proj-bedroom-b.jpg",
    gallery: [
      "/covers/proj-bedroom-a.jpg",
      "/covers/feat-10.jpg",
      "/covers/proj-bedroom-b.jpg",
      "/covers/feat-01.jpg",
      "/covers/feat-04.jpg",
    ],
    labelMode: "bottom",
    task: "Спальный комплект в одном материале и ритме",
    space: "Спальня 14 м², скос потолка у окна",
    solution: "Кровать, тумбы и стеновая панель как единый блок",
    budget: "от 510 000 ₽",
    purpose: "Спальный комплект",
    leadTime: "7–9 недель",
    featured: true,
    recent: true,
  },
  {
    slug: "stol-obedenniy",
    title: "Обеденный стол",
    category: "Столы",
    year: "2024",
    summary: "Массив дуба, нестандартная длина.",
    cover: "/covers/proj-table-a.jpg",
    detailCover: "/covers/proj-table-b.jpg",
    gallery: [
      "/covers/proj-table-a.jpg",
      "/covers/feat-02.jpg",
      "/covers/proj-table-b.jpg",
      "/covers/feat-05.jpg",
      "/covers/feat-08.jpg",
    ],
    labelMode: "top",
    task: "Стол на 8 человек без ощущения «офисной» столешницы",
    space: "Столовая зона 3,6 м в ширину",
    solution: "Массив дуба 3200 мм, скрытое усиление, тонкие опоры",
    budget: "от 210 000 ₽",
    purpose: "Обеденная зона",
    leadTime: "4–6 недель",
    recent: true,
  },
  {
    slug: "vannaya-tumba",
    title: "Тумба",
    category: "Ванная",
    year: "2025",
    summary: "Влагостойкая тумба под раковину.",
    cover: "/covers/proj-bath-a.jpg",
    detailCover: "/covers/proj-bath-b.jpg",
    gallery: [
      "/covers/proj-bath-a.jpg",
      "/covers/feat-03.jpg",
      "/covers/proj-bath-b.jpg",
      "/covers/feat-06.jpg",
      "/covers/feat-09.jpg",
    ],
    labelMode: "side",
    task: "Тумба под накладную раковину с местом для хранения",
    space: "Ванная с тёплым полом и стояками в углу",
    solution: "Влагостойкий корпус, вырезы под коммуникации, мягкое закрывание",
    budget: "от 145 000 ₽",
    purpose: "Ванная",
    leadTime: "3–5 недель",
    featured: true,
    recent: true,
  },
  {
    slug: "detskaya-zona",
    title: "Детская",
    category: "Детская",
    year: "2023",
    summary: "Кровать-чердак и система хранения.",
    cover: "/covers/proj-kids-a.jpg",
    detailCover: "/covers/cat-kids.jpg",
    gallery: [
      "/covers/proj-kids-a.jpg",
      "/covers/cat-kids.jpg",
      "/covers/feat-07.jpg",
      "/covers/feat-10.jpg",
      "/covers/proj-bedroom-b.jpg",
    ],
    labelMode: "outline",
    task: "Спальное место, стол и хранение в одной комнате",
    space: "Детская 11 м², два окна",
    solution: "Кровать-чердак, рабочая зона внизу, шкаф в нише",
    budget: "от 420 000 ₽",
    purpose: "Детская зона",
    leadTime: "6–8 недель",
  },
  {
    slug: "meblirovka-studii",
    title: "Студия",
    category: "Меблировка",
    year: "2025",
    summary: "Комплексная меблировка студии под ключ.",
    cover: "/covers/proj-studio-a.jpg",
    detailCover: "/covers/proj-studio-b.jpg",
    gallery: [
      "/covers/proj-studio-a.jpg",
      "/covers/feat-08.jpg",
      "/covers/proj-studio-b.jpg",
      "/covers/feat-02.jpg",
      "/covers/feat-04.jpg",
    ],
    labelMode: "bottom",
    task: "Вся мебель студии в одном проекте и монтаже",
    space: "Студия 28 м², открытая планировка",
    solution: "Кухня, шкаф, стеллаж и ТВ-зона в одной системе материалов",
    budget: "от 1 450 000 ₽",
    purpose: "Комплексная меблировка",
    leadTime: "10–14 недель",
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
