import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.production);

export default function ProductionPage() {
  return <PageStub route={siteRoutes.production} />;
}
