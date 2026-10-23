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
      <header className={styles.header}>
        <h1 className={styles.title}>
          Создадим мебель такой, какой вы её задумали
        </h1>
        <p className={styles.lead}>
          Есть дизайн-проект, визуализации или референсы — пришлите их нам. Если пока есть только идея, этого достаточно, чтобы начать: проработаем решение и подготовим его к производству.
        </p>
      </header>

      <div className={styles.sections}>
        <section className={styles.row} aria-label="Связаться">
          <div className={styles.rowInner}>
            <p className={styles.rowLabel}>Связь</p>
            <ul className={styles.channelList}>
              {contact.socials.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.channelLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                    <ArrowIcon />
                  </a>
                </li>
              ))}
              {contact.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className={styles.channelLink}>
                    {phone.display}
                    <ArrowIcon />
                  </a>
                </li>
              ))}
              <li>
                <a href={contact.email.href} className={styles.channelLink}>
                  {contact.email.display}
                  <ArrowIcon />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.row} aria-label="Офис">
          <div className={styles.rowInner}>
            <p className={styles.rowLabel}>Офис</p>
            <div className={styles.officeCols}>
              <div>
                <p className={styles.colTitle}>Адрес</p>
                <a
                  href={contact.mapsUrl}
                  className={styles.officeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <address className={styles.address}>{contact.address}</address>
                </a>
              </div>

              <div>
                <p className={styles.colTitle}>Время работы</p>
                <p className={styles.officeText}>{contact.hours}</p>
              </div>

              <div>
                <p className={styles.colTitle}>Команда</p>
                <ul className={styles.teamList}>
                  {contact.phones.map((person) => (
                    <li key={person.href}>
                      <a href={person.href} className={styles.officeLink}>
                        {person.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
