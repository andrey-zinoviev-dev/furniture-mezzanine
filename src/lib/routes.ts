export type PageKind =
  | "home"
  | "product"
  | "portfolio"
  | "case"
  | "proof"
  | "info-commercial"
  | "b2b"
  | "corporate"
  | "contact";

export type SiteRoute = {
  href: string;
  title: string;
  kind: PageKind;
  kindLabel: string;
  description: string;
  /** Показывать в основной навигации */
  inNav?: boolean;
};

/**
 * Единый реестр публичных маршрутов.
 * Структура сайта: SEO + заявки, без лишних разделов.
 */
export const siteRoutes = {
  home: {
    href: "/",
    title: "Главная",
    kind: "home",
    kindLabel: "Главная коммерческая",
    description:
      "Индивидуальная мебель на заказ: кухни, шкафы, гардеробные и мебель для дома.",
    inNav: true,
  },
  kuhni: {
    href: "/kuhni/",
    title: "Кухни",
    kind: "product",
    kindLabel: "Продуктовая",
    description:
      "Кухни на заказ: проектирование, производство и монтаж под ваше пространство.",
    inNav: true,
  },
  shkafy: {
    href: "/shkafy/",
    title: "Шкафы",
    kind: "product",
    kindLabel: "Продуктовая",
    description: "Шкафы на заказ: встроенные и корпусные решения под размеры помещения.",
    inNav: true,
  },
  garderobnye: {
    href: "/garderobnye/",
    title: "Гардеробные",
    kind: "product",
    kindLabel: "Продуктовая",
    description: "Гардеробные системы на заказ: планировка хранения и изготовление.",
    inNav: true,
  },
  mebelDlyaVannoy: {
    href: "/mebel-dlya-vannoy/",
    title: "Мебель для ванной",
    kind: "product",
    kindLabel: "Продуктовая",
    description: "Мебель для ванной на заказ: влагостойкие материалы и точная посадка.",
    inNav: true,
  },
  detskayaMebel: {
    href: "/detskaya-mebel/",
    title: "Мебель для детской",
    kind: "product",
    kindLabel: "Продуктовая",
    description: "Мебель для детской на заказ: безопасные материалы и эргономика под рост ребёнка.",
    inNav: true,
  },
  projects: {
    href: "/projects/",
    title: "Проекты",
    kind: "portfolio",
    kindLabel: "Проектная / портфолио",
    description: "Портфолио реализованных проектов индивидуальной мебели.",
    inNav: true,
  },
  production: {
    href: "/production/",
    title: "Производство",
    kind: "proof",
    kindLabel: "Доказательная / информационно-коммерческая",
    description: "Собственное производство мебели: оборудование, контроль качества, сроки.",
    inNav: true,
  },
  process: {
    href: "/process/",
    title: "Процесс работы",
    kind: "info-commercial",
    kindLabel: "Информационно-коммерческая",
    description: "Как мы работаем: от замера и проекта до монтажа и гарантии.",
    inNav: true,
  },
  materials: {
    href: "/materials/",
    title: "Материалы и фурнитура",
    kind: "info-commercial",
    kindLabel: "Информационно-коммерческая",
    description: "Материалы и фурнитура: проверенные поставщики и варианты комплектации.",
    inNav: true,
  },
  designers: {
    href: "/designers/",
    title: "Дизайнерам",
    kind: "b2b",
    kindLabel: "B2B-коммерческая",
    description: "Сотрудничество с дизайнерами: производство по проектам и сопровождение.",
    inNav: true,
  },
  about: {
    href: "/about/",
    title: "О компании",
    kind: "corporate",
    kindLabel: "Корпоративная / доказательная",
    description: "О компании: опыт, подход к индивидуальной мебели и производству.",
    inNav: true,
  },
  contacts: {
    href: "/contacts/",
    title: "Контакты",
    kind: "contact",
    kindLabel: "Контактная",
    description: "Контакты и форма заявки на расчёт индивидуальной мебели.",
    inNav: true,
  },
} as const satisfies Record<string, SiteRoute>;

/** Продуктовые страницы (категории на главной и т.п.). */
export const productRoutes = [
  siteRoutes.kuhni,
  siteRoutes.shkafy,
  siteRoutes.garderobnye,
  siteRoutes.mebelDlyaVannoy,
  siteRoutes.detskayaMebel,
] as const;

/** Выпадающее меню «Мебель» в хедере (кухни — отдельная ссылка). */
export const furnitureNavRoutes = [
  siteRoutes.shkafy,
  siteRoutes.garderobnye,
  siteRoutes.mebelDlyaVannoy,
  siteRoutes.detskayaMebel,
] as const;

/** Выпадающее меню «Производство» в хедере. */
export const proofNavRoutes = [
  siteRoutes.production,
  siteRoutes.process,
  siteRoutes.materials,
] as const;

/**
 * Плоские ссылки верхней навигации.
 * Кухни, «Мебель» и «Производство» рендерятся отдельно в хедере.
 */
export const primaryNavRoutes = [
  siteRoutes.projects,
  siteRoutes.designers,
  siteRoutes.about,
  siteRoutes.contacts,
] as const;
