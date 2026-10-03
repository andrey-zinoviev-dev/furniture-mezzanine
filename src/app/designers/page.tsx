import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.designers);

export default function DesignersPage() {
  return <PageStub route={siteRoutes.designers} />;
}
