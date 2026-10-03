import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.shkafy);

export default function ShkafyPage() {
  return <PageStub route={siteRoutes.shkafy} />;
}
