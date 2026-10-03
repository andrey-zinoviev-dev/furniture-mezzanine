import { PageStub } from "@/components/page-stub";
import { pageMetadata } from "@/lib/metadata";
import { siteRoutes } from "@/lib/routes";

export const metadata = pageMetadata(siteRoutes.meblirovkaKvartiry);

export default function MeblirovkaKvartiryPage() {
  return <PageStub route={siteRoutes.meblirovkaKvartiry} />;
}
