import { productRoutes, siteRoutes } from "@/lib/routes";

/** Заглушка-обложка категории до появления реальных фото. */
const categoryCovers: Record<string, string> = {
  "/kuhni/": "/covers/cat-kitchen.jpg",
  "/shkafy/": "/covers/cat-wardrobe.jpg",
  "/garderobnye/": "/covers/cat-closet.jpg",
  "/mebel-dlya-vannoy/": "/covers/cat-bath.jpg",
  "/detskaya-mebel/": "/covers/cat-kids.jpg",
};

export const categoryNavigator = productRoutes.map((route, index) => ({
  href: route.href,
  title: route.title,
  cover: categoryCovers[route.href] ?? "/covers/cat-kitchen.jpg",
  index: index + 1,
}));

/** Индекс категорий для блока «Что производим». */
export const productionIndex = categoryNavigator;

export const values = [
  {
    id: "design",
    title: "Проектируем и согласовываем до производства",
    body: "Чертежи, материалы и узлы фиксируем до запуска в цех. Так вы видите результат заранее — и не платите за переделки «по факту».",
  },
  {
    id: "cost",
    title: "Понятная стоимость и этапность",
    body: "Смета и график привязаны к этапам: проект → производство → монтаж. Изменения обсуждаем до того, как они влияют на бюджет.",
  },
  {
    id: "production",
    title: "Собственное производство и профессиональный монтаж",
    body: "Изготавливаем у себя и ставим своей бригадой. Меньше посредников — короче путь от чертежа до посадки в размер.",
  },
  {
    id: "responsibility",
    title: "Одна ответственность за результат",
    body: "Один подрядчик отвечает за проект, качество изделий и монтаж. Не нужно сводить гарантии разных исполнителей.",
  },
] as const;

export const productionProof = [
  {
    title: "Производство",
    detail: "Цех, раскрой, кромление",
    note: "Своя база",
  },
  {
    title: "Детали",
    detail: "Стыки, кромки, фурнитура",
    note: "Узлы в размере",
  },
  {
    title: "Сборка",
    detail: "Предсборка и проверка",
    note: "До выезда",
  },
  {
    title: "Контроль",
    detail: "Многоступенчатая приёмка",
    note: "Перед монтажом",
  },
] as const;

export const workSteps = [
  {
    n: "01",
    title: "Обсуждение",
    checkpoint: "Задача, бюджетный контур, срок",
  },
  {
    n: "02",
    title: "Проектирование",
    checkpoint: "Планировка, узлы, материалы",
  },
  {
    n: "03",
    title: "Согласование",
    checkpoint: "Фиксация сметы и комплектации",
  },
  {
    n: "04",
    title: "Производство",
    checkpoint: "Контрольные точки по готовности",
  },
  {
    n: "05",
    title: "Монтаж",
    checkpoint: "Посадка, сдача, гарантия",
  },
] as const;

export const materialsPreview = [
  { title: "Шпон и массив", caption: "Живая текстура, спокойный тон", tone: "#3a2f28" },
  { title: "ЛМДФ / эмаль", caption: "Глухие фасады, точный цвет", tone: "#1a1714" },
  { title: "Камень и Compact", caption: "Столешницы под нагрузку", tone: "#2c221c" },
  { title: "Фурнитура", caption: "Петли, направляющие, системы", tone: "#241c18" },
  { title: "Кромка и стык", caption: "Чистота примыканий", tone: "#4a3b32" },
  { title: "Свет в мебели", caption: "Подсветка хранения и ниш", tone: "#161312" },
] as const;

export const risksSolutions = [
  {
    id: "expectations",
    risk: "Результат не совпадёт с ожиданиями",
    solution:
      "Изготавливаем мебель точно по утверждённому рендеру, а не просто похожее решение. Если проект включает комплектацию, реализуем интерьер в соответствии с проектом, а не заменяем позиции случайными аналогами.",
    mark: "Пр",
  },
  {
    id: "cost",
    risk: "Стоимость изменится в процессе",
    solution:
      "Фиксируем комплектацию и этапы проекта. Любые изменения согласовываются до того, как влияют на итоговую стоимость.",
    mark: "См",
  },
  {
    id: "measure",
    risk: "Ошибки появятся на замере или проектировании",
    solution:
      "Проводим профессиональный замер, проектируем под реальные параметры пространства и согласовываем решения до запуска в производство.",
    mark: "Зм",
  },
  {
    id: "build",
    risk: "Проблемы возникнут на производстве или монтаже",
    solution:
      "Мебель производим и собираем собственной командой, монтаж выполняют квалифицированные специалисты. Ответственность за установку остаётся на стороне производителя.",
    mark: "Мн",
  },
] as const;

export const journalPreview = [
  {
    title: "Как согласовать кухню, чтобы не переделывать на объекте",
    tag: "Проект",
    href: siteRoutes.process.href,
    cover: "/covers/journal-01.jpg",
  },
  {
    title: "Что влияет на стоимость встроенного шкафа",
    tag: "Смета",
    href: siteRoutes.materials.href,
    cover: "/covers/journal-02.jpg",
  },
  {
    title: "Комплексная меблировка: когда это выгоднее отдельных заказов",
    tag: "Проекты",
    href: siteRoutes.projects.href,
    cover: "/covers/journal-03.jpg",
  },
  {
    title: "Гардеробная: с чего начать планировку хранения",
    tag: "Хранение",
    href: siteRoutes.garderobnye.href,
    cover: "/covers/journal-04.jpg",
  },
  {
    title: "Фасады и столешницы: как выбрать материал под задачу",
    tag: "Материалы",
    href: siteRoutes.materials.href,
    cover: "/covers/journal-05.jpg",
  },
] as const;
