import { contact } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata = pageMetadata(siteRoutes.contacts);

function ArrowIcon() {
  return (
    <svg
      className={styles.arrow}
      viewBox="0 0 16 16"
      width="1em"
      height="1em"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3.5 12.5 12.5 3.5M5.5 3.5h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export default function ContactsPage() {
  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>Связь</p>
        <h1 className={styles.title}>Контакты</h1>
        <p className={styles.lead}>
          Обсудим задачу, сроки и формат работы. Можно позвонить, написать или
          оставить заявку — ответим в рабочее время.
        </p>
      </header>

      <div className={styles.grid}>
        <div>
          <p className={styles.colTitle}>Адрес</p>
          <address className={styles.address}>{contact.address}</address>
        </div>

        <div>
          <p className={styles.colTitle}>Связь</p>
          <ul className={styles.list}>
            {contact.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className={styles.link}>
                  {phone.display}{" "}
                  <span className={styles.note}>({phone.label})</span>
                  <ArrowIcon />
                </a>
              </li>
            ))}
            <li>
              <a href={contact.email.href} className={styles.link}>
                {contact.email.display}
                <ArrowIcon />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.colTitle}>Соцсети</p>
          <ul className={styles.list}>
            {contact.socials.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label}
                  <ArrowIcon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className={styles.formNote}>
        Форма заявки появится здесь позже. Пока удобнее связаться по телефону
        или почте.
      </p>
    </div>
  );
}
