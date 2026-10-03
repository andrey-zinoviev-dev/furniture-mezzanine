import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.kuhni);

export default function KuhniPage() {
  return <PageStub route={siteRoutes.kuhni} />;
}
