/**
 * Единый источник контактных данных.
 * Использует страница /contacts; CTA только ведёт туда.
 */
export const contact = {
  address: "Москва, Новодмитровская улица, 5Ас1",
  hours: "ПН – ПТ 11–19",
  email: {
    display: "hello@mzn.design",
    href: "mailto:hello@mzn.design",
  },
  phones: [
    {
      label: "Алина",
      display: "+7 999 968-47-61",
      href: "tel:+79999684761",
    },
    {
      label: "Наталья",
      display: "+7 977 191-18-72",
      href: "tel:+79771911872",
    },
  ],
  socials: [
    {
      label: "Telegram",
      href: "https://t.me/mezzanine_design",
    },
    {
      label: "MAX",
      href: "https://max.ru/u/f9LHodD0cOJD7ugzHVZ0f2vBpalZvKq9uQjIPsvc0T5E0xQgzki3iS7dm5o",
    },
  ],
} as const;
