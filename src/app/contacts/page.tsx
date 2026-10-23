import { contact } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";
import styles from "./page.module.css";

export const metadata = pageMetadata(siteRoutes.contacts);

const mapsHref = `https://yandex.ru/maps/?text=${encodeURIComponent(contact.address)}`;

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
      <div className={styles.layout}>
        <header className={styles.head}>
          <h1 className={styles.title}>Контакты</h1>
        </header>

        <div className={styles.content}>
          <div className={styles.pitch}>
            <h2 className={styles.pitchTitle}>
              Создадим мебель такой, какой вы её задумали
            </h2>
            <p className={styles.pitchLead}>
              Пришлите дизайн-проект, визуализации или референсы — мы проработаем
              конструкцию и реализуем мебель в соответствии с согласованным
              решением.
            </p>
          </div>

          <div className={styles.channels}>
            <div className={styles.messengers}>
              <span className={styles.bar} aria-hidden="true" />
              <ul className={styles.messengerList} aria-label="Мессенджеры">
                {contact.socials.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={styles.messengerLink}
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

            <ul className={styles.directList} aria-label="Телефон и почта">
              {contact.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className={styles.detailLink}>
                    {phone.display}{" "}
                    <span className={styles.note}>{phone.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={contact.email.href} className={styles.detailLink}>
                  {contact.email.display}
                  <ArrowIcon />
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.meta}>
            <a
              href={mapsHref}
              className={styles.detailLink}
              target="_blank"
              rel="noreferrer"
            >
              <address className={styles.address}>{contact.address}</address>
              <ArrowIcon />
            </a>
            <p className={styles.hours}>{contact.hours}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
