import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.stoly);

export default function StolyPage() {
  return <PageStub route={siteRoutes.stoly} />;
}
