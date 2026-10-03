import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.contacts);

export default function ContactsPage() {
  return (
    <PageStub route={siteRoutes.contacts}>
      <p>Здесь будет форма заявки и контактные данные.</p>
    </PageStub>
  );
}
