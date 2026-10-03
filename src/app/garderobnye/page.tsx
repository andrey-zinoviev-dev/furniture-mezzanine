import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.garderobnye);

export default function GarderobnyePage() {
  return <PageStub route={siteRoutes.garderobnye} />;
}
