export type PageKind =
  | "home"
  | "product"
  | "service"
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
      "Индивидуальная мебель на заказ: кухни, шкафы, гардеробные и меблировка квартиры.",
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
  stoly: {
    href: "/stoly/",
    title: "Столы",
    kind: "product",
    kindLabel: "Продуктовая",
    description: "Столы на заказ: обеденные, рабочие и решения нестандартных размеров.",
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
    title: "Детская мебель",
    kind: "product",
    kindLabel: "Продуктовая",
    description: "Детская мебель на заказ: безопасные материалы и эргономика под рост ребёнка.",
    inNav: true,
  },
  mebelDlyaSpalni: {
    href: "/mebel-dlya-spalni/",
    title: "Мебель для спальни",
    kind: "product",
    kindLabel: "Продуктовая",
    description: "Мебель для спальни на заказ: кровати, системы хранения и комплекты.",
    inNav: true,
  },
  meblirovkaKvartiry: {
    href: "/meblirovka-kvartiry/",
    title: "Меблировка квартиры",
    kind: "service",
    kindLabel: "Коммерческая услуга",
    description:
      "Комплексная меблировка квартиры: единый проект, производство и монтаж.",
    inNav: true,
  },
  projects: {
    href: "/projects/",
    title: "Все проекты",
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

export const productRoutes = [
  siteRoutes.kuhni,
  siteRoutes.shkafy,
  siteRoutes.garderobnye,
  siteRoutes.stoly,
  siteRoutes.mebelDlyaVannoy,
  siteRoutes.detskayaMebel,
  siteRoutes.mebelDlyaSpalni,
] as const;

/** Верхнее меню без продуктовых страниц — они в группе «Мебель». */
export const primaryNavRoutes = [
  siteRoutes.meblirovkaKvartiry,
  siteRoutes.projects,
  siteRoutes.production,
  siteRoutes.process,
  siteRoutes.materials,
  siteRoutes.designers,
  siteRoutes.about,
  siteRoutes.contacts,
] as const;
