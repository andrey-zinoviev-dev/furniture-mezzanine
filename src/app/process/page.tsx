import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.process);

export default function ProcessPage() {
  return <PageStub route={siteRoutes.process} />;
}
